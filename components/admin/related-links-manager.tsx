"use client";

import { useState, useTransition } from "react";
import styles from "./admin.module.scss";

type Option = { id: number; label: string };

interface RelatedLinksManagerProps {
  title: string;
  allOptions: Option[];
  selectedIds: number[];
  onSave: (ids: number[]) => Promise<{ error?: string }>;
}

export default function RelatedLinksManager({ title, allOptions, selectedIds, onSave }: RelatedLinksManagerProps) {
  const [selected, setSelected] = useState<number[]>(selectedIds);
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  function toggle(id: number) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    setMessage(null);
  }

  function moveUp(id: number) {
    setSelected((prev) => {
      const idx = prev.indexOf(id);
      if (idx <= 0) return prev;
      const next = [...prev];
      [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
      return next;
    });
    setMessage(null);
  }

  function moveDown(id: number) {
    setSelected((prev) => {
      const idx = prev.indexOf(id);
      if (idx < 0 || idx >= prev.length - 1) return prev;
      const next = [...prev];
      [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
      return next;
    });
    setMessage(null);
  }

  function remove(id: number) {
    setSelected((prev) => prev.filter((x) => x !== id));
    setMessage(null);
  }

  function handleSave() {
    startTransition(async () => {
      const result = await onSave(selected);
      if (result.error) setMessage(result.error);
      else setMessage("Saved!");
    });
  }

  const labelMap = Object.fromEntries(allOptions.map((o) => [o.id, o.label]));
  const available = allOptions.filter((o) => !selected.includes(o.id));

  return (
    <div style={{ marginTop: 16 }}>
      <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>{title}</h3>

      {selected.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 8 }}>Selected (drag to reorder):</p>
          {selected.map((id, idx) => (
            <div
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 6,
                marginBottom: 4,
                fontSize: "0.85rem",
              }}
            >
              <span style={{ color: "#666", minWidth: 20 }}>{idx + 1}.</span>
              <span style={{ flex: 1 }}>{labelMap[id] || `ID ${id}`}</span>
              <button
                type="button"
                onClick={() => moveUp(id)}
                disabled={idx === 0}
                style={{ background: "none", border: "none", color: idx === 0 ? "#444" : "#ccc", cursor: "pointer", fontSize: 16 }}
              >
                ▲
              </button>
              <button
                type="button"
                onClick={() => moveDown(id)}
                disabled={idx === selected.length - 1}
                style={{ background: "none", border: "none", color: idx === selected.length - 1 ? "#444" : "#ccc", cursor: "pointer", fontSize: 16 }}
              >
                ▼
              </button>
              <button
                type="button"
                onClick={() => remove(id)}
                style={{ background: "none", border: "none", color: "#e74c3c", cursor: "pointer", fontSize: 14 }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {available.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 8 }}>Add:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {available.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggle(opt.id)}
                className={styles.btn}
                style={{ fontSize: "0.8rem", padding: "4px 10px" }}
              >
                + {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button type="button" onClick={handleSave} disabled={pending} className={styles.btn} style={{ marginTop: 8 }}>
        {pending ? "Saving..." : "Save Links"}
      </button>
      {message && (
        <span style={{ marginLeft: 12, fontSize: "0.85rem", color: message === "Saved!" ? "#2ecc71" : "#e74c3c" }}>
          {message}
        </span>
      )}
    </div>
  );
}
