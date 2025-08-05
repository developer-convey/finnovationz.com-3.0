"use client"
import React, { useState, useEffect, useRef } from "react";
import ExperienceSection from './smmSection'
import dynamic from "next/dynamic";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

import { useRouter } from "next/navigation";
const RegistrationTime = dynamic(() =>
  import("@/app/components/SmmRegistrationTime")
);
const MoneyMystryProgramme = dynamic(() =>
  import("@/app/components/MoneyMystryProgramme")
);

import "bootstrap/dist/css/bootstrap.min.css";
const Timeline = dynamic(() => import("@/app/components/SmmTimeline"));
const Faq = dynamic(() => import("@/app/components/SmmwebinarFaq"));
import Form from './form'
const Expertise = dynamic(() => import("@/app/components/SmmExpertise"));
const Featured = dynamic(() => import("@/app/components/SmmFeatured"));
import  MentorIntroductionSection from './MentorIntroductionSection'
export default function page() {
    const [isHomeBannerVisible, setIsHomeBannerVisible] = useState(true);
    const [programmeData, setprogrammeData] = useState(null);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const homeBannerRef = useRef(null);
  
    const router = useRouter();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_WEBINAR_API_URL}webinarDetail?platform=money%20mastery%20programme`
          ); // Replace with your API endpoint
          const data = await response.json();
          setprogrammeData(data?.result[0]);
        } catch (error) {
          console.error("Error fetching API data:", error);
        }
      };
  
      const handleScroll = () => {
        if (window.scrollY > 10 && !hasScrolled) {
          setHasScrolled(true);
        }
      };
  
      const handleRouteChange = (url) => {
        typeof window !== "undefined" && window.fbq("track", "PageView"); // Track a page view event
      };
  
      // Initialize Facebook Pixel
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
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
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "403234998994611");
  
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver(([entry]) => {
        setIsHomeBannerVisible(!entry.isIntersecting);
      }, options);
  
      if (homeBannerRef.current) {
        observer.observe(homeBannerRef.current);
      }
  
      fetchData();
  
      window.addEventListener("scroll", handleScroll);
      handleRouteChange(router.asPath);
  
      if (router.events) {
        router.events.on("routeChangeComplete", handleRouteChange);
  
        return () => {
          router.events.off("routeChangeComplete", handleRouteChange);
        };
      }
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (homeBannerRef.current) {
          observer.unobserve(homeBannerRef.current);
        }
      };
    }, [router.events, homeBannerRef, setIsHomeBannerVisible, hasScrolled]);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the width condition as per your mobile screen criteria
      };
  
      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear();
  
      const daySuffix = (day) => {
        if (day > 3 && day < 21) return "th";
        switch (day % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      };
  
      return `${day}${daySuffix(day)} ${month} ${year}`;
    };
    const contactRef = useRef(null);  
    const scrollToContact = () => {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div>
        <DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" />
        <ExperienceSection  scrollToContact={scrollToContact}/>
        {isMobile && hasScrolled && (
        <>
          <Expertise />
          <RegistrationTime
         
            programmeData={programmeData}
            formatDate={formatDate}
          />
        </>
      )}
      {!isMobile && (
        <>
          <Expertise />
          <RegistrationTime
          
            programmeData={programmeData}
            formatDate={formatDate}
          />
        </>
      )}
      <Form ref={contactRef}/>
      <MoneyMystryProgramme/>
      <Timeline scrollToContact={scrollToContact}/>
     
      <MentorIntroductionSection/>
      <Featured scrollToContact={scrollToContact}/>
      
      <Faq />{" "}
      {/* <FixedFooter programmeData={programmeData}/> */}
    </div>
  )
}

