import { notFound } from "next/navigation";
import { getArticle } from "@/lib/services/adminArticles";
import { NotFoundError } from "@/lib/services/errors";
import { updateArticleAction, deleteArticleAction } from "../actions";
import ArticleForm from "@/components/admin/article-form";
import styles from "@/components/admin/admin.module.scss";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const articleId = Number(id);

  let article;
  try {
    article = await getArticle(articleId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const boundUpdate = updateArticleAction.bind(null, articleId);
  const boundDelete = deleteArticleAction.bind(null, articleId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>{article.titleEn}</h1>
        <form action={boundDelete}>
          <button type="submit" className={styles.dangerBtn}>
            Delete Article
          </button>
        </form>
      </div>
      <div className={styles.card}>
        <ArticleForm
          key={articleId}
          initial={{
            titleEn: article.titleEn,
            titleAr: article.titleAr ?? "",
            titleI18n: article.titleI18n ?? undefined,
            descriptionEn: article.descriptionEn,
            descriptionAr: article.descriptionAr ?? "",
            descriptionI18n: article.descriptionI18n ?? undefined,
            metaTitle: article.metaTitle ?? "",
            metaDescription: article.metaDescription ?? "",
            image: article.image,
          }}
          action={boundUpdate}
          submitLabel="Save Changes"
        />
      </div>
    </div>
  );
}
