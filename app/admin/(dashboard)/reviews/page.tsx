import { listReviews, type ReviewFilter } from "@/lib/services/adminReviews";
import ReviewActions from "@/components/admin/review-actions";
import styles from "@/components/admin/admin.module.scss";

const FILTERS: ReviewFilter[] = ["all", "pending", "approved"];

export default async function AdminReviewsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const filter: ReviewFilter = FILTERS.includes(status as ReviewFilter) ? (status as ReviewFilter) : "pending";
  const reviews = await listReviews(filter);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Reviews</h1>
        <form style={{ display: "flex", gap: 8 }}>
          <select name="status" defaultValue={filter} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e5e5e5" }}>
            <option value="pending">Pending approval</option>
            <option value="approved">Approved</option>
            <option value="all">All</option>
          </select>
          <button type="submit" className={styles.secondaryBtn}>
            Filter
          </button>
        </form>
      </div>

      <div className={styles.card}>
        {reviews.length === 0 ? (
          <p className={styles.emptyState}>No reviews found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Trip</th>
                <th>Reviewer</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => {
                const reviewer = review.user
                  ? `${review.user.firstName} ${review.user.lastName}`.trim()
                  : (review.guestName ?? "Guest");
                return (
                  <tr key={review.id}>
                    <td>{review.trap.nameEn}</td>
                    <td>
                      {reviewer}
                      <br />
                      <small>{review.orderId ? "Verified booking" : review.user ? "Account, no booking" : "Guest"}</small>
                    </td>
                    <td>{review.stars} / 5</td>
                    <td style={{ maxWidth: 360, whiteSpace: "pre-wrap" }}>{review.comment || "—"}</td>
                    <td>
                      <span className={`${styles.badge} ${review.isApproved ? styles.accepted : styles.pending}`}>
                        {review.isApproved ? "approved" : "pending"}
                      </span>
                    </td>
                    <td>{review.createdAt.toISOString().slice(0, 10)}</td>
                    <td>
                      <ReviewActions reviewId={review.id} isApproved={review.isApproved} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
