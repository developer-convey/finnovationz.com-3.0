import React from "react";
import Style from "../style/blogdetails.module.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
function BlogSidebar() {
  return (
    <>
      <div className={Style.courseDetail}>
        <a href="/courses/indian-stock-market" className={`d-block h-100 ${Style.course_card}`}>
          <DefaultImage src={Files?.singleBlog?.indian} alt="" className="w-100 my-0" />
          <div
            className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
          >
            <div className="d-flex align-items-center me-2">
              <DefaultImage
                src={Files?.courses?.starSvg}
                alt=""
                className={`my-0 ${Style.ratingStar}`}
              />
            </div>
            <span>(4.8/5.0 ratings)</span>
          </div>
          <div className={`mt-3 ${Style.courseDetailTitle}`}>
            The Foundation Course on Indian Stock Market (Beginner)
          </div>
          <p className="mb-2">
            (Learn to find the right stocks after 1st lecture)
          </p>
          <div
            className={`d-flex align-items-center justify-content-start  ${Style.author_lesson_detail}`}
          >
            <div className="d-flex align-items-center">
              <img src="/clock.svg" alt="" className="rounded-0 my-0" />
              <span className="ms-1">6 hrs 30 mins</span>
            </div>
            <div className="d-flex align-items-center ms-lg-4 ps-3">
              <img src="/lesson_icon.svg" alt="" className="rounded-0 my-0" />
              <span className="ms-1">6 lessons</span>
            </div>
          </div>

          <div
            className={`border-top pt-3 mt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
          >
            <div className={`mb-0 ${Style.courseDetailPrice}`}>₹4,999</div>
            <a
              href="https://com.rpy.club/cop/iZOEhsoyso"
              target="_blank"
              rel="noreferrer"
              className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
            >
              Buy Now
            </a>
          </div>
        </a>
      </div>
  
      <div className="text-center blog_detail_bar">
        <DefaultImage
          src={Files?.singleBlog?.blogSideBrImage1}
          className="mb-0 mx-auto"
          alt=""
        />
        <div className="blog_detail_card ">
          <div className="red blog_detail_card_title">Join our 2.5M YouTube Family</div>
          <p>
            Subscribe now to learn complex share market terms, stock and IPO
            Analysis{" "}
          </p>
          <a
            href="https://www.youtube.com/@namaskarprasad"
            className="site_btn d-block" target="_blank"
          >
            Subscribe Now
          </a>
        </div>
      </div>

      <div className="text-center blog_detail_bar mt-4 ">
        <div className="blog_detail_card pb-0">
          <div className="red blog_detail_card_title">Get ₹21,000 Worth of Animated Courses for FREE!</div>
          <p>So surround yourself with smart investors now</p>
          <a href="https://www.finnovationz.com/courses/free-stock-market-course" className="site_btn">
            FREE Animated Courses
          </a>
          <DefaultImage
            loading="lazy"
            src={Files?.singleBlog?.blogSideBrImage2}
            className="mb-0"
            alt=""
          />
        </div>
      </div>
      <div className="text-center blog_detail_bar mt-4">
        <div className="blog_detail_card">
          <div className="red blog_detail_card_title">
            Is your stock broker also taking hidden charges from you?
          </div>
          <p>Find Best Stock Broker For You</p>
          <a href="https://finnovationz.com/" className="site_btn d-block">
            Compare Now
          </a>
        </div>
      </div>
    </>
  );
}

export default BlogSidebar;
