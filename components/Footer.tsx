import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import PaymentIcons from "./PaymentIcons";

const NAV = [
  {
    heading: "Angebot",
    links: [
      { href: "/iptv-abonnement", label: "IPTV Abo & Preise" },
      { href: "/iptv-oesterreich", label: "IPTV Österreich" },
      { href: "/#preise", label: "Mehrere Bildschirme" },
    ],
  },
  {
    heading: "Hilfe",
    links: [
      { href: "/installationsanleitung", label: "Installationsanleitung" },
      { href: "/faq", label: "Häufige Fragen" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    heading: "Wissen",
    links: [
      { href: "/blog", label: "Ratgeber & News" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-px py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display font-extrabold text-[1.05rem] tracking-tight">
              iptv<span className="text-forest">kaufen</span>
              <span className="text-brass">.</span>
            </span>
            <p className="muted text-sm leading-relaxed mt-4 max-w-xs">
              IPTV-Abonnements für Deutschland, Österreich und die Schweiz.
              Stabil in HD und 4K, eingerichtet mit persönlicher Hilfe per
              WhatsApp.
            </p>
            <div className="mt-6">
              <p className="text-xs muted mb-2">Zahlungsmethoden</p>
              <PaymentIcons />
            </div>
          </div>

          {NAV.map((col) => (
            <div key={col.heading}>
              <h4 className="font-display font-bold text-sm mb-4">{col.heading}</h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="muted hover:text-ink transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-line grid gap-6 md:grid-cols-2 md:items-center">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 muted hover:text-ink transition-colors"
            >
              <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp-Support
            </a>
            <a
              href="mailto:info@iptvkaufen-tv.site"
              className="inline-flex items-center gap-2 muted hover:text-ink transition-colors"
            >
              <Mail size={15} strokeWidth={1.5} /> info@iptvkaufen-tv.site
            </a>
          </div>
          <div className="text-xs muted md:text-right leading-relaxed">
            <p>
              &copy; {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.
            </p>
            <p className="mt-1">
              IPTV-Abonnements für die legale Nutzung mit eigener Streaming-Ausrüstung.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
