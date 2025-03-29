import React from "react";
interface AwardsCardprops {
  awardsData : Awardss
}

const AwardsCards = ({awardsData}:AwardsCardprops) => {
  return (
    <>
      <div className="md:flex border-b-1 pb-10 pt-5 ">
        <div className="md:w-1/3  h-auto">
          <div className="font-archive font-light text-[24px] leading-[32px] text-white ">
          {awardsData.Year}
          </div>
          <div
            className="text-[24px] font-ClashGrotesk-Medium font-medium leading-[32px]"
            style={{
              background:
                "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {awardsData.Film_Title}
          </div>
        </div>
        <div className="md:w-1/3  h-auto">
          {awardsData.Details?.map((data:AwardDetails,index:number)=>(
          <div className="text-[24px] font-ClashGrotesk-Medium font-medium leading-[44px] text-white " key={index}>
          {data.AwardTitle}
          </div>
          ))}
        </div>
        <div className="md:w-1/3  ">
        {awardsData.Details?.map((data:AwardDetails,index:number)=>(
          <div className="text-[24px] font-ClashGrotesk-Medium font-medium leading-[44px] text-white" key={index}>
          {data.AwardRecipient}
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AwardsCards;
