import { FaStar } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import styles from "./rating-card.module.scss";

export type TestimonialData = {
  id: number;
  userName: string;
  userImage: string | null;
  stars: number;
  comment: string | null;
};

export function TestimonialCard({ review }: { review: TestimonialData }) {
  const t = useTranslations();
  if (!review) return null;

  return (
    <div className={styles["testimonial-card"]}>
      <div className={styles["card-content"]}>
        <div className={styles["text-section"]}>
          <h3 className={styles["user-name"]}>{review.userName || t("anonymous_guest")}</h3>
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={styles.star} style={{ color: i < review.stars ? "#ffc107" : "#e4e5e9" }}>
                <FaStar />
              </span>
            ))}
          </div>
          <p className={styles.comment}>{review.comment || t("no_comment_available")}</p>
        </div>
        <div className={styles["avatar-wrapper"]}>
          <img
            src={review.userImage || "https://ui-avatars.com/api/?name="}
            alt={review.userName}
            className={styles["avatar-img"]}
          />
        </div>
      </div>
    </div>
  );
}
