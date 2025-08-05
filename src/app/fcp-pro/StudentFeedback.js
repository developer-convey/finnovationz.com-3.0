"use client";

import React, { useState, useEffect,useRef } from "react";

const Slider = ({ autoPlay, autoPlayInterval, activeIndex, setSliderState, items }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the window object is available (client-side)
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1024); // Check if the view is desktop
    }
  }, []); // This effect runs only once after the component mounts

  const handlePrevSlide = () => {
    const newIndex = isDesktop
      ? activeIndex - 3 < 0 // Loop the slider correctly when moving 3 cards at once
        ? items.length - 3
        : activeIndex - 3
      : activeIndex - 1; // 1 card at a time on mobile

    setSliderState(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = isDesktop
      ? (activeIndex + 3) % items.length // Move 3 cards at a time on desktop
      : (activeIndex + 1) % items.length; // 1 card at a time on mobile

    setSliderState(newIndex);
  };

  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        handleNextSlide();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [activeIndex, autoPlay, autoPlayInterval]);

  return (
    <div className="slider-container w-[84%] h-[344px] relative mx-auto">
      {/* Slider Content */}
      <div className="slider-content flex gap-5 overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slider-item ${activeIndex === index ? "block" : "hidden"} w-full md:block md:w-[33%]`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Left and Right Arrow Buttons */}
      <div className="md:absolute md:top-1/3 md:-translate-y-1/3 md:w-full w-full flex justify-center gap-5 mt-5 md:mt-5 md:justify-between">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrevSlide}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-[200px] w-[50px] h-10 flex items-center justify-center shadow-md hover:scale-110 transition-transform 
          md:w-[75px] md:h-10 md:absolute md:left-[-2.5rem]"
        >
          <svg width="30" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNextSlide}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-[200px] w-[50px] h-10 flex items-center justify-center shadow-md hover:scale-110 transition-transform 
          md:w-[75px] md:h-10 md:absolute md:right-[-2rem]"
        >
          <svg width="30" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function StudentFeedback() {
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = useRef(null);

  return (
    <div>
      <div className="testimonials-section py-20 flex flex-col items-center justify-center gap-20 bg-gradient-to-r from-[#1B2537] to-[#2E3A50]">
        <div className="container text-center px-5">
          <h2 className="text-white text-3xl font-bold">What Our Students Say</h2>
          <div className="rounded-[20px] mt-7 h-[3px] w-[60px] mx-auto bg-gradient-to-r from-blue-500 to-green-500"></div>
        </div>

        {/* Slider Component */}
        <div className="w-full h-[344px] relative mx-auto">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            setSliderState={setSliderState}
            items={[
              <div key="card1" className="testimonial-card px-5">
                <div className="card rounded-[10px] flex flex-col gap-4 border border-solid border-gray-300 bg-white p-6 shadow-xs h-[300px]">
                  <div className="rating-bar flex gap-2.5">
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"
                      style={{
                        fontSize: "1.2rem", // Adjust the font size if needed
                        display: "inline-block",
                      }}
                    >
                      ⭐⭐⭐⭐⭐
                    </span>
                  </div>
                  <h3 className="card-title text-gray-700 text-base font-medium">

                  I've been following Prasad on YT and have been part of his club. I'm impressed with his knowledge and manner of communication.                  </h3>
                  <div className="student-info flex items-center gap-3.5">
                    <div className="w-[22%] h-[60px]">
                      {/* User SVG Icon */}
                      <img
  src="https://websitevideos2020.s3.ap-south-1.amazonaws.com/finnovationz/coures/fundamental-analysis-and-indian-stock-market-course-for-beginners/ct1.webp"
  alt="Student"
  className="rounded-[30px] w-full h-full object-cover"
/>

                    </div>
                    <div className="flex-1 flex-col items-start">
                      <h4 className="student-name text-gray-900 font-extrabold text-lg">Monish garach</h4>
                    </div>
                  </div>
                </div>
              </div>,
              <div key="card2" className="testimonial-card px-5">
                <div className="card rounded-[10px] flex flex-col gap-4 border border-solid border-gray-300 bg-white p-6 shadow-xs h-[300px]">
                  <div className="rating-bar flex gap-2.5">
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"
                      style={{
                        fontSize: "1.2rem", // Adjust the font size if needed
                        display: "inline-block",
                      }}
                    >
                      ⭐⭐⭐⭐⭐
                    </span>
                  </div>
                  <h3 className="card-title text-gray-700 text-base font-medium">

                  wonderful explanation.... you are really great mentor. ur videos are very easy to understand. Salute your vision
to make new generation                  </h3>
                  <div className="student-info flex items-center gap-3.5">
                    <div className="w-[22%] h-[60px]">
                      {/* User SVG Icon */}
                      <img
  src="https://websitevideos2020.s3.ap-south-1.amazonaws.com/finnovationz/coures/fundamental-analysis-and-indian-stock-market-course-for-beginners/ct4.webp"
  alt="Student"
  className="rounded-[30px] w-full h-full object-cover"
/>
                    </div>
                    <div className="flex-1 flex-col items-start">
                      <h4 className="student-name text-gray-900 font-extrabold text-lg">Drashan jadhav</h4>
                    </div>
                  </div>
                </div>
              </div>,
              <div key="card3" className="testimonial-card px-5">
                <div className="card rounded-[10px] flex flex-col gap-4 border border-solid border-gray-300 bg-white p-6 shadow-xs h-[300px]">
                  <div className="rating-bar flex gap-2.5">
                    <span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"
                      style={{
                        fontSize: "1.2rem", // Adjust the font size if needed
                        display: "inline-block",
                      }}
                    >
                      ⭐⭐⭐⭐⭐
                    </span>
                  </div>
                  <h3 className="card-title text-gray-700 text-base font-medium">

                  I bought this course and found it extremely valuable. Every business personality and share market lover should buy this course. my friends also loved it.                  </h3>
                  <div className="student-info flex items-center gap-3.5">
                    <div className="w-[22%] h-[60px]">
                      {/* User SVG Icon */}
                      <img
  src="https://websitevideos2020.s3.ap-south-1.amazonaws.com/finnovationz/coures/fundamental-analysis-and-indian-stock-market-course-for-beginners/ct7.webp"
  alt="Student"
  className="rounded-[30px] w-full h-full object-cover"
/>
                    </div>
                    <div className="flex-1 flex-col items-start">
                      <h4 className="student-name text-gray-900 font-extrabold text-lg">Ankit Singh Hooda</h4>
                    </div>
                  </div>
                </div>
              </div>,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
