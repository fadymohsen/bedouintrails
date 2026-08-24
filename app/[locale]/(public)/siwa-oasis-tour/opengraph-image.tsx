import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Siwa Oasis Tour — Egypt Desert Safari";

export default async function Image() {
  return generateOgImage(
    "Siwa Oasis Tour",
    "Egypt's most remote oasis — oracle ruins, desert dunes & Berber culture"
  );
}
