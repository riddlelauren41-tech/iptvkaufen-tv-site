import { Check } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { MultiScreenPlan, priceDE } from "@/lib/plans";

export default function MultiScreenCard({ plan }: { plan: MultiScreenPlan }) {
  return (
    <div className="card flex flex-col p-7">
      <p className="text-sm font-semibold muted">{plan.screens}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-4xl font-bold font-display">{priceDE(plan.price)}</span>
        <span className="text-sm muted">/ 12 Monate</span>
      </div>
      <p className="text-sm font-medium text-violet mt-3">{plan.tagline}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check size={18} className="text-violet shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl(`Hallo, ich möchte das Paket mit ${plan.screens.toLowerCase()} bestellen (${priceDE(plan.price)}).`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-7 text-center"
      >
        Jetzt bestellen &mdash; {priceDE(plan.price)}
      </a>
    </div>
  );
}
