import React from 'react';

const InvestorFooter = () => {
    return (
        <>
            <footer className="footer_section text-center py-10 text-gray-500">
                <div className="w-full flex justify-center items-center">
                    <img
                        className="footer_mb_logo"
                        src="/images/finnovationz-logo.png"
                        alt="Diary"
                        style={{ width: "180px", height: "auto", margin: "50px" }}
                    />
                </div>
                <div className="footer_container px-20 w-full flex justify-center items-center">
                    <div className="footer_copyright w-full flex justify-start">
                        <p>©2024 FinnovationZ. All Rights Reserved.</p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <img
                            className="footer_logo"
                            src="/images/finnovationz-logo.png"
                            alt="Diary"
                            style={{ width: "180px", height: "auto", margin: "50px" }}
                        />
                    </div>
                    <div className="footer_links w-full flex justify-end">
                        <ul>
                            <li> <a href="https://www.finnovationz.com/terms-of-service">Terms & Condition</a></li>
                            <li> <a href="https://www.finnovationz.com/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default InvestorFooter;
