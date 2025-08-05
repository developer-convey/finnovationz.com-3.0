"use client";

// import "./sip-planner.module.css";
import React from "react";
import "./planner.css";

export function SIPPlanner() {
  return (
    <div className="mainhead">
      <div className="main2">
        <h1 className="title1">SIP Planner Calculator</h1>

        <h2 className="title">What is SIP?</h2>

        <p className="text">
          SIP, or Systematic Investment Plan, allows you to invest a
          predetermined amount of money in a mutual fund scheme at regular
          intervals, usually monthly.
        </p>
        <p className="text">
          It is a convenient and effective way to invest, especially for those
          who may not have a large sum of money to invest at one go.
        </p>
        <p className="text">
          SIPs offer the benefits of rupee cost averaging and the power of
          compounding, making it an ideal choice for long-term wealth creation.
        </p>

        <h2 className="title">What is a SIP Planner Calculator?</h2>

        <p className="text">
          A SIP Planner Calculator is designed to help investors determine the
          exact amount they need to invest periodically to reach a specific
          financial goal.
        </p>
        <p className="text">
          By entering details such as the target amount (the amount you wish to
          accumulate), the number of years you plan to invest, and the expected
          rate of return, the calculator will provide you with the amount you
          need to invest regularly.
        </p>

        <h2 className="title">How to Use the SIP Planner Calculator?</h2>

        <h3 className="heade">1. Enter the Target Amount:</h3>
        <p className="text">
          This is the amount you wish to have at the end of your investment
          period.
        </p>
        <h3 className="heade">2. Specify the Investment Period:</h3>
        <p className="text">Enter the number of years you intend to invest.</p>
        <h3 className="heade">3. Input the Expected Rate of Return:</h3>
        <p className="text">
          Provide an estimated annual rate of return for your investment.
        </p>
        <h3 className="heade">4. Calculate:</h3>
        <p className="text">
          Once you’ve entered all the necessary details, the calculator will
          compute the monthly SIP amount required to achieve your goal.
        </p>

        <h2 className="title">Conclusion</h2>

        <p className="text">
          A SIP Planner Calculator is an essential tool for anyone looking to
          invest systematically and achieve their financial goals. Whether you
          are planning for retirement, buying a house, or funding your child’s
          education, using this calculator will help you stay on track and
          ensure that you’re investing the right amount regularly to meet your
          future needs.
        </p>
      </div>
    </div>
  );
}

export default SIPPlanner;
