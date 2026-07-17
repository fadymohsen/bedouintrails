"use client";

import { useTransition } from "react";
import { addGalleryImagesAction, deleteGalleryImageAction } from "@/app/admin/(dashboard)/trips/actions";
import styles from "./admin.module.scss";

export type GalleryImage = { id: number; image: string };

export default function TripGalleryManager({ tripId, images }: { tripId: number; images: GalleryImage[] }) {
  const [pending, startTransition] = useTransition();

  function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    startTransition(async () => {
      await addGalleryImagesAction(tripId, form);
      e.currentTarget?.reset();
    });
  }

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
        {images.map((img) => (
          <div key={img.id} style={{ position: "relative" }}>
            <img src={img.image} alt="" className={styles.imagePreview} />
            <button
              type="button"
              className={styles.dangerBtn}
              style={{ position: "absolute", top: 4, right: 4, padding: "2px 8px", fontSize: "0.75rem" }}
              onClick={() => startTransition(() => deleteGalleryImageAction(tripId, img.id))}
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleUpload} className={styles.field}>
        <label>Add images</label>
        <input type="file" name="images" accept="image/*" multiple />
        <button type="submit" className={styles.secondaryBtn} disabled={pending} style={{ width: "fit-content" }}>
          {pending ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
