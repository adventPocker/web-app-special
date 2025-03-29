import React from "react";
import AwardsCards from "../Elements/AwardsCards";
interface SectionsAQ4props {
  data: Awardss[];
}

const SectionsAQ4 = ({ data }: SectionsAQ4props) => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="pb-40">
            <div
              className=" md:text-5xl font-medium  font-ClashGrotesk-Medium leading-[67.20px]  text-[25px]"
              style={{
                background:
                  "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Awards
            </div>
            <div className="mt-[60px] ">
              {data.map((data: Awardss, index: number) => (
                <AwardsCards key={index} awardsData={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsAQ4;
