"use client";
import React, { useEffect, useState } from "react";
import SectionsA1 from "./Sections/SectionsA1";
import SectionsA2 from "./Sections/SectionsA2";
import Footer from "../components/GlobalELements/Footer";
import Navbar from "../components/GlobalELements/Navbar";
import { getAwardsData } from "@/app/utils/getData";
import Loading from "../loading";

export default function Home() {
  const [awardData, setawardData] = useState<AwardApiResponse>();
  useEffect(() => {
    async function fetchAwardData() {
      try {
        const data = await getAwardsData();
        setawardData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchAwardData();
  }, []);
  return (
    <>
     
      {awardData ? (
        <>
          {" "}
          <div className="absolute  top-0 z-50 w-full ">
        <div className="items-center flex flex-col justify-center h-auto px-4 max-md:px-5 ">
          <div className="w-full max-w-[1204px]   max-md:max-w-full max-md:my-10 ">
            <Navbar />
          </div>{" "}
        </div>
      </div>
          <SectionsA1 bannerData={awardData?.data} />
          <SectionsA2 awardData={awardData?.data} />{" "}
          <Footer />

        </>
        
      ):<> <div >
        <Loading/>
        </div> </>}
    </>
  );
}
