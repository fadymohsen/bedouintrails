import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { listActiveTraps } from "@/lib/services/traps";
import { mapTrapForCard } from "@/lib/mappers/trap";
import type { Locale } from "@/lib/i18n/config";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import JourneysFilterGrid from "@/components/journeys/journeys-filter-grid";

import { SITE_URL, buildAlternates } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  const title = t("meta_title_journeys");
  const description = t("meta_desc_journeys");
  const url = `${SITE_URL}/${locale}/journeys`;
  return {
    title, description,
    keywords: t("meta_keywords_journeys"),
    alternates: buildAlternates("/journeys", locale),
    openGraph: { title, description, url, images: [`${SITE_URL}/img/hero-journeys.webp`] },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/img/hero-journeys.webp`],
    },
  };
}

export default async function JourneysPage() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();
  const { traps, facets } = await listActiveTraps();
  const trips = traps.map((trap) => mapTrapForCard(trap, locale));

  const itemListJsonLd =
    trips.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: t("journeys_schema_name"),
          description: t("journeys_schema_desc"),
          inLanguage: locale,
          numberOfItems: trips.length,
          itemListElement: trips.map((trip, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "TouristTrip",
              name: trip.name,
              url: `${SITE_URL}/${locale}/journeys/${trip.slug}`,
              ...(trip.rate > 0
                ? {
                    aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: trip.rate,
                      bestRating: 5,
                      worstRating: 1,
                    },
                  }
                : {}),
            },
          })),
        }
      : null;

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: t("home"), url: `${SITE_URL}/${locale}` },
          { name: t("journeys"), url: `${SITE_URL}/${locale}/journeys` },
        ]}
      />
      {itemListJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      )}
      <JourneysFilterGrid trips={trips} durations={facets.durations} categories={facets.categories} />
    </div>
  );
}
