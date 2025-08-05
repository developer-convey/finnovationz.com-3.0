import React, { useEffect, useState } from "react";

import "../../app/finClub/style/finance.css";
import MuiltiStepForm from "@/component/feedback/feedbackMuiltiStepForm";
// import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import Header from "@/app/quiz/components/Header";
// import Modal from "@/app/components/modalComponent/modal";

// import Header from "@/app/finClub/components/Header";
// import Footer from "@/app/finClub/components/Footer";

const Feedback = () => {
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
    <div>
      <Header />
      <MuiltiStepForm />
      <Brokerfooter />
      {/* <Footer /> */}
      {/* <Modal showModal={showModal} setShowModal={setShowModal} />{" "} */}
    </div>
  );
};

export default Feedback;
