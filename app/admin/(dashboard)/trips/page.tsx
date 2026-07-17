import Link from "next/link";
import { listAllTraps } from "@/lib/services/adminTraps";
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
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Duration</th>
                <th>Bookings</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {traps.map((trap) => (
                <tr key={trap.id}>
                  <td>{trap.galleries[0] && <img className={styles.thumb} src={trap.galleries[0].image} alt="" />}</td>
                  <td>{trap.nameEn}</td>
                  <td>{trap.duration} days</td>
                  <td>{trap.countPeople}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[trap.status]}`}>{trap.status}</span>
                  </td>
                  <td>
                    <Link href={`/admin/trips/${trap.id}`} className={styles.linkBtn}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
