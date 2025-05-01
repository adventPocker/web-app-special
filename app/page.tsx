import Footer from "./components/GlobalELements/Footer";
import Sections1 from "./components/Sections/Sections1";
import Sections2 from "./components/Sections/Sections2";
import Sections3 from "./components/Sections/Sections3";
import Sections4 from "./components/Sections/Sections4";
import Navbar from "./components/GlobalELements/Navbar";
import HeroBanner from "./components/Sections/Hero";


export default function Home() {
    return (
        <>
            <div className="absolute  top-0 z-50 w-full ">
                <div className="items-center flex flex-col justify-center h-auto px-4 max-md:px-5 ">
                    <div className="w-full max-w-[1204px]   max-md:max-w-full max-md:my-10 ">
                        <Navbar/>
                    </div>
                </div>
            </div>
            <HeroBanner/> 
            <Sections2/>
            <Sections1/>
            <Sections3/>
            <Sections4/>
            <Footer/>
        </>
    );
}
