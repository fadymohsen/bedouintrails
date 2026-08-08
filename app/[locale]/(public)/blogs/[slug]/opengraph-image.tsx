import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { getBlogBySlug } from "@/lib/services/blogs";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const blog = await getBlogBySlug(slug);
    return generateOgImage(blog.titleEn || "Bedouin Trails Blog", undefined, blog.image);
  } catch {
    return generateOgImage("Bedouin Trails Blog", "Desert Travel Stories & Guides");
  }
}
