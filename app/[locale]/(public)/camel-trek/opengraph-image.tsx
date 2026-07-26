import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Camel Trek Egypt";

export default async function Image() {
  return generateOgImage("Camel Trek Egypt", "Multi-day desert trekking in the Western Desert");
}
