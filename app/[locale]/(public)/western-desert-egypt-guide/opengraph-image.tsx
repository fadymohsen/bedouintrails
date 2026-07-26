import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Western Desert Egypt Guide";

export default async function Image() {
  return generateOgImage("Western Desert Egypt", "Complete guide to White Desert, Black Desert & more");
}
