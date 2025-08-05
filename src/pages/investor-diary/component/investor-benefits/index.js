import React from 'react';

const InvestorBenefits = () => {
    return (
        <>
            <section className="benefits_section px-20 bg-black-900 text-white">
                <div className="benefits_container container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/*Investor Made*/}
                        <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src="/images/Investor_made.png"
                                alt="Benefit 1"
                                className="mx-auto mb-2"
                                style={{ width: "5rem", height: "4rem" }}
                            />
                            <h3 className="text-xl font-semibold mb-2 investor-ibm-font-family" style={{ fontWeight: "300" }}>Investor-made</h3>
                            <p className="text-gray-400 investor-sf-font-family">Made by a real investor to increase his portfolio</p>
                        </div>

                        {/* High Quality */}
                        <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src="/images/high_grow.png"
                                alt="Benefit 2"
                                className="mx-auto mb-2"
                                style={{ width: "5rem", height: "4rem" }}
                            />
                            <h3 className="text-xl font-semibold mb-2 investor-ibm-font-family" style={{ fontWeight: "300" }}>High Quality</h3>
                            <p className="text-gray-400 investor-sf-font-family">90 GSM paper is used for quality writing</p>
                        </div>

                        {/* Build to Last */}
                        <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src="/images/build_last.png"
                                alt="Benefit 3"
                                className="mx-auto mb-2"
                                style={{ width: "5rem", height: "4rem" }}
                            />
                            <h3 className="text-xl font-semibold mb-2 investor-ibm-font-family" style={{ fontWeight: "300" }}>Build to Last</h3>
                            <p className="text-gray-400 investor-sf-font-family">This is your life partner, and it is made like that</p>
                        </div>

                        {/* Learn and Grow */}
                        <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src="/images/learn_grow.png"
                                alt="Benefit 4"
                                className="mx-auto mb-2"
                                style={{ width: "5rem", height: "4rem" }}
                            />
                            <h3 className="text-xl font-semibold mb-2 investor-ibm-font-family" style={{ fontWeight: "300" }}>Learn and Grow</h3>
                            <p className="text-gray-400 investor-sf-font-family">Learn from your mistakes, Grow your money</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InvestorBenefits;