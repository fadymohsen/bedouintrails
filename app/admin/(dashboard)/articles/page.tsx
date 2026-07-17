import Link from "next/link";
import { listArticles } from "@/lib/services/adminArticles";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminArticlesPage() {
  const articles = await listArticles();

  return (
    <div>
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
    </div>
  );
}
