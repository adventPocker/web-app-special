import Image from "next/image";
import React from "react";

const Sections1 = () => {
  return (
    <>
      <div className="items-center  w-full flex flex-col justify-center px-4 h-auto max-md:px-5 ">
        <div className="w-full max-w-[1204px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-16 w-full h-full">
            <div
              className="font-ClashGrotesk-Medium md:text-[40px] font-medium md:leading-[56px] md:tracking-normal text-center  text-[25px]   leading-[35px]"
              style={{
                background:
                  "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              What we do
            </div>
            <div className=" grid md:grid-cols-2 gap-10 items-center justify-center md:mt-28 mt-10 ">
              <div className="lg:rounded-[80px] rounded-[40px]  duration-500  transform transition border-2 border-transparent   hover:border-white">
                <div
                  className="lg:pl-[61px] p-[34px] md:py-[49px] md:px-[70px] md:min-h-[400px]  lg:rounded-[80px] rounded-[40px] justify-center items-center flex "
                  style={{
                    background:
                      "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
                  }}
                >
                  <div className="self-stretch flex-col lg:p-0 justify-start items-start">
                    <div className="flex-col md:justify-start justify-center md:items-start items-center md:gap-8 gap-2 flex ">
                      <div className="md:w-[44.52px] md:h-11 w-[35px] h-[35px] ">
                        <div className="md:w-[43.48px] md:h-[42.96px] w-[35px] h-[35px] left-[0.52px] top-[0.52px] ">
                          <img
                            src="/Image/Layer_1.png"
                            alt="icon record"
                            width={43}
                            height={43}
                            className="mb-[32px]"
                          />
                        </div>
                      </div>
                      <div className="flex-col md:justify-start justify-center md:items-start items-cente md:gap-6 gap-2 flex">
                        <div className="text-center text-white md:text-[28px] font-medium font-ClashGrotesk-Medium  md:leading-[39.2px]  text-base  leading-snug tracking-normal">
                          OPM Cinema
                        </div>
                        <div
                          className="lg:w-[399px] w-auto  text-opacity-70 md:text-base  font-archivo-regular md:leading-[22.4px]  text-center md:text-left  text-[12px] font-normal  "
                          style={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          OPM Cinemas is a powerhouse in the film industry,
                          delivering compelling stories and unforgettable visual
                          experiences. Our productions feature top-tier talents,
                          visionary directors, and cutting-edge storytelling.
                        </div>
                      </div>
                      <div className="py-2 rounded-xl flex items-center gap-3  transform transition-transform hover:scale-110 hover:cursor-pointer">
                        <img
                          src="/Image/arrow.png"
                          alt="icon"
                          className="md:w-6 md:h-6 h-[14px] w-[14px]"
                        />
                        <div
                          className="md:text-[19px] md:font-medium font-archivo-regular capitalize leading-[22.4px] text-base font-normal  "
                          style={{
                            background:
                              "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          Filmography
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:rounded-[80px] rounded-[40px]  duration-500  transform transition border-2 border-transparent   hover:border-white">
                <div
                  className="lg:pl-[61px] p-[34px] md:py-[49px] md:px-[70px] md:min-h-[400px]  lg:rounded-[80px] rounded-[40px] justify-center items-center flex "
                  style={{
                    background:
                      "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
                  }}
                >
                  <div className="self-stretch flex-col lg:p-0 justify-start items-start">
                    <div className="flex-col md:justify-start justify-center md:items-start items-center md:gap-8 gap-2 flex ">
                      <div className="md:w-[44.52px] md:h-11 w-[35px] h-[35px]">
                        <div className="md:w-[43.48px] md:h-[42.96px] w-[35px] h-[35px] left-[0.52px] top-[0.52px] ">
                          <img
                            src="/Image/ICON4.svg"
                            alt="icon record"
                            className="mb-[32px]"
                          />
                        </div>
                      </div>
                      <div className="flex-col md:justify-start justify-center md:items-start items-cente md:gap-6 gap-2 flex">
                        <div className="text-center text-white md:text-[28px] font-medium font-ClashGrotesk-Medium  md:leading-[39.2px]  text-base  leading-snug tracking-normal">
                          OPM Records
                        </div>
                        <div
                          className="lg:w-[399px] w-auto  text-opacity-70 md:text-base  font-archivo-regular md:leading-[22.4px]  text-center md:text-left  text-[12px] font-normal  "
                          style={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          OPM Records is a premier media production house,
                          founded by acclaimed director Aashiq Abu. From movies
                          to commercials and corporate films, we create
                          audio-visual excellence.
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <a
                          href={`https://www.youtube.com/@OPMRecords`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="py-2 rounded-xl flex items-center gap-3  transform transition-transform hover:scale-110 hover:cursor-pointer">
                            <img
                              src="/Image/arrow.png"
                              alt="icon"
                              className="md:w-6 md:h-6 h-[14px] w-[14px]"
                            />

                            <div
                              className="md:text-[19px] md:font-medium font-archivo-regular capitalize leading-[22.4px] text-base font-normal  "
                              style={{
                                background:
                                  "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                              }}
                            >
                              YouTube
                            </div>
                          </div>
                        </a>
                        <div className="py-2 rounded-xl flex items-center gap-3  transform transition-transform hover:scale-110 hover:cursor-pointer">
                          <img
                            src="/Image/arrow.png"
                            alt="icon"
                            className="md:w-6 md:h-6 h-[14px] w-[14px]"
                          />

                          <div
                            className="md:text-[19px] md:font-medium font-archivo-regular capitalize leading-[22.4px] text-base font-normal  "
                            style={{
                              background:
                                "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)",
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                            }}
                          >
                            ReadMore
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:rounded-[80px] rounded-[40px]  duration-500  transform transition border-2 border-transparent   hover:border-white">
                <div
                  className="lg:pl-[61px] p-[34px] md:py-[49px] md:px-[70px] md:min-h-[400px]  lg:rounded-[80px] rounded-[40px] justify-center items-center flex "
                  style={{
                    background:
                      "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
                  }}
                >
                  <div className="self-stretch flex-col lg:p-0 justify-start items-start">
                    <div className="flex-col md:justify-start justify-center md:items-start items-center md:gap-8 gap-2 flex ">
                      <div className="md:w-[44.52px] md:h-11 w-[35px] h-[35px] ">
                        <div className="md:w-[43.48px] md:h-[42.96px] w-[35px] h-[35px] left-[0.52px] top-[0.52px] ">
                          <img
                            src="/Image/home-page-icons-2.png"
                            alt="icon record"
                            width={43}
                            height={43}
                            className="mb-[32px]"
                          />
                        </div>
                      </div>
                      <div className="flex-col md:justify-start justify-center md:items-start items-cente md:gap-6 gap-2 flex">
                        <div className="text-center text-white md:text-[28px] font-medium font-ClashGrotesk-Medium  md:leading-[39.2px]  text-base  leading-snug tracking-normal">
                          OPM Distributions
                        </div>
                        <div
                          className="lg:w-[399px] w-auto  text-opacity-70 md:text-base  font-archivo-regular md:leading-[22.4px]  text-center md:text-left  text-[12px] font-normal  "
                          style={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          OPM Distributions ensures that great films reach the
                          right audiences. We handle theatrical releases,
                          streaming partnerships, and international film
                          distribution.{" "}
                        </div>
                        <div className="py-2 rounded-xl flex items-center gap-3  transform transition-transform hover:scale-110 hover:cursor-pointer">
                          <img
                            src="/Image/arrow.png"
                            alt="icon"
                            className="md:w-6 md:h-6 h-[14px] w-[14px]"
                          />
                          <div
                            className="md:text-[19px] md:font-medium font-archivo-regular capitalize leading-[22.4px] text-base font-normal  "
                            style={{
                              background:
                                "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)",
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                            }}
                          >
                            Filmography
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:rounded-[80px] rounded-[40px]  duration-500  transform transition border-2 border-transparent   hover:border-white">
                <div
                  className="lg:pl-[61px] p-[34px] md:py-[49px] md:px-[70px] md:min-h-[400px]  lg:rounded-[80px] rounded-[40px] justify-center items-center flex "
                  style={{
                    background:
                      "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
                  }}
                >
                  <div className="self-stretch flex-col lg:p-0 justify-start items-start">
                    <div className="flex-col md:justify-start justify-center md:items-start items-center md:gap-8 gap-2 flex ">
                      <div className="md:w-[44.52px] md:h-11 w-[35px] h-[35px] ">
                        <div className="md:w-[43.48px] md:h-[42.96px] w-[35px] h-[35px] left-[0.52px] top-[0.52px] ">
                          <img
                            src="/Image/home-page-icons-1.png"
                            alt="icon record"
                            width={43}
                            height={43}
                            className="mb-[32px]"
                          />
                        </div>
                      </div>
                      <div className="flex-col md:justify-start justify-center md:items-start items-cente md:gap-6 gap-2 flex">
                        <div className="text-center text-white md:text-[28px] font-medium font-ClashGrotesk-Medium  md:leading-[39.2px]  text-base  leading-snug tracking-normal">
                          OPM Studios
                        </div>
                        <div
                          className="lg:w-[399px] w-auto  text-opacity-70 md:text-base  font-archivo-regular md:leading-[22.4px]  text-center md:text-left  text-[12px] font-normal  "
                          style={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          OPM Studios is a creative hub producing films, ads,
                          and branded content. Founded by industry experts, we
                          focus on high-quality storytelling and innovative
                          production techniques.
                        </div>
                      </div>
                      <div className="py-2 rounded-xl flex items-center gap-3  transform transition-transform hover:scale-110 hover:cursor-pointer">
                        <img
                          src="/Image/arrow.png"
                          alt="icon"
                          className="md:w-6 md:h-6 h-[14px] w-[14px]"
                        />
                        <div
                          className="md:text-[19px] md:font-medium font-archivo-regular capitalize leading-[22.4px] text-base font-normal  "
                          style={{
                            background:
                              "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          Filmography
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-between items-center m-auto px-[121px]  ">
            <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections1;
