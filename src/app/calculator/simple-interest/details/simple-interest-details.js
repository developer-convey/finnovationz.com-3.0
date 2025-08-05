// SIPPlanner.js
import React from "react";
import "./simple-intrest.css";

const SIPPlanner = () => {
    return (
        <div className="mainhead simple-interest">
            <div className="main2">
                {/* Header Section */}
                <h1 className="title1">Understanding Simple Interest</h1>

                {/* Compound Interest Information */}
                <section>
                    <h2 className="title">What is Compound Interest?</h2>
                    <p className="text">
                        Simple interest is a fundamental financial concept that calculates the interest 
                        earned or paid solely on the initial amount invested or borrowed, known 
                        as the principal. Simple interest remains consistent throughout the loan or 
                        investment period.
                    </p>
                    <p>
                        The Core of Simple Interest: At the heart of simple interest lies a straightforward formula:<br></br>
                        Simple Interest (SI) = (Principal (P) × Rate of Interest (R) × Time (T)) / 100
                    </p>

                    <p className="title">Let's break down the components:</p>
                    <ul>
                        <li>
                        Principal (P): This is the initial amount of money invested or borrowed. It forms the foundation for 
                        all subsequent interest calculations.
                        </li>
                        <li>
                        Rate of Interest (R): Expressed as a percentage per annum, this represents the cost of borrowing or 
                        the return on investment for each year.
                        </li>
                        <li>
                        Time (T): This is the duration of the loan or investment period, typically measured in years. Time
                        plays a crucial role, as the longer the period, the greater the amount of interest accrued.
                        </li>
                    </ul>

                    <p className="title">A Step-by-Step Approach:</p>
                    <p className="text">To determine the total amount accumulated, follow these steps:</p>
                    <ol>
                        <li><strong>Calculate Simple Interest:</strong> Utilize the formula above to determine the interest earned or paid.</li>
                        <li><strong>Add Interest to Principal:</strong> Sum up the calculated simple interest to the original principal amount.</li>
                    </ol>

                    <p className="text">Total Amount (A) = Principal (P) + Simple Interest (SI)</p>

                    <p className="title">Real-World Applications of Simple Interest</p>
                    <p className="text">Simple interest finds practical application in a variety of financial scenarios:</p>

                    <ol>
                        <li>
                        <strong>Personal Loans:</strong> Many short-term personal loans, such as those for emergency expenses or small purchases, 
                        often employ simple interest calculations due to their straightforward nature.
                        </li>
                        <li>
                        <strong>Payday Loans:</strong> These short-term loans, known for their high interest rates, typically utilise simple 
                        interest to determine the cost of borrowing.
                        </li>
                        <li>
                        <strong>Bridge Loans:</strong> Designed to bridge a short-term financial gap, these loans frequently employ simple 
                        interest for their interest calculations.
                        </li>
                        <li>
                        <strong>Basic Savings Accounts:</strong> While many modern savings accounts utilise compound interest for greater 
                        returns, some basic accounts, particularly those offered by smaller institutions, may still employ 
                        simple interest calculations.
                        </li>
                        <li>
                        <strong>Fixed Deposits (FDs):</strong> Certain FDs, especially those with shorter tenures, might offer interest based 
                        on simple interest calculations, providing a predictable return on investment.
                        </li>
                        <li>
                        <strong>Lending/Borrowing Between Individuals:</strong> When lending or borrowing money informally among friends or 
                        family, simple interest can offer a transparent and fair method for calculating interest charges, 
                        ensuring clarity and understanding between parties.
                        </li>
                    </ol>
                    
                    <p className="title">
                    The Guide to Using the Finnovationz Simple Interest Calculator
                    </p>
                    <p className="text">Consider a scenario: You invest Rs. 25,000 at an annual interest rate of 6% for 4 years.</p>
                    
                    <div className="dash-unorder-list">
                    <ul>
                        <li>
                        <strong>Principal amount:</strong> Enter your initial amount of 25000 as the principal amount.
                        </li>
                        <li>
                        <strong>Period:</strong> The time period after which you will receive your invested amount should be entered here. In this case, it is 4.
                        </li>
                        <li>
                        <strong>Rate of interest:</strong> Here, your rate of interest is 6%. Hence, drag the rate of interest slider to 6.
                        </li>
                    </ul>
                    </div>

                    <p className="text">
                        As per this example, your calculations would show as follows: 
                    </p>

                    <div className="arrow-unorder-list">
                    <ul>
                        <li>
                        <strong>Simple Interest:</strong> (25,000 × 0.06 × 4) = Rs. 6,000
                        </li>
                        <li>
                        <strong>Total Amount:</strong> 25,000 + 6,000 = Rs. 31,000
                        </li>
                    </ul>
                    </div>

                    <p className="text">
                    Your initial investment of Rs. 25,000 would grow to Rs. 31,000 over the 4-year period.
Now that you have learned how to use the Simple interest calculator try to determine your investment returns.
                    </p>
                
                    
                    <p className="title">Conclusion</p>
                    <p className="text">Understanding simple interests is a crucial step towards achieving sound 
                        financial management. By grasping the fundamental concepts and utilising the Finnovationz 
                        Simple Interest Calculator, individuals can make informed financial decisions, evaluate 
                        investment options, and understand the actual cost of borrowing.</p>
                </section>
            </div>
        </div>
    );
};

export default SIPPlanner;
