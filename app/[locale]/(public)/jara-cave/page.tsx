import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/jara-cave";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_djara_title"),
    description: t("guide_djara_meta_desc"),
    keywords: t("guide_djara_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_djara_og_title"),
      description: t("guide_djara_og_desc"),
      url,
      images: [`${SITE_URL}/img/hero-jara-cave.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_djara_twitter_title"),
      description: t("guide_djara_twitter_desc"),
      images: [`${SITE_URL}/img/hero-jara-cave.jpg`],
    },
  };
}

export default async function JaraCavePage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Jara Cave",
      alternateName: ["Djara Cave", "كهف الجارة"],
      description:
        "Jara Cave is a prehistoric cave in Egypt's Western Desert containing Neolithic rock art and murals dating back to 7700–5300 BC, depicting humans, animals, and hunting scenes from when the Sahara was green.",
      url,
      geo: { "@type": "GeoCoordinates", latitude: "27.55", longitude: "28.65" },
      touristType: ["History enthusiasts", "Adventure seekers", "Archaeologists"],
      datePublished: "2025-01-15",
      dateModified: "2026-08-24",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [1, 2, 3, 4, 5].map((i) => ({
        "@type": "Question",
        name: t(`guide_djara_faq${i}_q`),
        acceptedAnswer: { "@type": "Answer", text: t(`guide_djara_faq${i}_a`) },
      })),
    },
  ];

  return (
    <div className={styles["guide-page"]}>
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_djara_breadcrumb"), url },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <GuideHero src="/img/hero-jara-cave.jpg" alt="Jara Cave prehistoric rock art Egypt Western Desert" h1={t("guide_djara_h1")} />

      <div className={styles["guide-content"]}>
        <p>{t("guide_djara_intro_p")}</p>

        <h2>{t("guide_djara_what_h2")}</h2>
        <p>{t("guide_djara_what_p1")}</p>
        <p>{t("guide_djara_what_p2")}</p>

        <h2>{t("guide_djara_see_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <strong>{t(`guide_djara_see_li${i}_bold`)}</strong> — {t(`guide_djara_see_li${i}_text`)}
            </li>
          ))}
        </ul>

        <div className={styles["highlight-box"]}>
          <p>{t("guide_djara_highlight")}</p>
        </div>

        <h2>{t("guide_djara_howto_h2")}</h2>
        <p>{t("guide_djara_howto_p")}</p>

        <h3>{t("guide_djara_itinerary_h3")}</h3>
        <ol>
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <strong>{t(`guide_djara_itinerary_li${i}_bold`)}</strong> {t(`guide_djara_itinerary_li${i}_text`)}
            </li>
          ))}
        </ol>

        <h2>{t("guide_djara_besttime_h2")}</h2>
        <p>{t("guide_djara_besttime_p")}</p>

        <h2>{t("guide_djara_why_h2")}</h2>
        <p>{t("guide_djara_why_p")}</p>

        <h2>{t("guide_djara_combine_h2")}</h2>
        <p>{t("guide_djara_combine_p")}</p>

        <h2>{t("guide_djara_related_h2")}</h2>
        <ul>
          <li><Link href="/white-desert-egypt">{t("guide_wd_breadcrumb")}</Link> — Egypt's most iconic desert landscape</li>
          <li><Link href="/black-desert-egypt">{t("guide_black_breadcrumb")}</Link> — volcanic hills on the route to Jara Cave</li>
          <li><Link href="/crystal-mountain-egypt">{t("guide_crystal_breadcrumb")}</Link> — a quartz ridge sparkling in the desert sun</li>
          <li><Link href="/bahariya-oasis">{t("guide_bahariya_breadcrumb")}</Link> — the gateway oasis for all Western Desert tours</li>
        </ul>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_djara_faq_h2")}</h2>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_djara_faq${i}_q`)}</h3>
              <p>{t(`guide_djara_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_djara_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_browse_tours")}
          </Link>
        </div>
      </div>
    </div>
  );
}
