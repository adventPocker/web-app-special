import React from "react";

const AwardsCard = ({ awardTitle,awardSponser,Reciepent }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex h-full ">
          <div className="w-[65.26px]  flex-none ">
            <img
              src="/Image/LeafL.svg"
              alt=""
              className="w-full h-full min-h-[160px]"
            />
          </div>
          <div className="md:w-auto grow w-[200px]  h-full min-h-[160px] flex items-center justify-center px-2 py-12">
            <div>
              <div className="text-center">
                <div className="min-w-[281px] text-center text-white md:text-[23px] md:font-medium font-ClashGrotesk-Medium md:leading-loose  font-Archivo text-xs font-normal leading-[200%] " >
                  {awardSponser} 
                </div>
                <div className="min-w-[281px] text-center text-white md:text-[42px] md:font-medium font-ClashGrotesk-Medium md:leading-[58.80px] text-xl font-normal leading-[85.714%] ">
                  {Reciepent}
                </div>

                <div className="min-w-[281px] text-center text-white md:text-[23px] font-thin font-archive leading-[32.3px]   text-base  ">
                 {awardTitle}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65.26px]  flex-none ">
            <img
              src="/Image/LeafR.svg"
              alt=""
              className="w-full h-full min-h-[160px]"
            />
          </div>
        </div>
        <div className="py-1"></div>
      </div>
    </>
  );
};

export default AwardsCard;
