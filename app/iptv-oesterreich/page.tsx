import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PricingMatrix from "@/components/PricingMatrix";
import PaymentIcons from "@/components/PaymentIcons";
import TrustStrip from "@/components/TrustStrip";
import { pageMeta, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "IPTV Österreich | IPTV Kaufen — ORF, ServusTV & ATV in HD/4K",
  description:
    "IPTV Österreich bei IPTV Kaufen: ORF 1, ORF 2, ServusTV, ATV und Puls 4 plus 21.000+ internationale Sender in HD/4K. Aktivierung in Minuten.",
  path: "/iptv-oesterreich",
});

const GROUPS = [
  { label: "ORF", channels: ["ORF 1", "ORF 2", "ORF III", "ORF Sport+"] },
  { label: "Privatsender", channels: ["ServusTV", "ATV", "ATV2", "Puls 4", "oe24.TV"] },
  { label: "Deutsche Fenster", channels: ["ProSieben Austria", "SAT.1 Österreich", "RTL Austria"] },
  { label: "Schweiz dazu", channels: ["SRF 1", "SRF zwei", "SRF info"] },
];

export default function IptvOesterreichPage() {
  return (
    <>
      <section className="section pt-14 md:pt-20 pb-12">
        <div className="container-px max-w-3xl">
          <span className="eyebrow mb-6">IPTV Österreich</span>
          <h1 className="text-[2.4rem] md:text-[3.1rem] font-extrabold leading-[1.08] mb-6">
            ORF, ServusTV und ATV — <span className="marker">ohne Umweg</span>
          </h1>
          <p className="muted text-[1.05rem] leading-relaxed mb-8">
            Die komplette österreichische Senderliste ist in jedem Abo enthalten,
            zusammen mit dem deutschen Free-TV, der Schweiz und über 100 weiteren
            Ländern. Kein Zusatzpaket, kein Aufpreis.
          </p>
          <a href={whatsappUrl("Hallo, ich möchte mehr über IPTV in Österreich erfahren.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Abo per WhatsApp starten
            <ArrowRight size={17} strokeWidth={2} />
          </a>
        </div>
      </section>

      <TrustStrip />

      <section className="section">
        <div className="container-px">
          <SectionHeader
            eyebrow="Senderübersicht"
            title="Österreichische Sender im Abo"
            description="Alle in HD, viele zusätzlich in 4K, mit EPG und Replay bis zu sieben Tage rückwirkend."
          />
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {GROUPS.map((g) => (
              <div key={g.label} className="card p-6">
                <h3 className="font-display font-extrabold text-base mb-4">{g.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.channels.map((c) => (
                    <span key={c} className="rounded border border-line bg-canvas px-2 py-1 text-[0.72rem] text-muted">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-sand">
        <div className="container-px">
          <SectionHeader eyebrow="Preise" title="Dieselben Pakete, dieselben Preise" />
          <PricingMatrix />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <PaymentIcons />
            <span className="text-xs muted">Sichere Zahlung · Aktivierung in 5–15 Minuten</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px max-w-3xl">
          <h2 className="text-[1.6rem] md:text-[1.95rem] font-extrabold leading-[1.2] mb-6">
            Warum österreichische Zuschauer wechseln
          </h2>
          <div className="space-y-4 muted leading-relaxed">
            <p>
              Wer in Österreich wohnt oder von Deutschland aus österreichisches
              Fernsehen sehen möchte, stößt schnell an Grenzen: Geoblocking bei
              den Mediatheken, unvollständige Senderlisten bei Kabelanbietern,
              oder ein Aufpreis für genau die vier Sender, die man eigentlich
              sehen will.
            </p>
            <p>
              Bei uns ist die österreichische Liste Teil des Standardpakets. Die
              Bundesliga, Skispringen und der Weltcup laufen über ORF und
              ServusTV genauso wie die deutschen Übertragungen — du entscheidest,
              welchen Kommentar du hörst.
            </p>
            <p>
              Unsere Server in Frankfurt und Amsterdam liegen nah genug an
              Österreich, dass die Verbindung stabil bleibt. Bestellung,
              Einrichtung und Support laufen auf Deutsch über WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
