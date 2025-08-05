import React, { useMemo, useCallback } from "react";
import HeroCarousal from "../components/HeroCarousal";
import useScreenSize from "../hooks/useScreenSize";
// import "../career.scss";

const HeroSection = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  // Memoize the class name to prevent unnecessary string concatenations
  const contentClassName = useMemo(() => 
    `content ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`, 
    [isMobile, isTablet]
  );

  // Memoize the scroll handler to prevent unnecessary re-creation
  const handleApplyClick = useCallback(() => {
    const positionsElement = document.getElementById("positions");
    if (positionsElement) {
      positionsElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className={contentClassName}>
          <h1>
            <span>Life at</span>
            <br />
            FinnovationZ
          </h1>
          <br />
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p> */}
          <button
            onClick={handleApplyClick}
            className="action"
            aria-label="Open apply now form"
          >
            Apply Now
          </button>
        </div>

        <HeroCarousal />
      </div>
    </section>
  );
};

export default HeroSection;
