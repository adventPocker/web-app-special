import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./components/GlobalELements/Footer"), {
  ssr: false,
  loading: () => <div />,
});
const Sections1 = dynamic(() => import("./components/Sections/Sections1"), {
  ssr: false,
  loading: () => <div />,
});
const Sections2 = dynamic(() => import("./components/Sections/Sections2"), {
  ssr: false,
  loading: () => <div />,
});
const Sections3 = dynamic(() => import("./components/Sections/Sections3"), {
  ssr: false,
  loading: () => <div />,
});
const Sections4 = dynamic(() => import("./components/Sections/Sections4"), {
  ssr: false,
  loading: () => <div />,
});
const Navbar = dynamic(() => import("./components/GlobalELements/Navbar"), {
  ssr: false,
  loading: () => <div />,
});
const HeroBanner = dynamic(() => import("./components/Sections/Hero"), {
  ssr: false,
  loading: () => <div />,
});

export default function Home() {
  return (
    <>
      <div className="absolute  top-0 z-50 w-full ">
        <div className="items-center flex flex-col justify-center h-auto px-4 max-md:px-5 ">
          <div className="w-full max-w-[1204px]   max-md:max-w-full max-md:my-10 ">
            <Navbar />
          </div>
        </div>
      </div>
      <HeroBanner />
      <Sections2 />
      <Sections1 />
      <Sections3 />
      <Sections4 />
      <Footer />
    </>
  );
}
