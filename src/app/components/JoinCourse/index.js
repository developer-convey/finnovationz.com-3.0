import React from "react";
import Style from "../../coursesStyle/course.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function JoinCourse({ data, page, paymentdata, title, onBrochureClick }) {
  const router = useRouter();
  const path = router.pathname;
  const segments = path.split("/").filter(Boolean);
  const pageName = segments.join("/");

  // Extract download instruction if exists
  const downloadInstruction = data.find(
    (item) => item.download && typeof item.download === "string"
  )?.download;

  // Filter out download object to avoid rendering it in cards
  const featureItems = data.filter((item) => !item.download);

  return (
    <section
      className={`position-relative ${Style.joinCourse} pr-4 pl-4`}
      id="description"
    >
      <div className={`d-none d-sm-block ${Style.circular_gradient}`}></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mb-md-4 pb-md-2 mb-3">
            <h2>
              {title
                ? title
                : page === "freeCourses"
                ? "Join the Courses & Learn"
                : "Join the course & Learn"}
            </h2>
          </div>

          {featureItems.map((item, index) => (
            <div
              key={index}
              className={`col-md-3 col-6 ${
                index === 0
                  ? "mt-md-5"
                  : index === 3
                  ? "mt-md-5 mt-3"
                  : index === 2
                  ? "mt-3 mt-md-0"
                  : ""
              }`}
            >
              <div
                className={Style.course_card}
                style={{ minHeight: "130px", paddingBottom: "30px" }}
              >
                <img src="/blub_icon.svg" alt="" />
                <h3>{item.headings}</h3>
              </div>
            </div>
          ))}

          <div className="col-md-10 mt-4 d-flex justify-content-center text-center">
            {downloadInstruction === "Download Brochure" ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onBrochureClick && onBrochureClick();
                }}
                className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
              >
                Download Brochure
              </a>
            ) : downloadInstruction === "enroll" ? (
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onBrochureClick && onBrochureClick();
                }}
                className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
              >
                Apply Now
              </Link>
           ) : (
            <Link
              href={paymentdata?.btnUrl || "#"}
              className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
              onClick={(e) => {
                
                onBrochureClick && onBrochureClick();
              }}
            >
              Get Your Access Now
            </Link>
          )
            }          
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinCourse;
