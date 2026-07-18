import { Link } from "@/lib/i18n/navigation";
import { FaArrowRight } from "react-icons/fa";
import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import type { Locale } from "@/lib/i18n/config";
import { mapAboutUs } from "@/lib/mappers/misc";
import SafeImage from "@/components/safe-image/safe-image";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import PageHero from "@/components/page-hero/page-hero";
import ScrollReveal from "@/components/scroll-reveal/scroll-reveal";
import styles from "@/components/about/about.module.scss";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedouintrails.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("meta_title_about");
  const description = t("meta_desc_about");
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/about` },
    openGraph: { title, description, url: `${SITE_URL}/about`, images: [`${SITE_URL}/og-image.jpg`] },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og-image.jpg`] },
  };
}

export default async function AboutPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  const [entries, trapCount] = await Promise.all([
    prisma.aboutUs.findMany({ orderBy: { id: "asc" } }),
    prisma.trap.count(),
  ]);
  const aboutData = entries.map((entry) => mapAboutUs(entry, locale));

  return (
    <div className={styles.aboutPage}>
      <Breadcrumbs
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "About", url: `${SITE_URL}/about` },
        ]}
      />

      <PageHero title={t("about_hero_title")} image="/img/western-desert-hero.webp" eyebrow={t("about")} />

      <ScrollReveal as="div" className={styles.trustBar}>
        <div className={styles.trustItem}>
          <h3>+{trapCount}</h3>
          <p>{t("number_of_destinations")}</p>
        </div>
        <div className={styles.trustItem}>
          <h3>+1000</h3>
          <p>{t("our_clients")}</p>
        </div>
        <div className={styles.trustItem}>
          <h3>+5</h3>
          <p>{t("experience_years")}</p>
        </div>
      </ScrollReveal>

      {aboutData.map((item, index) => (
        <ScrollReveal
          as="section"
          key={item.id}
          className={`${styles.storyRow} ${index % 2 !== 0 ? styles.reverse : ""}`}
        >
          <h2 className={styles.mobileTitle}>{item.title}</h2>
          <div className={styles.imageCol} style={{ position: "relative" }}>
            <SafeImage src={item.image || "/img/adventure3.webp"} alt={item.title} loading="lazy" fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.desktopTitle}>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </ScrollReveal>
      ))}

      <ScrollReveal as="div" className={styles.ctaBanner}>
        <div className={styles.ctaCard}>
          <h2>{t("about_footer_title")}</h2>
          <p>{t("about_footer_text")}</p>
          <Link href="/journeys" className={styles.pillButton}>
            {t("all_tours")} <FaArrowRight size={13} />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
