export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {eyebrow && <span className="eyebrow eyebrow-center mb-4">{eyebrow}</span>}
      <h2 className="text-[1.85rem] md:text-[2.35rem] font-extrabold leading-[1.15]">{title}</h2>
      {description && <p className="muted mt-4 leading-relaxed">{description}</p>}
    </div>
  );
}
