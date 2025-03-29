"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import FilmImageCard from "../Elements/FilmImageCard";
import { getMovieCardData } from "@/app/utils/getData";

const SectionsP4 = () => {
  const [movieData, setMovieData] = useState<ApiFilmCard>();
  useEffect(() => {
    async function fetchMovieData() {
      try {
        const data = await getMovieCardData();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchMovieData();
  }, []);

  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1224px]  max-md:max-w-full max-md:my-10 ">
          <div className="py-[130px]">
            <div
              className=" text-[31px] md:text-[40px] font-normal font-ClashGrotesk-Medium md:text-center  leading-[46.50px]"
              style={{
                background:
                  "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Co - Productions
            </div>
            <div className="w-full md:flex flex-wrap justify-center hidden  gap-6 h-full mt-20">
              {movieData?.data
                .filter((data) => data.attributes.Co_Productions)
                .sort((a: any, b: any) => a.attributes.Year - b.attributes.Year)
                .map((data, index) => (
                  <FilmImageCard key={index} data={data} />
                ))}
            </div>
            <div className="mt-12 md:hidden">
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
                    slidesPerView: 2,
                  },
                  768: {
                    // width: 768,
                    slidesPerView: 3,
                  },
                }}
                pagination={{
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper md:hidden  w-full  h-full sample-slider .swiper-pagination-bullet  "
              >
                {movieData?.data
                  .filter((data) => data.attributes.Co_Productions)
                  .sort(
                    (a: any, b: any) => a.attributes.Year - b.attributes.Year
                  )
                  .map((data, index) => (
                    <SwiperSlide key={index}>
                      <FilmImageCard data={data} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsP4;
