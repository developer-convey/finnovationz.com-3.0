export default function BonusSection() {
  return (
    <section className="py-8 px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
      रविवारच्या session साठी Register करा आणि मिळवा 
      </h2>
      <p className="text-gray-600 mt-2">
      हे 3 bonuses अगदी मोफत 
      </p>

      {/* Bonus Cards */}
      <div className="mt-10 md:w-[1080px] mx-auto text-left md:h-[220px] grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {/* Bonus 1 */}
        <div className="relative p-[2px] rounded-xl group hover:shadow-2xl transition-all">
          <div className="absolute inset-0 bg-gradient-to-b from-[#377BDC] to-[#30C9AB] rounded-[14px]" />
          <div className="relative p-6 pt-14 bg-white rounded-xl h-full">
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent">
              Bonus <span className="text-blue-600">1</span>
            </h3>
            <p className="text-gray-700 mt-2">
             
              <span className="font-bold text-gray-900">₹ 10,000 </span>
              आमचे स्वतः चे 5 tools मिळवा अगदी मोफत 
              <br></br>
            </p>
          </div>
        </div>

        {/* Bonus 2 */}
        <div className="relative p-[2px] rounded-xl group hover:shadow-2xl transition-all">
          <div className="absolute inset-0 bg-gradient-to-b from-[#377BDC] to-[#30C9AB] rounded-[14px]" />
          <div className="relative p-6 pt-14 bg-white rounded-xl h-full">
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent">
              Bonus <span className="text-blue-600">2</span>
            </h3>
            <p className="text-gray-700 mt-2">
             
              <span className="font-bold text-gray-900">Market Masters community</span>
              <br></br>ची lifetime membership 
            </p>
          </div>
        </div>

        {/* Bonus 3 */}
        <div className="relative p-[2px] rounded-xl group hover:shadow-2xl transition-all">
          <div className="absolute inset-0 bg-gradient-to-b from-[#377BDC] to-[#30C9AB] rounded-[14px]" />
          <div className="relative p-6 pt-14 bg-white rounded-xl h-full">
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#30C9AB] to-[#377BDC] bg-clip-text text-transparent">
              Bonus <span className="text-blue-600">3</span>
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="font-bold text-gray-900">10-Step Secret Stock Cheat Sheet</span> 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}