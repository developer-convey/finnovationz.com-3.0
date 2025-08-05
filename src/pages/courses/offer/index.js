import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import courseData from "../../../app/commen/coursesdata/course18.json";
import HomeBanner from "@/app/components/HomeBannercourses";
import JoinCourse from "@/app/components/JoinCourse";
import Syllabus from "@/app/components/Syllabus";
import UserTestimonial from "@/app/components/UserTestimonialcourser";
import Trainer from "@/app/components/Trainer";
import Candidate from "@/app/components/Candidate";
import Certification from "@/app/components/Certification";
import ClientTstimonial from "@/app/components/CliClientTstimonialCourses";
// import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import ScrollableMenu from "@/app/components/ScrollableMenu";
import "../../../app/coursesStyle/courses.css";
// import Header from "@/app/components/CoursesHeader";
import Head from "next/head";
// import Header from "@/app/components/header";
//import Brokerfooter from "@/app/components/brokerFooter";
import PricingCombo from "@/app/components/PricingForCombo";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";
// import Modal from "@/app/components/modalComponent/modal";
// import Footer from "@/app/quiz/components/Footer";
// import Header from "@/app/quiz/components/Header";
import Meta from "../../../component/Meta";
import ScrollModal from "../ScrollModal";

// const HomeBanner = lazy(() => import("../component/HomeBanner"));

function ValueInvesting() {
  const imageUrl = "https://courses.finnovationz.com/images/2.png";
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
  return (
    <>
      {/* <Header/> */}
      {/* <DiwaliOffSlider /> */}
      <Head>
        <title>
          Enrol Now For Value Investing Course & Avail 34% Discount
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
        <Meta />
        <link
          rel="icon"
          href="https://courses.finnovationz.com/images/2.png"
          type="image/png"
        />
        {/* Google Ads Global Site Tag (gtag.js) */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11292341588"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11292341588');
      `,
    }}
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
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11292341588"></script>

<script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-11292341588/cHbNCM6D9u8aENTqzYgq',
                'value': 1.0,
                'currency': 'INR',
                'transaction_id': ''
              });
            `,
          }}
        />
        
      </Head>
      {!isHeroBannerInView && <ScrollableMenu />}
      <div ref={heroBannerRef}>
        <Suspense fallback={<div className="loading-data">Loading...</div>}>
          <HomeBanner data={courseData.banner} />
        </Suspense>
      </div>
      <JoinCourse data={courseData.course} paymentdata={courseData.banner} />
      <Syllabus
        data={courseData.syllabus_for_foundation_course}
        slideData={1}
        customTitle="Syllabus for Foundation Course"
      />
      <Syllabus
        data={courseData.syllabus_for_fundamental_analysis_2}
        slideData={1}
        customTitle="Syllabus for Fundamental Analysis 3.0"
      />

      <Syllabus
        data={courseData.syllabus_for_Mutual_Fund}
        slideData={1}
        customTitle="Syllabus for Advance Mutual Fund"
      />

      <Syllabus
        data={courseData.syllabus_for_option}
        slideData={1}
        customTitle="Syllabus for Option Trading"
      />
      {/* <UserTestimonial data={courseData.user_testimonials} /> */}
      <Trainer data={courseData.banner} />
      <PricingCombo
  data={courseData.pricing}
  combo1={courseData.combo1}
  combo2={courseData.combo2}
/>

      <Candidate
        data={courseData.candidate}
        customTitle="This Combo is Designed For"
      />
      <Certification data={courseData.Certification} />
      <FAQ data={courseData.faq} />
      <ClientTstimonial data={courseData.clientTestimonial} paymentdata={courseData.banner} />
      {/* <Footer /> */}
      {/*<Brokerfooter />*/}
      {/* <ScrollModal/> */}
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

export default ValueInvesting;
