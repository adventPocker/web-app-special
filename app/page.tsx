'use client';


import Hero from "./components/Sections/Hero";
import Footer from "./components/GlobalELements/Footer";
import Sections1 from "./components/Sections/Sections1";
import Sections2 from "./components/Sections/Sections2";
import Sections3 from "./components/Sections/Sections3";
import Sections4 from "./components/Sections/Sections4";

export default function Home() {

  return (
    <>
      <div className="bg-bg-1  bg-no-repeat w-full bg-cover">
        <Hero />
        <Sections2 />
        <Sections1 />
        <Sections3 />
        <Sections4 />
        <Footer />
      </div>
    </>
  );
}
