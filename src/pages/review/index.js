import Header from "@/app/components/header";
import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import data from "../../app/commen/data.json";
import Videos from "@/app/components/testimonialVideos/Videos";
import Brokerfooter from "@/app/components/brokerFooter";
import dynamic from "next/dynamic";
import WhatsAPPimages from "@/app/components/testimonialVideos/WhatsAPPimages";
import ClientTstimonial from "@/app/components/ClientTstimonial";
import Head from "next/head";
// import Modal from "@/app/components/modalComponent/modal";

const Testimonial = () => {

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
    <div className="">
      <Head>
        {/* <title>
          Finance Testimonial & Stories of Success - Finnovationz Review
        </title> */}
        {/* <meta name="keywords" content="review" /> */}
      </Head>
      <Header />
      <div className="md:mt-5 mt-3 ">
        <Videos />
        <WhatsAPPimages />
        <ClientTstimonial data={data.clientTestimonial} />
      </div>
      <Brokerfooter />
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Testimonial), { ssr: false });
