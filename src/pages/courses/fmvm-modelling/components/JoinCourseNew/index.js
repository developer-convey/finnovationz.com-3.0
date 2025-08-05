import React from "react";
import Style from "@/app/coursesStyle/course.module.css";
import Link from "next/link";

function JoinCourseNew(props) {
  return (
    <>
      <section
        className={`position-relative ${Style.joinCourse}`}
        id="description"
      >
        <div className={`d-none d-sm-block ${Style.circular_gradient}`}></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center mb-md-4 pb-md-2 mb-3">
              {/* <h2>
                {props.page === "freeCourses"
                  ? "Join the Courses & Learn"
                  : "Join the course & Learn"}
              </h2> */}
            </div>
            {(props.data || []).map((item, index) => {
              return (
                <>
                  <div
                    className={`col-md-3 col-6  ${
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
                      style={{ minHeight: "200px" }}
                    >
                      <img src="/blub_icon.svg" alt="" />
                      <h3>{item?.headings}</h3>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="col-md-10 mt-4 d-flex justify-content-center text-center">
              <Link
                // href= {"/courses/fmvm/form `}
                onClick={props.onEnquiryClick}
                href={""}
             
                className={`site_btn text-decoration-none d-inline-block  ${Style.coursebtn}`}
              >
                {props.page === "freeCourses"
                  ? "Enrol Now"
                  : "Reserve Your Spot Now"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinCourseNew;
