"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import FilmCards from "../Elements/FilmCards";
import { getMovieCardData } from "@/app/utils/getData";

const SectionsP2 = () => {
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
        <div className="w-full  max-w-[1224px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:pb-40 pb-14 w-full h-full ">
            <div
              className="text-center font-ClashGrotesk-Medium md:text-[40px]  md:leading-[56.6px] capitalize text-[25px] leading-[35px] font-medium"
              style={{
                background:
                  "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Own Productions
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:gap-[46px] gap-[22px] md:mt-[48px] mt-[22px]">
              {movieData?.data
                .filter((data) => !data.attributes.Co_Productions)
                .sort((a: any, b: any) => parseInt(b.attributes.Year, 10) - parseInt(a.attributes.Year, 10))
                .map((data, index) => (
                  <FilmCards data={data} index={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" justify-between items-center m-auto md:px-[121px]  ">
        <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
      </div>
    </>
  );
};

export default SectionsP2;
