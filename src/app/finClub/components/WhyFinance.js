import React, { Component } from 'react';
import Stylefinance from '../style/finance.module.css'
function WhyFinance() {
    return (
        <>
            <section className={` ${Stylefinance.JoinClub}`}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-7">
                            <h2>Why<span className={` ${Stylefinance.textHeighlighted}`}> Finance Club </span>by Prasad </h2>
                            <ul className={` ${Stylefinance.listStyle}`}>
                                <li>Discuss about the companies you want to invest in, with other smart investors daily and with our expert weekly.</li>
                                <li>Get exclusive discounts on all of your courses and become an intelligent investor.</li>                           
                            </ul>
                            <a href="#" className={`site_btn text-decoration-none footer_btn ps-5 pe-5 mt-0 shadow`}>Join Now</a>
                        </div>
                        <div className="col-md-5 mt-md-0 mt-4">
                            <img src="/why_finance.svg" alt="" className='w-100'/>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyFinance;