import React from "react";
import "./AboutUs.css";

import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import TimeLine from "@/app/aboutusFolder/modules/Timeline";
import Media from "@/app/aboutusFolder/modules/media";
import OurMission from "@/app/aboutusFolder/modules/ourmission";
import OurServices from "@/app/aboutusFolder/modules/ourservices";
import Journey from "@/app/aboutusFolder/modules/journey";
import Team from "@/app/aboutusFolder/modules/team";
import Awards  from "@/app/aboutusFolder/modules/awards";
import AboutSlider from "@/app/aboutusFolder/modules/about";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";
import About from './aboutus'
function AboutUs() {
  return (
    <>
      <div className="App">
        <div className="h-[20px] w-[100%] absolute top-0 bg-[#E6F0FA]"> </div>
        <div className="h-[100px] bg-[#E6F0FA]">
          <Header />
        </div>

        <AboutSlider />
        <OurServices />
        <Journey />
        <OurMission />
        {/* <Awards /> */}
        <About/>
        <TimeLine />
        <Team />
        <Media />
        <Brokerfooter />
      </div>
    </>
  );
}

export default AboutUs;
