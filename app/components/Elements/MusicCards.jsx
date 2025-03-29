import Image from "next/image";
import React from "react";

const MusicCards = ({ data }) => {
  return (
    <>
      <div className="md:max-w-[260px] md:max-h-[300px] min-w-[334px] min-h-[250px] min h-full w-full ">
        <div>
          <a
            href={`${data.ExternalUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex items-center   md:w-[220px] md:h-[220px] sm:w-[220px] sm:h-[220px]  h-[230px]  w-[334px] overflow-hidden rounded-3xl">
              <Image
                src={`${data.ImgThumb.data.attributes.url}`}
                alt=""
                loading="eager"
                className="object-cover md:w-[220px] md:h-[220px] sm:w-[220px] sm:h-[220px]  h-[230px]  w-[334px] rounded-3xl "
                width={220}
                height={220}
              />

              <div
                className=" md:w-[220px] md:h-[220px] sm:w-[220px] sm:h-[220px]  h-[230px]    w-[334px]   rounded-3xl absolute flex items-center justify-center"
                style={{
                  background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 1.94%, rgba(0, 0, 0, 0.8) 100%)", 
                }}
              >
                <img src="/Image/play-2.svg" alt="" className="w-10 h-10 " />
              </div>
            </div>
          </a>
        </div>

        <div className="w-52 mt-3 text-white text-[19px] leading-[26.6px] font-normal font-archive">
          {data.Title}
        </div>
        <div className="w-52 mt-2 text-white text-opacity-50 tracking-normal  text-[13px] leading-[18.2px] font-light  font-archive whitespace-nowrap overflow-auto">
          {data.FilmName}
        </div>
      </div>
    </>
  );
};

export default MusicCards;
