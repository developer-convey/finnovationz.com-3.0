import React, { useState } from 'react'

const InvestorFaq = () => {
    const [openFAQIndex, setOpenFAQIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };

    const faqs = [
        { question: "1. When will the shipping for the Intelligent Investor’s Diary start?", answer: "The shipping will start from Republic Day, i.e. 26th January 2025." },
        { question: "2. How to order The Diary of an Intelligent Investor in bulk?", answer: "The Intelligent Investor’s Diary is an excellent product for corporate gifts. If you wish to place a bulk order, mail us at team@finnovationz.com." },
        { question: "3. Is the price inclusive of GST and shipping?", answer: "Yes, the price is inclusive of GST and shipping all over India." },
        { question: "4. How will we receive our tracking ID?", answer: "We will share the tracking ID with you via WhatsApp and E-mail." },
        { question: "5.  How long does the shipping take?", answer: "We will start shipping your pre-booked orders on 26th January 2025, it will take 7-15 days to reach your doorsteps, depending on your location." },
    ];

    return (
        <>
            <section className="faq_section bg-black text-white px-20 w-full mx-auto">
                <div className="faq_container container flex flex-row justify-between items-center">
                    <h2 className="text-3xl font-bold mb-6 investor-ibm-font-family">Frequently Asked Questions</h2>
                 {/* <button className="px-6 py-2 bg-transparent text-gray-300 rounded-lg border border-gray-600 shadow-md hover:bg-gray-800 hover:text-white transition-all duration-300 investor-sf-font-family">
                       Contact Support
                    </button> */}
                </div>

                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className="flex justify-between items-center cursor-pointer py-2 border-b border-gray-600 investor-ibm-font-family"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg investor-ibm-font-family" style={{
                                    color: "#ffffff",
                                }}>{faq.question}
                                </h3>
                                <span className="text-2xl">{openFAQIndex === index ? "x" : "+"}</span>
                            </div>
                            {openFAQIndex === index && (
                                <p className="mt-2 investor-sf-font-family" style={{ color: "#a7a8a9" }}>{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default InvestorFaq
