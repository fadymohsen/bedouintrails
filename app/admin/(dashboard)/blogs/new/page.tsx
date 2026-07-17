import BlogForm from "@/components/admin/blog-form";
import { createBlogAction } from "../actions";
import styles from "@/components/admin/admin.module.scss";

export default function NewBlogPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>New Blog Post</h1>
      </div>
      <div className={styles.card}>
        <BlogForm action={createBlogAction} submitLabel="Create Post" />
      </div>
    </div>
  );
}
