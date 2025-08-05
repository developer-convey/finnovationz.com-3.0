import React, { useEffect, useState } from "react";
import "../../app/coursesStyle/courses.css";
import Header from "@/app/components/header";
import Brokerfooter from "@/app/components/brokerFooter";
import Head from "next/head";
// import Footer from "@/app/quiz/components/Footer";
import Meta from "../../component/Meta";

// import Header from "@/app/components/CoursesHeader";

function Refund() {
  return (
    <>
      <Head>
        <Meta />
        {/* <title>Non Refund Policy | Clear & Transparent Guidelines</title> */}
      </Head>
      {/* <Header /> */}
      <Header/>
      <section className="contentPages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mt-4 h4 fw-bold">Non Refund Policy</h1>
              <h6>
                We are committed to providing high-quality products and services
                to our customers. Due to the nature of our products, all sales
                are final, and we do not offer refunds once a purchase is
                completed.
              </h6>
              <p>Please be aware of the following before making a purchase:</p>
              <p>
                <strong>Product Description:</strong> We ensure that all product
                descriptions are accurate and provide sufficient information to
                make an informed decision before purchasing. Please review all
                product details carefully.
              </p>
              <p>
                <strong>Support and Assistance:</strong> If you encounter any
                issues or have questions about our products, our support team is
                available to assist you. You can reach us at{" "}
                <a href="mailto:support@finnovationz.com">
                  <u>support@finnvationz.com</u>
                </a>
                . We are dedicated to resolving any concerns and providing the
                necessary assistance.
              </p>
              <p>
                By completing a purchase, you acknowledge and agree to this
                non-Non Refund Policy. We encourage you to contact our support
                team if you have any questions or need further clarification
                before making a purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
      <Brokerfooter/>
    </>
  );
}

export default Refund;
