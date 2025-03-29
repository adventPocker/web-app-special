import React from "react";
import Link from "next/link";
const PageNotFound = () => {
  return (
    <div className="h-full w-full bg-bg-3 bg-no-repeat bg-cover min-h-[100svh]">
      <div className="w-full  ">
        <div className="flex flex-col justify-center items-center pt-[18.26svh]">
          <div className="text-center text-white text-[22px] font-normal font-archive ">
            You mustn’t be here!
          </div>
          <div className="grid grid-cols-3 w-[25.88vw] h-[13.31vh] mt-[6.34svh]  ">
            <img src="/4.svg" alt="" className="w-full h-full" />
            <img src="/0.svg" alt="" className="w-full h-full" />
            <img src="/4.svg" alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="absolute bottom-0  flex justify-center items-center  w-full ">
          <Link href={'/'}>
          <div className="border border-white w-auto h-auto flex items-center md:rounded-[40px] rounded-[20px] px-[2.2222svw]   py-[1.5625svh]   gap-3 mb-[16svh]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="17"
                viewBox="0 0 27 17"
                fill="none"
              >
                <path
                  d="M2.69727 5.94804L21.1424 5.94804C23.4394 5.94804 25.3014 7.81009 25.3014 10.1071L25.3014 11.6327C25.3014 13.9297 23.4394 15.7917 21.1424 15.7917L6.70768 15.7917"
                  stroke="white"
                  stroke-width="2.08134"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.34375 1.57288C4.63521 3.28142 3.67729 4.23933 1.96875 5.94788L6.34375 10.3229"
                  stroke="white"
                  stroke-width="2.08134"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-center text-white md:text-xl text-base font-bold font-archive relative">
              Go Home
            </div>
          </div>
          </Link>
          
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PageNotFound;
