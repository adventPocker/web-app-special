"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import VideoLayout from "@/app/components/Elements/VideoLayout";
import MusicLayout from "@/app/components/Elements/MusicLayout";
interface propSectionsF9 {
  VideosData?: Video[];
  AudioData?: Music[];
}
const SectionsF9 = ({ VideosData, AudioData }: propSectionsF9) => {
  const [activeButton, setActiveButton] = useState("video");

  const handleButtonClick = (button: any) => {
    setActiveButton((prevButton) =>
      prevButton === button ? prevButton : button
    );
  };

  const getButtonStyle = (button: any) => ({
    background:
      activeButton === button
        ? "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)"
        : "none",
    border: ` ${
      activeButton === button ? "none" : "1px solid rgba(255, 255, 255, 1)"
    }`,
    color: activeButton === button ? "black" : "#FFFFFF",
    outline: "none",
    transition: "background 0.3s, border 0.3s, color 0.3s",
  });

  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-14">
            <div className=" block">
              <div className="flex justify-normal gap-3 mt-7">
                <div
                  className="w-[209px] h-[56px] px-5 py-2 rounded-[24px] items-center gap-3 inline-flex"
                  style={getButtonStyle("video")}
                  onClick={() => handleButtonClick("video")}
                >
                  <div className="text-[23px] font-medium font-archive leading-loose tracking-wide">
                    Videos
                  </div>
                </div>
                <div
                  className="w-[209px] h-[56px] px-5 py-2 rounded-[24px] items-center gap-3 inline-flex"
                  style={getButtonStyle("music")}
                  onClick={() => handleButtonClick("music")}
                >
                  <div className="text-[23px] font-medium font-archive leading-loose tracking-wide">
                    Music
                  </div>
                </div>
              </div>
              {activeButton === "video" && (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <VideoLayout isVideo={false} VideoData={VideosData} />
                </motion.div>
              )}
              {activeButton === "music" && (
                <motion.div
                  key="music"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MusicLayout isMusic={false} MusicData={AudioData} />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsF9;
