import AboutUsForm from "@/components/admin/about-us-form";
import { createAboutUsAction } from "../actions";
import styles from "@/components/admin/admin.module.scss";

export default function NewAboutUsPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>New About Us Entry</h1>
      </div>
      <div className={styles.card}>
        <AboutUsForm action={createAboutUsAction} submitLabel="Create Entry" />
      </div>
    </div>
  );
}
