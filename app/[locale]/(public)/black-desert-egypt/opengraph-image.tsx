import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Black Desert Egypt Tour";

export default async function Image() {
  return generateOgImage("Black Desert Egypt", "Guide to Egypt's volcanic desert landscape");
}
