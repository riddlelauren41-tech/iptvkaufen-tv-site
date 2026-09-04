import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { pageMeta, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "FAQ | IPTV Kaufen — Häufig gestellte Fragen zu IPTV",
  description:
    "Antworten auf die häufigsten Fragen zu IPTV: Aktivierung, Geräte, Zahlungsmethoden, Geld-zurück-Garantie und Laufzeiten.",
  path: "/faq",
});

const GROUPS = [
  {
    heading: "Erste Schritte",
    items: [
      {
        question: "Was genau ist IPTV?",
        answer:
          "IPTV steht für Internet Protocol Television: Fernsehen über die Internetleitung statt über Kabel, Satellit oder Antenne. Du installierst eine App auf deinem Fernseher, Handy oder PC, gibst deine Zugangsdaten ein und siehst Live-Sender sowie eine Mediathek mit Filmen und Serien. Technisch brauchst du nur eine stabile Verbindung mit mindestens 15 Mbit/s für HD und rund 25 Mbit/s für 4K.",
      },
      {
        question: "Wie lange dauert es, bis mein Abo aktiv ist?",
        answer:
          "Meist zwischen 5 und 15 Minuten nach der Bestellung. Du bekommst deine Zugangsdaten und eine passende Anleitung über WhatsApp. Sollte etwas nicht funktionieren, gehen wir die Schritte direkt mit dir durch, bis das Bild läuft.",
      },
      {
        question: "Brauche ich zusätzliche Hardware?",
        answer:
          "Nein. IPTV läuft über die Geräte, die du bereits hast — Smart TV, Fire TV Stick, Handy, Tablet oder Computer. Ein Receiver oder eine Satellitenschüssel ist nicht nötig, ebenso wenig ein Technikertermin. Wenn dein Fernseher älter ist und keine Apps unterstützt, reicht ein Fire TV Stick für rund 40 Euro.",
      },
    ],
  },
  {
    heading: "Geräte und Technik",
    items: [
      {
        question: "Welche Geräte sind kompatibel?",
        answer:
          "Smart TVs von Samsung, LG und Philips, Android TV und Google TV, Fire TV Stick, Apple TV, Android- und iOS-Geräte, PC und Mac sowie MAG- und Formuler-Boxen. Als Player empfehlen wir je nach Gerät TiviMate, IPTV Smarters Pro oder XCIPTV.",
      },
      {
        question: "Kann ich auf mehreren Geräten gleichzeitig schauen?",
        answer:
          "Ja, sofern dein Paket mehrere Bildschirme enthält. Das 3-Monats-Paket ist für einen Bildschirm ausgelegt, die längeren Laufzeiten für zwei bzw. drei. Wenn mehr Personen gleichzeitig schauen sollen, gibt es die separaten Mehrbildschirm-Pakete für zwei, drei oder vier Geräte.",
      },
      {
        question: "Was tun, wenn das Bild ruckelt?",
        answer:
          "In den meisten Fällen liegt es nicht am Stream, sondern am WLAN. Ein Test per LAN-Kabel zeigt das schnell. Hilft das nicht, wechseln wir dich auf einen anderen Server oder passen die Streamqualität in der App an. Schreib uns einfach — solche Fälle klären wir normalerweise in wenigen Minuten.",
      },
    ],
  },
  {
    heading: "Bezahlung und Konditionen",
    items: [
      {
        question: "Welche Zahlungsmethoden akzeptiert ihr?",
        answer:
          "PayPal, SEPA-Überweisung, Sofortüberweisung sowie Visa und Mastercard. Jede Zahlung läuft über eine gesicherte Verbindung. Nach Zahlungseingang bekommst du eine Bestätigung per WhatsApp mit den nächsten Schritten.",
      },
      {
        question: "Gibt es eine Geld-zurück-Garantie?",
        answer:
          "Ja, sieben Tage auf jedes Paket. Wenn Stabilität, Bildqualität oder Senderauswahl nicht passen, bekommst du dein Geld zurück, ohne Diskussion. Wir bitten nur darum, dass du uns die Probleme vorher kurz schilderst, damit wir sie eventuell direkt beheben können.",
      },
      {
        question: "Verlängert sich das Abo automatisch?",
        answer:
          "Nein. Es gibt keine automatische Verlängerung und keine Kündigungsfrist. Du buchst eine feste Laufzeit und entscheidest am Ende selbst, ob du weitermachst. Wir melden uns rechtzeitig, aber es wird nie ohne deine Zustimmung etwas abgebucht.",
      },
      {
        question: "Funktioniert IPTV Kaufen auch in Österreich und der Schweiz?",
        answer:
          "Ja. ORF 1, ORF 2, ORF III, ServusTV, ATV und Puls 4 sind ebenso enthalten wie SRF 1, SRF zwei und SRF info — ohne Aufpreis. Details dazu findest du auf unserer Seite zu IPTV Österreich.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROUPS.flatMap((g) =>
    g.items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section pt-14 md:pt-20 pb-12">
        <div className="container-px max-w-3xl">
          <span className="eyebrow mb-6">FAQ</span>
          <h1 className="text-[2.4rem] md:text-[3.1rem] font-extrabold leading-[1.08] mb-6">
            Fragen, die vor dem Kauf <span className="marker">wirklich zählen</span>
          </h1>
          <p className="muted text-[1.05rem] leading-relaxed mb-8">
            Wenn deine Frage hier nicht steht, schreib uns direkt auf WhatsApp.
            Wir antworten in der Regel innerhalb weniger Minuten.
          </p>
          <a href={whatsappUrl("Hallo, ich habe eine Frage zu IPTV.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Frage per WhatsApp stellen
            <ArrowRight size={17} strokeWidth={2} />
          </a>
        </div>
      </section>

      {GROUPS.map((g, i) => (
        <section key={g.heading} className={`section ${i % 2 === 0 ? "band-sand" : ""}`}>
          <div className="container-px">
            <div className="max-w-3xl mx-auto mb-8">
              <span className="eyebrow">{g.heading}</span>
            </div>
            <FaqAccordion items={g.items} />
          </div>
        </section>
      ))}
    </>
  );
}
