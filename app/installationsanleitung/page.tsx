import type { Metadata } from "next";
import { Monitor, Smartphone, Apple, Cast, Laptop, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import StepTimeline from "@/components/StepTimeline";
import { pageMeta, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Installationsanleitung | IPTV Kaufen — IPTV in 5 Minuten einrichten",
  description:
    "IPTV einrichten auf Smart TV, Fire Stick, Android, iPhone oder PC. Schritt-für-Schritt-Anleitung pro Gerät, mit Begleitung per WhatsApp.",
  path: "/installationsanleitung",
});

const DEVICES = [
  {
    icon: Monitor,
    name: "Smart TV (Samsung / LG)",
    steps: [
      "App Store des Fernsehers öffnen und IPTV Smarters Pro oder Smart IPTV installieren.",
      "App öffnen und die Zugangsdaten eingeben, die du von uns per WhatsApp bekommst.",
      "Warten, bis die Senderliste geladen ist — danach ist alles einsatzbereit.",
    ],
  },
  {
    icon: Cast,
    name: "Fire TV Stick / Android TV",
    steps: [
      "TiviMate oder IPTV Smarters über den Amazon- bzw. Google-Play-Store installieren.",
      "Bei der Einrichtung den M3U-Link oder die Xtream-Zugangsdaten eintragen.",
      "Kategorien durchsuchen oder direkt nach einem Sender suchen.",
    ],
  },
  {
    icon: Smartphone,
    name: "Android-Handy / Tablet",
    steps: [
      "IPTV Smarters Pro aus dem Google Play Store laden.",
      "Mit den Zugangsdaten anmelden, die du über WhatsApp erhältst.",
      "Direkt auf dem Handy schauen oder per Chromecast auf den Fernseher werfen.",
    ],
  },
  {
    icon: Apple,
    name: "iPhone / iPad / Apple TV",
    steps: [
      "GSE Smart IPTV oder IPTV Smarters aus dem App Store laden.",
      "Zugangsdaten oder M3U-Link eingeben.",
      "Live-TV und Mediathek nutzen, auf Wunsch per AirPlay am Fernseher.",
    ],
  },
  {
    icon: Laptop,
    name: "PC / Mac",
    steps: [
      "VLC Media Player oder IPTV Smarters Pro für Windows bzw. macOS installieren.",
      "Playlist über den M3U-Link öffnen, den du von uns bekommst.",
      "Loslegen — zusätzliche Hardware ist nicht nötig.",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "IPTV auf jedem Gerät einrichten",
  step: DEVICES.flatMap((d) =>
    d.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: `${d.name} — Schritt ${i + 1}`, text: s }))
  ),
};

export default function InstallationsanleitungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section pt-14 md:pt-20 pb-12">
        <div className="container-px max-w-3xl">
          <span className="eyebrow mb-6">Einrichtung</span>
          <h1 className="text-[2.4rem] md:text-[3.1rem] font-extrabold leading-[1.08] mb-6">
            In <span className="marker">fünf Minuten</span> eingerichtet
          </h1>
          <p className="muted text-[1.05rem] leading-relaxed mb-8">
            Du brauchst nur das Gerät, auf dem du schauen willst, und die
            Zugangsdaten von uns. Wenn etwas hakt, gehen wir es gemeinsam per
            WhatsApp durch — auch abends und am Wochenende.
          </p>
          <a href={whatsappUrl("Hallo, ich brauche Hilfe bei der Einrichtung von IPTV.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={17} strokeWidth={1.75} />
            Hilfe per WhatsApp
          </a>
        </div>
      </section>

      <section className="section band-sand">
        <div className="container-px">
          <SectionHeader eyebrow="Ablauf" title="So läuft es ab" />
          <StepTimeline />
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <SectionHeader
            eyebrow="Pro Gerät"
            title="Anleitung für dein Gerät"
            description="Such dir dein Gerät heraus — die Schritte sind überall ähnlich, unterscheiden sich aber im Detail."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {DEVICES.map((d) => (
              <div key={d.name} className="card p-7">
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-line">
                  <d.icon size={20} strokeWidth={1.5} className="text-forest shrink-0" />
                  <h2 className="font-display font-extrabold text-base">{d.name}</h2>
                </div>
                <ol className="space-y-4">
                  {d.steps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="shrink-0 font-display text-xs font-bold text-forest mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="muted">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
