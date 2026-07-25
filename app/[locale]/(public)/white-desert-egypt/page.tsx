import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import styles from "@/components/guides/guides.module.scss";

import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/white-desert-egypt";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const url = `${SITE_URL}${PATH}`;
  return {
    title: t("guide_wd_title"),
    description: t("guide_wd_meta_desc"),
    keywords: t("guide_wd_meta_keywords"),
    alternates: buildAlternates(PATH),
    openGraph: {
      title: t("guide_wd_og_title"),
      description: t("guide_wd_og_desc"),
      url,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_wd_twitter_title"),
      description: t("guide_wd_twitter_desc"),
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default async function WhiteDesertEgyptPage() {
  const t = await getTranslations();
  const url = `${SITE_URL}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "White Desert Egypt",
    description: "The White Desert (Sahara el Beyda) is a national park in Egypt's Western Desert known for surreal chalk-white rock formations, desert camping, and safari tours.",
    url,
    image: `${SITE_URL}/og-image.jpg`,
    geo: { "@type": "GeoCoordinates", latitude: 27.25, longitude: 28.05 },
    touristType: ["Adventure travelers", "Nature lovers", "Photographers", "Desert enthusiasts"],
    isAccessibleForFree: false,
    address: { "@type": "PostalAddress", addressCountry: "EG", addressRegion: "New Valley Governorate" },
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2025-01-15",
    dateModified: "2026-07-26",
  };

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/` },
          { name: t("guide_wd_breadcrumb"), url },
        ]}
      />

      <div className={styles["guide-hero"]} style={{ backgroundImage: "url('/img/bg.webp')" }}>
        <h1>{t("guide_wd_h1")}</h1>
      </div>

      <div className={styles["guide-content"]}>
        <p>{t("guide_wd_intro_p")}</p>

        <h2>{t("guide_wd_what_h2")}</h2>
        <p>{t("guide_wd_what_p")}</p>

        <h2>{t("guide_wd_highlights_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}><strong>{t(`guide_wd_highlight${i}_bold`)}</strong> — {t(`guide_wd_highlight${i}_text`)}</li>
          ))}
        </ul>

        <h2>{t("guide_wd_tours_h2")}</h2>
        <p>{t("guide_wd_tours_p")}</p>
        <ul>
          {[1, 2, 3].map((i) => (
            <li key={i}><strong>{t(`guide_wd_tour${i}_bold`)}</strong> — {t(`guide_wd_tour${i}_text`)}</li>
          ))}
        </ul>

        <h2>{t("guide_wd_besttime_h2")}</h2>
        <p>{t("guide_wd_besttime_p")}</p>

        <h2>{t("guide_wd_getting_h2")}</h2>
        <p>{t("guide_wd_getting_p")}</p>

        <h2>{t("guide_wd_camping_h2")}</h2>
        <p>{t("guide_wd_camping_p")}</p>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_wd_faq_h2")}</h2>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_wd_faq${i}_q`)}</h3>
              <p>{t(`guide_wd_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <div className={styles["cta-section"]}>
          <p>{t("guide_wd_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_wd_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
