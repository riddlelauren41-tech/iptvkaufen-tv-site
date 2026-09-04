import { Check } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { MultiScreenPlan, priceDE } from "@/lib/plans";

export default function MultiScreenCard({ plan }: { plan: MultiScreenPlan }) {
  return (
    <div className="card flex flex-col p-6">
      <div className="flex items-baseline justify-between gap-3 pb-4 border-b border-line">
        <span className="font-display font-bold">{plan.screens}</span>
        <span className="font-display font-extrabold text-xl">{priceDE(plan.price)}</span>
      </div>
      <p className="text-sm muted mt-4 leading-relaxed">{plan.tagline}</p>

      <ul className="mt-5 space-y-2 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm muted">
            <Check size={15} strokeWidth={2} className="text-forest shrink-0 mt-1" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl(`Hallo, ich möchte das Paket mit ${plan.screens.toLowerCase()} bestellen (${priceDE(plan.price)}).`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-6 text-sm w-full"
      >
        Anfragen
      </a>
    </div>
  );
}
