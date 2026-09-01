import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { prisma } from "@/lib/prisma";
import { localize } from "@/lib/i18n/localized";
import { getLocalFallbackImage } from "@/lib/image-fallback";
import type { Locale } from "@/lib/i18n/config";
import styles from "./related-blogs.module.scss";

interface RelatedBlogsProps {
  tripSlug: string;
  locale: Locale;
  heading: string;
  ctaLabel: string;
}

export default async function RelatedBlogs({ tripSlug, locale, heading, ctaLabel }: RelatedBlogsProps) {
  const trap = await prisma.trap.findUnique({
    where: { slug: tripSlug },
    select: {
      relatedBlogs: {
        orderBy: { sortOrder: "asc" },
        include: {
          blog: {
            select: {
              id: true,
              slug: true,
              titleEn: true,
              titleAr: true,
              titleI18n: true,
              excerptEn: true,
              excerptAr: true,
              excerptI18n: true,
              image: true,
              readingTime: true,
              isPublished: true,
            },
          },
        },
      },
    },
  });

  const blogs = (trap?.relatedBlogs ?? [])
    .map((r) => r.blog)
    .filter((b) => b.isPublished);

  if (blogs.length === 0) return null;

  return (
    <div className={styles["related-blogs"]}>
      <h2>{heading}</h2>
      <div className={styles["related-grid"]}>
        {blogs.map((blog) => {
          const title = localize(
            blog.titleEn,
            blog.titleAr,
            locale,
            blog.titleI18n as Record<string, string> | null,
          );
          const excerpt = localize(
            blog.excerptEn ?? "",
            blog.excerptAr,
            locale,
            blog.excerptI18n as Record<string, string> | null,
          );
          const cleanExcerpt = excerpt.replace(/<[^>]*>/g, "").slice(0, 100) + "...";
          const image = blog.image ? getLocalFallbackImage(blog.image) : "/img/adventure.webp";

          return (
            <Link key={blog.id} href={`/blogs/${blog.slug}`} className={styles["blog-card"]}>
              <div className={styles["blog-image"]}>
                <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles["blog-info"]}>
                <h3>{title}</h3>
                {cleanExcerpt.length > 4 && <p>{cleanExcerpt}</p>}
                {blog.readingTime && (
                  <span className={styles["blog-reading-time"]}>{blog.readingTime} min read</span>
                )}
                <span className={styles["blog-cta"]}>{ctaLabel} →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
