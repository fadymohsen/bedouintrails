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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    startTransition(async () => {
      if (card) {
        await updateTrapDayCardAction(tripId, card.id, form);
      } else {
        await addTrapDayCardAction(tripId, dayId, form);
      }
      onDone();
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} style={{ maxWidth: "100%" }}>
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
      <div className={styles.field}>
        <label>Image {card && "(leave empty to keep current)"}</label>
        <input type="file" name="image" accept="image/*" />
      </div>
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

  return (
    <div className={styles.card}>
      <div className={styles.header} style={{ marginBottom: 12 }}>
        <h3 style={{ margin: 0 }}>Day {day.dayNumber}</h3>
        <button
          className={styles.dangerBtn}
          onClick={() => {
            if (confirm(`Delete day ${day.dayNumber} and all its cards?`)) {
              startTransition(() => deleteTrapDayAction(tripId, day.id));
            }
          }}
          disabled={pending}
        >
          Delete Day
        </button>
      </div>

      {day.cards.map((card) =>
        editingId === card.id ? (
          <CardForm key={card.id} tripId={tripId} dayId={day.id} card={card} onDone={() => setEditingId(null)} />
        ) : (
          <div key={card.id} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "1px solid #eee" }}>
            {card.image && <img src={card.image} alt="" className={styles.thumb} />}
            <div style={{ flex: 1 }}>
              <strong>{card.titleEn}</strong>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#777" }}>{card.descriptionEn}</p>
            </div>
            <button className={styles.secondaryBtn} onClick={() => setEditingId(card.id)}>
              Edit
            </button>
            <button
              className={styles.dangerBtn}
              onClick={() => startTransition(() => deleteTrapDayCardAction(tripId, card.id))}
              disabled={pending}
            >
              Delete
            </button>
          </div>
        )
      )}

      {adding ? (
        <div style={{ marginTop: 12 }}>
          <CardForm tripId={tripId} dayId={day.id} onDone={() => setAdding(false)} />
        </div>
      ) : (
        <button className={styles.secondaryBtn} style={{ marginTop: 12 }} onClick={() => setAdding(true)}>
          + Add card
        </button>
      )}
    </div>
  );
}

export default function TripDaysManager({ tripId, days }: { tripId: number; days: TripDay[] }) {
  const [pending, startTransition] = useTransition();

  return (
    <div>
      {days.map((day) => (
        <DayCard key={day.id} tripId={tripId} day={day} />
      ))}

      <button className={styles.primaryBtn} onClick={() => startTransition(() => addTrapDayAction(tripId))} disabled={pending}>
        {pending ? "Adding..." : "+ Add Day"}
      </button>
    </div>
  );
}
