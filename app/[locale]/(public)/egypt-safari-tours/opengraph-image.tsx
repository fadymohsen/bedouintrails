import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Egypt Safari Tours";

export default async function Image() {
  return generateOgImage("Egypt Safari Tours", "Complete guide to desert safari adventures from Giza");
}
