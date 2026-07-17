import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { listPublishedBlogs, getFirstPublishedBlog } from "@/lib/services/blogs";
import type { Locale } from "@/lib/i18n/config";
import BlogLayout from "@/components/blogs/blog-layout";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com";

export const metadata: Metadata = {
  title: "Desert Travel Blog & Guides | Bedouin Trails",
  description:
    "Read travel stories, desert safari tips, and guides about Egypt's White Desert, Black Desert, Bahariya Oasis, Siwa Oasis, and Western Desert adventures with Bedouin Trails.",
  keywords:
    "White Desert blog, Egypt desert travel blog, desert safari tips, Bahariya Oasis guide, Western Desert stories, Egypt travel guides",
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: "Desert Travel Blog & Guides | Bedouin Trails",
    description:
      "Read travel stories, desert safari tips, and guides about Egypt's White Desert, Bahariya Oasis, and Western Desert adventures.",
    url: `${SITE_URL}/blogs`,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desert Travel Blog & Guides | Bedouin Trails",
    description:
      "Travel stories, desert safari tips, and guides about Egypt's Western Desert adventures.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default async function BlogsIndexPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();
  const blogs = await listPublishedBlogs();

  if (blogs.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <p>{t("no_results_found")}</p>
      </div>
    );
  }

  const first = await getFirstPublishedBlog();

  return <BlogLayout blogs={blogs} current={first} locale={locale} t={t} />;
}
