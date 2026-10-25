"use client";

import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTranslations, useLocale } from "next-intl";
import Card from "@/components/card/card";
import PageHero from "@/components/page-hero/page-hero";
import type { TripCardData } from "@/lib/mappers/trap";
import { isRtl, type Locale } from "@/lib/i18n/config";
import styles from "./journeys.module.scss";

const CATEGORY_ORDER = [
  "black-white-desert-camping",
  "egypt-oasis-tours",
  "desert-hiking-trekking",
  "desert-camel-trekking",
  "desert-jeep-safari",
  "egypt-oases-discovery",
];

export default function JourneysFilterGrid({
  trips,
  durations,
  categories,
}: {
  trips: TripCardData[];
  durations: number[];
  categories: string[];
}) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = useMemo(() => {
    return trips.filter((trip) => {
      const matchesSearch =
        searchQuery === "" || trip.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDuration = selectedDuration === "" || trip.duration === Number(selectedDuration);
      const matchesCategory = selectedCategory === "" || trip.category === selectedCategory;
      return matchesSearch && matchesDuration && matchesCategory;
    });
  }, [trips, searchQuery, selectedDuration, selectedCategory]);

  const grouped = useMemo(() => {
    if (selectedCategory) return [{ category: selectedCategory, trips: filtered }];

    const groups: { category: string; trips: TripCardData[] }[] = [];
    const sorted = [...CATEGORY_ORDER].filter((c) => categories.includes(c));

    for (const cat of sorted) {
      const catTrips = filtered.filter((trip) => trip.category === cat);
      if (catTrips.length > 0) groups.push({ category: cat, trips: catTrips });
    }

    const uncategorized = filtered.filter(
      (trip) => !trip.category || !sorted.includes(trip.category)
    );
    if (uncategorized.length > 0) groups.push({ category: "other", trips: uncategorized });

    return groups;
  }, [filtered, categories, selectedCategory]);

  return (
    <>
      <PageHero title={t("journeys_title")} image="/journeys hero section.jpeg" eyebrow={t("journeys")} backgroundPosition="center" />

      <div className={styles.filterBar}>
        <div className={styles.filter}>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">{t("all_categories")}</option>
            {CATEGORY_ORDER.filter((c) => categories.includes(c)).map((cat) => (
              <option key={cat} value={cat}>
                {t(`category_${cat.replace(/-/g, "_")}`)}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filter}>
          <select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
            <option value="">{t("trip_duration")}</option>
            {durations.map((duration) => (
              <option key={duration} value={duration}>
                {duration} {t("days")}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.filter} ${styles.searchBar}`}>
          <IoSearchOutline className={styles.icon} />
          <input
            type="text"
            placeholder={t("search_by_trip_name")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div dir={isRtl(locale) ? "rtl" : "ltr"}>
        {grouped.length > 0 ? (
          grouped.map((group) => (
            <section key={group.category} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>
                {group.category === "other"
                  ? t("other_trips")
                  : t(`category_${group.category.replace(/-/g, "_")}`)}
              </h2>
              <div className={styles.cardsContainer}>
                {group.trips.map((trip) => (
                  <Card key={trip.id} data={trip} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className={styles.cardsContainer}>
            <div className={styles.noResults}>
              <h2>{t("no_results_found")}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
