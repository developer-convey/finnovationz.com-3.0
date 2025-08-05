import React from "react";

const CourseBenefits = ({ scrollToContact }) => {
  const benefits = [
    { title: "Finding Multibagger",
    img:"https://www.finnovationz.com/1.png"
  
  },
    { title: "Detecting Frauds",
    img:"https://www.finnovationz.com/2.png"
   },
    { title: "Finding Market Opportunities",
    img:"https://www.finnovationz.com/3.png"
   },
   
  ];

  return (
    <div className="min-h-screen md:w-[1060px] lg:w-[1250px] mx-auto flex flex-col items-center justify-center bg-white px-4 py-12">
      {/* Heading */}
      <h2 className="text-[26px] md:text-[45px] md:leading-[60px] font-extralight text-center">
        What Will This <br className="md:block" />
        <span className="font-bold">90 Minutes</span> Give You Back?
      </h2>
      <button onClick={scrollToContact} className="mt-4 md:hidden  md:w-[450px] w-[250px]  bg-gradient-to-r from-[#44C4B8] to-[#3A89F8] text-white py-3 rounded-full text-md font-semibold shadow-md transition-all hover:opacity-90">
          RESERVE MY SPOT NOW →
        </button>
      {/* Grid Container */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-2 text-center border"
          >
            {/* Image */}
            <div className="w-full rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-[350px] h-[250px]"
              />
            </div>
            {/* Title */}
            <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBenefits;
