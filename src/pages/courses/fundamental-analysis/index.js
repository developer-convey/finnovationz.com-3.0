import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import courseData from "../../../app/commen/coursesdata/course1.json";
import HomeBanner from "@/app/components/HomeBannercourses";
import JoinCourse from "@/app/components/JoinCourse";
import Syllabus from "@/app/components/Syllabus";
import UserTestimonial from "@/app/components/UserTestimonialcourser";
import Trainer from "@/app/components/Trainer";
import Candidate from "@/app/components/Candidate";
import Certification from "@/app/components/Certification";
import ClientTstimonial from "@/app/components/CliClientTstimonialCourses";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import ScrollableMenu from "@/app/components/ScrollableMenu";
import "../../../app/coursesStyle/courses.css";
import Header from "@/app/components/CoursesHeader";
import Head from "next/head";
import ScrollModal from "../ScrollModal";

// import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import courseData2 from "../../../app/commen/coursesdata/home.json";
import CourseSlider from "@/app/components/CourseSlider";
import { useRouter } from "next/router";
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "The Complete Course on Fundamental Analysis 3.0",
  "description": "Fundamental analysis course in Hindi helps you understand important parameters from the ﬁnancial statements such as balance sheet, P&L and cash flow statement",
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
    "courseWorkload": "PT10H"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.finnovationz.com/courses/fundamental-analysis",
    "price": "8999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "category": "Education"
  }
};
function FundamentalAnalysis() {
  const imageUrl = "https://courses.finnovationz.com/images/2.png";
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { pathname } = router;

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
    if (isClient) {
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
    }
  }, [isClient]);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const filteredCourse2 = {
      heading: courseData2.course2.heading, 
      sliderContent: courseData2.course2.sliderContent.filter(data => data.btnUrl !== pathname) // Filter the sliderContent
    };
  return (
    <>
      <Header bool={true} />
      <Head>
        <title>
          Enrol Now For Fundamental Analysis Course & Avail 34% Discount
        </title>
        <meta name="keywords" content="Fundamental Analysis Course" />
        <meta
          name="description"
          content="Fundamental analysis course in Hindi helps you understand important parameters from the ﬁnancial statements such as balance sheet, P&L and cash flow statement"
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
          key="course-schema"
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
                fbq('init', '7036475446402100');
                fbq('track', 'PageView');
              `,
          }}
        />
      </Head>
      {!isHeroBannerInView && <ScrollableMenu />}
      <div ref={heroBannerRef}>
        <Suspense fallback={<div className="loading-data">Loading...</div>}>
          <HomeBanner data={courseData.banner}  />
        </Suspense>
      </div>
      <JoinCourse data={courseData.course} />
      <Syllabus data={courseData.syllabus} slideData={1} />
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
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

export default FundamentalAnalysis;
