import React, { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "../assets/styles/awards.css";

function AwardsCoverage() {
    const [currentAward, setCurrentAward] = useState(0);

    const awards = [
        {
            title: "Awards 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/award-1.svg",
            alt: "Award-1",
            icon: "/award-icon.svg",
            iconalt: "Award-Icon",
            shortdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
        {
            title: "Awards 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/award-2.svg",
            alt: "Award-2",
            icon: "/award-icon.svg",
            iconalt: "Award-Icon",
            shortdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
        {
            title: "Awards 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/award-3.svg",
            alt: "Award-3",
            icon: "/award-icon.svg",
            iconalt: "Award-Icon",
            shortdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
    ];

    const showNextAward = () => {
        setCurrentAward((prev) => (prev + 1) % awards.length);
    };

    const showPrevAward = () => {
        setCurrentAward((prev) => (prev - 1 + awards.length) % awards.length);
    };

    // Calculate indices for next two images
    const nextAwardIndex = (currentAward + 1) % awards.length;
    const secondNextAwardIndex = (currentAward + 2) % awards.length;

    return (
        <section className="awards_coverage" id="awards_coverage">
            <div className="awards-container">

                <div className="awards-content">
                    <h2 className="awards-title">{awards[currentAward].title}</h2>
                    <p className="awards-description">{awards[currentAward].description}</p>
                    <div className="carousel">
                        <button className="carousel-arrow left-arrow" onClick={showPrevAward}>
                            <MdOutlineArrowBackIosNew />
                        </button>
                        <button className="carousel-arrow right-arrow" onClick={showNextAward}>
                            <MdOutlineArrowForwardIos />
                        </button>
                    </div>
                </div>

                <div className="carousel-images">
                    <div className="main-image">
                        <img src={awards[currentAward].image} alt={awards[currentAward].alt} />
                        <div>
                            <img src={awards[currentAward].icon} alt={awards[currentAward].iconalt} className="image-icon" />
                            <p className="short-description-icon">{awards[currentAward].shortdesc}</p>
                        </div>
                    </div>
                    <div className="side-images">
                        <img src={awards[nextAwardIndex].image} alt={`Next-${nextAwardIndex}`} className="side-image" />
                        <img src={awards[secondNextAwardIndex].image} alt={`Next-${secondNextAwardIndex}`} className="side-image" />
                    </div>
                </div>
                <div className="carousel-576">
                        <button className="carousel-arrow left-arrow" onClick={showPrevAward}>
                            <MdOutlineArrowBackIosNew />
                        </button>
                        <button className="carousel-arrow right-arrow" onClick={showNextAward}>
                            <MdOutlineArrowForwardIos />
                        </button>
                    </div>
            </div>
        </section>
    );
}

export default AwardsCoverage;
