import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "White Desert Tour Cost Guide";

export default async function Image() {
  return generateOgImage("White Desert Tour Cost", "Pricing, what's included & how to get the best value");
}
