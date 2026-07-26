import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Desert Travel Blog";

export default async function Image() {
  return generateOgImage("Desert Travel Blog", "Stories, guides and tips from the Egyptian desert");
}
