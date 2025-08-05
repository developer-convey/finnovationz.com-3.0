import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/styles/about.css';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        '/about-slider-1.svg',
        '/about-slider-3.jpg',
        '/about-slider-4.jpg',
        '/about-slider-5.jpg',
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const getLeftImageIndex = () => (currentSlide - 1 + images.length) % images.length;
    const getRightImageIndex = () => (currentSlide + 1) % images.length;

    return (
        <section className='about-container' id="about_coverage">
            <div className='about-header about_coverage'>
                <div className='about-title-wrapper'>
                    <div className='about-title-container'>
                        <h2 className='about-title'>About Us</h2>
                        <h1 className='about-mission'>Making India Financially Aware</h1>
                        <div className='about-author'>Prasad Lendwe aka Namaskar Prasad</div>
                    </div>
                </div>
            </div>

            {/* <div className='about-slider-container'>
                <div className="about-card-top"></div>
                <div className="header about-slider">
                    <img className='about-slider-image' src='/about-slider-1.svg' alt='about-slider-1' />
                    <img className='about-slider-image' src='/about-slider-1.svg' alt='about-slider-1' />
                    <img className='about-slider-image' src='/about-slider-1.svg' alt='about-slider-1' />
                </div>
                <div className="about-card-bottom"></div>
            </div> */}

            <div className='about-slider-container'>
                <div className="about-card-top"></div>
                <div className="header about-slider">
                    <img
                        className='about-slider-image left'
                        src={images[getLeftImageIndex()]}
                        alt={`about-slider-${getLeftImageIndex() + 1}`}
                    />
                    <img
                        className='about-slider-image center'
                        src={images[currentSlide]}
                        alt={`about-slider-${currentSlide + 1}`}
                    />
                    <img
                        className='about-slider-image right'
                        src={images[getRightImageIndex()]}
                        alt={`about-slider-${getRightImageIndex() + 1}`}
                    />
                </div>
                <div className='slider-btn-container'>
                    <div className='slider-btn-wrapper'>
                        <button className='slider-btn prev-btn' onClick={prevSlide}>
                            <img loading="lazy" src="/right_arrow.svg" alt="Previous" />
                        </button>
                        <div className='slider-dashes'>
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`slider-dash ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                        <button className='slider-btn next-btn' onClick={nextSlide}>
                            <img loading="lazy" src="/left_arrow.svg" alt="Next" />
                        </button>
                    </div>
                </div>
                <div className="about-card-bottom"></div>
            </div>


            <div className='about-content-container'>
                <div className='about-content'>
                    <p className='about-text'>
                        Prasad Lendwe, also known as Namaskar Prasad, is a prominent name in financial education. He started his journey in 2012, where he first invested his friends & family money but bore losses.
                    </p>

                    <p className='about-text'>
                        These losses made him realise the importance of financial education, and this is when he shifted his focus to fundamental financial knowledge and not mere speculation.
                    </p>

                    <p className='about-text'>
                        However, low financial awareness was not just his problem; it was also the problem for most Indians. With the simple thought of making India financially aware, he founded FinnovationZ in 2014.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About;