"use client";
import React, { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import FilmsCards from "./FilmsCards";
import SwiperCore from "swiper";
import Link from "next/link";
import Image from "next/image";

const SliderFilms = ({ moviewData }) => {
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
      <Swiper
        ref={sliderRef}
        spaceBetween={24}
        modules={[Pagination, Autoplay]}
        className=" w-full h-full"
      >
        {moviewData?.slice(0, 3).map(
          (data, index) =>
            !data.attributes.Co_Productions && (
              <SwiperSlide key={index}>
                <FilmsCards data={data} />
              </SwiperSlide>
            )
        )}
      </Swiper>
      <div className="flex  justify-between items-center ">
        <div className="flex gap-2">
          <div
            style={{ border: "0.50px #FFDAA9 solid" }}
            onClick={handlePrev}
            className="py-2 px-5 rounded-2xl gradient-button  "
          >
            <Image src="/Image/arrow-2.svg" width={22} height={22} alt="arrow-2" className="w-[22px] h-[22px] " />
          </div>
          <div
            style={{ border: "0.50px #FFDAA9 solid" }}
            onClick={handleNext}
            className="py-2 px-5 rounded-2xl gradient-button  "
          >
            <Image src="/Image/arrow-3.svg" width={22} height={22} alt="arrow-3" className="w-[22px] h-[22px] " />
          </div>
        </div>
        <Link href={"/projects"}>
          <div
            className="w-auto  gradient-button py-2 px-5 flex justify-center items-start gap-2 gradient-button rounded-2xl "
            style={{
              border: "0.50px #FFDAA9 solid",
            }}
          >
            <div className="text-orange-200 text-[23px] font-normal font-archivo-regular leading-[26.6px]">
              Full Filmography
            </div>
            <Image src="/Image/arrow-3.svg" width={22} height={22} alt="arrow-3" className="w-[22px] h-[22px] " />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SliderFilms;
