"use client";

import React, { useEffect } from "react";
import FinanceClubProSection from './FinanceClubProSection';
import StockCheatSheetSection from "./StockCheatSheetSection";
import MentorIntroductionSection from "./MentorIntroductionSection";
import ExperienceSection from "./ExperienceSec";
import StudentFeedback from "./StudentFeedback";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import Head from "next/head";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

export default function Home() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Initialize Meta Pixel (Facebook Pixel)
            (function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

            fbq("init", "403234998994611"); // Replace with your Meta Pixel ID
            fbq("track", "PageView"); // Track page view
        }
    }, []);

    return (
        <main className="min-h-screen bg-white">
        <DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" />
            <FinanceClubProSection />
            <StockCheatSheetSection />
            <MentorIntroductionSection />
            <ExperienceSection />
            <StudentFeedback />
            <TestimonialsSection />
            <Footer />
        </main>
    );
}
