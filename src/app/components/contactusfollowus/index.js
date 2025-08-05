import React from "react";
import Link from "next/link";
import "./contactusfollowus.css";

const ContactUsFollowUs = () => {
    return (
        <div className="contactus-followus-container">
            <div className="enquiry-support-sections">
                <div className="enquiry-section-general">
                    <div className="enquiry-header">General Enquiry</div>
                    <div className="enquiry-content">
                        <img src="/support-call.svg" alt="support-call" />
                        <Link
                            href="tel:+918484888958"><span>+91 8484888958</span>
                        </Link>
                    </div>
                    <div className="enquiry-underline"></div>
                    <div className="enquiry-item">
                        <img src="/support-email.svg" alt="support-email" />
                        <Link
                            href="mailto:partner@finnvationz.com"><span>partner@finnovationz.com</span>
                        </Link>
                    </div>
                </div>

                <div className="support-section">
                    <div className="support-header">Courses Support</div>
                    <div className="support-content">
                        <img src="/support-call-white.svg" alt="support-call" />
                        <Link
                            href="tel:+918484888968"><span>+91 8484888968</span>
                        </Link>
                    </div>
                    <div className="support-underline"></div>
                    <div className="support-item">
                        <img src="/support-email-white.svg" alt="support-email" />
                        <Link
                            href="mailto:support@finnvationz.com"><span>support@finnovationz.com</span>
                        </Link>
                    </div>
                </div>

                <div className="enquiry-section-club">
                    <div className="enquiry-header">Demat/Finance Club Enquiry</div>
                    <div className="enquiry-content">
                        <img src="/support-call.svg" alt="support-call" />
                        <Link
                            href="tel:+918484888968"><span>+91 8484888968</span>
                        </Link>
                    </div>
                    <div className="enquiry-underline"></div>
                    <div className="enquiry-item">
                        <img src="/support-email.svg" alt="support-email" />
                        <Link
                            href="mailto:priya@finnvationz.com"><span>priya@finnovationz.com</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center " style={{marginBottom:'-50px' }}>
                <div className="enquiry-container">
                    <span className="enquiry-box">
                        
                        <span className="enquiry-text">
                       <strong> Address</strong>: 
                Plot No 108 Lumbini Society, Near Euro School Gachibowli, HYDERABAD, TELANGANA, 500032
             
                 
                        </span>
                     
                    </span>
                </div>
            </div>

            <div className="text-center mt-3">
                <div className="enquiry-container">
                    <span className="enquiry-box">
                        <span>
                            <img
                                loading="lazy"
                                className="enquiry-icon"
                                src="/Group.svg"
                                alt=""
                            />
                        </span>
                        <span className="enquiry-text">
                            Enquiry regarding FMVM Contact
                        </span>
                        <Link
                            href="tel:+919890115928"
                            className="enquiry-link text-decoration-none"
                        >
                            +91 9890115928
                        </Link>
                    </span>
                </div>
            </div>
       
            <div className="follow-us-container">
                <div className="follow-us-section">
                    <div className="follow-us-header">Follow Us On</div>
                    <div className="social-icons">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100091287158268&mibextid=nW3QTL"><img src="/contact-facebook.svg" alt="facebook" /></a>
                        <a target="_blank" href="https://instagram.com/namaskarprasad?igshid=MzRlODBiNWFlZA=="><img src="/contact-instagram.svg" alt="Instagram" /></a>
                        <a target="_blank" href="https://twitter.com/conveyofficial?t=riXE4lD9f8bLbjOmhAIf8Q&s=09"><img src="/contact-x.svg" alt="X" /></a>
                        <a target="_blank" href="https://youtube.com/@namaskarprasad?si=BKRmkkM9XKOBIfVN"><img src="/contact-youtube.svg" alt="Youtube" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsFollowUs;
