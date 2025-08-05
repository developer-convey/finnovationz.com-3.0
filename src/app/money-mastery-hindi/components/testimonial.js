import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonialsmob = [
  {
    name: 'Samikshya Samal',
    role: 'Software Engineer',
    quote: 'FinnovationZ gives value at this price',
    image: 'https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/image%20%282%29.png',
  },
  {
    name: 'Sakshyam Jain',
    role: 'Student',
    quote: 'I learned how to assess valuation',
    image: 'https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/image%20%283%29.png',
  },
  {
    name: 'Ganesh Gore',
    role: 'Sr. Technical Manager',
    quote: 'Fantastic course highly recommended',
    image: 'https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/image%20%284%29.png',
  },
];
const testimonials = [
  {
    name: "Rohan Malhotra",
    title: "Finance Enthusiast",
    review:
      "I always thought the stock market was too complicated for me. But after attending FinnovationZ’s training, I finally understood how to pick good stocks and invest with confidence. Their practical approach and simple explanations made all the difference!",
    image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
  },
  {
    name: "Priya Mehta",
    title: "Aspiring Trader",
    review:
      "This training changed my perspective on investing. I now focus on long-term wealth creation rather than chasing quick profits. Highly recommended!",
      image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
    },
  {
    name: "Amit Sharma",
    title: "IT Professional & Investor",
    review:
      "I used to rely on random stock tips, but now I analyze stocks myself using their proven strategies. This course is a game-changer!",
      image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
    },
  {
    name: "Sneha Verma",
    title: "MBA Student",
    review:
      "The best part about FinnovationZ is that they make stock market learning simple and easy to understand. I finally feel in control of my investments.",
      image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
    },
  {
    name: "Rahul Deshpande",
    title: "Marketing Executive",
    review:
      "Before this training, I made emotional decisions when buying stocks. Now, I follow a structured strategy and have seen a huge improvement in my portfolio’s performance.",
      image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
    },
  {
    name: "Vikram Nair",
    title: "Business Owner",
    review:
      "FinnovationZ provides real, actionable knowledge. No fluff—just solid investment strategies that actually work!",
      image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
    },
  {
    name: "Megha Kapoor",
    title: "Financial Analyst",
    review:
      "I've taken multiple stock market courses before, but this one was the most practical. The step-by-step guidance helped me make my first profitable trade in just a few weeks!",
      image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
    },
  {
    name: "Sandeep Choudhary",
    title: "Engineer & Investor",
    review:
      "Simple, clear, and effective. That’s how I would describe FinnovationZ’s training. Perfect for beginners!",
      image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
    },
  {
    name: "Neha Agarwal",
    title: "CA & Wealth Consultant",
    review:
      "If you’re serious about investing, don’t miss this training. The knowledge you gain here is worth more than any stock tip you’ll ever get. Before attending, I used to follow random advice from friends and social media, but I had no real strategy.",
      image: "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/Ellipse%201.png",
    },
];
const testimonials1 = [
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F1%20copy.webp&w=1920&q=75",
  },
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F2%20copy.webp&w=1920&q=75",
  },
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F3%20copy.webp&w=1920&q=75",
  },
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F4%20copy.webp&w=1920&q=75",
  },
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F5%20copy.webp&w=1920&q=75",
  },
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F6%20copy.webp&w=1920&q=75",
  },
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F7%20copy.webp&w=1920&q=75",
  },
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F8%20copy.webp&w=1920&q=75",
  },
  {
    image: "https://www.finnovationz.com/_next/image?url=%2F9%20copy.webp&w=1920&q=75",
  },
];
const CustomPrevArrow = ({ onClick }) => (
  <button
  onClick={onClick}
  className="absolute md:w-[60px] md:h-[30px] left-[-10px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-400 to-blue-500 p-3 z-10 rounded-full flex items-center justify-center"
>
  <FaArrowLeft className="text-white md:text-[30px] md:h-[20px]" />
</button>

);

const CustomNextArrow = ({ onClick }) => (
  
<button
  onClick={onClick}
  className="absolute right-[-10px] md:w-[60px] md:h-[30px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-400 to-blue-500 p-3  rounded-full flex items-center justify-center"
>
  <FaArrowRight className="text-white md:text-[30px] md:h-[20px]" />
</button>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for Desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="md:w-[1100px] lg:w-[1250px]  mx-auto md:px-10 px-6 md:py-12">
      {/* Heading */}
      <div className=" flex flex-col lg:flex-row items-center space-x-0 lg:space-x-8 mb-10 px-4">
        {/* Left Section - Heading */}
        <div className="w-full md:w-2/3 md:text-center text-center lg:text-left mb-2">
          <h3 className="md:text-lg text-sm uppercase tracking-[0.2em] mb-2 text-gray-600">
            TESTIMONIALS
          </h3>
          <h2 className="text-[34px] md:text-[30px] md:font-bold font-light md:leading-tight font-bold whitespace-nowrap">
  Trust is built <span className="block md:inline-block md:font-bold font-bold">with Consistency</span>
</h2>

        </div>

        {/* Divider - Vertical on Desktop, Horizontal on Mobile */}
        <div className="w-full md:block hidden lg:w-[2px] h-[2px] lg:h-24 bg-gray-400 my-6 lg:my-0"></div>

        {/* Right Section - Description */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-400 text-[15px]">
          And here’s why more than 1 lakh + learners have trust us…..

          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid  hidden grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="grid gap-6">
          {testimonials.slice(0, 3).map((t, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg w-[370px] h-auto">
           <span className="mb-5 flex space-x-1">
  {Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(to right, #44C4B8, #3A89F8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "1.2rem",
          display: "inline-block",
        }}
      >
        ⭐
      </span>
    ))}
</span>

              <p className="text-gray-700 mb-5">{t.review}</p>
              <div className="flex items-center mb-4">
                
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="grid gap-6">
          {testimonials.slice(3, 6).map((t, index) => (
           <div key={index} className="bg-white p-6 shadow-lg w-[370px] rounded-lg h-auto">
          <span className="mb-5 flex space-x-1">
  {Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(to right, #44C4B8, #3A89F8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "1.2rem",
          display: "inline-block",
        }}
      >
        ⭐
      </span>
    ))}
</span>

             <p className="text-gray-700 mb-5">{t.review}</p>
             <div className="flex items-center mb-4">
               
               <img
                 src={t.image}
                 alt={t.name}
                 className="w-10 h-10 rounded-full mr-3"
               />
               <div>
                 <h4 className="font-semibold text-gray-900">{t.name}</h4>
                 <p className="text-sm text-gray-500">{t.title}</p>
               </div>
             </div>
           </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="grid gap-6">
          {testimonials.slice(6, 9).map((t, index) => (
             <div key={index} className="bg-white p-6  w-[370px] shadow-lg rounded-lg h-auto">
            <span className="mb-5 flex space-x-1">
  {Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(to right, #44C4B8, #3A89F8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "1.2rem",
          display: "inline-block",
        }}
      >
        ⭐
      </span>
    ))}
</span>

               <p className="text-gray-700 mb-5">{t.review}</p>
               <div className="flex items-center mb-4">
                 
                 <img
                   src={t.image}
                   alt={t.name}
                   className="w-10 h-10 rounded-full mr-3"
                 />
                 <div>
                   <h4 className="font-semibold text-gray-900">{t.name}</h4>
                   <p className="text-sm text-gray-500">{t.title}</p>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
      <div className="md:grid hidden  grid-cols-1 md:grid-cols-3 gap-4 ">
      {testimonials1.map((t, index) => (
        <div key={index} className="flex justify-center items-center space-y-8">
          <img
            src={t.image}
            alt={`Testimonial ${index + 1}`}
            className="w-[350px] h-[350px] rounded-md"
          />
        </div>
      ))}
    </div>
      <div className="w-full md:hidden  mx-auto ">
        <Slider {...settings}>
          {testimonialsmob.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#121E38] rounded-2xl text-center relative shadow-lg">
                {/* FinnovationZ Tag */}
  
                {/* Testimonial Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={150}
                  height={150}
                  className="mx-auto w-full rounded-lg mb-4"
                />
  
                {/* Speech Bubble */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
