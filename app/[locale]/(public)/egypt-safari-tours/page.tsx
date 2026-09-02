import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/egypt-safari-tours";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_safaritours_title"),
    description: t("guide_safaritours_meta_desc"),
    keywords: t("guide_safaritours_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_safaritours_og_title"),
      description: t("guide_safaritours_og_desc"),
      url,
      images: [`${SITE_URL}/img/egypt-safari-camel-trek.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_safaritours_twitter_title"),
      description: t("guide_safaritours_twitter_desc"),
      images: [`${SITE_URL}/img/egypt-safari-camel-trek.webp`],
    },
  };
}

export default async function EgyptSafariToursPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Egypt Safari Tours — Complete Guide to Desert Adventures",
    description: "Discover the best Egypt safari tours including White Desert safaris, camel treks, desert camping, and multi-day desert expeditions from Cairo.",
    url,
    image: `${SITE_URL}/img/egypt-safari-camel-trek.webp`,
    publisher: { "@type": "Organization", name: "Bedouin Trails", logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` } },
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2025-01-15",
    dateModified: "2026-07-26",
  };

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [1, 2, 3, 4].map((i) => ({ "@type": "Question", name: t(`guide_safaritours_faq${i}_q`), acceptedAnswer: { "@type": "Answer", text: t(`guide_safaritours_faq${i}_a`) } })) }) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_safaritours_breadcrumb"), url },
        ]}
      />

      <GuideHero src="/img/egypt-safari-camel-trek.webp" alt="Egypt safari tours camel trekking White Desert" h1={t("guide_safaritours_h1")} objectPosition="center 80%" />

      <div className={styles["guide-content"]}>
        <p>{t("guide_safaritours_intro_p")}</p>

        <h2>{t("guide_safaritours_types_h2")}</h2>

        <h3>{t("guide_safaritours_type1_h3")}</h3>
        <p>{t("guide_safaritours_type1_p")}</p>

        <h3>{t("guide_safaritours_type2_h3")}</h3>
        <p>{t("guide_safaritours_type2_p")}</p>

        <h3>{t("guide_safaritours_type3_h3")}</h3>
        <p>{t("guide_safaritours_type3_p")}</p>

        <h3>{t("guide_safaritours_type4_h3")}</h3>
        <p>{t("guide_safaritours_type4_p")}</p>

        <h3>{t("guide_safaritours_type5_h3")}</h3>
        <p>{t("guide_safaritours_type5_p")}</p>

        <h2>{t("guide_safaritours_expect_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}>{t(`guide_safaritours_expect_li${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_safaritours_besttime_h2")}</h2>
        <p>{t("guide_safaritours_besttime_p")}</p>

        <h2>{t("guide_safaritours_booking_h2")}</h2>
        <p>{t("guide_safaritours_booking_p")}</p>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_safaritours_faq_h2")}</h2>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_safaritours_faq${i}_q`)}</h3>
              <p>{t(`guide_safaritours_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_safaritours_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_safaritours_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
