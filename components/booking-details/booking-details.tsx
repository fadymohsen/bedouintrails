import { useTranslations } from "next-intl";
import { FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";
import styles from "./booking-details.module.scss";

export type BookingDetailsData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numberOfAdults: number;
  numberOfChildren: number;
  startDate: string;
  endDate: string;
  description: string | null;
};

export default function BookingDetails({ data }: { data: BookingDetailsData }) {
  const t = useTranslations();

  return (
    <div className={styles["booking-details"]}>
      <div className={styles.leftP}>
        <img src="/img/camel-ride1.webp" alt="Camel riding experience in the desert" loading="lazy" />
      </div>
      <div className={styles.rightP}>
        <div className={styles["field-row"]}>
          <div className={styles["form-field"]}>
            <label>{t("first_name")}</label>
            <input disabled type="text" value={data.firstName} placeholder={t("first_name")} />
          </div>
          <div className={styles["form-field"]}>
            <label>{t("last_name")}</label>
            <input disabled type="text" value={data.lastName} placeholder={t("last_name")} />
          </div>
        </div>

        <div className={styles["form-field"]}>
          <label>{t("email")}</label>
          <div className={`${styles["input-with-icon"]}`}>
            <FaEnvelope className={styles["input-icon"]} size={20} />
            <input disabled type="email" value={data.email} placeholder={t("email")} />
          </div>
        </div>

        <div className={styles["form-field"]}>
          <label>{t("phone")}</label>
          <div className={styles["input-with-icon"]}>
            <FaPhone className={styles["input-icon"]} size={20} />
            <input disabled type="tel" value={data.phone} placeholder={t("phone")} />
          </div>
        </div>

        <div className={styles["form-row-split"]}>
          <div className={styles["form-field"]}>
            <label>{t("number_of_guests")}</label>
            <input disabled type="number" value={data.numberOfAdults} min={1} max={20} />
          </div>
          <div className={styles["form-field"]}>
            <label>{t("children")}</label>
            <input disabled type="number" value={data.numberOfChildren} min={0} max={20} />
          </div>
        </div>

        <div className={styles["form-row-split"]}>
          <div className={styles["form-field"]}>
            <label>{t("start_date")}</label>
            <div className={`${styles["input-with-icon"]} ${styles.calender}`}>
              <FaCalendarAlt className={styles["input-icon"]} size={20} />
              <input disabled type="text" value={data.startDate} />
            </div>
          </div>
          <div className={styles["form-field"]}>
            <label>{t("end_date")}</label>
            <div className={`${styles["input-with-icon"]} ${styles.calender}`}>
              <FaCalendarAlt className={styles["input-icon"]} size={20} />
              <input disabled type="text" value={data.endDate} />
            </div>
          </div>
        </div>

        <div className={styles["form-field"]}>
          <label>{t("additional_notes")}</label>
          <textarea disabled value={data.description ?? ""} rows={3} placeholder={t("additional_notes")} />
        </div>
      </div>
    </div>
  );
}
