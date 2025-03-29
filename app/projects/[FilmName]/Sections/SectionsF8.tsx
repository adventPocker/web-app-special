import React from "react";
interface propSectionsF8 {
  data: FilmData[];

}
const SectionsF8 = ({data}:propSectionsF8) => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-3">
            <div className="w-auto text-orange-200 md:text-[40px] font-medium font-ClashGrotesk-Medium md:leading-[56px] font-ClashGroteskVariable text-2xl  leading-[120%]">
              Movie Details
            </div>
            <div className="md:py-10  md:mt-10 mt-7">
              <div className="flex flex-col gap-3">
              <div className="w-full flex justify-between ">
                <div className="text-white md:text-[25px] md:font-normal md:font-archive md:leading-[37.50px] text-base font-bold leading-[119%] ">
                  Country
                </div>
                <div className="text-white md:text-[25px] md:font-thin leading-normal font-archive md:leading-[37.50px] text-base font-hairline ">
                  {data[0].attributes.Country}
                </div>
              </div>
              <div className="border border-[#4F4F4F] hidden md:block " />
              <div className="w-full flex justify-between ">
              <div className="text-white md:text-[25px] md:font-normal md:font-archive md:leading-[37.50px] text-base font-bold leading-[119%] ">
                Language 
                </div>
                <div className="text-white md:text-[25px] md:font-thin font-archive md:leading-[37.50px] text-base font-hairline leading-[119%] ">
                {data[0].attributes.Language}
                </div>
              </div>
              <div className="border border-[#4F4F4F] hidden md:block" />
              <div className="w-full flex justify-between ">
              <div className="text-white md:text-[25px] md:font-normal md:font-archive md:leading-[37.50px] text-base font-bold leading-[119%] ">
                Distribution
                </div>
                <div className="text-white md:text-[25px] md:font-thin font-archive md:leading-[37.50px] text-base font-hairline leading-[119%] ">
                {data[0].attributes.Distribution}
                </div>
              </div>
              <div className="border border-[#4F4F4F] hidden md:block" />
              <div className="w-full flex justify-between ">
              <div className="text-white md:text-[25px] md:font-normal md:font-archive md:leading-[37.50px] text-base font-bold leading-[119%] ">
                Production Company
                </div>
                <div className="text-white md:text-[25px] md:font-thin font-archive md:leading-[37.50px] text-base font-hairline leading-[119%] ">
                {data[0].attributes.ProductionsCompany}
                </div>
              </div>
              <div className="border border-[#4F4F4F] hidden md:block" />
              <div className="w-full flex justify-between ">
              <div className="text-white md:text-[25px] md:font-normal md:font-archive md:leading-[37.50px] text-base font-bold leading-[119%] ">
                Soundmix
                </div>
                <div className="text-white md:text-[25px] md:font-thin font-archive md:leading-[37.50px] text-base font-hairline leading-[119%] ">
                {data[0].attributes.Sound_MIx}
                </div>
              </div>
              <div className="border border-[#4F4F4F] hidden md:block" />
              <div className="w-full flex justify-between ">
              <div className="text-white md:text-[25px] md:font-normal md:font-archive md:leading-[37.50px] text-base font-bold leading-[119%] ">
                Aspect Ratio
                </div>
                <div className="text-white md:text-[25px] md:font-thin font-archive md:leading-[37.50px] text-base font-hairline leading-[119%] ">
                {data[0].attributes.Aspect_Ratio}
                </div>
              </div>
            
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsF8;
