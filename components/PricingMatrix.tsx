import { Check, Minus } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { PLANS, priceDE } from "@/lib/plans";

// Rows are the comparison axis; the four durations are the columns. Deliberately
// a matrix rather than four repeated pricing cards -- it lets a shopper read
// across a single feature line instead of diffing four stacked lists.
const ROWS: { label: string; value: (i: number) => React.ReactNode }[] = [
  { label: "Preis", value: (i) => <span className="font-display font-extrabold text-lg">{priceDE(PLANS[i].price)}</span> },
  { label: "Preis pro Monat", value: (i) => <span className="text-muted">{priceDE(PLANS[i].price / [3, 6, 12, 24][i])}</span> },
  { label: "Gleichzeitige Bildschirme", value: (i) => <span className="font-medium">{[1, 2, 3, 3][i]}</span> },
  { label: "21.000+ Sender", value: () => <Check size={17} strokeWidth={2} className="mx-auto text-forest" /> },
  { label: "63.000+ Filme & Serien", value: () => <Check size={17} strokeWidth={2} className="mx-auto text-forest" /> },
  { label: "HD / Full HD / 4K", value: () => <Check size={17} strokeWidth={2} className="mx-auto text-forest" /> },
  { label: "EPG & Replay", value: () => <Check size={17} strokeWidth={2} className="mx-auto text-forest" /> },
  { label: "WhatsApp-Support 7/7", value: (i) => (i >= 1 ? <span className="text-xs font-medium">Priority</span> : <Check size={17} strokeWidth={2} className="mx-auto text-forest" />) },
  { label: "Kostenlose Installationshilfe", value: (i) => (i >= 2 ? <Check size={17} strokeWidth={2} className="mx-auto text-forest" /> : <Minus size={16} strokeWidth={1.5} className="mx-auto text-muted/35" />) },
  { label: "7 Tage Geld-zurück-Garantie", value: () => <Check size={17} strokeWidth={2} className="mx-auto text-forest" /> },
];

export default function PricingMatrix() {
  return (
    <div className="card overflow-x-auto">
      <table className="matrix min-w-[720px]">
        <thead>
          <tr>
            <th className="w-[34%]" />
            {PLANS.map((p, i) => (
              <th key={p.id} className={p.featured ? "col-featured" : ""}>
                {p.badge && (
                  <span className="mb-2 inline-block rounded bg-forest px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                    {p.badge}
                  </span>
                )}
                <span className="block font-display font-bold text-ink text-base">{p.duration}</span>
                <span className="block text-xs text-muted font-normal mt-0.5">{p.screens}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              {PLANS.map((p, i) => (
                <td key={p.id} className={p.featured ? "col-featured" : ""}>
                  {row.value(i)}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td />
            {PLANS.map((p) => (
              <td key={p.id} className={p.featured ? "col-featured pb-5" : "pb-5"}>
                <a
                  href={whatsappUrl(`Hallo, ich möchte das ${p.duration}-Paket bestellen (${priceDE(p.price)}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${p.featured ? "btn-primary" : "btn-secondary"} w-full text-[0.82rem] px-3 py-2.5`}
                >
                  Bestellen
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
