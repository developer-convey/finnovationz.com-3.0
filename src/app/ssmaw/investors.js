"use client";
import { useRef } from 'react';
import { useInView } from './use-in-view';

export default function Investor() {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);

  const step1IsVisible = useInView(step1Ref);
  const step2IsVisible = useInView(step2Ref);
  const step3IsVisible = useInView(step3Ref);
  const step4IsVisible = useInView(step4Ref);

  return (
    <div className="relative bg-black text-white py-16 px-8">
      {/* Top horizontal line */}
      <div className="w-full border-t border-gray-500 relative">
      </div>

      {/* Main content - Single row with vertical line */}
      <div className="max-w-7xl mx-auto md:flex  items-center gap-12 mt-8">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="md:text-5xl  text-[24px] font-bold text-white leading-tight">
           why do you need <span className='md:block'>this programme?</span> 
          </h2>
        </div>

        {/* Vertical Line */}
        <div className="h-24 md:block hidden  w-[2px] bg-gray-500"></div>

        {/* Right Content */}
        <div className="flex-1 mt-4  md:mt-0">
          <p className="md:text-lg text-white">
          Here’s exactly why you need to learn the stock market….          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  gap-5 mt-10">
        {/* Card 1 */}
        <div className="bg-black shadow-md border-[1px] border-gray-100 rounded-lg h-[200px] p-6 text-left">
        <h3 className='md:text-[20px] font-semibold'>Symptom 1</h3>
          <p className="text-white md:text-[18px] md:h-[180px] md:mt-5">
          To have a proper framework to help you survive in any market condition
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black shadow-md rounded-lg  border-[1px] border-gray-100  h-[200px] p-6 text-left">
        <h3 className='md:text-[20px] font-semibold'>Symptom 2</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          To stop being under the pressure of day trading and start investing
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-black shadow-md rounded-lg border-[1px] border-gray-100  h-[200px] p-6 text-left">
        <h3 className='md:text-[20px] font-semibold'>Symptom 3</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          To not miss out on rare low risk high return opportunities in the share market.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-black shadow-md rounded-lg border-[1px] border-gray-100  h-[200px] p-6 text-left">
        <h3 className='md:text-[20px] font-semibold'>Symptom 4</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          To build wealth that your generations can enjoy.
          </p>
        </div>
       
      </div>
    
      {/* <div 
        ref={step1Ref}
        data-section-id="step1"
        className="max-w-7xl mx-auto pt-[100px] overflow-hidden"
      >
        <div className="flex gap-12">
          <div className={`flex-1 transition-all duration-1000 transform ${
            step1IsVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <p className="text-sm uppercase tracking-wide text-gray-400">Symptom 1</p>
            <h2 className="text-4xl font-bold mt-2">
              Lost in the World of Stocks and Mutual Funds
            </h2>
            <p className="text-lg mt-4">
            To have a proper framework to help you survive in any market condition
            </p>
          </div>
          <div className={`flex-1 transition-all duration-1000 transform ${
            step1IsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <img 
              src="/Layer-1.jpg" 
              alt="Investment discussion" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

  
      <div 
        ref={step2Ref}
        data-section-id="step2"
        className="max-w-7xl mx-auto pt-[100px] overflow-hidden"
      >
        <div className="flex gap-12">
          <div className={`flex-1 transition-all duration-1000 transform ${
            step2IsVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <img 
              src="/Layer-2.jpg" 
              alt="Investment discussion" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className={`flex-1 transition-all duration-1000 transform ${
            step2IsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <p className="text-sm uppercase tracking-wide text-gray-400">Symptom 2</p>
            <h2 className="text-4xl font-bold mt-2">
              Afraid to Invest, Afraid to Lose
            </h2>
            <p className="text-lg mt-4">
            To stop being under the pressure of day trading and start investing
            </p>
          </div>
        </div>
      </div>

     
      <div 
        ref={step3Ref}
        data-section-id="step3"
        className="max-w-7xl mx-auto pt-[100px] overflow-hidden"
      >
        <div className="flex gap-12">
          <div className={`flex-1 transition-all duration-1000 transform ${
            step3IsVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <p className="text-sm uppercase tracking-wide text-gray-400">Symptom 3</p>
            <h2 className="text-4xl font-bold mt-2">
              Chasing Quick Profits, Ignoring Long-Term Goals
            </h2>
            <p className="text-lg mt-4">
            To not miss out on rare low risk high return opportunities in the share market.
            </p>
          </div>
          <div className={`flex-1 transition-all duration-1000 transform ${
            step3IsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <img 
              src="/Layer-3.jpg" 
              alt="Investment discussion" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

    
      <div 
        ref={step4Ref}
        data-section-id="step4"
        className="max-w-7xl mx-auto pt-[100px] overflow-hidden"
      >
        <div className="flex gap-12">
          <div className={`flex-1 transition-all duration-1000 transform ${
            step4IsVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <img 
              src="/Layer-4.jpg" 
              alt="Investment discussion" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className={`flex-1 transition-all duration-1000 transform ${
            step4IsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <p className="text-sm uppercase tracking-wide text-gray-400">Symptom 4</p>
            <h2 className="text-4xl font-bold mt-2">
              No Clear Roadmap to Financial Freedom
            </h2>
            <p className="text-lg mt-4">
            To build wealth that your generations can enjoy.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}