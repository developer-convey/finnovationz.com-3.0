"use client";

export default function FinnovationBanner({ scrollToContact }) {
  return (
    <section className="bg-white md:min-h-screen h-[330px] font-mulish py-16 px-6 md:px-12 lg:px-20 h-full relative">
      {/* Move Pattern to Cover Right Image in Mobile */}
      <div className="absolute top-0 left-0 w-full md:h-[30%] z-10 md:z-0 h-full bg-[url('/pattren.svg')] bg-repeat-x bg-top opacity-90 "></div>

      <div className="md:w-[1080px] text-center md:text-left mx-auto relative z-10 flex flex-col gap-6">
      <h1 className="flex justify-center items-center md:justify-start md:items-start text-xl md:text-xl font-bold md:text-left text-center">
  <img
    src="/finnovationzshare.png"
    alt="FinnovationZ Logo"
    className="w-[180px] h-6 md:h-6"
  />
</h1>





        <h2 className="text-3xl md:text-6xl md:mt-[100px] leading-tight font-semibold text-gray-900">
          Your <span className="font-extrabold">wealth</span> journey <br />
          starts here<span className="text-black">....</span>
        </h2>

        <button onClick={scrollToContact} className="bg-gradient-to-r from-[#44C4B8] to-[#3A89F8]  md:mt-[50px] text-center text-white px-4 py-2 rounded-full md:w-[300px] w-[220px] text-lg font-medium shadow-md transition hover:opacity-80 mx-auto md:mx-0">
  Reserve My Spot Now
</button>

      </div>

      {/* Right Side Wealth Design with Background Image */}
      <div
        className="absolute right-0 top-0 md:w-[50%] w-full h-full md:bg-cover bg-contain bg-no-repeat bg-right md:bg-[url('/herologo.svg')]"
      >
        {/* Mobile: Overlay the Pattern Image */}
        <div className="absolute inset-0 bg-[url('/herologo.svg')] bg-cover bg-center opacity-80 md:hidden"></div>

        <div className="absolute md:block hidden right-0 top-0 md:w-[1000px] flex flex-col justify-center items-center overflow-hidden h-full">
          <div className="relative w-full h-full opacity-20">
            <span 
              className="block md:text-[97px] absolute right-[-90px] top-0 font-extrabold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent"
            >
              WEALTH
            </span>
            <span 
              className="block md:text-[93px] absolute right-[-70px] top-[90px] font-extrabold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent"
            >
              WEALTH
            </span>
            <span 
              className="block md:text-[97px] absolute right-[-70px] top-[180px] font-extrabold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent"
            >
              WEALTH
            </span>
            <span 
              className="block md:text-[100px] absolute right-[-20px] top-[270px] font-extrabold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent"
            >
              WEALTH
            </span>
            <span 
              className="block md:text-[113px] absolute right-[-10px] top-[360px] font-extrabold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent"
            >
              WEALTH
            </span>
            <span 
              className="block md:text-[132px] absolute right-[-10px] top-[460px] font-extrabold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent"
            >
              WEALTH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
