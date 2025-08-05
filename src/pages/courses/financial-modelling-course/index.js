import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import courseData from "../../../app/commen/coursesdata/course4.json";
// import HomeBanner from "@/app/components/HomeBannercourses";
import JoinCourse from "@/app/components/JoinCourse";
import Syllabus from "@/app/components/Syllabus";
import UserTestimonial from "@/app/components/UserTestimonialcourser";
import Trainer from "@/app/components/FMVMTrainer";
import Candidate from "@/app/components/FMVMCandidate";
import Certification from "@/app/components/Certification";
import ClientTstimonial from "@/app/components/CliClientTstimonialCourses";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import ScrollableMenu from "@/app/components/ScrollableMenu";
import "./newcourse.css";
import Header from "@/app/components/CoursesHeader";
import Head from "next/head";
import ScrollModal from "../ScrollModal";
import  Equity  from "@/app/components/Equityform";
import  BrochureDownloadModal  from "@/app/components/BrochureDownloadModal";

// import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import NewHomeBanner from "../../../component/financial-modelling-course/NewHomeBanner";
import Modal from "@/app/components/modalComponent/modal";

import courseData2 from "../../../app/commen/coursesdata/home.json";
import CourseSlider from "@/app/components/CourseSlider";
import { useRouter } from "next/router";
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Financial modelling course and valuation mentorship: A 3 month program that covers stock selection, DCF calculation, and more. Start your journey",
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
    "courseWorkload": "PT12H"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.finnovationz.com/courses/financial-modelling-course",
    "price": "29999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "category": "Education"
  }

};
function FundamentalAnalysis() {
  const imageUrl = "https://courses.finnovationz.com/images/2.png";
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const handleOpenBrochureModal = () => {
    console.log("Download Brochure button was clicked!");
    setShowBrochureModal(true);
  };
  const router = useRouter();
  const { pathname } = router;


  const brochureSetId = "1751283513381 "; 
  
  // IMPORTANT: Replace this with your actual S3 URL for the brochure PDF
  const brochureS3Url = "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/finnovationz/webinar/Invester%20Final%201_.pdf "; 

  useEffect(() => {
    // Set a timer to show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Clean up the timer if the component is unmounted
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
          key="course-schema"
        />
      </Head>
      {!isHeroBannerInView && <ScrollableMenu />}
      <div ref={heroBannerRef}>
        <Suspense fallback={<div className="loading-data">Loading...</div>}>
          {/* <HomeBanner data={courseData.banner} /> */}
          <NewHomeBanner data={courseData.banner} onBrochureClick={handleOpenBrochureModal} />
        </Suspense>
      </div>
      <JoinCourse data={courseData.course} onBrochureClick={handleOpenBrochureModal}/>
      <Syllabus data={courseData.syllabus} slideData={1} />
      <UserTestimonial data={courseData.user_testimonials} />
      <Trainer data={courseData.banner} />
      {/* <Pricing data={courseData.pricing} /> */}
      <Candidate data={courseData.candidate} dummy="X" dummy1='fmvm'  onBrochureClick={handleOpenBrochureModal}/>
      <Certification data={courseData.Certification} dummy="X" dummy1="fmvm" onBrochureClick={handleOpenBrochureModal}/>
      {/*<ClientTstimonial data={courseData.clientTestimonial} dummy="x"  onBrochureClick={handleOpenBrochureModal} /> */}
      <FAQ data={courseData.faq} />
     {/* <CourseSlider data={filteredCourse2} sectionName="allcourses" /> */}
      
      {/* <Footer /> */}
      <Brokerfooter />
      <ScrollModal/>
      <BrochureDownloadModal
        show={showBrochureModal}
        handleClose={() => setShowBrochureModal(false)}
       
        setId={brochureSetId}
      />
      <Modal></Modal>
    </>
  );
}

export default FundamentalAnalysis;
