import Link from "next/link";
import { listAllTraps } from "@/lib/services/adminTraps";
import TripReorderList from "@/components/admin/trip-reorder-list";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminTripsPage() {
  const traps = await listAllTraps();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Trips</h1>
        <Link href="/admin/trips/new" className={styles.primaryBtn}>
          + New Trip
        </Link>
      </div>

      <div className={styles.card}>
        {traps.length === 0 ? (
          <p className={styles.emptyState}>No trips yet.</p>
        ) : (
          <TripReorderList trips={traps} />
        )}
      </div>
    </div>
  );
}
