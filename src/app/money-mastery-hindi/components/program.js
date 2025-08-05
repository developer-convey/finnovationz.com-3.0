import React from "react";
import './styles.css'
const NewModule = () => {
  return (
    <section className="md:w-[900px] lg:w-[1100px] mx-auto text-center py-12 px-6">
      {/* Heading */}
      <h2 className="text-[30px] md:text-4xl md:font-semibold font-light text-gray-900">
        Why Do You Need <br />
        <span className="font-bold">This Program?</span>
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
        <h3 className="outline-text md:text-[50px]">01</h3>
          <p className="text-gray-600 md:text-[22px] md:h-[180px] md:mt-5">
            Money can't buy happiness, might be true, but wealth can, and you
            want to build wealth that your generations can enjoy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
        <h3 className="outline-text md:text-[50px]">02</h3>
          <p className="text-gray-600 md:text-[22px] md:h-[180px] md:mt-5">
            Investments in the Securities market are subject to market risk, but
            a proper framework can help you survive in any market condition and
            you need it.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
        <h3 className="outline-text md:text-[50px]">03</h3>
          <p className="text-gray-600 md:text-[22px] md:h-[180px] md:mt-5">
            70% intraday traders lose money in the market, and it's more
            stressful than watching India vs Pakistan. Stop the load and start
            investing.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left">
        <h3 className="outline-text md:text-[50px]">04</h3>
          <p className="text-gray-600 md:text-[22px] md:h-[180px] md:mt-5">
            Low risk high return opportunities are rare, you don't want to miss
            out on such.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewModule;
