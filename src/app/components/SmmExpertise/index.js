import React from "react";


function Expertise() {
  return (
    <section className="w-auto">
      <div className="container mx-auto px-4">
        <div className="bg-white md:p-12 p-6 rounded-2xl border-2 border-gray-300 relative mt-[-85px] md:mt-[-85px] sm:mt-6">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
               
               
                <div className="flex items-center">
                  <div className="relative">
                    <img loading="lazy" src="/ex_youtube.svg" className="w-26 md:w-[150px] h-16 rounded-full mt-2" />
                  </div>
                  <div className="pl-2">
                    <h4 className="text-blue-500 font-bold text-lg md:text-[25px]">2.5 M+</h4>
                    <span className="text-gray-600">Subscribers on Youtube</span>
                  </div>
                </div>


               
                <div className="flex items-center">
                  <img loading="lazy" src="/user.png" className="w-16 h-16 rounded-full mt-2" />
                  <div className="pl-2">
                    <h4 className="text-blue-500 font-bold text-lg md:text-[25px]">450 M+</h4>
                    <span className="text-gray-600">Viewership</span>
                  </div>
                </div>


               
                <div className="flex items-center">
                  <img loading="lazy" src="/user.png" className="w-16 h-16 rounded-full mt-2" />
                  <div className="pl-2">
                    <h4 className="text-blue-500 font-bold text-lg md:text-[25px]">100 k+</h4>
                    <span className="text-gray-600">Learners</span>
                  </div>
                </div>


               
                <div className="flex items-center">
                  <img loading="lazy" src="/ex_learner.svg" className="w-16 h-16 rounded-full mt-2" />
                  <div className="pl-2">
                    <h4 className="text-blue-500 font-bold text-lg md:text-[25px]">22%</h4>
                    <span className="text-gray-600">CAGR on personal portfolio</span>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Expertise;


