"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Autoplay } from "swiper/modules";
import SectionsP3 from "../../Sections/SectionsP3";
import FilmReview from "../../Elements/FilmReview";
interface propSectionsF3 {
  reviewData: Review[];
}
export const SectionsF4 = ({ reviewData }: propSectionsF3) => {
  return (
    <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
      <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
        <div className="md:py-40 py-[60px]">
          <div className="hidden md:flex justify-between items-center m-auto px-[121px]  ">
            <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
          </div>
          <div className="py-16">
            <Swiper
              spaceBetween={10}
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination,Autoplay]}
              className="mySwiper hidden md:block  w-full  h-full sample-slider .swiper-pagination-bullet  "
            >
              {reviewData.map((data: Review, index: number) => (
                <SwiperSlide key={index}>
                  <FilmReview
                    ReviewContent={data.ReviewContent}
                    Reviewer={data.Reviewer}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden md:flex justify-between items-center m-auto px-[121px]  ">
            <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
