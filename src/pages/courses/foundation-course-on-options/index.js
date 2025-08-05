import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import "../../../app/coursesStyle/courses.css";
import courseData from "../../../app/commen/coursesdata/course3.json";
import ScrollableMenu from "@/app/components/ScrollableMenu";
import HomeBanner from "@/app/components/HomeBannercourses";
import JoinCourse from "@/app/components/JoinCourse";
import UserTestimonial from "@/app/components/UserTestimonialcourser";
import Trainer from "@/app/components/Trainer";
import Pricing from "@/app/components/Pricing";
import Candidate from "@/app/components/Candidate";
import Certification from "@/app/components/Certification";
import FAQ from "@/app/components/FAQ";
import Syllabus from "@/app/components/Syllabus";
import Header from "@/app/components/CoursesHeader";
import Head from "next/head";
import ScrollModal from "../ScrollModal";

// import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
// import Modal from "@/app/components/modalComponent/modal";
// import Footer from "@/app/quiz/components/Footer";
// import Header from "@/app/quiz/components/Header";
// import Header from "@/app/quiz/components/Header";
// import "../../app/finClub/style/finance.css";
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Foundation Course on Options",
  "description": "Learn options trading in Hindi from FinnovationZ. Master strategies and risk management in our options trading course. Enrol to get an instant discount",
  "provider": {
    "@type": "Organization",
    "name": "FinnovationZ",
    "url": "https://www.finnovationz.com"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "inLanguage": "hi-IN",
    "startDate": "2025-07-01",
    "courseWorkload": "PT6H"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.finnovationz.com/courses/foundation-course-on-options",
    "price": "6499",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "category": "Education"
  }

};
function Option() {
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const imageUrl = "https://courses.finnovationz.com/images/updated-3.webp";

  useEffect(() => {
    // Set a timer to show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?93705";
  //   script.async = true;
  //   script.onload = () => {
  //     const options = {
  //       enabled: true,
  //       chatButtonSetting: {
  //         backgroundColor: "#08e7a4",
  //         ctaText: "Chat with us",
  //         borderRadius: "25",
  //         marginLeft: "0",
  //         marginRight: "20",
  //         marginBottom: "20",
  //         ctaIconWATI: false,
  //         position: "right",
  //       },
  //       brandSetting: {
  //         brandName: "FinnovationZ",
  //         brandSubTitle: "undefined",
  //         brandImg:
  //           "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
  //         welcomeText: "Hello, How can I help you?",
  //         messageText: "",
  //         backgroundColor: "#08e7a4",
  //         ctaText: "Chat with us",
  //         borderRadius: "25",
  //         autoShow: false,
  //         phoneNumber: "7219465429",
  //       },
  //     };
  //     window.CreateWhatsappChatWidget(options);
  //   };

  //   document.body.appendChild(script);
  // }, []);

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
  }, []);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Header bool={true} />
      <Head>
        <title>
          Best Options Trading Course For Beginners | Start Your Journey Now
        </title>
        <meta name="keywords" content="Options Trading Course" />
        <meta
          name="description"
          content="Learn options trading in Hindi from FinnovationZ. Master 🚀 strategies and risk management in our options trading course. Enrol to get an instant discount"
        />
        <meta
          property="og:title"
          content="The Foundation Course On Options (Beginners)"
        />
        <meta
          property="og:description"
          content="The Foundation Course On Options (Beginners)"
        />
        <meta property="og:image" content={imageUrl} />
        {currentUrl && <meta property="og:url" content={currentUrl} />}
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="https://courses.finnovationz.com/images/updated-3.webp"
          type="image/png"
        />
           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
          key="course-schema"
        />
      </Head>
      {/* <Header /> */}
      {/* <Header  /> */}
      {!isHeroBannerInView && <ScrollableMenu />}
      {/* Using a div as a ref for the HomeBanner */}
      <div ref={heroBannerRef}>
        <HomeBanner data={courseData.banner} />
      </div>
      {/* Render other components */}
      <JoinCourse data={courseData.course} />
      <Syllabus data={courseData.syllabus} page="lessSyllabus" slideData={1} />
      <UserTestimonial data={courseData.user_testimonials} />
      <Trainer data={courseData.banner} />
      <Pricing data={courseData.pricing} />
      <Candidate data={courseData.candidate} />
      <Certification data={courseData.Certification} />
      <FAQ data={courseData.faq} />
      {/* <Footer/> */}
      <Brokerfooter />
      <ScrollModal/>
      {/* <Modal showModal={showModal} setShowModal={setShowModal} />{" "} */}
    </>
  );
}

export default Option;
