import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "White Desert vs Wadi Rum";

export default async function Image() {
  return generateOgImage("White Desert vs Wadi Rum", "Comparing two of the world's most iconic desert destinations");
}
