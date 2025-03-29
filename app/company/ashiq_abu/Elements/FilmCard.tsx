import React from "react";

interface filmcardProps {
  data: WorkData;
}
const FilmCard = ({ data }: filmcardProps) => {
  return (
    <>
      <div
        className="hidden rounded-3xl md:flex gap-10  justify-normal max-h-[206px]  duration-500 card-73 transform transition hover:scale-105 overflow-hidden border border-transparent border-opacity-0.5  hover:border-white"
        style={{
          background:
            "linear-gradient(117.75deg, rgba(255, 255, 255, 0.02) 32.76%, rgba(255, 223, 180, 0.1) 91.01%)",
        }}
      >
        <div>
          <img
            src={`${data.Image.data.attributes.url}`}
            alt=""
            className="object-cover  md:max-w-[206px] md:w-full w-auto md:min-w-[206px] min-h-[206px] h-[206] max-h-[206px] rounded-e-[24px]"
          />
        </div>
        <div className="py-10 w-full">
          <div
            className="font-archive text-[30px] leading-[31.5px] font-medium"
            style={{
              background:
                "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
           {data.Tilte}
          </div>
          <div className="py-5 text-[26px] text-white font-ClashGrotesk-Regular font-normal leading-[27px] ">
          {data.Year}
          </div>
          <div className="font-archive text-[#9C9C9C] text-[26px] leading-[23.4px] font-light">
          IMDB : {data.Rating}
          </div>
        </div>
      </div>
      <div className="md:hidden block w-full  ">
        <div className="flex justify-between border-b-[0.5px] border-white">
          <div className="font-archive text-white text-[22px] font-light leading-[40px] ">
          {data.Year}

          </div>
          <div className="font-archive text-white text-[22px] font-medium leading-[40px] ">
          {data.Tilte}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmCard;
