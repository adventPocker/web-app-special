"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Scrollbar } from "swiper/modules";
import FilmsCards from "./FilmsCards";
const SliderMobile = ({ moviewData }) => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper hidden md:block  w-full  h-full sample-slider .swiper-pagination-bullet  "
      >
        {moviewData?.map((data, index) => (
          <SwiperSlide key={index}>
            <FilmsCards data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderMobile;
