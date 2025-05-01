"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import HeroBannerSlider from "../Elements/HeroBanner";
import { getHeroData } from "@/app/utils/getData";

import LoadingUi from "@/app/utils/LoadingUi";

const HeroBanner = () => {
  const [awardData, setawardData] = useState<AwardApiResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAwardData() {
      try {
        const data = await getHeroData();
        setawardData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      }
    }

    fetchAwardData();
  }, []);

  if (loading) {
    return <LoadingUi />;
  }

  const shuffledData = awardData?.data?.sort(() => Math.random() - 0.5);
  const randomThreeData = shuffledData?.slice(0, 3);

  return (
    <>
      <div className="overflow-hidden  flex">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {randomThreeData?.map((data:awardsData, index:number) => (
            <SwiperSlide key={index}>
              <HeroBannerSlider awardsData={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HeroBanner;