import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { listPublishedBlogs, listBlogCategories } from "@/lib/services/blogs";
import type { Locale } from "@/lib/i18n/config";
import { localize } from "@/lib/i18n/localized";
import { getLocalFallbackImage } from "@/lib/image-fallback";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import PageHero from "@/components/page-hero/page-hero";
import BlogsFilterGrid from "@/components/blogs/blogs-filter-grid";
import type { BlogCardData } from "@/components/blogs/blogs-filter-grid";

import { SITE_URL, buildAlternates } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const title = t("meta_title_blogs");
  const description = t("meta_desc_blogs");
  const url = `${SITE_URL}/${locale}/blogs`;
  return {
    title,
    description,
    keywords: t("meta_keywords_blogs"),
    alternates: buildAlternates("/blogs", locale),
    openGraph: { title, description, url, images: [`${SITE_URL}/img/hero-blogs.webp`] },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/img/hero-blogs.webp`] },
  };
}

export default async function BlogsIndexPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();
  const [blogs, categories] = await Promise.all([listPublishedBlogs(), listBlogCategories()]);

  const blogCards: BlogCardData[] = blogs.map((blog, i) => {
    const title = localize(blog.titleEn, blog.titleAr, locale, blog.titleI18n as Record<string, string> | null);
    const excerpt =
      localize(blog.excerptEn ?? "", blog.excerptAr, locale, blog.excerptI18n as Record<string, string> | null) ||
      localize(blog.contentEn ?? "", blog.contentAr, locale, blog.contentI18n as Record<string, string> | null);
    const cleanExcerpt = excerpt.replace(/<[^>]*>/g, "").slice(0, 140) + "...";
    return {
      id: blog.id,
      slug: blog.slug,
      title,
      excerpt: cleanExcerpt,
      image: blog.image ? getLocalFallbackImage(blog.image)! : `/img/adventure${i % 3 === 0 ? "" : i % 3 === 1 ? "1" : "3"}.webp`,
      category: blog.category,
    };
  });

  const blogListJsonLd =
    blogs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Bedouin Trails — Desert Travel Blog",
          description: "Travel stories, desert safari tips, and guides about Egypt's White Desert, Bahariya Oasis, and Western Desert adventures.",
          url: `${SITE_URL}/${locale}/blogs`,
          publisher: {
            "@type": "Organization",
            name: "Bedouin Trails",
            logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` },
          },
          blogPost: blogs.map((blog) => ({
            "@type": "BlogPosting",
            headline: localize(blog.titleEn, blog.titleAr, locale, blog.titleI18n as Record<string, string> | null),
            url: `${SITE_URL}/${locale}/blogs/${blog.slug}`,
            image: blog.image ? `${SITE_URL}${blog.image}` : `${SITE_URL}/img/hero-blogs.webp`,
            datePublished: blog.publishedAt?.toISOString() ?? blog.createdAt?.toISOString(),
            dateModified: blog.updatedAt?.toISOString(),
            inLanguage: locale,
            author: { "@type": "Organization", name: "Bedouin Trails" },
          })),
        }
      : null;

  if (blogs.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <p>{t("no_results_found")}</p>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--surface-1)" }}>
      {blogListJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }} />
      )}
      <Breadcrumbs
        items={[
          { name: "Home", url: `${SITE_URL}/${locale}` },
          { name: "Blogs", url: `${SITE_URL}/${locale}/blogs` },
        ]}
      />

      <PageHero
        title={t("blogs_hero_title") || t("blogs")}
        image="/img/hero-blogs.webp"
        eyebrow={t("blogs")}
      />

      <div className="blogs-page-content">
        <BlogsFilterGrid blogs={blogCards} categories={categories} />
      </div>
    </div>
  );
}
