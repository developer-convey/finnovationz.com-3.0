import React from "react";
import { IMAGES } from "../assets/assets";
import '../assets/styles/timeline.css';

const Timeline = () => {
    return (
        <section className="tl-timeline">
            <div className="tl-container">
                <h2 className="tl-title">
                    <span className="tl-span">Achieving Milestones</span>A Timeline of Success
                </h2>

                <div className="tl-content">
                    <span className="tl-line1">
                        <img src={IMAGES.timeline1} alt="lines" loading="lazy" />
                    </span>
                    <div style={{ "--i": 2 }}>
                        <h3>2018</h3>
                        <p>We started our journey & crossed 1 Lakh YouTube Subscribers</p>
                    </div>
                    <div style={{ "--i": 1 }}>
                        <h3>2019</h3>
                        <p>Crossed 5 Lakh YT subscribers & started brokerage comparison platform</p>
                        <span className="tl-line2">
                            <img src={IMAGES.timeline2} alt="lines" loading="lazy" />
                        </span>
                    </div>
                    <div style={{ "--i": 0 }}>
                        <h3>2020</h3>
                        <p>Crossed 1 Mn YT Subs & 10,000 paid users</p>
                        <span className="tl-line2">
                            <img src={IMAGES.timeline3} alt="lines" loading="lazy" />
                        </span>
                    </div>
                    <div style={{ "--i": 0 }}>
                        <h3>2021</h3>
                        <p>Enhanced my business</p>
                        <span className="tl-line2">
                            <img src={IMAGES.timeline2} alt="lines" loading="lazy" />
                        </span>
                    </div>
                    <div style={{ "--i": 1 }}>
                        <h3>2022</h3>
                        <p>Crossed 2 Mn YT subs & our two Apps crossed 1 Lakh downloads</p>
                        <span className="tl-line2">
                            <img src={IMAGES.timeline3} alt="lines" loading="lazy" />
                        </span>
                    </div>
                    <div style={{ "--i": 2 }}>
                        <h3>2023</h3>
                        <p>Launched 2 of our flagship products namely Finance Club & Brokerage comparison</p>
                        <span className="tl-line2">
                            <img src={IMAGES.timeline2} alt="lines" loading="lazy" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="tl-map">
                <img src={IMAGES.map} alt="map" />
            </div>
        </section>
    );
};

export default Timeline;
