"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "./DiwaliOfferSlider.css";
import { FaHandPointRight } from "react-icons/fa";

const DiwaliOffSlider = ({ redirectUrl = "/", targetId = "" }) => {
  const pathname = usePathname();
  const finalUrl = `${redirectUrl}${targetId ? `#${targetId}` : ""}`;

  const hideOnPages = [
    "/courses/combo",
    "/courses/fmvm",
    "/courses/offer",
    "/courses/offer/thankyou",
    "/courses/offer-marathi",
    "/courses/offer-marathi/thankyou",
    "/courses/combo/thankyou",
  ];

  const isHidden = hideOnPages.includes(pathname);

  return (
    <div className={`divali-slider-container ${isHidden ? "d-none" : ""}`}>
      {/* Entire banner is now clickable */}
      <a href={finalUrl} className="clickable-banner-link">
        <div className="image-banner-wrapper">

          {/* === Desktop Image === */}
          <img
            src="/topoffer.png"
            alt="Independence Day Offer"
            className="offer-banner-image desktop-only"
          />

          {/* === Mobile Section === */}
          <div className="mobile-offer-wrapper mobile-only">
            <img
              src="/inde.svg"
              alt="Happy Independence Day"
              className="mobile-banner-image"
            />
            <div className="mobile-banner-text">
              <span className="highlight-orange">Freedom Sale LIVE  </span>
              <br></br>
              <span className="highlight-black">Enjoy up to </span>
              <span className="highlight-green">60% OFF </span>
              <span className="highlight-black">on Our Best Finance Courses!</span>
            </div>
            <div className="offer-banner-button mobile-btn">
              <FaHandPointRight style={{ marginRight: "4px" }} />
              <span>VIEW OFFER</span>
            </div>
          </div>

          {/* === Floating Button for Desktop === */}
          <div className="offer-banner-button desktop-btn">
            <FaHandPointRight style={{ marginRight: "4px" }} />
            <span>VIEW OFFER</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DiwaliOffSlider;
