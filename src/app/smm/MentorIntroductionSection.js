import React from 'react'
import form from './form'
export default function MentorIntroductionSection() {
  return (
    <div>  <div className="mt-[50px] pb-[30px] bg-gradient-to-r from-[#1B2537] to-[#2E3A50] text-white" style={{ height: 'fit-content' }}>
    <div className="flex justify-center bg-gradient3 md:ml-[100px] md:me-[100px] ml-8 mr-8 ">
        <div className="container-xs mt-[100px] px-2.5 md:px-5">
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left Content (Text Section) */}
                <div className="order-1 md:order-none flex flex-col items-start gap-5 text-white">
                    <p className="text-[18px] tracking-[2.70px] font-normal text-white uppercase">
                        Meet Our Mentor
                    </p>
                    <h1 className=" md:text-[45px] md:mt-[-40px] text-[32px] w-full font-bold">
                        Prasad Lendwe, Investor, Founder
                    </h1>

                    <div className="rounded-[20px] h-[3px] w-[50px] bg-gradient-to-r from-blue-500 to-green-500"></div>

                    <p className="leading-[35px] text-[20px] w-full font-normal text-white">
                        Prasad Lendwe, also known as Namaskar Prasad, is a prominent name in financial education. 
                        He started his journey back in 2011-12 when he first invested his friends and family's money but suffered losses.
                        <br /><br></br>
                        These losses made him realize the importance of financial education, and this is when he shifted his focus to real financial knowledge and not mere speculation.
                        <br /> <br />
                        But low financial awareness was not just his problem; it is the problem for most Indians. With the simple thought of making India financially aware, he started his YouTube channel.
                    </p>
                </div>

            
                <div className="order-2 md:order-none relative w-full flex justify-center md:justify-end items-center mt-10 md:mt-20">
   
    <div
        className="absolute w-[75%] sm:w-[75%] md:w-[85%] max-w-[400px] md:h-[450px] md:max-w-[532px] aspect-[450/500] bg-white bg-opacity-10 rounded-tl-[366px] rounded-tr-[366px]"
        style={{
            bottom: "0px",
            zIndex: 9,
        }}
    ></div>

    <img
        src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/Untitled-1%201.png"
        alt="Mentor"
        className="relative z-10 object-contain scale-x-[-1] w-[75%] sm:w-[80%] md:w-[92%] max-w-[400px] md:max-w-[532px] aspect-[532/604]"
    />
</div>

            </div>
        </div>
    </div>
</div></div>
  )
}
