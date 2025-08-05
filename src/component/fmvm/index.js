import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import courseData from "../../../app/commen/coursesdata/course4.json";
import Syllabus from "@/app/components/Syllabus";
import UserTestimonial from "@/app/components/UserTestimonialcourser";
import Trainer from "@/app/components/Trainer";
import Candidate from "@/app/components/Candidate";
import Certification from "@/app/components/Certification";
import ClientTstimonial from "@/app/components/CliClientTstimonialCourses";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import ScrollableMenu from "@/app/components/ScrollableMenu";
import "../financial-modelling-course/newcourse.css";
import Homebanner from "./Homebanner";
import ScrollModal from "./courses/ScrollModal";

import Modal from "@/app/components/modalComponent/modal";
// import JoinCourse from "./JoinCourseNew";
import JoinCourseNew from "../../pages/courses/fmvm/components/JoinCourseNew";
// import JoinCourse from "@/app/components/JoinCourse";
import Head from "next/head";
import NewCandidate from "./components/NewCandidate";
import NewCertification from "./components/NewCertificate";
import NewClientTstimonial from "./components/NewTestTestimonial";
// import Header from "@/app/components/CoursesHeader";
import "../../../app/coursesStyle/courses.css";

function FundamentalAnalysis() {
  const imageUrl = "https://courses.finnovationz.com/images/2.png";
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Load Google Tag Manager script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-10807341659";
    document.head.appendChild(script);

    // Initialize Google Tag Manager
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-10807341659");
    };

    // Cleanup script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroBannerRef.current) {
            setIsHeroBannerInView(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = heroBannerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isClient]);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  return (
    <>
      {/* <Header bool={true} /> */}
      <Head>
        <title>Financial Modelling and Valuation Mentorship (FMVM)</title>
        <meta name="keywords" content="Financial Modelling Course" />
        <meta
          name="description"
          content="Financial modelling course and valuation mentorship: A 3 month program that covers stock selection, DCF calculation, and more. Start your journey"
        />
        <meta
          property="og:title"
          content="The Complete Course On Fundamental Analysis"
        />
        <meta
          property="og:description"
          content="The Complete Course On Fundamental Analysis"
        />
        <meta property="og:image" content={imageUrl} />
        {currentUrl && (
          <meta property="og:url" content={window.location.href} />
        )}
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="https://courses.finnovationz.com/images/2.png"
          type="image/png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
               !function(f,b,e,v,n,t,s)
               {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
               n.callMethod.apply(n,arguments):n.queue.push(arguments)};
               if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
               n.queue=[];t=b.createElement(e);t.async=!0;
               t.src=v;s=b.getElementsByTagName(e)[0];
               s.parentNode.insertBefore(t,s)}(window, document,'script',
               'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '403234998994611');
               fbq('track', 'PageView');
             `,
          }}
        />
      </Head>
      {!isHeroBannerInView && <ScrollableMenu showPricing={false} />}
      <div ref={heroBannerRef}>
        <Suspense fallback={<div className="loading-data">Loading...</div>}>
          <Homebanner data={courseData.banner} />
        </Suspense>
      </div>
      <JoinCourseNew data={courseData.course} />
      <Syllabus data={courseData.syllabus} slideData={1} />
      <UserTestimonial data={courseData.user_testimonials} />
      <Trainer data={courseData.banner} />
      <NewCandidate data={courseData.candidate} />
      <NewCertification data={courseData.Certification} />
      <FAQ data={courseData.faq} />
      <NewClientTstimonial data={courseData.clientTestimonial} />
      <Modal />
      <ScrollModal/>
    </>
  );
}

export default FundamentalAnalysis;
