import React from "react";
import Style from "../../coursesStyle/course.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Certification({ data, page,dummy1,dummy, onBrochureClick }) {
  const router = useRouter();
  const path = router.pathname;
  const segments = path.split("/").filter(Boolean);
  const pageName = segments.join("/");

  return (
    <>
      <section className={`${Style.CertificationSec} pl-4 pr-4`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center">
              <h2>Get Certified</h2>
              <p className="my-3">
                You'll receive the certificate upon the completion of the course.
                It serves as a social proof of your knowledge & skills and adds
                value to the resume.
              </p>

              {![
                "courses/combo-of-foundation-course-for-beginners-and-fundamental-analysis-2.O",
                "courses/big-combo",
                "courses/multibagger-combo",
                "courses/combo",
              ].includes(pageName) && (
                data.dummy === "X" ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onBrochureClick && onBrochureClick();
                    }}
                    className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
                  >
                   {dummy1 === "fmvm" ? "Download Brochure" : "Get Certified Now"}

                  </a>
                ) : (
                  <Link
                    href={
                      page === "home"
                        ? "#allcourses"
                        : page === "freeCourses"
                        ? "/courses/free-stock-market-course/form"
                        : "#pricing"
                    }
                    className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
                  >
                   {data.dummy1 === "fmvm" ? "Download Brochure" : "Get Certified Now"}
                  </Link>
                )
              )}
            </div>

            <div className="col-md-6 mt-5 mt-md-0">
              <div className={`${Style.certi_img} position-relative z-1`}>
                <img
                  src={data.img}
                  alt="Finnovationz certificate"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certification;
