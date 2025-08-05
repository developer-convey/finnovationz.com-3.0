"use client";

import React, { useState, useRef } from "react";
import Form from './form';

export default function ExperienceSection({ scrollToContact }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100); // Small delay to ensure the element is rendered before playing
  };

  return (
    <div>
      <section className="container mx-auto px-4 md:pt-[80px] pt-10 md:pb-[100px] max-w-6xl">
        <div className="absolute inset-0 w-full z-0">
          {/* Grid Pattern with High-to-Low Opacity Gradient */}
          <div
            className="absolute inset-0 w-full"
            style={{
              background: `
                repeating-linear-gradient(
                  to right,
                  transparent,
                  transparent calc(40px - 1px),
                  rgba(59, 130, 246, 0.15) calc(40px - 1px),
                  rgba(59, 130, 246, 0.15) 40px
                ),
                repeating-linear-gradient(
                  to bottom,
                  transparent,
                  transparent calc(40px - 1px),
                  rgba(59, 130, 246, 0.15) calc(40px - 1px),
                  rgba(59, 130, 246, 0.15) 40px
                )
              `,
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1.2) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-600 uppercase tracking-wide mb-4 text-sm md:text-base lg:text-lg text-left md:text-left">
              10x your wealth in share market with...
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-left md:text-left">
              Share Market Mastery
            </h1>
            <div className="rounded-[20px] h-[3px] w-[60px] bg-gradient-to-r from-blue-500 to-green-500 text-left md:text-center"></div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 mb-8 mt-3 text-left md:text-left">
              No Bullshit, Only Practical Steps
            </p>
          </div>

          {/* Right Content */}
          <div className="relative md:w-[600px] flex justify-center items-center">
            {!isPlaying && (
              <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-50 rounded-2xl md:mt-[50px] mt-[220px]">
                <img
                  src="https://websitevideos2020.s3.ap-south-1.amazonaws.com/Blue+and+Red+Gradient+Modern+Multi+Purpose+YouTube+Thumbnail.png"
                  alt="Thumbnail"
                  className="rounded-2xl object-fill md:w-[1400px] md:h-[300px] sm:w-full sm:h-[300px] h-[220px] w-[100%] max-w-full"
                />
                <button
                  onClick={handlePlay}
                  className="absolute flex items-center justify-center bg-gradient-to-r md:w-[50px] md:h-[50px] w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] from-teal-400 to-blue-600 rounded-full text-white shadow-lg hover:scale-110 transition-transform"
                >
                  <span className="text-lg">▶</span>
                </button>
              </div>
            )}
            {isPlaying && (
              <video
                ref={videoRef}
                controls
                playsInline // Added to prevent auto-fullscreen on iOS
                autoPlay={false} // Changed to false to ensure manual play
                className="rounded-2xl object-fill md:w-[1400px] md:h-[300px] md:mb-[-50px] sm:w-full sm:h-[300px] h-[220px] w-[100%] max-w-full"
              >
                <source
                  src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/28-01-2025/SMM%20FINAL%2027%20FEB%202025%20.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

        {/* Date and Time */}
        <div className="text-center md:mt-[130px]">
          <div
            onClick={scrollToContact}
            className={`flex justify-center ${isPlaying ? "md:mt-[150px] mt-8" : "md:mt-[150px] mt-[250px]"} mb-10 z-10`}
            style={{ zIndex: 100 }}
          >
            <button
              type="submit"
              className="px-14 py-3 rounded-full text-white bg-gradient-to-r from-teal-400 to-blue-600 hover:opacity-90 transition"
              style={{ zIndex: 100 }}
            >
              Reserve My Spot
            </button>
          </div>
          <h3 className="text-3xl font-bold mb-14">Time: Tonight 7 PM IST</h3>
        </div>
      </section>
    </div>
  );
}
