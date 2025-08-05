"use client";
import dynamic from "next/dynamic";
// import Header from "../careerFolder/modules/Header";

import Header from "../components/header";
import Brokerfooter from "../components/brokerFooter";
import HeroSection from "../careerFolder/modules/HeroSection";
import OpenPositions from "../careerFolder/modules/OpenPositions";
import Testimonials from "../careerFolder/modules/Testimonials";
import Reasons from "../careerFolder/modules/Reasons";
import AboutMore from "../careerFolder/modules/AboutMore";
import Culture from "../careerFolder/modules/Culture";
import Timeline from "../careerFolder/modules/Timeline";
import MyProvider from "../careerFolder/contextApi/MyProvider";
import useScreenSize from "../careerFolder/hooks/useScreenSize";
import DiwaliOffSlider from "../components/coursetopofferslider";
const Careers = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  return (
    <>

      <MyProvider>

          <div className={`careers_page ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
          <DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" />

            <Header />
            <HeroSection />
            <OpenPositions />
            <Testimonials />
            <Reasons />
            <AboutMore />
            <Culture />
            <Timeline />
            <Brokerfooter />
          </div>
      </MyProvider>
    </>
  );
};

export default dynamic(() => Promise.resolve(Careers), { ssr: false });
