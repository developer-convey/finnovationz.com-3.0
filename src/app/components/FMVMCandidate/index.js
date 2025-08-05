import React from "react";
import Style from "./Candidate.css";
import Link from "next/link";

function Candidate(props) {
  const handleConditionalClick = (e) => {
    if (props.dummy === "X") {
      e.preventDefault();
      props.onBrochureClick?.(); // Trigger modal/popup
    }
  };

  return (
    <>
      <section className="pr-4 pl-4">
        <div className="container pb-md-5">
          <div className="row ">
            <div className="col-md-12 text-center">
              <h2>
                {props.customTitle
                  ? props.customTitle
                  : "This courses is designed for"}
              </h2>
              <p className="my-3 d-flex justify-content-center">
                {props.data.courseTxt}
              </p>

              <Link
                href={
                  props.dummy === "X"
                    ? "#"
                    : props.page
                    ? "/courses/free-stock-market-course/form"
                    : "#pricing"
                }
                onClick={handleConditionalClick}
                className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
              >
{props.dummy1 === "fmvm"
  ? "Download Brochure"
  : props.page === "freeCourses"
  ? "Enrol Now"
  : "The Right!"}
              </Link>
            </div>

            {props.data.columnContent.map((item, index) => {
              return (
                <div className="col-md-4 mt-sm-4 mt-2" key={index}>
                  <div className={`${Style.bgbefore} changebgclr${index}`}>
                    <img
                      src={item.candImage}
                      alt={item.alt}
                      className="w-100 position-relative"
                    />
                  </div>

                  <Link
                    href={
                      props.dummy === "X"
                        ? "#"
                        : props.page
                        ? "/courses/free-stock-market-course/form"
                        : "#pricing"
                    }
                    onClick={handleConditionalClick}
                    className="secondary_btn text-decoration-none d-inline-block"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Candidate;
