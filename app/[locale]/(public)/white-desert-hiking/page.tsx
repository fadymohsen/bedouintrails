import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/white-desert-hiking";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_wdhike_title"),
    description: t("guide_wdhike_meta_desc"),
    keywords: t("guide_wdhike_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_wdhike_og_title"),
      description: t("guide_wdhike_og_desc"),
      url,
      images: [`${SITE_URL}/img/hero-white-desert-trek.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_wdhike_twitter_title"),
      description: t("guide_wdhike_twitter_desc"),
      images: [`${SITE_URL}/img/hero-white-desert-trek.webp`],
    },
  };
}

export default async function WhiteDesertHikingPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "White Desert Hiking Expedition — Multi-Day Desert Trekking Egypt",
      description:
        "Real multi-day hiking expedition through Egypt's White Desert with a Bedouin guide, support vehicle, wild camping, and all meals included. Walk 15–20 km/day through the Western Desert.",
      url,
      image: `${SITE_URL}/img/hero-white-desert-trek.webp`,
      geo: { "@type": "GeoCoordinates", latitude: 27.25, longitude: 28.05 },
      touristType: ["Adventure travelers", "Hikers", "Trekkers", "Outdoor enthusiasts"],
      isAccessibleForFree: false,
      address: { "@type": "PostalAddress", addressCountry: "EG", addressRegion: "New Valley Governorate" },
      provider: {
        "@type": "Organization",
        name: "Bedouin Trails",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` },
      },
      author: { "@type": "Organization", name: "Bedouin Trails" },
      datePublished: "2026-09-19",
      dateModified: "2026-09-19",
      inLanguage: locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [1, 2, 3, 4, 5, 6].map((i) => ({
        "@type": "Question",
        name: t(`guide_wdhike_faq${i}_q` as any),
        acceptedAnswer: { "@type": "Answer", text: t(`guide_wdhike_faq${i}_a` as any) },
      })),
    },
  ];

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_wdhike_breadcrumb"), url },
        ]}
      />

      <GuideHero
        src="/img/hero-white-desert-trek.webp"
        alt="White Desert hiking expedition multi-day desert trekking Egypt"
        h1={t("guide_wdhike_h1")}
        path={PATH}
      />

      <div className={styles["guide-content"]}>
        <p>{t("guide_wdhike_intro_p")}</p>

        <h2>{t("guide_wdhike_diff_h2")}</h2>
        <p>{t("guide_wdhike_diff_p")}</p>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <strong>{t(`guide_wdhike_diff_li${i}_bold` as any)}</strong>
              {" — "}
              {t(`guide_wdhike_diff_li${i}_text` as any)}
            </li>
          ))}
        </ul>

        <h2>{t("guide_wdhike_included_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}>{t(`guide_wdhike_included_li${i}` as any)}</li>
          ))}
        </ul>

        <h2>{t("guide_wdhike_options_h2")}</h2>
        <h3>{t("guide_wdhike_option1_h3")}</h3>
        <p>{t("guide_wdhike_option1_p")}</p>
        <h3>{t("guide_wdhike_option2_h3")}</h3>
        <p>{t("guide_wdhike_option2_p")}</p>
        <h3>{t("guide_wdhike_option3_h3")}</h3>
        <p>{t("guide_wdhike_option3_p")}</p>

        <h2>{t("guide_wdhike_day_h2")}</h2>
        <p>{t("guide_wdhike_day_p")}</p>

        <h2>{t("guide_wdhike_route_h2")}</h2>
        <p>{t("guide_wdhike_route_p")}</p>
        <ul>
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>{t(`guide_wdhike_route_li${i}` as any)}</li>
          ))}
        </ul>

        <h2>{t("guide_wdhike_fitness_h2")}</h2>
        <p>{t("guide_wdhike_fitness_p")}</p>

        <h2>{t("guide_wdhike_besttime_h2")}</h2>
        <p>{t("guide_wdhike_besttime_p")}</p>

        <div className={styles["highlight-box"]}>
          <p>
            Explore related guides:{" "}
            <Link href="/white-desert-egypt">White Desert Egypt</Link>,{" "}
            <Link href="/white-desert-safari">White Desert Safari</Link>,{" "}
            <Link href="/camel-trek">Camel Trek Egypt</Link>,{" "}
            <Link href="/desert-trekking-egypt">Desert Trekking Guide</Link>,{" "}
            <Link href="/multi-day-desert-trek">Multi-Day Desert Trek</Link>.
          </p>
        </div>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_wdhike_faq_h2")}</h2>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_wdhike_faq${i}_q` as any)}</h3>
              <p>{t(`guide_wdhike_faq${i}_a` as any)}</p>
            </div>
          ))}
        </div>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Expeditions" ctaLabel="View Expedition" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_wdhike_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_wdhike_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
