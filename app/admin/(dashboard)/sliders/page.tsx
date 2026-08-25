import Link from "next/link";
import { listSliders } from "@/lib/services/adminSliders";
import { seedDefaultSlidersAction } from "./actions";
import SliderListDrag from "@/components/admin/slider-list-drag";
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
          These slides appear in the homepage hero carousel. Drag rows to reorder them.
        </p>

        {sliders.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <p className={styles.emptyState} style={{ marginBottom: 20 }}>
              No slides yet. The homepage currently shows the 7 built-in default slides.
            </p>
            <form action={seedDefaultSlidersAction}>
              <button type="submit" className={styles.primaryBtn}>
                Load Default Slides into Dashboard
              </button>
            </form>
          </div>
        ) : (
          <SliderListDrag initialSliders={sliders} />
        )}
      </div>
    </div>
  );
}
