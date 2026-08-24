import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { listPublishedBlogs } from "@/lib/services/blogs";
import type { Locale } from "@/lib/i18n/config";
import { localize } from "@/lib/i18n/localized";
import { getLocalFallbackImage } from "@/lib/image-fallback";
import { Link } from "@/lib/i18n/navigation";
import SafeImage from "@/components/safe-image/safe-image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import PageHero from "@/components/page-hero/page-hero";
import styles from "@/components/blogs/blogs.module.scss";
import guideStyles from "@/components/guides/guides.module.scss";

import { SITE_URL, buildAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const title = t("meta_title_articles");
  const description = t("meta_desc_articles");
  const url = `${SITE_URL}/${locale}/articles`;
  return {
    title,
    description,
    alternates: buildAlternates("/articles", locale),
    openGraph: { title, description, url, images: [`${SITE_URL}/og-image.jpg`] },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og-image.jpg`] },
  };
}

const GUIDE_LINKS = [
  { path: "/white-desert-tour-from-cairo", key: "guide_whitetour_breadcrumb", img: "/img/bg.webp" },
  { path: "/egypt-safari-tours", key: "guide_safaritours_breadcrumb", img: "/img/adventure1.webp" },
  { path: "/bahariya-oasis", key: "guide_bahariya_breadcrumb", img: "/img/bg.webp" },
  { path: "/black-desert-egypt", key: "guide_black_breadcrumb", img: "/img/adventure3.webp" },
  { path: "/camel-trek", key: "guide_camel_breadcrumb", img: "/img/adventure1.webp" },
  { path: "/desert-yoga-retreat", key: "guide_yoga_breadcrumb", img: "/img/bg.webp" },
  { path: "/multi-day-desert-trek", key: "guide_trek_breadcrumb", img: "/img/adventure3.webp" },
  { path: "/white-desert-camping", key: "guide_camping_breadcrumb", img: "/img/bg.webp" },
  { path: "/white-desert-safari", key: "guide_wdsafari_breadcrumb", img: "/img/adventure1.webp" },
  { path: "/siwa-oasis-tour", key: "guide_siwa_breadcrumb", img: "/img/adventure3.webp" },
  { path: "/jara-cave", key: "guide_djara_breadcrumb", img: "/img/adventure1.webp" },
  { path: "/desert-trekking-egypt", key: "guide_dtrek_breadcrumb", img: "/img/bg.webp" },
  { path: "/white-desert-egypt", key: "guide_wd_breadcrumb", img: "/img/adventure3.webp" },
  { path: "/crystal-mountain-egypt", key: "guide_crystal_breadcrumb", img: "/img/adventure1.webp" },
  { path: "/western-desert-egypt-guide", key: "guide_western_breadcrumb", img: "/img/bg.webp" },
];

export default async function ArticlesPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();
  const blogs = await listPublishedBlogs();
  const url = `${SITE_URL}/${locale}/articles`;

  return (
    <div style={{ background: "var(--surface-1)" }}>
      <Breadcrumbs
        items={[
          { name: t("home"), url: `${SITE_URL}/${locale}` },
          { name: t("articles"), url },
        ]}
      />

      <PageHero
        title={t("articles_hero_title")}
        image="/img/bg.webp"
        eyebrow={t("articles")}
      />

      {/* ── Travel Guides ── */}
      <div className={styles["blogs-grid-container"]}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--text-heading)",
            fontWeight: 400,
            marginBottom: "32px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {t("articles_guides_heading")}
        </h2>
        <div className={styles["blogs-grid"]}>
          {GUIDE_LINKS.map((guide) => (
            <Link href={guide.path} key={guide.path} className={styles["blog-card"]}>
              <div className={styles["card-image-wrapper"]}>
                <SafeImage
                  src={guide.img}
                  alt={t(guide.key as Parameters<typeof t>[0])}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles["card-content"]}>
                <span className={styles.eyebrow}>{t("travel_guides")}</span>
                <h3>{t(guide.key as Parameters<typeof t>[0])}</h3>
                <span className={styles["read-more-link"]}>{t("read_story") || "Read Guide"} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Blog Articles ── */}
      {blogs.length > 0 && (
        <div className={styles["blogs-grid-container"]} style={{ paddingTop: 0 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--text-heading)",
              fontWeight: 400,
              marginBottom: "32px",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {t("articles_blogs_heading")}
          </h2>
          <div className={styles["blogs-grid"]}>
            {blogs.map((blog, i) => {
              const title = localize(blog.titleEn, blog.titleAr, locale, blog.titleI18n as Record<string, string> | null);
              const excerpt =
                localize(blog.excerptEn ?? "", blog.excerptAr, locale, blog.excerptI18n as Record<string, string> | null) ||
                localize(blog.contentEn ?? "", blog.contentAr, locale, blog.contentI18n as Record<string, string> | null);
              const cleanExcerpt = excerpt.replace(/<[^>]*>/g, "").slice(0, 140) + "...";

              return (
                <Link href={`/blogs/${blog.slug}`} key={blog.id} className={styles["blog-card"]}>
                  <div className={styles["card-image-wrapper"]}>
                    <SafeImage
                      src={blog.image ? getLocalFallbackImage(blog.image) : `/img/adventure${i % 3 === 0 ? "" : i % 3 === 1 ? "1" : "3"}.webp`}
                      alt={title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles["card-content"]}>
                    <span className={styles.eyebrow}>{t("blogs")}</span>
                    <h3>{title}</h3>
                    <p>{cleanExcerpt}</p>
                    <span className={styles["read-more-link"]}>{t("read_story") || "Read Story"} →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
