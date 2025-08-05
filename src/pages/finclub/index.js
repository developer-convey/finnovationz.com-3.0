import React, { useEffect, useState } from "react";
import FinanceBanner from "../../app/finClub/components/FinanceBanner";
import FinanceBenifits from "../../app/finClub/components/FinanceBenifits";

import data from "../../app/finClub/data/course1.json";

import "../../app/finClub/style/finance.css";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";
import Head from "next/head";
import dynamic from "next/dynamic";
import Brokerfooter from "@/app/components/brokerFooter";
import Header from "@/app/components/header";
// import Modal from "@/app/components/modalComponent/modal";

const Community = dynamic(
  () => import("../../app/finClub/components/Community"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);
const UserTestimonial = dynamic(
  () => import("../../app/finClub/components/UserTestimonial"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);
const JoinClub = dynamic(
  () => import("../../app/finClub/components/JoinClub"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);
const ClientTstimonial = dynamic(
  () => import("../../app/finClub/components/ClientTstimonial"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);
const CtaTop = dynamic(() => import("../../app/finClub/components/CtaTop"), {
  ssr: false,
  loading: () => <p> </p>,
});

function Financeclub() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Set a timer to show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <Head>
        {/* <title>
          Join Finance Club | Get Exclusive Financial Reports & Insights
        </title>
        <meta name="keywords" content="Finance Club" />
        <meta
          name="description"
          content="Finance Club helps you enhance financial knowledge and network with like minded enthusiasts. Control your finances and unlock your potential. Join now!"
        /> */}
      </Head>
      <Header />
      <FinanceBanner />
      <FinanceBenifits />
      <UserTestimonial data={data.user_testimonials} />
      {/* <Financeabout /> */}
      <JoinClub />
      <ClientTstimonial data={data.clientTestimonial} />
      {/* <WhyFinance/> */}
      <CtaTop />
      <Community />
      {/* <FAQ data={data.faq} /> */}
      <Brokerfooter />
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

export default Financeclub;
