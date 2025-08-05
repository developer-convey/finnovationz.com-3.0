import React from "react";
import Style from "./Candidate.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Candidate(props) {
    const router = useRouter();
    const path = router.pathname;
    const segments = path.split("/").filter(Boolean);
    const pageName = segments.join("/")
  return (
    <>
      <section>
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
              {
  !['courses/combo-of-foundation-course-for-beginners-and-fundamental-analysis-2.O', 'courses/big-combo', 'courses/multibagger-combo', 'courses/combo'].includes(pageName) &&
  !(props.customTitle && props.customTitle=="This cohort is designed for") && (
    <Link
      href={`${props.page
        ? "/courses/free-stock-market-course/form"
        : "#pricing"
      }`}
      className={`site_btn text-decoration-none d-inline-block ${Style.candbtn}`}
    >
      {props.page === "freeCourses"
        ? "Enrol Now"
        : "The Right Stocks!"}
    </Link>
  )
}

            </div>
            {props.data.columnContent.map((item, index) => {
              return (
                <>
                  <div className="col-md-4 mt-sm-4 mt-2" key={index}>
                    <div className={`${Style.bgbefore} changebgclr${index}`}>
                      <img
                        src={item.candImage}
                        alt={item.alt}
                        className="w-100 position-relative"
                      />
                    </div>
                    <Link
                      href={`${props.page
                        ? "/courses/free-stock-market-course/form"
                        : "#pricing"
                        }`}
                      className={`secondary_btn text-decoration-none d-inline-block`}
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Candidate;
