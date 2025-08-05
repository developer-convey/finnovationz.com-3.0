"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MeetPrasad() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("meet-prasad-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black">
      <div
        id="meet-prasad-section"
        className="relative md:w-[1200px] pt-[150px] pb-[100px] mx-auto flex items-center justify-center min-h-screen bg-black"
      >
        {/* Container */}
        <div className="relative bg-gray-900 rounded-[20px] md:rounded-tl-[120px] md:h-[500px] md:w-[1200px] w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8">
          
          {/* Left Image */}
          <div
            className={`relative w-[320px] md:w-[450px] md:order-none order-2 md:h-[500px] md:top-[-150px] lg:w-[500px] transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <img
              src="https://purple-buffalo-767451.hostingersite.com/wp-content/uploads/2024/08/Untitled-1.png"
              alt="Prasad"
              width={600}
              height={500}
              className="rounded-lg md:h-[650px] md:w-[600px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-white max-w-lg">
            <h4 className="uppercase text-gray-400 text-sm tracking-wide">
              Meet you Mentor
            </h4>
            <h2 className="text-3xl text-white font-bold mt-2 leading-snug">
            Prasad Lendwe
            </h2>
            <p className="text-gray-300 mt-4 text-md leading-relaxed">
            Prasad Lendwe, also known as Namaskar Prasad, is a prominent name in financial education. Lack of financial awareness was is the problem for most Indians. With the simple thought of making India financially aware, he started his ‘FinnovationZ’

            </p>

            {/* Achievements */}
            <div className="mt-6 space-y-4 pb-6">
              <div className="flex items-center border-b border-gray-600 pb-2 gap-3">
               <span className="text-pink-600 mr-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#2c474d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path> {/* Tick (Check) icon */}
  </svg>
</span>

                <p className="text-gray-300 text-md ">12+ Years Experience in Stock Market
</p>
              </div>
              <div className="flex items-center border-b border-gray-600 pb-2 gap-3">
              <span className="text-pink-600 mr-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#2c474d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path> {/* Tick (Check) icon */}
  </svg>
</span>                <p className="text-gray-300 text-md">
                100 k+ Learners

                </p>
              </div>
              <div className="flex items-center pb-2 gap-3">
              <span className="text-pink-600 mr-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#2c474d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path> {/* Tick (Check) icon */}
  </svg>
</span>                <p className="text-gray-300 text-md">
                Accredited by World Development Corporation as the Responsible and Impactful Influencer.

                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-2 flex gap-4">
            <a href="https://rzp.io/rzp/SMMAW" target="_blank" rel="noopener noreferrer">
  <button
    style={{ borderRadius: 100, width: "170px" }}
    className="px-5  py-2 bg-blue-500 glow-on-hover text-white text-md font-medium shadow-lg transition flex items-center gap-2"
  >
    ENROLL NOW →
  </button>
</a>
              {/* <button className="relative text-white text-lg font-medium flex items-center gap-2 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone-call"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                  <path d="M14.05 6A5 5 0 0 1 18 10" />
                </svg>
                TALK TO AN ADVISOR
                <span className="absolute left-0 bottom-1 w-full h-[2px] bg-white transform scale-x-0 scale-x-100 transition-transform duration-300"></span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}