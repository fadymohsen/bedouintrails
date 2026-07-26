import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "White Desert Egypt — Complete Guide";

export default async function Image() {
  return generateOgImage("White Desert Egypt", "Complete guide to Sahara el Beyda — tours, camping & travel tips");
}
