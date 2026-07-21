import Link from "next/link";
import { listBlogs } from "@/lib/services/adminBlogs";
import styles from "@/components/admin/admin.module.scss";

export default async function AdminBlogsPage() {
  const blogs = await listBlogs();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Blogs</h1>
        <div className={styles.headerActions}>
          <Link href="/admin/blogs/import" className={styles.secondaryBtn}>
            Import from Markdown
          </Link>
          <Link href="/admin/blogs/new" className={styles.primaryBtn}>
            + New Post
          </Link>
        </div>
      </div>

      <div className={styles.card}>
        {blogs.length === 0 ? (
          <p className={styles.emptyState}>No blog posts yet.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.image && <img className={styles.thumb} src={blog.image} alt="" />}</td>
                  <td>{blog.titleEn}</td>
                  <td>
                    <span className={`${styles.badge} ${blog.isPublished ? styles.published : styles.draft}`}>
                      {blog.isPublished ? "published" : "draft"}
                    </span>
                  </td>
                  <td>
                    <Link href={`/admin/blogs/${blog.id}`} className={styles.linkBtn}>
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
