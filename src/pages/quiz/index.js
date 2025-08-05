import React, { useState, useEffect } from "react";

import courseData from "../../app/commen/coursesdata/home.json";
import { BASE_URL } from "../../app/quiz/utils/baseUrl";
// import Header from "@/app/components/Header";
import Banner from "@/app/quiz/components/Banner";
import UpcomingQuiz from "@/app/quiz/components/UpcomingQuiz";
import "../../app/quiz/quiz.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";

// import Modal from "../../app/components/modalComponent/modal";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";
const ClientTstimonial = dynamic(
  () => import("@/app/quiz/components/ClientTstimonial"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);
const PastQuizes = dynamic(() => import("@/app/quiz/components/PastQuizes"), {
  ssr: false,
  loading: () => <p> </p>,
});
const CourseSlider = dynamic(
  () => import("@/app/quiz/components/CourseSlider"),
  {
    ssr: false,
    loading: () => <p> </p>,
  }
);
const FAQ = dynamic(() => import("@/app/quiz/components/FAQ"), {
  ssr: false,
  loading: () => <p> </p>,
});
const Footer = dynamic(() => import("@/app/quiz/components/Footer"), {
  ssr: false,
  loading: () => <p> </p>,
});

function Home() {
  const [quizList, setQuizList] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const apiUrl = BASE_URL();
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
          `${process.env.NEXT_PUBLIC_QUIZ_API_URL}/quizzes/list/user`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setQuizList(data.responseData);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>

      <Head>
        {/* <title>
          Stock Market Quiz | Dive into the World of Finance and Unlock Your
          Potential
        </title>
        <meta name="keywords" content="Stock Market Quiz" />
        <meta
          name="description"
          content="Take our stock market quiz to test your knowledge and sharpen your skills with our quiz! Challenge yourself with questions on stocks & market trends"
        /> */}
      </Head>
      <Header quizbool  />

      <Banner quizdata={quizList} />

      <UpcomingQuiz quizdata={quizList} />
      <div className="home_testimonial">
        <ClientTstimonial data={courseData.clientTestimonial} page="home" />
      </div>
      <PastQuizes />
      {/* <CourseSlider data={courseData.course2} sectionName="allcourses" /> */}
      <CourseSlider data={courseData.course2} sectionName="allcourses" />

      <FAQ data={courseData.faq} />

      <Brokerfooter />
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
