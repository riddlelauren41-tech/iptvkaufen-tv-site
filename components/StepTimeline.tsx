const STEPS = [
  {
    n: "01",
    title: "Paket wählen",
    desc: "Laufzeit und Anzahl der Bildschirme aussuchen. Keine Registrierung, kein Konto — du schreibst uns direkt auf WhatsApp.",
  },
  {
    n: "02",
    title: "Zugangsdaten erhalten",
    desc: "Nach der Zahlung bekommst du deine Daten und eine Anleitung, die genau zu deinem Gerät passt — meist innerhalb von 5 bis 15 Minuten.",
  },
  {
    n: "03",
    title: "App einrichten und schauen",
    desc: "App installieren, Daten eintragen, fertig. Wenn etwas hakt, gehen wir es gemeinsam per WhatsApp durch, bis das Bild läuft.",
  },
];

export default function StepTimeline() {
  return (
    <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
      {/* Connecting rule sits behind the numbers on desktop only. */}
      <div className="hidden md:block absolute left-0 right-0 top-[1.15rem] h-px bg-line" aria-hidden="true" />

      {STEPS.map((s) => (
        <div key={s.n} className="relative">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-canvas font-display text-xs font-bold text-forest">
            {s.n}
          </div>
          <h3 className="font-display font-extrabold text-lg mt-5 mb-2">{s.title}</h3>
          <p className="muted text-sm leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
