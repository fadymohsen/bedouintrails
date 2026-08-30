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
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/en/journeys?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
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
        {children}
      </body>
    </html>
  );
}
