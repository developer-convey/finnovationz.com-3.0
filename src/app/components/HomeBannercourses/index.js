import React from "react";
import Style from "../../coursesStyle/course.module.css";
import Link from "next/link";
import { Rating } from "@mui/material";
import Image from "next/image";

function HomeBanner({ data, page, onBrochureClick }) {
  // Extract video ID from various formats
  const getEmbedUrl = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const embedUrl = getEmbedUrl(data.youtubeUrl);

  return (
    <>
      <section className={Style.hero_banner} id="herobanner">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE CONTENT */}
            <div className="col-md-6 text-center text-md-start">
              <h1>{data.heading}</h1>
              {page === "freeCourses" && <h5>(By Opening a Free Demat Account)</h5>}
              <p>{data.text}</p>

              <div className={`d-flex align-items-center justify-content-md-start justify-content-center ${Style.author} my-4`}>
                <Image src="/user.svg" alt="user icon" width={24} height={24} />
                <p className="mb-0 ms-2">By <span>Namaskar Prasad</span></p>
              </div>

              <div className={`d-flex align-items-center justify-content-md-start justify-content-center ${Style.author_lesson_detail}`}>
                <div className="d-flex align-items-center">
                  <Image src="/clock.svg" alt="clock icon" width={20} height={20} />
                  <span className="ms-1">{data.duration}</span>
                </div>
                <div className="d-flex align-items-center ms-4 ps-3">
                  <Image src="/lesson_icon.svg" alt="lesson icon" width={20} height={20} />
                  <span className="ms-1">{data.lessons}</span>
                </div>
              </div>

              {data.rating && (
                <div className={`d-flex align-items-center ${Style.reviews} mt-4 justify-content-md-start justify-content-center`}>
                  <Rating
                    name="platform-rating"
                    value={parseFloat(data.rating)}
                    precision={0.1}
                    size="large"
                    readOnly
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#FFC107",
                        fontSize: "16px",
                      },
                      "& .MuiRating-iconEmpty": {
                        color: "#CCCCCC",
                        fontSize: "16px",
                      },
                    }}
                  />
                  <span>({data.rating}/5.0 ratings)</span>
                </div>
              )}

              {data.userImg && (
                <img
                  src={data.userImg}
                  alt="enrolled users"
                  width={150}
                  height={40}
                  className={` ${Style.allusers} mt-4`}
                />
              )}

              {/* MRP Price with Line */}
              <h2>
                <del
                  style={{
                    position: "relative",
                    display: "inline-block",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  {data?.mrp_price}
                  {data?.mrp_price && (
                    <span
                      style={{
                        width: "65px",
                        height: "3px",
                        backgroundColor: "#0d6efd",
                        position: "absolute",
                        transform: "rotate(15deg)",
                        top: "17%",
                        left: "0%",
                        transformOrigin: "left center",
                        padding: "1px",
                        borderRadius: "13px",
                      }}
                      className="ml-2"
                    />
                  )}
                </del>
              </h2>

              <h2 className="pricing-container my-4 flex items-center">
                {data.actual_pricing}
              </h2>

              {/* Button Block */}
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-3 mt-4">
                {data.btnText && (
                  <Link
                    href={data.btnUrl}
                    target={data.btnUrl === "#pricing" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className={`site_btn text-decoration-none d-inline-block ${Style.bannerbtn}`}
                  >
                    {data.btnText}
                  </Link>
                )}

                {data.dummy === "X" && (
                  <Link
                    href=""
                    onClick={onBrochureClick}
                    className={`site_btn text-decoration-none d-inline-block ${Style.bannerbtn}`}
                  >
                    {data.download}
                  </Link>
                )}
              </div>
            </div>

            {/* RIGHT SIDE MEDIA (Video or Image) */}
            <div
  className="col-md-6 mt-5 mt-md-0 d-flex align-items-center justify-content-center"
>
  {embedUrl ? (
  <div style={{ width: "100%" }}>
  {/* YouTube Video Container with 16:9 aspect ratio */}
  <div
    style={{
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%", // 16:9 ratio
      borderRadius: "12px",
      overflow: "hidden",
    }}
  >
    <iframe
      src={embedUrl}
      title="Course Preview"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "12px",
      }}
    ></iframe>
  </div>

  {/* Text below the video */}
  <p
    style={{
      marginTop: "16px",
      fontSize: "16px",
      color: "#333",
      textAlign: "center",
      fontWeight: "500",
    }}
  >
    Our session is first step towards building wealth.
  </p>
</div>
  ) : (
    <img
      loading="eager"
      src="/banner_img.webp"
      alt="Course banner"
      width={500}
      height={450}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "12px",
      }}
    />
  )}
</div>

          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
