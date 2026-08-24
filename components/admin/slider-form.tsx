"use client";

import { useActionState, useState } from "react";
import I18nField from "./i18n-field";
import { ImageField } from "./media-picker";
import styles from "./admin.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type I18nJson = Record<string, string> | any;

export type SliderFormValues = {
  titleEn: string;
  titleAr: string;
  titleI18n?: I18nJson;
  descriptionEn: string;
  descriptionAr: string;
  descriptionI18n?: I18nJson;
  image?: string;
  objectPosition?: string;
  sortOrder?: number;
};

type ActionState = { success?: boolean; error?: string } | undefined;

const POSITION_OPTIONS = [
  { value: "center", label: "Center" },
  { value: "top", label: "Top" },
  { value: "bottom", label: "Bottom" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
  { value: "top left", label: "Top Left" },
  { value: "top right", label: "Top Right" },
  { value: "bottom left", label: "Bottom Left" },
  { value: "bottom right", label: "Bottom Right" },
];

export default function SliderForm({
  initial,
  action,
  submitLabel,
}: {
  initial?: Partial<SliderFormValues>;
  action: (prevState: ActionState, form: FormData) => Promise<ActionState>;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [objectPosition, setObjectPosition] = useState(initial?.objectPosition ?? "center");

  return (
    <form action={formAction} className={styles.form}>
      {state?.error && <div className={styles.errorBanner}>{state.error}</div>}
      {state?.success && <div className={styles.card}>Saved.</div>}

      {/* Live position preview using current image */}
      {initial?.image && (
        <div style={{ marginBottom: 16 }}>
          <label className={styles.label}>Position Preview</label>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 220,
              borderRadius: 8,
              overflow: "hidden",
              background: "#111",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={initial.image}
              alt="Current slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition,
                transition: "object-position 0.3s ease",
              }}
            />
          </div>
        </div>
      )}

      <div className={styles.field}>
        <label className={styles.label}>Image Position</label>
        <select
          name="objectPosition"
          value={objectPosition}
          onChange={(e) => setObjectPosition(e.target.value)}
          className={styles.input}
        >
          {POSITION_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <p style={{ fontSize: 12, color: "var(--muted, #888)", marginTop: 4 }}>
          Controls which part of the image is visible in the hero.
        </p>
      </div>

      <ImageField
        label="Image"
        currentImage={initial?.image}
        required={!initial?.image}
      />

      <I18nField
        name="title"
        label="Title"
        initial={{ en: initial?.titleEn, ar: initial?.titleAr, ...initial?.titleI18n }}
      />

      <I18nField
        name="description"
        label="Description"
        multiline
        initial={{ en: initial?.descriptionEn, ar: initial?.descriptionAr, ...initial?.descriptionI18n }}
      />

      <div className={styles.field}>
        <label className={styles.label}>Sort Order</label>
        <input
          type="number"
          name="sortOrder"
          defaultValue={initial?.sortOrder ?? 0}
          className={styles.input}
          min={0}
          step={1}
        />
        <p style={{ fontSize: 12, color: "var(--muted, #888)", marginTop: 4 }}>
          Lower number = appears earlier in the carousel.
        </p>
      </div>

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
