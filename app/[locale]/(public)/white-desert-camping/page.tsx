import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/white-desert-camping";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_camping_title"),
    description: t("guide_camping_meta_desc"),
    keywords: t("guide_camping_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_camping_og_title"),
      description: t("guide_camping_og_desc"),
      url,
      images: [`${SITE_URL}/img/white-desert-camping.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_camping_twitter_title"),
      description: t("guide_camping_twitter_desc"),
      images: [`${SITE_URL}/img/white-desert-camping.jpg`],
    },
  };
}

export default async function WhiteDesertCampingPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "White Desert Camping — Overnight Desert Experience in Egypt",
    description: "Everything you need to know about camping in Egypt's White Desert — from what to expect, what's provided, best season, and how to book your overnight desert camping adventure.",
    url,
    image: `${SITE_URL}/img/white-desert-camping.jpg`,
    publisher: { "@type": "Organization", name: "Bedouin Trails", logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` } },
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2025-01-15",
    dateModified: "2026-07-26",
  };

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [1, 2, 3, 4].map((i) => ({ "@type": "Question", name: t(`guide_camping_faq${i}_q`), acceptedAnswer: { "@type": "Answer", text: t(`guide_camping_faq${i}_a`) } })) }) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_camping_breadcrumb"), url },
        ]}
      />

      <GuideHero src="/img/white-desert-camping.jpg" alt="White Desert camping overnight experience Egypt" h1={t("guide_camping_h1")} />

      <div className={styles["guide-content"]}>
        <p>{t("guide_camping_intro_p")}</p>

        <h2>{t("guide_camping_experience_h2")}</h2>
        <p>{t("guide_camping_experience_p")}</p>

        <h2>{t("guide_camping_provided_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}>{t(`guide_camping_provided_li${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_camping_bring_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>{t(`guide_camping_bring_li${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_camping_besttime_h2")}</h2>
        <p>{t("guide_camping_besttime_p")}</p>

        <h2>{t("guide_camping_stargazing_h2")}</h2>
        <p>{t("guide_camping_stargazing_p")}</p>

        <h2>{t("guide_camping_safety_h2")}</h2>
        <p>{t("guide_camping_safety_p")}</p>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_camping_faq_h2")}</h2>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_camping_faq${i}_q`)}</h3>
              <p>{t(`guide_camping_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_camping_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_camping_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
