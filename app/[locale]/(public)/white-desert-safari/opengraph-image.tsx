import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "White Desert Safari Egypt";

export default async function Image() {
  return generateOgImage("White Desert Safari Egypt", "Overnight tours among surreal chalk formations from Cairo");
}
