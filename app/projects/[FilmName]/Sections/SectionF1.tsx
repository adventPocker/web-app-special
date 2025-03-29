"use client";
import Navbar from "@/app/components/GlobalELements/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface propsSectionF1 {
  data: FilmData[];
}

const SectionF1 = ({ data }: propsSectionF1) => {
  const [loading, setLoading] = useState(true); // State to manage loading state
  const randomIndex = Math.floor(
    Math.random() * data[0].attributes.BannerImage.data.length
  );
  const divStyles = {
    background: `
                  linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
                  linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
                  radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
                `,
  };
  const handleImageLoad = () => {
    setLoading(false); // Set loading state to false once the image is loaded
  };
  return (
    <>
      <main className=" h-[100vh]  min-w-[100%]">
        {loading && (
          // Skeleton loading component while the image is loading
          <div className="w-full h-full bg-gray-800 animate-pulse absolute top-0 left-0"></div>
        )}
            <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }} 
        >
        <Image
          src={`${data[0].attributes.BannerImage.data[randomIndex].attributes.url}`}
          loading="eager"
          alt={data[0].attributes.BannerImage.data[0].attributes.name}
          width={1000}
          height={1000}
          className={`object-cover absolute top-0 min-h-[100vh] w-[100vw] h-full ${
            loading ? "hidden" : "" // Hide the image when loading is true
          }`}
          onLoad={handleImageLoad} // Handle the image load event
        />
        </motion.div>
        <div className="items-center w-full flex flex-col px-5 max-md:px-5 h-[100vh] relative " style={divStyles}>
          <div className="w-full max-w-[1204px] max-md:max-w-full max-md:my-10 ">
            <Navbar />
            <div className="w-full h-auto  lg:pt-[46vh] pt-[51.36vh] sm:pt-[20vh]">
              <div className=" w-full h-full  ">
                <div className=" flex flex-col items-center md:items-start ">
                  <div className="flex flex-col md:items-start ">
                    <img
                      src={`${data[0].attributes.TitleImage.data.attributes.url}`}
                      alt=""
                      className="md:min-h-[99px] max-h-[68px] w-auto h-auto object-fill "
                    />
                  </div>
                  <div className="md:w-[371px] md:h-11 py-2.5 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-neutral-200 text-base font-bold font-lato capitalize leading-normal">
                      {data[0].attributes.Year}
                    </div>
                    <div className="w-[5px] h-[5px] bg-neutral-200 rounded-full" />
                    <div className="text-neutral-200 text-base font-bold font-lato capitalize leading-normal">
                      {data[0].attributes.genere1}/ {data[0].attributes.genere2}
                    </div>
                    <div className="w-[5px] h-[5px] bg-neutral-200 rounded-full" />
                    <div className="text-neutral-200 text-base font-bold font-lato leading-normal">
                      {data[0].attributes.RunTime}
                    </div>
                  </div>
                  <div className="lg:mt-[1.7vh] mt-4  flex justify-normal gap-6">
                    <a
                      href={`${data[0].attributes.Trailer_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:block "
                    >
                      <button
                        className="flex justify-center items-center  rounded-xl gap-3 h-12 px-5 py-2 gradient-button   hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400"
                        style={{
                          background:
                            "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)",
                        }}
                      >
                        <img
                          src="/Image/Play2.svg"
                          alt="no image"
                          className="w-6 h-6"
                        />
                        <span className="text-neutral-700 text-[23px] font-medium font-archive leading-loose tracking-wide">
                          Watch Trailer
                        </span>
                      </button>
                    </a>
                    <a
                      href={`${data[0].attributes.MovieUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex justify-center items-center gradient-button  rounded-xl gap-3 h-12 px-5 py-2  border border-white  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400">
                        <img
                          src="/Image/Play2.svg"
                          alt="no image"
                          className="w-6 h-6"
                        />
                        <span className="text-white text-[23px] font-medium font-archive leading-loose tracking-wide">
                          Watch Movie
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionF1;
