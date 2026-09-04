import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { pageMeta, whatsappUrl, SITE } from "@/lib/site";
import { POSTS } from "@/lib/posts";
import FaqAccordion from "@/components/FaqAccordion";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMeta({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.cover });
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: SITE.url + post.cover,
    datePublished: post.date,
    inLanguage: "de-DE",
    author: { "@type": "Organization", name: SITE.name },
  };

  const faqJsonLd = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <article className="section pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className="container-px max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm muted hover:text-ink transition-colors mb-8">
          <ArrowLeft size={15} strokeWidth={1.75} /> Alle Ratgeber
        </Link>

        <span className="eyebrow mb-5">{post.categoryLabel}</span>
        <h1 className="text-[2.1rem] md:text-[2.7rem] font-extrabold leading-[1.12] mb-5">{post.title}</h1>
        <p className="muted leading-relaxed text-[1.05rem] mb-6">{post.excerpt}</p>
        <p className="text-xs muted pb-8 border-b border-line">
          {fmt(post.date)} · {post.readTime} Min. Lesezeit · {post.author}
        </p>
      </div>

      <div className="container-px max-w-4xl mx-auto my-10">
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-line">
          <Image src={post.cover} alt={post.coverAlt} fill className="object-cover" priority />
        </div>
      </div>

      <div className="container-px max-w-2xl mx-auto">
        <div className="space-y-9">
          {post.sections.map((s, i) => (
            <section key={i}>
              {s.heading && (
                <h2
                  className="font-display font-extrabold text-xl md:text-2xl leading-snug mb-3.5"
                  dangerouslySetInnerHTML={{ __html: s.heading }}
                />
              )}
              {s.body.map((p, j) => (
                <p
                  key={j}
                  className="text-[1.02rem] leading-[1.75] muted mb-4 [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {s.list && s.list.length > 0 && (
                <ul className="space-y-2.5 my-5 pl-1">
                  {s.list.map((item, k) => (
                    <li key={k} className="flex items-start gap-3 leading-relaxed muted">
                      <span className="mt-2.5 h-1 w-1 rounded-full bg-forest shrink-0" />
                      <span
                        className="[&_a]:text-forest [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {post.faq?.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display font-extrabold text-2xl mb-6">Häufig gestellte Fragen</h2>
            <FaqAccordion items={post.faq.map((f) => ({ question: f.q, answer: f.a }))} />
          </div>
        )}

        <div className="band-forest rounded-xl p-9 mt-14 text-center">
          <h2 className="font-display font-extrabold text-xl mb-3">Bereit loszulegen?</h2>
          <p className="muted text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            Paket wählen, Zugangsdaten erhalten, einrichten — meist in unter 15
            Minuten erledigt.
          </p>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-on-forest">
            Abo per WhatsApp starten
            <ArrowRight size={17} strokeWidth={2} />
          </a>
        </div>
      </div>
    </article>
  );
}
