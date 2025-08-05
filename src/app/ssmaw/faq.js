'use client'
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
 
  {
    question: "Will this be in Hindi?",
    answer: "Yes, this will be in Hindi and with the use of English in appropriate places.    ",
  },
  {
    question: "How do I join the program?",
    answer: "Enroll to the programme and then join our WhatsApp community through the webpage displayed after making payment, and we shall send you the joining link there.    ",
  },
  {
    question: "How will I get the link to attend the program?",
    answer: "We will send you the joining link on WhatsApp Group and E-mail.     ",
  },
  {
    question: "Will i get the recording of the program? ",
    answer: "Sorry, we do not share recordings of the program, but in case you miss the webinar, we can accommodate you in the next session.    ",
  },
  {
    question: "What do i need to keep handy during the webinar?",
    answer: "A notebook, pen and undivided attention.     ",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first FAQ by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black">
    <div className="bg-black md:w-[1200px] mx-auto px-6 pt-[100px] text-white min-h-screen md:flex   py-6">
      {/* Left Section - Small FAQ Text with Line */}
      <div className="flex flex-col mt-3 mb-3 items-start w-1/3 pr-6">
        <div className="flex items-center top-0">
          <div className="text-xs font-semibold tracking-widest">FAQ</div>
          <div className="md:w-[330px] w-[250px] h-[2px] bg-gray-500 ml-3"></div>
        </div>
      </div>

      {/* Right Section - Big Title and FAQ List */}
      <div className="md:w-3/4 md:max-w-3xl">
        {/* Title */}
        <h1 className="text-[28px] md:text-6xl font-bold mb-8">
          Frequently asked <br /> questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="flex justify-between items-center w-full p-5 bg-gray-900 hover:bg-gray-800 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 text-gray-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
