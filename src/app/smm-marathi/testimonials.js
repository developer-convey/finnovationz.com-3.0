import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const reviews = [
    { img: "https://www.finnovationz.com/_next/image?url=%2F1%20copy.webp&w=1920&q=75" },
    { img: "https://www.finnovationz.com/_next/image?url=%2F2%20copy.webp&w=1920&q=75" },
    { img: "https://www.finnovationz.com/_next/image?url=%2F3%20copy.webp&w=1920&q=75" },
    { img: "https://www.finnovationz.com/_next/image?url=%2F4%20copy.webp&w=1920&q=75" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,  
    autoplaySpeed: 3000,
  };

  return (
    <div className="py-10 px-6">
      <h2 className="md:text-3xl font-bold text-center text-gray-900 mb-10">
        What People Say About Us
      </h2>

     
      <div className="hidden md:grid md:grid-cols-4 gap-4 h-auto md:w-[1080px] mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#E8FFE5] rounded-[30px] h-auto shadow-md border relative">
            <img src={review.img} alt={`Review ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

    
      <div className="md:hidden">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              <div className="bg-[#E8FFE5] rounded-[30px] shadow-md border relative">
                <img src={review.img} alt={`Review ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
