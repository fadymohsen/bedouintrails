import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/white-desert-tour-from-cairo";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_whitetour_title"),
    description: t("guide_whitetour_meta_desc"),
    keywords: t("guide_whitetour_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_whitetour_og_title"),
      description: t("guide_whitetour_og_desc"),
      url,
      images: [`${SITE_URL}/img/hero-white-desert-tour-cairo.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_whitetour_twitter_title"),
      description: t("guide_whitetour_twitter_desc"),
      images: [`${SITE_URL}/img/hero-white-desert-tour-cairo.webp`],
    },
  };
}

export default async function WhiteDesertTourPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "White Desert Tour from Cairo — Complete Guide & Booking Info",
    description:
      "A 2-day White Desert safari tour from Cairo including Bahariya Oasis, Black Desert, Crystal Mountain, and overnight camping in the White Desert under the stars.",
    url,
    image: `${SITE_URL}/img/hero-white-desert-tour-cairo.webp`,
    publisher: { "@type": "Organization", name: "Bedouin Trails", logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` } },
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2025-01-15",
    dateModified: "2026-08-30",
  };

  return (
    <div className={styles["guide-page"]}>
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_whitetour_breadcrumb"), url },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [1, 2, 3, 4].map((i) => ({ "@type": "Question", name: t(`guide_whitetour_faq${i}_q`), acceptedAnswer: { "@type": "Answer", text: t(`guide_whitetour_faq${i}_a`) } })) }) }} />

      <GuideHero src="/img/hero-white-desert-tour-cairo.webp" alt="White Desert tour from Cairo Egypt" h1={t("guide_whitetour_h1")} path={PATH} />

      <div className={styles["guide-content"]}>
        <p>{t("guide_whitetour_intro_p")}</p>

        <h2>{t("guide_whitetour_itinerary_h2")}</h2>

        <h3>{t("guide_whitetour_day1_h3")}</h3>
        <ol>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}>
              <strong>{t(`guide_whitetour_day1_li${i}_bold`)}</strong> — {t(`guide_whitetour_day1_li${i}_text`)}
            </li>
          ))}
        </ol>

        <h3>{t("guide_whitetour_day2_h3")}</h3>
        <ol>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <strong>{t(`guide_whitetour_day2_li${i}_bold`)}</strong> — {t(`guide_whitetour_day2_li${i}_text`)}
            </li>
          ))}
        </ol>

        <div className={styles["highlight-box"]}>
          <p>{t("guide_whitetour_highlight")}</p>
        </div>

        <h2>{t("guide_whitetour_included_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <li key={i}>{t(`guide_whitetour_included_li${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_whitetour_notincluded_h2")}</h2>
        <ul>
          {[1, 2, 3].map((i) => (
            <li key={i}>{t(`guide_whitetour_notincluded_li${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_whitetour_howto_h2")}</h2>
        <p>{t("guide_whitetour_howto_p")}</p>

        <h2>{t("guide_whitetour_besttime_h2")}</h2>
        <p>
          {t("guide_whitetour_besttime_p1")} <strong>{t("guide_whitetour_besttime_p1_bold")}</strong>
          {t("guide_whitetour_besttime_p1_cont")}
        </p>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_whitetour_faq_h2")}</h2>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_whitetour_faq${i}_q`)}</h3>
              <p>{t(`guide_whitetour_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_whitetour_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_whitetour_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
