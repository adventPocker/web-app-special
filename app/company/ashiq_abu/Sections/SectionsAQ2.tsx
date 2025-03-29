import React from "react";
import Image from "next/image";
interface SectionsAQ2props {
  biography: string;
  imgSrc: string;
}
const SectionsAQ2 = ({ biography, imgSrc }: SectionsAQ2props) => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="py-40">
            <div className="lg:flex justify-normal lg:gap-14 w-full h-full">
              <div>
                <Image
                  src={`${imgSrc}`}
                  alt=""
                  loading="lazy"
                  className="md:max-w-[460px] md:w-[460px] h-full md:h-[445px] max-h-[445px] bg-zinc-300 rounded-3xl object-cover"
                  width={445}
                  height={460}
                />
              </div>
              <div className="py-12">
                <div className="">
                  <div className="lg:max-w-[751px] text-white text-[19px] font-bold font-archive leading-relaxed">
                    Biography
                  </div>
                  <div className="w-auto mt-4 h-auto text-zinc-400 md:text-[19px] text-[16px] font-normal font-archive leading-[26.6px] ">
                    {biography}
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

export default SectionsAQ2;
