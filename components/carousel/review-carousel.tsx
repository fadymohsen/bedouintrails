"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { TestimonialCard, type TestimonialData } from "@/components/rating-card/rating-card";
import styles from "./carousel.module.scss";

export default function ReviewCarousel({ data }: { data: TestimonialData[] }) {
  return (
    <div className={styles.marqueeWrapper}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={1.2}
        spaceBetween={20}
        loop
        freeMode
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        allowTouchMove
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1440: { slidesPerView: 3 },
        }}
        onTouchStart={(swiper) => {
          swiper.autoplay.stop();
          swiper.autoplay.start();
        }}
        onTouchEnd={(swiper) => swiper.autoplay.start()}
        onTouchMove={(swiper) => swiper.autoplay.start()}
        className="steady-swiper"
      >
        {data.map((review) => (
          <SwiperSlide key={review.id}>
            <TestimonialCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
