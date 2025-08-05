import dynamic from "next/dynamic";
import React from "react";


const Featured = dynamic(() => import("@/app/components/Featured"));
const Faq = dynamic(() => import("@/app/components/webinarFaq"));
const Footer = dynamic(() => import("@/app/components/footer"));
const MoneyMystryProgramme = dynamic(() =>
  import("@/app/components/MoneyMystryProgramme")
);
const AboutUs = dynamic(() => import("@/app/components/AboutUs"));
const Timeline = dynamic(() => import("@/app/components/Timeline"));
const Trainer = dynamic(() => import("@/app/components/Trainer"));

const Dwebinap = ({programmeData,formatDate}) => {
  return (
    <>
     
     
      <MoneyMystryProgramme />
      <AboutUs />
      <Timeline />
      <Trainer />
      <Featured />
      <Faq />{" "}
    </>
  );
};

export default Dwebinap;
