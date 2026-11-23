"use client";

import { useTransition } from "react";
import { setReviewApprovalAction, deleteReviewAction } from "@/app/admin/(dashboard)/reviews/actions";
import styles from "./admin.module.scss";

export default function ReviewActions({ reviewId, isApproved }: { reviewId: number; isApproved: boolean }) {
  const [pending, startTransition] = useTransition();

  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
      <button
        className={styles.secondaryBtn}
        disabled={pending}
        onClick={() => startTransition(() => setReviewApprovalAction(reviewId, !isApproved))}
      >
        {isApproved ? "Hide" : "Approve"}
      </button>
      <button
        className={styles.dangerBtn}
        disabled={pending}
        onClick={() => {
          if (window.confirm("Delete this review permanently?")) {
            startTransition(() => deleteReviewAction(reviewId));
          }
        }}
      >
        Delete
      </button>
    </div>
  );
}
