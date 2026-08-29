import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { prisma } from "@/lib/prisma";
import { localize } from "@/lib/i18n/localized";
import { getLocalFallbackImage } from "@/lib/image-fallback";
import type { Locale } from "@/lib/i18n/config";
import styles from "./related-trips.module.scss";

interface RelatedTripsProps {
  locale: Locale;
  heading: string;
  ctaLabel: string;
}

export default async function RelatedTrips({ locale, heading, ctaLabel }: RelatedTripsProps) {
  const traps = await prisma.trap.findMany({
    where: { status: "active" },
    take: 3,
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    include: { galleries: { take: 1, orderBy: { id: "asc" } } },
  });

  if (traps.length === 0) return null;

  return (
    <div className={styles["related-trips"]}>
      <h2>{heading}</h2>
      <div className={styles["related-grid"]}>
        {traps.map((trap) => {
          const name = localize(trap.nameEn, trap.nameAr, locale, trap.nameI18n as Record<string, string> | null);
          const image = trap.galleries[0]?.image ? getLocalFallbackImage(trap.galleries[0].image) : "/img/adventure.webp";
          return (
            <Link key={trap.id} href={`/journeys/${trap.slug}`} className={styles["trip-card"]}>
              <div className={styles["trip-image"]}>
                <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles["trip-info"]}>
                <h3>{name}</h3>
                <span className={styles["trip-duration"]}>{trap.duration} days</span>
                <span className={styles["trip-cta"]}>{ctaLabel} →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
