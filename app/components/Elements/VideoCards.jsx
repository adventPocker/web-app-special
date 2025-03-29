"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoCards = ({ data }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setHovered(true);
    }, 500); // Adjust the delay time (in milliseconds) as needed
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const opts = {
    height: "100",
    width: "100",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => setHovered(!hovered)}
      >
        <div className="md:w-[383px] md:h-[206px] md:max-w-[386px] md:max-h-[208px] h-[230px] w-full rounded-3xl">
          <Image
            src={`${data.ImgThumb.data.attributes.url}`}
            alt="videoIm"
            className="md:w-full md:h-full md:max-w-[386px] md:max-h-[208px] h-[230px] w-full rounded-3xl object-cover"
            width={383}
            height={383}
            loading="eager"
          />
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className={`absolute top-0 overflow-hidden left-0 md:w-full md:h-full md:max-w-[386px] md:max-h-[208px] h-[230px] w-full rounded-3xl ${
                hovered ? "" : "hidden"
              }`}
            >
              <YouTube
                className="md:w-full md:h-full md:min-w-[386px] md:min-h-[208px] h-[230px] w-full rounded-3xl "
                videoId={data.ExternalUrl}
                opts={{ ...opts, width: "100%", height: "100%" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className={`md:w-full md:h-full md:max-w-[386px] md:max-h-[208px] h-[230px] w-full hover:opacity-0 rounded-3xl absolute  p-5 ${
            hovered ? "hidden" : "block"
          } transition-opacity duration-500 ease-in-out `}
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 1.94%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        >
          <div className="w-full h-full ">
            <div className="w-full h-full flex justify-between gap-10 ">
              <div className="w-3/4 h-full relative">
                <div className="absolute bottom-0 left-0">
                  <div className="md:max-w-[233px] w-auto  text-stone-200 text-[19px] font-normal font-archive leading-[26.6px]">
                    {data.Title}
                  </div>
                  <div className="opacity-75 text-stone-200 text-[13px] bg-opacity-75 font-archivo-regular leading-[18.2px] tracking-[0.039px]">
                    {data.FilmName}
                  </div>
                  <div className="text-white mt-6 text-[13px] font-archivo-light leading-[18.2px] tracking-[0.039px]">
                    {data.Views}
                  </div>
                </div>
              </div>
              <div className=" w-1/4 relative">
                <img
                  src="/Image/play-2.svg"
                  alt=""
                  className=" w-10 h-10 absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default VideoCards;
