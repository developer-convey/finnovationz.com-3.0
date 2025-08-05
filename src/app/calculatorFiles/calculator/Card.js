// components/Card.js
import React from "react";
import Link from "next/link";
import "./Card.css"; // Import your CSS file

const Card = ({ img, title, paragraph, calculator }) => {
  return (
    <div className="card-container1 cursor-pointer">
      <div className="image-container">
        <img src={img} alt={title} height={104} width={104} className="half-outside-img" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-paragraph">{paragraph}</p>
        <Link href={calculator || "/"} className="card-link">
          Check Now &rarr;
        </Link>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default Card;
