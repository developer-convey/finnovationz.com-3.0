// src/components/Maincalculator.js
import React from "react";
import Card from "./Card";
import "./maincalculator.css";
import AppDownloadSection from "./AppDownloadSection";

const Maincalculator = () => {
  // Dummy data for cards
  const cardData = [
    {
      id: 1,
      title: "DCF Calculator",
      paragraph:
        "The DCF Calculator helps you determine a company's (or any asset's) fair value and decide whether it is undervalued or overvalued.",
      calculator: "/calculator/dcf-calculator",
      img: '/calculator/DCF-calculator.svg',
    },
    {
      id: 2,
      title: "SIP-Return Calculator",
      paragraph:
        "Our SIP Return Calculator shows you how much money your investments might make, helping you reach your goals faster.",
      calculator: "/calculator/sip-return-calculator",
      img: '/calculator/SIP-Calculator.svg',
    },
    {
      id: 3,
      title: "SIP-Planner Calculator",
      paragraph:
        "The SIP Planner helps you see how much your regular investments can grow over time, making it easy to plan for the future.",
      calculator: "/calculator/sip-planner-calculator",
      img: '/calculator/SIP-Planner-Calculator.svg',
    },
    {
      id: 4,
      title: "CAGR Calculator",
      paragraph:
        "The CAGR Calculator helps you see how fast your investments are growing yearly, so you can track your progress.",
      calculator: "/calculator/cagr-calculator",
      img: '/calculator/CAGR-Calculator.svg',
    },
    {
      id: 5,
      title: "Compound Interest",
      paragraph:
        "The Compound Interest helps you see how fast your investments are growing yearly, so you can track your progress.",
      calculator: "/calculator/compound-interest",
      img: '/calculator/Compound-Interest.svg',
    },
    {
      id: 6,
      title: "Simple Interest",
      paragraph:
        "The Simple Interest helps you see how fast your investments are growing yearly, so you can track your progress.",
      calculator: "/calculator/simple-interest",
      img: '/calculator/Simple-Interest.svg',
    },
    {
      id: 7,
      title: "Reverse CAGR",
      paragraph:
        "The Reverse CAGR helps you see how fast your investments are growing yearly, so you can track your progress.",
      calculator: "/calculator/reverse-cagr",
      img: '/calculator/Reverse-CAGR.svg',
    },
    {
      id: 8,
      title: "Lumpsum",
      paragraph:
        "The Lumpsum helps you see how fast your investments are growing yearly, so you can track your progress.",
      calculator: "/calculator/lumpsum",
      img: '/calculator/Lumpsum.svg',
    },
    {
      id: 9,
      title: "EMI",
      paragraph:
        "The EMI helps you see how fast your investments are growing yearly, so you can track your progress.",
      calculator: "/calculator/EMI",
      img: '/calculator/EMI.svg',
    },
    {
      id: 10,
      title: "PPF calculator",
      paragraph:
        "The PPF calculator helps you see how fast your investments are growing yearly, so you can track your progress.",
      calculator: "/calculator/PPF-calculator",
      img: '/calculator/PPF-Calculator.svg',
    },
  ];

  return (
    <div className="box-container">
      <div className="allbox">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            id={card.id}
            paragraph={card.paragraph}
            calculator={card.calculator}
            img={card.img}
          />
        ))}
      </div>
      <AppDownloadSection />
    </div>
  );
};

export default Maincalculator;
