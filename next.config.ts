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
  },
  sassOptions: {
    includePaths: ["./styles"],
  },
};

export default withNextIntl(nextConfig);
