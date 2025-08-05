"use client";
import React, { useEffect } from "react";
import Calculator from "../calculatorFiles/calculator/dcf-calculator";
import dynamic from "next/dynamic";
import CalculatorHomeBanner from "../components/CalculatorHomeBanner/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";

import Header from "../components/header";
import Brokerfooter from "../components/brokerFooter";
import Maincalculator from "../calculatorFiles/calculator/Maincalculator";
const Home = () => {
  useEffect(() => {
    document.title = "Finance Calculator";
  }, []);
  return (
    <div className="App">
      <div className="h-[20px] w-[100%] absolute top-0 bg-[#E6F0FA]"> </div>
      <div className="h-[100px] bg-[#E6F0FA]">
        <Header />
      </div>
      <CalculatorHomeBanner />
      <Maincalculator />
      <Brokerfooter />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
