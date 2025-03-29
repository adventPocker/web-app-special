import Navbar from "@/app/components/GlobalELements/Navbar";
import React from "react";
import Image from "next/image";

const SectionsP1 = () => {
  const divStyles = {
    background: `
                  linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
                  linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
                  radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
                `,
  };
  return (
    <>
      <main className=" h-[100vh]  min-w-[100%]">
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%" }}
          className="w-full object-cover object-center absolute overflow-hidden top-0"
        >
          <source src="/Videos/vid-1.mp4" />
        </video>
        <div
          className="items-center w-full flex  flex-col  px-5 max-md:px-5  h-[100vh] relative"
          style={divStyles}
        >
          <div className="w-full max-w-[1224px]  max-md:max-w-full max-md:my-10  relative h-full">
            <Navbar />
            <div className="w-full h-auto  md:absolute md:bottom-8  pt-[76px]  sm:pt-[45px]">
              <div className=" w-full h-full  ">
                <div>
                  <div className="text-orange-200 md:text-center font-ClashGrotesk-Medium md:text-[48px] font-medium md:leading-[57.6px] text-[31px] leading-[120%]">
                    A Film Production Company In Kerala
                    <br />
                    Sharing Stories Of Our Relevant Works
                  </div>
                  <div className="lg:mt-[1.7vh] mt-[280px] sm:mt-10  flex flex-col lg:justify-center sm:items-center ">
                    <a
                      href="https://www.youtube.com/@OPMRecords"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex justify-center items-center rounded-xl gap-1 w-[169px] h-[49px] gradient-button  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400 ">
                        <Image
                          src="/Image/Play2.svg"
                          alt="no image"
                          width={24}
                          height={24}
                        />
                        <span className="text-white">Showreel</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionsP1;
