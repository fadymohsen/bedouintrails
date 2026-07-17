"use client";

import { useState } from "react";
import TrapForm, { type TrapFormValues } from "./trap-form";
import TripDaysManager, { type TripDay } from "./trip-days-manager";
import TripGalleryManager, { type GalleryImage } from "./trip-gallery-manager";
import styles from "./admin.module.scss";

type ActionState = { success?: boolean; error?: string } | undefined;

export default function TripEditTabs({
  tripId,
  initial,
  days,
  images,
  updateAction,
}: {
  tripId: number;
  initial: TrapFormValues;
  days: TripDay[];
  images: GalleryImage[];
  updateAction: (prevState: ActionState, form: FormData) => Promise<ActionState>;
}) {
  const [tab, setTab] = useState<"details" | "days" | "gallery">("details");

  return (
    <div>
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${tab === "details" ? styles.active : ""}`} onClick={() => setTab("details")}>
          Details
        </button>
        <button className={`${styles.tab} ${tab === "days" ? styles.active : ""}`} onClick={() => setTab("days")}>
          Days & Cards
        </button>
        <button className={`${styles.tab} ${tab === "gallery" ? styles.active : ""}`} onClick={() => setTab("gallery")}>
          Gallery
        </button>
      </div>

      {tab === "details" && (
        <div className={styles.card}>
          <TrapForm initial={initial} action={updateAction} submitLabel="Save Changes" />
        </div>
      )}
      {tab === "days" && <TripDaysManager tripId={tripId} days={days} />}
      {tab === "gallery" && (
        <div className={styles.card}>
          <TripGalleryManager tripId={tripId} images={images} />
        </div>
      )}
    </div>
  );
}
