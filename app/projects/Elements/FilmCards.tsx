'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
interface propsFilmcard {
  data: CardFilm;
  index: number;
}
const FilmCards = ({ data,index }: propsFilmcard) => {
  
  return (
    <>
       {/* <motion.div
      className="card"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }}
    > */}
      <div className="w-full h-full  group card-3 ">
        <div
          className="w-full h-full flex justify-normal md:gap-20 gap-5 md:rounded-[80px] rounded-[20px] duration-500 transform transition overflow-hidden"
          style={{
            background:
              "linear-gradient(118deg, rgba(255, 255, 255, 0.02) 32.76%, rgba(255, 223, 180, 0.10) 91.01%)",
            boxShadow: "8px 8px 20px 0px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="w-full max-w-[158px]  md:min-w-[302px] min-h-[119px] md:min-h-[400px] h-full md:max-h-[400px] md:max-w-[440px]   ">
            <Link href={`/projects/${data.attributes.slug}`}>
              <Image
                src={`${data.attributes.CardImage.data.attributes.url}`}
                alt="film image"
                className="lg:rounded-[80px] object-cover md:min-w-[302px] max-w-[158px]  min-h-[119px] max-h-[119px] md:max-h-[400px] md:max-w-[440px] w-full h-full rounded-[20px]  duration-500 transform transition group-hover:scale-105"
                width={362}
                height={119}
                loading="eager"
              />
            </Link>
          </div>
          <Link href={`/projects/${data.attributes.slug}`} className="md:hidden">
            <div className=" flex items-center justify-center  md:py-[33px] w-full h-full  md:hidden ">
              <div>
                <div className="font-archive text-[18px] font-normal leading-[25.2px] text-white  ">
                  {data.attributes.Title}
                </div>
                <div className="mt-2 font-archive text-[13px] font-thin leading-[18.2px] text-white">
                  {data.attributes.genere1}/{data.attributes.genere2}
                </div>
              </div>
            </div>
          </Link>

          <div className=" md:w-full h-full md:py-[74px]  md:pr-10 md:block hidden">
            <div>
              <div className="text-white mt-4 md:mt-0 text-[28px] md:leading-[39.50px]  font-medium font-lato leading-[19.04px]">
                {data.attributes.Title}
              </div>

              <div className="w-auto hidden py-[18px]  justify-center items-center gap-2.5 md:inline-flex">
                <div className="text-white text-[16px] font-bold font-archive capitalize leading-[22.4px]">
                  {data.attributes.Year}
                </div>
                <div className="w-[5px] h-[5px] bg-white rounded-full" />
                <div className="text-white text-[16px] font-bold font-archive capitalize leading-[22.4px]">
                  {data.attributes.genere1}/{data.attributes.genere2}
                </div>
                <div className="w-[5px] h-[5px] bg-white rounded-full" />
                <div className="text-white text-[16px] font-bold font-archive capitalize leading-[22.4px]">
                  {data.attributes.RunTime}{" "}
                </div>
              </div>
              <div className="min-w-[295px] text-white text-[10px] font-normal  leading-[15px] md:w-auto  md:text-[16px] md:font-normal font-lato md:leading-[24px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      data.attributes.FIlmContent.length > 150
                        ? `${data.attributes.FIlmContent.slice(0, 150)}...`
                        : data.attributes.FIlmContent,
                  }}
                />{" "}
              </div>
              <Link href={`/projects/${data.attributes.slug}`}>
                <div className=" flex  items-center group2  gap-3  mt-[40px] duration-500 transform transition  hover:translate-x-1">
                  <div className="  grounp2-hover:translate-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.7272 15.1717C12.4539 15.4451 12.4539 15.8883 12.7272 16.1616C13.0006 16.435 13.4438 16.435 13.7172 16.1616L12.7272 15.1717ZM16.8889 12L17.3839 12.495C17.6572 12.2216 17.6572 11.7784 17.3839 11.505L16.8889 12ZM13.7172 7.83836C13.4438 7.56499 13.0006 7.56499 12.7272 7.83836C12.4539 8.11173 12.4539 8.55494 12.7272 8.82831L13.7172 7.83836ZM7.11111 11.3C6.72451 11.3 6.41111 11.6134 6.41111 12C6.41111 12.3866 6.72451 12.7 7.11111 12.7V11.3ZM23.7 12C23.7 5.53827 18.4617 0.3 12 0.3V1.7C17.6885 1.7 22.3 6.31147 22.3 12H23.7ZM12 0.3C5.53827 0.3 0.3 5.53827 0.3 12H1.7C1.7 6.31147 6.31147 1.7 12 1.7V0.3ZM0.3 12C0.3 18.4617 5.53827 23.7 12 23.7V22.3C6.31147 22.3 1.7 17.6885 1.7 12H0.3ZM12 23.7C18.4617 23.7 23.7 18.4617 23.7 12H22.3C22.3 17.6885 17.6885 22.3 12 22.3V23.7ZM13.7172 16.1616L17.3839 12.495L16.3939 11.505L12.7272 15.1717L13.7172 16.1616ZM17.3839 11.505L13.7172 7.83836L12.7272 8.82831L16.3939 12.495L17.3839 11.505ZM16.8889 11.3L7.11111 11.3V12.7L16.8889 12.7V11.3Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="font-archive text-[19px] font-normal leading-[26.6px] text-white ">
                    ReadMore
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
};

export default FilmCards;
