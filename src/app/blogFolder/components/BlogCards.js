import React, { useState } from "react";
import Style from "../style/home.module.css";
import { updateLikes } from "@/app/services/blog.service";
import BaseURL from "./Baseurl";
import Link from "next/link";
function BlogCards(props) {
  const [likes, setLikes] = useState(props.cardData.totalLikes);
  const [clapped, setClapped] = useState(false);
  function formatDate(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <>
      <div className={Style.blogcard}>
        <Link href={`/blog/${props?.cardData?.keyword}`} className="a">
          <div>
            <img
              loading="lazy"
              src={props.cardData.imageUrl}
              alt=""
              className={`w-100 mb-3 mt-0 ${Style.blogImg}`}
            />
            <div className={Style.blogcardtitle}>{props.cardData.title}</div>
            <p>{props.cardData.description}</p>
            <div className="d-flex-align-items-center">
              {/* <span>10 mins read</span>
            <span className={Style.dot}></span> */}
              <span>{formatDate(props.cardData.createdAt)}</span>
            </div>
          </div>
        </Link>
        <div
          className={`${Style.bottom_content}  d-flex align-items-center justify-content-between`}
        >
          <div className="d-flex align-items-center">
            <div
              className={`d-flex align-items-center clapbutton ${clapped ? "clap-active" : ""
                }`}
              onClick={() =>
                updateLikes(props.cardData._id, likes, setLikes, setClapped)
              }
            >
              <img
                loading="lazy"
                src="/likes.svg"
                alt=""
                className="me-2 my-0"
              />
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogCards;
