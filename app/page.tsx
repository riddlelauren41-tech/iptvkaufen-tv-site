import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Star, ArrowRight, Monitor, Smartphone, Tablet, Laptop, Cast } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import TrustStrip from "@/components/TrustStrip";
import BentoFeatures from "@/components/BentoFeatures";
import ChannelShowcase from "@/components/ChannelShowcase";
import StepTimeline from "@/components/StepTimeline";
import PricingMatrix from "@/components/PricingMatrix";
import MultiScreenCard from "@/components/MultiScreenCard";
import FaqAccordion from "@/components/FaqAccordion";
import PaymentIcons from "@/components/PaymentIcons";
import { pageMeta, whatsappUrl } from "@/lib/site";
import { PLANS, MULTI_SCREEN_PLANS, priceDE } from "@/lib/plans";

export const metadata: Metadata = pageMeta({
  title: "IPTV Kaufen | Bester IPTV Anbieter Deutschland – HD/4K stabil & unbegrenzt",
  description:
    "IPTV kaufen leicht gemacht: IPTV Kaufen bietet ein zuverlässiges IPTV-Abo mit 21.000+ Sendern in HD/4K, 24/7 WhatsApp-Support und 7 Tage Geld-zurück-Garantie.",
  path: "/",
});

const DEVICES = [
  { icon: Monitor, label: "Smart TV", note: "Samsung, LG, Philips" },
  { icon: Cast, label: "Streaming-Stick", note: "Fire TV, Chromecast, Apple TV" },
  { icon: Smartphone, label: "Smartphone", note: "Android und iOS" },
  { icon: Tablet, label: "Tablet", note: "iPad und Android-Tablets" },
  { icon: Laptop, label: "PC & Mac", note: "Windows, macOS, VLC" },
];

const APPS = ["IPTV Smarters Pro", "TiviMate", "XCIPTV", "IBO Player", "GSE Smart IPTV"];

const TESTIMONIALS = [
  {
    name: "Lukas M.",
    city: "Berlin",
    text: "Ich hatte vorher zwei andere Anbieter und beide sind sonntags zum Topspiel eingebrochen. Hier läuft es seit acht Monaten durch, auch an Champions-League-Abenden.",
  },
  {
    name: "Sophie B.",
    city: "München",
    text: "Was mich überzeugt hat, war der Support. Ich habe abends um halb elf geschrieben und hatte zehn Minuten später alles auf dem Fire Stick laufen.",
  },
  {
    name: "Thomas D.",
    city: "Hamburg",
    text: "Die ORF- und SRF-Sender waren für uns wichtig, weil meine Frau aus Wien kommt. Alles da, alles in HD, keine Diskussion.",
  },
  {
    name: "Emma L.",
    city: "Köln",
    text: "Drei Bildschirme gleichzeitig, ohne dass etwas ruckelt. Die Kinder streamen im Kinderzimmer, ich schaue Bundesliga im Wohnzimmer.",
  },
];

const FAQS = [
  {
    question: "Wie lange dauert es, bis mein IPTV-Abo aktiv ist?",
    answer:
      "In der Regel zwischen 5 und 15 Minuten nach der Bestellung. Du erhältst deine persönlichen Zugangsdaten und eine Installationsanleitung über WhatsApp, abgestimmt auf das Gerät, das du nutzt. Falls bei der Einrichtung etwas nicht klappt, geht unser Support die Schritte direkt mit dir durch. Du wartest also nie lange, bis du auf alle Sender und die komplette VOD-Bibliothek zugreifen kannst.",
  },
  {
    question: "Wie installiere ich die App auf meinem Smart TV oder Fire Stick?",
    answer:
      "Wir schicken dir eine Schritt-für-Schritt-Anleitung, die genau zu deinem Gerät passt. Für Samsung- und LG-Fernseher sowie den Fire TV Stick empfehlen wir IPTV Smarters Pro oder TiviMate — beide lassen sich direkt über den jeweiligen App Store installieren. Unser WhatsApp-Support begleitet dich live vom Download bis zur Eingabe der Zugangsdaten. Die komplette Einrichtung dauert meist nur wenige Minuten, auch wenn du vorher noch nie IPTV genutzt hast.",
  },
  {
    question: "Welche Geräte sind kompatibel?",
    answer:
      "IPTV Kaufen läuft auf praktisch jedem Gerät mit Internetverbindung: Smart TVs von Samsung, LG und Philips, Android TV und Google TV, Fire TV Stick, Apple TV, Android- und iOS-Geräte, PC und Mac sowie MAG- und Formuler-Boxen. Je nach Gerät empfehlen wir TiviMate, IPTV Smarters Pro oder XCIPTV als Player. Mit einem Mehrbildschirm-Paket kannst du auf mehreren Geräten gleichzeitig schauen. Wenn du unsicher bist, welche Kombination für dich passt, beraten wir dich vorher per WhatsApp.",
  },
  {
    question: "Welche Zahlungsmethoden akzeptiert ihr?",
    answer:
      "Wir akzeptieren PayPal, SEPA-Überweisung, Sofortüberweisung sowie Visa und Mastercard. Jede Zahlung läuft über eine gesicherte Verbindung, deine Daten bleiben geschützt. Nach Zahlungseingang bekommst du eine Bestätigung über WhatsApp mit den nächsten Schritten zur Aktivierung. Wenn du eine andere Zahlungsmethode bevorzugst, sprich uns einfach an.",
  },
  {
    question: "Gibt es eine Geld-zurück-Garantie?",
    answer:
      "Ja, auf jedes Paket gilt eine Geld-zurück-Garantie von 7 Tagen. Wenn du in dieser Zeit mit Stabilität, Bildqualität oder Senderauswahl nicht zufrieden bist, bekommst du dein Geld zurück — ohne komplizierte Bedingungen. Wir bitten dich lediglich, Probleme vorher kurz mit unserem Support zu teilen, damit wir sie direkt beheben können. So kannst du IPTV Kaufen ohne Risiko testen.",
  },
  {
    question: "Läuft das Abo automatisch weiter?",
    answer:
      "Nein. Es gibt keine automatische Verlängerung und keine stillschweigende Vertragsbindung. Du buchst eine feste Laufzeit — 3, 6, 12 oder 24 Monate — und entscheidest am Ende selbst, ob du verlängern möchtest. Wir erinnern dich rechtzeitig per WhatsApp, aber es wird nichts ohne deine Zustimmung abgebucht.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: asymmetric, copy left / device card right */}
      <section className="section pt-14 md:pt-20 pb-14 md:pb-20">
        <div className="container-px grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow mb-6">IPTV Abo für Deutschland</span>
            <h1 className="text-[2.5rem] md:text-[3.4rem] font-extrabold leading-[1.05] mb-6">
              Deutsches Fernsehen,{" "}
              <br className="hidden md:block" />
              <span className="marker">ohne Kabel</span> und ohne{" "}
              <br className="hidden md:block" />
              Vertragsbindung.
            </h1>
            <p className="muted text-[1.05rem] leading-relaxed max-w-xl mb-8">
              21.000 Sender und 63.000 Filme und Serien in HD und 4K — auf dem
              Fernseher, den du schon hast. Bestellung und Einrichtung laufen
              über WhatsApp, meist bist du in einer Viertelstunde auf Sendung.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Abo per WhatsApp starten
                <ArrowRight size={17} strokeWidth={2} />
              </a>
              <Link href="#preise" className="btn-secondary">
                Preise vergleichen
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-2 muted">
                <Check size={15} strokeWidth={2.5} className="text-forest" /> Ab {priceDE(PLANS[0].price)}
              </span>
              <span className="inline-flex items-center gap-2 muted">
                <Check size={15} strokeWidth={2.5} className="text-forest" /> 7 Tage Geld zurück
              </span>
              <span className="inline-flex items-center gap-2 muted">
                <Check size={15} strokeWidth={2.5} className="text-forest" /> Keine Verlängerung
              </span>
            </div>
          </div>

          {/* Floating device card -- the one raised element on the page. */}
          <div className="raised overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/img/hero-tv.jpg"
                alt="Wohnzimmer mit Fernseher, auf dem Live-Fußball läuft"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-t border-line">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-forest opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
                </span>
                <span className="text-xs font-medium">Jetzt live</span>
              </div>
              <div className="flex items-center gap-1.5 overflow-hidden">
                {["Bundesliga", "Formel 1", "ORF 1", "Sky"].map((c) => (
                  <span key={c} className="rounded border border-line px-2 py-0.5 text-[0.68rem] text-muted whitespace-nowrap">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Bento value grid */}
      <section className="section">
        <div className="container-px">
          <SectionHeader
            eyebrow="Warum IPTV Kaufen"
            title={<>Ein Abo, das im Alltag <span className="marker">tatsächlich hält</span></>}
            description="Die meisten IPTV-Angebote sehen auf dem Papier gleich aus. Der Unterschied zeigt sich, wenn viele gleichzeitig einschalten — und wenn etwas nicht funktioniert."
          />
          <BentoFeatures />
        </div>
      </section>

      {/* Channel showcase -- new section, German-market specific */}
      <section className="section band-sand">
        <div className="container-px">
          <SectionHeader
            eyebrow="Senderübersicht"
            title="Was du damit sehen kannst"
            description="Von der Bundesliga über das komplette deutsche Free-TV bis zu ORF, SRF und über 100 internationalen Ländern."
          />
          <ChannelShowcase />
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container-px">
          <SectionHeader eyebrow="Ablauf" title="In drei Schritten auf Sendung" />
          <StepTimeline />
        </div>
      </section>

      {/* Pricing matrix */}
      <section id="preise" className="section band-sand">
        <div className="container-px">
          <SectionHeader
            eyebrow="Preise"
            title="Alle Pakete im direkten Vergleich"
            description="Jedes Paket enthält dieselbe Senderliste und dieselbe VOD-Bibliothek. Unterschiedlich sind nur Laufzeit, Bildschirme und der Preis pro Monat."
          />
          <PricingMatrix />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <PaymentIcons />
            <span className="text-xs muted">Sichere Zahlung · Aktivierung in 5–15 Minuten</span>
          </div>

          <div className="mt-20">
            <SectionHeader
              eyebrow="Mehrere Bildschirme"
              title="Für Haushalte, die gleichzeitig schauen"
              description="Wenn im Wohnzimmer Fußball läuft und im Kinderzimmer eine Serie — hier zählt die Anzahl der Bildschirme, nicht die Laufzeit."
            />
            <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
              {MULTI_SCREEN_PLANS.map((plan) => (
                <MultiScreenCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Devices + apps, two-column */}
      <section className="section">
        <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="eyebrow mb-5">Kompatibilität</span>
            <h2 className="text-[1.85rem] md:text-[2.2rem] font-extrabold leading-[1.15] mb-5">
              Du brauchst keine neue Hardware
            </h2>
            <p className="muted leading-relaxed mb-6">
              IPTV läuft über deine normale Internetverbindung. Kein Receiver,
              keine Schüssel, kein Techniker-Termin. Du installierst eine App auf
              dem Gerät, das ohnehin im Wohnzimmer steht, trägst deine
              Zugangsdaten ein und schaust los.
            </p>
            <p className="muted leading-relaxed mb-8">
              Wir unterstützen alle gängigen Player. Wenn du bereits eine App
              gewohnt bist, kannst du sie weiter nutzen — die Zugangsdaten
              funktionieren mit jeder davon.
            </p>
            <div className="flex flex-wrap gap-2">
              {APPS.map((a) => (
                <span key={a} className="rounded-md border border-line bg-surface px-3 py-1.5 text-xs text-muted">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {DEVICES.map((d) => (
              <div key={d.label} className="flex items-center gap-4 py-4">
                <d.icon size={20} strokeWidth={1.5} className="text-forest shrink-0" />
                <div className="flex-1">
                  <p className="font-display font-bold text-[0.95rem]">{d.label}</p>
                  <p className="text-xs muted mt-0.5">{d.note}</p>
                </div>
                <Check size={16} strokeWidth={2} className="text-forest shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO block: sport -- offset photo left */}
      <section className="section band-sand">
        <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line order-2 lg:order-1">
            <Image
              src="/img/sport.jpg"
              alt="Fußballstadion bei Flutlicht während eines Abendspiels"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-5">Sport</span>
            <h2 className="text-[1.85rem] md:text-[2.2rem] font-extrabold leading-[1.15] mb-5">
              Bundesliga, Champions League und Formel 1 — live
            </h2>
            <div className="space-y-4 muted leading-relaxed text-[0.97rem]">
              <p>
                Sport ist der Grund, aus dem die meisten Kunden zu uns wechseln,
                und gleichzeitig der härteste Test für jeden Anbieter. Wenn zum
                Anpfiff eines Topspiels Zehntausende gleichzeitig einschalten,
                trennt sich ein stabiler Dienst von einem billigen.
              </p>
              <p>
                Unsere Server stehen in Frankfurt und Amsterdam und sind auf
                genau diese Lastspitzen ausgelegt. Der Stream bleibt flüssig und
                läuft ohne nennenswerten Versatz zur Live-Übertragung — wichtig,
                wenn die Nachbarn beim Tor jubeln, bevor du es siehst.
              </p>
              <p>
                Neben den großen deutschen und europäischen Wettbewerben bekommst
                du internationale Sportsender: Tennis, Boxen, Motorsport,
                Wintersport und Ligen, die im deutschen Free-TV gar nicht laufen.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7 pt-6 border-t border-line text-sm muted">
              <span>Bundesliga &amp; 2. Liga</span>
              <span>DFB-Pokal</span>
              <span>Champions League</span>
              <span>Formel 1</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO block: VOD -- mirrored */}
      <section className="section">
        <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow mb-5">Filme &amp; Serien</span>
            <h2 className="text-[1.85rem] md:text-[2.2rem] font-extrabold leading-[1.15] mb-5">
              63.000 Titel auf Abruf, in HD und 4K
            </h2>
            <div className="space-y-4 muted leading-relaxed text-[0.97rem]">
              <p>
                Neben dem Live-Programm gehört eine vollständige Mediathek zum
                Abo. Blockbuster, aktuelle Serienstaffeln, Klassiker und
                Dokumentationen — sortiert in klare Kategorien, damit du nicht
                zwanzig Minuten durch Listen scrollst, um etwas zu finden.
              </p>
              <p>
                Der Katalog wächst wöchentlich. Neue Kinofilme kommen laufend
                dazu, ebenso neue Folgen laufender Serien, jeweils mit deutscher
                Tonspur und, wo verfügbar, im Original mit Untertiteln.
              </p>
              <p>
                Der integrierte EPG zeigt dir das Programm der nächsten Tage über
                alle Sender hinweg, und mit Replay holst du Sendungen nach, die
                du verpasst hast — bis zu sieben Tage rückwirkend.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7 pt-6 border-t border-line text-sm muted">
              <span>Wöchentliche Updates</span>
              <span>Deutscher Ton</span>
              <span>EPG &amp; Replay</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line">
            <Image
              src="/img/vod.jpg"
              alt="Person, die zu Hause entspannt eine Serie auf dem Fernseher schaut"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section band-sand">
        <div className="container-px">
          <SectionHeader eyebrow="Kundenstimmen" title="Was unsere Kunden sagen" />
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card p-7 flex flex-col">
                <div className="flex gap-0.5 text-brass mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-[0.97rem] leading-relaxed flex-1">{t.text}</blockquote>
                <figcaption className="mt-5 pt-4 border-t border-line text-sm">
                  <span className="font-display font-bold">{t.name}</span>
                  <span className="muted"> · {t.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-px">
          <SectionHeader eyebrow="FAQ" title="Häufig gestellte Fragen" />
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* Closing CTA -- the single dark moment on the page */}
      <section className="band-forest">
        <div className="container-px py-20 md:py-24 text-center max-w-2xl mx-auto">
          <h2 className="text-[2rem] md:text-[2.6rem] font-extrabold leading-[1.1] mb-5">
            Heute Abend schon auf Sendung
          </h2>
          <p className="muted text-[1.03rem] leading-relaxed mb-9">
            Schreib uns auf WhatsApp, wähle dein Paket und erhalte deine
            Zugangsdaten. In der Regel dauert das keine 15 Minuten — und die
            ersten 7 Tage sind risikofrei.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-on-forest">
              Abo per WhatsApp starten
              <ArrowRight size={17} strokeWidth={2} />
            </a>
            <Link href="#preise" className="btn-outline-light">
              Nochmal die Preise ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
