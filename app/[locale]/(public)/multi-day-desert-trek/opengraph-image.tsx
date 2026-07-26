import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Multi-Day Desert Trek";

export default async function Image() {
  return generateOgImage("Multi-Day Desert Trek", "Sahara hiking & trekking expeditions in Egypt");
}
