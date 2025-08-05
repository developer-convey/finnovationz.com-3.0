"use client"
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { FaHandPointDown } from "react-icons/fa";
import "./thankyou.css";

function ThankYouPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This hook ensures browser-only code runs after the component has mounted, preventing hydration errors.
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render nothing or a loading spinner on the server and initial client render
    return null; 
  }

  return (
    <>
      {/* All meta info and scripts now correctly live inside the Head component */}
      <Head>
        <title>Thank You</title>
        <link rel="canonical" href="https://www.finnovationz.com/thank-you" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* GTM and FB Pixel Scripts using the recommended Next.js <Script> component */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','AW-11292341588');
          `,
        }}
      />
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
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

      <div className="imgbackground">
        <h1 className="congratsTitle">
            Congratulations !!!
        </h1>
        

        <p className="communityText">
        You will have access to the course within <span>24</span> hours.
        </p>

        <div className="infoBox">
            <p className="infoBoxText">
                Check-out our other <span>Courses</span> there.
            </p>
        </div>

        <div className="iconHand">
            <FaHandPointDown />
        </div>

        <Link href="https://www.finnovationz.com/courses" className="ctaButton">
            Go to all courses
        </Link>

        <img
            src="/4262880_2251424 1.png"
            className="finalImage"
            alt="Thank you illustration"
        />
      </div>
    </>
  );
}

export default ThankYouPage;