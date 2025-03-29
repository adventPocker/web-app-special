import Image from "next/image";
import React from "react";
import Link from "next/link";
interface propsFilmImageCard {
  data: CardFilm;
}
const FilmImageCard = ({ data }: propsFilmImageCard) => {
  return (
    <>
      <div className="group relative m-0 flex h-full w-full rounded-3xl hover:border md:max-w-[377px] md:min-h-[350px] ">
        <div className="z-10 h-full w-full overflow-hidden rounded-3xl relative border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <Link href={`/projects/${data.attributes.slug}`}>
            <Image
              src={`${data.attributes.CardImage.data.attributes.url}`}
              className=" md:max-w-[377px] md:min-h-[350px] md:max-h-[350px] min-h-[233px] max-h-[233px]   block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
              height={350}
              width={377}
            />
          </Link>
          <div
            className="absolute group-hover:opacity-100 opacity-0 h-full w-full rounded-3xl top-0 "
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 1.94%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          ></div>
        </div>
        <div className="absolute bottom-0 z-20 py-6 px-8 transition duration-300 ease-in-out  flex justify-between w-full h-auto rounded-b-3xl">
          <div className="   w-1/2">
            <div
              className="w-auto h-auto text-[25px] font-semibold font-archive leading-[35px]"
              style={{
                background:
                  "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {data.attributes.Title}
            </div>
            <div className="opacity-75 text-stone-200 text-[13px] font-normal font-archive leading-[18.20px] tracking-[0.039px] mt-[10px] ">
              {data.attributes.Year} / {data.attributes.genere1},
              {data.attributes.genere2}
            </div>
          </div>
          <div className=" w-1/2 h-auto relative">
            <Link
              href={`/projects/${data.attributes.slug}`}
              className="flex  h-full w-auto"
            >
              <div
                className="flex justify-center  rounded-2xl absolute bottom-0 right-0 opacity-0 w-auto py-2 px-5 gap-2 items-center duration-500 transform transition  delay-150  border group-hover:opacity-100  "
                style={{
                  border: "0.5px solid var(--L01, #FFDAA9)",
                  background:
                    "var(--white, linear-gradient(118deg, rgba(255, 255, 255, 0.02) 32.76%, rgba(255, 223, 180, 0.10) 91.01%))",
                  boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset",
                }}
              >
                <div
                  className="text-[13px] font-archive font-normal leading-[18.2px] tracking-[0.039px] opacity-75 text-[#EFEEE0]"
                  style={{
                    background:
                      "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  See More
                </div>
                <div className="max-w-[22px] max-h-[22px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                  >
                    <path
                      d="M20.3 10.9999L20.8192 11.5191L21.3369 10.9999L20.8192 10.4807L20.3 10.9999ZM19.7808 10.4807L13.9141 16.3473L14.9525 17.3857L20.8192 11.5191L19.7808 10.4807ZM20.8192 10.4807L14.9525 4.61401L13.9141 5.65241L19.7808 11.5191L20.8192 10.4807ZM20.3 10.2665L1.96665 10.2665L1.96665 11.7332L20.3 11.7332L20.3 10.2665Z"
                      fill="url(#paint0_linear_2121_506)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2121_506"
                        x1="21.3369"
                        y1="10.9999"
                        x2="17.6243"
                        y2="1.73868"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFDAA9" />
                        <stop offset="1" stop-color="#FDB478" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden py-4"></div>
    </>
  );
};

export default FilmImageCard;
