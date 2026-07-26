import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Frequently Asked Questions";

export default async function Image() {
  return generateOgImage("Frequently Asked Questions", "Everything you need to know about our desert tours");
}
