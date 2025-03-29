"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { getMovieCardData } from "@/app/utils/getData";
import Link from "next/link";
const FilmSlider = () => {
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
      <Swiper
        breakpoints={{
          360: {
            // width: 576,
            slidesPerView: 1,
          },
          576: {
            // width: 576,
            slidesPerView: 3,
          },
          768: {
            // width: 768,
            slidesPerView: 6,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full "
      >
        {movieData?.data.map((data: CardFilm, index: number) => (
          <SwiperSlide key={index}>
            <Link href={`/projects/${data.attributes.slug}`}>
              <motion.div
                className="min-w-[300px] w-full min-h-[412px] h-full relative  "
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`${data.attributes.ImgThumb.data?.attributes.url}`}
                  alt=""
                  className="min-w-[300px] min-h-[412px] object-cover w-full h-[413px] "
                  height={413}
                  width={300}
                  loading="eager"
                />
                <motion.div
                  className="bg-opacity-60 bg-gray-800 absolute inset-0 flex flex-col items-center justify-end p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ opacity: 1 }}
                  whileTap={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`${data.attributes.TitleImage.data.attributes.url}`}
                    alt={data.attributes.TitleImage.data.attributes.name}
                    className="w-full max-w-[240px] h-full md:max-h-[160px] max-h-[88px] object-contain"
                    loading="lazy"
                    height={300}
                    width={300}
                  />
                </motion.div>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FilmSlider;
