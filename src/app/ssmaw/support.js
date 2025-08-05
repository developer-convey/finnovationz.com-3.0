// components/MeetPrasad.tsx
import Image from "next/image";

export default function Support() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black px-6">
      {/* Container */}
      <div className="relative bg-gray-900 rounded-[20px]  md:h-[600px] md:w-[1200px] w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8 pl-0">
        
        {/* Left Image */}
        <div className="relative w-[310px] mx-auto md:w-[420px] md:left-[-45px] md:order-none order-2  md:h-[600px]   lg:w-[500px]">
          <div className="absolute -left-10 top-0 w-full h-full bg-black rounded-lg z-[-1]"></div>
          <img
            src="/2024-05-03-1.jpg"
            alt="Prasad"
            width={600}
            height={500}
            className="rounded-lg mx-auto object-cover md:h-[600px] h-[400px] w-[700px] md:w-[500px]"
          />
        </div>

        {/* Right Content */}
        <div className="text-white max-w-lg">
          <h2 className="text-3xl text-white font-bold mt-2 leading-snug">
          The support you need to succeed          </h2>
          <p className="text-gray-300 mt-4 text-md leading-relaxed">
          We provide the support and knowledge you need to make informed choices, grow your wealth, and achieve your financial goals.
          </p>
          <h2 className="text-2xl text-white font-bold mt-2 leading-snug">
          Share Market Mastery Includes:         </h2>
          {/* Achievements */}
          <div className="mt-6 space-y-4  pb-6">
            <div className="flex items-center border-b border-gray-600 pb-2 gap-3">
            <span className="text-pink-600 mr-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#2c474d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path> {/* Tick (Check) icon */}
  </svg>
</span>              <p className="text-gray-300 text-md ">Finding Multibagger Stocks</p>
            </div>
            <div className="flex items-center border-b border-gray-600 pb-2 gap-3">
            <span className="text-pink-600 mr-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#2c474d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path> {/* Tick (Check) icon */}
  </svg>
</span>              <p className="text-gray-300 text-md">Understanding Mutual Funds</p>
            </div>
            <div className="flex items-center border-b border-gray-600 pb-2 gap-3">
            <span className="text-pink-600 mr-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#2c474d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path> {/* Tick (Check) icon */}
  </svg>
</span>              <p className="text-gray-300 text-md">Finding Freehit Investment
</p>
            </div>
            <div className="flex items-center pb-2 gap-3">
            <span className="text-pink-600 mr-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#2c474d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path> {/* Tick (Check) icon */}
  </svg>
</span>              <p className="text-gray-300 text-md">Your Q/A
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
            {/* <button className="px-6 py-3 underline text-gray-300 hover:text-white rounded-full text-lg font-medium transition flex items-center gap-2">
              <span className="text-xl">📞</span> TALK TO AN ADVISOR
            </button> */}
          </div>
        </div>

      </div>
    </div>
  );
}
