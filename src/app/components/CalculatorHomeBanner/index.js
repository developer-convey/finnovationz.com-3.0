import React from "react";
import "./HomeBannerCalculators.css"; // Import the CSS file for styling
import { FaSearch } from "react-icons/fa";


const HomeBannerCalculators = () => {
  return (
    <div className="main-calculator-page">
      <div className="calculator-homebanner">
        <div className="content gap-3">
          <div>
            <h1>Finance Calculator</h1>
            <p>
              Our financial calculator helps you make smarter decisions by
              providing insights into SIPs, savings, and share market investments.
              It allows you to easily plan your finances with accurate and
              reliable results.
            </p>
          </div>
          <div className="search-bar-calculator">
            <input type="text" placeholder="Search" />
            <span className="searchicon">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomeBannerCalculators;



