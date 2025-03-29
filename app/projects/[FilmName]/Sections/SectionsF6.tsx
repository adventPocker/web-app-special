import React from "react";
import AwardsLayout from "./../Elements/AwardsLayout";
interface  PropsSectionsF6 {
awardData:Award[]
}
const SectionsF6 = ({awardData}:PropsSectionsF6) => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-10">
            <div className="font-ClashGrotesk-Medium font-medium md:text-[40px] text-orange-200  text-2xl  leading-[120%]">
              Awards
            </div>
            <div
              className="py-[45px] md:rounded-3xl mt-8"
              style={{
                background:
                  "linear-gradient(117.75deg, rgba(255, 255, 255, 0.02) 32.76%, rgba(255, 223, 180, 0.1) 91.01%)",
              }}
            >
              <AwardsLayout awardData={awardData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsF6;
