import React from "react";
import './styles.css'
const NewModule = ({ scrollToContact }) => {
  return (
    <section className="flex justify-center items-center text-center h-48 bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-white font-manrope text-3xl md:text-[55px] font-light">
          Are You <span className="font-bold">Convinced?</span>
        </h2>

        {/* Button - Centered Properly */}
        <button onClick={scrollToContact} className="mt-8 md:w-[280px] backdrop-blur-lg px-6 py-3 border border-white rounded-full text-white font-semibold flex items-center justify-center text-center gap-2  transition duration-300">
          YES BOOK MY SEAT <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

        </button>
      </div>
    </section>
  );
};

export default NewModule;
