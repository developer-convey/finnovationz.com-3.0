import './styles.css'
export default function Fundamentals() {
    return (
      <div className="relative bg-black text-white py-16 px-8">
        {/* Top horizontal line */}
        <div className="w-full border-t border-gray-500 relative">
          {/* Image positioned above the line */}
        
        </div>
  
        {/* Main content - Single row with vertical line */}
        <div className="max-w-7xl mx-auto flex items-center gap-12 mt-8">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold leading-tight">
            Beyond the <br /> fundamentals.
            </h2>
          </div>
  
          {/* Vertical Line */}
          <div className="h-24 w-[2px] bg-gray-500"></div>
  
          {/* Right Content */}
          <div className="flex-1">
            <p className="text-lg">
            Learn how to navigate the stock market, make informed decisions, and build a robust investment portfolio for a financially secure future.   </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-1 mt-10">
        {/* Card 1 */}
        <div className="bg-black shadow-md rounded-lg h-[300px] p-6 text-left">
        <h3 className="outline-text md:text-[80px]">01</h3>
        <h3 className='md:text-[20px] font-semibold'>Understand your money better</h3>
          <p className="text-white md:text-[18px] md:h-[180px] md:mt-5">
          Learn how to make your money work for you instead of just spending it.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black shadow-md rounded-lg h-[300px] p-6 text-left">
        <h3 className="outline-text md:text-[50px]">02</h3>
        <h3 className='md:text-[20px] font-semibold'>Build wealth over time</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          iscover how investing can help you reach your long-term financial goals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-black shadow-md rounded-lg h-[300px] p-6 text-left">
        <h3 className="outline-text md:text-[50px]">03</h3>
        <h3 className='md:text-[20px] font-semibold'>Make informed decisions</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          Gain the knowledge to choose the right investments for your needs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-black shadow-md rounded-lg h-[300px] p-6 text-left">
        <h3 className="outline-text md:text-[50px]">04</h3>
        <h3 className='md:text-[20px] font-semibold'>Reduce financial stress</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          Feel more confident about your money and future.
          </p>
        </div>
        <div className="bg-black shadow-md rounded-lg p-6 text-left">
        <h3 className="outline-text md:text-[50px]">05</h3>
        <h3 className='md:text-[20px] font-semibold'>Increase your earning potential</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          Learn how to grow your money through wise investments.
          </p>
        </div>
        <div className="bg-black shadow-md rounded-lg p-6 text-left">
        <h3 className="outline-text md:text-[50px]">06</h3>
        <h3 className='md:text-[20px] font-semibold'>Achieve financial independence</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          Take control of your financial future
          </p>
        </div>
        <div className="bg-black shadow-md rounded-lg p-6 text-left">
        <h3 className="outline-text md:text-[50px]">07</h3>
        <h3 className='md:text-[20px] font-semibold'>Protect yourself from scams</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          Understand investment basics to avoid being cheated.
          </p>
        </div>
        <div className="bg-black shadow-md rounded-lg p-6 text-left">
        <h3 className="outline-text md:text-[50px]">08</h3>
        <h3 className='md:text-[20px] font-semibold'>Create a better future for you</h3>

          <p className="text-white md:text-[16px] md:h-[180px] md:mt-5">
          Build a strong financial foundation for generations to come.
          </p>
        </div>
      </div>
      </div>
    );
  }
  