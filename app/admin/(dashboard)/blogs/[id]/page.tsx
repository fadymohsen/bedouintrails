import { notFound } from "next/navigation";
import { getBlogForAdmin } from "@/lib/services/adminBlogs";
import { NotFoundError } from "@/lib/services/errors";
import { updateBlogAction, deleteBlogAction } from "../actions";
import BlogForm from "@/components/admin/blog-form";
import BlogFaqsManager from "@/components/admin/blog-faqs-manager";
import styles from "@/components/admin/admin.module.scss";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogId = Number(id);

  let blog;
  try {
    blog = await getBlogForAdmin(blogId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const boundUpdate = updateBlogAction.bind(null, blogId);
  const boundDelete = deleteBlogAction.bind(null, blogId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>{blog.titleEn}</h1>
        <form action={boundDelete}>
          <button type="submit" className={styles.dangerBtn}>
            Delete Post
          </button>
        </form>
      </div>

      <div className={styles.card}>
        <BlogForm
          action={boundUpdate}
          submitLabel="Save Changes"
          initial={{
            titleEn: blog.titleEn,
            titleAr: blog.titleAr,
            excerptEn: blog.excerptEn ?? "",
            excerptAr: blog.excerptAr ?? "",
            contentEn: blog.contentEn,
            contentAr: blog.contentAr,
            author: blog.author,
            category: blog.category ?? "",
            metaTitleEn: blog.metaTitleEn ?? "",
            metaTitleAr: blog.metaTitleAr ?? "",
            metaDescriptionEn: blog.metaDescriptionEn ?? "",
            metaDescriptionAr: blog.metaDescriptionAr ?? "",
            isPublished: blog.isPublished,
            image: blog.image,
          }}
        />
      </div>

      <h2 style={{ fontSize: "1.1rem" }}>FAQs</h2>
      <BlogFaqsManager blogId={blogId} faqs={blog.faqs} />
    </div>
  );
}
