"use client"; // Required in App Router for hooks


import React from "react";
import { usePathname } from "next/navigation";
import "./DiwaliOfferSlider.css";


const DiwaliOffSlider = ({ redirectUrl = "/", targetId = "" }) => {
  const pathname = usePathname();
  const finalUrl = `${redirectUrl}${targetId ? `#${targetId}` : ""}`;


  // Define pages where you want to HIDE the slider
  const hideOnPages = ['/courses/combo', '/courses/fmvm', '/courses/offer', '/courses/offer/thankyou', '/courses/offer-marathi', '/courses/offer-marathi/thankyou','/courses/combo/thankyou']


  // Determine visibility
  const isHidden = hideOnPages.includes(pathname);


  return (
    <div className={`divali-slider-container ${isHidden ? "d-none" : ""}`}>
      <a href={finalUrl} className="slider-link text-decoration-none">
        <div className="slider-text">
          {[...Array(10)].map((_, index) => (
            <p key={index} className="scrolling-text">
              <span style={{ color: "yellow" }}>Independence Day Sale</span>
              <span style={{ color: "white" }}> 🌨🎉</span>
            </p>
          ))}
        </div>
      </a>
    </div>
  );
};


export default DiwaliOffSlider;