#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderCoverImage } from "./render-cover.mjs";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const POSTS_DIR = path.join(ROOT, "content", "posts");
const TOPICS_PATH = path.join(ROOT, "content", "topics.json");

// content/posts/ can be empty (fresh repo, or after a wipe) and git does not
// track empty directories -- a fresh checkout would then be missing the
// directory entirely, crashing every readdirSync(POSTS_DIR) call below.
fs.mkdirSync(POSTS_DIR, { recursive: true });

// Kept as plain constants here (not imported from lib/site.ts) since this
// script runs under plain Node, which can't import a TypeScript module
// without a loader.
const SITE = {
  name: "IPTV Kaufen",
  url: "https://iptvkaufen-tv.site",
  description:
    "IPTV Kaufen ist ein IPTV-Abonnementdienst für Deutschland, Österreich und die Schweiz: Live-TV, Filme und Serien in HD/4K, mit sofortiger Aktivierung und 24/7 WhatsApp-Support.",
};

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const countArg = args.find((a) => a.startsWith("--count="));
const COUNT = Number(countArg ? countArg.split("=")[1] : process.env.ARTICLES_PER_RUN ?? 1);
const getArg = (name) => {
  const a = args.find((x) => x.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : "";
};
const CUSTOM_TOPIC = getArg("topic");
const CUSTOM_ANGLE = getArg("angle");
const CUSTOM_CATEGORY = getArg("category");

// Same paid-model choice as the owner's other IPTV sites: reliable and cheap
// enough (well under a cent per article) that it beats chasing free-tier
// capacity across providers.
const FALLBACK_MODELS = process.env.ARTICLE_MODEL
  ? [process.env.ARTICLE_MODEL]
  : ["deepseek/deepseek-v4-flash"];
const API_KEY = process.env.OPENROUTER_API_KEY;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (!API_KEY && !DRY_RUN) {
  console.error("Missing OPENROUTER_API_KEY (set it in the environment, or run with --dry-run to test topic selection only).");
  process.exit(1);
}

// Cover images are rendered from AI-generated template backgrounds
// (content/cover-templates/ + render-cover.mjs) with the post's exact
// target keyword baked in as headline text via code (sharp + SVG) --
// zero incremental cost or garbled-text risk per post.

const CATEGORY_LABELS = {
  install: "Installation",
  device: "Geräte",
  sport: "Sport",
  pricing: "Preise",
  technique: "Problemlösung",
  comparatif: "Vergleich",
  general: "Ratgeber",
};

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function loadTopics() {
  return JSON.parse(fs.readFileSync(TOPICS_PATH, "utf8"));
}

// Concurrent runs (local testing, the daily cron) each load-mutate-save this
// file independently, then get reconciled via git merges -- which can leave
// duplicate entries for the same keyword (a stale "pending" copy alongside
// the real "done" one) if two runs picked the same topic before either had
// pushed. Deduping on every save keeps this self-healing instead of
// accumulating duplicates over time.
function dedupeTopics(topics) {
  const rank = { done: 3, error: 1, pending: 0 };
  const byKeyword = new Map();
  for (const t of topics) {
    const existing = byKeyword.get(t.keyword);
    if (!existing || (rank[t.status] || 0) > (rank[existing.status] || 0)) {
      byKeyword.set(t.keyword, t);
    }
  }
  return [...byKeyword.values()];
}

function saveTopics(topics) {
  fs.writeFileSync(TOPICS_PATH, JSON.stringify(dedupeTopics(topics), null, 2) + "\n");
}

function existingSlugs() {
  return new Set(
    fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""))
  );
}

function existingPosts() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(POSTS_DIR, f), "utf8")));
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Deterministic, code-controlled link + emphasis insertion -- the model only
// ever writes plain prose. This keeps hrefs limited to real internal routes
// and a small vetted external whitelist, so a hallucinated URL can never end
// up on the site. Ordered longest/most-specific phrase first: overlap
// resolution below prefers earlier-starting, longer matches.
const INTERNAL_LINKS = [
  { pattern: /IPTV[- ]Abonnement/i, href: "/iptv-abonnement", type: "internal" },
  { pattern: /IPTV[- ]Österreich/i, href: "/iptv-oesterreich", type: "internal" },
  { pattern: /Installationsanleitung/i, href: "/installationsanleitung", type: "internal" },
  { pattern: /\bFAQ\b/i, href: "/faq", type: "internal" },
];
const MAX_INTERNAL_LINKS = 3;

const EXTERNAL_LINKS = [
  { pattern: /\b(Mbps|Internetgeschwindigkeit|Bandbreite)\b/i, href: "https://www.speedtest.net/", rel: "noopener noreferrer", type: "external" },
  { pattern: /\bIPTV\b/, href: "https://de.wikipedia.org/wiki/IPTV", rel: "noopener noreferrer", type: "external" },
];
const MAX_EXTERNAL_LINKS = 1;

// Not links -- just bold emphasis on brand-critical phrases, same
// non-overlapping mechanism so it never collides with a link span.
const BOLD_PHRASES = [
  { pattern: /IPTV Kaufen/, type: "bold" },
  { pattern: /IPTV Deutschland/i, type: "bold" },
];
const MAX_BOLD = 4;

// Appended once per article. Deliberately phrased so at least one of these
// patterns always matches, guaranteeing a minimum internal + external link
// even if the model's own prose never happened to contain a matching phrase.
const GUARANTEE_SENTENCES = [
  "Sieh dir unser IPTV-Abonnement für die aktuellen Pakete an und wähle das Angebot, das zu dir passt.",
  "Möchtest du mehr darüber erfahren, wie IPTV genau funktioniert, kannst du zusätzliche Informationen online nachlesen.",
];

function findMatches(text, candidates) {
  const found = [];
  for (const candidate of candidates) {
    const m = text.match(candidate.pattern);
    if (m) found.push({ start: m.index, end: m.index + m[0].length, text: m[0], candidate });
  }
  found.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  const accepted = [];
  let lastEnd = -1;
  for (const m of found) {
    if (m.start >= lastEnd) {
      accepted.push(m);
      lastEnd = m.end;
    }
  }
  return accepted;
}

function applyMatches(text, matches) {
  let result = "";
  let cursor = 0;
  for (const m of matches) {
    result += text.slice(cursor, m.start);
    if (m.candidate.type === "bold") {
      result += `<strong>${m.text}</strong>`;
    } else {
      const relAttr = m.candidate.rel ? ` target="_blank" rel="${m.candidate.rel}"` : "";
      result += `<a href="${m.candidate.href}"${relAttr}>${m.text}</a>`;
    }
    cursor = m.end;
  }
  return result + text.slice(cursor);
}

function createAnnotator(allCandidates) {
  const remaining = [...allCandidates];
  const usedCount = { internal: 0, external: 0, bold: 0 };
  const maxByType = { internal: MAX_INTERNAL_LINKS, external: MAX_EXTERNAL_LINKS, bold: MAX_BOLD };

  function annotate(texts) {
    return texts.map((text) => {
      const available = remaining.filter((c) => usedCount[c.type] < maxByType[c.type]);
      if (available.length === 0) return text;

      const matches = findMatches(text, available);
      if (matches.length === 0) return text;

      for (const m of matches) {
        usedCount[m.candidate.type]++;
        remaining.splice(remaining.indexOf(m.candidate), 1);
      }
      return applyMatches(text, matches);
    });
  }

  return { annotate, usedCount };
}

function findRelatedPost(category, excludeSlug) {
  const candidates = existingPosts().filter((p) => p.category === category && p.slug !== excludeSlug);
  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function annotateSections(sections, annotator) {
  const flatRefs = [];
  sections.forEach((s, si) => {
    s.body.forEach((_, pi) => flatRefs.push(["body", si, pi]));
    s.list.forEach((_, li) => flatRefs.push(["list", si, li]));
  });
  const flatTexts = flatRefs.map(([kind, si, i]) => sections[si][kind][i]);
  const annotated = annotator.annotate(flatTexts);
  flatRefs.forEach(([kind, si, i], idx) => {
    sections[si][kind][i] = annotated[idx];
  });
}

function buildLinkedSections(rawSections, { slug, category }) {
  const sections = rawSections.map((s) => ({
    heading: escapeHtml(s.heading),
    body: (s.body || []).map(escapeHtml),
    list: (s.list || []).map(escapeHtml),
  }));

  const annotator = createAnnotator([...INTERNAL_LINKS, ...EXTERNAL_LINKS, ...BOLD_PHRASES]);
  annotateSections(sections, annotator);

  const related = findRelatedPost(category, slug);
  const closingBody = [];
  if (annotator.usedCount.internal === 0) closingBody.push(GUARANTEE_SENTENCES[0]);
  if (annotator.usedCount.external === 0) closingBody.push(GUARANTEE_SENTENCES[1]);
  if (related) {
    closingBody.push(
      `Lies auch unseren Artikel über <a href="/blog/${related.slug}">${escapeHtml(related.title)}</a>.`
    );
  }

  if (closingBody.length > 0) {
    const closingSection = { heading: "Mehr erfahren?", body: closingBody, list: [] };
    annotateSections([closingSection], annotator);
    sections.push(closingSection);
  }

  return sections;
}

// Extract the FIRST complete, balanced JSON value from a model response.
function extractJSON(text) {
  const cleaned = text.replace(/```json/gi, "").replace(/```/g, "");
  const start = cleaned.search(/[\{\[]/);
  if (start === -1) return null;
  const open = cleaned[start];
  const close = open === "{" ? "}" : "]";
  let depth = 0, inStr = false, esc = false;
  for (let i = start; i < cleaned.length; i++) {
    const c = cleaned[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) return cleaned.slice(start, i + 1);
    }
  }
  return null;
}

function parseModelJSON(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch {
    const repaired = jsonStr.replace(/,\s*([}\]])/g, "$1");
    return JSON.parse(repaired);
  }
}

async function callModelJSON(prompt, validate, maxTokens = 3000) {
  const attempts = [];

  for (const model of FALLBACK_MODELS) {
    let reason = "unknown error";
    let rateLimited = false;

    for (let attempt = 1; attempt <= 2; attempt++) {
      let res;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 90_000);
      try {
        res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          signal: controller.signal,
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${API_KEY}`,
            "http-referer": SITE.url,
            "x-title": SITE.name,
          },
          body: JSON.stringify({
            model,
            max_tokens: maxTokens,
            response_format: { type: "json_object" },
            messages: [{ role: "user", content: prompt }],
          }),
        });
      } catch (netErr) {
        reason = netErr.name === "AbortError" ? "timed out after 90s (no response)" : `network error: ${netErr.message}`;
        if (attempt < 2) { await sleep(2000 * attempt); continue; }
        break;
      } finally {
        clearTimeout(timer);
      }

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content ?? "";
        const jsonStr = extractJSON(text);
        if (jsonStr) {
          try {
            const parsed = parseModelJSON(jsonStr);
            if (!validate || validate(parsed)) return parsed;
            reason = "returned JSON in the wrong shape";
          } catch (parseErr) {
            reason = `JSON parse failed: ${parseErr.message}`;
          }
        } else {
          reason = `no JSON found in output: ${text.slice(0, 120)}`;
        }
        if (attempt < 2) { await sleep(1500); continue; }
        break;
      }

      rateLimited = res.status === 429;
      reason = `HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`;

      if (rateLimited && attempt < 2) {
        await sleep(3000 * attempt);
        continue;
      }
      break;
    }
    attempts.push({ model, reason, rateLimited });
  }

  const rateLimitedCount = attempts.filter((a) => a.rateLimited).length;
  const summary = attempts.map((a) => `  - ${a.model}: ${a.reason}`).join("\n");
  throw new Error(
    `All ${attempts.length} fallback model(s) failed (${rateLimitedCount} rate-limited):\n${summary}`
  );
}

async function generateArticle(topic) {
  const prompt = `Du bist ein erfahrener SEO-Copywriter für ${SITE.name}, einen IPTV-Abonnementdienst für Deutschland, Österreich und die Schweiz.
Beschreibung der Seite: ${SITE.description}

Schreibe einen langen, fundierten und SEO-optimierten Blogartikel auf Deutsch zum folgenden Thema:
Thema: "${topic.keyword}"
Blickwinkel: ${topic.angle}

Ziel: Dieser Artikel muss vollständiger und nützlicher sein als das, was Mitbewerber schreiben (meist
900-1300 Wörter). Strebe einen echten Referenzartikel an, keinen künstlich aufgeblähten Text.

Erforderliche Struktur (wie ein echter professioneller Blogartikel, niemals eine Textwand):
- Ein "excerpt": 1 zusammenfassender Einleitungssatz (max. 160 Zeichen), auch als Intro oben im Artikel verwendet.
- Genau 8 "sections", jeweils mit:
  - "heading": eine spezifische, konkrete H2-Zwischenüberschrift (z. B. "Ursache 1: Problem mit der Internetverbindung"), niemals generisch wie "Einleitung" oder "Fazit".
  - "body": 3 bis 4 AUSGEARBEITETE Absätze mit je 4 bis 6 Sätzen (etwa 220-280 Wörter für den gesamten Abschnitt) -- erkläre das "Warum" gründlich (Mechanismus, Grund, Kontext, konkrete Folge), niemals nur 1-2 oberflächliche Sätze pro Absatz.
  - "list" (optional, aber empfohlen wenn relevant): eine Aufzählungsliste mit 3 bis 6 konkreten Schritten/Punkten. Lass ein leeres Array [] stehen, wenn für diesen Abschnitt nicht relevant.
- "faq": 4 bis 6 Fragen/Antworten speziell zu DIESEM Thema (keine generischen Seitenfragen) -- echte Fragen, die ein an "${topic.keyword}" interessierter Leser stellen würde, mit vollständigen Antworten von je 3-5 Sätzen (keine knappen Ein-Satz-Antworten).
- Mit 8 Abschnitten von je etwa 250 Wörtern sollte der Gesamttext (ohne FAQ) natürlich auf 1800 bis 2500 Wörter kommen. Kommst du ans Ende eines Abschnitts und ist er kürzer als 200 Wörter, arbeite ihn weiter aus, bevor du zum nächsten Abschnitt übergehst -- kürze niemals, um "schnell fertig zu sein".

Inhaltliche Anforderungen:
- Informativer, sachkundiger und nützlicher Ton, niemals irreführend. Erfinde keine Statistiken oder Kooperationen. Keinerlei Bewerbung von oder Anleitung zu Piraterie oder Urheberrechtsumgehung; bleibe auf die legale Nutzung eines IPTV-Abonnements fokussiert.
- Erwähne auf natürliche Weise "IPTV Kaufen" und "IPTV Abonnement" ohne übermäßige oder künstliche Wiederholung. Der Dienst ist mit mehreren IPTV-Apps kompatibel (IPTV Smarters, TiviMate, GSE Smart IPTV, Smart IPTV) -- du darfst diese namentlich nennen, wo relevant, aber "IPTV Kaufen" bezieht sich auf das Abonnement selbst, nicht auf eine App.
- Variiere Wortschatz und Satzbau zwischen den Abschnitten; wiederhole nicht bei jedem Abschnitt dieselbe Eröffnungssatzstruktur.
- Präziser und einprägsamer Titel (idealerweise 60-70 Zeichen).
- "coverAlt": Bildbeschreibung auf Deutsch für Barrierefreiheit.

Deine Antwort muss direkt mit dem Zeichen { beginnen und mit dem Zeichen } enden. Kein Text, keine Begründung, kein Markdown davor oder danach. Gültiges JSON-Objekt in genau diesem Format:
{"title": "...", "excerpt": "...", "coverAlt": "...", "readTime": 9, "sections": [{"heading": "...", "body": ["Absatz 1", "Absatz 2"], "list": ["Schritt 1", "Schritt 2", "Schritt 3"]}, ...], "faq": [{"q": "...", "a": "..."}, ...]}`;

  const countWords = (a) =>
    a.sections.flatMap((s) => [s.heading, ...(s.body || []), ...(s.list || [])])
      .join(" ").replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;

  const validate = (a) =>
    a && typeof a.title === "string" && a.title.trim().length > 0 &&
    Array.isArray(a.sections) && a.sections.length >= 6 &&
    a.sections.every((s) => s && typeof s.heading === "string" && Array.isArray(s.body)) &&
    Array.isArray(a.faq) && a.faq.length >= 3 &&
    a.faq.every((f) => f && typeof f.q === "string" && typeof f.a === "string") &&
    countWords(a) >= 1500;
  // Successful runs already use 5000-5900 of the previous 7000-token budget
  // for body content alone (measured directly against real published posts)
  // -- FAQ, headings, and JSON structural overhead sit on top of that, so a
  // longer-than-usual article (or a verbose FAQ) had very little room before
  // getting cut off mid-response, producing unbalanced/truncated JSON that
  // extractJSON() correctly rejects as "no JSON found". Real headroom now.
  return callModelJSON(prompt, validate, 10000);
}

async function isCoherent(sections) {
  const sample = sections
    .slice(0, 4)
    .flatMap((s) => [s.heading, ...(s.body || [])])
    .join("\n\n")
    .replace(/<[^>]+>/g, "");
  const prompt = `Unten steht ein Ausschnitt eines deutschsprachigen Artikels. Antworte ausschließlich mit einem JSON-Objekt.
Wenn der Text grammatikalisch korrekt und logisch kohärent von Anfang bis Ende ist, antworte mit {"coherent": true}.
Wenn er unverständliche Sätze, Unsinn, erfundene Wörter oder Bedeutungsbrüche enthält, antworte mit {"coherent": false}.

Ausschnitt:
"""${sample}"""

Antworte nur mit dem JSON, sonst nichts.`;

  try {
    const result = await callModelJSON(prompt);
    return result.coherent !== false;
  } catch {
    return true;
  }
}

async function topUpTopics(topics, needed) {
  const known = topics.map((t) => t.keyword);
  const prompt = `Du schlägst Ideen für SEO-Blogartikel auf Deutsch vor für ${SITE.name}, einen IPTV-Abonnementdienst für Deutschland, Österreich und die Schweiz.

Schlage ${needed} neue Artikelthemen vor, die sich von den unten bereits behandelten Themen unterscheiden (keine Duplikate oder Beinahe-Umformulierungen):
${known.map((k) => `- ${k}`).join("\n")}

Jedes Thema muss eine Kategorie aus folgenden haben: install, device, sport, pricing, technique, comparatif, general.

Antworte AUSSCHLIESSLICH mit einem gültigen JSON-Array, ohne Markdown oder Text drumherum, in genau diesem Format:
[{"keyword": "...", "angle": "...", "category": "..."}, ...]`;

  // Every callModelJSON request sets response_format: json_object, which
  // forces the model to return a JSON *object* at the top level -- fine for
  // every other prompt in this file (they all ask for an object), but this
  // is the one prompt that wants a bare array. Root-caused in production
  // (2026-08-15 through -18: every single day's brainstorm attempt failed,
  // so the queue silently ran dry and the daily cron did nothing while still
  // reporting green/"success"): with `needed` == 1 the model complies with
  // the object constraint by returning ONE topic as a bare object --
  // {"keyword": ..., "angle": ..., "category": ...} -- not wrapped in an
  // array or in a {"topics": [...]} container. Neither of those first two
  // shapes is an array, so unwrap() needs a third case: if the object itself
  // already looks like a single topic, wrap it in a 1-element array.
  const isTopicShape = (t) => t && typeof t.keyword === "string" && typeof t.category === "string";
  const isValidTopicArray = (v) => Array.isArray(v) && v.every(isTopicShape);

  const unwrap = (parsed) => {
    if (isValidTopicArray(parsed)) return parsed;
    if (isTopicShape(parsed)) return [parsed];
    if (parsed && typeof parsed === "object") {
      const arr = Object.values(parsed).find(isValidTopicArray);
      if (arr) return arr;
    }
    return parsed;
  };

  const newTopics = await callModelJSON(prompt, (parsed) => isValidTopicArray(unwrap(parsed)));
  return unwrap(newTopics).map((t) => ({ ...t, status: "pending" }));
}

async function processTopic(topic, { slugs, today }) {
  let slug = slugify(topic.keyword);
  if (slugs.has(slug)) slug = `${slug}-${today}`;

  process.stdout.write(`Generating: ${topic.keyword} -> ${slug} ... `);

  if (DRY_RUN) {
    console.log("[dry-run, no API call]");
    return { ok: false, dryRun: true };
  }

  try {
    const article = await generateArticle(topic);

    if (!Array.isArray(article.sections) || article.sections.length === 0) {
      throw new Error("Model response missing sections array");
    }

    if (!(await isCoherent(article.sections))) {
      throw new Error("Failed coherence check (garbled output)");
    }

    const category = topic.category || "general";
    // Headline text is the topic's exact target keyword (not the model's
    // embellished article.title) -- guarantees the image always shows the
    // precise SEO phrase being targeted.
    const cover = await renderCoverImage(ROOT, category, topic.keyword, slug);
    const post = {
      slug,
      title: article.title,
      date: today,
      author: "IPTV Kaufen Team",
      readTime: Number(article.readTime) || 4,
      excerpt: article.excerpt,
      cover,
      coverAlt: article.coverAlt,
      category,
      categoryLabel: CATEGORY_LABELS[category] || CATEGORY_LABELS.general,
      sections: buildLinkedSections(article.sections, { slug, category }),
      // Not escapeHtml'd like the section body -- the FAQ accordion renders
      // these through plain JSX text interpolation (React escapes on its
      // own), so pre-escaping here would double-escape entities like "&" and
      // show literal "&amp;" text on the page.
      faq: Array.isArray(article.faq)
        ? article.faq
            .filter((f) => f && typeof f.q === "string" && typeof f.a === "string")
            .map((f) => ({ q: f.q, a: f.a }))
        : [],
    };
    fs.writeFileSync(path.join(POSTS_DIR, `${slug}.json`), JSON.stringify(post, null, 2) + "\n");
    slugs.add(slug);
    console.log("done");
    return { ok: true, slug };
  } catch (err) {
    console.log(`FAILED (${err.message})`);
    return { ok: false, error: err.message };
  }
}

async function runCustomTopic() {
  const topics = loadTopics();
  const slugs = existingSlugs();
  const today = new Date().toISOString().slice(0, 10);

  const topic = {
    keyword: CUSTOM_TOPIC,
    angle: CUSTOM_ANGLE || "praktischer Ratgeber für IPTV-Abonnenten",
    category: CUSTOM_CATEGORY || "general",
  };

  const result = await processTopic(topic, { slugs, today });

  if (!result.dryRun) {
    topics.push({
      ...topic,
      status: result.ok ? "done" : "error",
      slug: result.slug,
      error: result.error,
      source: "custom",
    });
    saveTopics(topics);
  }

  console.log(`\n${result.ok ? "Created" : "Failed to create"} 1 article(s) in content/posts/.`);
  if (result.ok) {
    console.log("Next steps: npm run build (verify), review the new page, then commit + push.");
  }
  return result.ok;
}

async function runQueue() {
  let topics = loadTopics();
  let pending = topics.filter((t) => t.status === "pending");

  if (pending.length < COUNT && !DRY_RUN) {
    const needed = COUNT - pending.length;
    console.log(`Only ${pending.length} pending topic(s) left, brainstorming ${needed} more...`);
    try {
      const fresh = await topUpTopics(topics, needed);
      topics = topics.concat(fresh);
      saveTopics(topics);
      pending = topics.filter((t) => t.status === "pending");
      console.log(`Added ${fresh.length} new topic(s) to content/topics.json.`);
    } catch (err) {
      console.log(`Could not brainstorm new topics (${err.message}) — continuing with what's pending.`);
    }
  }

  pending = pending.slice(0, COUNT);

  if (pending.length === 0) {
    console.log("No pending topics left in content/topics.json. Add more entries before the next run.");
    return true;
  }

  const slugs = existingSlugs();
  const today = new Date().toISOString().slice(0, 10);
  let created = 0;

  for (const topic of pending) {
    const result = await processTopic(topic, { slugs, today });
    if (result.ok) {
      topic.status = "done";
      topic.slug = result.slug;
      created++;
    } else if (!result.dryRun) {
      topic.status = "error";
      topic.error = result.error;
    }
  }

  saveTopics(topics);
  console.log(`\nCreated ${created} article(s) in content/posts/.`);
  if (created > 0) {
    console.log("Next steps: npm run build (verify), review the new pages, then commit + push.");
  }
  return created > 0;
}

async function main() {
  const ok = CUSTOM_TOPIC ? await runCustomTopic() : await runQueue();
  if (!ok) {
    console.error("\nNo articles were generated this run — failing so this is visible instead of a silent no-op.");
    process.exitCode = 1;
  }
}

main();
