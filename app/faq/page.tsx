import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { pageMeta, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "FAQ | IPTV Kaufen — Häufig gestellte Fragen zu IPTV",
  description:
    "Häufig gestellte Fragen zu IPTV bei IPTV Kaufen. Wie funktioniert IPTV? Welche Geräte? Zahlungsmethoden? Finde hier alle Antworten oder kontaktiere uns via WhatsApp.",
  path: "/faq",
});

const FAQS = [
  {
    question: "Was genau ist IPTV?",
    answer:
      "IPTV (Internet Protocol Television) ist Fernsehen über das Internet statt über Kabel, Satellit oder Antenne. Du schaust Live-TV, Filme und Serien über eine App auf deinem Smart TV, Handy, Tablet oder PC.",
  },
  {
    question: "Wie lange dauert es, mein IPTV-Abo zu aktivieren?",
    answer:
      "Nach der Bestellung erfolgt die Aktivierung in der Regel innerhalb von 5 bis 15 Minuten. Du erhältst deine Zugangsdaten und eine Installationsanleitung über WhatsApp.",
  },
  {
    question: "Welche Geräte sind mit IPTV Kaufen kompatibel?",
    answer:
      "Smart TV (Samsung/LG), Android TV/Google TV, Fire TV Stick, Apple TV, Android & iOS, PC/Mac, MAG und Formuler. Wir empfehlen TiviMate oder IPTV Smarters als Player-App.",
  },
  {
    question: "Wie installiere ich IPTV auf meinem Fernseher oder Handy?",
    answer:
      "Schau dir unsere Installationsanleitung für eine Schritt-für-Schritt-Anleitung pro Gerät an. Kommst du nicht weiter, begleitet dich unser WhatsApp-Support live.",
  },
  {
    question: "Gibt es eine Geld-zurück-Garantie?",
    answer:
      "Ja. Funktioniert der Dienst nicht wie gewünscht, bieten wir 7 Tage Geld-zurück-Garantie.",
  },
  {
    question: "Kann ich IPTV Kaufen auf mehreren Geräten gleichzeitig nutzen?",
    answer:
      "Ja, mit dem Familienpaket kannst du auf 2 Geräten gleichzeitig streamen. Für mehr gleichzeitige Geräte kannst du uns über WhatsApp kontaktieren.",
  },
  {
    question: "Funktioniert IPTV Kaufen auch in Österreich?",
    answer:
      "Ja. Neben der internationalen Senderliste enthält unser Abo auch alle großen österreichischen Sender wie ORF 1, ORF 2, ServusTV und ATV. Sieh dir unsere IPTV-Österreich-Seite für mehr Infos an.",
  },
  {
    question: "Welche Zahlungsmethoden akzeptiert ihr?",
    answer:
      "Wir besprechen die verfügbaren Zahlungsmethoden gerne persönlich über WhatsApp bei der Bestellung.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="dark-block section pb-16">
        <div className="container-px text-center">
          <span className="eyebrow text-sky">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-extrabold max-w-2xl mx-auto">
            Häufig gestellte <span className="gradient-text">Fragen</span>
          </h1>
          <p className="muted text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Deine Frage ist nicht dabei? Schick uns eine Nachricht über
            WhatsApp, wir antworten schnell.
          </p>
          <a href={whatsappUrl("Hallo, ich habe eine Frage zu IPTV.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            Stelle deine Frage über WhatsApp
          </a>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px">
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
