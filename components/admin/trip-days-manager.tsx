"use client";

import { useState, useTransition } from "react";
import {
  addTrapDayAction,
  deleteTrapDayAction,
  addTrapDayCardAction,
  updateTrapDayCardAction,
  deleteTrapDayCardAction,
} from "@/app/admin/(dashboard)/trips/actions";
import I18nField from "./i18n-field";
import { ImageField } from "./media-picker";
import { getLocalFallbackImage } from "@/lib/image-fallback";
import styles from "./admin.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type I18nJson = Record<string, string> | any;

export type TripDayCard = {
  id: number;
  titleEn: string;
  titleAr: string | null;
  titleI18n?: I18nJson;
  descriptionEn: string | null;
  descriptionAr: string | null;
  descriptionI18n?: I18nJson;
  image: string | null;
};
export type TripDay = { id: number; dayNumber: number; cards: TripDayCard[] };

function CardForm({
  tripId,
  dayId,
  card,
  onDone,
}: {
  tripId: number;
  dayId: number;
  card?: TripDayCard;
  onDone: () => void;
}) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setError(null);
    startTransition(async () => {
      try {
        if (card) {
          await updateTrapDayCardAction(tripId, card.id, form);
        } else {
          await addTrapDayCardAction(tripId, dayId, form);
        }
        onDone();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to save. Please try again.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} style={{ maxWidth: "100%" }}>
      {error && <div className={styles.errorBanner}>{error}</div>}
      <I18nField
        name="title"
        label="Title"
        initial={{ en: card?.titleEn, ar: card?.titleAr ?? "", ...card?.titleI18n }}
      />
      <I18nField
        name="description"
        label="Description"
        multiline
        rows={2}
        initial={{ en: card?.descriptionEn ?? "", ar: card?.descriptionAr ?? "", ...card?.descriptionI18n }}
      />
      <ImageField label="Image" currentImage={card?.image} />
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" className={styles.primaryBtn} disabled={pending}>
          {pending ? "Saving..." : card ? "Save" : "Add card"}
        </button>
        <button type="button" className={styles.secondaryBtn} onClick={onDone}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function DayCard({ tripId, day }: { tripId: number; day: TripDay }) {
  const [pending, startTransition] = useTransition();
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  function run(action: () => Promise<void>) {
    setError(null);
    startTransition(async () => {
      try {
        await action();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Action failed. Please try again.");
      }
    });
  }

  return (
    <div className={styles.daySection}>
      <div className={styles.daySectionHeader}>
        <h3>Day {day.dayNumber}</h3>
        <button
          className={styles.dangerBtn}
          onClick={() => {
            if (confirm(`Delete day ${day.dayNumber} and all its cards?`)) {
              run(() => deleteTrapDayAction(tripId, day.id));
            }
          }}
          disabled={pending}
        >
          Delete Day
        </button>
      </div>

      {error && <div className={styles.errorBanner}>{error}</div>}

      {day.cards.length === 0 && !adding && <p className={styles.emptyState}>No cards yet for this day.</p>}

      {day.cards.map((card) =>
        editingId === card.id ? (
          <CardForm key={card.id} tripId={tripId} dayId={day.id} card={card} onDone={() => setEditingId(null)} />
        ) : (
          <div key={card.id} className={styles.dayCardRow}>
            {card.image ? (
              <img src={getLocalFallbackImage(card.image)} alt="" className={styles.dayCardThumb} />
            ) : (
              <div className={styles.dayCardThumbPlaceholder} />
            )}
            <div className={styles.dayCardBody}>
              <strong>{card.titleEn}</strong>
              <p>{card.descriptionEn}</p>
            </div>
            <div className={styles.dayCardActions}>
              <button className={styles.secondaryBtn} onClick={() => setEditingId(card.id)}>
                Edit
              </button>
              <button
                className={styles.dangerBtn}
                onClick={() => run(() => deleteTrapDayCardAction(tripId, card.id))}
                disabled={pending}
              >
                Delete
              </button>
            </div>
          </div>
        )
      )}

      {adding ? (
        <div style={{ marginTop: 16 }}>
          <CardForm tripId={tripId} dayId={day.id} onDone={() => setAdding(false)} />
        </div>
      ) : (
        <button className={styles.secondaryBtn} style={{ marginTop: 16 }} onClick={() => setAdding(true)}>
          + Add card
        </button>
      )}
    </div>
  );
}

export default function TripDaysManager({ tripId, days }: { tripId: number; days: TripDay[] }) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleAddDay() {
    setError(null);
    startTransition(async () => {
      try {
        await addTrapDayAction(tripId);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to add day. Please try again.");
      }
    });
  }

  return (
    <div>
      {days.length === 0 && <p className={styles.emptyState}>No days yet — add the first one to start the itinerary.</p>}

      {days.map((day) => (
        <DayCard key={day.id} tripId={tripId} day={day} />
      ))}

      {error && <div className={styles.errorBanner}>{error}</div>}

      <button className={styles.primaryBtn} onClick={handleAddDay} disabled={pending}>
        {pending ? "Adding..." : "+ Add Day"}
      </button>
    </div>
  );
}
