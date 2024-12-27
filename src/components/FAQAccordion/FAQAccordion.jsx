import React, { useState } from 'react';
import { FaRocket, FaQuestionCircle, FaDollarSign, FaLifeRing } from 'react-icons/fa';

const faqData = [
  {
    icon: <FaRocket className="text-indigo-600 w-6 h-6 mr-4" />,
    question: 'What services does Saturnx provide?',
    answer:
      'Saturnx specializes in digital marketing, web development, and branding solutions tailored to your business needs. We provide innovative strategies and cutting-edge designs to help your business grow.',
  },
  {
    icon: <FaQuestionCircle className="text-indigo-600 w-6 h-6 mr-4" />,
    question: 'How do I get started with Saturnx?',
    answer:
      'Getting started is easy! Just contact us through our website or send us an email. Our team will guide you through the process and discuss your requirements in detail.',
  },
  {
    icon: <FaDollarSign className="text-indigo-600 w-6 h-6 mr-4" />,
    question: 'What is your pricing structure?',
    answer:
      'Our pricing is flexible and depends on the services you require. We offer competitive rates and customizable packages to ensure the best value for your investment.',
  },
  {
    icon: <FaLifeRing className="text-indigo-600 w-6 h-6 mr-4" />,
    question: 'Do you offer support after the project is completed?',
    answer:
      'Yes, we provide ongoing support and maintenance to ensure your project runs smoothly. Our team is always available to assist you with updates or any technical issues.',
  },
];

function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h4>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="text-gray-800 font-medium text-lg">{item.question}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 text-indigo-600 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQAccordion;
