import React from "react";
import "../../app/coursesStyle/courses.css";
import Footer from "@/app/quiz/components/Footer";

import Header from "@/app/components/CoursesHeader";

function Refund() {
  return (
    <>
      <Header />
      <section className="contentPages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="fw-bold">Non Refund  Policy</h1>
              <h6>Last Updated on 10th Aug 2022</h6>
              <h2 className="mt-4 h4 fw-bold">Non Refund  Policy:</h2>
              <p>
                We believe in fair business if someone doesn't like our product
                they should get a refund.However, in order to maintain the
                predictability of our business, we give 5 days to test the
                course and product. In case you want a refund please email us at
                &nbsp;
                <a href="mailto:support@finnovationz.in">
                  <u>support@finnovationz.in</u>
                </a>{" "}
                &nbsp; within the same time period. We assure you a needful
                shall be done.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Refund;
