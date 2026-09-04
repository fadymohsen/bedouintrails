"use client";

import { useActionState } from "react";
import { ImageField } from "./media-picker";
import styles from "./admin.module.scss";

export type TravelGuideFormValues = {
  path: string;
  translationKey: string;
  image?: string | null;
  heroImage?: string | null;
  heroPosition?: string | null;
  sortOrder: number;
  visible: boolean;
};

type ActionState = { success?: boolean; error?: string } | undefined;

export default function TravelGuideForm({
  initial,
  action,
}: {
  initial: TravelGuideFormValues;
  action: (prevState: ActionState, form: FormData) => Promise<ActionState>;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className={styles.form}>
      {state?.error && <div className={styles.errorBanner}>{state.error}</div>}
      {state?.success && <div className={styles.card}>Saved.</div>}

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Path</label>
          <input value={initial.path} disabled />
        </div>
        <div className={styles.field}>
          <label>Translation Key</label>
          <input value={initial.translationKey} disabled />
        </div>
      </div>

      <ImageField
        label="Card Image (articles listing)"
        fileFieldName="image"
        urlFieldName="imageUrl"
        currentImage={initial.image}
      />

      <ImageField
        label="Hero Image (guide page banner)"
        fileFieldName="heroImage"
        urlFieldName="heroImageUrl"
        currentImage={initial.heroImage}
      />

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Hero Position (CSS object-position)</label>
          <input name="heroPosition" defaultValue={initial.heroPosition ?? "center"} placeholder="e.g. center 70%" />
        </div>
        <div className={styles.field}>
          <label>Sort Order</label>
          <input name="sortOrder" type="number" defaultValue={initial.sortOrder} />
        </div>
      </div>

      <div className={styles.field}>
        <label>
          <input name="visible" type="checkbox" defaultChecked={initial.visible} />{" "}
          Visible on articles page
        </label>
      </div>

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
