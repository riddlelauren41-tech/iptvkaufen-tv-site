import type { Metadata } from "next";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { pageMeta, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Kontakt | IPTV Kaufen — WhatsApp-Support 7/7",
  description:
    "Kontaktiere IPTV Kaufen über WhatsApp oder E-Mail. Schnelle Antwort, 7 Tage die Woche erreichbar für Fragen und Support.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <section className="dark-block section pb-16">
        <div className="container-px text-center">
          <span className="eyebrow text-sky">Kontakt</span>
          <h1 className="text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto">
            Nimm <span className="gradient-text">Kontakt</span> auf
          </h1>
          <p className="muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Fragen zu deinem Abo, der Installation oder deiner Bestellung? Wir
            helfen dir gerne weiter, 7 Tage die Woche.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card p-7 text-center">
            <div className="mx-auto h-12 w-12 rounded-xl bg-linear-to-br from-indigo to-violet flex items-center justify-center mb-4">
              <MessageCircle size={22} className="text-white" />
            </div>
            <h2 className="font-semibold mb-2">WhatsApp</h2>
            <p className="muted text-sm mb-4">Der schnellste Weg, uns zu erreichen.</p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm w-full">
              Chat starten
            </a>
          </div>

          <div className="card p-7 text-center">
            <div className="mx-auto h-12 w-12 rounded-xl bg-linear-to-br from-indigo to-violet flex items-center justify-center mb-4">
              <Mail size={22} className="text-white" />
            </div>
            <h2 className="font-semibold mb-2">E-Mail</h2>
            <p className="muted text-sm mb-4">Für ausführlichere Fragen.</p>
            <a href="mailto:info@iptvkaufen-tv.site" className="btn-ghost text-sm w-full">
              Schreib uns
            </a>
          </div>

          <div className="card p-7 text-center">
            <div className="mx-auto h-12 w-12 rounded-xl bg-linear-to-br from-indigo to-violet flex items-center justify-center mb-4">
              <Clock size={22} className="text-white" />
            </div>
            <h2 className="font-semibold mb-2">Erreichbarkeit</h2>
            <p className="muted text-sm">7 Tage die Woche, schnelle Reaktionszeit.</p>
          </div>
        </div>
      </section>
    </>
  );
}
