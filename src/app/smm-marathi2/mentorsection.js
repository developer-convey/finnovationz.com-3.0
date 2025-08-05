import React from "react";
import Image from "next/image";

export default function Home({ scrollToContact }) {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Background Image on Left Side (Desktop Only) */}
      <Image
        src="/Group 16.png"
        alt="Background"
        width={700}
        height={400}
        className="absolute md:block hidden left-0 top-0 w-[500px] h-[550px] z-0"
      />

      {/* Main content */}
      <main className="relative z-20 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          
          {/* Profile Card Section (Left on Desktop, Bottom on Mobile) */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="bg-[#1A1F2F] rounded-3xl md:p-[30px] relative w-[350px] h-[400px] flex justify-center items-center z-10">
              <img
                src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/Untitled-1%201.png"
                alt="Prasad Lendwe"
                className="w-full h-auto rounded-2xl z-[12]"
              />
            </div>

            {/* Icons Around the Image */}
            <img src="/1a.png" alt="Icon 1" className="absolute z-[10] md:w-[60px] w-[40px] md:bottom-[140px] md:left-[85px]  bottom-[180px] left-[30px] rotate-[-15deg]" />
            <img src="/2a.png" alt="Icon 2" className="absolute z-10 md:w-[50px] w-[40px] md:top-[25px] md:right-[140px] top-[40px] right-[40px] rotate-[10deg]" />
            <img src="/3a.png" alt="Icon 3" className="absolute z-10 md:w-[60px] w-[40px] md:top-[20px] md:left-[120px] top-[40px] left-[30px] rotate-[20deg]" />
            <img src="/4a.png" alt="Icon 4" className="absolute z-10 md:w-[60px] w-[40px] md:bottom-[130px] md:right-[19%] bottom-[180px] right-[30px] rotate-[-10deg]" />
          </div>

          {/* Content Section (Right on Desktop, Top on Mobile) */}
          <div className="order-1 md:order-2 space-y-8 text-left md:text-left">
            <h1 className="text-[20px] font-semibold text-gray-900">Meet Our Mentor</h1>
            <h1 className="text-xl md:text-3xl font-bold text-[#1A1F2F]">
              Prasad Lendwe, Investor, Founder
            </h1>
            <div className="space-y-4">
              <p className="text-gray-700">
              प्रसाद लेंडवे, ज्यांना नमस्कार प्रसाद म्हणून ओळखलं जातं, हे आर्थिक शिक्षण क्षेत्रातलं एक प्रसिद्ध नाव आहे. त्यांनी 2011-12 साली आपल्या आपल्या मित्र-परिवारा कडून घेतलेल्या पैशयातून गुंतवणूक करून आपल्या प्रवासाची सुरुवात केली – परंतु त्यात त्यांना तोटा झाला.                  </p>
              <p className="text-gray-700">
              या तोट्यामुळेच त्यांना आर्थिक शिक्षणाचं महत्त्व समजलं, आणि तेव्हापासून त्यांनी केवळ अंदाजावर आधारित गुंतवणुकीऐवजी investment चे खरे ज्ञान मिळवण्यावर लक्ष केंद्रित केलं.                   </p>
              <p className="text-gray-700">

              त्यांच्या लक्षात आले की आर्थिक जागरूकते ची कमी ही फक्त त्यांचीच समस्या नाही आहे – ती अनेक भारतीयांची आहे. भारत आर्थिकदृष्ट्या जागरूक व्हावा, या साध्या विचारानेच त्यांनी आपला YouTube चॅनेल सुरू केले आणि आज 2.5 million हून अधिक subscribers त्यांनी कमवले आहेत.  
                  </p>
            </div>
          </div>
        </div>

        {/* Button (Always at Bottom) */}
        <div onClick={scrollToContact} className="flex justify-center md:mt-[150px] mt-[70px] order-3">
          <button className="bg-gradient-to-r from-[#42E8E0] to-[#2B4BF2] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
          Reserve My Spot
          </button>
        </div>
      </main>
    </div>
  );
}
