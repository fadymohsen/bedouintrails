import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "api.bedouintrails.com" },
    ],
    // Vercel's paid image optimization quota was exceeded (402
    // OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED), breaking every real photo
    // site-wide. Serve images as-is instead of routing them through the
    // metered optimizer.
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ["./styles"],
  },
  redirects: async () => [
    // Renamed page: djara-cave → jara-cave
    {
      source: "/:locale/djara-cave",
      destination: "/:locale/jara-cave",
      permanent: true,
    },
    // Old ID-based journey URLs: /journeys/12/slug → /en/journeys/slug
    {
      source: "/journeys/:id(\\d+)/:slug",
      destination: "/en/journeys/:slug",
      permanent: true,
    },
    // Old ID-based journey URLs with locale
    {
      source: "/:locale/journeys/:id(\\d+)/:slug",
      destination: "/:locale/journeys/:slug",
      permanent: true,
    },
    // Old /cardpage URLs → journeys
    {
      source: "/cardpage/:id",
      destination: "/en/journeys",
      permanent: true,
    },
    // Old query param blog URLs: /blogs?article=N → /en/blogs
    {
      source: "/blogs",
      has: [{ type: "query", key: "article" }],
      destination: "/en/blogs",
      permanent: true,
    },
    // No-locale journey URLs → /en/ version
    {
      source: "/journeys/:slug",
      destination: "/en/journeys/:slug",
      permanent: true,
    },
    // No-locale blog URLs → /en/ version
    {
      source: "/blogs/:slug",
      destination: "/en/blogs/:slug",
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      ],
    },
  ],
};

export default withNextIntl(nextConfig);
