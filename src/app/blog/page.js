"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BannerSlider from "@/app/blogFolder/components/BannerSlider";
// import Header from "@/app/blogFolder/components/Header";
import "../../app/blogFolder/style/blog.css";
import dynamic from "next/dynamic";
import Header from "@/app/components/CoursesHeader";
import Brokerfooter from "../components/brokerFooter";
// import Modal from '../../app/components/modalComponent/modal';
import BlogHeader from "./components/Header";
import BlogFooter from "./components/Footer";

const BlogList = dynamic(() => import("@/app/blogFolder/components/BlogList"), {
  ssr: false,
  loading: () => <p> </p>,
});
const Newsletter = dynamic(
  () => import("@/app/blogFolder/components/Newsletter"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);
const Footer = dynamic(() => import("@/app/blogFolder/components/Footer"), {
  ssr: false,
  loading: () => <p> </p>,
});

function Blog() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set a timer to show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/blogs/list/user?page=1&limit=10`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not in JSON format");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {/* <Header blogbool /> */}
      <Header />
      <BannerSlider sliderData={data?.responseData?.data || []} />
      <BlogList bloglist={data?.responseData?.data || []} />
      <Newsletter />
      <Brokerfooter />
      {/*<BlogFooter />*/}
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

export default dynamic(() => Promise.resolve(Blog), { ssr: false });
