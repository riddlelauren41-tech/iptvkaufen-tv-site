import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function StickyWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat über WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-lg bg-forest px-4 py-3 text-sm font-display font-bold text-white shadow-[0_12px_32px_-12px_rgba(14,71,53,0.6)] transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle size={18} strokeWidth={1.75} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
