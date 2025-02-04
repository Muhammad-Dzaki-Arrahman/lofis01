import Layout from "@/components/layout/Layout"
// import AboutUs1 from "@/components/sections/AboutUs1"
// import Action1 from "@/components/sections/Action1"
// import FAQ1 from "@/components/sections/FAQ1"
// import HeroSlider1 from "@/components/sections/HeroSlider1"
// import Montono1 from "@/components/sections/Montono1"
// import Newsletter1 from "@/components/sections/Newsletter1"
// import Partners1 from "@/components/sections/Partners1"
// import Portfolio1 from "@/components/sections/Portfolio1"
// import RoadMap1 from "@/components/sections/RoadMap1"
// import Speciality1 from "@/components/sections/Speciality1"
// import Team1 from "@/components/sections/Team1"
// import Testimonial1 from "@/components/sections/Testimonial1"

import AboutUs3 from "@/components/sections/AboutUs3"
import Blog3 from "@/components/sections/Blog3"
import Counter3 from "@/components/sections/Counter3"
import FAQ3 from "@/components/sections/FAQ3"
import HeroSlider3 from "@/components/sections/HeroSlider3"
import Infomation2 from "@/components/sections/Infomation2"
import Montono3 from "@/components/sections/Montono3"
import Newsletter2 from "@/components/sections/Newsletter2"
import RoadMap3 from "@/components/sections/RoadMap3"
import Team3 from "@/components/sections/Team3"
import Technology2 from "@/components/sections/Technology2"
import Testimonial3 from "@/components/sections/Testimonial3"


export default function Home() {

    return (
        <>
             <Layout headerStyle={3} footerStyle={2}>
                            <HeroSlider3 />
                            <AboutUs3 />
                            {/* <Infomation2 /> */}
                            <RoadMap3 />
                            <Montono3 />
                            <Team3 />
                            <Technology2 />
                            <Testimonial3 />
                            <Counter3 />
                            <Blog3 />
                            <FAQ3 />
                            <Newsletter2 />
                        </Layout>
        </>
    )
}