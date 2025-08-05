import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/styles/mediacoverage.css";

function MediaCoverage() {
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
        slidesToShow: 6, 
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
                    slidesToShow: 5,  
                    rows: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4, 
                    rows: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3, 
                    rows: 1,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    rows: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };


    return (
        <>
            <section className="slider-comman change_arrow">
                <div className="container-fluid">
                    <div className="row justify-content-center gap-4">
                        <div className="col-xl-4 col-lg-6 text-center mb-2">
                            <h2 className="media-title">Media Coverage</h2>
                        </div>
                        <div className="media-display-wrapper">
                            <div className="media-display">
                                <Slider {...settings}>
                                    <div className="media-item">
                                        <div className="media-item-image">
                                            <img src="/media-1.svg" alt="Mint" className="media-image" />
                                        </div>
                                        <div className="media-item-title">Mint</div>
                                    </div>
                                    <div className="media-item">
                                        <div className="media-item-image">
                                            <img src="/media-2.svg" alt="Economic Times" className="media-image" />
                                        </div>
                                        <div className="media-item-title">Economic times</div>
                                    </div>
                                    <div className="media-item">
                                        <div className="media-item-image">
                                            <img src="/media-3.svg" alt="BwDisrupt" className="media-image" />
                                        </div>
                                        <div className="media-item-title">BwDisrupt</div>
                                    </div>
                                    <div className="media-item">
                                        <div className="media-item-image">
                                            <img src="/media-4.svg" alt="Economic times" className="media-image" />
                                        </div>
                                        <div className="media-item-title">Economic times</div>
                                    </div>
                                    <div className="media-item">
                                        <div className="media-item-image">
                                            <img src="/media-5.svg" alt="Financial express" className="media-image" />
                                        </div>
                                        <div className="media-item-title">Financial express</div>
                                    </div>
                                    <div className="media-item">
                                        <div className="media-item-image">
                                            <img src="/media-6.svg" alt="Entrepreneur India" className="media-image" />
                                        </div>
                                        <div className="media-item-title">Entrepreneur India</div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MediaCoverage;
