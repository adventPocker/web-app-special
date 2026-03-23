"use client";
import Image from "next/image";
interface BannerSliderProp {
  awardsData: heroData;
}
const HeroBannerSlider = ({ awardsData }: BannerSliderProp) => {

  const divStyles = {
    background: `
                  linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
                  linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
                  radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
                `,
  };

  return (
    <>
      <main className="h-[100vh]  min-w-[100%]">
      <div
        >
        <Image
          src={`${awardsData.attributes.ImageThumb.data[0].attributes.url}`}
          loading="eager"
          alt={`${awardsData.attributes.movieName}`}
          width={1000}
          height={1000}
          className={`object-cover absolute top-0 min-h-[100vh] w-[100vw] h-full `}
        />
        </div>
        <div className="items-center w-full flex flex-col px-5 max-md:px-5 h-[100vh] relative " style={divStyles}>
          <div className="w-full max-w-[1204px] max-md:max-w-full max-md:my-10 ">
     
            <div className="w-full h-auto   lg:pt-[56vh] pt-[51.36vh]  sm:pt-[20vh]">
              <div className=" w-full h-full  ">
                <div className=" flex flex-col items-center md:items-start ">
                  <div className="flex flex-col md:items-start bg-inherit ">
                    <Image  
                      src={`${awardsData.attributes.TitleImage.data.attributes.url}`}
                      alt={`${awardsData.attributes.movieName}`}
                      width={100}
                      height={120}
                      className="md:min-h-[120px] max-w-[350px]  w-auto h-auto object-contain "
                    />
                  </div>
                  <div className="md:w-[371px] md:h-11 py-2.5 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-neutral-200 text-base font-bold font-lato capitalize leading-normal">
                      {awardsData.attributes.Year}
                    </div>
                    <div className="w-[5px] h-[5px] bg-neutral-200 rounded-full" />
                    <div className="text-neutral-200 text-base font-bold font-lato capitalize leading-normal">
                     {awardsData.attributes.genere1} / {awardsData.attributes.genere2}
                    </div>
                    <div className="w-[5px] h-[5px] bg-neutral-200 rounded-full" />
                    <div className="text-neutral-200 text-base font-bold font-lato leading-normal">
                      {awardsData.attributes.RunTime}
                    </div>
                  </div>
                  <div className="lg:mt-[1.7vh] mt-4  flex justify-normal gap-6">
                    <a
                      href={`${awardsData.attributes.detail_page}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:block "
                    >
                      <button
                        className="flex justify-center items-center  rounded-xl gap-3 h-12 px-5 py-2 gradient-button   hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400"
                        style={{
                          background:
                            "linear-gradient(238.7deg, #FFDAA9 31.09%, #FDB478 83.44%)",
                        }}
                      >
                        <Image  
                          src="/Image/Play2.svg"
                          alt="no image"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                        <span className="text-neutral-700 text-[23px] font-medium font-archive leading-loose tracking-wide">
                          Read More
                        </span>
                      </button>
                    </a>
                  {awardsData.attributes.Trailer_url &&  <a
                      href={`${awardsData.attributes.Trailer_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex justify-center items-center gradient-button  rounded-xl gap-3 h-12 px-5 py-2  border border-white  hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  hover:scale-200 transition-transform duration-500 ease-in-out delay-400">
                        <Image
                          src="/Image/Play2.svg"
                          alt="no image"
                          className="w-6 h-6"
                          width={24}
                          height={24}
                        />
                        <span className="text-white text-[23px] font-medium font-archive leading-loose tracking-wide">
                          Watch Trailer
                        </span>
                      </button>
                    </a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroBannerSlider;
