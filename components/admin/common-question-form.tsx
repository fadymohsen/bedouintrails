"use client";

import { useActionState } from "react";
import I18nField from "./i18n-field";
import styles from "./admin.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type I18nJson = Record<string, string> | any;

export type CommonQuestionFormValues = {
  questionEn: string;
  questionAr: string;
  questionI18n?: I18nJson;
  answerEn: string;
  answerAr: string;
  answerI18n?: I18nJson;
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

      <I18nField
        name="question"
        label="Question"
        initial={{ en: initial?.questionEn, ar: initial?.questionAr, ...initial?.questionI18n }}
      />

      <I18nField
        name="answer"
        label="Answer"
        multiline
        initial={{ en: initial?.answerEn, ar: initial?.answerAr, ...initial?.answerI18n }}
      />

      <button type="submit" className={styles.primaryBtn} disabled={pending}>
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
