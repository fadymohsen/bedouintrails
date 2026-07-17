"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Card from "@/components/card/card";
import type { TripCardData } from "@/lib/mappers/trap";
import styles from "./carousel.module.scss";

export default function TripCarousel({ data }: { data: TripCardData[] }) {
  return (
    <div className={styles.marqueeWrapper}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={1.2}
        spaceBetween={40}
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
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        onTouchStart={(swiper) => {
          swiper.autoplay.stop();
          swiper.autoplay.start();
        }}
        onTouchEnd={(swiper) => swiper.autoplay.start()}
        onTouchMove={(swiper) => swiper.autoplay.start()}
        className="steady-swiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
