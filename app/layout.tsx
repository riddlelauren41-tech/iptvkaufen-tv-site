import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { SITE } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"] });
const plex = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Bester IPTV Anbieter Deutschland`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "IPTV kaufen in Deutschland: zuverlässiges IPTV-Abo mit über 21.000 Sendern, schnell, stabil und sicher, mit 24/7 WhatsApp-Support.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "8",
    reviewCount: "8",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${manrope.variable} ${plex.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
