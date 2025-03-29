"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../GlobalELements/Navbar";
const Hero = () => {
  const [play, setPlay] = useState(false);
  const [modalplay, setmodalPlay] = useState(false);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }, // Adjusted duration and added ease
    },
  };
  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 10, // Lower value for more springiness
        restDelta: 5,  // Higher value for slower animation
        duration: 2,   // Increase this value for a longer transition
      },
    },
    exit: { opacity: 0, scale: 0 },
  };
  
  
  
  const videoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // Delay to ensure the modal has scaled up
        duration: 0.5,
      },
    },
  };
  
  const variantsText = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <main className=" md:h-[100vh]  md:min-w-[100%]">
        <div className="items-center  w-full flex flex-col justify-center px-4 h-auto max-md:px-5 ">
          <div className="w-full max-w-[1204px] max-md:max-w-full max-md:my-10 ">
            <Navbar />
            <div className="md:mt-[24.4140vh] mt-9 md:mb-[24.4140vh] w-full h-full md:flex justify-between gap-20">
              <div className="md:max-w-[504px]   w-auto order-1">
                <div className="md:rounded-[80px] rounded-3xl relative flex items-center justify-center">
                  <AnimatePresence>
                    <motion.video
                      autoPlay
                      muted
                      loop
                      className="w-full object-cover object-center md:rounded-[80px] md:h-auto h-[412px] sm:h-full sm:w-full rounded-3xl"
                 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                    >
                    
                      <source src="/Videos/vid-1.mp4" />
                    </motion.video>
                  </AnimatePresence>
                  <motion.div
                    className={`absolute md:w-[66.67px] md:h-[66.67px]`}
                    onClick={() => {
                      setmodalPlay(!modalplay);
                    }}
                  >
                    <motion.img
                      src="/Image/play-2.svg"
                      alt=""
                      initial="initial"
                      animate="animate"
                      className="hover:cursor-pointer"
                      variants={variantsText}
                      width={66}
                      height={66}
                    />
                  </motion.div>
                </div>
              </div>
              <div className="max-w-[689px] w-full h-auto py-[2.92vh] ">
                <div className="">
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variantsText}
                    className="font-ClashGrotesk-Medium text-[31px]  md:text-5xl font-medium  md:leading-[57.60px] leading-9 tracking-normal text-left text-orange-200"
                  >
                    Where Every Frame 
                    <br className="hidden md:block" />
                    Tells a Story
                  </motion.div>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variantsText}
                    className="md:max-w-[569px] w-fulll text-white text-opacity-70 md:text-[19px] md:font-normal font-archivo-regular mt-[3.9vh] text-left text-[16px] font-light md:leading-[26px] leading-[22.4px] tracking-wide"
                  >
                    Welcome to OPM Cinemas, a creative powerhouse shaping the future of storytelling under the leadership of filmmaker Aashiq Abu since its inception in October 2012.  We collaborate with visionary artists, writers, and technicians to bring authentic narratives to life. Our projects are rooted in culture, yet global in appeal, making a lasting impression on audiences.
                  </motion.div>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variantsText}
                    className="mt-[3.9vh] flex gap-6"
                  >
                    <button
                      onClick={() => {
                        setmodalPlay(!modalplay);
                      }}
                      className="flex justify-center items-center rounded-xl gap-3 px-5 py-2 gradient-button  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400 "
                    >
                      <img
                        src="/Image/Play2.svg"
                        alt="no image"
                        width={24}
                        height={24}
                      />
                      <span className="text-white text-[19px] font-archivo-regular leading-[26.6px] ">
                        Showreel
                      </span>
                    </button>
                    <AnimatePresence>
                      {modalplay && (
                        <motion.div
                          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50"
                          onClick={() => setmodalPlay(false)}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ ease: "anticipate", duration: 2 }}
                          >
                        
                          <button
                            className="w-auto hover:scale-110 rounded-[12px] absolute top-0 mt-3 backdrop-blur-md py-2 px-5  flex items-center gap-3  "
                            style={{ border: "1px solid #FFDAA9" }}
                            onClick={() => setmodalPlay(false)}

                          >
                            <div className=" text-white font-archive text-[16px] font-medium leading-[22.2px] tracking-[0.32px] ">
                             close
                            </div>
                            <div>
                              <img src="/Image/001.svg" alt="" className="h-7" />
                            </div>
                          </button>
                          <motion.video
                            autoPlay
                            muted
                            loop
                            onClick={() => setPlay(false)}
                            className="w-full h-full object-cover"
                           
                          >
                            <source src="/Videos/vid-1.mp4" />
                          </motion.video>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center m-auto px-[121px] absolute bottom-0 ">
            <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
