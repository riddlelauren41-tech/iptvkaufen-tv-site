"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

const LINKS = [
  { href: "/iptv-abonnement", label: "Abo & Preise" },
  { href: "/iptv-oesterreich", label: "Österreich" },
  { href: "/installationsanleitung", label: "Einrichtung" },
  { href: "/blog", label: "Ratgeber" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

function Wordmark() {
  return (
    <span className="font-display font-extrabold text-[1.05rem] tracking-tight text-ink">
      iptv<span className="text-forest">kaufen</span>
      <span className="text-brass">.</span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-line">
      <div className="container-px flex items-center justify-between h-16">
        <Link href="/" aria-label="IPTV Kaufen — Startseite">
          <Wordmark />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-5 py-2.5">
            Abo starten
          </a>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-canvas px-6 py-5 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm mt-1">
            Abo starten
          </a>
        </div>
      )}
    </header>
  );
}
