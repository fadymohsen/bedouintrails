"use client";

import { useActionState } from "react";
import styles from "./admin.module.scss";

export type AboutUsFormValues = {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image?: string | null;
};

type ActionState = { success?: boolean; error?: string } | undefined;

export default function AboutUsForm({
  initial,
  action,
  submitLabel,
}: {
  initial?: Partial<AboutUsFormValues>;
  action: (prevState: ActionState, form: FormData) => Promise<ActionState>;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className={styles.form}>
      {state?.error && <div className={styles.errorBanner}>{state.error}</div>}
      {state?.success && <div className={styles.card}>Saved.</div>}

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Title (English)</label>
          <input name="titleEn" required defaultValue={initial?.titleEn} />
        </div>
        <div className={styles.field}>
          <label>Title (Arabic)</label>
          <input name="titleAr" defaultValue={initial?.titleAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Description (English)</label>
          <textarea name="descriptionEn" rows={4} required defaultValue={initial?.descriptionEn} />
        </div>
        <div className={styles.field}>
          <label>Description (Arabic)</label>
          <textarea name="descriptionAr" rows={4} defaultValue={initial?.descriptionAr} dir="rtl" />
        </div>
      </div>

      {initial?.image && (
        <div className={styles.field}>
          <label>Current image</label>
          <img src={initial.image} alt="" className={styles.imagePreview} />
        </div>
      )}

      <div className={styles.field}>
        <label>Image {initial ? "(leave empty to keep current)" : ""}</label>
        <input type="file" name="image" accept="image/*" />
      </div>

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
