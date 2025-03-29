import React from "react";
interface propsSectionF2 {
  data: FilmData[];

}
export const SectionF2 = ({data}:propsSectionF2) => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-[60px]">
          <div className="text-orange-200 md:text-[40px] font-medium font-ClashGrotesk-Medium md:leading-[56px]  text-[31px] leading-[37px] tracking-0 text-start">Project Summary</div>
            <div className="md:flex  gap-32 justify-normal mt-8 ">
              <div className="w-full min-w-[362px]   ">
                <div className="flex justify-normal ">
                  <div className="w-1/2 flex flex-col gap-4">
                    <div className="text-white md:text-2xl md:font-bold font-archive md:leading-[33.60px] md:tracking-wide text-base font-semibold leading-[119%] tracking-tighter">
                      Rating{" "}
                    </div>
                    <div className="text-white md:text-2xl md:font-bold font-archive md:leading-[33.60px] md:tracking-wide text-base font-semibold leading-[119%] tracking-tighter">
                      Run time{" "}
                    </div>
                    <div className="text-white md:text-2xl md:font-bold font-archive md:leading-[33.60px] md:tracking-wide text-base font-semibold leading-[119%] tracking-tighter">
                      Release date
                    </div>
                    <div className="text-white md:text-2xl md:font-bold font-archive md:leading-[33.60px] md:tracking-wide text-base font-semibold leading-[119%] tracking-tighter">
                      Genre{" "}
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col gap-4 md:mt-2 ">
                    <div className="text-stone-300 md:text-[22px] font-normal md:font-archive md:leading-[30.80px] md:tracking-wide font-Archivo text-base  leading-[119%] tracking-tighter">
                      : {data[0].attributes.Rating}
                    </div>
                    <div className="text-stone-300 md:text-[22px] font-normal md:font-archive md:leading-[30.80px] md:tracking-wide font-Archivo text-base  leading-[119%] tracking-tighter">
                      : {data[0].attributes.RunTime}
                    </div>
                    <div className="text-stone-300 md:text-[22px] font-normal md:font-archive md:leading-[30.80px] md:tracking-wide font-Archivo text-base  leading-[119%] tracking-tighter">
                      : {data[0].attributes.ReleaseDate}
                    </div>
                    <div className="text-stone-300 w-full md:text-[22px] font-normal md:font-archive md:leading-[30.80px] md:tracking-wide font-Archivo text-base  leading-[119%] tracking-tighter">
                      : {data[0].attributes.genere1}/  {data[0].attributes.genere2}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-8 md:mt-0 ">
                <div className="lg:w-[714px] text-zinc-400 md:text-[19px] md:font-normal font-archive md:leading-[26.6px] text-sm font-light leading-[140%] tracking-wider">
                {data[0].attributes.summary}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
