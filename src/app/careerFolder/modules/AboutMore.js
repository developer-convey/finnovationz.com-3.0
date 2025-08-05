import React from "react";
import { IMAGES } from "../assets/assets";
import useScreenSize from "../hooks/useScreenSize";

const AboutMore = () => {
    const screenSize = useScreenSize();
    const isMobile = screenSize === "mobile";
    const isTablet = screenSize === "tablet";

    return (
        <section id="testimonials" className={`testimonials position-relative ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
            <div className="container w-100 d-flex flex-column align-items-center">
                <div className="about_more_container text-center">
                    <h2>Get more information from this video</h2>
                </div>

                <div className="video-container z-1">
                    <iframe
                        width="100%"
                        height={isMobile ? "240" : isTablet ? "300" : "360"}
                        src="https://www.youtube.com/embed/gZT2X4_MYeA?si=V0jd_DfzdBODl8g2"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="curve c1">
                <img loading="lazy" src={IMAGES.arc} alt="" />
            </div>

            <div className="curve c2">
                <img loading="lazy" src={IMAGES.arc} alt="" />
            </div>
        </section>
    );
};

export default AboutMore;
