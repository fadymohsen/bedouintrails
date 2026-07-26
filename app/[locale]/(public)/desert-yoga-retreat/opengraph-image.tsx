import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Desert Yoga Retreat Egypt";

export default async function Image() {
  return generateOgImage("Desert Yoga Retreat", "Meditation & silent retreat in Egypt's White Desert");
}
