import SliderForm from "@/components/admin/slider-form";
import { createSliderAction } from "../actions";
import styles from "@/components/admin/admin.module.scss";

export default function NewSliderPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>New Slider</h1>
      </div>
      <div className={styles.card}>
        <SliderForm action={createSliderAction} submitLabel="Create Slider" />
      </div>
    </div>
  );
}
