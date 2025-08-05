import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Candidate from "../../../app/components/Candidate";
import Certification from "../../../app/components/Certification";
import ClientTstimonial from "../../../app/components/ClientTstimonial";
import FAQ from "../../../app/components/FAQ";
import HomeBanner from "../../../app/components/HomeBannercourses";
import JoinCourse from "../../../app/components/JoinCourse";
// import Pricing from '../component/Pricing';
import ScrollableMenu from "../../../app/components/ScrollableMenu";
import Syllabus from "../../../app/components/Syllabus";
import Trainer from "../../../app/components/Trainer";
import UserTestimonial from "../../../app/components/UserTestimonial";
import courseData from "../../../app/commen/coursesdata/FreeCourses.json";
import Head from "next/head";
import { useRouter } from "next/router";
import "../../../app/coursesStyle/courses.css";
import ScrollModal from "../ScrollModal";

// import CoursesHeader from "../../../app/components/CoursesHeader";
import Header from "../../../app/components/CoursesHeader";
import Link from "next/link";
import Brokerfooter from "@/app/components/brokerFooter";
// import Header from "@/app/components/header";
// import Modal from "@/app/components/modalComponent/modal";
// import Footer from "@/app/quiz/components/Footer";
// import Header from "@/app/quiz/components/Header";

function FreeCourses() {
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const imageUrl = "https://courses.finnovationz.com/images/indianThumb.png";
  const handleEnrollClick = () => {
    router.push("/forms"); // Navigate to the desired URL
  };

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
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-10807341659";
    script.async = true;
    document.body.appendChild(script);

    const scriptContent = document.createElement("script");
    scriptContent.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'AW-10807341659');
    `;
    document.body.appendChild(scriptContent);
  }, []);

  return (
    <>
      <Header bool={true} />
      <Head>
        <title>
          Stock Market Beginner Course In Hindi | Learn From The Best
        </title>

        <meta name="keywords" content="Stock Market Beginner Course" />
        <meta
          name="description"
          content="Our stock market beginner course covers everything from stock market investment instruments to knowing when to invest. Earn a certificate and enjoy unbeatable prices"
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

        {/* Meta Pixel Code */}
        <script>
          {`
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
          `}
        </script>
        <noscript>
          {`
            <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=403234998994611&ev=PageView&noscript=1"
            />
          `}
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>
      {!isHeroBannerInView && <ScrollableMenu />}
      <div ref={heroBannerRef}>
        <HomeBanner data={courseData.banner} page="freeCourses" />
      </div>
      <JoinCourse data={courseData.course} page="freeCourses" />
      <Syllabus
        data={courseData.syllabus}
        page="lessSyllabus free-courses"
        slideData={1}
      />
      <UserTestimonial data={courseData.user_testimonials} />
      <Trainer data={courseData.banner} />
      {/* <Pricing data={courseData.pricing}/> */}
      <Candidate data={courseData.candidate} page="freeCourses" />
      <Certification data={courseData.Certification} page="freeCourses" />
      <FAQ data={courseData.faq} />
      <ClientTstimonial
        data={courseData.clientTestimonial}
        page="freeCourses"
      />
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center h-100">
                <img src="/prasadS.webp" alt="" />
                <div className="inner-content">
                  <h4>
                    Get 6 Animated Stock Market Courses of ₹21,700 for Free
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <ul className="list-unstyled mb-0 d-flex align-items-center">
                <li>
                  <button className="d-flex align-items-center flex-wrap justify-content-center">
                    <div>
                      {" "}
                      <del>₹21,700</del> <br />
                    </div>
                    <Link
                      href="/courses/free-stock-market-course/form"
                      className="site_btn shadow ms-3 text-decoration-none"
                    >
                      Enrol Now
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <Brokerfooter />
      <ScrollModal/>
      {/* <Modal showModal={showModal} setShowModal={setShowModal} />{" "} */}
    </>
  );
}

export default FreeCourses;
