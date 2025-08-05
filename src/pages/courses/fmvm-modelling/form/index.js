import React from "react";
import "../../../../app/finClub/style/finance.css";
import MuiltiStepForm from "@/app/finClub/components/finclubMuiltiStepForm";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import FmvmMultipleForm from "../../../../component/fmvm-modelling/components/fmvmMuiltuStepForm";
// import Header from "@/app/finClub/components/Header";
// import Footer from "@/app/finClub/components/Footer";

function Forms() {
  return (
    <>
      <Header />
      <FmvmMultipleForm courseBool />
      {/* <Footer /> */}
      <Brokerfooter />
    </>
  );
}

export default Forms;
