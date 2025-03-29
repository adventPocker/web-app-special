"use client";
import { motion } from "framer-motion";
import AwardsCards from "./AwardsCards";
import Image from "next/image";
interface BannerSliderProp {
  awardsData: awardsData;
}
const BannerSlider = ({ awardsData }: BannerSliderProp) => {
  const divStyles = {
    background: ` linear-gradient(243deg, rgba(0, 0, 0, 0.00) 0%, #222831 100%)`,
  };

  return (
    <>
      <main className=" min-h-[100vh] h-full w-full  min-w-[100%] relative">
        <Image
          src={`${awardsData.attributes.ImageThumb.data[0].attributes.url}`}
          alt="slide"
          width={10000}
          height={10000}
          loading="eager"
          className="object-cover absolute top-0 min-h-[100vh] w-[100vw] h-full sm:h-[600px] md:min-h-screen"
        />
        <div
          className="items-center w-full flex flex-col px-5 max-md:px-5 h-[100vh] sm:h-[600px] bottom-0 bg-opacity-5 md:min-h-screen relative"
          style={divStyles}
        >
          <div className="w-full max-w-[1204px] max-md:max-w-full max-md:my-10 h-full relative">
            <motion.div
              className="absolute w-full bottom-[75px] pt-[14vh] "
              initial={{ opacity: 0 }} // Initial animation properties
              animate={{ opacity: 1 }} // Animation properties to transition to
              transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
            >
              {" "}
              <div className="text-gray-300 md:w-[180px] md:text-left  font-archive md:text-[16px] md:font-thin md:leading-[123%] md:tracking-[0.32px] text-center  text-base font-light  leading-tight tracking-tigh">
                {awardsData.attributes.Sponser[0].AwardSponser}
              </div>
              <div
                className="font-ClashGrotesk-Medium md:text-[78px] font-medium md:leading-[120%] md:py-[0.97vh] md:text-left text-center text-orange-200 text-[58px]  leading-[69.60px]"
                style={{
                  background:
                    "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {awardsData.attributes.movieName}
              </div>
              <div className="text-white  md:text-left font-archive md:text-[22px] font-medium md:leading-[26.4px] text-center text-base  leading-tight">
                Directed by {awardsData.attributes.Director}
              </div>
              <div className="md:mt-[4.88vh] mt-[6.15vh]">
                <div className="md:flex gap-14 justify-between ">
                  <div className=" border-y border-white border-opacity-10  md:py-[3.9vh]  py-5">
                    <div className="flex gap-14 md:justify-start md:items-start   items-center justify-center">
                      <AwardsCards
                        data={awardsData.attributes.Sponser[0]?.Details[0]}
                      />
                      <div className="md:block hidden">
                        {awardsData.attributes.Sponser[1]?.Details[1] && (
                          <AwardsCards
                            data={awardsData.attributes.Sponser[1]?.Details[1]}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center md:hidden ">
                <button className="flex justify-center md:mt-[3.8vh] mt-[15vh] items-center  rounded-xl gap-3 w-[177px] h-10 px-5 py-2 gradient-button   hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400">
                  <img
                    src="/Image/Play2.svg"
                    alt="no image"
                    className="w-6 h-6"
                  />
                  <span className="text-center text-white text-sm font-medium font-archive capitalize leading-tight tracking-tight">
                    Watch Trailer
                  </span>
                </button>
              </div>
              <a
                href={`${awardsData.attributes.IMD_rating}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="md:flex hidden justify-center md:mt-[3.8vh] mt-[232px] items-center  rounded-xl gap-3 h-12 px-5 py-2 gradient-button   hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400"
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
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BannerSlider;
