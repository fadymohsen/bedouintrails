import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Desert Trekking Egypt — Hiking Guide";

export default async function Image() {
  return generateOgImage("Desert Trekking Egypt", "Hiking & trekking routes through the Western Desert");
}
