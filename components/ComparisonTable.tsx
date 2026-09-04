import { Check, X } from "lucide-react";

const ROWS = [
  { feature: "Sofortige Aktivierung (±5 Minuten)", us: true, others: false },
  { feature: "Anti-Buffer EU-Server", us: true, others: false },
  { feature: "Stabile 4K/Full-HD-Wiedergabe", us: true, others: false },
  { feature: "24/7 WhatsApp-Support", us: true, others: false },
  { feature: "7 Tage Geld-zurück-Garantie", us: true, others: false },
  { feature: "Kompatibel mit allen IPTV-Apps", us: true, others: true },
  { feature: "Versteckte Kosten", us: false, others: true },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full max-w-3xl mx-auto border-separate border-spacing-0 text-sm">
        <thead>
          <tr>
            <th className="text-left font-medium muted pb-4 pr-4">Merkmal</th>
            <th className="pb-4 px-4">
              <span className="inline-flex items-center gap-1.5 font-display font-bold text-violet">
                IPTV<span className="gradient-text">Kaufen</span>
              </span>
            </th>
            <th className="pb-4 pl-4 font-medium muted">Andere Anbieter</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : ""}>
              <td className="py-3.5 pr-4 rounded-l-xl pl-4">{row.feature}</td>
              <td className="py-3.5 px-4 text-center">
                {row.us ? (
                  <Check size={20} className="mx-auto text-emerald-500" />
                ) : (
                  <X size={20} className="mx-auto text-rose-500" />
                )}
              </td>
              <td className="py-3.5 pl-4 pr-4 text-center rounded-r-xl">
                {row.others ? (
                  <Check size={20} className="mx-auto text-emerald-500" />
                ) : (
                  <X size={20} className="mx-auto text-rose-500" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
