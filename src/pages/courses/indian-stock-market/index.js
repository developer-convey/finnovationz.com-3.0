import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Candidate from "../../../app/components/Candidate";
import Certification from "../../../app/components/Certification";
import ClientTstimonial from "../../../app/components/ClientTstimonialcourses";
import FAQ from "../../../app/components/FAQ";import HomeBanner from "../../../app/components/HomeBannercourses";
import JoinCourse from "../../../app/components/JoinCourse";
import Pricing from "../../../app/components/Pricing";
import ScrollableMenu from "../../../app/components/ScrollableMenu";
import Syllabus from "../../../app/components/Syllabus";
import Trainer from "../../../app/components/Trainer";
import UserTestimonial from "../../../app/components/UserTestimonialcourser";
import courseData from "../../../app/commen/coursesdata/course2.json";

import courseData2 from "../../../app/commen/coursesdata/home.json";
import CourseSlider from "@/app/components/CourseSlider";
import { useRouter } from "next/router";
import ScrollModal from "../ScrollModal";

import Head from "next/head";
import "../../../app/coursesStyle/courses.css";
import Header from "@/app/components/CoursesHeader";
import Brokerfooter from "@/app/components/brokerFooter";
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Stock Market Beginner Course In Hindi",
  "description": "Our stock market beginner course covers everything from stock market investment & teaches you when to invest. Earn a certificate and enjoy unbeatable prices",
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
    "courseWorkload": "PT5H"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.finnovationz.com/courses/indian-stock-market",
    "price": "4999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "category": "Education"
  }
};
function StockMarket() {
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const imageUrl = "https://courses.finnovationz.com/images/indianThumb.png";

  useEffect(() => {
    // Set a timer to show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
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
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    const currentRef = heroBannerRef.current; // Create a variable to hold the ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const filteredCourse2 = {
    heading: courseData2.course2.heading, 
    sliderContent: courseData2.course2.sliderContent.filter(data => data.btnUrl !== pathname) // Filter the sliderContent
  };

  return (
    <>
      <Header bool={true}/>
      <Head>
        <title>
          Stock Market Beginner Course In Hindi | Learn From The Best
        </title>

        <meta name="keywords" content="Stock Market Beginner Course" />
        <meta
          name="description"
          content="Our stock market beginner course covers everything from stock market investment & teaches you when to invest. Earn a certificate and enjoy unbeatable prices"
        />

        <meta
          property="og:title"
          content="The Foundation Course On Indian Stock Market (Beginner)"
        />
        <meta
          property="og:description"
          content="The Foundation Course On Indian Stock Market (Beginner)"
        />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_BASE_URL + pathname}
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="https://courses.finnovationz.com/images/1.png"
          type="image/png"
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
          key="course-schema"
        />
      </Head>
      {!isHeroBannerInView && <ScrollableMenu />}
      <div ref={heroBannerRef}>
        <HomeBanner data={courseData.banner} />
      </div>
      <JoinCourse data={courseData.course} />
      <Syllabus data={courseData.syllabus} page="lessSyllabus" slideData={1} />
      <UserTestimonial data={courseData.user_testimonials} />
      <Trainer data={courseData.banner} />
      <Pricing data={courseData.pricing} />
      <Candidate data={courseData.candidate} />
      <Certification data={courseData.Certification} />
      <FAQ data={courseData.faq} />
      <CourseSlider data={filteredCourse2} sectionName="allcourses" />
      <ClientTstimonial data={courseData.clientTestimonial} />
      {/* <Footer /> */}
      <Brokerfooter />
      <ScrollModal/>
      {/* <Modal showModal={showModal} setShowModal={setShowModal} />{" "} */}
    </>
  );
}

export default StockMarket;
