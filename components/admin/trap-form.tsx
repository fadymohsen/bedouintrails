"use client";

import { useActionState } from "react";
import styles from "./admin.module.scss";

export type TrapFormValues = {
  nameEn: string;
  nameAr: string;
  interfaceFromEn: string;
  interfaceFromAr: string;
  interfaceToEn: string;
  interfaceToAr: string;
  descriptionEn: string;
  descriptionAr: string;
  duration: number;
  status: "active" | "inactive";
  metaTitle: string;
  metaDescription: string;
};

type ActionState = { success?: boolean; error?: string } | undefined;

export default function TrapForm({
  initial,
  action,
  submitLabel,
}: {
  initial?: Partial<TrapFormValues>;
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
          <label>Name (English)</label>
          <input name="nameEn" required defaultValue={initial?.nameEn} />
        </div>
        <div className={styles.field}>
          <label>Name (Arabic)</label>
          <input name="nameAr" defaultValue={initial?.nameAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>From (English)</label>
          <input name="interfaceFromEn" required defaultValue={initial?.interfaceFromEn} />
        </div>
        <div className={styles.field}>
          <label>From (Arabic)</label>
          <input name="interfaceFromAr" defaultValue={initial?.interfaceFromAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>To (English)</label>
          <input name="interfaceToEn" required defaultValue={initial?.interfaceToEn} />
        </div>
        <div className={styles.field}>
          <label>To (Arabic)</label>
          <input name="interfaceToAr" defaultValue={initial?.interfaceToAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Description (English)</label>
          <textarea name="descriptionEn" rows={4} defaultValue={initial?.descriptionEn} />
        </div>
        <div className={styles.field}>
          <label>Description (Arabic)</label>
          <textarea name="descriptionAr" rows={4} defaultValue={initial?.descriptionAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Duration (days)</label>
          <input name="duration" type="number" min={0} defaultValue={initial?.duration ?? 0} />
        </div>
        <div className={styles.field}>
          <label>Status</label>
          <select name="status" defaultValue={initial?.status ?? "active"}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Meta title</label>
          <input name="metaTitle" defaultValue={initial?.metaTitle} />
        </div>
        <div className={styles.field}>
          <label>Meta description</label>
          <input name="metaDescription" defaultValue={initial?.metaDescription} />
        </div>
      </div>

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
