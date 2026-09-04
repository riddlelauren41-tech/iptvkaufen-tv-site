import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PricingMatrix from "@/components/PricingMatrix";
import MultiScreenCard from "@/components/MultiScreenCard";
import PaymentIcons from "@/components/PaymentIcons";
import TrustStrip from "@/components/TrustStrip";
import { pageMeta, whatsappUrl } from "@/lib/site";
import { PLANS, MULTI_SCREEN_PLANS, priceDE } from "@/lib/plans";

export const metadata: Metadata = pageMeta({
  title: `IPTV Abonnement | IPTV Kaufen — Ab ${priceDE(PLANS[0].price)}`,
  description:
    "Das IPTV Abonnement von IPTV Kaufen: 21.000+ Sender, 63.000 Filme und Serien in HD/4K, Aktivierung in Minuten, 7 Tage Geld-zurück-Garantie.",
  path: "/iptv-abonnement",
});

const INCLUDED = [
  "21.000+ Live-Sender aus Deutschland, Österreich, der Schweiz und international",
  "63.000+ Filme und Serien auf Abruf, wöchentlich erweitert",
  "HD, Full HD und 4K mit Anti-Freeze-Technologie",
  "EPG-Programmführer und Replay bis 7 Tage rückwirkend",
  "Kompatibel mit IPTV Smarters Pro, TiviMate, XCIPTV und weiteren Playern",
  "Einrichtung und Support per WhatsApp, auf Deutsch",
];

export default function IptvAbonnementPage() {
  return (
    <>
      <section className="section pt-14 md:pt-20 pb-12">
        <div className="container-px max-w-3xl">
          <span className="eyebrow mb-6">IPTV Abonnement</span>
          <h1 className="text-[2.4rem] md:text-[3.1rem] font-extrabold leading-[1.08] mb-6">
            Ein Abo, <span className="marker">alle Sender</span>, jedes Gerät im Haushalt
          </h1>
          <p className="muted text-[1.05rem] leading-relaxed mb-8">
            Live-TV, Filme, Serien und Sport in HD und 4K — ohne Receiver, ohne
            Techniker-Termin und ohne automatische Verlängerung. Du wählst die
            Laufzeit, wir übernehmen die Einrichtung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Abo per WhatsApp starten
              <ArrowRight size={17} strokeWidth={2} />
            </a>
            <Link href="#preise" className="btn-secondary">
              Direkt zu den Preisen
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section">
        <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="eyebrow mb-5">Leistungsumfang</span>
            <h2 className="text-[1.85rem] md:text-[2.2rem] font-extrabold leading-[1.15] mb-5">
              Was in jedem Paket enthalten ist
            </h2>
            <p className="muted leading-relaxed">
              Der Leistungsumfang ist bei allen Laufzeiten identisch. Ein
              3-Monats-Abo bekommt dieselbe Senderliste und dieselbe Bibliothek
              wie ein 24-Monats-Abo — unterschiedlich sind nur der Preis pro
              Monat und die Anzahl gleichzeitiger Bildschirme.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 py-4 text-[0.95rem]">
                <Check size={16} strokeWidth={2} className="text-forest shrink-0 mt-1" />
                <span className="muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="preise" className="section band-sand">
        <div className="container-px">
          <SectionHeader
            eyebrow="Preise"
            title="Alle Laufzeiten im Vergleich"
            description="Je länger die Laufzeit, desto niedriger der Preis pro Monat. Alle Pakete sind einmalig zu zahlen, ohne stillschweigende Verlängerung."
          />
          <PricingMatrix />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <PaymentIcons />
            <span className="text-xs muted">Sichere Zahlung · Aktivierung in 5–15 Minuten</span>
          </div>

          <div className="mt-20">
            <SectionHeader
              eyebrow="Mehrere Bildschirme"
              title="Wenn mehrere gleichzeitig schauen"
            />
            <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
              {MULTI_SCREEN_PLANS.map((plan) => (
                <MultiScreenCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px max-w-3xl">
          <h2 className="text-[1.6rem] md:text-[1.95rem] font-extrabold leading-[1.2] mb-6">
            Warum ein IPTV-Abo bei IPTV Kaufen?
          </h2>
          <div className="space-y-4 muted leading-relaxed">
            <p>
              Der Markt für IPTV ist unübersichtlich, und viele Angebote
              verschwinden so schnell, wie sie aufgetaucht sind. Wir arbeiten
              seit Jahren mit denselben Servern und derselben Infrastruktur — in
              Frankfurt und Amsterdam, also nah genug, dass die Latenz bei
              Live-Übertragungen nicht auffällt.
            </p>
            <p>
              Der zweite Unterschied ist die Betreuung. Du bekommst nach der
              Bestellung keine automatische Mail mit einem Link, sondern eine
              Anleitung, die zu deinem Gerät passt, und einen Ansprechpartner auf
              WhatsApp, der dabei bleibt, bis das Bild läuft. Das kostet uns mehr
              Zeit, spart dir aber den Abend, den sonst das Einrichten frisst.
            </p>
            <p>
              Und drittens: keine Vertragsfallen. Es gibt keine automatische
              Verlängerung, keine versteckten Gebühren und keine Kündigungsfrist,
              die man übersehen kann. Du buchst eine Laufzeit, und danach
              entscheidest du neu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
