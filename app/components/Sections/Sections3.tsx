'use client'
import React, { useEffect,useState } from "react";
import FilmsCards from "../Elements/FilmsCards";
import SliderFilms from "./../Elements/SliderFilms";
import SliderMobile from "./../Elements/SliderMobile";
import { getMovieCardData } from "@/app/utils/getData";

const Sections3 = () => {
  const [movieData, setMovieData] = useState<ApiFilmCard>();
  useEffect(() => {
    async function fetchMovieData() {
        try {
            const data = await getMovieCardData();
            setMovieData(data);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }

    fetchMovieData();
}, []);
  return (
    <>
      <div className="items-center flex flex-col justify-center h-auto px-4 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 w-full ">
            <div
              className=" text-center md:text-[40px] font-medium font-ClashGrotesk-Medium md:leading-[56px]  text-[25px] leading-[30px]"
              style={{
                background:
                  "linear-gradient(238.7deg, #FF6572 31.09%, #A7426F 83.44%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Our Filmography
            </div>
            <div className="sm:block hidden">
              <SliderFilms moviewData ={movieData?.data}/>
            </div>
            <div className="sm:hidden  ">
              <SliderMobile moviewData ={movieData?.data}/>
              
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center m-auto px-[121px]  ">
            <img src="/Image/Line.png" alt="line" className="w-full h-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections3;
