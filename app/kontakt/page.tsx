import type { Metadata } from "next";
import { MessageCircle, Mail, Clock, ArrowRight } from "lucide-react";
import { pageMeta, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Kontakt | IPTV Kaufen — Support 7 Tage die Woche",
  description:
    "Kontaktiere IPTV Kaufen per WhatsApp oder E-Mail. Schnelle Antwort, sieben Tage die Woche, für Fragen vor dem Kauf und Hilfe bei der Einrichtung.",
  path: "/kontakt",
});

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Der schnellste Weg. Bestellung, Einrichtung und Support laufen hier — meist antworten wir innerhalb weniger Minuten.",
    action: { label: "Chat öffnen", href: null },
  },
  {
    icon: Mail,
    title: "E-Mail",
    desc: "Für ausführlichere Anfragen, Rechnungen oder wenn du lieber schriftlich festhältst. Antwort in der Regel am selben Tag.",
    action: { label: "info@iptvkaufen-tv.site", href: "mailto:info@iptvkaufen-tv.site" },
  },
  {
    icon: Clock,
    title: "Erreichbarkeit",
    desc: "Sieben Tage die Woche, auch abends und am Wochenende — also genau dann, wenn die meisten ihre Geräte einrichten.",
    action: null,
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="section pt-14 md:pt-20 pb-12">
        <div className="container-px max-w-3xl">
          <span className="eyebrow mb-6">Kontakt</span>
          <h1 className="text-[2.4rem] md:text-[3.1rem] font-extrabold leading-[1.08] mb-6">
            Ein Ansprechpartner, <span className="marker">kein Ticketsystem</span>
          </h1>
          <p className="muted text-[1.05rem] leading-relaxed mb-8">
            Ob Frage vor dem Kauf, Hilfe bei der Einrichtung oder ein Problem mit
            dem Stream: Du schreibst uns und bekommst eine Antwort von einem
            Menschen, auf Deutsch.
          </p>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            WhatsApp-Chat starten
            <ArrowRight size={17} strokeWidth={2} />
          </a>
        </div>
      </section>

      <section className="section band-sand">
        <div className="container-px grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          {CHANNELS.map((c) => (
            <div key={c.title} className="card p-7 flex flex-col">
              <c.icon size={20} strokeWidth={1.5} className="text-forest" />
              <h2 className="font-display font-extrabold text-lg mt-5 mb-2.5">{c.title}</h2>
              <p className="muted text-sm leading-relaxed flex-1">{c.desc}</p>
              {c.action && (
                <div className="mt-6">
                  {c.action.href ? (
                    <a href={c.action.href} className="btn-secondary text-sm w-full">
                      {c.action.label}
                    </a>
                  ) : (
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm w-full"
                    >
                      {c.action.label}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
