import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMeta, whatsappUrl } from "@/lib/site";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = pageMeta({
  title: "IPTV Blog — Neueste Updates & Tipps | IPTV Kaufen",
  description:
    "Bleib auf dem Laufenden mit den neuesten IPTV-News, Tipps, Updates und Anleitungen. Entdecke alles über IPTV Deutschland und Österreich bei IPTV Kaufen.",
  path: "/blog",
});

const fmt = (d: string) => new Date(d).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Blog</span>
          <h1 className="text-4xl font-bold">IPTV Blog &amp; Tipps</h1>
          <p className="muted mt-4 text-lg leading-relaxed">
            Praktische Anleitungen, um das Beste aus deinem IPTV-Abo herauszuholen.
          </p>
        </div>

        {POSTS.length === 0 ? (
          <div className="card max-w-xl mx-auto text-center p-12">
            <p className="muted">
              Bald erscheinen hier unsere ersten Artikel. Hast du jetzt schon
              eine Frage?
            </p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
              Frag uns über WhatsApp
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <article key={p.slug} className="card overflow-hidden">
                <Link href={`/blog/${p.slug}`}>
                  <div className="relative w-full aspect-[1.9/1]">
                    <Image src={p.cover} alt={p.coverAlt} fill className="object-cover" />
                  </div>
                </Link>
                <div className="p-5">
                  <p className="text-xs muted mb-2">{fmt(p.date)} &middot; {p.readTime} Min. Lesezeit</p>
                  <h2 className="font-semibold text-lg leading-snug mb-2">
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h2>
                  <p className="text-sm muted line-clamp-3">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
