import React from "react";
import StudioCard from "../Element/StudioCard";
import OurVentures from "../Element/OurVentures";
const SectionsC4 = () => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-16">
            <div
              className=" md:text-5xl font-medium font-ClashGrotesk-Medium leading-[67.20px] md:text-center text-[25px]"
              style={{
                background:
                  "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Ventures
            </div>
            <div className=" md:mt-[78px] mt-[38px]">
              <OurVentures/>  
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default SectionsC4;
