"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "@/lib/i18n/navigation";
import { apiPost, ApiClientError } from "@/lib/api-client";
import sweetAlert from "@/lib/sweet-alert";
import styles from "./trip-reviews.module.scss";

export default function TripReviewForm({
  trapId,
  orderId,
  loggedIn,
  alreadyReviewed,
}: {
  trapId: number;
  orderId: number | null;
  loggedIn: boolean;
  alreadyReviewed: boolean;
}) {
  const t = useTranslations();
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  if (alreadyReviewed || sent) {
    return (
      <div className={styles.notice}>
        <p>{t("review_already_submitted")}</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) return sweetAlert.warning(t("please_select_star_rating"));
    setSubmitting(true);
    try {
      const res = await apiPost<{ review: { isApproved: boolean } }>("/api/reviews", {
        ...(orderId !== null ? { orderId } : { trapId }),
        stars: rating,
        comment,
        ...(loggedIn ? {} : { guestName: name }),
        website,
      });
      sweetAlert.success(res.review.isApproved ? t("rating_added_successfully") : t("review_pending_approval"));
      setSent(true);
      router.refresh();
    } catch (err) {
      sweetAlert.warning(err instanceof ApiClientError ? err.message : t("rating_submit_failed"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>{t("write_a_review")}</h3>
      <div className={styles.stars} onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={styles.starBtn}
            aria-label={`${n} / 5`}
            onClick={() => setRating(n)}
            onMouseEnter={() => setHover(n)}
          >
            <FaStar size={32} color={n <= (hover || rating) ? "#ffc107" : "#e4e5e9"} />
          </button>
        ))}
      </div>
      {!loggedIn && (
        <input
          className={styles.input}
          type="text"
          placeholder={t("review_your_name")}
          value={name}
          maxLength={60}
          required
          onChange={(e) => setName(e.target.value)}
        />
      )}
      {/* Honeypot: hidden from people, tempting to bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className={styles.honeypot}
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        placeholder={t("write_your_comment")}
        value={comment}
        maxLength={2000}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className={styles.submit} disabled={submitting}>
        {t("submit_rating")}
      </button>
    </form>
  );
}
