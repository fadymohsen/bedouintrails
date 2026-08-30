import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/crystal-mountain-egypt";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_crystal_title"),
    description: t("guide_crystal_meta_desc"),
    keywords:
      "Crystal Mountain Egypt, Crystal Mountain Western Desert, quartz crystal desert Egypt, Egypt Desert Tour, White Desert tour stops, Bahariya Oasis attractions, Western Desert Egypt landmarks, crystal ridge Egypt",
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_crystal_og_title"),
      description: t("guide_crystal_og_desc"),
      url,
      images: [`${SITE_URL}/img/hero-crystal-mountain.webp`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_crystal_twitter_title"),
      description: t("guide_crystal_twitter_desc"),
      images: [`${SITE_URL}/img/hero-crystal-mountain.webp`],
    },
  };
}

export default async function CrystalMountainPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Crystal Mountain",
    description:
      "Crystal Mountain is a small ridge of quartz crystals in Egypt's Western Desert located between the Black Desert and White Desert, sparkling in sunlight.",
    url,
    image: `${SITE_URL}/img/hero-crystal-mountain.webp`,
    geo: { "@type": "GeoCoordinates", latitude: "27.65", longitude: "28.3" },
    touristType: ["Nature lovers", "Photographers", "Adventure seekers"],
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2025-01-15",
    dateModified: "2026-08-30",
  };

  return (
    <div className={styles["guide-page"]}>
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_crystal_breadcrumb"), url },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <GuideHero src="/img/hero-crystal-mountain.webp" alt="Crystal Mountain Egypt quartz crystals Western Desert" h1={t("guide_crystal_h1")} objectPosition="center 40%" />

      <div className={styles["guide-content"]}>
        <p>{t("guide_crystal_intro_p")}</p>

        <h2>{t("guide_crystal_what_h2")}</h2>
        <p>{t("guide_crystal_what_p1")}</p>
        <p>{t("guide_crystal_what_p2")}</p>

        <h2>{t("guide_crystal_where_h2")}</h2>
        <p>{t("guide_crystal_where_p")}</p>

        <h2>{t("guide_crystal_visiting_h2")}</h2>
        <p>{t("guide_crystal_visiting_p")}</p>

        <h3>{t("guide_crystal_typical_h3")}</h3>
        <ol>
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>{t(`guide_crystal_typical_li${i}`)}</li>
          ))}
        </ol>

        <div className={styles["highlight-box"]}>
          <p>
            <strong>{t("guide_crystal_phototip_bold")}</strong> {t("guide_crystal_phototip_text")}
          </p>
        </div>

        <h2>{t("guide_crystal_besttime_h2")}</h2>
        <p>{t("guide_crystal_besttime_p")}</p>

        <h2>{t("guide_crystal_geology_h2")}</h2>
        <p>{t("guide_crystal_geology_p")}</p>

        <h2>{t("guide_crystal_conservation_h2")}</h2>
        <p>{t("guide_crystal_conservation_p")}</p>

        <h2>{t("guide_crystal_nearby_h2")}</h2>
        <ul>
          <li>
            <strong>
              <Link href="/black-desert-egypt">{t("guide_crystal_nearby_li1_bold")}</Link>
            </strong>{" "}
            {t("guide_crystal_nearby_li1_text")}
          </li>
          <li>
            <strong>
              <Link href="/white-desert-tour-from-cairo">{t("guide_crystal_nearby_li2_bold")}</Link>
            </strong>{" "}
            {t("guide_crystal_nearby_li2_text")}
          </li>
          <li>
            <strong>{t("guide_crystal_nearby_li3_bold")}</strong> {t("guide_crystal_nearby_li3_text")}
          </li>
          <li>
            <strong><Link href="/bahariya-oasis">{t("guide_crystal_nearby_li4_bold")}</Link></strong> {t("guide_crystal_nearby_li4_text")}
          </li>
        </ul>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_crystal_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_crystal_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
