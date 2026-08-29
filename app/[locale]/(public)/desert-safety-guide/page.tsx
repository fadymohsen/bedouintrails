import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/desert-safety-guide";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_safety_title"),
    description: t("guide_safety_meta_desc"),
    keywords:
      "desert safety Egypt, White Desert safety, Egypt desert tour safety, desert survival tips, desert camping safety, Western Desert Egypt safety, safari safety tips, desert first aid, desert travel advice",
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_safety_og_title"),
      description: t("guide_safety_og_desc"),
      url,
      images: [`${SITE_URL}/img/adventure4.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_safety_og_title"),
      description: t("guide_safety_og_desc"),
      images: [`${SITE_URL}/img/adventure4.webp`],
    },
  };
}

export default async function DesertSafetyPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: t("guide_safety_h1"), description: t("guide_safety_meta_desc"),
        url, image: `${SITE_URL}/img/adventure4.webp`,
        publisher: { "@type": "Organization", name: "Bedouin Trails", logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` } },
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "Bedouin Trails" },
        datePublished: "2025-01-15",
        dateModified: "2026-07-26",
      }) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_safety_breadcrumb"), url },
        ]}
      />

      <GuideHero src="/img/adventure4.webp" alt="Desert safety guide Egypt Western Desert" h1={t("guide_safety_h1")} />

      <div className={styles["guide-content"]}>
        <p>{t("guide_safety_intro")}</p>

        <h2>{t("guide_safety_sun_h2")}</h2>
        <ul>
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <strong>{t(`guide_safety_sun_${i}_bold`)}</strong> — {t(`guide_safety_sun_${i}`)}
            </li>
          ))}
        </ul>

        <h2>{t("guide_safety_hydration_h2")}</h2>
        <p>{t("guide_safety_hydration_p")}</p>
        <ul>
          {[1, 2, 3].map((i) => (
            <li key={i}>{t(`guide_safety_hydration_${i}`)}</li>
          ))}
        </ul>

        <div className={styles["highlight-box"]}>
          <p>{t("guide_safety_highlight")}</p>
        </div>

        <h2>{t("guide_safety_navigation_h2")}</h2>
        <p>{t("guide_safety_navigation_p")}</p>

        <h2>{t("guide_safety_wildlife_h2")}</h2>
        <p>{t("guide_safety_wildlife_p")}</p>
        <ul>
          {[1, 2, 3].map((i) => (
            <li key={i}>{t(`guide_safety_wildlife_${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_safety_night_h2")}</h2>
        <p>{t("guide_safety_night_p")}</p>
        <ul>
          {[1, 2, 3].map((i) => (
            <li key={i}>{t(`guide_safety_night_${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_safety_medical_h2")}</h2>
        <p>{t("guide_safety_medical_p")}</p>
        <ul>
          {[1, 2, 3].map((i) => (
            <li key={i}>{t(`guide_safety_medical_${i}`)}</li>
          ))}
        </ul>

        <h2>{t("guide_safety_vehicle_h2")}</h2>
        <p>{t("guide_safety_vehicle_p")}</p>

        <h2>{t("guide_safety_why_guide_h2")}</h2>
        <p>{t("guide_safety_why_guide_p")}</p>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_safety_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_browse_tours")}
          </Link>
        </div>
      </div>
    </div>
  );
}
