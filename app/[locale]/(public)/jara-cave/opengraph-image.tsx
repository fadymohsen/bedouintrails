import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Jara Cave — Prehistoric Rock Art";

export default async function Image() {
  return generateOgImage("Jara Cave", "Prehistoric rock art in Egypt's Western Desert");
}
