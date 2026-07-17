import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/el-messiri";
import "@fontsource/el-messiri/400.css";
import "@fontsource/el-messiri/500.css";
import "@fontsource/el-messiri/600.css";
import "@fontsource/el-messiri/700.css";
import "./globals.css";
import { isRtl, type Locale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com"
  ),
  title: {
    default: "Bedouin Trails | Egyptian Western Desert Safari Tours",
    template: "%s | Bedouin Trails",
  },
  description:
    "Desert safari and tour experiences in Egypt's Western Desert and White Desert National Park.",
  openGraph: {
    type: "website",
    siteName: "Bedouin Trails",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const locale = (headerList.get("x-next-intl-locale") ?? "ar") as Locale;
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
