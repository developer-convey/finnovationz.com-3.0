import React from 'react'

export default function StockCheatSheetSection() {
  return (
    <div> <div className="mt-[100px] mb-[100px] flex flex-col items-center">
    <div className="container-xs sm:gap-[30px] gap-[60px] flex flex-col items-center md:px-5">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-[32px] sm:text-[41px] md:text-[47px] lg:text-[55px] font-bold text-center leading-tight transition-all duration-300">
            Counselling Session Bonus
            </h2>
            <div className="rounded-[20px] h-[3px] w-[40px] mx-auto bg-gradient-to-r from-blue-500 to-green-500"></div>
        </div>

        {/* Content & Image Container */}
        <div className="mt-[0px] flex flex-col md:flex-row items-center md:items-start gap-8 px-5">
            
            {/* Image Section (Mobile: Below, Desktop: Left) */}
            <div className="order-2 md:order-1 md:w-1/2 flex justify-center">
                <img
                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/30-12-2024/Surprise%20Cyber%20Sale%20%281%29.webp"
                    alt="Bonus Image"
                    className="rounded-[20px] w-full max-w-[600px] h-[450px] object-cover"
                />
            </div>

            {/* Content Section (Mobile: Above, Desktop: Right) */}
            <div className="order-1 md:order-2 md:w-1/2 flex flex-col items-start gap-5">
                
                <h3 className="sm:text-[20px] md:text-[38px] text-[35px] font-bold">
                    10-Step Stock Cheat Sheet
                </h3>
                <div className="rounded-[20px] h-[3px] w-[40px] bg-gradient-to-r from-blue-500 to-green-500"></div>

                <p className="leading-[30px] sm:text-[18px] md:text-[20px] font-normal text-black">
                    This is the cheat sheet our premium members use to select stocks for themselves.
                    And by using this cheat sheet they never came across a stock which is fundamentally weak.
                    <br /><br />
                    This premium sheet can be yours for free; you just have to reserve your spot for the session.
                </p>
<a href='https://event.webinarjam.com/register/45/316wptl1'>
                <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto lg:mx-0">
                    Reserve My Spot Now
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button></a>
            </div>
        </div>
    </div>
</div></div>
  )
}
