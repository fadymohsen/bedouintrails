"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";
import SafeImage from "@/components/safe-image/safe-image";
import styles from "./carousel.module.scss";

type TripHeroCarouselProps = {
  images: string[];
  isOrder?: boolean;
  orderStatus?: string;
  onCancel?: () => void;
};

export default function TripHeroCarousel({ images, isOrder = false, orderStatus, onCancel }: TripHeroCarouselProps) {
  const t = useTranslations();
  const slides = images.length > 0 ? images : ["/img/adventure.webp"];
  const [activeIndex, setActiveIndex] = useState(0);
  const canCancel = isOrder && orderStatus !== "cancelled" && orderStatus !== "paid" && orderStatus !== "accepted";

  return (
    <div className={styles.galleryWrap}>
      {canCancel && onCancel && (
        <div className={styles.galleryActions}>
          <button onClick={onCancel} className={styles["cancell-btn"]}>
            {t("cancel")}
          </button>
        </div>
      )}

      <div className={styles.galleryMainPhoto}>
        <SafeImage src={slides[activeIndex]} alt="Desert safari photo" fill style={{ objectFit: "cover" }} priority />
      </div>

      {slides.length > 1 && (
        <Swiper slidesPerView="auto" spaceBetween={10} className={styles.galleryThumbSwiper}>
          {slides.map((image, index) => (
            <SwiperSlide key={index} className={styles.galleryThumbSlide}>
              <button
                type="button"
                className={`${styles.galleryThumbBtn} ${index === activeIndex ? styles.active : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Photo ${index + 1}`}
              >
                <SafeImage src={image} alt="Desert safari thumbnail" fill style={{ objectFit: "cover" }} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
