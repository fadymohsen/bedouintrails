import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import RelatedGuides from "@/components/guides/related-guides";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/sahara-hiking-egypt";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_hiking_title"),
    description: t("guide_hiking_meta_desc"),
    keywords: t("guide_hiking_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_hiking_og_title"),
      description: t("guide_hiking_og_desc"),
      url,
      images: [`${SITE_URL}/img/hero-desert-trekking.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_hiking_twitter_title"),
      description: t("guide_hiking_twitter_desc"),
      images: [`${SITE_URL}/img/hero-desert-trekking.webp`],
    },
  };
}

export default async function SaharaHikingEgyptPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sahara Hiking Tour Egypt — Desert Hiking in the Western Desert",
    description:
      "Complete guide to Sahara hiking tours in Egypt. Trek through the White Desert, Black Desert, and Bahariya Oasis with experienced Bedouin guides from Cairo.",
    url,
    image: `${SITE_URL}/img/hero-desert-trekking.webp`,
    publisher: { "@type": "Organization", name: "Bedouin Trails", logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` } },
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2026-08-30",
    dateModified: "2026-08-30",
  };

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [1, 2, 3, 4].map((i) => ({ "@type": "Question", name: t(`guide_hiking_faq${i}_q`), acceptedAnswer: { "@type": "Answer", text: t(`guide_hiking_faq${i}_a`) } })) }) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_hiking_breadcrumb"), url },
        ]}
      />

      <GuideHero src="/img/hero-desert-trekking.webp" alt="Sahara hiking tour Egypt Western Desert" h1={t("guide_hiking_h1")} path={PATH} />

      <div className={styles["guide-content"]}>
        <p>{t("guide_hiking_intro_p")}</p>

        <h2>{t("guide_hiking_why_h2")}</h2>
        <p>{t("guide_hiking_why_p")}</p>

        <h2>{t("guide_hiking_routes_h2")}</h2>

        <h3>{t("guide_hiking_route1_h3")}</h3>
        <p>{t("guide_hiking_route1_p")}</p>

        <h3>{t("guide_hiking_route2_h3")}</h3>
        <p>{t("guide_hiking_route2_p")}</p>

        <h3>{t("guide_hiking_route3_h3")}</h3>
        <p>{t("guide_hiking_route3_p")}</p>

        <h2>{t("guide_hiking_expect_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <strong>{t(`guide_hiking_expect_li${i}_bold`)}</strong> — {t(`guide_hiking_expect_li${i}_text`)}
            </li>
          ))}
        </ul>

        <h2>{t("guide_hiking_fitness_h2")}</h2>
        <p>{t("guide_hiking_fitness_p")}</p>

        <h2>{t("guide_hiking_besttime_h2")}</h2>
        <p>{t("guide_hiking_besttime_p")}</p>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_hiking_faq_h2")}</h2>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_hiking_faq${i}_q`)}</h3>
              <p>{t(`guide_hiking_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <RelatedGuides guides={[
          { href: "/desert-trekking-egypt", labelKey: "rg_desert_trek" },
          { href: "/multi-day-desert-trek", labelKey: "rg_multi_day" },
          { href: "/desert-safety-guide", labelKey: "rg_safety" },
          { href: "/camel-trek", labelKey: "rg_camel_trek" },
        ]} />

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_hiking_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_hiking_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
