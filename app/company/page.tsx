import Footer from "../components/GlobalELements/Footer";
import SectionsF10 from "../projects/[FilmName]/Sections/SectionsF10";
import SectionsC1 from "./Sections/SectionsC1";
import { SectionsC2 } from "./Sections/SectionsC2";
import SectionsC3 from "./Sections/SectionsC3";
import SectionsC4 from "./Sections/SectionsC4";

export default function Home() {
  return (
    <>
      <SectionsC1 />
      <SectionsC2 />
      <SectionsC3 />
      <SectionsC4 />
      <SectionsF10/>
      <Footer />
    </>
  );
}
