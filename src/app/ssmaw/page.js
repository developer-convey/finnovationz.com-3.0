'use client'
import React, { useState, useEffect } from "react";
// import TagManager from 'react-gtm-module';
import MeetPrasad from "./meetprasad";
import Trust from "./trust";
import InvestmentSection from "./investment";
import Support from "./support";
import FAQ from "./faq";
import Footer from "./footer";
import Investor from "./investors";
import Navbar from "./header";
import HowItWorks from "./howitwork";
import Home from "./topsection";
import Videoplay from "./video";
import './styles.css';

export default function Page() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // TagManager.initialize({ gtmId: 'AW-11292341588' });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Home />
      <Videoplay />
      <section id="THE PROBLEM"><Investor /></section>
      <section id="INSTRUCTOR"><MeetPrasad /></section>
      <section id="THE SOLUTION"><InvestmentSection /></section>
      <section id="TESTIMONIALS"><Trust /></section>
      <section id="support"><Support /></section>
      <section id="howitwork"><HowItWorks /></section>
      <section id="FAQ"><FAQ /></section>
      <Footer />

      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          TOP
        </button>
      )}
    </div>
  );
}