"use client";

import { useActionState } from "react";
import styles from "./admin.module.scss";

export type BlogFormValues = {
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  contentEn: string;
  contentAr: string;
  author: string;
  category: string;
  metaTitleEn: string;
  metaTitleAr: string;
  metaDescriptionEn: string;
  metaDescriptionAr: string;
  isPublished: boolean;
  image: string | null;
};

type ActionState = { success?: boolean; error?: string } | undefined;

export default function BlogForm({
  initial,
  action,
  submitLabel,
}: {
  initial?: Partial<BlogFormValues>;
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
          <input name="titleAr" required defaultValue={initial?.titleAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Excerpt (English)</label>
          <textarea name="excerptEn" rows={2} defaultValue={initial?.excerptEn} />
        </div>
        <div className={styles.field}>
          <label>Excerpt (Arabic)</label>
          <textarea name="excerptAr" rows={2} defaultValue={initial?.excerptAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Content (English, HTML)</label>
          <textarea name="contentEn" required rows={10} defaultValue={initial?.contentEn} />
        </div>
        <div className={styles.field}>
          <label>Content (Arabic, HTML)</label>
          <textarea name="contentAr" required rows={10} defaultValue={initial?.contentAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Author</label>
          <input name="author" defaultValue={initial?.author} />
        </div>
        <div className={styles.field}>
          <label>Category</label>
          <input name="category" defaultValue={initial?.category} />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Meta title (English)</label>
          <input name="metaTitleEn" defaultValue={initial?.metaTitleEn} />
        </div>
        <div className={styles.field}>
          <label>Meta title (Arabic)</label>
          <input name="metaTitleAr" defaultValue={initial?.metaTitleAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Meta description (English)</label>
          <input name="metaDescriptionEn" defaultValue={initial?.metaDescriptionEn} />
        </div>
        <div className={styles.field}>
          <label>Meta description (Arabic)</label>
          <input name="metaDescriptionAr" defaultValue={initial?.metaDescriptionAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.field}>
        <label>Cover image {initial && "(leave empty to keep current)"}</label>
        {initial?.image && <img src={initial.image} alt="" className={styles.imagePreview} />}
        <input type="file" name="image" accept="image/*" />
      </div>

      <div className={styles.checkboxField}>
        <input type="checkbox" name="isPublished" id="isPublished" defaultChecked={initial?.isPublished} />
        <label htmlFor="isPublished">Published</label>
      </div>

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
