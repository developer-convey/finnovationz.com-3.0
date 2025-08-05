import React from "react";
import "./maincalculator.css";

const AppDownloadSection = () => {
  return (
    <div className="appdownload flex flex-col md:flex-row items-center justify-center bg-gray-50 p-8">
      {/* Left Section: Phone Mockup */}
      <div className="md:w-1/2 flex justify-center future-finance-image">
        <img
          src="./Finbank-preview-5.png"
          alt="Phone Mockup"
          className="max-w-full"
        />
      </div>

      {/* Right Section: Text and Buttons */}
      <div className="appdwtext  text-center md:text-left md:pl-8">
        <h2 className="text-3xl font-bold mb-4">
          Experience
          <br />
          the Future of Finance!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Seamlessly manage your finances, invest smarter, and achieve your
          financial goals with our cutting-edge solutions.
        </p>

        <div className="flex justify-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.news.convey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Google_Play_Store.svg"
              alt="Download on Google Play"
              className=""
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/my-communities/id6448659391"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Apple_App_Store.svg"
              alt="Download on App Store"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
