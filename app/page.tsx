import type { Metadata } from "next";
import Image from "next/image";
import { Tv, ShieldCheck, Zap, Headset, Trophy, Film, Star, BadgeCheck, Ban, Award, Rocket, Layers, PlayCircle, Smartphone, HelpCircle, CheckCircle2, Lock, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import MultiScreenCard from "@/components/MultiScreenCard";
import FaqAccordion from "@/components/FaqAccordion";
import ComparisonTable from "@/components/ComparisonTable";
import PaymentIcons from "@/components/PaymentIcons";
import { pageMeta, whatsappUrl } from "@/lib/site";
import { PLANS, MULTI_SCREEN_PLANS } from "@/lib/plans";

export const metadata: Metadata = pageMeta({
  title: "IPTV Kaufen | Bester IPTV Anbieter Deutschland – HD/4K stabil & unbegrenzt",
  description:
    "IPTV kaufen leicht gemacht: IPTV Kaufen bietet ein zuverlässiges IPTV-Abo mit 21.000+ Sendern in HD/4K, 24/7 WhatsApp-Support und 7 Tage Geld-zurück-Garantie.",
  path: "/",
});

const APPS = ["IPTV Smarters Pro", "TiviMate", "XCIPTV", "IBO Player", "IWA Player"];

const TRUST_STATS = [
  { value: "30.500+", label: "Zufriedene Kunden" },
  { value: "179.000+", label: "Sender" },
  { value: "100.000+", label: "Filme & Serien" },
];

const TRUST_BADGES = [
  { icon: Ban, label: "Keine versteckten Kosten" },
  { icon: Award, label: "100% Geld-zurück-Garantie" },
  { icon: Rocket, label: "Sofort aktiv in 5 Minuten" },
];

const BENEFITS = [
  {
    icon: Zap,
    title: "4K / Full HD — stabile Streams",
    desc: "Optimierte Anti-Buffer-EU-Server: Spiele, Filme und Serien ohne Unterbrechungen, minimale Verzögerung, zuverlässig bei jedem IPTV-Abo — auch bei Topspielen mit Tausenden gleichzeitigen Zuschauern.",
  },
  {
    icon: Tv,
    title: "Kompatibel mit allen Geräten",
    desc: "Samsung/LG Smart TV, Android/Google TV, Fire TV, Apple TV, iOS/Android-Handy oder Tablet und PC/Mac (M3U & Xtream Codes). Ein Abo, jedes Gerät, das du bereits zu Hause hast.",
  },
  {
    icon: Headset,
    title: "WhatsApp-Support 24/7",
    desc: "Einfache Installationsanleitungen plus direkte persönliche Hilfe, von deiner ersten Frage bis zur vollständigen Aktivierung deines Premium-IPTV. Keine Wartezeiten, keine Ticket-Systeme.",
  },
  {
    icon: ShieldCheck,
    title: "7 Tage Geld-zurück-Garantie",
    desc: "Sichere Bezahlung, deine Privatsphäre wird vollständig respektiert, und du kannst erst testen, bevor du dich endgültig für dein IPTV-Abo entscheidest. Nicht zufrieden? Geld zurück, ganz ohne Aufwand.",
  },
  {
    icon: Trophy,
    title: "IPTV unbegrenzt & flexibel",
    desc: "Klare Angebote ohne versteckte Kosten, vollständiger VOD- & Replay-Zugang und automatische Senderupdates für IPTV Deutschland. Keine langen Verträge, kein Kleingedrucktes.",
  },
  {
    icon: Film,
    title: "Sport, Filme & Serien",
    desc: "Deutsche und internationale Sender, eine umfangreiche VOD-Bibliothek in 4K/HD, und die großen Sportevents live — Bundesliga, Champions League und Formel 1, wöchentlich aktualisiert.",
  },
];

const TRUST_PILLS = [
  { icon: Lock, label: "Sichere Bezahlung" },
  { icon: Zap, label: "Aktivierung 5-15 Min" },
  { icon: Star, label: "HD/4K Qualität" },
  { icon: Headset, label: "WhatsApp 24/7" },
  { icon: Sparkles, label: "Fokus auf Deutschland" },
];

const STEPS = [
  {
    step: "1",
    title: "Wähle dein Angebot",
    desc: "Wähle die Laufzeit oder die Anzahl der Bildschirme, die zu dir passt.",
    bullets: ["Ohne Verpflichtungen", "Sofortige Aktivierung", "Deutscher Support"],
  },
  {
    step: "2",
    title: "Installiere die IPTV-App",
    desc: "Erhalte deine Zugangsdaten und richte deine Anwendung ein.",
    bullets: ["Smart TV, Android, iOS, PC", "Anleitungen inklusive", "Stabiles HD/4K-Streaming"],
  },
  {
    step: "3",
    title: "Genieße ohne Limit",
    desc: "Zugriff auf all deine Lieblingssender, Filme und Sport.",
    bullets: ["Sender & VOD unbegrenzt", "Live-Sport", "Premium-Qualität"],
  },
];

const VOD_FEATURES = [
  { icon: Layers, title: "Klare Kategorien", desc: "Finde schnell, was du sehen möchtest, dank einer einfachen und übersichtlichen Navigation." },
  { icon: PlayCircle, title: "Flüssige Wiedergabe", desc: "Ein stabiles Erlebnis mit HD/4K-Qualität, unabhängig von deinem Gerät und deiner Verbindung." },
  { icon: Smartphone, title: "Multi-Geräte", desc: "Kompatibel mit Smart TV, Android, iOS, PC — und Hilfe bei Bedarf." },
];

const TESTIMONIALS = [
  { name: "Lukas M.", city: "Berlin", text: "Schnelle Aktivierung, das Bild ist super stabil. Die deutschen Sender sind vollständig und es ruckelt nie." },
  { name: "Sophie B.", city: "München", text: "WhatsApp-Support sehr reaktionsschnell. Ich hatte den Zugang innerhalb weniger Minuten. Top auf Smart TV." },
  { name: "Thomas D.", city: "Hamburg", text: "VOD + Sport + internationale Sender. Ich wollte etwas Premium und bin zufrieden." },
  { name: "Emma L.", city: "Köln", text: "Funktioniert perfekt auf meinem Fire Stick und Handy gleichzeitig. Bisher keine einzige Störung." },
];

const FAQS = [
  {
    question: "Wie lange dauert es, mein IPTV-Abo zu aktivieren?",
    answer:
      "Nach der Bestellung erfolgt die Aktivierung in der Regel innerhalb von 5 bis 15 Minuten, sodass du fast sofort mit dem Schauen beginnen kannst. Du erhältst deine persönlichen Zugangsdaten und eine klare Installationsanleitung über WhatsApp, abgestimmt auf das Gerät, das du verwendest. Sollte während der Installation etwas schiefgehen, steht dir unser Support-Team sofort zur Verfügung, um dir Schritt für Schritt zu helfen. So musst du nie lange warten, bevor du Zugriff auf alle Sender und die vollständige VOD-Bibliothek hast.",
  },
  {
    question: "Wie installiere ich die App auf meinem Smart TV oder Fire Stick?",
    answer:
      "Wir schicken dir eine klare, schrittweise Installationsanleitung, die speziell auf dein Gerät abgestimmt ist. Für Smart TVs (Samsung, LG) und Fire Stick empfehlen wir die App IPTV Smarters Pro oder TiviMate, beide einfach über den jeweiligen App Store herunterzuladen. Unser WhatsApp-Support begleitet dich live, vom Herunterladen der App bis zur Eingabe deiner Zugangsdaten, bis alles perfekt funktioniert. Die gesamte Installation dauert in der Regel nicht länger als ein paar Minuten, auch wenn du noch nie mit IPTV gearbeitet hast.",
  },
  {
    question: "Welche Geräte sind kompatibel?",
    answer:
      "IPTV Kaufen funktioniert auf nahezu jedem Gerät mit Internetverbindung: Smart TVs von Samsung und LG, Android TV und Google TV, Fire TV Stick, Android- und iOS-Handys oder Tablets, PC und Mac sowie MAG- und Formuler-Boxen. Für das beste Erlebnis empfehlen wir Apps wie TiviMate, IPTV Smarters Pro oder XCIPTV, je nach Gerät und persönlicher Vorliebe. Hast du mehrere Geräte zu Hause, kannst du mit einem Mehrbildschirm-Abo auf verschiedenen Bildschirmen gleichzeitig schauen. Bist du dir unsicher, welche Kombination am besten zu deiner Situation passt, beraten wir dich gerne persönlich über WhatsApp.",
  },
  {
    question: "Welche Zahlungsmethoden akzeptiert ihr?",
    answer:
      "Wir akzeptieren die gängigsten und sichersten Zahlungsmethoden in Deutschland: Visa, Mastercard, PayPal und Sofortüberweisung. Jede Zahlung läuft über eine gesicherte Verbindung, sodass deine Daten immer gut geschützt sind. Sobald deine Zahlung bestätigt ist, erhältst du automatisch eine Bestätigung über WhatsApp mit den nächsten Schritten zur Aktivierung. Bevorzugst du eine andere Zahlungsmethode, melde dich gerne bei uns — wir besprechen die Möglichkeiten.",
  },
  {
    question: "Gibt es eine Geld-zurück-Garantie?",
    answer:
      "Ja, wir bieten eine 7-tägige Geld-zurück-Garantie auf jedes Abo, das du bei uns abschließt. Bist du innerhalb dieser Zeit nicht vollständig zufrieden mit der Stabilität, Qualität oder dem Angebot, bekommst du dein Geld zurück, ohne komplizierte Bedingungen. Wir bitten dich nur, eventuelle Probleme zunächst mit unserem Support-Team über WhatsApp zu teilen, damit wir versuchen können, diese direkt zu beheben. So kannst du IPTV Kaufen völlig risikofrei ausprobieren, mit der Sicherheit, dass du an nichts gebunden bist.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-block relative overflow-hidden">
        <Image src="/img/hero-bg.jpg" alt="" fill priority className="object-cover object-center opacity-90" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/85 to-navy/40" />
        <div className="container-px relative pt-16 pb-24 md:pt-20 md:pb-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold text-orange mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Exklusives Angebot heute – sofortige Aktivierung
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
            Bestes <span className="gradient-text">IPTV Deutschland</span> — HD/4K stabil & unbegrenzt
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            IPTV Kaufen liefert stabiles deutsches IPTV in 4K-Qualität, ohne
            Pufferung und ohne Unterbrechungen — auch an vollen Sportabenden.
            Nach der Bestellung wird dein Abo innerhalb weniger Minuten
            aktiviert, mit klaren Installationsanweisungen und persönlicher
            Begleitung über WhatsApp. So schaust du noch heute Abend deine
            Lieblingssender, Filme und Serien, auf jedem Gerät, das du bereits
            zu Hause hast.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Über WhatsApp bestellen
            </a>
            <a href="#preise" className="btn-ghost">
              Preise ansehen
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {TRUST_BADGES.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 text-sm text-white/80">
                <b.icon size={16} className="text-orange" />
                {b.label}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display font-extrabold text-2xl md:text-3xl gradient-text">{s.value}</p>
                <p className="text-white/70 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps & Support */}
      <section className="section">
        <div className="container-px">
          <SectionHeader
            eyebrow="Kompatibilität"
            title="IPTV Abonnement — kompatibel mit deinen Lieblingsapps"
            description="Läuft auf Smart TV, Android, iOS und Fire Stick — nutze die App, die du schon kennst."
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {APPS.map((app) => (
              <span key={app} className="card px-5 py-2.5 text-sm font-medium">{app}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-white">
        <div className="container-px">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="eyebrow">Vorteile</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="block">IPTV Abonnement —</span>
              <span className="inline bg-orange/90 text-white px-3 py-1 my-1.5 rounded-md box-decoration-clone">
                Vorteile des besten IPTV
              </span>
              <span className="block">in Deutschland</span>
            </h2>
            <div className="heading-divider" />
            <p className="muted mt-5 text-lg leading-relaxed">
              Mit unserem <span className="text-blue underline">IPTV Abonnement</span> speziell für IPTV
              Deutschland genießt du Premium-IPTV, das stabil und unbegrenzt ist: HD/4K-Qualität, eine
              riesige VOD-Sammlung, Live-Sport und 24/7-Support. Kompatibel mit Smart TV, Android,
              iOS, Box &amp; PC — ganz ohne Verpflichtungen.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {TRUST_PILLS.map((p) => (
              <span key={p.label} className="inline-flex items-center gap-1.5 rounded-full bg-navy text-white px-3.5 py-1.5 text-xs font-medium">
                <p.icon size={13} className="text-orange" /> {p.label}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl bg-navy p-6">
                <div className="flex items-start gap-2.5 mb-2">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-white">{b.title}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pl-7">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#preise" className="btn-primary inline-flex items-center gap-2">
              <Rocket size={16} /> Heute starten — Preise ansehen →
            </a>
          </div>
        </div>
      </section>

      {/* Single Pricing */}
      <section id="preise" className="section">
        <div className="container-px">
          <SectionHeader
            eyebrow="Preise"
            title="Wähle dein IPTV Abonnement — IPTV Deutschland"
            description="Wähle das Paket, das zu dir passt, und genieße ein stabiles IPTV-Abo in HD/4K, mit WhatsApp-Support 7/7 und 7 Tage Geld-zurück-Garantie."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 mt-10">
            <p className="text-xs muted">Sicher bezahlen mit</p>
            <PaymentIcons />
          </div>
        </div>
      </section>

      {/* Multi Pricing */}
      <section className="section bg-white">
        <div className="container-px">
          <SectionHeader
            eyebrow="Mehrere Bildschirme"
            title="IPTV Mehrbildschirm-Abonnements"
            description="Schau mit der ganzen Familie gleichzeitig, jeder auf einem anderen Gerät — günstige Tarife pro zusätzlichem Bildschirm."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {MULTI_SCREEN_PLANS.map((plan) => (
              <MultiScreenCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="dark-block section">
        <div className="container-px">
          <SectionHeader
            eyebrow="Loslegen"
            title="So funktioniert IPTV Abonnement — einfach, schnell & unbegrenzt"
          />
          <p className="text-white/80 text-center max-w-2xl mx-auto -mt-6 mb-12 leading-relaxed">
            Mit <strong className="text-white">IPTV Abonnement</strong> genießt du{" "}
            <strong className="text-white">das beste IPTV in Deutschland</strong>: schnelle Installation,
            HD/4K-Qualität, unbegrenztes VOD und 24/7-Support.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="card p-7">
                <div className="h-14 w-14 rounded-full bg-linear-to-br from-orange-2 to-orange text-white font-display font-bold text-xl flex items-center justify-center mb-5">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-white/85">
                      <span className="text-orange">✔</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="#preise" className="btn-ghost">
              ⚡ Preise ansehen
            </a>
            <a href="/faq" className="btn-ghost inline-flex items-center gap-2">
              <HelpCircle size={16} className="text-orange" /> FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-white">
        <div className="container-px">
          <SectionHeader eyebrow="Vergleich" title="Warum uns wählen?" />
          <ComparisonTable />
        </div>
      </section>

      {/* SEO Content: Sport (full-width dark band) */}
      <section className="dark-block section">
        <div className="container-px text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Das Beste vom Fußball — IPTV Abonnement</h2>
          <div className="heading-divider" />
          <p className="text-white/85 leading-relaxed mt-6 text-left md:text-center">
            Bei IPTV Kaufen musst du nie einen Moment deines Lieblingssports
            verpassen. Verfolge jeden Spieltag der Bundesliga, die Spannung
            der Champions League und die Geschwindigkeit der Formel 1, alles
            live und in messerscharfer HD/4K-Qualität. Unsere Anti-Buffer-EU-
            Server sind speziell für Spitzenzeiten optimiert: Auch wenn sich
            Tausende Zuschauer gleichzeitig bei einem entscheidenden Spiel
            einloggen, bleibt der Stream flüssig und ohne Verzögerung
            gegenüber der Live-Übertragung. Keine eingefrorenen Bilder im
            entscheidenden Moment, keine störende Pufferung kurz vor einem
            Tor — genau dann, wenn es am meisten zählt. Neben den großen
            deutschen und europäischen Ligen hast du auch Zugriff auf
            internationale Sportsender, von Tennis über Rugby bis Boxen und
            Motorsport. Alles ist auf jedem Gerät verfügbar, das du bereits
            zu Hause hast, vom Smart TV bis zum Smartphone, sodass du nie an
            einen Bildschirm gebunden bist. Mit IPTV Kaufen verbindest du die
            Zuverlässigkeit eines Premium-Abos mit der Flexibilität, überall
            zu schauen, wo und wann du willst.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-white/75">
            <span>Stabiles Streaming</span>
            <span className="text-orange">•</span>
            <span>HD/4K Qualität</span>
            <span className="text-orange">•</span>
            <span>WhatsApp Support 24/7</span>
          </div>
        </div>
      </section>

      {/* SEO Content: VOD (full-width light band) */}
      <section className="section bg-white">
        <div className="container-px text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">VOD in HD/4K — IPTV Abonnement (IPTV Deutschland)</h2>
          <div className="heading-divider" />
          <p className="muted leading-relaxed mt-6 text-left md:text-center">
            Neben Live-TV bietet IPTV Kaufen eine umfangreiche VOD-Bibliothek
            mit Tausenden Filmen und Serien in Full-HD- und 4K-Qualität. Unser
            Katalog wird täglich um die neuesten Veröffentlichungen erweitert,
            von großen Blockbustern über beliebte Serien bis hin zu
            Dokumentationen, sodass es immer etwas Neues zu entdecken gibt.
            Dank des integrierten EPG (elektronischer TV-Guide) siehst du auf
            einen Blick genau, was jetzt und in den nächsten Tagen auf jedem
            Sender läuft — praktisch, um nie wieder eine Lieblingssendung zu
            verpassen. Alles ist in klare, übersichtliche Kategorien
            unterteilt, sodass du innerhalb von Sekunden findest, wonach du
            suchst, ohne endlos zu scrollen. Das Wiedergabeerlebnis ist auf
            eine flüssige Darstellung optimiert, unabhängig von deinem Gerät
            oder deiner Verbindung. Egal, ob du auf einem Smart TV, Tablet,
            Handy oder PC schaust: Die Qualität bleibt durchgehend hoch.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {VOD_FEATURES.map((f) => (
              <div key={f.title} className="card p-6 text-left">
                <div className="h-10 w-10 rounded-lg bg-linear-to-br from-navy to-blue flex items-center justify-center mb-3">
                  <f.icon size={18} className="text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1.5">{f.title}</h3>
                <p className="muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 text-orange px-3.5 py-1.5 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Einfacher Zugang
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 text-orange px-3.5 py-1.5 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Deutscher Support
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 text-orange px-3.5 py-1.5 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Begleiteter Start
            </span>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section bg-white">
        <div className="container-px">
          <SectionHeader eyebrow="Erfahrungen" title="Sie vertrauen uns" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex gap-0.5 text-amber-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <BadgeCheck size={15} className="text-blue" />
                </div>
                <p className="text-xs muted">{t.city} &middot; Verifizierter Käufer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-px">
          <SectionHeader eyebrow="FAQ" title="Häufig gestellte Fragen (FAQ)" />
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="dark-block section">
        <div className="container-px text-center">
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            Erhalte noch heute Zugang zu HD / 4K Qualität
          </h2>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
            Sofortige Aktivierung, 24/7 WhatsApp-Support und 7 Tage Geld-zurück-Garantie.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#preise" className="btn-ghost">
              Preise ansehen
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              WhatsApp-Kontakt
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
