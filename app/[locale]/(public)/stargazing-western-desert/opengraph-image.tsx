import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Stargazing in the Western Desert";

export default async function Image() {
  return generateOgImage("Stargazing in the Western Desert", "Egypt's best dark sky destination for astronomy");
}
