// SIPPlanner.js
import React from "react";
import "./reverse-cagr.css";

const SIPPlanner = () => {
    return (
        <div className="mainhead compound-interest">
            <div className="main2">
                <p className="text">
                    How much do we invest today to reach our financial goal? A very common question
                    in the minds of an adult. Whether it's buying a dream home, funding your child's
                    education, or securing a comfortable retirement, understanding your investment
                    needs is crucial. This is where the concept of Reverse CAGR comes into play.
                </p>

                <h2 className="title">What is Reverse CAGR?</h2>
                <p className="text">
                    CAGR, or Compound Annual Growth Rate, is a widely used metric to measure the average
                    annual growth of an investment over a specific period. Reverse CAGR, as the name
                    suggests, works in the the other way around. It helps you determine the starting
                    principal required to achieve a desired future value with a given annual growth
                    rate and investment timeframe.
                </p>

                <p className="text">Applications of Reverse CAGR:</p>
                <ul>
                    <li>
                        <strong>Retirement Planning:</strong> Calculate the initial investment
                        needed to accumulate a specific retirement corpus.
                    </li>
                    <li>
                        <strong>Child's Education:</strong> Determine the investment required
                        to fund your child's higher education expenses.
                    </li>
                    <li>
                        <strong>Buying a house:</strong> Calculate the down payment needed for
                        a future home purchase.
                    </li>
                    <li>
                        <strong>Business Growth:</strong> Estimate the initial investment required
                        to achieve a desired revenue or profit target.
                    </li>
                    <li>
                        <strong>Personal Savings Goals:</strong> Determine the savings rate needed
                        to achieve a specific financial milestone.
                    </li>
                </ul>

                <h2 className="title">Finnovationz Reverse CAGR Calculator:</h2>
                <p className="text">
                    To ease your pain we have provided a reverse CAGR calculator. All you need to do is input values as per your financial goal.
                </p>
                <p className="text">
                    Future Value: Enter the target amount you wish to achieve in the future. For example, if your goal is to accumulate ₹1,000,000 for your child's education, enter "1000000" in the "Future Value" field.
                </p>
                <p className="text">Expected Annual Growth Rate: Input the annual growth rate you expect to achieve on your investments. This can be based on historical market trends, your investment strategy, and risk tolerance.</p>
                <p className="text">Investment Timeframe: Enter the number of years you have to achieve your financial goal. For instance, if you have 15 years to save for your child's education, enter "15" in the "Time Period (Years)" field.
                </p>
                <p className="text">The calculator will instantly process the information and display the "Present Value" or the initial investment required to reach your desired future value.</p>
                <div className="text">Example:</div>
                <p className="text">Let's say you want to buy a house in 10 years and need ₹5,000,000 for the down payment. You believe you can achieve an average annual return of 10% on your investments.</p>

                <div className="text">Future Value: ₹5,000,000</div>
                <div className="text">Expected Annual Growth Rate: 10%</div>
                <p className="text">Time Period (Years): 10</p>

                <p className="text">Using the Finnovationz Reverse CAGR Calculator, you would find that you need to invest approximately ₹1,519,422 today to reach your goal of ₹5,000,000 in 10 years with a 10% annual return.
                </p>
            </div>
        </div>
    );
};

export default SIPPlanner;
