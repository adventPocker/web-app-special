'use client'
import Footer from "../components/GlobalELements/Footer";
import SectionsP1 from "./Sections/SectionsP1";
import SectionsP2 from "./Sections/SectionsP2";
import SectionsP3 from "./Sections/SectionsP3";
import SectionsP4 from "./Sections/SectionsP4";
import SectionsP5 from "./Sections/SectionsP5";
import { useEffect, useState } from "react";
import { getMovieCardData } from "@/app/utils/getData";

export default function Home() {
  const [movieData, setMovieData] = useState<ApiFilmCard | undefined>();
  useEffect(() => {
    async function fetchMovieData() {
      try {
        const data = await getMovieCardData();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
    fetchMovieData();
  }, []);

  return (
    <>
      <SectionsP1 />
      <SectionsP5 />
      <SectionsP2 movieData={movieData} />
      <SectionsP3 />
      <SectionsP4 movieData={movieData} />
      <Footer />
    </>
  );
}