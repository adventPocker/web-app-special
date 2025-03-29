import Image from "next/image";
import React from "react";
type propUpcoming = {
  image: string;
};

const UpcomingCard = ({ image }: propUpcoming) => {
  const containerStyle = {
    background: "linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%)",
  };
  return (
    <>
      <div className="md:px-3 sm:px-3 group ">
        <div className=" border-2 transform transition duration-500 delay-200 border-transparent hover:border-white rounded-3xl md:rounded-[80px] overflow-hidden ">
          <div className="relative w-full h-full ">
            <Image
              src={`/Image/${image}`}
              alt="img1"
              className="md:rounded-[80px]  rounded-[24px] object-cover md:min-h-[350px] max-h-[234px] min-h-[234px]   min-w-[302px] h-auto  w-full  transform transition duration-500 delay-100 group-hover:scale-125 "
              loading="eager"
              width={850}
              height={350}
            />
            <div className=" w-full h-full bg-opacity-25 bg-black md:py-11 md:px-12 p-5  absolute transform transition duration-500 delay-100 inset-0 rounded-3xl md:rounded-[80px] ">
              <div className="w-full h-full  relative ">
                <div className="absolute top-0  flex items-end justify-end   w-full  h-auto">
                  <div className="flex justify-normal gap-2 py-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2322_918)">
                        <path
                          d="M12.7272 15.6717C12.4539 15.9451 12.4539 16.3883 12.7272 16.6616C13.0006 16.935 13.4438 16.935 13.7172 16.6616L12.7272 15.6717ZM16.8889 12.5L17.3839 12.995C17.6572 12.7216 17.6572 12.2784 17.3839 12.005L16.8889 12.5ZM13.7172 8.33836C13.4438 8.06499 13.0006 8.06499 12.7272 8.33836C12.4539 8.61173 12.4539 9.05494 12.7272 9.32831L13.7172 8.33836ZM7.11111 11.8C6.72451 11.8 6.41111 12.1134 6.41111 12.5C6.41111 12.8866 6.72451 13.2 7.11111 13.2V11.8ZM23.7 12.5C23.7 6.03827 18.4617 0.8 12 0.8V2.2C17.6885 2.2 22.3 6.81147 22.3 12.5H23.7ZM12 0.8C5.53827 0.8 0.3 6.03827 0.3 12.5H1.7C1.7 6.81147 6.31147 2.2 12 2.2V0.8ZM0.3 12.5C0.3 18.9617 5.53827 24.2 12 24.2V22.8C6.31147 22.8 1.7 18.1885 1.7 12.5H0.3ZM12 24.2C18.4617 24.2 23.7 18.9617 23.7 12.5H22.3C22.3 18.1885 17.6885 22.8 12 22.8V24.2ZM13.7172 16.6616L17.3839 12.995L16.3939 12.005L12.7272 15.6717L13.7172 16.6616ZM17.3839 12.005L13.7172 8.33836L12.7272 9.32831L16.3939 12.995L17.3839 12.005ZM16.8889 11.8L7.11111 11.8V13.2L16.8889 13.2V11.8Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2322_918">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-[19px] font-archive font-normal leading-[26.6px] text-white ">
                      Watch Trailer
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full  h-auto">
                  <img
                    src="/Image/upcom_1.svg"
                    alt=""
                    className="md:max-w-[267px] md:max-h-[104px] max-w-[109px] max-h-[41px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4"></div>
    </>
  );
};

export default UpcomingCard;
