import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Contact Bedouin Trails";

export default async function Image() {
  return generateOgImage("Contact Bedouin Trails", "Get in touch to plan your desert adventure");
}
