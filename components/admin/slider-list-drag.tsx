"use client";

import { useState } from "react";
import Link from "next/link";
import { reorderSlidersAction } from "@/app/admin/(dashboard)/sliders/actions";
import styles from "./admin.module.scss";

type Slider = {
  id: number;
  image: string;
  titleEn: string | null;
  objectPosition: string;
  sortOrder: number;
};

export default function SliderListDrag({ initialSliders }: { initialSliders: Slider[] }) {
  const [sliders, setSliders] = useState(initialSliders);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (id: number) => {
    setDraggedId(id);
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = async (targetId: number) => {
    if (draggedId === null || draggedId === targetId) {
      setIsDragging(false);
      return;
    }

    const draggedIndex = sliders.findIndex((s) => s.id === draggedId);
    const targetIndex = sliders.findIndex((s) => s.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newSliders = [...sliders];
    [newSliders[draggedIndex], newSliders[targetIndex]] = [newSliders[targetIndex], newSliders[draggedIndex]];

    setSliders(newSliders);
    setIsDragging(false);
    setDraggedId(null);

    const form = new FormData();
    form.set("ids", JSON.stringify(newSliders.map((s) => s.id)));
    await reorderSlidersAction(undefined, form);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th style={{ width: 30 }}>Drag</th>
          <th style={{ width: 60 }}>Order</th>
          <th>Image</th>
          <th>Title (EN)</th>
          <th>Position</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sliders.map((slide) => (
          <tr
            key={slide.id}
            draggable
            onDragStart={() => handleDragStart(slide.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(slide.id)}
            style={{
              opacity: draggedId === slide.id ? 0.5 : 1,
              background: isDragging && draggedId !== slide.id ? "var(--highlight-bg, #f5f5f5)" : "",
              cursor: isDragging ? "grabbing" : "grab",
              transition: "all 0.2s ease",
            }}
          >
            <td style={{ textAlign: "center", color: "var(--muted, #888)" }}>⋮⋮</td>
            <td style={{ textAlign: "center", color: "var(--muted, #888)", fontSize: 12 }}>
              {sliders.indexOf(slide) + 1}
            </td>
            <td>
              {slide.image && (
                <div style={{ width: 80, height: 48, borderRadius: 6, overflow: "hidden", background: "#111" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: slide.objectPosition,
                    }}
                  />
                </div>
              )}
            </td>
            <td>{slide.titleEn || <em style={{ color: "var(--muted, #888)" }}>No title</em>}</td>
            <td style={{ fontSize: 12, color: "var(--muted, #888)" }}>{slide.objectPosition}</td>
            <td>
              <Link href={`/admin/sliders/${slide.id}`} className={styles.linkBtn}>
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
