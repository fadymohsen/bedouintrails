import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Desert Safety Guide";

export default async function Image() {
  return generateOgImage("Desert Safety Guide", "Stay safe on your Egyptian desert adventure");
}
