"use client"
import React, { useState, useEffect, useRef } from "react";
import HeroSection from './HeroSection'
import WebinarCard from './webinar'
import WhyNeedProgram from './whyneedprogram'
import AreYouConvinced from './areyouconvinced'
import BonusSection from './bonussection'
import Form from './form'
import WhatYouWillLearn from './whatyouwilllearn'
import Testimonials from './testimonials'
import MentorSection from './mentorsection'
import AutoScrollSlider from './featuredon'
import Price from './price'
import Featured from '@/app/components/SharemmFeatured'
import courseData from "../../app/commen/coursesdata/course14.json";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

export default function page() {
  const contactRef = useRef(null);  
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
          if (typeof window !== "undefined") {
              // Initialize Meta Pixel (Facebook Pixel)
              (function (f, b, e, v, n, t, s) {
                  if (f.fbq) return;
                  n = f.fbq = function () {
                      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                  };
                  if (!f._fbq) f._fbq = n;
                  n.push = n;
                  n.loaded = !0;
                  n.version = "2.0";
                  n.queue = [];
                  t = b.createElement(e);
                  t.async = !0;
                  t.src = v;
                  s = b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t, s);
              })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  
              fbq("init", "403234998994611"); // Replace with your Meta Pixel ID
              fbq("track", "PageView"); // Track page view
          }
      }, []);

      {/* useEffect(() => {
        if (typeof window !== "undefined") {
          const gtmScript = document.createElement('script');
          gtmScript.async = true;
          gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=AW-11292341588'; // Replace with your GTM ID
          document.head.appendChild(gtmScript);
    
          const noscript = document.createElement('noscript');
          noscript.innerHTML = `
            <iframe src="https://www.googletagmanager.com/ns.html?id=AW-11292341588"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `;
          document.body.appendChild(noscript);
        }
      }, []);*/}
  return (
    
    <div>
        <DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" />
        <HeroSection scrollToContact={scrollToContact}/>
        <WebinarCard scrollToContact={scrollToContact}/>
        <AutoScrollSlider/>
        <Form ref={contactRef}/>

        <WhyNeedProgram/>
        <AreYouConvinced scrollToContact={scrollToContact}/>
        <BonusSection/>
        <Price data={courseData.pricing} scrollToContact={scrollToContact}/>
        <WhatYouWillLearn/>
        <Testimonials/>
        <MentorSection scrollToContact={scrollToContact}/>
        <Featured/>
    </div>
  )
}
