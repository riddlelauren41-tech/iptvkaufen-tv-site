// Plain text badges rather than trademarked brand artwork -- standard,
// legally safe informational usage.
const METHODS = ["Visa", "Mastercard", "PayPal", "SEPA", "Sofort"];

export default function PaymentIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {METHODS.map((m) => (
        <span
          key={m}
          className="rounded-md border border-line bg-surface px-2.5 py-1 text-[0.7rem] font-medium text-muted"
        >
          {m}
        </span>
      ))}
    </div>
  );
}
