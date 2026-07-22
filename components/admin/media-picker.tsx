"use client";

import { useEffect, useRef, useState } from "react";
import { getLocalFallbackImage } from "@/lib/image-fallback";
import styles from "./media-picker.module.scss";
import adminStyles from "./admin.module.scss";

type MediaItem = { url: string; pathname: string; uploadedAt: string; size: number };

let cache: MediaItem[] | null = null;

function useMediaLibrary(open: boolean) {
  const [items, setItems] = useState<MediaItem[] | null>(cache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open || cache) return;
    fetch("/api/admin/media")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load media library.");
        return res.json();
      })
      .then((data: { items: MediaItem[] }) => {
        cache = data.items;
        setItems(data.items);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load media library."));
  }, [open]);

  return { items, error };
}

function MediaPickerModal({
  open,
  onClose,
  multiple,
  onSelect,
  onSelectMultiple,
}: {
  open: boolean;
  onClose: () => void;
  multiple?: boolean;
  onSelect?: (url: string) => void;
  onSelectMultiple?: (urls: string[]) => void;
}) {
  const { items, error } = useMediaLibrary(open);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (open) setSelected([]);
  }, [open]);

  if (!open) return null;

  const filtered = (items ?? []).filter((item) =>
    item.pathname.toLowerCase().includes(query.toLowerCase())
  );

  function toggle(url: string) {
    if (!multiple) {
      onSelect?.(url);
      onClose();
      return;
    }
    setSelected((prev) => (prev.includes(url) ? prev.filter((u) => u !== url) : [...prev, url]));
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Media Library</h3>
          <input
            type="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        <div className={styles.grid}>
          {error && <p className={styles.empty}>{error}</p>}
          {!error && items === null && <p className={styles.empty}>Loading...</p>}
          {!error && items !== null && filtered.length === 0 && (
            <p className={styles.empty}>No images found.</p>
          )}
          {filtered.map((item) => (
            <button
              key={item.url}
              type="button"
              className={`${styles.item} ${selected.includes(item.url) ? styles.itemSelected : ""}`}
              onClick={() => toggle(item.url)}
            >
              <img src={getLocalFallbackImage(item.url)} alt={item.pathname} loading="lazy" />
              <span className={styles.itemLabel}>{item.pathname.split("/").pop()}</span>
            </button>
          ))}
        </div>

        {multiple && (
          <div className={styles.modalFooter}>
            <button type="button" className={adminStyles.secondaryBtn} onClick={onClose}>
              Cancel
            </button>
            <button
              type="button"
              className={adminStyles.primaryBtn}
              disabled={selected.length === 0}
              onClick={() => {
                onSelectMultiple?.(selected);
                onClose();
              }}
            >
              Add {selected.length > 0 ? `(${selected.length})` : ""}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function ImageField({
  label,
  fileFieldName = "image",
  urlFieldName = "imageUrl",
  currentImage,
  required,
}: {
  label: string;
  fileFieldName?: string;
  urlFieldName?: string;
  currentImage?: string | null;
  required?: boolean;
}) {
  const [pickedUrl, setPickedUrl] = useState<string | null>(null);
  const [pickedFileName, setPickedFileName] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const preview = pickedUrl ?? currentImage;

  return (
    <div className={adminStyles.field}>
      <label>
        {label} {currentImage && !required ? "(leave empty to keep current)" : ""}
      </label>

      {preview && <img src={getLocalFallbackImage(preview)} alt="" className={adminStyles.imagePreview} />}

      <div className={styles.trigger}>
        <input
          ref={fileInputRef}
          type="file"
          name={fileFieldName}
          accept="image/*"
          required={required && !currentImage && !pickedUrl}
          onChange={(e) => {
            if (e.currentTarget.files?.length) {
              setPickedUrl(null);
              setPickedFileName(null);
            }
          }}
        />
        <button type="button" className={adminStyles.secondaryBtn} onClick={() => setShowModal(true)}>
          Choose from library
        </button>
        {pickedFileName && <span>Selected: {pickedFileName}</span>}
      </div>

      <input type="hidden" name={urlFieldName} value={pickedUrl ?? ""} />

      <MediaPickerModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSelect={(url) => {
          if (fileInputRef.current) fileInputRef.current.value = "";
          setPickedUrl(url);
          setPickedFileName(url.split("/").pop() ?? url);
        }}
      />
    </div>
  );
}

export function LibraryPickerButton({
  label = "Choose from library",
  onSelectMultiple,
}: {
  label?: string;
  onSelectMultiple: (urls: string[]) => void;
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="button" className={adminStyles.secondaryBtn} onClick={() => setShowModal(true)}>
        {label}
      </button>
      <MediaPickerModal
        open={showModal}
        onClose={() => setShowModal(false)}
        multiple
        onSelectMultiple={onSelectMultiple}
      />
    </>
  );
}
