import React, { useState, useEffect, useRef, Suspense } from "react";
import Head from "next/head";
import courseData from "../../app/commen/coursesdata/home.json";
import "../../app/coursesStyle/courses.css";
import Meta from "@/component/Meta";

import CourseSlider from "@/app/components/CourseSlider";
import Chooseus from "@/app/components/Chooseus";
import ScrollModal from "./ScrollModal.js";
import Popup from '../../component/popup'
import ClientTstimonial from "@/app/components/CliClientTstimonialCourses";
import Community from "@/app/components/Community";
import Certification from "@/app/components/Certification";
import FAQ from "@/app/components/FAQ";
import HomeMenu from "@/app/components/HomeMenu";
import CtaBottom from "@/app/components/CtaCourseBottom";
import HeroBanner from "@/app/components/cousesHeroBanner";
import Trainer from "@/app/components/Trainer";
// import Modal from '../../app/components/modalComponent/modal';
import Header from "@/app/components/CoursesHeader";
// import Footer from "@/app/quiz/components/Footer";
// import Header from "@/app/components/header";
// import CourseHeader from "@/app/components/CoursesHeader";
import Brokerfooter from "@/app/components/brokerFooter";
//import DiwaliOffSlider from "@/app/components/coursetopofferslider";
// import Fakefooter from "@/app/components/brokerFooter/Fakefooter";
// import "./Brokerfooter.css";
// import Coursefooter from "./Coursefooter";
// import Header from "@/app/quiz/components/Header";
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "FinnovationZ Courses",
  "url": "https://www.finnovationz.com/courses",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Financial Modelling and Valuation Mentorship (FMVM)",
        "description": "Financial modelling course and valuation mentorship: A 3 month program that covers stock selection, DCF calculation, and more. Start your journey",
        "url": "https://www.finnovationz.com/courses/financial-modelling-course",
        "provider": {
          "@type": "Organization",
          "name": "FinnovationZ",
          "url": "https://www.finnovationz.com"
        },
        "offers": {
          "@type": "Offer",
          "price": "49999",
          "priceCurrency": "INR",
          "availability": "https://schema.org/OnlineOnly",
          "category": "Paid"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "PT40H"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Value Investing Cohort",
        "description": "Master the art of value investing with our Hindi course. Learn how to identify undervalued stocks using proven strategies from legends like Warren Buffett.",
        "url": "https://www.finnovationz.com/courses/value-investing",
        "provider": {
          "@type": "Organization",
          "name": "FinnovationZ",
          "url": "https://www.finnovationz.com"
        },
        "offers": {
          "@type": "Offer",
          "price": "contact us",
          "priceCurrency": "INR",
          "availability": "https://schema.org/OnlineOnly",
          "category": "Paid"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "PT25H"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Complete Course On Fundamental Analysis",
        "description": "Fundamental analysis course in Hindi helps you understand important parameters from the ﬁnancial statements such as balance sheet, P&L and cash flow statement",
        "url": "https://www.finnovationz.com/courses/fundamental-analysis",
        "provider": {
          "@type": "Organization",
          "name": "FinnovationZ",
          "url": "https://www.finnovationz.com"
        },
        "offers": {
          "@type": "Offer",
          "price": "3495",
          "priceCurrency": "INR",
          "availability": "https://schema.org/OnlineOnly",
          "category": "Paid"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "PT30H"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Foundation Course On Indian Stock Market",
        "description": "Our stock market beginner course covers everything from stock market investment & teaches you when to invest. Earn a certificate and enjoy unbeatable prices",
        "url": "https://www.finnovationz.com/courses/indian-stock-market",
        "provider": {
          "@type": "Organization",
          "name": "FinnovationZ",
          "url": "https://www.finnovationz.com"
        },
        "offers": {
          "@type": "Offer",
          "price": "4999",
          "priceCurrency": "INR",
          "availability": "https://schema.org/OnlineOnly",
          "category": "Paid"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "P3M"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Course",
        "name": "Advanced Course on Mutual Funds",
        "description": "The advanced mutual fund course teaches how to invest in mutual funds in simple language. Enrol now and start planning for your financial future today",
        "url": "https://www.finnovationz.com/courses/the-advanced-course-on-mutual-funds",
        "provider": {
          "@type": "Organization",
          "name": "FinnovationZ",
          "url": "https://www.finnovationz.com"
        },
        "offers": {
          "@type": "Offer",
          "price": "3999",
          "priceCurrency": "INR",
          "availability": "https://schema.org/OnlineOnly",
          "category": "Paid"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "PT20H"
        }
      }
    }
  ]

};
function Home() {
  const [isHeroBannerInView, setIsHeroBannerInView] = useState(true);
  const heroBannerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

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

  return (
    <>
        <Meta />

      {/* <DiwaliOffSlider /> */}
      <Header bool={true} coursebool />
      {/* <Header /> */}
      <Head>
        <title>
          Best Share Market Courses & Certificate Online | Enrol Now
        </title>
        <meta name="keywords" content="Share Market Courses	" />
        <meta
          name="description"
          content="These share market courses are designed to provide a better understanding of stock and investment strategies. Join 3 million learners - Enroll now!"
        />
        <meta property="og:title" content="Finnovation Courses" />
        <meta property="og:description" content="Finnovation Courses" />
        <meta
          property="og:image"
          content="https://courses.finnovationz.com/featured-image.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Google Tag Manager Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10807341659"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10807341659');
            `,
          }}
        ></script>
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
               fbq('init', '403234998994611');
               fbq('track', 'PageView');
             `,
          }}
        />
      </Head>

      {!isHeroBannerInView && <HomeMenu />}
      <div ref={heroBannerRef}>
        <Suspense fallback={<div className="loading-data">Loading...</div>}>
          <HeroBanner />
        </Suspense>
      </div>
      <CourseSlider data={courseData.course1} setheight="cardheight" />
      <Trainer />
      <Chooseus />
      <CourseSlider data={courseData.course2} sectionName="allcourses" />
      <div className="home_testimonial">
        <ClientTstimonial data={courseData.clientTestimonial} page="home" />
      </div>
      <Community />
      <Certification data={courseData.Certification} page="home" />
      <FAQ data={courseData.faq} />
      {/* <Coursefooter/>    */}
      <Brokerfooter />
      <ScrollModal />

      {/* <Footer /> */}
      {/* <Fakefooter/> */}

      <ScrollModal/>
     
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

export default Home;
