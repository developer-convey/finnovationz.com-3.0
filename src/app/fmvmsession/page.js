'use client'
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import courseData from "../commen/coursesdata/course21.json";
import PricingCombo from "@/app/components/PricingForCombo";
import FeaturedPage from './featured';
import Victopsection from './victopsection';
import Expertise from './expertise';
import RegistrationTime from './registrationtime';
import MoneyMystryProgramme from './moneymastry';
import Featured from './assoonon';
import FeaturedOn from './featuredon';

export default function page() {
  const pathname = usePathname();

  useEffect(() => {
    // Load Facebook Pixel script
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    fbq('init', '403234998994611'); // Replace with your actual Pixel ID
    fbq('track', 'PageView');
  }, []);

  useEffect(() => {
    // Track page view on route change
    fbq?.('track', 'PageView');
  }, [pathname]);

  return (
    <div>
      <Victopsection />
      <Expertise />
      <RegistrationTime />
      <PricingCombo
        data={courseData.pricing}
        combo1={courseData.combo1}
      />
      <MoneyMystryProgramme />
      <Featured />
      <FeaturedPage />
      <FeaturedOn />
    </div>
  );
}
