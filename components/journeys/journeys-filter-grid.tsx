"use client";

import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTranslations, useLocale } from "next-intl";
import Card from "@/components/card/card";
import PageHero from "@/components/page-hero/page-hero";
import type { TripCardData } from "@/lib/mappers/trap";
import { isRtl, type Locale } from "@/lib/i18n/config";
import styles from "./journeys.module.scss";

export default function JourneysFilterGrid({
  trips,
  durations,
}: {
  trips: TripCardData[];
  durations: number[];
}) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  const filtered = useMemo(() => {
    return trips.filter((trip) => {
      const matchesSearch =
        searchQuery === "" || trip.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDuration = selectedDuration === "" || trip.duration === Number(selectedDuration);
      return matchesSearch && matchesDuration;
    });
  }, [trips, searchQuery, selectedDuration]);

  return (
    <>
      <PageHero title={t("journeys_title")} image="/img/western-desert-hero.webp" eyebrow={t("journeys")} />

      <div className={styles.filterBar}>
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
      <div dir={isRtl(locale) ? "rtl" : "ltr"} className={styles.cardsContainer}>
        {filtered.length > 0 ? (
          filtered.map((trip) => <Card key={trip.id} data={trip} />)
        ) : (
          <div className={styles.noResults}>
            <h2>{t("no_results_found")}</h2>
          </div>
        )}
      </div>
    </>
  );
}
