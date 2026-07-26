import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Bedouin Trails — Egyptian Desert Safari Tours";

export default async function Image() {
  return generateOgImage("Egyptian Desert Safari Tours", "White Desert · Bahariya Oasis · Western Desert");
}
