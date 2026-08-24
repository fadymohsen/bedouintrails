import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import styles from "@/components/guides/guides.module.scss";

import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/siwa-oasis-tour";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_siwa_title"),
    description: t("guide_siwa_meta_desc"),
    keywords: t("guide_siwa_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_siwa_og_title"),
      description: t("guide_siwa_og_desc"),
      url,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_siwa_twitter_title"),
      description: t("guide_siwa_twitter_desc"),
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default async function SiwaOasisTourPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Siwa Oasis",
      alternateName: "واحة سيوة",
      description:
        "Siwa Oasis is Egypt's most remote desert oasis, known for the Oracle Temple of Amun consulted by Alexander the Great, Cleopatra's Spring, the Great Sand Sea, and unique Berber culture.",
      url,
      geo: { "@type": "GeoCoordinates", latitude: "29.2", longitude: "25.52" },
      touristType: [
        "Adventure travelers",
        "History enthusiasts",
        "Nature lovers",
        "Cultural travelers",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "EG",
        addressRegion: "Matrouh Governorate",
      },
      datePublished: "2026-08-24",
      dateModified: "2026-08-24",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [1, 2, 3, 4, 5].map((i) => ({
        "@type": "Question",
        name: t(`guide_siwa_faq${i}_q`),
        acceptedAnswer: { "@type": "Answer", text: t(`guide_siwa_faq${i}_a`) },
      })),
    },
  ];

  return (
    <div className={styles["guide-page"]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_siwa_breadcrumb"), url },
        ]}
      />

      <div
        className={styles["guide-hero"]}
        style={{ backgroundImage: "url('/img/adventure1.webp')" }}
      >
        <h1>{t("guide_siwa_h1")}</h1>
      </div>

      <div className={styles["guide-content"]}>
        <p>{t("guide_siwa_intro_p")}</p>

        <h2>{t("guide_siwa_why_h2")}</h2>
        <p>{t("guide_siwa_why_p")}</p>

        <h2>{t("guide_siwa_highlights_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}>
              <strong>{t(`guide_siwa_highlight${i}_bold`)}</strong> —{" "}
              {t(`guide_siwa_highlight${i}_text`)}
            </li>
          ))}
        </ul>

        <h2>{t("guide_siwa_what_h2")}</h2>
        <p>{t("guide_siwa_what_p")}</p>

        <h2>{t("guide_siwa_tours_h2")}</h2>
        <ul>
          {[1, 2, 3].map((i) => (
            <li key={i}>
              <strong>{t(`guide_siwa_tour${i}_bold`)}</strong> —{" "}
              {t(`guide_siwa_tour${i}_text`)}
            </li>
          ))}
        </ul>

        <h2>{t("guide_siwa_getting_h2")}</h2>
        <p>{t("guide_siwa_getting_p")}</p>

        <h2>{t("guide_siwa_besttime_h2")}</h2>
        <p>{t("guide_siwa_besttime_p")}</p>

        <div className={styles["highlight-box"]}>
          <p>
            Also explore:{" "}
            <Link href="/western-desert-egypt-guide">
              Western Desert Egypt Guide
            </Link>
            , <Link href="/white-desert-egypt">White Desert Egypt</Link>,{" "}
            <Link href="/desert-trekking-egypt">Desert Trekking Egypt</Link>,{" "}
            <Link href="/camel-trek">Camel Trek Egypt</Link>.
          </p>
        </div>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_siwa_faq_h2")}</h2>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_siwa_faq${i}_q`)}</h3>
              <p>{t(`guide_siwa_faq${i}_a`)}</p>
            </div>
          ))}
        </div>

        <div className={styles["cta-section"]}>
          <p>{t("guide_siwa_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_siwa_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
