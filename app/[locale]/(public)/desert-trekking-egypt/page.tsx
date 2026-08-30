import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/desert-trekking-egypt";
export const revalidate = 86400;

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
      images: [`${SITE_URL}/img/hero-desert-trekking.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_dtrek_twitter_title"),
      description: t("guide_dtrek_twitter_desc"),
      images: [`${SITE_URL}/img/hero-desert-trekking.webp`],
    },
  };
}

export default async function DesertTrekkingEgyptPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Desert Trekking Egypt — Complete Hiking & Trekking Guide",
      description: "Complete guide to desert trekking in Egypt. Explore hiking trails through the White Desert, Black Desert, and Western Desert with experienced Bedouin guides.",
      url,
      image: `${SITE_URL}/img/hero-desert-trekking.webp`,
      publisher: { "@type": "Organization", name: "Bedouin Trails", logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` } },
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Bedouin Trails" },
      datePublished: "2025-01-15",
      dateModified: "2026-08-24",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [1, 2, 3, 4, 5, 6, 7].map((i) => ({
        "@type": "Question",
        name: t(`guide_dtrek_faq${i}_q`),
        acceptedAnswer: { "@type": "Answer", text: t(`guide_dtrek_faq${i}_a`) },
      })),
    },
  ];

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_dtrek_breadcrumb"), url },
        ]}
      />

      <GuideHero src="/img/hero-desert-trekking.webp" alt="Desert trekking Egypt hiking trails" h1={t("guide_dtrek_h1")} />

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

        <h2>{t("guide_dtrek_dayby_h2")}</h2>
        <p>{t("guide_dtrek_dayby_p")}</p>

        <h2>{t("guide_dtrek_packing_h2")}</h2>
        <p>{t("guide_dtrek_packing_p")}</p>
        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <li key={i}>{t(`guide_dtrek_packing_li${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_dtrek_vs_h2")}</h2>
        <p>{t("guide_dtrek_vs_p")}</p>

        <div className={styles["highlight-box"]}>
          <p>
            Explore related guides:{" "}
            <Link href="/white-desert-egypt">White Desert Egypt</Link>,{" "}
            <Link href="/camel-trek">Camel Trek Egypt</Link>,{" "}
            <Link href="/multi-day-desert-trek">Multi-Day Desert Trek</Link>,{" "}
            <Link href="/white-desert-camping">White Desert Camping</Link>,{" "}
            <Link href="/jara-cave">Jara Cave</Link>.
          </p>
        </div>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_dtrek_faq_h2")}</h2>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_dtrek_faq${i}_q`)}</h3>
              <p>{t(`guide_dtrek_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

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
