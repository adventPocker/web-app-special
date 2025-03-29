"use client";
import React, { useState } from "react";
import Link from "next/link";
const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
    color: "white",
  };
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribeClick = () => {
    // Email validation regex
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
      alert("Invalid email address! Please enter a valid email.");
    }
  };
  return (
    <>
      <div
        className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 "
        style={footerStyle}
      >
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="py-20">
            <div className="md:flex justify-between h-full w-full">
              <div className="h-full  md:w-1/2 w-full flex flex-col justify-center items-center md:items-start">
                <img
                  src="/LOGO1.svg"
                  alt=""
                  className="w-[105px] h-[39.30px] object-cover"
                />
                <div
                  className="font-ClashGrotesk-Medium text-[24px] font-semibold leading-[33.6px] mt-[29px] md:hidden block text-center"
                  style={{
                    background:
                      "linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Let’s Craft <br />
                  Brilliance Together !
                </div>
                <button
                  className="w-auto rounded-[12px] mt-[18px] sm:mt-0 backdrop-blur-md py-2 px-5  flex gap-3 md:hidden "
                  style={{ border: "1px solid #FFDAA9" }}
                >
                  <div className=" text-white font-archive text-[16px] font-medium leading-[22.2px] tracking-[0.32px] ">
                    Get in touch
                  </div>
                  <div>
                    <img src="/Image/getIntouch.svg" alt="" />
                  </div>
                </button>
                <div className="py-9 md:block hidden">
                  <div className="text-white hidden md:block text-[28px] font-medium font-ClashGrotesk-Medium leading-[39.20px]">
                    Work with us
                  </div>

                  <div className="text-white font-Archivo md:text-base md:block hidden font-light md:leading-8 md:tracking-wider md:text-left font-Archivo text-xs  leading-5 tracking-normal text-center">
                    Door no 38/1366, Punnakkaparambu Adarsh Lane, <br />
                    Pipe Line Road , Thrikkakkara <br />
                    P.O KOCHI Ernakulam KL 682021 IN
                  </div>
                </div>
                <div className="flex gap-8 justify-normal md:mt-0 mt-[37px]">
                  <img
                    src="/Image/iconF-3.svg"
                    alt=""
                    className="md:w-[18px] md:h-[18px] w-full h-[13.31px] object-fill"
                  />
                  <img
                    src="/Image/iconF-1.svg"
                    alt=""
                    className="md:w-[18px] md:h-[18px] w-full h-[13.31px] object-fill"
                  />
                  <img
                    src="/Image/iconF-4.svg"
                    alt=""
                    className="md:w-[18px] md:h-[18px] w-full h-[13.31px] object-fill"
                  />
                  <img
                    src="/Image/iconF-2.svg"
                    alt=""
                    className="md:w-[18px] md:h-[18px] w-full h-[13.31px] object-fill"
                  />
                </div>
              </div>
              <div className="h-full  md:w-1/2 w-full md:block hidden">
                <div className="md:flex justify-normal  md:items-start items-center hidden ">
                  <div className="w-1/2 h-full">
                    <div className="text-white text-[28px] font-medium font-ClashGrotesk-Medium leading-[39.20px]">
                      Navigate
                    </div>
                    <div className="py-7 grid grid-cols-2 gap-8">
                      <Link href={"/"}>
                        <div className="font-Archivo text-base font-light leading-6 tracking-tight md:text-left hover:cursor-pointer">
                          Home
                        </div>
                      </Link>
                      <Link href="/awards">
                        <div className="text-white font-Archivo text-base font-light leading-6 tracking-tight text-left hover:cursor-pointer">
                          Awards
                        </div>
                      </Link>
                      <Link href="/projects">
                        <div className="text-white font-Archivo text-base font-light leading-6 tracking-tight text-left hover:cursor-pointer">
                          Project
                        </div>
                      </Link>
                      <Link href="/company">
                        <div className="text-white font-Archivo text-base font-light leading-6 tracking-tight text-left hover:cursor-pointer">
                          Company
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="w-[81px] mt-20 h-[0px] hidden md:block origin-top-left rotate-90 border border-rose-400"></div>
                  <div className="w-1/2 h-full ">
                    <div className="text-white text-[28px] font-medium font-ClashGrotesk-Medium leading-[39.20px]">
                      Contact us
                    </div>
                    <div className="py-7 grid grid-cols-2 gap-8">
                      <div className="text-white font-Archivo text-base font-light leading-6 tracking-tight text-left">
                        Cinemas
                      </div>
                      <div className="text-white font-Archivo text-base font-light leading-6 tracking-tight text-left">
                        Distributions
                      </div>
                      <div className="text-white font-Archivo text-base font-light leading-6 tracking-tight text-left">
                        Records
                      </div>
                      <div className="text-white font-Archivo text-base font-light leading-6 tracking-tight text-left">
                        Contact us
                      </div>
                    </div>
                  </div>
                </div>

                <form className="w-full mt-[24px] hidden md:flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={`bg-white text-black md:h-[61px]   px-4 h-8 w-full md:rounded-l-[18px] ${isValidEmail ? "" : "border-red-500"
                      }`}
                    value={email}
                    onChange={handleInputChange}
                  />
                  <div
                    className="w-36 md:h-[61px] h-8 bg-gradient-to-bl from-orange-200 to-orange-300 md:rounded-tr-[17px] rounded-r-lg md:rounded-br-[18px] flex flex-col justify-center items-center"
                    onClick={handleSubscribeClick}
                  >
                    <div className="text-white font-Archivo md:text-base md:leading-6 md:tracking-tight md:text-left text-xs font-bold leading-5 tracking-normal text-center">
                      Subscribe
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
