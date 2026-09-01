import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "api.bedouintrails.com" },
    ],
  },
  sassOptions: {
    includePaths: ["./styles"],
  },
  redirects: async () => [
    // ── Renamed page: djara-cave → jara-cave ────────────────────────────
    {
      source: "/:locale/djara-cave",
      destination: "/:locale/jara-cave",
      permanent: true,
    },
    // No-locale djara-cave (caught by middleware but explicit is faster)
    {
      source: "/djara-cave",
      destination: "/en/jara-cave",
      permanent: true,
    },

    // ── Old ID-based journey URLs ────────────────────────────────────────
    { source: "/journeys/:id(\\d+)/:slug", destination: "/en/journeys/:slug", permanent: true },
    { source: "/:locale/journeys/:id(\\d+)/:slug", destination: "/:locale/journeys/:slug", permanent: true },

    // ── Old /cardpage URLs ───────────────────────────────────────────────
    { source: "/cardpage/:id", destination: "/en/journeys", permanent: true },

    // ── Old query-param blog URLs: /blogs?article=N ──────────────────────
    {
      source: "/blogs",
      has: [{ type: "query", key: "article" }],
      destination: "/en/blogs",
      permanent: true,
    },
    // Locale-prefixed variant: /:locale/blogs?article=N
    {
      source: "/:locale/blogs",
      has: [{ type: "query", key: "article" }],
      destination: "/:locale/blogs",
      permanent: true,
    },

    // ── No-locale generic redirects (add /en/ prefix) ────────────────────
    { source: "/journeys/:slug", destination: "/en/journeys/:slug", permanent: true },
    { source: "/blogs/:slug", destination: "/en/blogs/:slug", permanent: true },

    // ── Dead Framer journey slugs — locale-prefixed ──────────────────────
    { source: "/:locale/journeys/oases-the-white-desert-and-cairo", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/two-nights-camping-in-the-black-and-white-desert", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/3-nights-and-4-days-in-siwa-oasis", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/black-and-white-desert-and-jar-cave", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/3-nights-in-the-black-and-white-desert-and-khara-cave", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/desert-silence-walking-and-camels", destination: "/:locale/journeys", permanent: true },
    // Additional dead Framer journey slugs
    { source: "/:locale/journeys/walking-and-meditation-trip", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/siwa-oasis-3-days-2-nights", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/the-five-oases-of-egypt", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/one-night-in-the-black-and-white-desert", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/2-day-1-night-program-in-fayoum-oasis", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/3-days-2-nights-black-and-white-desert-bahariya-oasis-tour", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/13-days-12-nights-complete-oases-deserts-pyramids-expedition", destination: "/:locale/journeys", permanent: true },
    { source: "/:locale/journeys/4-nights-in-the-black-and-white-desert", destination: "/:locale/journeys", permanent: true },

    // ── Renamed: 7-days → 8-days Egypt Adventure Journey ────────────────
    { source: "/:locale/journeys/7-days-egypt-adventure-journey", destination: "/:locale/journeys/8-days-egypt-adventure-journey", permanent: true },
    { source: "/journeys/7-days-egypt-adventure-journey", destination: "/en/journeys/8-days-egypt-adventure-journey", permanent: true },
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=()" },
        { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
      ],
    },
    {
      source: "/img/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=2592000, immutable" },
      ],
    },
    {
      source: "/fonts/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default withNextIntl(nextConfig);
