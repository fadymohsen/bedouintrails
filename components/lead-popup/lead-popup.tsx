"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { apiPost, ApiClientError } from "@/lib/api-client";
import styles from "./lead-popup.module.scss";

const DISMISS_KEY = "leadPopupDismissed";
const TIMER_MS = 10_000;
const SCROLL_THRESHOLD = 0.5;

type FormErrors = Partial<Record<"name" | "phone", string>>;

export default function LeadPopup() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const shownRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    function triggerOnce() {
      if (shownRef.current) return;
      shownRef.current = true;
      setVisible(true);
    }

    const timer = setTimeout(triggerOnce, TIMER_MS);

    function handleScroll() {
      const scrolled = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && scrolled / scrollable >= SCROLL_THRESHOLD) {
        triggerOnce();
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validateForm(): boolean {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t("first_name_required");
    if (!formData.phone.trim()) newErrors.phone = t("phone_required");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiPost("/api/leads", formData);
      setSubmitStatus({ type: "success", message: t("popup_success") });
      setFormData({ name: "", phone: "" });
      setTimeout(dismiss, 2000);
    } catch (err) {
      setSubmitStatus({ type: "error", message: err instanceof ApiClientError ? err.message : t("network_error") });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={dismiss}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={dismiss} aria-label={t("close")}>
          &times;
        </button>

        <h2 className={styles.headline}>{t("popup_headline")}</h2>
        <p className={styles.body}>{t("popup_body")}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formField}>
            <label>{t("popup_name_label")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("popup_name_label")}
              className={errors.name ? styles.error : ""}
            />
            {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
          </div>

          <div className={styles.formField}>
            <label>{t("popup_phone_label")}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("popup_phone_label")}
              className={errors.phone ? styles.error : ""}
            />
            {errors.phone && <span className={styles.fieldError}>{errors.phone}</span>}
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? `${t("submit")}...` : t("popup_submit")}
          </button>
        </form>

        {submitStatus && (
          <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
            <p>{submitStatus.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
