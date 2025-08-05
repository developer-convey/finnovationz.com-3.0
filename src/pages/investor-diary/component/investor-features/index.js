import React, { useEffect, useState } from "react";


const InvestorFeatures = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const images = [
        "/images/features_image_1.png",
        "/images/features_image_2.png",
        "/images/features_image_3.png",
        "/images/features_image_4.png",
    ];


    const progressSteps = [
        "Replicate your winning strategies",
        "Not making any hasty decisions",
        "Stops you from repeating mistakes",
        "Never miss an investment opportunity",
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep + 1) % progressSteps.length);
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5 seconds


        return () => clearInterval(interval);
    }, [progressSteps.length, images.length]);


    return (
        <section className="features_section py-20 pl-20 pr-60 items-center w-full">
            <div className="features_container flex justify-center w-full">
                <div className="features_content w-full mr-40">
                    <h2
                        className="text-4xl font-bold mb-8 investor-ibm-font-family"
                        style={{
                            fontWeight: "300",
                        }}
                    >
                        What this Intelligent Diary <br />{" "}
                        <span className="text-yellow-500">
                            can do for your investments
                        </span>
                    </h2>
                    <div
                        className="features_line mb-8 px-6 py-6 rounded-lg text-gray-300 shadow-lg investor-sf-font-family"
                        style={{
                            backgroundImage: "url('/images/background_feature.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <ul
                            className="features_list text-lg space-y-4"
                            style={{ fontSize: "24px", fontWeight: "400" }}
                        >
                            {progressSteps.map((step, index) => (
                                <li key={index} className={`font-500`}>
                                    {step}
                                    {/* Progress bar for each step */}
                                    <div
                                        className="relative h-1 mt-4 investor-features-line"
                                        style={{ backgroundColor: "black", width: "100%" }}
                                    >
                                        <div
                                            className={`absolute top-0 left-0 h-full ${
                                                index === currentStep
                                                    ? "bg-yellow-500"
                                                    : "bg-gray-500 opacity-30"
                                            }`}
                                            style={{
                                                animation:
                                                    index === currentStep
                                                        ? "progressBar 5s linear"
                                                        : "none",
                                                width: index === currentStep ? "100%" : "0%",
                                            }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="feature_image mt-12" style={{ maxWidth: "100%" }}>
                    <img
                        src={images[currentImageIndex]}
                        alt="Features"
                        style={{ maxWidth: "500px !important",height: "500px !important", marginTop: "-100px" }}
                    />
                </div>
            </div>
            <style jsx>{`
                @keyframes progressBar {
                    from {
                        width: 0;
                    }
                    to {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};


export default InvestorFeatures;



