import type { Metadata } from "next";
import { Tv, Smartphone, Apple, MonitorSmartphone, Laptop } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { pageMeta, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Installationsanleitung | IPTV Kaufen — IPTV Schritt für Schritt installieren",
  description:
    "IPTV installieren auf Smart TV, Fire Stick, Android, iPhone oder PC? Folge unserer Schritt-für-Schritt-Anleitung. Fertig in 5 Minuten ✓ Mit WhatsApp-Begleitung.",
  path: "/installationsanleitung",
});

const DEVICES = [
  {
    icon: Tv,
    name: "Smart TV (Samsung / LG)",
    steps: [
      "Öffne den App Store deines Smart TVs und installiere IPTV Smarters oder Smart IPTV.",
      "Öffne die App und gib die Zugangsdaten ein, die du von uns erhältst.",
      "Warte, bis die Senderliste geladen ist — fertig zum Schauen.",
    ],
  },
  {
    icon: MonitorSmartphone,
    name: "Fire TV Stick / Android TV",
    steps: [
      "Installiere TiviMate oder IPTV Smarters über den Amazon/Google Play Store.",
      "Gib deinen M3U-Link oder deine Xtream-Daten bei der Einrichtung der App ein.",
      "Durchsuche Kategorien oder suche direkt nach deinem Lieblingssender.",
    ],
  },
  {
    icon: Smartphone,
    name: "Android-Handy / Tablet",
    steps: [
      "Lade IPTV Smarters Pro über den Google Play Store herunter.",
      "Melde dich mit den Daten an, die du über WhatsApp erhältst.",
      "Streame direkt auf deinem Handy oder übertrage per Chromecast auf deinen Fernseher.",
    ],
  },
  {
    icon: Apple,
    name: "iPhone / iPad / Apple TV",
    steps: [
      "Lade GSE Smart IPTV oder IPTV Smarters über den App Store herunter.",
      "Gib deine Zugangsdaten oder deinen M3U-Link ein.",
      "Genieße Live-TV und VOD, auch per AirPlay auf deinem Fernseher.",
    ],
  },
  {
    icon: Laptop,
    name: "PC / Mac",
    steps: [
      "Installiere VLC Media Player oder IPTV Smarters Pro (Windows/macOS).",
      "Öffne die Playlist mit dem M3U-Link, den du von uns erhältst.",
      "Beginne mit dem Schauen — keine zusätzliche Hardware nötig.",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "IPTV auf jedem Gerät installieren",
  step: DEVICES.flatMap((d) =>
    d.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: `${d.name} — Schritt ${i + 1}`, text: s }))
  ),
};

export default function InstallationsanleitungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="dark-block section pb-16">
        <div className="container-px text-center">
          <span className="eyebrow text-sky">Installationsanleitung</span>
          <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto">
            IPTV installieren — <span className="gradient-text">Schritt für Schritt</span>
          </h1>
          <p className="muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Fertig in 5 Minuten auf deinem Smart TV, Fire Stick, Handy oder PC.
            Kommst du nicht weiter? Wir helfen dir live über WhatsApp.
          </p>
          <a href={whatsappUrl("Hallo, ich brauche Hilfe bei der Installation von IPTV.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Hilfe nötig? Chatte über WhatsApp
          </a>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px">
          <SectionHeader eyebrow="Pro Gerät" title="Wähle dein Gerät und installiere IPTV" />
          <div className="grid md:grid-cols-2 gap-6">
            {DEVICES.map((d) => (
              <div key={d.name} className="card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-linear-to-br from-indigo to-violet flex items-center justify-center shrink-0">
                    <d.icon size={20} className="text-white" />
                  </div>
                  <h2 className="font-semibold text-lg">{d.name}</h2>
                </div>
                <ol className="space-y-3">
                  {d.steps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="shrink-0 h-6 w-6 rounded-full bg-body flex items-center justify-center text-xs font-semibold text-violet border border-border">
                        {i + 1}
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
