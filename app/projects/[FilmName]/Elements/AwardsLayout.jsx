"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import AwardsCard from "./AwardsCard";
import { Pagination, Scrollbar,Autoplay } from "swiper/modules";
const AwardsLayout = ({awardData}) => {
  return (
    <>
    <div className=" ">
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
        className="mySwiper hidden md:block  w-full  h-full sample-slider01  bg-red-10 "
      >
        {awardData.map((data) => (
        <SwiperSlide key={data.key}>
          <AwardsCard  awardTitle={data.AwardTitle} awardSponser={data.AwardSponsers} Reciepent={data.Recipient}/>
        </SwiperSlide>))}
       
      </Swiper>
    </div>
     
    </>
  );
};

export default AwardsLayout;
