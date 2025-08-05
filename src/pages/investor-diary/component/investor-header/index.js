import React from "react";

const InvestorHeader = () => {
    // JavaScript to handle the button click event and scroll to the section
    const handleKnowMoreClick = () => {
        const videoSection = document.getElementById("video-section");
        if (videoSection) {
            // Scrolls smoothly to the section
            videoSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className="text-center pt-10">
            <div className="flex justify-center items-center">
                <img
                    src="/images/finnovationz-logo.png"
                    alt="Diary"
                    style={{ width: "180px", height: "auto", margin: "50px" }}
                />
            </div>
            <h1
                className="investor-title investor-ibm-font-family"
                style={{
                    fontSize: "70px",
                    lineHeight: "0.9",
                    letterSpacing: "0.025em",
                    fontWeight: "300",
                }}
            >
                Invest Like an <br />{" "}
                <span className="text-yellow-500">Intelligent Investor</span>
            </h1>
            <p
                className="mt-4 text-lg investor-description investor-sf-font-family"
                style={{
                    fontSize: "24px",
                    color: "#a7a8a9",
                }}
            >
                India's first and only diary to make you a
                <br /> disciplined, intelligent investor.
            </p>
            <div className="mt-6 flex justify-center gap-4 investor-sf-font-family">
                <a
                    href="https://rzp.io/rzp/FBIntDiary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-600 shadow-md hover:shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
                >
                    Pre-order Now
                </a>

                <button
                    id="know-more"
                    className="px-6 py-2 bg-transparent text-gray-300 rounded-lg border border-gray-600 shadow-md hover:bg-gray-800 hover:text-white transition-all duration-300"
                    onClick={handleKnowMoreClick} // Handle the button click
                >
                    Know More
                </button>
            </div>
        </header>
    );
};

export default InvestorHeader;
