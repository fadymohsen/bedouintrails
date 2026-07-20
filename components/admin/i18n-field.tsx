"use client";

import { useState } from "react";
import styles from "./admin.module.scss";

const OPTIONAL_LANGS = [
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
  { code: "pt", label: "PT" },
  { code: "zh", label: "ZH" },
  { code: "nl", label: "NL" },
] as const;

const LANGS = [
  { code: "en", label: "EN", required: true, rtl: false },
  { code: "ar", label: "AR", required: true, rtl: true },
  ...OPTIONAL_LANGS.map((l) => ({ ...l, required: false, rtl: false })),
] as const;

export type I18nValues = Partial<Record<string, string>>;

export default function I18nField({
  name,
  label,
  initial,
  multiline,
  rows = 4,
}: {
  /** Base field name — produces `${name}En`, `${name}Ar`, and `${name}I18n` inputs. */
  name: string;
  label: string;
  initial?: I18nValues;
  multiline?: boolean;
  rows?: number;
}) {
  const [values, setValues] = useState<I18nValues>(() => {
    const initialValues: I18nValues = {};
    for (const l of LANGS) initialValues[l.code] = initial?.[l.code] ?? "";
    return initialValues;
  });
  const [active, setActive] = useState<string>("en");

  const i18nJson = JSON.stringify(
    Object.fromEntries(
      OPTIONAL_LANGS.map((l) => [l.code, values[l.code]?.trim() ?? ""]).filter(([, v]) => v)
    )
  );

  return (
    <div className={styles.i18nField}>
      <label className={styles.i18nFieldLabel}>{label}</label>

      <div className={styles.langTabs} role="tablist">
        {LANGS.map((l) => {
          const filled = !!values[l.code]?.trim();
          return (
            <button
              key={l.code}
              type="button"
              role="tab"
              aria-selected={active === l.code}
              className={`${styles.langTab} ${active === l.code ? styles.langTabActive : ""} ${
                filled ? styles.langTabFilled : ""
              }`}
              onClick={() => setActive(l.code)}
            >
              {l.label}
              {l.required && <span className={styles.langTabRequired}>*</span>}
            </button>
          );
        })}
      </div>

      {LANGS.map((l) => (
        <div key={l.code} className={styles.langPanel} hidden={active !== l.code}>
          {multiline ? (
            <textarea
              dir={l.rtl ? "rtl" : "ltr"}
              rows={rows}
              value={values[l.code] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [l.code]: e.target.value }))}
              placeholder={l.required ? `${label} (${l.label}) — required` : `${label} (${l.label}) — optional`}
            />
          ) : (
            <input
              type="text"
              dir={l.rtl ? "rtl" : "ltr"}
              value={values[l.code] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [l.code]: e.target.value }))}
              placeholder={l.required ? `${label} (${l.label}) — required` : `${label} (${l.label}) — optional`}
            />
          )}
        </div>
      ))}

      <input type="hidden" name={`${name}En`} value={values.en ?? ""} />
      <input type="hidden" name={`${name}Ar`} value={values.ar ?? ""} />
      <input type="hidden" name={`${name}I18n`} value={i18nJson} />
    </div>
  );
}
