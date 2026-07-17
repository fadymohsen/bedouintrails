"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";
import styles from "./contact.module.scss";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formSuccess}>
        <p>{t("contact_form_success")}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <input
          type="text"
          placeholder={t("full_name")}
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          type="email"
          placeholder={t("email_address")}
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
      </div>
      <input
        type="tel"
        placeholder={t("whatsapp_number")}
        value={form.phone}
        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
      />
      <textarea
        placeholder={t("your_message")}
        required
        rows={6}
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
      />
      <button type="submit" className={styles.pillButton} disabled={status === "loading"}>
        {status === "loading" ? t("sending") : t("send_message")} <FaArrowRight size={13} />
      </button>
      {status === "error" && <p className={styles.formError}>{t("contact_form_error")}</p>}
    </form>
  );
}
