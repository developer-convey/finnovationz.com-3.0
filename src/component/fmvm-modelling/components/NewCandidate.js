import React from "react";
import Style from "@/app/components/Candidate/Candidate.css";
import Link from "next/link";

function NewCandidate(props) {
  // Safeguard: Check if props.data and its properties are defined
  const courseTxt = props.data?.courseTxt || "Course details are not available.";
  const columnContent = props.data?.columnContent || [];

  return (
    <>
      <section>
        <div className="container pb-md-5">
          <div className="row ">
            <div className="col-md-12 text-center">
              <h2>
                {props.page === "freeCourses"
                  ? "This course is designed for"
                  : "This course is designed for"}
              </h2>
              <p className="my-3 d-flex justify-content-center">
                {courseTxt}
              </p>
              <Link
              onClick={props.onEnquiryClick}
              href={""}
                // href={"https://kny3u00wib4.typeform.com/to/aqzKssaF"}
                //   target="_blank"
                className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
              >
                Reserve Your Spot Now
              </Link>
            </div>
            {columnContent.map((item, index) => (
              <div className="col-md-4 mt-sm-4 mt-2" key={index}>
                <div className={`${Style.bgbefore} changebgclr${index}`}>
                  <img
                    src={item?.candImage || "/path/to/default-image.jpg"} // Fallback to a default image if necessary
                    alt={item?.alt || "Candidate image"}
                    className="w-100 position-relative"
                  />
                </div>
                <Link
                onClick={props.onEnquiryClick}
                href=""
                  // href={`${props.page ? "https://kny3u00wib4.typeform.com/to/aqzKssaF" : "#pricing"}`}
                  // target="_blank"
                  className={`secondary_btn text-decoration-none d-inline-block`}
                >
                  Reserve Your Spot Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewCandidate;
