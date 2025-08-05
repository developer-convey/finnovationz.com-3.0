"use client"; // Mark this component as a client component

import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import "./style1.css"; // Import the external CSS file

const OtherCalculators = ({ currentPage }) => {
  // Define the calculator names with their respective paths
  const calculators = [
    { name: "SIP Return", path: "/calculator/sip-return-calculator" },
    { name: "SIP Planner", path: "/calculator/sip-planner-calculator" },
    { name: "DCF Calculator", path: "/calculator/dcf-calculator" },
    { name: "CAGR Calculator", path: "/calculator/cagr-calculator" },
    { name: "Compound Interest", path: "/calculator/compound-interest" },
    { name: "Simple Interest", path: "/calculator/simple-interest" },
    { name: "Reverse CAGR", path: "/calculator/reverse-cagr" },
    { name: "Lumpsum", path: "/calculator/lumpsum" },
    { name: "EMI", path: "/calculator/EMI" },
    { name: "PPF calculator", path: "/calculator/PPF-calculator" },
  ];

  return (
    <div className="calculator-container">
      <h3 className="calculator-heading">Other Calculators</h3>
      <ul className="calculator-list">
        {calculators.map((calc) => (
          calc.name !== currentPage && ( // Hide the current page
            <li key={calc.name} className="calculator-item">
              <Link href={calc.path} className="calculator-link">
                <span>{calc.name}</span>
                <span className="arrow-symbol">&#8250;</span>
              </Link>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default OtherCalculators;
