"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ImageFrame } from "./ImageFrame";

type PeoplesLayoutProps = {
  Title: string;
  data: Cast[];
};
export const PeoplesLayout = ({ Title, data }: PeoplesLayoutProps) => {
  const [isAllVisible, setIsAllVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const itemsToShow = 8;
  const setVisibleData = () => {
    setIsAllVisible(!isAllVisible);
    setToggle(!toggle);
  };

  return (
    <>
      <div>
        <div className="flex justify-between ">
          <div className="font-ClashGrotesk-Medium font-medium md:text-[40px] text-orange-200  text-2xl  leading-[120%]">
            {Title}
          </div>
        </div>
        <div className="py-10">
          <div className="grid md:grid-cols-4 gap-7 sm:grid-cols-3 grid-cols-2 ">
            {data.slice(0, 8).map((data: Cast, index: number) => (
              <div key={index}>
                <ImageFrame
                  imgSrc={data.Image.data.attributes.url}
                  name={data.Name}
                  role={data.Title}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
             layout
             initial={{ height: 0, opacity: 0 }}
             animate={toggle ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
             transition={{ duration: 0.5 }}
             style={{ overflow: "hidden" }}
            >
              <div className="grid md:grid-cols-4 gap-7 sm:grid-cols-3 grid-cols-2 ">
                {data.slice(8).map((data: Cast, index: number) => (
                  <motion.div key={index} className="overflow-hidden">
                    <ImageFrame
                      imgSrc={data.Image.data.attributes.url}
                      name={data.Name}
                      role={data.Title}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col justify-end items-end ">
          {data.length >= itemsToShow && (
            <motion.div
              onClick={() => setVisibleData()}
              className="w-auto hover:cursor-pointer  h-[38px] gradient-button py-4 px-5 flex justify-center items-center gap-2 hover:scale-200 transition-transform duration-500 ease-in-out delay-400"
              style={{
                background:
                  "linear-gradient(118deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 223, 180, 0.10) 100%)",
                borderRadius: 16,
                border: "0.50px #FFDAA9 solid",
              }}
            >
              <div className="text-orange-200 text-base font-normal font-archive leading-tight">
                {isAllVisible ? "Show Less" : "See More"}
              </div>

              <img
                src={`/Image/${isAllVisible ? "upward.svg" : "down.svg"}`}
                alt=""
                className="w-[11.20px] h-[11.63px] "
              />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};
