"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import BannerSlider from "./../Elements/BannerSlider";
interface SectionsA1prop {
  bannerData: awardsData[];
}
const SectionsA1 = ({ bannerData }: SectionsA1prop) => {
  const shuffledData = bannerData.sort(() => Math.random() - 0.5);
  const randomThreeData = shuffledData.slice(0, 3);

  return (
    <>
      <div className="overflow-hidden  flex">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {randomThreeData.map((data:awardsData, index:number) => (
            <SwiperSlide key={index}>
              <BannerSlider awardsData={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionsA1;
