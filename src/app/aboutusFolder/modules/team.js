import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/styles/team.css";

function teamCoverage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setIsMobile(window.innerWidth <= 768);
            }
        };

        handleResize();

        typeof window !== "undefined" &&
            window.addEventListener("resize", handleResize);

        return () => {
            typeof window !== "undefined" &&
                window.removeEventListener("resize", handleResize);
        };
    }, []);

    const customPrevArrow = (
        <button>
            <img loading="lazy" src="/right_arrow.svg" alt="Previous" />
        </button>
    );
    const customNextArrow = (
        <button>
            <img loading="lazy" src="/left_arrow.svg" alt="Next" />
        </button>
    );

    const settings = {
        verticalSwiping: true,
        slidesToShow: 5, // Default: Show 6 items
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: true,
        speed: 300,
        centerPadding: "0px",
        infinite: true,
        autoplay: true,
        nextArrow: customNextArrow,
        prevArrow: customPrevArrow,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    rows: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    rows: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    rows: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1, 
                    rows: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <>
            <section className="team_coverage slider-comman change_arrow" id="team_coverage">
                <div className="team_container">
                    <div className="team_container_title">
                        <h4 className="team_title">People Powering</h4>
                        <div className="team_finnovationz_image">
                            <div className="team_finnovationz"><img src="/team-finnovationz.svg" alt="team_finnovationz" /></div>
                        </div>
                        <div className="team_finnovationz-meet">
                            <div className="team_meet_button">Meet Our Team</div>
                        </div>
                    </div>
                    <div class="team-cards-container">
                        <div className="team-display">
                                <Slider {...settings}>
                                    <div class="team-card">
                                        <div class="image-container">
                                            <img src="/team-1.svg" alt="team-1" />
                                        </div>
                                        <div class="card-info">
                                            <div class="name-container">
                                                <h5>Rishab Jain</h5>
                                                <p class="short-desc">Labour Law Advisor</p>
                                                <p class="hover-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team-card">
                                        <div class="image-container">
                                            <img src="/team-3.svg" alt="team-2" />
                                        </div>
                                        <div class="card-info">
                                            <div class="name-container">
                                                <h5>Vivek Kumar</h5>
                                                <p class="short-desc">Labour Law Advisor</p>
                                                <p class="hover-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team-card">
                                        <div class="image-container">
                                            <img src="/team-2.svg" alt="team-2" />
                                        </div>
                                        <div class="card-info">
                                            <div class="name-container">
                                                <h5>Vijay Goel</h5>
                                                <p class="short-desc">Labour Law Advisor</p>
                                                <p class="hover-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team-card">
                                        <div class="image-container">
                                            <img src="/team-4.svg" alt="team-2" />
                                        </div>
                                        <div class="card-info">
                                            <div class="name-container">
                                                <h5>Anamkia Jain</h5>
                                                <p class="short-desc">Labour Law Advisor</p>
                                                <p class="hover-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="team-card">
                                        <div class="image-container">
                                            <img src="/team-5.svg" alt="team-2" />
                                        </div>
                                        <div class="card-info">
                                            <div class="name-container">
                                                <h5>Aina Sharma</h5>
                                                <p class="short-desc">Labour Law Advisor</p>
                                                <p class="hover-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default teamCoverage;
