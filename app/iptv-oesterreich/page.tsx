import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import PaymentIcons from "@/components/PaymentIcons";
import { pageMeta, whatsappUrl } from "@/lib/site";
import { PLANS } from "@/lib/plans";

export const metadata: Metadata = pageMeta({
  title: "IPTV Österreich | IPTV Kaufen — Österreichische Sender in HD/4K",
  description:
    "IPTV Österreich bei IPTV Kaufen: alle österreichischen Sender (ORF 1, ORF 2, ServusTV, ATV) + 21.000+ internationale Kanäle in HD/4K. Sofort aktiv.",
  path: "/iptv-oesterreich",
});

const AT_CHANNELS = ["ORF 1", "ORF 2", "ServusTV", "ATV", "ATV2", "Puls 4", "ORF Sport+", "ProSieben Austria", "SAT.1 Österreich", "oe24.TV"];

export default function IptvOesterreichPage() {
  return (
    <>
      <section className="dark-block section pb-16">
        <div className="container-px text-center">
          <span className="eyebrow text-sky">IPTV Österreich</span>
          <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto">
            IPTV Österreich — <span className="gradient-text">alle österreichischen Sender</span> in HD/4K
          </h1>
          <p className="muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            ORF 1, ORF 2, ServusTV, ATV und mehr — zusammen mit 21.000+
            internationalen Sendern in einem stabilen IPTV-Abonnement.
          </p>
          <a href={whatsappUrl("Hallo, ich möchte mehr über IPTV in Österreich erfahren.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Über WhatsApp bestellen
          </a>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px">
          <SectionHeader eyebrow="Österreichische Sender" title="Alle großen österreichischen Sender inklusive" />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {AT_CHANNELS.map((ch) => (
              <span key={ch} className="card px-5 py-2.5 text-sm font-medium">{ch}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <SectionHeader
            eyebrow="Preise"
            title="IPTV-Abonnement für Österreich"
            description="Dieselbe stabile HD/4K-Qualität, ergänzt um die vollständige österreichische Senderliste."
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
            Warum österreichische Zuschauer IPTV Kaufen wählen
          </h2>
          <div className="heading-divider" />
          <div className="space-y-4 text-sm leading-relaxed muted mt-8">
            <p>
              Neben allen deutschen und internationalen Sendern enthält
              unser IPTV-Abo auch die vollständige österreichische
              Senderliste: ORF 1, ORF 2, ServusTV, ATV und mehr. So verpasst
              du kein einziges Spiel der österreichischen Bundesliga oder
              deine liebste heimische Sendung.
            </p>
            <p>
              Unsere Anti-Buffer-EU-Server liegen nah an Österreich, was für
              eine stabile, schnelle Verbindung sorgt. Bestellung und
              Aktivierung laufen über WhatsApp, mit Begleitung auf Deutsch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
