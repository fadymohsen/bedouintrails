import Link from "next/link";
import { listArticles } from "@/lib/services/adminArticles";
import { listTravelGuides } from "@/lib/services/adminTravelGuides";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminArticlesPage() {
  const [articles, guides] = await Promise.all([listArticles(), listTravelGuides()]);

  return (
    <div>
      {/* ── Articles ── */}
      <div className={styles.header}>
        <h1 className={styles.title}>Articles</h1>
        <Link href="/admin/articles/new" className={styles.primaryBtn}>
          + New Article
        </Link>
      </div>

      <div className={styles.card}>
        {articles.length === 0 ? (
          <p className={styles.emptyState}>No articles yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Slug</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.image && <img className={styles.thumb} src={article.image} alt="" />}</td>
                  <td>{article.titleEn}</td>
                  <td>{article.slug}</td>
                  <td>
                    <Link href={`/admin/articles/${article.id}`} className={styles.linkBtn}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Travel Guides ── */}
      <div className={styles.header} style={{ marginTop: "48px" }}>
        <h1 className={styles.title}>Travel Guides</h1>
      </div>

      <div className={styles.card}>
        {guides.length === 0 ? (
          <p className={styles.emptyState}>No travel guides found.</p>
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
                    {guide.image && <img className={styles.thumb} src={guide.image} alt="" />}
                  </td>
                  <td>{guide.path}</td>
                  <td>{guide.translationKey}</td>
                  <td>{guide.sortOrder}</td>
                  <td>{guide.visible ? "✓" : "—"}</td>
                  <td>
                    <Link href={`/admin/articles/guides/${guide.id}`} className={styles.linkBtn}>
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
