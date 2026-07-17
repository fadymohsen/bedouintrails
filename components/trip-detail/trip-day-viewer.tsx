"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./trip-detail.module.scss";

export type TripDayCardData = { id: number; title: string; description: string | null; image: string | null };
export type TripDayData = { dayNumber: number; cards: TripDayCardData[] };

export default function TripDayViewer({
  days,
  interfaceFrom,
  interfaceTo,
}: {
  days: TripDayData[];
  interfaceFrom: string;
  interfaceTo: string;
}) {
  const t = useTranslations();
  const [currentDay, setCurrentDay] = useState(days[0]?.dayNumber ?? 1);
  const currentDayData = days.find((day) => day.dayNumber === currentDay);

  function goToPrevDay() {
    if (currentDay > 1) setCurrentDay(currentDay - 1);
  }

  function goToNextDay() {
    if (currentDay < days.length) setCurrentDay(currentDay + 1);
  }

  return (
    <div className={styles["part-2"]}>
      <h1>{t("trip_details")}</h1>
      <div className={styles["dates-container"]}>
        <div className={styles.numWhere}>
          <p className={styles.pointLabel}>{t("starting_point")}</p>
          <p>{interfaceFrom}</p>
        </div>
        <div className={styles["days-navigation-container"]}>
          <button className={styles["nav-arrow-btn"]} onClick={goToPrevDay} disabled={currentDay <= 1}>
            <span className={styles["arrow-icon"]}>‹</span>
          </button>
          <div className={styles["days-strip"]}>
            {days.map((day) => (
              <div
                key={day.dayNumber}
                className={`${styles["day-item"]} ${currentDay === day.dayNumber ? styles["active-day"] : ""}`}
                onClick={() => setCurrentDay(day.dayNumber)}
              >
                <span className={styles["day-label"]}>{t("day")}</span>
                <span className={styles["day-number"]}>{day.dayNumber}</span>
              </div>
            ))}
          </div>
          <button className={styles["nav-arrow-btn"]} onClick={goToNextDay} disabled={currentDay >= days.length}>
            <span className={styles["arrow-icon"]}>›</span>
          </button>
        </div>
        <div className={styles["start-end"]}>
          <p className={styles.pointLabel}>{t("end_point")}</p>
          <p>{interfaceTo}</p>
        </div>
      </div>

      <div className={styles.journeyDesCard}>
        {currentDayData && currentDayData.cards.length > 0 ? (
          currentDayData.cards.map((card, index) => (
            <div className={styles["step-card"]} key={card.id}>
              <div className={styles.badge}>{index + 1}</div>
              <div className={styles["image-wrapper"]} style={{ position: "relative" }}>
                {card.image && <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} />}
              </div>
              <div className={styles.content}>
                <h3>
                  {t("day")} {currentDay} - {t("card_label")}: {card.title}
                </h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className={styles["no-cards-message"]}>
            <h3>{t("trip_program_coming_soon")}</h3>
            <p>{t("contact_whatsapp_for_more")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
