import { notFound } from "next/navigation";
import { Link } from "@/lib/i18n/navigation";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { getTrapBySlug } from "@/lib/services/traps";
import { getTripReviewContext } from "@/lib/services/reviews";
import { getUserSession } from "@/lib/auth/session";
import { NotFoundError } from "@/lib/services/errors";
import { localize } from "@/lib/i18n/localized";
import { getLocalFallbackImage } from "@/lib/image-fallback";
import { mapReviewForTestimonial } from "@/lib/mappers/misc";
import { mapTrapForCard } from "@/lib/mappers/trap";
import { prisma } from "@/lib/prisma";
import type { Locale } from "@/lib/i18n/config";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import TripHeroCarousel from "@/components/carousel/trip-hero-carousel";
import TripDayViewer from "@/components/trip-detail/trip-day-viewer";
import TripCarousel from "@/components/carousel/trip-carousel";
import Card from "@/components/card/card";
import RelatedBlogs from "@/components/related-blogs/related-blogs";
import ReviewCarousel from "@/components/carousel/review-carousel";
import { TestimonialCard } from "@/components/rating-card/rating-card";
import TripReviewForm from "@/components/trip-reviews/trip-review-form";
import reviewStyles from "@/components/trip-reviews/trip-reviews.module.scss";
import styles from "@/components/trip-detail/trip-detail.module.scss";

import { SITE_URL, buildAlternates } from "@/lib/seo";

export async function generateStaticParams() {
  const traps = await prisma.trap.findMany({
    where: { status: "active" },
    select: { slug: true },
  });
  return traps.map((trap) => ({ slug: trap.slug }));
}

async function loadTrip(slug: string) {
  try {
    return await getTrapBySlug(slug);
  } catch (err) {
    if (err instanceof NotFoundError) return null;
    throw err;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trip = await loadTrip(slug);
  if (!trip) return {};

  const locale = (await getLocale()) as Locale;
  const name = localize(trip.nameEn, trip.nameAr, locale, trip.nameI18n);
  const url = `${SITE_URL}/${locale}/journeys/${slug}`;
  const image = trip.galleries[0]?.image ?? `${SITE_URL}/img/western-desert-hero.webp`;

  return {
    title: `${trip.metaTitle || name} | Bedouin Trails`,
    description:
      trip.metaDescription ||
      `${name} - ${localize(trip.interfaceFromEn, trip.interfaceFromAr, locale, trip.interfaceFromI18n)} → ${localize(trip.interfaceToEn, trip.interfaceToAr, locale, trip.interfaceToI18n)}. Book your spot now | Bedouin Trails`,
    alternates: buildAlternates(`/journeys/${slug}`, locale),
    openGraph: {
      title: trip.metaTitle || name,
      description: trip.metaDescription || name,
      images: [image],
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: trip.metaTitle || name,
      description: trip.metaDescription || name,
      images: [image],
    },
  };
}

export default async function TripDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = await loadTrip(slug);
  if (!trip) notFound();

  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  const name = localize(trip.nameEn, trip.nameAr, locale, trip.nameI18n);
  const interfaceFrom = localize(trip.interfaceFromEn, trip.interfaceFromAr, locale, trip.interfaceFromI18n);
  const interfaceTo = localize(trip.interfaceToEn, trip.interfaceToAr, locale, trip.interfaceToI18n);
  const url = `${SITE_URL}/${locale}/journeys/${slug}`;

  const images = Array.from(
    new Set([
      ...trip.galleries.map((g) => getLocalFallbackImage(g.image)),
      ...trip.trapDays.flatMap((day) => day.cards.map((card) => card.image)).filter((img): img is string => img !== null).map(getLocalFallbackImage),
    ])
  );
  const reviews = trip.reviews.map(mapReviewForTestimonial);
  const session = await getUserSession();
  const reviewContext = await getTripReviewContext(session?.uid ?? null, trip.id);
  const days = trip.trapDays.map((day) => ({
    dayNumber: day.dayNumber,
    cards: day.cards.map((card) => ({
      id: card.id,
      title: localize(card.titleEn, card.titleAr, locale, card.titleI18n),
      description: localize(card.descriptionEn ?? "", card.descriptionAr, locale, card.descriptionI18n),
      image: getLocalFallbackImage(card.image),
    })),
  }));

  // Query 3 related trips (excluding current trip)
  const relatedTrips = await prisma.trap.findMany({
    where: {
      status: "active",
      slug: { not: slug },
    },
    include: {
      galleries: { take: 1, orderBy: { id: "asc" } },
    },
    take: 3,
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
  const relatedCards = relatedTrips.map((trap) => mapTrapForCard(trap, locale));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description: trip.metaDescription || `${name} - ${interfaceFrom} → ${interfaceTo}`,
    image: images[0] ?? `${SITE_URL}/og-image.jpg`,
    url,
    touristType: "Adventure seekers, Nature lovers, Culture enthusiasts",
    itinerary: {
      "@type": "ItemList",
      numberOfItems: trip.duration,
      description: `${trip.duration} days from ${interfaceFrom} to ${interfaceTo}`,
    },
    provider: { "@type": "TravelAgency", name: "Bedouin Trails", url: SITE_URL },
    inLanguage: locale,
    ...(trip.rate > 0 && reviews.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: trip.rate,
            reviewCount: reviews.length,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };

  return (
    <div className={styles.Card_page}>
      <Breadcrumbs
        items={[
          { name: t("home"), url: `${SITE_URL}/${locale}` },
          { name: t("journeys"), url: `${SITE_URL}/${locale}/journeys` },
          { name, url },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.Carousel}>
        <TripHeroCarousel images={images} />
      </div>

      <div className={styles["part-1"]}>
        <div className={styles.leftP}>
          <h1>{name}</h1>
          <div className={styles.dates}>
            <div className={styles.start}>
              <h3>{interfaceFrom}</h3>
              <p>{t("departure_point")}</p>
            </div>
            <div className={styles.end}>
              <h3>{interfaceTo}</h3>
              <p>{t("destination_point")}</p>
            </div>
          </div>
        </div>

        <div className={styles.rightP}>
          <div className={styles.bookingCard}>
            <h2>{t("have_questions_about_trip")}</h2>
            <p>{t("contact_us_now")}</p>
            <a target="_blank" href="https://wa.link/qtrpve/" className={styles.whatsappLink} rel="noopener noreferrer">
              <FaWhatsapp size={22} />
              <span>+20 10 02717380</span>
            </a>
            <Link href={`/book/${trip.id}`} className={styles.bookingBtn}>
              {t("book_your_spot_now")}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles["part-2"]}>
        <TripDayViewer key={trip.id} days={days} interfaceFrom={interfaceFrom} interfaceTo={interfaceTo} />
      </div>
      <section className={reviewStyles.section} id="reviews">
        <h2>{t("customer_reviews")}</h2>
        {reviews.length > 0 ? (
          <>
            <div className={reviewStyles.summary}>
              <FaStar color="#ffc107" size={22} />
              <strong>{trip.rate}</strong>
              <span>{t("reviews_count", { count: reviews.length })}</span>
            </div>
            {reviews.length > 3 ? (
              <ReviewCarousel data={reviews} />
            ) : (
              <div className={reviewStyles.grid}>
                {reviews.map((review) => (
                  <TestimonialCard key={review.id} review={review} />
                ))}
              </div>
            )}
          </>
        ) : (
          <p className={reviewStyles.empty}>{t("no_reviews_yet")}</p>
        )}
        <TripReviewForm
          trapId={trip.id}
          orderId={reviewContext.orderId}
          loggedIn={reviewContext.loggedIn}
          alreadyReviewed={reviewContext.alreadyReviewed}
        />
      </section>
      {relatedCards.length > 0 && (
        <div className={styles.relatedTripsSection}>
          <h2>{t("related_trips_title") || "Related Trips"}</h2>
          <div className={styles.relatedGrid}>
            {relatedCards.map((card) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        </div>
      )}
      <RelatedBlogs
        tripSlug={slug}
        locale={locale}
        heading={t("related_blogs_title") || "Travel Guides"}
        ctaLabel={t("read_story") || "Read Story"}
      />
    </div>
  );
}
