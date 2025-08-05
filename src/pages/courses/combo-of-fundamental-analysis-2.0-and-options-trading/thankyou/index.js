// src/ThankYou.js
import React from "react";
import "./../thankyou/thankyoucombo.css";
import Link from "next/link";
import Head from "next/head";
const ThankYouCombo = () => {
  return (
    <>
      <Head>
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=403234998994611&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </Head>
      <div className="thankyou-container">
        <div className="thankyou-card">
          <h1 className="thankyou-title">Thank You!</h1>
          <p className="thankyou-message">
            Check your email for payment receipt.
          </p>
          <div className="thankyou-icon-container">
            <img
              src="/images/Approval.webp"
              alt="checkmark"
              className="thankyou-icon"
            />
          </div>
          <div className="diwali-message">
            {/* <span role="img" aria-label="celebrate"> */}
              <img src="/images/tycelebration.webp" alt=""></img>
            {/* </span> */}
            <span>Diwali Sale is LIVE</span>
          </div>
          <p className="explore-message">
            Explore more Combo Courses that are on sale{" "}
            {/* <span role="img" aria-label="down arrow"> */}
              <img src="/images/thankyouhand.webp" alt=""></img>
            {/* </span> */}
          </p>

          <Link
            href="https://www.finnovationz.com/courses"
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <button className="courses-button">COURSES ON SALE</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYouCombo;
