import React from 'react'

export default function MentorIntroductionSection({ scrollToContact }) {
    return (
        <div>  <div className="md:mt-[100px] mt-[50px] px-4 pb-[30px] bg-gradient-to-r from-[#1B2537] to-[#2E3A50] text-white" style={{ height: 'fit-content' }}>
            <div className="flex justify-center bg-gradient3 md:w-[1055px] lg:w-[1230px] md:px-2 mx-auto m-0">
                <div className="container-xs mt-[100px] px-2.5 md:px-5">
                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Left Content (Text Section) */}
                        <div className="order-1 md:order-none flex flex-col items-start gap-5 text-white">
                            <p className="text-[18px] tracking-[2.70px] font-normal text-white uppercase">
                                Meet Our Mentor
                            </p>
                            <h1 className="sm:text-[32px] md:text-[38px] leading-[50px] text-[25px] w-full font-bold">
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
                            <button onClick={scrollToContact} className="mt-4 bg-gradient-to-r md:w-[450px] from-[#44C4B8] to-[#3A89F8] text-white py-3 px-6 rounded-full text-md font-semibold shadow-md transition-all hover:opacity-90">
                                RESERVE MY SPOT NOW →
                            </button>
                        </div>

                        {/* Right Image Section */}
                        <div className="order-2 md:order-none relative w-full flex justify-center md:justify-end items-center mt-10 md:mt-20">

                            {/* Background Shape */}
                            <div
                                className="absolute bottom-[-20px] md:right-[45px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[500px] bg-white bg-opacity-10 rounded-tl-[266px] rounded-tr-[266px]"
                                style={{ zIndex: 9 }}
                            ></div>

                            {/* Mentor Image */}
                            <img
                                src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/30-12-2024/img-1.svg"
                                width={532}
                                height={604}
                                alt="Mentor"
                                className="w-[75%] sm:w-[80%] md:w-[92%] max-w-[400px] md:max-w-[532px]  h-auto relative z-10 object-contain scale-x-[1]"
                                style={{ marginBottom: "-20px" }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div></div>
    )
}
