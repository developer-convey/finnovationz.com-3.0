// src/components/Details.js
import React from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  // Card details based on id
  const cardDetails = {
    1: {
      title: "Brokerage Calculator",
      description: "This calculator helps to compute brokerage fees.",
    },
    2: {
      title: "Stock Analyzer",
      description: "Get insights into stock performance.",
    },
    3: {
      title: "Investment Tracker",
      description: "Track your investment performance over time.",
    },
    4: {
      title: "Profit & Loss Calculator",
      description: "Calculate your profit or loss in trading.",
    },
    // Add more detailed descriptions for each card...
  };

  const card = cardDetails[id];

  return (
    <div className="details-container p-10 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">
        {card?.title || "Card Details"}
      </h1>
      <p className="text-gray-700">
        {card?.description || "No description available."}
      </p>
      <Link to="/" className="text-blue-500 font-bold">
        Back to Home &larr;
      </Link>
    </div>
  );
};

export default Details;
