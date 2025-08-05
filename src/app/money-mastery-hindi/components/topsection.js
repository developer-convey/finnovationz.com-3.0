import React from "react";

const CourseModule = ({ scrollToContact }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-white md:pt-[100px] p-6 md:p-10  md:w-[1100px] lg:w-[1250px] mx-auto md:gap-10">
      
      {/* Left Side: Text Content */}
      <div className="text-center  md:text-left">
        <h2 className="text-[30px] md:text-[50px] md:leading-[70px] leading-[40px] font-light text-gray-900">
          Your Wealth Journey <br />
          <span className="font-bold">Starts Here...</span>
        </h2>

        {/* Course Info */}
        <div className="grid grid-cols-3 text-black text-sm md:text-[18px] mt-6 mb-6 my-4">
  {/* First Column */}
  <div className="flex items-center justify-center md:justify-start pr-4 border-r border-gray-400">
    <span className="mr-2">
      <svg className="md:h-8 h-5 w-5 md:w-8 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  
        <circle cx="12" cy="12" r="10" />  
        <polyline points="12 6 12 12 16 14" />
      </svg>
    </span> 
    <span>90 mins</span>
  </div>

  {/* Second Column */}
  <div className="flex items-center justify-center md:justify-start px-4 border-r border-gray-400">
    <span className="mr-2">
      <svg className="md:h-8 h-5 w-5 md:w-8 text-neutral-800" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
        <path stroke="none" d="M0 0h24v24H0z"/>  
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
      </svg>
    </span> 
    <span>9.5/10</span>
  </div>

  {/* Third Column (No border) */}
  <div className="flex items-center justify-center md:justify-start pl-4">
    <span className="mr-2">
      <svg className="md:h-8 h-5 w-5 md:w-8 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  
        <circle cx="12" cy="12" r="10" />  
        <polyline points="12 6 12 12 16 14" />
      </svg>
    </span> 
    <span>7:00 PM</span>
  </div>
</div>


        {/* Description */}
        <p className="text-gray-600 leading-[30px] mb-6 text-sm md:text-[25px]">
        Learn the basics of Share Market and start your investment journey on your own terms.
        </p>
      </div>

      {/* Right Side: Image + Button Below */}
      <div className="flex flex-col items-center">
        <img
          src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image--.png"
          alt="Course Banner"
          className="rounded-lg shadow-lg md:w-[560px] w-[300px] h-[250px] md:h-[300px]"
        />

        {/* Button Below Image */}
        <button onClick={scrollToContact} className="mt-4 bg-gradient-to-r md:w-[560px] w-[300px] from-[#44C4B8] to-[#3A89F8] text-white py-3 px-6 rounded-full text-md font-semibold shadow-md transition-all hover:opacity-90">
          RESERVE MY SPOT NOW →
        </button>
      </div>

    </section>
  );
};

export default CourseModule;
