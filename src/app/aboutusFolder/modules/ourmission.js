import React from "react";
import '../assets/styles/ourmission.css';

function OurMission() {
    return (
        <section className="p-4">
            <div className="d-flex align-items-center justify-content-center flex-column gap-6">
                <div className="d-flex flex-column gap-3">
                    <div className="our-mission-title">
                        Our Mission
                    </div>
                    <div className="our-mission-description">
                        To increase the per capita income of Indians by making them financially aware
                    </div>
                </div>
                <div className="our-mission-image">
                    <img src="/our-mission.svg" alt="our-mission" />
                </div>
            </div>
        </section>
    );
}

export default OurMission;
