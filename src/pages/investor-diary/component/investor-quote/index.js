import React from 'react';

const InvestorQuote = () => {
    return (
        <>
            <section className="quote_section px-20 investor-sf-font-family">
                <div className="bg-black-500 rounded-lg text-center text-white">
                    <div className="mb-10 border-t w-100 mx-auto" style={{ borderColor: '#1F1F1F' }}></div>
                    <div className="quote_container flex justify-center  space-x-40">
                        <span className="forword_quote text-gray-500">
                            <img
                                src="/images/forword_quote.png"
                                alt="Quote"
                                style={{ width: "30px", height: "auto" }}
                            />
                        </span>
                        <p className="w-full" style={{ color: '#8A8A8A', fontSize: '22px', lineHeight: '1.5', maxWidth: '740px' }}>
                            The most-wanted product in investment that you didn’t know you need
                        </p>
                        <span className="backword_quote text-gray-500">
                            <img
                                src="/images/backword_quote.png"
                                alt="Quote"
                                style={{ width: "30px", height: "auto" }}
                            />
                        </span>
                    </div>
                    <div className="mt-10 border-t w-100 mx-auto" style={{ borderColor: '#1F1F1F' }}></div>
                </div>
            </section>
        </>
    )
}

export default InvestorQuote;