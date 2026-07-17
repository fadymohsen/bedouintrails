import Link from "next/link";
import { listSliders } from "@/lib/services/adminSliders";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminSlidersPage() {
  const sliders = await listSliders();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Sliders</h1>
        <Link href="/admin/sliders/new" className={styles.primaryBtn}>
          + New Slider
        </Link>
      </div>

      <div className={styles.card}>
        {sliders.length === 0 ? (
          <p className={styles.emptyState}>No sliders yet.</p>
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
              {sliders.map((slider) => (
                <tr key={slider.id}>
                  <td>
                    <img className={styles.thumb} src={slider.image} alt="" />
                  </td>
                  <td>{slider.titleEn}</td>
                  <td>
                    <Link href={`/admin/sliders/${slider.id}`} className={styles.linkBtn}>
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
