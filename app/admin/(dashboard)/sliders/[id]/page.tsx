import { notFound } from "next/navigation";
import { getSlider } from "@/lib/services/adminSliders";
import { NotFoundError } from "@/lib/services/errors";
import { updateSliderAction, deleteSliderAction } from "../actions";
import SliderForm from "@/components/admin/slider-form";
import styles from "@/components/admin/admin.module.scss";

export default async function EditSliderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sliderId = Number(id);

  let slider;
  try {
    slider = await getSlider(sliderId);
  } catch (err) {
    if (err instanceof NotFoundError) notFound();
    throw err;
  }

  const boundUpdate = updateSliderAction.bind(null, sliderId);
  const boundDelete = deleteSliderAction.bind(null, sliderId);

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>{slider.titleEn ?? `Slider #${slider.id}`}</h1>
        <form action={boundDelete}>
          <button type="submit" className={styles.dangerBtn}>
            Delete Slider
          </button>
        </form>
      </div>
      <div className={styles.card}>
        <SliderForm
          key={sliderId}
          initial={{
            titleEn: slider.titleEn ?? "",
            titleAr: slider.titleAr ?? "",
            titleI18n: slider.titleI18n ?? undefined,
            descriptionEn: slider.descriptionEn ?? "",
            descriptionAr: slider.descriptionAr ?? "",
            descriptionI18n: slider.descriptionI18n ?? undefined,
            image: slider.image,
          }}
          action={boundUpdate}
          submitLabel="Save Changes"
        />
      </div>
    </div>
  );
}
