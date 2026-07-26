import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Desert Safari Tours & Adventures";

export default async function Image() {
  return generateOgImage("Desert Safari Tours & Adventures", "Browse our collection of desert expeditions");
}
