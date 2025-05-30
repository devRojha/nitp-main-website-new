import Image from "next/image";
import Slider from "./components/Home/Slider";
import Gallery from "./components/Home/Gallery"
import Popbuttons from "./components/Home/Popbuttons";
import Details from "./components/Home/Details";
import Aboutus from "./components/Home/aboutNitPatna";
import Placement from "./components/Home/Placement";
import Movingbar from "./components/Home/Movingbar";
import Research from "./components/Home/Research";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const metadata = {
  title: "NIT PATNA | National Institute of Technology Patna",
  description: "Official website of National Institute of Technology Patna",
  verification: {
    google: "5gbX6CeIgXNqZ2CuUrXtlfpdcPg-v8n4l_mx3CXfnwU",
  },
};
export default function Home() {
  return (
    <>
    <Slider/>
    <Movingbar/>
    <Popbuttons/>
    <Details/>
    <Aboutus/>
    <Research/>
    <Gallery/>
    
    </>
    
  );
}
