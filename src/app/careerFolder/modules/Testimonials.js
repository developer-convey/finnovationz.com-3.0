import React, { useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { IMAGES } from "../assets/assets";
import useScreenSize from "../hooks/useScreenSize";
import Image from "next/image";

// Lazy load the TestimonialsSlider component
const TestimonialsSlider = dynamic(() => import("../components/TestimonialsSlider"), {
  loading: () => <div className="loading-placeholder">Loading testimonials...</div>,
  ssr: false
});

const Testimonials = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  // Memoize the class name to prevent unnecessary string concatenations
  const sectionClassName = useMemo(() => 
    `testimonials ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`,
    [isMobile, isTablet]
  );

  return (
    <section id="testimonials" className={sectionClassName}>
      <div className="container">
        <Image
          className="bg_ellipse"
          src={IMAGES.testimonialEllipse}
          alt="background style"
          width={1200}
          height={800}
          loading="lazy"
          quality={75}
          style={{ objectFit: "cover" }}
        />

        <h2>Testimonials of team</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p> */}

        <Suspense fallback={<div className="loading-placeholder">Loading testimonials...</div>}>
          <TestimonialsSlider />
        </Suspense>
      </div>

      <div className="curve c1">
        <Image 
          src={IMAGES.arc} 
          alt="" 
          loading="lazy"
          width={200}
          height={100}
          quality={60}
        />
      </div>

      <div className="curve c2">
        <Image 
          src={IMAGES.arc} 
          alt="" 
          loading="lazy"
          width={200}
          height={100}
          quality={60}
        />
      </div>
    </section>
  );
};

export default Testimonials;
