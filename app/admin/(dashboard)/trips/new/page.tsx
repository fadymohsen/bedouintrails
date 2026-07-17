import TrapForm from "@/components/admin/trap-form";
import { createTrapAction } from "../actions";
import styles from "@/components/admin/admin.module.scss";

export default function NewTripPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>New Trip</h1>
      </div>
      <div className={styles.card}>
        <TrapForm action={createTrapAction} submitLabel="Create Trip" />
      </div>
    </div>
  );
}
