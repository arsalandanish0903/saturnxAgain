import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function LogisticsAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What software solutions does Saturnx offer?',
      answer: 'Saturnx provides a wide range of software solutions including web and mobile application development, custom software development, and cloud-based systems tailored to your business needs.',
    },
    {
      question: 'How can I integrate Saturnx software with my existing systems?',
      answer: 'We offer seamless integration services, helping your systems connect with our software, ensuring smooth data flow and enhanced functionality across your entire infrastructure.',
    },
    {
      question: 'What is the expected timeline for delivering a custom software project?',
      answer: 'The timeline varies depending on the project scope, but on average, we complete custom software projects within 8 to 12 weeks, ensuring quality and reliability in each phase.',
    },
    {
      question: 'Does Saturnx provide ongoing support after deployment?',
      answer: 'Yes, we offer ongoing support and maintenance services to ensure your software runs smoothly post-deployment. Our team is available for troubleshooting, updates, and improvements.',
    },
    {
      question: 'Can Saturnx help with system migration to cloud platforms?',
      answer: 'Absolutely! We specialize in helping businesses migrate their existing systems to cloud platforms like AWS, Azure, and Google Cloud, optimizing performance and scalability.',
    },
    {
      question: 'How does Saturnx ensure the security of the software?',
      answer: 'We follow industry best practices and security protocols, including encryption, secure APIs, and regular vulnerability assessments to ensure your software is protected against cyber threats.',
    },
    {
      question: 'What technologies does Saturnx use to build software?',
      answer: 'At Saturnx, we use modern technologies such as React, Node.js, Python, Java, and cloud technologies to build scalable, responsive, and secure software solutions.',
    },
    {
      question: 'How can I get in touch with Saturnx for a consultation?',
      answer: 'You can contact us through our website or email us directly at support@saturnx.com. We will schedule a consultation to understand your needs and offer the best solutions.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className='bg-white relative w-full'>
        <div className="container mx-auto max-w-[1140px] px-6 lg:px-0 py-16">
          <h4 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Frequently Asked Questions - Saturnx Software Solutions
          </h4>
          {faqData.map((item, index) => (
            <div key={index} className="accordion-item mb-4">
              <button
                className="accordion-button border-b-2 border-gray-200 w-full text-left text-gray-800 p-4 text-lg flex justify-between items-center hover:text-[#164DA5] focus:outline-none transition duration-300 ease-in-out"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-xl" />
                ) : (
                  <FaChevronDown className="text-xl" />
                )}
              </button>
              {activeIndex === index && (
                <div className="accordion-answer mt-3 p-4 text-gray-700 rounded-lg transition-all duration-300 ease-in-out">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LogisticsAccordion;
