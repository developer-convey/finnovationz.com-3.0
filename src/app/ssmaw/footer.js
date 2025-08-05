const Footer = () => {
    return (
        <div className="bg-black">
      <footer className="bg-black md:w-[1200px] mx-auto text-white md:text-center px-6 py-8">
        {/* Disclaimer Section */}
        <div className=" mx-auto text-sm text-gray-300 leading-[40px]">
          <h2 className="text-lg font-semibold mb-2 text-white">Disclaimer</h2>
          <p >
            The information provided are for educational purposes only and should not be construed as investment advice. We make no warranties or representations, express or implied, on products and services offered through the platform. Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, goal, investment time frame, risk and reward as well as the cost associated with the investment before investing, or designing a portfolio that suits your needs. Performance and returns of any investment portfolio can neither be predicted nor guaranteed. Investment in securities market are subject to market risks, read all the related documents carefully before investing.
          </p>
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-700 my-6 mx-auto "></div>
  
        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm  mx-auto px-4">
          {/* Left Side */}
          <div className="flex space-x-6">
            <span>Copyright ©2025 Finnovationz</span>
            <span className="hidden md:block">|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span className="hidden md:block">|</span>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
  
          {/* Right Side */}
          <div className="mt-3 md:mt-0">
            <span>
              Website Designed & Developed With <span className="text-red-500">❤️</span> by Procave Digital Agency
            </span>
          </div>
        </div>
      </footer>
      </div>
    );
  };
  
  export default Footer;
  