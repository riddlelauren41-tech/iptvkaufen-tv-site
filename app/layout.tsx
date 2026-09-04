import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { SITE } from "@/lib/site";

const sora = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

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
    <html lang="de" className={`${sora.variable} ${inter.variable}`}>
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
