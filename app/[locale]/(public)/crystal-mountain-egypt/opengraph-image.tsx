import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Crystal Mountain Egypt";

export default async function Image() {
  return generateOgImage("Crystal Mountain Egypt", "A quartz gem in Egypt's Western Desert");
}
