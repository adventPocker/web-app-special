"use client";
import {Image} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
interface propsImageFrame {
  imgSrc: string;
  name: string;
  role: string;
}
export const ImageFrame = ({ imgSrc, name, role }: propsImageFrame) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="h-auto max-w-[279px] w-auto mb-3"
      >
        <Image
          src={`${imgSrc}`}
          alt="img"
          className="md:max-w-[279px] md:max-h-[189px] md:min-h-[189px] min-h-[135px] md:w-full md:h-full max-w-[157px] max-h-[135px] rounded-[20px] md:rounded-[40px] object-cover"
          width={279}
          height={189}
          loading="lazy"
        />
        <div className="w-auto mt-5">
          <span className="text-white md:text-[25px] font-archive md:tracking-[0.46px] md:leading-[32.2px] text-base font-normal leading-[150%]">
            {name} <br />
          </span>
          <span className="text-white md:text-[14px] font-thin md:tracking-[0.322px] font-archive md:leading-[27px] text-xs leading-[150%]">
            {role}{" "}
          </span>
        </div>
      </motion.div>
    </>
  );
};
