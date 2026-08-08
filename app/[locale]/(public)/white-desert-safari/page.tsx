import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import styles from "@/components/guides/guides.module.scss";

import { SITE_URL, buildAlternates } from "@/lib/seo";
const PATH = "/white-desert-safari";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    title: t("guide_wdsafari_title"),
    description: t("guide_wdsafari_meta_desc"),
    keywords: t("guide_wdsafari_meta_keywords"),
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t("guide_wdsafari_og_title"),
      description: t("guide_wdsafari_og_desc"),
      url,
      images: [`${SITE_URL}/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("guide_wdsafari_twitter_title"),
      description: t("guide_wdsafari_twitter_desc"),
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export default async function WhiteDesertSafariPage() {
  const [t, locale] = await Promise.all([getTranslations(), getLocale()]);
  const url = `${SITE_URL}/${locale}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "White Desert Safari Egypt — Complete Guide to Overnight Desert Tours",
    description:
      "Everything you need to know about a White Desert safari in Egypt — tour options, what's included, the route, best time to go, and how to book from Cairo.",
    url,
    image: `${SITE_URL}/og-image.jpg`,
    publisher: {
      "@type": "Organization",
      name: "Bedouin Trails",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` },
    },
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Bedouin Trails" },
    datePublished: "2026-08-08",
    dateModified: "2026-08-08",
  };

  return (
    <div className={styles["guide-page"]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs
        items={[
          { name: t("breadcrumb_home"), url: `${SITE_URL}/${locale}` },
          { name: t("guide_wdsafari_breadcrumb"), url },
        ]}
      />

      <div className={styles["guide-hero"]} style={{ backgroundImage: "url('/img/bg.webp')" }}>
        <h1>{t("guide_wdsafari_h1")}</h1>
      </div>

      <div className={styles["guide-content"]}>
        <p>{t("guide_wdsafari_intro_p")}</p>

        <h2>{t("guide_wdsafari_what_h2")}</h2>
        <p>{t("guide_wdsafari_what_p")}</p>

        <h2>{t("guide_wdsafari_options_h2")}</h2>

        <h3>{t("guide_wdsafari_option1_h3")}</h3>
        <p>{t("guide_wdsafari_option1_p")}</p>

        <h3>{t("guide_wdsafari_option2_h3")}</h3>
        <p>{t("guide_wdsafari_option2_p")}</p>

        <h3>{t("guide_wdsafari_option3_h3")}</h3>
        <p>{t("guide_wdsafari_option3_p")}</p>

        <h2>{t("guide_wdsafari_route_h2")}</h2>
        <p>{t("guide_wdsafari_route_intro")}</p>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <strong>{t(`guide_wdsafari_route_li${i}_bold` as any)}</strong>{" "}
              — {t(`guide_wdsafari_route_li${i}_text` as any)}
            </li>
          ))}
        </ul>

        <h2>{t("guide_wdsafari_included_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li key={i}>{t(`guide_wdsafari_included_li${i}` as any)}</li>
          ))}
        </ul>

        <h2>{t("guide_wdsafari_highlights_h2")}</h2>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <strong>{t(`guide_wdsafari_highlight${i}_bold` as any)}</strong>{" "}
              — {t(`guide_wdsafari_highlight${i}_text` as any)}
            </li>
          ))}
        </ul>

        <h2>{t("guide_wdsafari_besttime_h2")}</h2>
        <p>{t("guide_wdsafari_besttime_p")}</p>

        <h2>{t("guide_wdsafari_tips_h2")}</h2>
        <p>{t("guide_wdsafari_tips_p")}</p>

        <div className={styles["faq-section"]}>
          <h2>{t("guide_wdsafari_faq_h2")}</h2>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className={styles["faq-item"]} key={i}>
              <h3>{t(`guide_wdsafari_faq${i}_q` as any)}</h3>
              <p>{t(`guide_wdsafari_faq${i}_a` as any)}</p>
            </div>
          ))}
        </div>

        <div className={styles["cta-section"]}>
          <p>{t("guide_wdsafari_cta")}</p>
          <Link href="/journeys" className={styles["cta-button"]}>
            {t("guide_wdsafari_cta_button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
