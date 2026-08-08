import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import styles from "@/components/guides/guides.module.scss";

import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/desert-trekking-egypt";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_dtrek_title"),
    description: t("guide_dtrek_meta_desc"),
    keywords: t("guide_dtrek_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_dtrek_og_title"),
      description: t("guide_dtrek_og_desc"),
      url,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_dtrek_twitter_title"),
      description: t("guide_dtrek_twitter_desc"),
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default async function DesertTrekkingEgyptPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Desert Trekking Egypt — Complete Hiking & Trekking Guide",
    description: "Complete guide to desert trekking in Egypt. Explore hiking trails through the White Desert, Black Desert, and Western Desert with experienced Bedouin guides.",
    url,
    image: `${SITE_URL}/og-image.jpg`,
    publisher: { "@type": "Organization", name: "Bedouin Trails", logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` } },
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2025-01-15",
    dateModified: "2026-07-26",
  };

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_dtrek_breadcrumb"), url },
        ]}
      />

      <div className={styles["guide-hero"]} style={{ backgroundImage: "url('/img/bg.webp')" }}>
        <h1>{t("guide_dtrek_h1")}</h1>
      </div>

      <div className={styles["guide-content"]}>
        <p>{t("guide_dtrek_intro_p")}</p>

        <h2>{t("guide_dtrek_why_h2")}</h2>
        <p>{t("guide_dtrek_why_p")}</p>

        <h2>{t("guide_dtrek_routes_h2")}</h2>
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <h3>{t(`guide_dtrek_route${i}_h3`)}</h3>
            <p>{t(`guide_dtrek_route${i}_p`)}</p>
          </div>
        ))}

        <h2>{t("guide_dtrek_besttime_h2")}</h2>
        <p>{t("guide_dtrek_besttime_p")}</p>

        <h2>{t("guide_dtrek_fitness_h2")}</h2>
        <p>{t("guide_dtrek_fitness_p")}</p>

        <h2>{t("guide_dtrek_included_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}>{t(`guide_dtrek_included_li${i}`)}</li>
          ))}
        </ul>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_dtrek_faq_h2")}</h2>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_dtrek_faq${i}_q`)}</h3>
              <p>{t(`guide_dtrek_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <div className={styles["cta-section"]}>
          <p>{t("guide_dtrek_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_dtrek_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
