import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/how-to-get-to-white-desert";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_howto_title"),
    description: t("guide_howto_meta_desc"),
    keywords: t("guide_howto_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_howto_og_title"),
      description: t("guide_howto_og_desc"),
      url,
      images: [`${SITE_URL}/img/western-desert-hero.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_howto_twitter_title"),
      description: t("guide_howto_twitter_desc"),
      images: [`${SITE_URL}/img/western-desert-hero.webp`],
    },
  };
}

export default async function HowToGetTherePage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: t("guide_howto_h1"), description: t("guide_howto_meta_desc"),
        url, image: `${SITE_URL}/img/western-desert-hero.webp`,
        publisher: { "@type": "Organization", name: "Bedouin Trails", logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` } },
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "Bedouin Trails" },
        datePublished: "2025-01-15",
        dateModified: "2026-07-26",
      }) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_howto_breadcrumb"), url },
        ]}
      />

      <GuideHero src="/img/western-desert-hero.webp" alt="How to get to White Desert Egypt" h1={t("guide_howto_h1")} />

      <div className={styles["guide-content"]}>
        <p>{t("guide_howto_intro_p")}</p>

        <h2>{t("guide_howto_route_h2")}</h2>
        <ol>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <li key={i}>
              <strong>{t(`guide_howto_route_li${i}_bold`)}</strong> — {t(`guide_howto_route_li${i}_text`)}
            </li>
          ))}
        </ol>

        <div className={styles["highlight-box"]}>
          <p>{t("guide_howto_highlight")}</p>
        </div>

        <h2>{t("guide_howto_transport_h2")}</h2>

        <h3>{t("guide_howto_option1_h3")}</h3>
        <p>{t("guide_howto_option1_p")}</p>

        <h3>{t("guide_howto_option2_h3")}</h3>
        <p>{t("guide_howto_option2_p")}</p>

        <h3>{t("guide_howto_option3_h3")}</h3>
        <p>{t("guide_howto_option3_p")}</p>

        <h2>{t("guide_howto_tips_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <strong>{t(`guide_howto_tips_li${i}_bold`)}</strong> — {t(`guide_howto_tips_li${i}_text`)}
            </li>
          ))}
        </ul>

        <h2>{t("guide_howto_distance_h2")}</h2>
        <ul>
          <li>{t("guide_howto_distance_li1")}</li>
          <li>{t("guide_howto_distance_li2")}</li>
          <li>{t("guide_howto_distance_li3")}</li>
          <li>{t("guide_howto_distance_li4")}</li>
          <li>
            <strong>{t("guide_howto_distance_li5")}</strong>
          </li>
        </ul>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_howto_cta")}</p>
          <Link href="/white-desert-tour-from-cairo" className={styles["cta-button"]}>
            {t("guide_howto_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
