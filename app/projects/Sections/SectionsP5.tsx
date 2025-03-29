"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination,Autoplay } from "swiper/modules";
import UpcomingCard from "../Elements/UpcomingCard";
const SectionsP5 = () => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto mt-0 px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
        <div className="w-full ">
     
          <div className="md:py-40 py-20">
            <div
              className="text-center font-ClashGrotesk-Medium md:text-[40px]  md:leading-[57.6px] capitalize text-[25px] leading-[35px] font-medium"
              style={{
                background:
                  "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Upcoming Movies
            </div>
            <div className="mt-12">
              <Swiper
                spaceBetween={24}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                  360: {
                    // width: 576,
                    slidesPerView: 1,
                  },
                  576: {
                    // width: 576,
                    slidesPerView: 1,
                  },
                  768: {
                    // width: 768,
                    slidesPerView: 1,
                  },
                }}
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
                {" "}
                <SwiperSlide>
                  <UpcomingCard  image="Movie1.png"/>
                </SwiperSlide>
               
              </Swiper>
            </div>
          </div>
          {/* <TestSlider/> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default SectionsP5;
