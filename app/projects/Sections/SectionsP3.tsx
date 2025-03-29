"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Scrollbar } from "swiper/modules";
import FilmReview from "../Elements/FilmReview";

const SectionsP3 = () => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full  max-w-[1224px  max-md:max-w-full max-md:my-10 ">
          <div className="py-16">
          <div className="text-center md:hidden text-white text-base font-thin font-archive mb-3 leading-snug tracking-tight">Reviews</div>
            <Swiper
              spaceBetween={10}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper hidden md:block  w-full  h-full sample-slider .swiper-pagination-bullet  "
            >
              <SwiperSlide>
                <FilmReview ReviewContent="every movie opm is great  and funny. I love watching it every week."  Reviewer="Times Of India"/>
              </SwiperSlide>
     
              <SwiperSlide>
                <FilmReview ReviewContent="every movie opm is great  and funny. I love watching it every week."  Reviewer="Times Of India"/>
              </SwiperSlide>
              <SwiperSlide>
                <FilmReview ReviewContent="every movie opm is great  and funny. I love watching it every week."  Reviewer="Times Of India"/>
              </SwiperSlide> 
            
            </Swiper>
               
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center m-auto md:px-[121px]   ">
        <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
      </div>
    </>
  );
};

export default SectionsP3;
