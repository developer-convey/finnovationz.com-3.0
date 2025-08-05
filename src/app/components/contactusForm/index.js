import React, { useState } from "react";
import "./contactusform.css";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        const payload = {
            username: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            mobileNo: formData.mobileNo,
            comments: formData.message,
            platform: "Contact US",
        };

        try {
            const response = await fetch("https://webinarandfinclub.finnovationz.com/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const text = await response.text();
            if (response.ok) {
                const data = JSON.parse(text);
            } else {
                console.error("Error Response:", text);
            }
        } catch (error) {
            console.error("Submission Error:", error);
        }

    };

    return (
        <div className="contact-us-container">
            <div className="Contact-us-Form">
                <div className="Contact-us-Form-container">
                    <div className="content">
                        <div className="map">
                            {/* Replace the map.svg image with the Google Maps iframe */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1686.8016788241744!2d76.25915306852286!3d20.873942044471878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDUyJzI2LjIiTiA3NsKwMTUnMzYuNyJF!5e1!3m2!1sen!2sin!4v1735130392435!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                        <div className="form">
                            <div className="contact-us-form-title-div">
                                <h3 className="contact-us-form-title">Need Something more from us?</h3>
                                <div className="contact-us-form-description">
                                    Fill this form below, and we will get back to you at the speed of light!
                                </div>
                            </div>
                            <div className="contact-us-form-fields-div">
                                <div className="contact-us-form-name">
                                    <div className="contact-us-form-filed">
                                        <div className="contact-us-form-label">First Name</div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Ex: Alex"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="contact-us-form-filed">
                                        <div className="contact-us-form-label">Last Name</div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Ex: Worker"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="contact-us-form-filed">
                                    <div className="contact-us-form-label">Phone</div>
                                    <input
                                        type="text"
                                        name="mobileNo"
                                        placeholder="Ex: +91 01234 56789"
                                        value={formData.mobileNo}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="contact-us-form-filed">
                                    <div className="contact-us-form-label">Email Address</div>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Ex: yourmail@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="contact-us-form-filed-message">
                                    <div className="contact-us-form-label">Message</div>
                                    <textarea
                                        name="message"
                                        placeholder="Write your message or question here"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div
                                    className="contact-us-form-submit"
                                    onClick={handleSubmit}
                                    style={{ cursor: "pointer" }}
                                >
                                    Submit <span><img src="/send.svg" alt="send" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;
