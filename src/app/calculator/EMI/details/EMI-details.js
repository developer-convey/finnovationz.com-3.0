// SIPPlanner.js
import React from "react";
import "./EMI.css";

const SIPPlanner = () => {
    return (
        <div className="mainhead simple-interest">
            <div className="main2">
                {/* Header Section */}
                <h1 className="title1">EMI Calculator</h1>
                <p className="text">
                    Whether it be buying a mobile phone, car, home, or even insurance premiums,
                    every bulk payment is being converted into EMIs. Equated Monthly Installments
                    (EMIs) have become an integral part of modern financial life, enabling us to
                    acquire assets like homes, vehicles, and consumer durables through manageable
                    monthly payments.
                </p>

                <h2 className="title">How EMIs Work</h2>
                <p>
                    An EMI is a fixed, periodic payment you make to gradually repay an amount. Each
                    instalment comprises two components:
                </p>
                <ul>
                    <li>
                        <strong>Principal Repayment:</strong> A portion of the original loan
                        amount is repaid with each EMI.
                    </li>
                    <li>
                        <strong>Interest Payment:</strong> A charge for borrowing money, calculated based on the outstanding
                        loan balance and the applicable interest rate.
                    </li>
                </ul>

                <p className="text">In the beginning, a larger portion of the EMI goes towards interest
                    while the principal repayment is relatively smaller. As the loan tenure progresses,
                    the principal repayment gradually increases, and the interest payment decreases.
                    This amortisation schedule ensures a consistent and predictable repayment structure.</p>

                <p className="text"><b>Benefits of Repaying Loans through EMIs</b></p>
                <ol>
                    <li><strong>Financial Planning & Budgeting:</strong> Predictable monthly outflows facilitate effective budgeting and financial planning.</li>
                    <li><strong>Interest Cost Savings:</strong> The amortisation schedule gradually reduces the interest burden, leading to overall savings.</li>
                    <li><strong>Credit Score Improvement:</strong> Timely EMI payments contribute positively to the borrower's credit history, enhancing their creditworthiness.</li>
                    <li><strong>Accessibility to Large Purchases:</strong> EMIs make significant purchases more accessible by spreading the cost over a manageable period.</li>
                </ol>

                <p className="text"><b>Utilising the FinnovationZ EMI Calculator</b></p>
                <p className="text">Finnovationz online EMI calculator is available to assist you in estimating your monthly payments. This user-friendly tool simply requires the following inputs:</p>
                <ol>
                    <li><strong>Principal Amount:</strong> The amount borrowed or the amount of purchase made.</li>
                    <li><strong>Interest Rate:</strong> The annual interest rate levied on the loan.</li>
                    <li><strong>EMI Tenure:</strong> The number of years for loan repayment.</li>
                </ol>
                <p className="text">The result would display the EMI amount, the Interest paid, and the total amount paid by you.
                    The quick response for the corresponding EMI amount enables you to make informed financial decisions.
                </p>
            </div>
        </div>
    );
};

export default SIPPlanner;
