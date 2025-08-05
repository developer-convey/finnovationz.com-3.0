import React from "react";
import "../../../app/finClub/style/finance.css";
import Header from "@/app/finClub/components/Header";
// import Footer from "@/app/finClub/components/Footer";
import MuiltiStepForm from "@/component/finclub/finclubMuiltiStepForm";
import Brokerfooter from "@/app/components/brokerFooter";

function Forms() {
  return (
    <>
      <Header />
      <MuiltiStepForm />
      <Brokerfooter />
    </>
  );
}

export default Forms;
