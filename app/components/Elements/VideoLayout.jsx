"use client";
import React, { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import VideoCards from "./VideoCards";
const VideoLayout = ({ isVideo,VideoData }) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <div
        className={`w-full ${isVideo ? " md:pt-[154px] md:pb-[120px]" : ""}`}
      >
        {isVideo && (
          <div className="w-[203px] h-[53px] justify-start items-start gap-5 inline-flex">
            <div className="px-6  py-3 bg-gradient-to-bl from-orange-200 to-orange-300  rounded-3xl justify-center items-center md gap-2.5 md:flex hidden">
              <div className="w-[155px] text-black text-2xl font-normal font-archivo-regular leading-[28.80px]">
                Videos
              </div>
            </div>
          </div>
        )}
        <Swiper
          ref={sliderRef}
          spaceBetween={24}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            360: {
              // width: 576,
              slidesPerView: 1,
            },
            576: {
              // width: 576,
              slidesPerView: 2,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          className=" md:mt-16  h-full w-full md:max-h-[300px] mt-12"
        >
          {VideoData.map((data, index)=>(
          <SwiperSlide key={index}>
            <VideoCards   data={data} />
          </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex ml-1 mt-10 justify-between items-center ">
          <div className="flex gap-2">
            <div
              style={{ border: "0.50px #FFDAA9 solid" }}
              onClick={handlePrev}
              className="py-2 px-5 rounded-2xl gradient-button  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400"
            >
              <img src="/Image/arrow-2.svg" className="w-[22px] h-[22px] " />
            </div>
            <div
              style={{ border: "0.50px #FFDAA9 solid" }}
              onClick={handleNext}
              className="py-2 px-5 rounded-2xl gradient-button  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400"
            >
              <img src="/Image/arrow-3.svg" className="w-[22px] h-[22px] " />
            </div>
          </div>

          <div
           style={{ border: "0.50px #FFDAA9 solid" }}
            className="w-auto h-auto rounded-2xl  gradient-button py-2 px-5 hidden gradient-button md:flex justify-center items-center gap-[10px] "
           
          >
            <div className="text-orange-200 text-[19px] font-normal font-archivo-regular leading-[26.6px">
              see more
            </div>
            <img
              src="/Image/arrow-3.svg"
              alt=""
              className="w-[22px] h-[22px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoLayout;
