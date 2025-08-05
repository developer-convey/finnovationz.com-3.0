"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "./use-in-view"; // Importing the hook
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const testimonials = [
  { name: "John ", img: "https://purple-buffalo-767451.hostingersite.com/wp-content/uploads/2024/09/unnamed-11.png" },
  { name: "Michael ", img: "https://purple-buffalo-767451.hostingersite.com/wp-content/uploads/2024/09/unnamed-9.png" },
  { name: "Robert ", img: "https://purple-buffalo-767451.hostingersite.com/wp-content/uploads/2024/09/unnamed-8.png" },
  { name: "Emily ", img: "https://purple-buffalo-767451.hostingersite.com/wp-content/uploads/2024/09/unnamed-10.png" },
];

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef); // Using the hook
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-auto w-full text-white bg-black text-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/BG-Hero.png')] bg-cover bg-center md:w-[600px] pt-[150px] bg-fixed mx-auto opacity-[1000px]"></div>

      {/* Content */}
      <div
        ref={contentRef} // Attaching the ref
        className={`relative max-w-3xl transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <p className="text-sm tracking-wide uppercase text-gray-300 pt-[150px] pb-12">
          No Bullshit, Only Practical Steps
        </p>
        <h1 className="text-5xl md:text-[100px] font-bold leading-tight relative">
          Share Market <br />
          <svg
  className={`absolute md:left-0 left-[40px] md:bottom-[100px] bottom-[40px] md:w-[600px] w-[300px] stroke-blue-500 transition-all duration-1000`}
  height="40"
  width="500"
  viewBox="0 0 400 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 30 Q250 -20 390 25"
    strokeWidth="4"
    strokeLinecap="round"
    stroke="blue-300"
    fill="transparent"
    className="animated-line"
  />
  <style>
    {`
      .animated-line {
        stroke-dasharray: 400; /* Full line length */
        stroke-dashoffset: 400; /* Initially hidden */
        animation: draw-line 5s linear infinite;
      }

      @keyframes draw-line {
        0% { stroke-dashoffset: 400; }   /* Hidden */
        25% { stroke-dashoffset: 0; }    /* Fully drawn at 2s */
        87.5% { stroke-dashoffset: 0; }  /* Hold for 5s */
        100% { stroke-dashoffset: 400; } /* Shrink to 0 in 1s */
      }
    `}
  </style>
</svg>


          Mastery
        </h1>

        <p className="mt-6 text-gray-300 text-[20px] tracking-[0.08rem]">
THIS SUNDAY | 7 PM | ₹9.00
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
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

        {/* Testimonials */}
        <div className="mt-12 grid md:grid-cols-2 -gap-5">
  {/* Images section (Moves on top in mobile) */}
  <div className="flex flex-wrap justify-center md:order-none order-2 transition-all duration-300">
    {testimonials.map((person, index) => (
      <div
        key={index}
        className="relative flex flex-col items-center transition-all duration-300"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
          marginLeft: hoveredIndex !== null ? "4px" : "-12px",
          marginRight: hoveredIndex !== null ? "4px" : "-1px",
        }}
      >
        <img
          src={person.img}
          alt={person.name}
          className="w-16 h-16 rounded-full border-2 border-white transition-all duration-300"
        />
        <p
          className={`text-white text-sm mt-2 transition-opacity duration-300 ${
            hoveredIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {person.name}
        </p>
      </div>
    ))}
  </div>

  {/* Trusted Text & Stars (Moves below in mobile) */}
  <div className="flex flex-col items-center text-center md:order-none order-1">
    <p className="text-gray-300 text-lg">
      TRUSTED BY <br /> 1 LAKH+ STUDENTS
    </p>
    <div className="flex justify-center text-yellow-400 text-2xl gap-2 mt-2">
  {[...Array(4)].map((_, i) => (
    <FaStar key={i} />
  ))}
  <FaStarHalfAlt />
</div>

  </div>

  {/* Mobile View Fix */}
  <style>
    {`
      @media (max-width: 768px) {
        .order-1 { order: 2; } /* Trusted text & stars move below */
        .order-2 { order: 1; } /* Images move on top */
      }
    `}
  </style>
</div>

   </div>
   </div>
  );
}
