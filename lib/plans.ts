// Pricing. This is a separate market/site from the owner's other IPTV sites,
// so these tiers are deliberately their own price ladder -- not a copy of the
// Dutch or French sites' numbers. The 3/6/12-month figures are the owner's
// chosen real launch pricing for this site. The 24-month tier and the whole
// multi-screen block are NOT yet confirmed by the client -- extrapolated from
// the real tiers' pattern so the site ships with real-looking, usable numbers
// instead of "€X,XX" placeholders, but these specific figures still need the
// client's sign-off before launch. Flagged with `estimated: true` so they're
// easy to find and swap out later.
export type Plan = {
  id: string;
  duration: string;
  price: number;
  screens: string;
  tagline: string;
  features: string[];
  badge?: string;
  featured?: boolean;
  estimated?: boolean;
};

const BASE_FEATURES = [
  "21.000+ Live-TV-Sender aus Deutschland, Österreich, der Schweiz und international",
  "63.000+ Filme & Serien, wöchentlich mit neuen Veröffentlichungen aktualisiert",
  "Anti-Freeze-Technologie für HD, Full HD und 4K ohne Pufferung",
  "Kompatibel mit allen gängigen IPTV-Apps (IPTV Smarters Pro, TiviMate, XCIPTV)",
  "TV-Wiedergabe (Replay) + integrierter EPG-TV-Guide",
  "Läuft auf Smart TV, Android, iOS, Fire Stick und PC/Mac",
];

export const PLANS: Plan[] = [
  {
    id: "3-monate",
    duration: "3 Monate",
    price: 14.99,
    screens: "1 Bildschirm",
    tagline: "Der offizielle Einstieg, ohne Risiko",
    features: [
      ...BASE_FEATURES,
      "Support 7/7 via WhatsApp",
      "7 Tage Geld-zurück-Garantie",
    ],
  },
  {
    id: "6-monate",
    duration: "6 Monate",
    price: 24.99,
    screens: "2 Bildschirme gleichzeitig",
    tagline: "Flexibler Vorteil für ein halbes Jahr",
    features: [
      ...BASE_FEATURES,
      "Priority-Support 7/7 via WhatsApp",
      "7 Tage Geld-zurück-Garantie",
    ],
  },
  {
    id: "12-monate",
    duration: "12 Monate",
    price: 69.99,
    screens: "3 Bildschirme gleichzeitig",
    tagline: "Das meistgewählte Abonnement",
    badge: "Bestseller",
    featured: true,
    features: [
      ...BASE_FEATURES,
      "Kostenlose Installationshilfe + VIP-Support 7/7",
      "7 Tage Geld-zurück-Garantie",
    ],
  },
  {
    id: "24-monate",
    duration: "24 Monate",
    price: 109.99,
    screens: "3 Bildschirme gleichzeitig",
    tagline: "Niedrigster Preis pro Monat auf lange Sicht",
    estimated: true,
    features: [
      ...BASE_FEATURES,
      "Kostenlose Installationshilfe + VIP-Support 7/7",
      "Niedrigster Preis pro Monat aller Pakete",
    ],
  },
];

export type MultiScreenPlan = {
  id: string;
  screens: string;
  price: number;
  tagline: string;
  features: string[];
  estimated?: boolean;
};

// Add-on style: extra simultaneous screens on top of a 12-Monate abonnement
// (the plan most subscribers pick). The 3-Bildschirme row intentionally
// mirrors the real 12-Monate/3-Bildschirme price above -- same offer, shown
// here for shoppers comparing by screen count instead of by duration.
export const MULTI_SCREEN_PLANS: MultiScreenPlan[] = [
  {
    id: "2-bildschirme",
    screens: "2 Bildschirme",
    price: 44.99,
    tagline: "Ideal für ein Paar oder eine kleine Familie",
    estimated: true,
    features: [
      "12 Monate Laufzeit",
      "21.000+ Sender",
      "63.000+ Filme & Serien",
      "Anti-Buffer-Server",
      "Support 7/7 via WhatsApp",
    ],
  },
  {
    id: "3-bildschirme",
    screens: "3 Bildschirme",
    price: 69.99,
    tagline: "Unsere meistgewählte Familienoption",
    features: [
      "12 Monate Laufzeit",
      "21.000+ Sender",
      "63.000+ Filme & Serien",
      "Anti-Buffer-Server",
      "Kostenlose Installationshilfe",
      "VIP-Support 7/7",
    ],
  },
  {
    id: "4-bildschirme",
    screens: "4 Bildschirme",
    price: 84.99,
    tagline: "Für größere Familien, überall gleichzeitig schauen",
    estimated: true,
    features: [
      "12 Monate Laufzeit",
      "21.000+ Sender",
      "63.000+ Filme & Serien",
      "Anti-Buffer-Server",
      "Kostenlose Installationshilfe",
      "VIP-Support 7/7",
    ],
  },
];

export const priceDE = (p: number) => `€${p.toFixed(2).replace(".", ",")}`;
