"use client";
import React, { useEffect } from "react";
import Calculator from "../../calculatorFiles/calculator/calculator-sip-planner";
import dynamic from "next/dynamic";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../app/globals.css";

import Header from "../../components/header";
import Brokerfooter from "../../components/brokerFooter";
import OtherCalculators from "../../components/OtherCalculator/OtherCalculators";
import SIPPlanner from "../../calculatorFiles/planner/sip-planner";
import CalculatorCarg from "../../calculatorFiles/calculator/cagr";
import CalculatorCagr from "../../calculatorFiles/calculator/cagr";
import CAGR from "@/app/calculatorFiles/cagr/CAGR";
// import CalculatorDcf from "../calculatorFiles/calculator/calculator";

const Home = () => {
  useEffect(() => {
    document.title = "Finnovationz calculator";
    // Remove existing script if it exists to avoid duplicates
    const existingScript = document.getElementById("aisensy-wa-widget");
    if (existingScript) {
      existingScript.remove();
    }

    // Add the script again
    const script = document.createElement("script");
    script.src = "https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js";
    script.id = "aisensy-wa-widget";
    script.type = "text/javascript";
    script.setAttribute("widget-id", "FAWlEn");
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (script) {
        script.remove();
      }
    };

  }, []);

  const currentPage = "CAGR Calculator";

  return (
    <div className="App">
      <div className="h-[20px] w-[100%] absolute top-0 bg-[#E6F0FA]"> </div>
      <div className="h-[100px] bg-[#E6F0FA]">
        <Header />
      </div>
      {/* OtherCalculators Component Positioned in the Top Right */}
      <div className="othercalculator">
        <OtherCalculators currentPage={currentPage} />
      </div>
      <div
        className=""
        style={{
          background: "linear-gradient(to bottom, #E6F0FA 70%, white 100%)",
        }}
      >
        <CalculatorCagr />
      </div>
      <CAGR />
      <Brokerfooter />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
