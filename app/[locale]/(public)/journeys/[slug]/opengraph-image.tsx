import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { getTrapBySlug } from "@/lib/services/traps";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const trip = await getTrapBySlug(slug);
    const cover = trip.galleries[0]?.image ?? null;
    return generateOgImage(trip.nameEn || "Desert Safari Tour", undefined, cover);
  } catch {
    return generateOgImage("Desert Safari Tours", "Explore the Egyptian Desert with Bedouin Trails");
  }
}
