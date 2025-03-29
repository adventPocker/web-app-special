"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Disable body scrolling when the modal is open
    document.body.style.overflowY = toggle ? "hidden" : "auto";

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [toggle]);

  return (
    <>
      <div
        className={
          toggle
            ? "fixed md:hidden top-0 right-0 w-full  h-screen sm:h-[200svh] overflow-visible 5 z-10 duration-500"
            : "fixed md:hidden top-0 right-[-100%] w-full h-screen  z-10 duration-500"
        }
        style={{
          background:
            "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
        }}
      >
        <div className="flex justify-end p-4">
          <img onClick={() => setToggle(!toggle)} src="/Image/001.svg" alt="" />
        </div>

        {/* Navbar Links */}

        <div className="flex flex-col items-start px-5 mt-[20px] sm:mt-0 gap-[18px] sm:gap-2">
          <Link
            href="/"
            className="text-white  hover:text-gray-300 text-[24px] font-archive font-extrabold leading-[33.6px]"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-white  hover:text-gray-300 text-[24px] font-archive font-extrabold leading-[33.6px]"
          >
            Projects
          </Link>
          <Link
            href="/awards"
            className="text-white  hover:text-gray-300 text-[24px] font-archive font-extrabold leading-[33.6px]"
          >
            Awards
          </Link>
          <Link
            href="/company"
            className="text-white  hover:text-gray-300 text-[24px] font-archive font-extrabold leading-[33.6px]"
          >
            Company
          </Link>

          <div
            className="font-ClashGrotesk-Medium text-[24px] font-semibold leading-[33.6px]  mt-[45px] sm:mt-0"
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
            className="w-auto rounded-[12px] mt-[18px] sm:mt-0 backdrop-blur-md py-2 px-5 flex gap-3"
            style={{ border: "1px solid #FFDAA9" }}
          >
            <div className=" text-white font-archive text-[16px] font-medium leading-[22.2px] tracking-[0.32px] ">
              Get in touch
            </div>
            <div>
              <img src="/Image/getIntouch.svg" alt="" />
            </div>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="18"
            viewBox="0 0 158 18"
            fill="none"
            className="mt-[28px]  sm:mt-0"
          >
            <Link href={""}>
              <path
                d="M5.54475 16.4534V8.96042H8.07257L8.44832 6.02668H5.54475V4.15802C5.54475 3.31145 5.78062 2.73183 6.99562 2.73183H8.53517V0.116243C7.78642 0.0357917 7.03311 -0.00260556 6.27979 0.000137099C4.04543 0.000137099 2.51137 1.36416 2.51137 3.86821V6.0212H0V8.95494H2.51685V16.4534H5.54475Z"
                fill="white"
              />
            </Link>
            <Link href={""}>
              <path
                d="M103.908 5.21106C103.922 5.39144 103.922 5.5708 103.922 5.75016C103.922 11.2391 99.7439 17.564 92.1089 17.564C89.7566 17.564 87.5713 16.8826 85.7324 15.6993C86.0664 15.7374 86.388 15.7508 86.7354 15.7508C88.6763 15.7508 90.4627 15.0952 91.8903 13.9768C90.0648 13.9387 88.5351 12.743 88.0074 11.0979C88.264 11.136 88.5217 11.1618 88.7918 11.1618C89.1639 11.1618 89.5381 11.1102 89.8855 11.0206C87.9816 10.635 86.556 8.96414 86.556 6.94587V6.89433C87.1096 7.20253 87.7517 7.39529 88.432 7.42106C87.3136 6.67683 86.5808 5.40381 86.5808 3.96381C86.5808 3.19278 86.7859 2.48566 87.1456 1.86925C89.1897 4.38746 92.2624 6.03362 95.7073 6.21401C95.6434 5.90477 95.6042 5.5842 95.6042 5.2626C95.6042 2.97425 97.4555 1.1106 99.7562 1.1106C100.952 1.1106 102.031 1.61156 102.79 2.42175C103.728 2.24137 104.627 1.89399 105.425 1.4188C105.116 2.38258 104.46 3.19278 103.599 3.70714C104.435 3.61643 105.245 3.38554 105.989 3.06393C105.425 3.8865 104.718 4.61939 103.908 5.21106Z"
                fill="white"
              />
            </Link>
            <Link href={""}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.1215 0.000244141H41.8948C39.6327 0.000244141 37.7815 1.85063 37.7815 4.11359V12.3403C37.7815 14.6024 39.6327 16.4536 41.8948 16.4536H50.1215C52.3837 16.4536 54.2349 14.6024 54.2349 12.3403V4.11359C54.2349 1.85063 52.3837 0.000244141 50.1215 0.000244141ZM46.0081 11.6549C44.1147 11.6549 42.5802 10.1198 42.5802 8.22721C42.5802 6.33383 44.1147 4.79935 46.0081 4.79935C47.9006 4.79935 49.4359 6.33383 49.4359 8.22721C49.4359 10.1198 47.9006 11.6549 46.0081 11.6549ZM49.4365 3.77079C49.4365 4.33864 49.8963 4.79913 50.4648 4.79913C51.0333 4.79913 51.4931 4.33864 51.4931 3.77079C51.4931 3.20294 51.0333 2.74245 50.4648 2.74245C49.8963 2.74245 49.4365 3.20294 49.4365 3.77079Z"
                fill="white"
              />
            </Link>
            <Link href={""}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M155.593 1.86148C156.596 1.99213 157.554 2.96736 157.676 3.9844C158.108 7.71171 158.108 11.3261 157.676 15.0522C157.554 16.0693 156.596 17.0457 155.593 17.1752C149.478 17.935 143.294 17.935 137.181 17.1752C136.178 17.0454 135.219 16.0693 135.097 15.0522C134.666 11.3258 134.666 7.71171 135.097 3.9844C135.219 2.96736 136.178 1.99184 137.181 1.86148C143.294 1.10167 149.478 1.10167 155.593 1.86148ZM144.451 5.64782V13.3899L150.257 9.51899L144.451 5.64782Z"
                fill="white"
              />
            </Link>
          </svg>
        </div>
      </div>

      <div className="w-full h-auto pt-[4.9805vh] flex justify-between items-center m-auto  ">
        <div className="md:block hidden">
          <Link href="/">
            <Image
              src="/LOGO.svg"
              alt="Vercel Logo"
              className=""
              width={126}
              height={51}
              priority
            />
          </Link>
        </div>
        <div className="md:hidden ">
          <Link href="/">
            <Image
              src="/LOGO.svg"
              alt="Vercel Logo"
              className="relative"
              width={126}
              height={51}
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex w-auto">
          <ul className="flex gap-12 text-white items-center w-full h-auto">
            <li className="">
              <Link href={"/"}>
                <div className="text-white  font-archive text-[16px] font-normal leading-[22.4px] tracking-[0.048px] hover:font-bold ">
                  HOME
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/projects"}>
                <div className="text-white  font-archive text-[16px] font-normal leading-[22.4px] tracking-[0.048px] hover:font-bold ">
                  PROJECT
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/awards"}>
                <div className="text-white  font-archive text-[16px] font-normal leading-[22.4px] tracking-[0.048px] hover:font-bold ">
                  AWARDS
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/company"}>
                <div className="text-white  font-archive text-[16px] font-normal leading-[22.4px] tracking-[0.048px] hover:font-bold ">
                  COMPANY
                </div>
              </Link>
            </li>
            <li className="">
              <Link href={"/contacts"}>
                <button
                  className="w-[125px] h-[44px] px-4 py-3  text-center rounded-[12px] gap-[12px]  bg-[linear-gradient(239deg,#FFDAA9_31.09%,#FDB478_83.44%)] text-[#16181E] font-lato text-sm
               font-bold leading-5 transition-all duration-300 hover:from-amber-500 hover:to-orange-700 hover:text-white"
                >
                  CONTACT US
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="w-14 h-14 relative focus:outline-none   rounded duration-500"
            onClick={() => setToggle(!toggle)}
          >
            <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                  toggle ? "rotate-45" : " -translate-y-1.5"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                  toggle ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                  toggle ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
