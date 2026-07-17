"use client";

import { useActionState } from "react";
import styles from "./admin.module.scss";

export type CommonQuestionFormValues = {
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
};

type ActionState = { success?: boolean; error?: string } | undefined;

export default function CommonQuestionForm({
  initial,
  action,
  submitLabel,
}: {
  initial?: Partial<CommonQuestionFormValues>;
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
          <label>Question (English)</label>
          <input name="questionEn" required defaultValue={initial?.questionEn} />
        </div>
        <div className={styles.field}>
          <label>Question (Arabic)</label>
          <input name="questionAr" defaultValue={initial?.questionAr} dir="rtl" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label>Answer (English)</label>
          <textarea name="answerEn" rows={4} required defaultValue={initial?.answerEn} />
        </div>
        <div className={styles.field}>
          <label>Answer (Arabic)</label>
          <textarea name="answerAr" rows={4} defaultValue={initial?.answerAr} dir="rtl" />
        </div>
      </div>

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
