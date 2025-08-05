import React from 'react'

export default function MentorIntroductionSection() {
  return (
    <div>  <div className="mt-[100px] pb-[30px] bg-gradient-to-r from-[#1B2537] to-[#2E3A50] text-white" style={{ height: 'fit-content' }}>
    <div className="flex justify-center bg-gradient3 md:ml-[100px] md:me-[100px] m-0">
        <div className="container-xs mt-[100px] px-2.5 md:px-5">
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Left Content (Text Section) */}
                <div className="order-1 md:order-none flex flex-col items-start gap-5 text-white">
                    <p className="text-[18px] tracking-[2.70px] font-normal text-white uppercase">
                        Meet Our Mentor
                    </p>
                    <h1 className="sm:text-[32px] md:text-[38px] leading-[50px] text-[42px] w-full font-bold">
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

                {/* Right Image Section */}
                <div className="order-2 md:order-none relative w-full flex justify-center md:justify-end items-center mt-10 md:mt-20">
                    
                    {/* Background Shape */}
                    <div
                        className="absolute bottom-[-20px] right-15 w-[300px] h-[350px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[500px] bg-white bg-opacity-10 rounded-tl-[266px] rounded-tr-[266px]"
                        style={{ zIndex: 9 }}
                    ></div>

                    {/* Mentor Image */}
                    <img
                        src="https://s3-alpha-sig.figma.com/img/f259/6990/3797ee7f5070755f807488fbc2869aed?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePUG8W-g7wT38Tm~E~7Jb8iCrOngo-xIdXauMwEFTgUj6QcLKRY-IKyBI-Zuc4sHJfuWztu2K2t6TqsxVV~9II1AuF3z-qRCWdttKqdhSKkqKPR8I~O49Br6U24wD5rpoeG1FOhXAzvcQGFKV~837CQuNOFO4wZxv7Gz7CyE5XlHY5SkKOdiifVCcZGvaCYfGPqXV5MfX6nAIuk8A7pMDoP-XFKohV2dgGIqGUHEmUcMFHWOOiBhOKE7~7LZCW-GOXcWfew9qAYKfq8zxJCYKK44u3XiK7I24NSeggIlsIB8wF0o9xH54lBqSm8l8Vc4axnbuG8bf311RpaAK40s0A__"
                        width={532}
                        height={604}
                        alt="Mentor"
                        className="w-[75%] sm:w-[80%] md:w-[92%] max-w-[400px] md:max-w-[532px]  h-auto relative z-10 object-contain scale-x-[-1]"
                        style={{ marginBottom: "-20px" }}
                    />
                </div>

            </div>
        </div>
    </div>
</div></div>
  )
}
