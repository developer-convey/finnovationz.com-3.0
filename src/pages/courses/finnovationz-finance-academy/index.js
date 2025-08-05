import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import courseData from "../../../app/commen/coursesdata/course8.json";
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
import Brokerfooter from "@/app/components/brokerFooter";
import ScrollModal from "../ScrollModal";

import courseData2 from "../../../app/commen/coursesdata/home.json";
import CourseSlider from "@/app/components/CourseSlider";
import { useRouter } from "next/router";

function FundamentalAnalysis() {
  const imageUrl = "https://courses.finnovationz.com/images/2.png";
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const { pathname } = router;

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
        <title>
          FinnovationZ Finance Academy | Boost Your Share Market Skills
        </title>
        <meta name="keywords" content="FinnovationZ Finance Academy" />
        <meta
          name="description"
          content="Enhance your share market skills with FinnovationZ Finance Academy. Transform 🚀 your skills now and learn from industry👨‍💼 expert!"
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
      </Head>
      {!isHeroBannerInView && <ScrollableMenu />}
      <div ref={heroBannerRef}>
        <Suspense fallback={<div className="loading-data">Loading...</div>}>
          <HomeBanner data={courseData.banner} />
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
