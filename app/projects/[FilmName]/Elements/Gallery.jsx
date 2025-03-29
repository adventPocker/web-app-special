"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = ({ImageData}) => {
  

  // Split the ImageData into chunks of 4
  const chunkedImages = [];
  for (let i = 0; i < ImageData.length; i += 3) {
    chunkedImages.push(ImageData.slice(i, i + 3));
  }

  return (
    <>
      <div className="w-auto text-orange-200 md:text-[40px]  font-ClashGrotesk-Medium md:leading-[56px] text-2xl font-medium leading-[120%]">
        Gallery
      </div>
      <div className="md:grid grid-cols-2 md:grid-cols-3 gap-4 mt-10  hidden">
        {chunkedImages.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="grid gap-4">
            {chunk.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className="h-full object-cover max-w-full rounded-lg"
                  src={`${image.Image.data.attributes.url}`}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                  width={1000}
                  height={1000}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Swiper
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            360: {
              // width: 576,
              slidesPerView: 1,
            },
            576: {
              // width: 576,
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          className="mySwiper  w-full  h-full sample-slider01  bg-red-10 mt-11 "
        >
          {ImageData.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                
                className="min-w-[333px] max-h-[334px] rounded-[20px] flex-col justify-start items-start "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className="min-w-[333px] w-full h-[334px] rounded-[20px] object-cover mb-9"
                  src={`${image.Image.data.attributes.url}`}                 
                  alt={`Image ${index + 1}`}
                  loading="eager"
                  width={333}
                  height={334}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
