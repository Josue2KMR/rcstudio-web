// components/LocalBusinessJsonLd.tsx
import { siteConfig } from "@/lib/site-config";

const SITE_URL = "https://rcstudio-web-tori-s.vercel.app";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: siteConfig.business.name,
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: "+59893870652",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address,
      addressLocality: "Montevideo",
      addressCountry: "UY",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
