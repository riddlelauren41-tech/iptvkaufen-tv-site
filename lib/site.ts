// Central site config. WhatsApp number is the owner's real established
// number (same one used across the other sites). Pricing lives in
// lib/plans.ts and is deliberately its own tier structure for this site --
// not copy of the other markets' numbers.
export const SITE = {
  name: "IPTV Kaufen",
  shortName: "IPTV Kaufen",
  domain: "iptvkaufen-tv.site",
  url: "https://iptvkaufen-tv.site",
  whatsappNumber: "447902849201",
  whatsappMessage: "Hallo, ich möchte mehr über ein IPTV-Abonnement erfahren.",
  locale: "de_DE",
  themeColor: "#0a1628",
};

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(message || SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
