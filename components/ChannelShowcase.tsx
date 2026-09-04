// A German-market channel/genre overview -- content this site has and the
// other market sites do not, so it doubles as on-page differentiation.
const GROUPS = [
  {
    label: "Sport",
    channels: ["Sky Sport", "DAZN", "Sport1", "Eurosport", "ORF Sport+", "SRF zwei"],
    note: "Bundesliga, Champions League, Formel 1, DFB-Pokal",
  },
  {
    label: "Vollprogramm",
    channels: ["Das Erste", "ZDF", "RTL", "SAT.1", "ProSieben", "VOX"],
    note: "Alle großen deutschen Free-TV-Sender in HD",
  },
  {
    label: "Film & Serie",
    channels: ["Sky Cinema", "13th Street", "Syfy", "TNT Serie", "Warner TV", "Universal"],
    note: "Pay-TV-Kanäle plus 63.000 Titel auf Abruf",
  },
  {
    label: "Regional & DACH",
    channels: ["ORF 1", "ORF 2", "ServusTV", "SRF 1", "BR", "WDR"],
    note: "Österreich und Schweiz vollständig enthalten",
  },
  {
    label: "International",
    channels: ["BBC", "CNN", "TRT", "beIN", "Canal+", "Rai"],
    note: "Über 100 Länder, für jeden Haushalt etwas",
  },
];

export default function ChannelShowcase() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {GROUPS.map((g) => (
        <div key={g.label} className="card p-6">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="font-display font-extrabold text-base">{g.label}</h3>
            <span className="text-[0.68rem] uppercase tracking-wider text-forest font-semibold">HD / 4K</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {g.channels.map((c) => (
              <span
                key={c}
                className="rounded border border-line bg-canvas px-2 py-1 text-[0.72rem] text-muted"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs muted mt-4 pt-4 border-t border-line leading-relaxed">{g.note}</p>
        </div>
      ))}

      <div className="card p-6 bg-forest-soft border-forest-soft flex flex-col justify-center">
        <p className="font-display font-extrabold text-2xl text-forest">21.000+</p>
        <p className="text-sm text-forest/80 mt-1 leading-snug">
          Sender insgesamt, inklusive aller hier gezeigten Gruppen — plus
          Kinderprogramm, Musik, Doku und Regionalsender.
        </p>
      </div>
    </div>
  );
}
