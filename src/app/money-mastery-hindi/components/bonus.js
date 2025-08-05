import React from "react";

const BonusSection = () => {
  return (
    <section className="md:px-10 px-6 md:w-[1100px] lg:w-[1250px] mx-auto  py-16 bg-white">
      {/* Header */}
      <div className="md:text-left text-center">
        <p className="text-gray-500 md:text-sm text-[12px] md:tracking-[0.2rem] tracking-[0.08rem]  uppercase">
          Book Now & Get These 3 Bonus for Free
        </p>
        <h2 className="text-3xl  md:leading-[70px] leading-[50px] md:text-[55px] font-light mt-3">
  Register for {" "}
  <span className="font-bold  md:block">Tonight’s Session</span>
</h2>

      </div>

      {/* Bonus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Bonus 1 */}
        <div className="flex  space-x-5">
        <svg
  className="h-[60px] w-[60px] -mt-[10px]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="url(#gradient)"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stopColor="#06B6D4" />  {/* Left Side (Blue) */}
      <stop offset="100%" stopColor="#3B82F6" /> {/* Right Side (Indigo) */}
    </linearGradient>
  </defs>
  <circle cx="12" cy="8" r="7" />
  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
</svg>

          <p className="text-black md:text-[20px] text-[18px] text-left">
            <p className="text-[20px] text-black font-bold">Bonus 1: </p>
            <hr className="md:w-[170px] font-Manrope font-extralight border-gray-300 mt-4 mb-4" />
            Get 5 proprietary tools worth{" "}
            <span className="font-bold">Rs. 10,000 for Free</span>
          </p>
        </div>

        {/* Bonus 2 */}
        <div className="flex  space-x-5">
        <svg
  className="h-[60px] w-[60px] -mt-[10px]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="url(#gradient)"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stopColor="#06B6D4" />  {/* Left Side (Blue) */}
      <stop offset="100%" stopColor="#3B82F6" /> {/* Right Side (Indigo) */}
    </linearGradient>
  </defs>
  <circle cx="12" cy="8" r="7" />
  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
</svg>

          <p className="text-black md:text-[20px] text-[18px] text-left">
            <p className="text-[20px] text-black font-bold">Bonus 2: </p>
            <hr className="md:w-[170px] font-light border-gray-300 mt-4 mb-4" />
            Get lifetime membership of{" "}
            <span className="font-bold">Market Masters community</span>
          </p>
        </div>

        {/* Bonus 3 */}
        <div className="flex  space-x-5">
        <svg
  className="h-[60px] w-[60px] -mt-[10px]"
  viewBox="0 0 24 24"
  fill="none"
  stroke="url(#gradient)"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stopColor="#06B6D4" />  {/* Left Side (Blue) */}
      <stop offset="100%" stopColor="#3B82F6" /> {/* Right Side (Indigo) */}
    </linearGradient>
  </defs>
  <circle cx="12" cy="8" r="7" />
  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
</svg>

          <p className="text-black md:text-[20px] text-[18px] text-left">
            <p className="text-[20px] text-black font-bold">Bonus 3: </p>
            <hr className="md:w-[170px] font-light border-gray-300 mt-4 mb-4" />
            <span className="font-bold">Prasad’s</span> personal 10-step secret
            stock cheat sheet
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
