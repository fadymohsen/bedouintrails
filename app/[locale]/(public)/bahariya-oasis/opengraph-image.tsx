import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Bahariya Oasis Tour Guide";

export default async function Image() {
  return generateOgImage("Bahariya Oasis", "Your gateway to Egypt's White Desert & Western Desert");
}
