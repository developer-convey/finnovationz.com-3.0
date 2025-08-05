import React from 'react'

export default function Footer() {
  return (
    <div>   <div className="testimonials-section py-10 flex flex-col items-center justify-center bg-gradient-to-r from-[#1B2537] to-[#2E3A50] text-white">
    <div className="container text-center color-white px-1">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
    FinnovationZ
  </h2><br></br>
      <h4>Disclaimer</h4>
      <br></br>
    </div>
  
    <div className="content-container px-1 max-w-4xl text-white">
      <p className="mb-4 text-white" style={{fontSize:'12px'}}>
        FinnovationZ is committed to providing high-quality educational resources designed to enhance your financial knowledge and skills. However, we do not support or promote "get-rich-quick" schemes. Our programs are built on the principles of consistent effort, value creation, and personal growth.
      </p>
      <p className="mb-4 text-white" style={{fontSize:'12px'}}>
        In accordance with applicable laws, we make no guarantees, representations, or warranties regarding your ability to achieve specific financial results or income levels by utilizing the ideas, strategies, or materials we provide. Individual success depends on numerous factors, including your personal dedication, experience, and financial situation, which are beyond our control.
      </p>
      <p className="mb-4 text-white" style={{fontSize:'12px'}}>
        Any financial figures, case studies, or examples shared in our materials or communications are intended solely for illustrative purposes. They should not be interpreted as promises or projections of future performance. Past results are not indicative of future outcomes.
      </p>
      <p className="mb-4 text-white" style={{fontSize:'12px'}}>
        By engaging with our programs, you acknowledge and accept that FinnovationZ is not responsible for any financial decisions or outcomes resulting from the use of our content.
      </p>
      <p className="mb-8 text-white " style={{fontSize:'12px'}}>
        For inquiries or support, please contact us at <a href="mailto:support@finnovationz.com" className="text-blue-400 underline">support@finnovationz.com</a>.
      </p >
      <p className="font-bold text-white" style={{fontSize:'12px'}}>Thank you for trusting FinnovationZ.</p>
    </div>
  
    {/* Footer Section */}
    <div className="footer text-center mt-10">
      <p className="mb-2" style={{fontSize:'12px'}}>
        <a href="https://www.finnovationz.com/terms-of-service" className="text-blue-400 underline">Terms & Conditions</a> | <a href="https://www.finnovationz.com/privacy-policy" className="text-blue-400 underline">Privacy Policy</a>  <span className='text-white'>©2025 Ikashi Fintech Pvt Ltd. All Rights Reserved</span>
      </p>
    </div>
  </div>
  </div>
  )
}
