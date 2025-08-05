"use client";
import { useRef } from 'react';
import { useInView } from './use-in-view';

export default function InvestmentSection() {
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
        <img 
          src="/Secret_White.webp" 
          alt="Arrow" 
          className="absolute top-[-170px] left-[55%] -translate-x-1/2 w-[300px] h-auto"
        />
      </div>

      {/* Main content - Single row with vertical line */}
      {/* <div className="max-w-7xl mx-auto flex items-center gap-12 mt-8">
       
        <div className="flex-1">
          <h2 className="text-5xl font-bold leading-tight">
            Better Investment, <br /> Better Portfolio
          </h2>
        </div>

       
        <div className="h-24 w-[2px] bg-gray-500"></div>

       
        <div className="flex-1">
          <p className="text-lg">
            Unlock the secrets to building a robust investment portfolio. Learn 
            how to make informed decisions, diversify your assets, and achieve your 
            financial goals. Your journey to financial freedom starts here.
          </p>
        </div>
      </div> */}

      {/* Step 1 */}
      <div 
        ref={step1Ref}
        className={`max-w-7xl mx-auto flex md:flex-row flex-col items-center pt-[100px] gap-12 slide-up ${
          step1IsVisible ? 'in-view' : ''
        }`}
      >
        <div className="flex-1 text-white">
          <p className="text-sm uppercase tracking-wide text-white">Module-1</p>
          <h2 className="text-4xl font-bold mt-2 text-white">
          Finding Multibagger

          </h2>
          <p className="text-lg mt-4 text-white">
          Learn practical steps to find stocks that have the potential to grow manifold.
</p>
        </div>
        <div className="flex-1">
          <img 
            src="https://www.finnovationz.com/1.png" 
            alt="Investment discussion" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Step 2 */}
      <div 
        ref={step2Ref}
        className={`max-w-7xl mx-auto flex  md:flex-row flex-col items-center pt-[100px] gap-12 slide-up ${
          step2IsVisible ? 'in-view' : ''
        }`}
      >
        <div className="flex-1 text-white">
          <p className="text-sm uppercase tracking-wide text-white">Module-2</p>
          <h2 className="text-4xl font-bold mt-2 text-white">
          Detecting Frauds

          </h2>
          <p className="text-lg mt-4 text-white">
          You will never lose money in the market due to a fraud now. Become a master in management fraud detection.
   </p>
        </div>
        <div className="flex-1">
          <img 
            src="https://www.finnovationz.com/2.png" 
            alt="Investment discussion" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Step 3 */}
      <div 
        ref={step3Ref}
        className={`max-w-7xl mx-auto flex md:flex-row flex-col items-center pt-[100px] gap-12 slide-up ${
          step3IsVisible ? 'in-view' : ''
        }`}
      >
        <div className="flex-1 text-white ">
          <p className="text-sm uppercase tracking-wide text-white">Module-3</p>
          <h2 className="text-4xl font-bold mt-2 text-white">
          Finding Market Opportunities

          </h2>
          <p className="text-lg mt-4 text-white">
          My secret on how do I find low risk opportunities in the market. Learn practical steps and find yours.
  </p>
        </div>
        <div className="flex-1">
          <img 
            src="https://www.finnovationz.com/3.png" 
            alt="Investment discussion" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Step 4 */}
      <div 
        ref={step4Ref}
        className={`max-w-7xl mx-auto flex md:flex-row flex-col items-center pt-[100px] gap-12 slide-up ${
          step4IsVisible ? 'in-view' : ''
        }`}
      >
        <div className="flex-1 text-white">
          <p className="text-sm uppercase tracking-wide text-white">Module-4</p>
          <h2 className="text-4xl font-bold mt-2 text-white">
          Finding Zombie Companies

          </h2>
          <p className="text-lg mt-4 text-white">
          These companies are traps, they look alive but they are not. This section will help you bifurcate such companies.
  adjustments as needed.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src="https://www.finnovationz.com/2.png" 
            alt="Investment discussion" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}