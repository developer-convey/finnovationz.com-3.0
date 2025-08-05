// PPFCalculator.js
import React from "react";
import "./ppf-calculator.css";

const PPFCalculator = () => {
    return (
        <div className="mainhead simple-interest">
            <div className="main2">
                <section>
                    <p className="text">
                        Before the introduction of the National Pension System (NPS) in 2004, the Public Provident Fund (PPF)
                        reigned supreme as the go-to investment strategy for retirement planning in India. This government-backed
                        scheme offers a compelling blend of safety, tax benefits, and long-term growth, making it a popular choice
                        for individuals seeking a secure and tax-efficient way to build wealth. With a fixed interest rate currently
                        at 7.1%, declared annually by the government, PPF continues to be an attractive option for many investors.
                    </p>

                    <p className="title">Key Benefits of Investing in PPF</p>
                    <ul>
                        <li><strong>Tax-Free Growth:</strong> PPF enjoys an "Exempt-Exempt-Exempt" (EEE) tax status:
                            <ul>
                                <li><strong>Exempt:</strong> Contributions up to ₹1.5 lakh per year are deductible under Section 80C of the Income Tax Act.</li>
                                <li><strong>Exempt:</strong> Interest earned on your investments is completely tax-free.</li>
                                <li><strong>Exempt:</strong> The maturity amount, including principal and accumulated interest, is also tax-free.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Guaranteed Returns:</strong> PPF offers a fixed interest rate, providing a stable and predictable return
                            on your investment.
                        </li>
                        <li>
                            <strong>Long-Term Growth:</strong> The power of compounding ensures your investments grow significantly over the 15-year
                            lock-in period and subsequent extensions.
                        </li>
                        <li>
                            <strong>Government Backing:</strong> As a government-backed scheme, PPF investments are considered highly secure.
                        </li>
                        <li>
                            <strong>Flexibility:</strong> You can choose to invest a lump sum or make regular contributions throughout the year.
                        </li>
                    </ul>

                    <p className="title">How To use the Finnovationz PPF calculator:</p>
                    <p className="text">Simply enter the details of your investment in the respective boxes and the results will be shown.</p>
                    <ul>
                        <li><strong>Payment: </strong> Enter your investment amount in the box, or use the slider</li>
                        <li><strong>Interest Rate:</strong> Currently PPF rate of interest is set to 7.1%, hence the rate of interest is preset accordingly.</li>
                        <li><strong>Time period:</strong> Minimum lock in period in PPF is 15 years, however, you may opt to extend the investment for another
                            5 years. Choose the number of years as per your requirement.
                        </li>
                    </ul>

                    <p className="title">Key Considerations:</p>
                    <div className="arrow-unorder-list">
                        <ul>
                            <li>
                                <strong>Benefits of PPF:</strong> PPF is great for retirement, child education savings and other long term goals.
                                Unlike SIP you need not invest a certain amount every month, you can choose to invest every month or a lump
                                sum amount according to your convenience.
                            </li>
                            <li>
                                <strong>Interest Rate:</strong> The PPF interest rate is determined by the Government of India and can fluctuate.
                            </li>
                            <li><strong>Tax Laws:</strong> Although as of today, the tax on PPF is zero, Tax laws are subject to change. Take advice from professionals
                                before making investment decisions.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PPFCalculator;
