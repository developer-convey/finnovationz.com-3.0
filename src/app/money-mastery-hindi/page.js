"use client"
import React, { useState, useEffect, useRef } from "react";
import CourseModule from '@/app/money-mastery-hindi/components/topsection'
import NewModule from '@/app/money-mastery-hindi/components/program'
import AreYouConvinced from '@/app/money-mastery-hindi/components/areyouconvinced'
import BonusSection from '@/app/money-mastery-hindi/components/bonus'
import RegisterForm from '@/app/money-mastery-hindi/components/regiform'
import CourseBenefits from '@/app/money-mastery-hindi/components/coursebenifits'
import Testimonials from '@/app/money-mastery-hindi/components/testimonial'
import MentorIntroductionSection from '@/app/money-mastery-hindi/components/mentorintro'
import TeamShowcase from '@/app/money-mastery-hindi/components/teamshowcase'
import Featured from '@/app/money-mastery-hindi/components/featured'
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

export default function page() {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
        <DiwaliOffSlider redirectUrl="/courses/combo" targetId="pricing" />
      <CourseModule scrollToContact={scrollToContact} />
      <Featured />
      <NewModule />
      <AreYouConvinced scrollToContact={scrollToContact} />
      <BonusSection />
      <RegisterForm ref={contactRef} />

      <CourseBenefits scrollToContact={scrollToContact} />
      <Testimonials />
      <MentorIntroductionSection scrollToContact={scrollToContact} />
      <TeamShowcase />

    </div>
  )
}
