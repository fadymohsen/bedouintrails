import Link from "next/link";
import { listSliders } from "@/lib/services/adminSliders";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminSlidersPage() {
  const sliders = await listSliders();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Hero Slides</h1>
        <Link href="/admin/sliders/new" className={styles.primaryBtn}>
          + New Slide
        </Link>
      </div>

      <div className={styles.card}>
        <p style={{ marginBottom: 16, fontSize: 14, color: "var(--muted, #888)" }}>
          These slides appear in the homepage hero carousel. Drag-and-drop reordering is available — use the Sort Order field on each slide to control the sequence.
        </p>

        {sliders.length === 0 ? (
          <p className={styles.emptyState}>
            No slides yet. The homepage will use the default built-in slides until you add slides here.
          </p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order</th>
                <th>Image</th>
                <th>Title (EN)</th>
                <th>Position</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sliders.map((slide) => (
                <tr key={slide.id}>
                  <td style={{ width: 60, textAlign: "center", color: "var(--muted, #888)" }}>
                    {slide.sortOrder}
                  </td>
                  <td>
                    {slide.image && (
                      <div style={{ width: 80, height: 48, borderRadius: 6, overflow: "hidden", background: "#111" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={slide.image}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: slide.objectPosition,
                          }}
                        />
                      </div>
                    )}
                  </td>
                  <td>{slide.titleEn || <em style={{ color: "var(--muted, #888)" }}>No title</em>}</td>
                  <td style={{ fontSize: 12, color: "var(--muted, #888)" }}>{slide.objectPosition}</td>
                  <td>
                    <Link href={`/admin/sliders/${slide.id}`} className={styles.linkBtn}>
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
