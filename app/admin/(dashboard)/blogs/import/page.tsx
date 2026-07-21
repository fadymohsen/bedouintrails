import BlogImportForm from "@/components/admin/blog-import-form";
import styles from "@/components/admin/admin.module.scss";

export default function ImportBlogPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Import Blog Post from Markdown</h1>
      </div>
      <div className={styles.card}>
        <BlogImportForm />
      </div>
    </div>
  );
}
