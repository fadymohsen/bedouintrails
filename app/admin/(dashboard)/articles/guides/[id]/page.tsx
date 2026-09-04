import { notFound } from "next/navigation";
import { getTravelGuide } from "@/lib/services/adminTravelGuides";
import { NotFoundError } from "@/lib/services/errors";
import { updateTravelGuideAction } from "../actions";
import TravelGuideForm from "@/components/admin/travel-guide-form";
import styles from "@/components/admin/admin.module.scss";
import Link from "next/link";

export default async function EditTravelGuidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const guideId = Number(id);

  let guide;
  try {
    guide = await getTravelGuide(guideId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const boundUpdate = updateTravelGuideAction.bind(null, guideId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>{guide.path}</h1>
        <Link href="/admin/articles/guides" className={styles.linkBtn}>
          ← Back to Guides
        </Link>
      </div>
      <div className={styles.card}>
        <TravelGuideForm
          key={guideId}
          initial={{
            path: guide.path,
            translationKey: guide.translationKey,
            image: guide.image,
            heroImage: guide.heroImage,
            heroPosition: guide.heroPosition,
            sortOrder: guide.sortOrder,
            visible: guide.visible,
          }}
          action={boundUpdate}
        />
      </div>
    </div>
  );
}
