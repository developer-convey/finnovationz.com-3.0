import React from 'react';
import '../assets/styles/ourservices.css';

function OurServices() {
    return (
        <section className='our-services'>
            <div className='our-services-container'>
                <div className='our-services-title'>Our Services</div>
                <div className='our-services-cards'>
                    <div className='our-services-card-container'>
                        <div className='our-services-card'>
                            <div>
                                <div className='our-services-card-image-container'>
                                    <div className='our-services-card-image'><img src="/youtube-icon.svg" alt="news" /></div>
                                    <div className='our-services-card-title mt-1'>Youtube</div>
                                </div>
                                <div className='our-services-card-description mt-3'>Join our community of 2.6 million+ subscribers! and take control of your financial future.</div>
                            </div>
                            <a href='https://www.youtube.com/@namaskarprasad' target="_blank" rel="noopener noreferrer"><div className='our-services-card-explore'>Explore more</div></a>
                        </div>
                        <div className='our-services-card'>
                            <div>
                                <div className='our-services-card-image-container'>
                                    <div className='our-services-card-image'><img src="/webinar.svg" alt="youtube-icon" /></div>
                                    <div className='our-services-card-title mt-1'>Webinar</div>
                                </div>
                                <div className='our-services-card-description mt-3'>Expand your financial knowledge and gain key insights by attending our webinars.</div>
                            </div>
                            <a href='#'><div className='our-services-card-explore'>Explore more</div></a>
                        </div>
                        <div className='our-services-card'>
                            <div>
                                <div className='our-services-card-image-container'>
                                    <div className='our-services-card-image'><img src="/news.svg" alt="webinar" /></div>
                                    <div className='our-services-card-title mt-1'>Blogs</div>
                                </div>
                                <div className='our-services-card-description mt-3'>Read about share market, mutual fund, wealth management and more.</div>
                            </div>
                            <a href='https://www.finnovationz.com/blog' target="_blank" rel="noopener noreferrer"><div className='our-services-card-explore'>Explore more</div></a>
                        </div>
                        <div className='our-services-card'>
                            <div>
                                <div className='our-services-card-image-container'>
                                    <div className='our-services-card-image'><img src="/finclub.svg" alt="finclub" /></div>
                                    <div className='our-services-card-title mt-1'>Calculator</div>
                                </div>
                                <div className='our-services-card-description mt-3'>Calculate the future value of your investments. We have covered EMI to DCF all types of calculators.</div>
                            </div>
                            <a href='https://www.finnovationz.com/calculator' target="_blank" rel="noopener noreferrer"><div className='our-services-card-explore'>Explore more</div></a>
                        </div>
                        <div className='our-services-card'>
                            <div>
                                <div className='our-services-card-image-container'>
                                    <div className='our-services-card-image'><img src="/courses.svg" alt="courses" /></div>
                                    <div className='our-services-card-title mt-1'>Courses</div>
                                </div>
                                <div className='our-services-card-description mt-3'>Gain valuable insights from industry experts, learn practical strategies, and develop...</div>
                            </div>
                            <a href='https://www.finnovationz.com/courses' target="_blank" rel="noopener noreferrer"><div className='our-services-card-explore'>Explore more</div></a>
                        </div>
                        <div className='our-services-card'>
                            <div>
                                <div className='our-services-card-image-container'>
                                    <div className='our-services-card-image'><img src="/quiz.svg" alt="quiz" /></div>
                                    <div className='our-services-card-title mt-1'>Quiz</div>
                                </div>
                                <div className='our-services-card-description mt-3'>Take our quick quiz to assess your share market knowledge.</div>
                            </div>
                            <a href='https://www.finnovationz.com/quiz' target="_blank" rel="noopener noreferrer"><div className='our-services-card-explore'>Explore more</div></a>
                        </div>
                        <div className='our-services-card'>
                            <div>
                                <div className='our-services-card-image-container'>
                                    <div className='our-services-card-image'><img src="/brocrom.svg" alt="brocrom" /></div>
                                    <div className='our-services-card-title mt-1'>Brocrom</div>
                                </div>
                                <div className='our-services-card-description mt-3'>Brocom allows you to compare top stock brokers and find the best fit for you.</div>
                            </div>
                            <a href='https://www.finnovationz.com/' target="_blank" rel="noopener noreferrer">
  <div className='our-services-card-explore'>Explore more</div>
</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices;