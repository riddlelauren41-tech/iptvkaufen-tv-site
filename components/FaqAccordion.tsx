"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto border-t border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-b border-line">
            <button
              className="w-full flex items-start justify-between gap-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-[1.02rem] leading-snug">{item.question}</span>
              <span className="shrink-0 mt-0.5 text-forest">
                {isOpen ? <Minus size={18} strokeWidth={1.75} /> : <Plus size={18} strokeWidth={1.75} />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-10 text-sm muted leading-relaxed">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
