import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GuideHero from "@/components/guides/guide-hero";
import RelatedTrips from "@/components/guides/related-trips";
import styles from "@/components/guides/guides.module.scss";

import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/bahariya-oasis";
export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_bahariya_title"),
    description: t("guide_bahariya_meta_desc"),
    keywords: t("guide_bahariya_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_bahariya_og_title"),
      description: t("guide_bahariya_og_desc"),
      url,
      images: [`${SITE_URL}/img/bahariya-oasis-palms.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_bahariya_twitter_title"),
      description: t("guide_bahariya_twitter_desc"),
      images: [`${SITE_URL}/img/bahariya-oasis-palms.jpg`],
    },
  };
}

export default async function BahariyaOasisPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Bahariya Oasis",
    description: "Bahariya Oasis is the gateway to Egypt's White Desert and Black Desert, located 370 km southwest of Cairo in the Western Desert.",
    url,
    image: `${SITE_URL}/img/bahariya-oasis-palms.jpg`,
    address: { "@type": "PostalAddress", addressCountry: "EG", addressRegion: "Giza Governorate" },
    touristType: ["Adventure seekers", "Nature lovers", "Culture enthusiasts"],
    isAccessibleForFree: false,
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2025-01-15",
    dateModified: "2026-08-30",
  };

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [1, 2, 3, 4].map((i) => ({ "@type": "Question", name: t(`guide_bahariya_faq${i}_q`), acceptedAnswer: { "@type": "Answer", text: t(`guide_bahariya_faq${i}_a`) } })) }) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_bahariya_breadcrumb"), url },
        ]}
      />

      <GuideHero src="/img/bahariya-oasis-palms.jpg" alt="Bahariya Oasis palm trees Western Desert Egypt" h1={t("guide_bahariya_h1")} />

      <div className={styles["guide-content"]}>
        <p>{t("guide_bahariya_intro_p")}</p>

        <h2>{t("guide_bahariya_about_h2")}</h2>
        <p>{t("guide_bahariya_about_p")}</p>

        <h2>{t("guide_bahariya_attractions_h2")}</h2>

        <h3>{t("guide_bahariya_attraction1_h3")}</h3>
        <p>{t("guide_bahariya_attraction1_p")}</p>

        <h3>{t("guide_bahariya_attraction2_h3")}</h3>
        <p>{t("guide_bahariya_attraction2_p")}</p>

        <h3>{t("guide_bahariya_attraction3_h3")}</h3>
        <p>{t("guide_bahariya_attraction3_p")}</p>

        <h3>{t("guide_bahariya_attraction4_h3")}</h3>
        <p>{t("guide_bahariya_attraction4_p")}</p>

        <h2>{t("guide_bahariya_getting_h2")}</h2>
        <p>{t("guide_bahariya_getting_p")}</p>

        <h2>{t("guide_bahariya_tours_h2")}</h2>
        <p>{t("guide_bahariya_tours_p")}</p>

        <h2>{t("guide_bahariya_besttime_h2")}</h2>
        <p>{t("guide_bahariya_besttime_p")}</p>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_bahariya_faq_h2")}</h2>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_bahariya_faq${i}_q`)}</h3>
              <p>{t(`guide_bahariya_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <RelatedTrips locale={locale as Locale} heading="Featured Desert Tours" ctaLabel="View Tour" />

        <div className={styles["cta-section"]}>
          <p>{t("guide_bahariya_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_bahariya_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
