import { notFound } from "next/navigation";
import { getAboutUs } from "@/lib/services/adminAboutUs";
import { NotFoundError } from "@/lib/services/errors";
import { updateAboutUsAction, deleteAboutUsAction } from "../actions";
import AboutUsForm from "@/components/admin/about-us-form";
import styles from "@/components/admin/admin.module.scss";

export default async function EditAboutUsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const aboutUsId = Number(id);

  let aboutUs;
  try {
    aboutUs = await getAboutUs(aboutUsId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const boundUpdate = updateAboutUsAction.bind(null, aboutUsId);
  const boundDelete = deleteAboutUsAction.bind(null, aboutUsId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>{aboutUs.titleEn}</h1>
        <form action={boundDelete}>
          <button type="submit" className={styles.dangerBtn}>
            Delete Entry
          </button>
        </form>
      </div>
      <div className={styles.card}>
        <AboutUsForm
          initial={{
            titleEn: aboutUs.titleEn,
            titleAr: aboutUs.titleAr ?? "",
            titleI18n: aboutUs.titleI18n ?? undefined,
            descriptionEn: aboutUs.descriptionEn,
            descriptionAr: aboutUs.descriptionAr ?? "",
            descriptionI18n: aboutUs.descriptionI18n ?? undefined,
            image: aboutUs.image,
          }}
          action={boundUpdate}
          submitLabel="Save Changes"
        />
      </div>
    </div>
  );
}
