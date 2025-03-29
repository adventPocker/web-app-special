"use client";
import Navbar from "@/app/components/GlobalELements/Navbar";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SectionsC1 = () => {
  const gradientTextStyle = {
    background:
      "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  
  const overlayStyles = {
    background: `
      linear-gradient(180deg, rgba(0, 0, 0, 0) 44.18%, rgba(0, 0, 0, 0.7) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 18.41%),
      radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(0, 0, 0, 0.5) 32.81%, rgba(0, 0, 0, 0.05) 100%),
      linear-gradient(180deg, rgba(34, 40, 49, 0.4) 0%, rgba(34, 40, 49, 0.4) 100%)
    `,
  };

  return (
    <>
      <main className="h-[100vh] w-full min-w-full overflow-hidden relative">
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }} 
          className="min-h-[100vh] w-full h-full absolute top-0 left-0"
        >
          <Image
            src="/Image/banner-2.jpg"
            alt="no image"
            loading="eager"
            className="object-cover min-h-[100vh] w-[100vw] h-full"
            width={1000}
            height={1000}
            priority
          />
        </motion.div>
        
        <div 
          className="absolute inset-0 w-full h-full"
          style={overlayStyles}
        ></div>
        
        <div className="relative z-10 flex flex-col items-center w-full px-5 max-md:px-5 h-[100vh]">
          <div className="w-full max-w-[1204px] max-md:max-w-full max-md:my-10">
            <Navbar />
          </div>
          
          <div className="flex flex-col items-center  relative justify-end flex-grow w-full">
            <div className="flex flex-col items-center  absolute bottom-16 justify-end max-w-[823px] text-center">
              <h1 
                style={gradientTextStyle}
                className="font-ClashGrotesk-Medium text-[31px] md:text-5xl font-medium md:leading-[57.60px] leading-9 tracking-normal text-center mb-2"
              >
                A Film Production Company In Kerala
              </h1>
              <h2
                style={gradientTextStyle}
                className="font-ClashGrotesk-Medium text-[31px] md:text-5xl font-medium md:leading-[57.60px] leading-9 tracking-normal text-center mb-8"
              >
                Sharing Stories Of Our Relevant Works
              </h2>
              
             
              <a 
                href="https://www.youtube.com/channel/UCM1pr5O0pJ-4uNkuOZoG0WQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center rounded-xl gap-3 px-5 py-2 bg-gradient-to-r from-[#FFDAA9]/20 to-[#FDB478]/20 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 transition-transform duration-500 ease-in-out"
              >
                <Image
                  src="/Image/Play2.svg"
                  alt="play icon"
                  width={24}
                  height={24}
                />
                <span className="text-white text-[19px] font-archivo-regular leading-[26.6px]">
                  Showreel
                </span>
              </a>
  
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionsC1;
