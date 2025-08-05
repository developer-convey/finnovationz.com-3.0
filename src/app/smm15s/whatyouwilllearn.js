export default function WhatYouWillLearn() {
    const topics = [
      { img: "/Forensic-Analysis.webp", title: "Multibagger Strategies" },
      { img: "/Financial-Statement.webp", title: "Management Analysis      " },
      { img: "/Finding-Share-Potential.webp", title: "Financial Statement Investigation      " },
      { img: "/Multibagger.webp", title: "Business Potential Analysis" },
    ];
  
    return (
      <div className="py-8  md:w-[1080px] mx-auto ">
        <h2 className="text-3xl p-4 font-bold text-gray-900 mb-9">
          What You Will Learn?
        </h2>
        
        <div className="grid md:grid-cols-4 grid-cols-1 md:p-0 p-4 gap-4">
          {topics.map((topic, index) => (
            <div 
  key={index} 
  className="bg-[#0C1526] md:h-[250px] text-white rounded-lg p-6 pt-10 flex flex-col md:items-start items-center gap-3 shadow-lg"
>
              <img src={topic.img} alt={topic.title} className="w-14 h-14" />
              <p className="text-md md:pt-4 text-white text-left">{topic.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
