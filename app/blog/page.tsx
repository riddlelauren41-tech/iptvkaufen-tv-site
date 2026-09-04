import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { pageMeta, whatsappUrl } from "@/lib/site";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = pageMeta({
  title: "Ratgeber & News | IPTV Kaufen",
  description:
    "Praktische Ratgeber rund um IPTV: Einrichtung, Geräte, Sport, Preise und Problemlösung — für Zuschauer in Deutschland, Österreich und der Schweiz.",
  path: "/blog",
});

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  const [lead, ...rest] = POSTS;

  return (
    <>
      <section className="section pt-14 md:pt-20 pb-12">
        <div className="container-px max-w-3xl">
          <span className="eyebrow mb-6">Ratgeber</span>
          <h1 className="text-[2.4rem] md:text-[3.1rem] font-extrabold leading-[1.08] mb-6">
            Wissen, das beim <span className="marker">Einrichten hilft</span>
          </h1>
          <p className="muted text-[1.05rem] leading-relaxed">
            Anleitungen, Vergleiche und Antworten auf die Fragen, die im Alltag
            mit IPTV wirklich auftauchen.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px">
          {POSTS.length === 0 ? (
            <div className="card max-w-xl mx-auto text-center p-12">
              <p className="muted leading-relaxed">
                Die ersten Artikel erscheinen in Kürze. Wenn du jetzt schon eine
                Frage hast, beantworten wir sie gerne direkt.
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex"
              >
                Frage per WhatsApp stellen
                <ArrowRight size={17} strokeWidth={2} />
              </a>
            </div>
          ) : (
            <>
              {/* Lead article gets a wide, editorial treatment. */}
              <Link
                href={`/blog/${lead.slug}`}
                className="card overflow-hidden grid md:grid-cols-2 mb-4 group"
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[300px]">
                  <Image src={lead.cover} alt={lead.coverAlt} fill className="object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="eyebrow mb-4">{lead.categoryLabel}</span>
                  <h2 className="font-display font-extrabold text-2xl leading-tight mb-3 group-hover:text-forest transition-colors">
                    {lead.title}
                  </h2>
                  <p className="muted text-sm leading-relaxed mb-5">{lead.excerpt}</p>
                  <p className="text-xs muted">
                    {fmt(lead.date)} · {lead.readTime} Min. Lesezeit
                  </p>
                </div>
              </Link>

              <div className="grid gap-4 md:grid-cols-3">
                {rest.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card overflow-hidden group">
                    <div className="relative w-full aspect-[16/10]">
                      <Image src={p.cover} alt={p.coverAlt} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <span className="text-[0.68rem] uppercase tracking-wider text-forest font-semibold">
                        {p.categoryLabel}
                      </span>
                      <h2 className="font-display font-extrabold text-base leading-snug mt-2.5 mb-2 group-hover:text-forest transition-colors">
                        {p.title}
                      </h2>
                      <p className="text-sm muted line-clamp-3 leading-relaxed">{p.excerpt}</p>
                      <p className="text-xs muted mt-4 pt-4 border-t border-line">
                        {fmt(p.date)} · {p.readTime} Min.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
