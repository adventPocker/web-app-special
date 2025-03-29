"use client";
import React, { useState, useEffect } from "react";
import VideoLayout from "./../Elements/VideoLayout";
import MusicLayout from "./../Elements/MusicLayout";
import { getTopMedias } from "@/app/utils/getData";
const Sections4 = () => {
  const [activeButton, setActiveButton] = useState("video");
  const [Media, setMedia] = useState<MediaData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopMedias();
        console.log("its here");
        console.log(data);
        setMedia(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = (button: any) => {
    setActiveButton((prevButton) =>
      prevButton === button ? prevButton : button
    );
  };

  const getButtonStyle = (button: any) => ({
    background:
      activeButton === button
        ? "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)"
        : "none",
    border: `1px solid ${activeButton === button ? "#A7426F" : "#FF6572"}`,
    color: "#FFFFFF",
    cursor: "pointer",
    outline: "none",
    transition: "background 0.3s, border 0.3s",
  });

  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-4 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-16 ">
            <div
              className="font-ClashGrotesk-Medium md:text-[40px]  font-medium md:leading-[3.375rem] tracking-normal text-center text-[25px] leading-[35px]"
              style={{
                background:
                  "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              OPM Records
            </div>
            <div className="md:block hidden">
              {Media && Media.length > 0 ? (
                <>
                <VideoLayout
                  isVideo={true}
                  VideoData={Media[0].attributes.Video}
                />
                <MusicLayout isMusic={true} MusicData={Media[0].attributes.Music}/>
                </>
              ) : (
                <p>loading ...</p>
              )}{" "}
            </div>
            <div className=" md:hidden block">
              <div className="flex justify-normal gap-3 mt-7">
                <div
                  className="w-[92px] h-[38px] px-5 py-2 rounded-xl items-center gap-3 inline-flex"
                  style={getButtonStyle("video")}
                  onClick={() => handleButtonClick("video")}
                >
                  <div className="text-white text-base font-medium font-archive leading-snug tracking-tight">
                    Videos
                  </div>
                </div>
                <div
                  className="w-[92px] h-[38px] px-5 py-2 rounded-xl items-center gap-3 inline-flex"
                  style={getButtonStyle("music")}
                  onClick={() => handleButtonClick("music")}
                >
                  <div className="text-white text-base font-medium font-archive leading-snug tracking-tight">
                    Music
                  </div>
                </div>
              </div>
              <div
                className={`transition-all ${
                  activeButton ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeButton === "video" && (
                  <>
                 
                    {Media && Media.length > 0 ? (
                      <VideoLayout
                        isVideo={true}
                        VideoData={Media[0].attributes.Video}
                      />
                    ) : (
                      <p>loading ...</p>
                    )}{" "}
                  </>
                )}
                {activeButton === "music" &&<>
                 {Media && Media.length > 0 ? (
                <MusicLayout isMusic={false} MusicData={Media[0].attributes.Music} />
                ) : (
                  <p>loading ...</p>
                )}</>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections4;
