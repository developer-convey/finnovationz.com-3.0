import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-black">
    <section className="bg-white md:w-[1200px] mx-auto rounded-2xl  py-16 px-6 md:px-16">
      <div className="md:w-[500px] mx-auto text-center">
        <h2 className="md:text-[70px] text-[30px] font-bold text-gray-900">How it Works</h2>
        {/* <p className="text-gray-500 mt-4 text-lg">
          Learn at your own pace, ask questions, and join a supportive community of fellow investors.
        </p> */}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="text-left p-3">
          <img src="https://purple-buffalo-767451.hostingersite.com/wp-content/uploads/2024/08/Business-crisis-amico.svg" alt="Learn the Basics" className="mx-auto w-48 h-auto" />
          <h3 className="text-2xl font-semibold mt-4">Register Now
</h3>
          <p className="text-gray-500 mt-2">
          Register now by clicking the ‘Enroll Now’ button          </p>
        </div>

        {/* Card 2 */}
        <div className="text-left p-3">
          <img src="https://purple-buffalo-767451.hostingersite.com/wp-content/uploads/2024/08/Self-confidence-amico.svg" alt="Build Confidence" className="mx-auto w-48 h-auto" />
          <h3 className="text-2xl font-semibold mt-4"> Join the WhatsApp community
</h3>
          <p className="text-gray-500 mt-2">
          Get the joining link, and other updates, in the community. You will the community link on the thank you page
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-left p-3">
          <img src="https://purple-buffalo-767451.hostingersite.com/wp-content/uploads/2024/08/Investment-data-amico.svg" alt="Start Investing" className="mx-auto w-48 h-auto" />
          <h3 className="text-2xl font-semibold mt-4">Join session and grow
</h3>
          <p className="text-gray-500 mt-2">
          Join the session and learn strategies to grow in share market
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
      <a href="https://rzp.io/rzp/SMMAW" target="_blank" rel="noopener noreferrer">
  <button
    style={{ borderRadius: 100, width: "170px" }}
    className="px-5  py-2 bg-blue-500 glow-on-hover1 text-white text-md font-medium shadow-lg transition flex items-center gap-2"
  >
    ENROLL NOW →
  </button>
</a>
            {/* <button className="relative text-black text-lg font-medium flex items-center gap-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
            TALK TO AN ADVISOR
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-black transform scale-x-0 scale-x-100 transition-transform duration-300"></span>
            </button> */}
      </div>
    </section>
    </div>
  );
};

export default HowItWorks;
