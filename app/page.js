import Layout from "@/components/layout/Layout";

import HeroSlider2 from "@/components/sections/HeroSlider2";
import Speciality from "@/components/sections/Speciality1";
import AboutUs2 from "@/components/sections/AboutUs2";
import RoadMap2 from "@/components/sections/RoadMap2";
import Team2 from "@/components/sections/Team2";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <HeroSlider2 />
        <Speciality />
        <AboutUs2 />
        <RoadMap2 />
        <Team2 />
        <Partners />
      </Layout>
    </>
  );
}
