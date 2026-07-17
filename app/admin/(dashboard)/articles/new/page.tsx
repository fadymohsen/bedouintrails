import ArticleForm from "@/components/admin/article-form";
import { createArticleAction } from "../actions";
import styles from "@/components/admin/admin.module.scss";

export default function NewArticlePage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>New Article</h1>
      </div>
      <div className={styles.card}>
        <ArticleForm action={createArticleAction} submitLabel="Create Article" />
      </div>
    </div>
  );
}
