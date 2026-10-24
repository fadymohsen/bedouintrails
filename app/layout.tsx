import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/el-messiri/400.css";
import "@fontsource/el-messiri/700.css";
import "./globals.css";
import { isRtl, type Locale } from "@/lib/i18n/config";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com").replace(/\/+$/, "");

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bedouin Trails",
  url: SITE_URL,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Bedouin Trails",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` },
  image: `${SITE_URL}/img/western-desert-hero.webp`,
  description:
    "Egyptian desert safari tour company based in Giza, organizing White Desert safari tours, camel treks, desert trekking, and multi-day desert tours.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "EG",
    addressLocality: "Giza",
    addressRegion: "Giza Governorate",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.3458203, longitude: 28.8724705 },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+20-10-02717380",
    contactType: "reservations",
    availableLanguage: ["English", "Arabic"],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  priceRange: "$$",
  currenciesAccepted: "EGP, USD, EUR",
  paymentAccepted: "Cash, Credit Card",
  areaServed: [
    { "@type": "Place", name: "Egypt" },
    { "@type": "Place", name: "White Desert National Park" },
    { "@type": "Place", name: "Bahariya Oasis" },
    { "@type": "Place", name: "Western Desert, Egypt" },
  ],
  sameAs: [
    "https://www.instagram.com/the.white.and.black.desert",
    "https://www.facebook.com/profile.php?id=61587717913002",
    "https://ar.tripadvisor.com/Attraction_Review-g294202-d34391404-Reviews-Bedouin_Trails-Giza_Giza_Governorate.html",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com").replace(/\/+$/, "")
  ),
  title: {
    default: "Bedouin Trails | Egyptian Western Desert Safari Tours",
    template: "%s | Bedouin Trails",
  },
  description:
    "Desert safari and tour experiences in Egypt's Western Desert and White Desert National Park.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Bedouin Trails",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bedouin Trails — Desert Safari Tours in Egypt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The x-next-intl-locale header is only set for public [locale] routes
  // (the proxy skips locale handling entirely for /admin). When it's absent
  // we're on an English-only route like /admin, so default to en/ltr rather
  // than the site's Arabic default — an admin dashboard has no business
  // rendering RTL.
  const headerList = await headers();
  const locale = (headerList.get("x-next-intl-locale") ?? "en") as Locale;
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
