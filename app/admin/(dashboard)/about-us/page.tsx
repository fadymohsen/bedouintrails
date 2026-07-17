import Link from "next/link";
import { listAboutUs } from "@/lib/services/adminAboutUs";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminAboutUsPage() {
  const entries = await listAboutUs();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
        <Link href="/admin/about-us/new" className={styles.primaryBtn}>
          + New Entry
        </Link>
      </div>

      <div className={styles.card}>
        {entries.length === 0 ? (
          <p className={styles.emptyState}>No about us entries yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.image && <img className={styles.thumb} src={entry.image} alt="" />}</td>
                  <td>{entry.titleEn}</td>
                  <td>
                    <Link href={`/admin/about-us/${entry.id}`} className={styles.linkBtn}>
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
