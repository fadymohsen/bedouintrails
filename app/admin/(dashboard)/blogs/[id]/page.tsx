import { notFound } from "next/navigation";
import { getBlogForAdmin } from "@/lib/services/adminBlogs";
import { NotFoundError } from "@/lib/services/errors";
import { prisma } from "@/lib/prisma";
import { updateBlogAction, deleteBlogAction, saveBlogRelatedTripsAction } from "../actions";
import BlogForm from "@/components/admin/blog-form";
import BlogFaqsManager from "@/components/admin/blog-faqs-manager";
import RelatedLinksManager from "@/components/admin/related-links-manager";
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

  const [allTrips, currentRelatedTrips] = await Promise.all([
    prisma.trap.findMany({
      where: { status: "active" },
      select: { id: true, nameEn: true },
      orderBy: { nameEn: "asc" },
    }),
    prisma.blogRelatedTrap.findMany({
      where: { blogId },
      orderBy: { sortOrder: "asc" },
      select: { trapId: true },
    }),
  ]);

  const boundUpdate = updateBlogAction.bind(null, blogId);
  const boundDelete = deleteBlogAction.bind(null, blogId);
  const boundSaveRelatedTrips = saveBlogRelatedTripsAction.bind(null, blogId);

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
          key={blogId}
          action={boundUpdate}
          submitLabel="Save Changes"
          initial={{
            titleEn: blog.titleEn,
            titleAr: blog.titleAr,
            titleI18n: blog.titleI18n as Record<string, string> | null,
            excerptEn: blog.excerptEn ?? "",
            excerptAr: blog.excerptAr ?? "",
            excerptI18n: blog.excerptI18n as Record<string, string> | null,
            contentEn: blog.contentEn,
            contentAr: blog.contentAr,
            contentI18n: blog.contentI18n as Record<string, string> | null,
            author: blog.author,
            category: blog.category ?? "",
            metaTitleEn: blog.metaTitleEn ?? "",
            metaTitleAr: blog.metaTitleAr ?? "",
            metaTitleI18n: blog.metaTitleI18n as Record<string, string> | null,
            metaDescriptionEn: blog.metaDescriptionEn ?? "",
            metaDescriptionAr: blog.metaDescriptionAr ?? "",
            metaDescriptionI18n: blog.metaDescriptionI18n as Record<string, string> | null,
            isPublished: blog.isPublished,
            image: blog.image,
          }}
        />
      </div>

      <h2 style={{ fontSize: "1.1rem" }}>FAQs</h2>
      <BlogFaqsManager blogId={blogId} faqs={blog.faqs} />

      <div className={styles.card} style={{ marginTop: 24 }}>
        <RelatedLinksManager
          title="Related Trips"
          allOptions={allTrips.map((t) => ({ id: t.id, label: t.nameEn }))}
          selectedIds={currentRelatedTrips.map((r) => r.trapId)}
          onSave={boundSaveRelatedTrips}
        />
      </div>
    </div>
  );
}
