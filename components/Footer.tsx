import Link from "next/link";
import { MessageCircle, Mail, Clock, ShieldCheck, Lock } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import PaymentIcons from "./PaymentIcons";

export default function Footer() {
  return (
    <footer className="dark-block pt-16 pb-8">
      <div className="container-px">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Col 1: Logo, overview, payment icons */}
          <div>
            <div className="font-display font-bold text-lg text-white mb-3">
              IPTV<span className="gradient-text">Kaufen</span>
            </div>
            <p className="muted text-sm leading-relaxed mb-5">
              Zuverlässiges IPTV-Abonnement für Deutschland, Österreich und die
              Schweiz. Stabil in HD/4K, mit 24/7 WhatsApp-Support.
            </p>
            <p className="text-xs muted mb-2">Sicher bezahlen mit</p>
            <PaymentIcons />
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Schnelllinks</h4>
            <ul className="space-y-2.5 text-sm muted">
              <li><Link href="/iptv-abonnement" className="hover:text-white transition-colors">IPTV Abonnement</Link></li>
              <li><Link href="/installationsanleitung" className="hover:text-white transition-colors">Installationsanleitung</Link></li>
              <li><Link href="/iptv-oesterreich" className="hover:text-white transition-colors">IPTV Österreich</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3 text-sm muted">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle size={16} /> WhatsApp Support
              </a>
              <a href="mailto:info@iptvkaufen-tv.site" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} /> info@iptvkaufen-tv.site
              </a>
              <span className="flex items-center gap-2">
                <Clock size={16} /> Täglich erreichbar, 7/7
              </span>
            </div>
          </div>

          {/* Col 4: Security badges & copyright */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Sicher & zuverlässig</h4>
            <div className="flex flex-col gap-3 text-sm muted">
              <span className="flex items-center gap-2">
                <Lock size={16} /> SSL-verschlüsselte Verbindung
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} /> 7 Tage Geld-zurück-Garantie
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs muted">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.</p>
          <p>IPTV-Abonnements für die legale Nutzung mit eigener Streaming-Ausrüstung.</p>
        </div>
      </div>
    </footer>
  );
}
