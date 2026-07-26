import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "What to Pack for the White Desert";

export default async function Image() {
  return generateOgImage("What to Pack for the White Desert", "Complete desert packing checklist & essentials");
}
