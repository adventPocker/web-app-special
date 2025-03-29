import React from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "./../../../public/Image/pro.png"
export const SectionsC2 = () => {
  const gradientStyle = {
    background:
      "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
  };
  const gradientTextStyle = {
    background:
      "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <>
      <div
        className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 "
        style={gradientStyle}
      >
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:flex w-full  md:h-[523px] h-full ">
            <div className="md:w-1/2 w-full  h-full md:py-32  py-12">
              <div className="w-full h-full ">
                <div
                  className="md:text-[40px] md:font-medium font-ClashGrotesk-Medium md:leading-[56px] text-[25px] font-medium  leading-[35px]"
                  style={gradientTextStyle}
                >
                  Cinémaestro, Aashiq Abu
                </div>
                <div className="w-auto  py-9 text-white md:text-[19px] md:font-normal font-archive md:leading-[26px] text-base font-light leading-[140%]">
                  Aashiq Abu is an Indian film director, producer, actor, and
                  distributor, who works in Malayalam cinema. He is best known
                  for his films such as Daddy Cool, Salt N' Pepper, 22 Female
                  Kottayam, Idukki Gold, Mayaanadhi and Virus. Abu is often
                  known for his collaboration with screenwriters Syam Pushkaran
                  and Dileesh Nair
                </div>
                <Link href={'/company/ashiq_abu'} className="" >
                <div className="flex gap-2 duration-500     w-auto h-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="duration-500  transform transition  "
                  >
                    <g clipPath="url(#clip0_1883_744)">
                      <path
                        d="M12.7272 15.1717C12.4539 15.4451 12.4539 15.8883 12.7272 16.1616C13.0006 16.435 13.4438 16.435 13.7172 16.1616L12.7272 15.1717ZM16.8889 12L17.3839 12.495C17.6572 12.2216 17.6572 11.7784 17.3839 11.505L16.8889 12ZM13.7172 7.83836C13.4438 7.56499 13.0006 7.56499 12.7272 7.83836C12.4539 8.11173 12.4539 8.55494 12.7272 8.82831L13.7172 7.83836ZM7.11111 11.3C6.72451 11.3 6.41111 11.6134 6.41111 12C6.41111 12.3866 6.72451 12.7 7.11111 12.7V11.3ZM23.7 12C23.7 5.53827 18.4617 0.3 12 0.3V1.7C17.6885 1.7 22.3 6.31147 22.3 12H23.7ZM12 0.3C5.53827 0.3 0.3 5.53827 0.3 12H1.7C1.7 6.31147 6.31147 1.7 12 1.7V0.3ZM0.3 12C0.3 18.4617 5.53827 23.7 12 23.7V22.3C6.31147 22.3 1.7 17.6885 1.7 12H0.3ZM12 23.7C18.4617 23.7 23.7 18.4617 23.7 12H22.3C22.3 17.6885 17.6885 22.3 12 22.3V23.7ZM13.7172 16.1616L17.3839 12.495L16.3939 11.505L12.7272 15.1717L13.7172 16.1616ZM17.3839 11.505L13.7172 7.83836L12.7272 8.82831L16.3939 12.495L17.3839 11.505ZM16.8889 11.3L7.11111 11.3V12.7L16.8889 12.7V11.3Z"
                        fill="url(#paint0_linear_1883_744)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1883_744"
                        x1="12"
                        y1="1"
                        x2="-1.51913"
                        y2="9.21963"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFDAA9" />
                        <stop offset="1" stopColor="#FDB478" />
                      </linearGradient>
                      <clipPath id="clip0_1883_744">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div
                    className="font-archive text-base font-normal tracking-normal leading-relaxed"
                    style={{
                      background:
                        "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Filmography
                  </div>
                </div>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 h-full">
              <div className="w-full h-full  md:relative">
                <Image
                  src={Profile}
                  alt="ashiq abu profile image"
                  width={1000}
                  height={1000}
                   loading="eager"
                  className="w-auto h-auto md:absolute bottom-0 left-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
