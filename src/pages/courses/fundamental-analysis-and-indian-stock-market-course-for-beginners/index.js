import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import courseData from "../../../app/commen/coursesdata/course4.json";
import ScrollableMenu from "@/app/components/ScrollableMenu";
import JoinCourse from "@/app/components/JoinCourse";
import Syllabus from "@/app/components/Syllabus";
import UserTestimonial from "@/app/components/UserTestimonialcourser";
import Trainer from "@/app/components/Trainer";
import Pricing from "@/app/components/Pricing";
import Candidate from "@/app/components/Candidate";
import Certification from "@/app/components/Certification";
import FAQ from "@/app/components/FAQ";
import ClientTstimonial from "@/app/components/CliClientTstimonialCourses";
import HomeBanner from "@/app/components/HomeBannercourses";
import "../../../app/coursesStyle/courses.css";
import Header from "@/app/components/CoursesHeader";
import Head from "next/head";
import Brokerfooter from "@/app/components/brokerFooter";
import ScrollModal from "../ScrollModal";

import courseData2 from "../../../app/commen/coursesdata/home.json";
import CourseSlider from "@/app/components/CourseSlider";
import { useRouter } from "next/router";

function FundamentalAndIndian() {
  const imageUrl = "https://courses.finnovationz.com/images/";
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
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

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const filteredCourse2 = {
      heading: courseData2.course2.heading, 
      sliderContent: courseData2.course2.sliderContent.filter(data => data.btnUrl !== pathname) // Filter the sliderContent
    };

  return (
    <>
      <Header bool={true} />
      <Head>
        <title>Best Stock Market Courses Online | With 3 Mn+ Subscriber</title>
        <meta name="keywords" content="Stock Market Courses Online" />
        <meta
          name="description"
          content="Enroll in our online Stock Market courses to gain a solid understanding of finance in Hindi. Build a strong base for your investment knowledge"
        />
        <meta
          property="og:title"
          content="Combo of Foundation and Fundamental Course"
        />
        <meta
          property="og:description"
          content="Combo of Foundation and Fundamental Course"
        />
        <meta property="og:image" content={imageUrl} />
        {currentUrl && (
          <meta
            property="og:url"
            content={typeof window !== "undefined" ? window.location.href : ""}
          />
        )}

        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="https://courses.finnovationz.com/images/4.png"
          type="image/png"
        />
      </Head>
      {!isHeroBannerInView && <ScrollableMenu />}
      <div ref={heroBannerRef}>
        <HomeBanner data={courseData.banner} />
      </div>
      <JoinCourse data={courseData.course} />
      <Syllabus data={courseData.syllabus} page="lessSyllabus" slideData={3} />
      <UserTestimonial data={courseData.user_testimonials} />
      <Trainer data={courseData.banner} />
      <Pricing data={courseData.pricing} comboPages={true} />
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

export default FundamentalAndIndian;
