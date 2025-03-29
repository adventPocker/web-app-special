import Image from "next/image";
import React from "react";
import Link from "next/link";
const FilmsCards = ({ data }) => {
  return (
    <>
      <div className="w-full h-full ">
        <div className="w-full h-full md:py-20 pt-6 pb-8">
          <div
            className=" w-full h-full md:rounded-[80px] rounded-[30px] md:p-10 p-6  "
            style={{
              background:
                "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)",
              color: "#000000",
            }}
          >
            <div className="md:flex md:gap-20 md:justify-start  md:min-h-[214px] ">
              <div className=" h-full ">
                <div className="relative flex items-center justify-center md:rounded-[80px]  rounded-[20px] object-cover o w-full h-full min-h-[214px] max-h-[214.813px]  min-w-[274px] md:min-w-[440px] md:min-h-[400px] overflow-hidden ">
                  {data ? (
                    <Link href={`/projects/${data?.attributes.slug}`}>
                      <Image
                        src={`${data?.attributes.CardImage.data.attributes.url}`}
                        alt=""
                        className=" md:rounded-[80px] rounded-[20px] object-cover min-h-[214px] max-h-[214.813px] min-w-[440px] md:max-w-[440px] md:min-h-[400px] duration-500 transform transition hover:scale-110"
                        height={214}
                        loading="eager"
                        width={274}
                      />
                    </Link>
                  ) : (
                    <div className="bg-gray-700 animate-pulse md:rounded-[80px] rounded-[40px] object-cover min-h-[214px] min-w-[274px] w-full h-full md:min-w-[440px] md:max-w-[440px] md:min-h-[400px]   " />
                  )}
                </div>
              </div>

              <div className="md:py-16 mt-2 md:mt-0 px-3 md:px-0 h-auto w-full md:max-w-[600px]">
                <div className="text-gray-800 text-[28px] md:leading-[46.2px]  font-medium font-lato md:text-[33px]  md:font-ClashGrotesk-Medium text-base  font-archive leading-snug tracking-tight">
                  {data?.attributes.Title}
                </div>
                <div className="text-zinc-600 mt-2 text-[10px] md:hidden font-extralight font-archive leading-[14px]">
                  {data?.attributes.Year} {data?.attributes.genere1}/
                  {data?.attributes.genere2} {data?.attributes.RunTime}
                </div>
                <div className="w-auto hidden h-11 py-2.5 justify-center items-center gap-2.5 md:inline-flex">
                  <div className="text-stone-900 text-[16px] font-bold font-archivo-bold capitalize leading-[22.4px]">
                    {data?.attributes.Year}
                  </div>
                  <div className="w-[5px] h-[5px] bg-stone-900 rounded-full" />
                  <div className="text-stone-900 text-[16px] font-bold font-archivo-bold capitalize leading-[22.4px]">
                    {data?.attributes.genere1}/{data?.attributes.genere2}
                  </div>
                  <div className="w-[5px] h-[5px] bg-stone-900 rounded-full" />
                  <div className="text-stone-900 text-[16px] font-bold font-archivo-bold capitalize leading-[22.4px]">
                    {data?.attributes.RunTime}{" "}
                  </div>
                </div>
                <div className="md:mt-3 mt-2">
                  <div className="w-full h-full md:text-zinc-900 md:text-[16px] md:tracking-[0.048px]  font-archive md:leading-[22.4px] text-neutral-600 text-[12px]  font-normal  leading-[16.8px">
                    <div
                      className="md:hidden "
                      dangerouslySetInnerHTML={{
                        __html:
                          data?.attributes.FIlmContent.length > 130
                            ? `${data.attributes.FIlmContent.slice(0, 130)}...`
                            : data?.attributes.FIlmContent,
                      }}
                    />{" "}
                    <div
                      className="hidden md:block"
                      dangerouslySetInnerHTML={{
                        __html:
                          data?.attributes.FIlmContent.length > 200
                            ? `${data.attributes.FIlmContent.slice(0, 200)}...`
                            : data?.attributes.FIlmContent,
                      }}
                    />{" "}
                  </div>
                </div>
                <div className="lg:flex hidden gap-6 mt-7 items-center">
                  <a
                    href={`${data?.attributes.Trailer_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block "
                  >
                    <button className="h-12 w-auto px-5 py-3  rounded-[20px] gap-3 btn_home_fcard">
                      <div className="flex justify-center items-center gap-3 ">
                        {" "}
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 10.0058C0 4.48625 4.48842 0 10 0C15.5116 0 20 4.48625 20 10.0058C20 15.5137 15.5116 20 10 20C4.48842 20 0 15.5137 0 10.0058ZM13.668 11.0178C13.7741 10.9117 13.9093 10.7477 13.9382 10.7091C14.0927 10.5065 14.1699 10.2557 14.1699 10.0058C14.1699 9.72504 14.083 9.46454 13.9189 9.25229C13.9055 9.23885 13.8791 9.21019 13.8448 9.17284C13.7806 9.10296 13.6885 9.00264 13.6004 8.91462C12.8089 8.06561 10.7432 6.67631 9.66216 6.25181C9.49807 6.18524 9.08301 6.03956 8.861 6.02991C8.64865 6.02991 8.44595 6.07815 8.2529 6.17463C8.01158 6.3097 7.81853 6.52195 7.71236 6.77279C7.64479 6.94645 7.53861 7.46744 7.53861 7.47709C7.43243 8.04631 7.37452 8.9725 7.37452 9.99518C7.37452 10.9706 7.43243 11.8572 7.51931 12.4361C7.52169 12.4385 7.53 12.4799 7.5429 12.5442C7.58211 12.7397 7.6638 13.1471 7.75097 13.314C7.96332 13.7192 8.37838 13.9701 8.82239 13.9701H8.861C9.15058 13.9604 9.75869 13.7096 9.75869 13.7C10.7819 13.2754 12.7992 11.9537 13.61 11.0757L13.668 11.0178Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <div className="text-white text-[19px] font-normal font-archivo-regular  leading-[26.6px]">
                          Watch Trailer
                        </div>{" "}
                      </div>
                    </button>
                  </a>

                  <Link href={`/projects/${data?.attributes.slug}`}>
                    <button className="w-[136px] h-[49px] py-4 rounded-xl flex justify-end items-center gap-3 ">
                      <img
                        src="/Image/arrow-1.svg"
                        className="w-6 h-6 relative"
                      />
                      <div className="text-stone-900 text-[19px] font-archivo-regular  leading-[26.6px]">
                        ReadMore
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmsCards;
