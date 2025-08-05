import React from 'react';
import Stylefinance from '../style/finance.module.css'
function Financeabout() {
    return (
        <>
            <section  className={`text-center ${Stylefinance.about_sec}`}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className='col-12'>
                            <div className={`text-center ${Stylefinance.about}`}>
                                <img src="/fcp.svg" alt=""   className={`${Stylefinance.fcpImg}`}/>
                                <h2>About <span className={`text-center ${Stylefinance.textHeighlighted}`}>Finance Club</span> By Prasad</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className={`mt-3 ${Stylefinance.socialIcon}`}>
                                    <a href=""><img src="/linkdln.svg" alt="" /></a>
                                    <a href=""><img src="/fb.svg" alt="" /></a>
                                    <a href=""><img src="/twitter.svg" alt="" /></a>
                                    <a href=""><img src="/insta.svg" alt="" /></a>
                                    <a href=""><img src="/utube.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Financeabout;