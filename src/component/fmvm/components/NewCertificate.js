import React from "react";
import Style from "@/app/coursesStyle/course.module.css";
import Link from "next/link";

function NewCertification(props) {
  // Safeguard: Check if props.data is defined and has the expected properties
  const imgSrc = props.data?.img || ""; // Fallback to empty string if undefined
  const altText = "Finnovationz certificate"; // Consider defining this as a constant

  return (
    <>
      <section className={`${Style.CertificationSec}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center">
              <h2>Get Certified</h2>
              <p className="my-3">
                You will receive the certificate upon the completion of the course.
                It serves as a social proof of your knowledge & skills and adds
                value to your resume.
              </p>

              <Link
                href={
                  props.page === "home"
                    ? "#allcourses"
                    : props.page === "freeCourses"
                    ? "/courses/fmvm/form"
                    : "#pricing"
                }
                className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
              >
                Reserve Your Spot Now
              </Link>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div className={`${Style.certi_img} position-relative z-1`}>
                {imgSrc ? ( // Check if imgSrc is available before rendering
                  <img
                    src={imgSrc}
                    alt={altText}
                    className={`w-100 `}
                  />
                ) : (
                  <div className="placeholder">Image not available</div> // Fallback if image is not available
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewCertification;
