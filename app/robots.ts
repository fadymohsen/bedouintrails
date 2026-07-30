import type { MetadataRoute } from "next";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com").replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/auth", "/api", "/*/book", "/*/profile", "/*/my-journeys"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
