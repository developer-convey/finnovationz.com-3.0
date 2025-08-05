export default function WhyNeedProgram() {
  return (
    <section className="md:w-[1080px] w-full mx-auto py-12 bg-white">
      <h2 className="text-[20px] md:text-3xl font-bold text-center text-gray-900 mb-8">
        Why Do You Need This Programme?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {/* Item 1 */}
        <div className="text-left p-6 md:p-1">
          <div className="h-2 w-full mb-5 bg-gradient-to-r from-green-400 to-blue-500" />
          <h3 className="text-3xl font-semibold md:mb-5 text-blue-500">01</h3>
          <p className="text-gray-700 md:h-[190px]">
            Money can't buy happiness, might be true, but 
            <span className="bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent md:text-[20px] font-semibold"> wealth </span> 
            can, and you want to 
            <span className="bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent md:text-[20px] font-semibold"> build wealth </span> 
            that your generations can enjoy.
          </p>
          <div className="h-2 md:block hidden w-full mt-3 bg-gradient-to-r from-green-400 to-blue-500" />
        </div>

        {/* Item 2 */}
        <div className="text-left p-6 md:p-1">
          <div className="h-2 w-full mb-5 bg-gradient-to-r from-green-400 to-blue-500" />
          <h3 className="text-3xl font-semibold md:mb-5 text-blue-500">02</h3>
          <p className="text-gray-700 md:h-[190px]">
            Investments in the Securities market are subject to market risk, but a proper framework can help you 
            <span className="bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent md:text-[20px] font-semibold"> survive </span> 
            in any market condition and you need it.
          </p>
          <div className="h-2 md:block hidden w-full mt-3 bg-gradient-to-r from-green-400 to-blue-500" />
        </div>

        {/* Item 3 */}
        <div className="text-left p-6 md:p-1">
          <div className="h-2 w-full mb-5 bg-gradient-to-r from-green-400 to-blue-500" />
          <h3 className="text-3xl font-semibold md:mb-5 text-blue-500">03</h3>
          <p className="text-gray-700 md:h-[190px]">
            70% intraday traders lose money in the market, and it's more stressful than watching India vs Pakistan. Stop the load and start 
            <span className="bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent md:text-[20px] font-semibold"> investing</span>.
          </p>
          <div className="h-2 md:block hidden w-full mt-3 bg-gradient-to-r from-green-400 to-blue-500" />
        </div>

        {/* Item 4 */}
        <div className="text-left p-6 md:p-1">
          <div className="h-2 w-full mb-5 bg-gradient-to-r from-green-400 to-blue-500" />
          <h3 className="text-3xl font-semibold md:mb-5 text-blue-500">04</h3>
          <p className="text-gray-700 md:h-[190px]">
            Low risk high return 
            <span className="bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent md:text-[20px] font-semibold"> opportunities</span> 
            are rare, you don't want to miss out on such.
          </p>
          <div className="h-2 mt-10  w-full md:mt-3 bg-gradient-to-r from-green-400 to-blue-500" />
        </div>
      </div>
    </section>
  );
}
