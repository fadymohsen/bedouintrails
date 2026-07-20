"use client";

import { useActionState } from "react";
import I18nField from "./i18n-field";
import styles from "./admin.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type I18nJson = Record<string, string> | any;

export type TrapFormValues = {
  nameEn: string;
  nameAr: string;
  nameI18n?: I18nJson;
  interfaceFromEn: string;
  interfaceFromAr: string;
  interfaceFromI18n?: I18nJson;
  interfaceToEn: string;
  interfaceToAr: string;
  interfaceToI18n?: I18nJson;
  descriptionEn: string;
  descriptionAr: string;
  descriptionI18n?: I18nJson;
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

      <I18nField
        name="name"
        label="Name"
        initial={{ en: initial?.nameEn, ar: initial?.nameAr, ...initial?.nameI18n }}
      />

      <I18nField
        name="interfaceFrom"
        label="From"
        initial={{ en: initial?.interfaceFromEn, ar: initial?.interfaceFromAr, ...initial?.interfaceFromI18n }}
      />

      <I18nField
        name="interfaceTo"
        label="To"
        initial={{ en: initial?.interfaceToEn, ar: initial?.interfaceToAr, ...initial?.interfaceToI18n }}
      />

      <I18nField
        name="description"
        label="Description"
        multiline
        initial={{ en: initial?.descriptionEn, ar: initial?.descriptionAr, ...initial?.descriptionI18n }}
      />

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
