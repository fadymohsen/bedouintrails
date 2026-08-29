import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { listPublishedBlogs, getBlogBySlug } from "@/lib/services/blogs";
import { NotFoundError } from "@/lib/services/errors";
import { localize } from "@/lib/i18n/localized";
import { getLocalFallbackImage } from "@/lib/image-fallback";
import type { Locale } from "@/lib/i18n/config";
import BlogLayout from "@/components/blogs/blog-layout";

import { SITE_URL, buildAlternates } from "@/lib/seo";

export async function generateStaticParams() {
  const blogs = await listPublishedBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

async function loadBlog(slug: string) {
  try {
    return await getBlogBySlug(slug);
  } catch (err) {
    if (err instanceof NotFoundError) return null;
    throw err;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await loadBlog(slug);
  if (!blog) return {};

  const locale = (await getLocale()) as Locale;
  const title = localize(blog.titleEn, blog.titleAr, locale, blog.titleI18n as Record<string, string> | null);
  const metaTitle = localize(blog.metaTitleEn ?? "", blog.metaTitleAr, locale, blog.metaTitleI18n as Record<string, string> | null) || title;
  const metaDescription = localize(blog.metaDescriptionEn ?? "", blog.metaDescriptionAr, locale, blog.metaDescriptionI18n as Record<string, string> | null) || title;
  const url = `${SITE_URL}/${locale}/blogs/${slug}`;

  return {
    title: `${metaTitle} | Bedouin Trails`,
    description: metaDescription,
    alternates: buildAlternates(`/blogs/${slug}`, locale),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [`${SITE_URL}${getLocalFallbackImage(blog.image)}`],
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [`${SITE_URL}${getLocalFallbackImage(blog.image)}`],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [locale, t, blog, blogs] = await Promise.all([
    getLocale() as Promise<Locale>,
    getTranslations(),
    loadBlog(slug),
    listPublishedBlogs(),
  ]);

  if (!blog) notFound();

  const title = localize(blog.titleEn, blog.titleAr, locale, blog.titleI18n as Record<string, string> | null);
  const metaTitle = localize(blog.metaTitleEn ?? "", blog.metaTitleAr, locale, blog.metaTitleI18n as Record<string, string> | null) || title;
  const url = `${SITE_URL}/${locale}/blogs/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metaTitle,
    description: localize(blog.metaDescriptionEn ?? "", blog.metaDescriptionAr, locale, blog.metaDescriptionI18n as Record<string, string> | null) || title,
    url,
    image: blog.image ? `${SITE_URL}${getLocalFallbackImage(blog.image)}` : `${SITE_URL}/img/western-desert-hero.webp`,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Bedouin Trails", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Bedouin Trails",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` },
    },
    datePublished: blog.publishedAt?.toISOString() ?? blog.createdAt.toISOString(),
    dateModified: blog.updatedAt.toISOString(),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <BlogLayout blogs={blogs} current={blog} locale={locale} t={t} />
    </>
  );
}
