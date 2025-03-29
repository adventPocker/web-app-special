import React from "react";
interface propFilmReview{
  Reviewer?:string;
  ReviewContent?:string;
}
const FilmReview = ({Reviewer,ReviewContent}:propFilmReview) => {
  return (
    <>
      {" "}
      <div className="flex flex-col justify-center items-center duration-500  transform transition hover:scale-95 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
         
          className="w-[20px] h-[15px] md:h-[22px] md:w-[26px]"
          viewBox="0 0 20 15"
          fill="none"
        >
          <path
            d="M8.6093 1.06953L7.91989 0C3.14996 3.23513 0.5 7.16588 0.5 10.401C0.5 13.5292 2.77939 15 4.71365 15C7.15161 15 8.87387 12.914 8.87387 10.7219C8.87387 8.87713 7.70789 7.29936 6.1442 6.71068C5.69392 6.54983 5.26993 6.41635 5.26993 5.64115C5.26993 4.65205 5.98563 3.18208 8.6093 1.06953ZM19.1294 1.06953L18.44 0C13.7227 3.23513 11.0201 7.16588 11.0201 10.401C11.0201 13.5292 13.3521 15 15.2864 15C17.7506 15 19.5 12.914 19.5 10.7219C19.5 8.87713 18.3077 7.29936 16.6906 6.71068C16.2403 6.54983 15.8426 6.41635 15.8426 5.64115C15.8426 4.65205 16.5846 3.18122 19.1286 1.06868L19.1294 1.06953Z"
            fill="white"
          />
        </svg>
        <div className="md:py-7 py-6 md:w-1/2">
          <div className=" text-orange-200 md:text-[28px] pb-3 md:leading-[39.2px] md:font-medium  text-center font-ClashGrotesk-Medium  text-[22px] leading-[26px] font-medium tracking-[0.22px]">
          {ReviewContent}
          </div>
          <div className="text-white  font-ClashGrotesk-Light font-light leading-[33.6px] tracking-[1.2px] md:text-[24px] text-[16px] text-center ">
          -{Reviewer}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmReview;
