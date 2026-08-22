"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { reorderTripsAction } from "@/app/admin/(dashboard)/trips/actions";
import styles from "./admin.module.scss";

type TripRow = {
  id: number;
  nameEn: string;
  duration: number;
  countPeople: number;
  status: string;
  galleries: { image: string }[];
};

export default function TripReorderList({ trips }: { trips: TripRow[] }) {
  const [items, setItems] = useState(trips);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const dragIndex = useRef<number | null>(null);

  function handleDragStart(index: number) {
    dragIndex.current = index;
  }

  function handleDragOver(e: React.DragEvent, index: number) {
    e.preventDefault();
    const from = dragIndex.current;
    if (from === null || from === index) return;
    const next = [...items];
    const [moved] = next.splice(from, 1);
    next.splice(index, 0, moved);
    dragIndex.current = index;
    setItems(next);
  }

  function handleDragEnd() {
    dragIndex.current = null;
  }

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    await reorderTripsAction(items.map((t) => t.id));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12, gap: 8, alignItems: "center" }}>
        {saved && <span style={{ color: "#2d8a4e", fontSize: "0.85rem", fontWeight: 600 }}>Order saved!</span>}
        <button className={styles.primaryBtn} onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Order"}
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: 32 }}></th>
            <th style={{ width: 48 }}></th>
            <th>Name</th>
            <th>Duration</th>
            <th>Bookings</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((trip, index) => (
            <tr
              key={trip.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              style={{ cursor: "grab", userSelect: "none" }}
            >
              <td style={{ color: "#bbb", fontSize: "1.1rem", paddingRight: 0 }}>⠿</td>
              <td>
                {trip.galleries[0] && (
                  <img className={styles.thumb} src={trip.galleries[0].image} alt="" />
                )}
              </td>
              <td>{trip.nameEn}</td>
              <td>{trip.duration} days</td>
              <td>{trip.countPeople}</td>
              <td>
                <span className={`${styles.badge} ${styles[trip.status as keyof typeof styles]}`}>
                  {trip.status}
                </span>
              </td>
              <td>
                <Link href={`/admin/trips/${trip.id}`} className={styles.linkBtn}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
