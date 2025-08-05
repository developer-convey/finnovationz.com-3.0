// SIPPlanner.js
import React from "react";
import "./compound-intrest.css";

const SIPPlanner = () => {
    return (
        <div className="mainhead compound-interest">
            <div className="main2">
                {/* Header Section */}
                <h1 className="title1">Unlocking the Power of Compound Interest</h1>

                {/* Compound Interest Information */}
                <section>
                    <h2 className="title">What is Compound Interest?</h2>
                    <p className="text">
                        Before we dive into how the calculator works, it’s essential to understand
                        the difference between <strong>simple interest</strong> and{" "}
                        <strong>compound interest</strong>:
                    </p>
                    <ul>
                        <li>
                            <strong>Simple Interest</strong> is calculated only on the invested
                            amount. For instance, if you invest Rs. 1,000 at a 10% annual interest
                            rate, you would earn Rs. 100 every year (Rs. 1,000 x 10%).
                        </li>
                        <li>
                            <strong>Compound Interest</strong>, however, takes into account the
                            interest that accumulates over time. In the first year, you would earn
                            Rs. 100, but in the second year, you would earn interest not only on
                            your Rs. 1,000 principal but also on the Rs. 100 interest from the
                            previous year. This leads to Rs. 110 in the second year, creating
                            compounding returns.
                        </li>
                    </ul>
                </section>

                {/* Power of Compounding */}
                <section>
                    <h2 className="title">The Power of Time and Frequency in Compounding</h2>
                    <p className="text">
                        The effectiveness of compound interest is enhanced by two crucial factors:
                    </p>
                    <p className="text">
                        1. <strong>Time:</strong> The longer your money is invested, the more
                        interest is accrued, resulting in greater growth.
                    </p>
                    <p className="text">
                        2. <strong>Compounding Frequency:</strong> The more frequently interest is
                        calculated (e.g., annually, monthly, quarterly), the quicker your
                        investment grows. More frequent compounding means your interest will
                        accumulate quicker, leading to higher returns.
                    </p>
                </section>

                {/* Finnovationz Compound Interest Calculator */}
                <section>
                    <h2 className="title">Finnovationz Compound Interest Calculator</h2>
                    <h3 className="text">
                        The Finnovationz Compound Interest Calculator makes it easier to calculate
                        compound interest and understand how your investments will grow.
                    </h3>
                    <p className="text">
                        To use the calculator, know the following terms and values about your
                        investment:
                    </p>
                    <ul>
                        <li>
                            <strong>Principal Amount:</strong> The sum of money with which you start
                            an investment.
                        </li>
                        <li>
                            <strong>Interest Rate:</strong> The annual rate of interest which you
                            will earn.
                        </li>
                        <li>
                            <strong>Investment Duration:</strong> The period of time you plan to
                            keep your money invested.
                        </li>
                    </ul>
                    <p className="text">
                        By entering these values, the calculator will instantly provide you with:
                    </p>
                    <ul>
                        <li>
                            <strong>Future Value:</strong> The total value of your investment after
                            the specified time period.
                        </li>
                        <li>
                            <strong>Total Interest Earned:</strong> The total interest you will
                            earn on your investment.
                        </li>
                    </ul>
                    <p className="text">
                        This tool allows you to adjust variables like interest rates, investment
                        duration, and compounding frequency to see how different factors affect your
                        returns.
                    </p>
                </section>

                {/* Practical Uses of the Calculator */}
                <section>
                    <h2 className="title">Practical Uses of the Compound Interest Calculator</h2>
                    <p className="text">
                        The Finnovationz Compound Interest Calculator can be used for various
                        financial planning purposes:
                    </p>
                    <ul>
                        <li>
                            <strong>Retirement Planning:</strong> Estimate how much you need to save
                            for retirement, considering the effects of compound interest over time.
                        </li>
                        <li>
                            <strong>Setting Investment Goals:</strong> Find out how much you need to
                            invest to achieve specific financial objectives, such as buying a home
                            or funding a child’s education.
                        </li>
                        <li>
                            <strong>Comparing Investment Options:</strong> Compare the potential
                            returns from different investment vehicles, such as fixed deposits,
                            stocks, or mutual funds.
                        </li>
                        <li>
                            <strong>Understanding Inflation’s Impact:</strong> See how inflation
                            could erode the purchasing power of your savings and plan accordingly.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default SIPPlanner;
