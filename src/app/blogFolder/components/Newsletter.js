import React, { useState } from 'react';
import Style from '../style/home.module.css'
import BaseURL from './Baseurl';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [success, setsuccess] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BaseURL}api/subscribes/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setsuccess("Subscribed successfully")
                setTimeout(() => {
                    setsuccess("")
                }, 2000)
            } else {
                // Handle error, maybe show an error message
                console.error('Subscription failed');
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <>
            <section >
                <div className="container">
                    <div className={Style.newsletter}>
                        <div className="row justify-content-center">
                            <div className="col-lg-7 text-center text-lg-start">
                                <div style={{ fontSize: '24px', color: '#000000', fontWeight: 800 }}>
                                    Wanna be Updated with Good IPOs
                                </div>

                                <p className='mb-0'>Sign Up For Newsletter</p>
                            </div>
                            <div className="col-lg-5 col-sm-9 mt-4 mt-lg-0">
                                <form onSubmit={handleFormSubmit}>
                                    <div className={`form-group d-flex align-items-center justify-content-between bg-white ${Style.contact_form}`}>
                                        <div className='d-flex align-items-center'>
                                            <img src="/mail.svg" alt="" />
                                            <input type="email" className='w-100 ms-2 p-0 border-0' placeholder='Enter Email' value={email}
                                                onChange={handleEmailChange} />
                                        </div>
                                        <button type='submit' className='btn bg-transparent' ><img src="/rtarrow.svg" alt="" /></button>
                                    </div>
                                    {success ? <p className='mb-0 text-success'>{success}</p> : ""}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Newsletter;