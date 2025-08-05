import React from "react";
import '../assets/styles/journey.css';

const Journey = () => {
    return (
        <section className='journey_coverage journey-background'>
            <div className="d-flex flex-column gap-6">
                <div className="journey-title">There were <span className="journey-title-color">lows</span> and <span className="journey-title-color">highs</span>, but today he has</div>
                <div className="journey-cards-container">
                    <div className="journey-cards-row">
                        <div className="journey-card-teaching">
                            <div className="journey-cards">
                                <div className="d-flex flex-row gap-4 align-items-center">
                                    <div className="journey-cards-image">
                                        <div className="journey-cards-image-container">
                                            <img src="/finclub.svg" alt="finclub" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey-cards-title">10+ years</div>
                                        <div className="journey-cards-description">teaching experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journey-card-subscriber">
                            <div className="journey-cards">
                                <div className="d-flex flex-row gap-4 align-items-center">
                                    <div className="journey-cards-image">
                                        <div className="journey-cards-image-container">
                                            <img src="/finclub.svg" alt="finclub" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey-cards-title">2.5 Mn+</div>
                                        <div className="journey-cards-description">subscribers on YouTube</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journey-card-learner">
                            <div className="journey-cards">
                                <div className="d-flex flex-row gap-4 align-items-center">
                                    <div className="journey-cards-image">
                                        <div className="journey-cards-image-container">
                                            <img src="/finclub.svg" alt="finclub" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey-cards-title">100 k+</div>
                                        <div className="journey-cards-description">learners engaged up untill now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journey-card-total-year">
                            <div className="journey-cards">
                                <div className="d-flex flex-row gap-4 align-items-center">
                                    <div className="journey-cards-image">
                                        <div className="journey-cards-image-container">
                                            <img src="/finclub.svg" alt="finclub" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey-cards-title">12+ years</div>
                                        <div className="journey-cards-description">experience in investing in the Indian stock market</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journey-card-hour">
                            <div className="journey-cards">
                                <div className="d-flex flex-row gap-4 align-items-center">
                                    <div className="journey-cards-image">
                                        <div className="journey-cards-image-container">
                                            <img src="/finclub.svg" alt="finclub" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="journey-cards-title">200+ Hrs</div>
                                        <div className="journey-cards-description">of content is created on the Indian stock market</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey;
