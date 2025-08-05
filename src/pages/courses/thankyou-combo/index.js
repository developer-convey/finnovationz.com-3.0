// src/ThankYou.js
import React from "react";
import "./thankyoucombo.css"

const ThankYouCombo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-4">
          Check your email for payment receipt.
        </p>
        <div className="flex justify-center mb-4">
          <img
            src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
            alt="checkmark"
            className="w-12 h-12"
          />
        </div>
        <div className="text-green-600 font-semibold mb-4 flex items-center justify-center space-x-2">
          <span role="img" aria-label="celebrate">
            🎉
          </span>
          <span>Diwali Sale is LIVE</span>
        </div>
        <p className="text-red-600 font-medium mb-6">
          Explore more Combo Courses that are on sale{" "}
          <span role="img" aria-label="down arrow">
            👇
          </span>
        </p>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          COURSES ON SALE
        </button>
      </div>
    </div>
  );
};

export default ThankYouCombo;
