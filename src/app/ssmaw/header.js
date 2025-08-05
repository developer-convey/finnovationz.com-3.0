"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);

      // Detect the active section
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // Adjust for navbar height
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on selection
  };

  return (
    <>
      {/* Initial Navbar */}
      <nav
        className={`fixed top-0 left-0 md:pt-[20px] md:pb-[20px] w-full transition-all duration-300 z-50 backdrop-blur-lg bg-black/80 border-b border-gray-700 ${
          scrolling ? "hidden" : "block"
        }`}
      >
        <div
          className={`flex flex-row md:flex-row items-center justify-between px-10 py-4 text-white ${
            isMobile ? "h-auto" : "h-20 "
          }`}
        >
          <h1 className="text-2xl font-bold flex items-center mb-2 md:mb-0">
            <img
              src="/finnovationzshare.png"
              alt="FinnovationZ Logo"
              className="w-[180px] h-6 md:h-6"
            />
            <span className="h-14 w-[2px] border-r bg-white mx-4"></span>
          </h1>

          {/* Mobile Menu Toggle Button */}
          {isMobile && (
            <button
              className="text-white text-xl bg-gradient-to-r from-blue-500 to-teal-400  p-2 rounded-full w-[45px] focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          )}

          {/* Navigation List */}
          <ul
            className={`md:flex flex-wrap  space-x-4 md:space-x-0 gap-2 text-md uppercase ${
              isMobile
                ? `absolute top-[80px] left-0 w-full bg-black/90 p-4  transition-all duration-300 ${
                    menuOpen ? "block" : "hidden"
                  }`
                : ""
            }`}
          >
            {[" ","THE PROBLEM", "INSTRUCTOR", "THE SOLUTION", "TESTIMONIALS", "FAQ"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer px-4 py-3  rounded-full transition-all ${
                  activeSection === item
                    ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white "
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </li>
            ))}
            <a href="https://rzp.io/rzp/SMMAW" target="_blank" rel="noopener noreferrer">
  <button
    style={{ borderRadius: 100, width: "170px" }}
    className="px-2 md:hidden py-2 bg-blue-500 glow-on-hover text-white text-md font-medium shadow-lg transition flex items-center gap-2"
  >
    ENROLL NOW →
  </button>
</a>

          </ul>

          <a href="https://rzp.io/rzp/SMMAW" target="_blank" rel="noopener noreferrer">
  <button
    style={{ borderRadius: 100, width: "170px" }}
    className="px-2 md:block hidden py-2 bg-blue-500 glow-on-hover text-white text-md font-medium shadow-lg transition flex items-center gap-2"
  >
    ENROLL NOW →
  </button>
</a>

        </div>
      </nav>

      {/* Scrolling Navbar */}
      <nav
  className={`fixed left-0 w-full md:pt-[20px] md:pb-[20px] transition-all duration-500 z-50 backdrop-blur-lg bg-black/50 border-b border-gray-700 ${
    scrolling ? "top-0" : "-top-20"
  }`}
>

        <div
          className={`flex flex-row md:flex-row items-center justify-between px-10 py-3 text-white ${
            isMobile ? "h-auto" : "h-16"
          }`}
        >
          <h1 className="text-2xl font-bold flex items-center mb-2 md:mb-0">
            <span className="text-white">Share Market Mastery</span>
            <span className="h-14 w-[2px] bg-white mx-4"></span>
          </h1>

          {/* Mobile Menu Toggle Button */}
          {isMobile && (
             <button
             className="text-white text-xl bg-gradient-to-r from-blue-500 to-teal-400  p-2 rounded-full w-[45px] focus:outline-none"
             onClick={() => setMenuOpen(!menuOpen)}
           >
             {menuOpen ? "✖" : "☰"}
           </button>
          )}

          {/* Navigation List */}
          <ul
            className={`md:flex flex-wrap space-x-4 md:space-x-0 gap-2 text-md uppercase ${
              isMobile
                ? `absolute top-[80px] left-0 w-full bg-black/90 p-4 transition-all duration-300 ${
                    menuOpen ? "block" : "hidden"
                  }`
                : ""
            }`}
          >
            <>
            {[" ","THE PROBLEM", "INSTRUCTOR", "THE SOLUTION", "TESTIMONIALS", "FAQ"].map((item) => (
                <>
              <li
                key={item}
                className={`cursor-pointer px-4 py-2 rounded-full transition-all ${
                  activeSection === item
                    ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white "
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </li>
            
             </>
            ))}
            </>
            <a href="https://rzp.io/rzp/SMMAW" target="_blank" rel="noopener noreferrer">
  <button
    style={{ borderRadius: 100, width: "170px" }}
    className="px-2 md:hidden py-2 bg-blue-500 glow-on-hover text-white text-md font-medium shadow-lg transition flex items-center gap-2"
  >
    ENROLL NOW →
  </button>
</a>
          </ul>

          <a href="https://rzp.io/rzp/SMMAW" target="_blank" rel="noopener noreferrer">
  <button
    style={{ borderRadius: 100, width: "170px" }}
    className="px-2 md:block hidden py-2 bg-blue-500 glow-on-hover text-white text-md font-medium shadow-lg transition flex items-center gap-2"
  >
    ENROLL NOW →
  </button>
</a>
        </div>
      </nav>
    </>
  );
}
