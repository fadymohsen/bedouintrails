import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Articles & Travel Guides — Bedouin Trails Egypt";

export default async function Image() {
  return generateOgImage("Articles & Travel Guides", "Egypt desert guides, blog articles, and safari resources");
}
