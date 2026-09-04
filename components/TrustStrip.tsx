import { ShieldCheck, Zap, Headset, CreditCard } from "lucide-react";

const ITEMS = [
  { icon: Zap, title: "In 5 Minuten aktiv", desc: "Zugangsdaten direkt nach der Bestellung" },
  { icon: ShieldCheck, title: "7 Tage Geld zurück", desc: "Ohne Bedingungen, ohne Kleingedrucktes" },
  { icon: Headset, title: "Support 7 Tage/Woche", desc: "Persönlich per WhatsApp, auf Deutsch" },
  { icon: CreditCard, title: "Sichere Zahlung", desc: "PayPal, SEPA, Kreditkarte" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-px grid grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <div
            key={it.title}
            className={`flex items-start gap-3 py-6 lg:py-7 pr-4 ${
              i > 0 ? "lg:border-l lg:border-line lg:pl-7" : ""
            } ${i % 2 === 1 ? "border-l border-line pl-4 lg:pl-7" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
          >
            <it.icon size={19} strokeWidth={1.5} className="text-forest shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-bold text-[0.88rem] leading-tight">{it.title}</p>
              <p className="text-xs muted mt-1 leading-snug">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
