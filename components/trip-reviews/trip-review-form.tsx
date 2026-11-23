"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaStar } from "react-icons/fa6";
import { Link, useRouter } from "@/lib/i18n/navigation";
import { apiPost, ApiClientError } from "@/lib/api-client";
import sweetAlert from "@/lib/sweet-alert";
import styles from "./trip-reviews.module.scss";

export type TripReviewFormState =
  | { state: "login" }
  | { state: "no_booking" }
  | { state: "already_reviewed" }
  | { state: "can_review"; orderId: number };

export default function TripReviewForm(props: TripReviewFormState) {
  const t = useTranslations();
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (props.state === "login") {
    return (
      <div className={styles.notice}>
        <p>{t("review_login_prompt")}</p>
        <Link href="/auth" className={styles.submit}>
          {t("login")}
        </Link>
      </div>
    );
  }
  if (props.state === "no_booking") {
    return (
      <div className={styles.notice}>
        <p>{t("review_booking_required")}</p>
      </div>
    );
  }
  if (props.state === "already_reviewed") {
    return (
      <div className={styles.notice}>
        <p>{t("review_already_submitted")}</p>
      </div>
    );
  }

  const orderId = props.orderId;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) return sweetAlert.warning(t("please_select_star_rating"));
    setSubmitting(true);
    try {
      await apiPost("/api/reviews", { orderId, stars: rating, comment });
      sweetAlert.success(t("rating_added_successfully"));
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
