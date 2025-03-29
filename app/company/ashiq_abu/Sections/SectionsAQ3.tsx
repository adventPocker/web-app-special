import React from "react";
import FilmCard from "../Elements/FilmCard";
interface sectionsAQ3props {
  Director: WorkData[];
  Actor: WorkData[];

  Cinematographer: WorkData[];
}

const SectionsAQ3 = ({ Director, Actor, Cinematographer }: sectionsAQ3props) => {
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-5 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="pb-40">
            <div
              className=" md:text-5xl font-medium  font-ClashGrotesk-Medium leading-[67.20px] text-center text-[25px]"
              style={{
                background:
                  "var(--l02, linear-gradient(239deg, #FF6572 31.09%, #A7426F 83.44%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Filmography
            </div>

            <div className="md:py-16 w-full h-full">
              <div
                className=" md:text-[40px] font-medium font-ClashGrotesk-Medium leading-[67.20px]  text-[25px]"
                style={{
                  background:
                    "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                As film director
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-[117px] md:gap-y-[66px] gap-y-[18px]  md:mt-[66px] mt-[18px]">
        
                {Director?.map((data: WorkData, index:number)=>(
                <FilmCard key={index} data={data}/>

                ))}
              </div>
            </div>
            <div>
              <div
                className=" md:text-[40px] font-medium font-ClashGrotesk-Medium leading-[67.20px]  text-[25px]"
                style={{
                  background:
                    "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                As an Actor{" "}
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-[117px] md:gap-y-[66px] gap-y-[18px]  md:mt-[66px] mt-[18px]">
              {Actor?.map((data: WorkData, index:number)=>(
                <FilmCard key={index} data={data}/>

                ))}
              </div>
            </div>
            <div className="mt-[66px]">
              <div
                className=" md:text-[40px] font-medium font-ClashGrotesk-Medium leading-[67.20px]  text-[25px]"
                style={{
                  background:
                    "var(--L01, linear-gradient(239deg, #FFDAA9 31.09%, #FDB478 83.44%))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                As a Cinematographer
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-[117px] md:gap-x-[66px] md:gap-y-[66px] gap-y-[18px]  md:mt-[66px] mt-[18px]">
              {Cinematographer?.map((data: WorkData, index:number)=>(
                <FilmCard key={index} data={data}/>

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsAQ3;
