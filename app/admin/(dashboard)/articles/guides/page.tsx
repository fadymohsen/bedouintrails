import Link from "next/link";
import { listTravelGuides } from "@/lib/services/adminTravelGuides";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminTravelGuidesPage() {
  const guides = await listTravelGuides();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Travel Guides</h1>
        <Link href="/admin/articles" className={styles.linkBtn}>
          ← Back to Articles
        </Link>
      </div>

      <div className={styles.card}>
        {guides.length === 0 ? (
          <p className={styles.emptyState}>
            No travel guides found. Run the seed script to populate them.
          </p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Path</th>
                <th>Key</th>
                <th>Order</th>
                <th>Visible</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {guides.map((guide) => (
                <tr key={guide.id}>
                  <td>
                    {guide.image && (
                      <img className={styles.thumb} src={guide.image} alt="" />
                    )}
                  </td>
                  <td>{guide.path}</td>
                  <td>{guide.translationKey}</td>
                  <td>{guide.sortOrder}</td>
                  <td>{guide.visible ? "✓" : "—"}</td>
                  <td>
                    <Link
                      href={`/admin/articles/guides/${guide.id}`}
                      className={styles.linkBtn}
                    >
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
