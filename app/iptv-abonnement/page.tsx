import type { Metadata } from "next";
import { Tv, Smartphone, Server, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import PaymentIcons from "@/components/PaymentIcons";
import { pageMeta, whatsappUrl } from "@/lib/site";
import { PLANS, priceDE } from "@/lib/plans";

export const metadata: Metadata = pageMeta({
  title: `IPTV Abonnement | IPTV Kaufen — Ab ${priceDE(PLANS[0].price)}`,
  description:
    "Entdecke das ultimative IPTV-Abo bei IPTV Kaufen: 21.000+ Sender, Filme, Serien und Live-Sport in HD/4K. Sofort aktiv ✓ 7 Tage Geld-zurück.",
  path: "/iptv-abonnement",
});

const SPECS = [
  { icon: Tv, label: "21.000+ TV-Sender", desc: "Deutsche, österreichische und internationale Sender in einem Paket." },
  { icon: Smartphone, label: "63.000+ Filme & Serien", desc: "Eine umfangreiche VOD-Bibliothek, wöchentlich erweitert." },
  { icon: Server, label: "Anti-Buffer-EU-Server", desc: "99,99% Stabilität dank Servern in deiner Nähe." },
  { icon: ShieldCheck, label: "7 Tage Geld-zurück", desc: "Nicht zufrieden? Dann bekommst du dein Geld zurück, ganz ohne Aufwand." },
];

export default function IptvAbonnementPage() {
  return (
    <>
      <section className="dark-block section pb-16">
        <div className="container-px text-center">
          <span className="eyebrow text-sky">IPTV Abonnement</span>
          <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto">
            Das komplette <span className="gradient-text">IPTV-Abonnement</span> für Deutschland
          </h1>
          <p className="muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Live-TV, Filme, Serien und Sport in HD/4K — stabil, schnell und mit
            sofortiger Aktivierung über WhatsApp.
          </p>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Über WhatsApp bestellen
          </a>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px">
          <SectionHeader eyebrow="Was du bekommst" title="Alles in einem IPTV-Abonnement" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECS.map((s) => (
              <div key={s.label} className="card p-6">
                <div className="h-11 w-11 rounded-xl bg-linear-to-br from-indigo to-violet flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold mb-1.5">{s.label}</h3>
                <p className="muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <SectionHeader
            eyebrow="Preise"
            title="Wähle dein IPTV-Abonnement"
            description="Alle Pakete enthalten dieselbe vollständige Senderliste und VOD-Bibliothek — der Unterschied liegt in Laufzeit und Anzahl der Bildschirme."
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

      <section className="section bg-white">
        <div className="container-px max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Warum ein IPTV-Abonnement bei IPTV Kaufen wählen?
          </h2>
          <div className="heading-divider" />
          <div className="space-y-4 text-sm leading-relaxed muted mt-8">
            <p>
              Ein IPTV-Abonnement bei IPTV Kaufen kombiniert eine vollständige
              Senderliste mit einer umfangreichen Film- und Serienbibliothek,
              alles in HD/4K-Qualität. Unsere Anti-Buffer-EU-Server sorgen für
              eine stabile Wiedergabe, auch zu Stoßzeiten wie Fußballspielen
              am Wochenende.
            </p>
            <p>
              Jedes Abonnement funktioniert auf den Geräten, die du bereits zu
              Hause hast: Smart TV, Fire TV Stick, Android-Box, Handy, Tablet
              oder PC. Nach der Bestellung erhältst du eine klare
              Installationsanleitung, und wir begleiten dich über WhatsApp,
              bis alles läuft.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
