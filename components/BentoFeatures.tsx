import { Zap, Tv, Headset, Trophy, Film } from "lucide-react";

// Deliberately uneven: one wide lead tile, then a 2+2 mix. Reads as a composed
// layout rather than a row of identical feature cards.
export default function BentoFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="card md:col-span-2 p-8 flex flex-col justify-between min-h-[220px]">
        <div>
          <Zap size={22} strokeWidth={1.5} className="text-forest" />
          <h3 className="font-display font-extrabold text-xl mt-5 mb-2.5">
            Streams, die auch am Samstagabend halten
          </h3>
          <p className="muted text-sm leading-relaxed max-w-lg">
            Unsere Anti-Buffer-Server stehen in der EU und sind auf Lastspitzen
            ausgelegt. Wenn zum Anpfiff Tausende gleichzeitig einschalten, läuft
            dein Stream weiter — ohne Einfrieren in der 89. Minute, ohne
            Verzögerung gegenüber der Live-Übertragung.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 pt-5 border-t border-line text-xs muted">
          <span>99,9% Verfügbarkeit</span>
          <span>Server in Frankfurt &amp; Amsterdam</span>
          <span>Kein Throttling</span>
        </div>
      </div>

      <div className="card p-8 min-h-[220px]">
        <Tv size={22} strokeWidth={1.5} className="text-forest" />
        <h3 className="font-display font-extrabold text-lg mt-5 mb-2.5">
          Läuft auf dem, was du hast
        </h3>
        <p className="muted text-sm leading-relaxed">
          Samsung und LG Smart TV, Fire TV Stick, Apple TV, Android, iOS, PC und
          Mac. M3U und Xtream Codes — ein Abo für jeden Bildschirm im Haushalt.
        </p>
      </div>

      <div className="card p-8">
        <Headset size={22} strokeWidth={1.5} className="text-forest" />
        <h3 className="font-display font-extrabold text-lg mt-5 mb-2.5">
          Ein Mensch am anderen Ende
        </h3>
        <p className="muted text-sm leading-relaxed">
          Kein Ticketsystem, keine Warteschleife. Du schreibst auf WhatsApp und
          bekommst eine Antwort — von der ersten Frage bis zur fertigen
          Einrichtung.
        </p>
      </div>

      <div className="card p-8">
        <Trophy size={22} strokeWidth={1.5} className="text-forest" />
        <h3 className="font-display font-extrabold text-lg mt-5 mb-2.5">
          Keine Bindung, keine Fallen
        </h3>
        <p className="muted text-sm leading-relaxed">
          Klare Laufzeiten, klare Preise, keine automatische Verlängerung und
          keine versteckten Gebühren. Was du buchst, ist was du zahlst.
        </p>
      </div>

      <div className="card p-8">
        <Film size={22} strokeWidth={1.5} className="text-forest" />
        <h3 className="font-display font-extrabold text-lg mt-5 mb-2.5">
          63.000 Filme und Serien
        </h3>
        <p className="muted text-sm leading-relaxed">
          Eine VOD-Bibliothek, die wöchentlich wächst — Blockbuster, Serien,
          Dokumentationen, in HD und 4K, mit deutschem Ton.
        </p>
      </div>
    </div>
  );
}
