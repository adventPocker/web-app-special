import React from "react";
import { Icon } from "../Element/Icon";
import Image from "next/image";
import StatsSection from "../Element/slidermeterics";

const SectionsC3 = () => {
  const backgroundGradient = {
    background:
      "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-20">
            <div className="md:flex gap-9 ">
              <div className="w-full  ">
                <div
                  className=" md:text-5xl font-medium font-ClashGrotesk-Medium md:leading-[67.20px] text-[25px] leading-[140%] "
                  style={{
                    background:
                      "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About OPM Cinemas
                </div>

                <div className="w-full text-[#A1A0A0] font-archive text-base font-normal tracking-normal leading-relaxed mt-9">
                  OPM Cinemas, established by filmmaker Aashiq Abu in 2012, is a
                  production company engaged in films, television, and
                  advertising. The company produces content across various
                  genres, focusing on authentic storytelling that reflects local
                  culture while appealing to wider audiences. Under its banner,
                  OPM Dream Mill Cinemas serves as a platform to mentor,
                  support, and promote emerging talent in the field of
                  filmmaking, ensuring the development of new voices in cinema.
                </div>
              </div>

              <div className="md:min-w-[472px] h-full md:order-first md:mt-0 mt-9">
                <Image
                  src="/company/profile-image-02.png"
                  alt="ashiq abu profile image"
                  className="md:w-[472px] md:h-[542px] h-auto w-auto rounded-3xl object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <StatsSection />
          </div>
          <div className="flex justify-between items-center m-auto md:px-[121px]   ">
            <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsC3;
