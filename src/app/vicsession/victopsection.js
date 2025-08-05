"use client";

import React from "react";

export default function ExperienceSection() {
  return (
    <div>
      <section className="container mx-auto px-4 py-16 max-w-6xl">
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

        <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-600 uppercase tracking-wide mb-4 text-sm md:text-base lg:text-lg text-left md:text-left">
            Want to use the raw power of value investing

            </p>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight text-left md:text-left">
            FinnovationZ’s Value Investing Cohort <br></br> <span style={{
  fontFamily: "'Playfair Display', serif",
  fontStyle: "italic",
  fontWeight: "400",
}}
>hai na...</span>
            </h1>
            <div className="rounded-[20px] h-[3px] w-[60px] bg-gradient-to-r from-blue-500 to-green-500 text-left md:text-center"></div>

            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 mb-8 mt-3 text-left md:text-left">
            Know more by joining free counselling sessions
            </p>

            <a href="/vicsession/#pricing" style={{ textDecoration: "none" }}>
  <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-start gap-2">
    Reserve My Spot Now
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</a>

          </div>

          {/* Right Content */}
          <div className=" flex justify-center items-center">
  <div className="w-full lg:w-[500px]">
    {/* <iframe
      width="100%"
      height="340"
      src="https://www.youtube.com/embed/JNk3bnLSz5Q?si=zXUbdOoepz365YZe&loop=1&playlist=JNk3bnLSz5Q&modestbranding=1&rel=0&controls=0"
      title="YouTube video player"
      allow="encrypted-media"
      allowFullScreen
      className="rounded-2xl w-full"
    ></iframe> */}
    <img src="/Prasadthumbnail.png"></img>
  </div>
</div>





        </div>

        {/* Date and Time */}
       
      </section>

     
    </div>
  );
}
