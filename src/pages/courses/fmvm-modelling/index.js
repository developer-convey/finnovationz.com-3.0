import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import courseData from "../../../app/commen/coursesdata/course23.json";
import Syllabus from "@/app/components/Syllabus";
import UserTestimonial from "@/app/components/UserTestimonialcourser";
import Trainer from "@/app/components/Trainer";
import FAQ from "@/app/components/FAQ";
import ScrollableMenu from "@/app/components/ScrollableMenu";
import "../financial-modelling-course/newcourse.css";
import Homebanner from "@/component/fmvm-modelling/Homebanner";
import Modal from "@/app/components/modalComponent/modal";
import JoinCourseNew from "@/pages/courses/fmvm-modelling/components/JoinCourseNew";
import Head from "next/head";
import NewCandidate from "@/component/fmvm-modelling/components/NewCandidate";
import NewCertification from "@/component/fmvm-modelling/components/NewCertificate";
import NewClientTstimonial from "@/component/fmvm-modelling/components/NewTestTestimonial";
import "@/app/coursesStyle/courses.css";
import Script from 'next/script';
import ScrollModal from "../ScrollModal";
import FmvmForm from '../../../app/components/FmvmForm'
function FundamentalAnalysis() {
  const imageUrl = "https://courses.finnovationz.com/images/2.png";
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const enquiryFormSetId = "1750858231581";
    const thankYouPageUrl = "/courses/fmvm-modelling/thankyou"; 
  useEffect(() => {
    // Load Google Tag Manager script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16776567672";
    document.head.appendChild(script);

    // Initialize Google Tag Manager
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-16776567672");
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
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "p86zeg89yz");
            `,
          }}
        />
          <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','AW-11292341588');
            `,
          }}
        />
  <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';

  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);

})(window, document, 'script', 'dataLayer', 'GTM-NXH6WJJQ');
`,
}}
/>

            {/* Google Tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16776567672"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16776567672');
          `,
        }}
      />
        <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-16776567672/k7JOCOixivUZEPi22L8-'
            });
          `,
        }}
      />

      </Head>
        
      {!isHeroBannerInView && <ScrollableMenu showPricing={false} />}
      <div ref={heroBannerRef}>
        <Suspense fallback={<div className="loading-data">Loading...</div>}>
          <Homebanner data={courseData.banner}  onEnquiryClick={() => setShowEnquiryModal(true)} />
        </Suspense>
      </div>
      <JoinCourseNew data={courseData.course} onEnquiryClick={() => setShowEnquiryModal(true)} />
      <Syllabus data={courseData.syllabus} slideData={1} />
      <UserTestimonial data={courseData.user_testimonials} />
      <Trainer data={courseData.banner} />
      <NewCandidate data={courseData.candidate} onEnquiryClick={() => setShowEnquiryModal(true)} />
      <NewCertification data={courseData.Certification} onEnquiryClick={() => setShowEnquiryModal(true)} />
      <FAQ data={courseData.faq} />
      <NewClientTstimonial data={courseData.clientTestimonial} onEnquiryClick={() => setShowEnquiryModal(true)} />
      <Modal />
      <ScrollModal/>
      <FmvmForm
        show={showEnquiryModal}
        handleClose={() => setShowEnquiryModal(false)}
        setId={enquiryFormSetId}
        title="FMVM Form"
        redirectUrl={thankYouPageUrl}
      />
    </>
  );
}

export default FundamentalAnalysis;
