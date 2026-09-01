import { notFound } from "next/navigation";
import { getTrapForAdmin } from "@/lib/services/adminTraps";
import { NotFoundError } from "@/lib/services/errors";
import { prisma } from "@/lib/prisma";
import { updateTrapAction, deleteTrapAction, saveTripRelatedBlogsAction } from "../actions";
import TripEditTabs from "@/components/admin/trip-edit-tabs";
import RelatedLinksManager from "@/components/admin/related-links-manager";
import styles from "@/components/admin/admin.module.scss";

export default async function EditTripPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tripId = Number(id);

  let trap;
  try {
    trap = await getTrapForAdmin(tripId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const [allBlogs, currentRelatedBlogs] = await Promise.all([
    prisma.blog.findMany({
      where: { isPublished: true },
      select: { id: true, titleEn: true },
      orderBy: { titleEn: "asc" },
    }),
    prisma.trapRelatedBlog.findMany({
      where: { trapId: tripId },
      orderBy: { sortOrder: "asc" },
      select: { blogId: true },
    }),
  ]);

  const boundUpdate = updateTrapAction.bind(null, tripId);
  const boundDelete = deleteTrapAction.bind(null, tripId);
  const boundSaveRelatedBlogs = saveTripRelatedBlogsAction.bind(null, tripId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>{trap.nameEn}</h1>
        <form action={boundDelete}>
          <button type="submit" className={styles.dangerBtn}>
            Delete Trip
          </button>
        </form>
      </div>

      <TripEditTabs
        key={tripId}
        tripId={tripId}
        updateAction={boundUpdate}
        initial={{
          nameEn: trap.nameEn,
          nameAr: trap.nameAr ?? "",
          nameI18n: (trap.nameI18n as Record<string, string>) ?? undefined,
          interfaceFromEn: trap.interfaceFromEn,
          interfaceFromAr: trap.interfaceFromAr ?? "",
          interfaceFromI18n: (trap.interfaceFromI18n as Record<string, string>) ?? undefined,
          interfaceToEn: trap.interfaceToEn,
          interfaceToAr: trap.interfaceToAr ?? "",
          interfaceToI18n: (trap.interfaceToI18n as Record<string, string>) ?? undefined,
          descriptionEn: trap.descriptionEn ?? "",
          descriptionAr: trap.descriptionAr ?? "",
          descriptionI18n: (trap.descriptionI18n as Record<string, string>) ?? undefined,
          duration: trap.duration,
          status: trap.status,
          metaTitle: trap.metaTitle ?? "",
          metaDescription: trap.metaDescription ?? "",
        }}
        days={trap.trapDays}
        images={trap.galleries}
      />

      <div className={styles.card} style={{ marginTop: 24 }}>
        <RelatedLinksManager
          title="Related Blog Posts"
          allOptions={allBlogs.map((b) => ({ id: b.id, label: b.titleEn }))}
          selectedIds={currentRelatedBlogs.map((r) => r.blogId)}
          onSave={boundSaveRelatedBlogs}
        />
      </div>
    </div>
  );
}
