import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Aarav Singh", review: "This software has transformed our operations, making everything seamless and efficient.", title: "Founder, TechWorld" },
  { id: 2, name: "Priya Sharma", review: "Excellent customer service and robust functionality. We are very satisfied with the experience.", title: "Manager, InnovateIndia" },
  { id: 3, name: "Rajesh Mehta", review: "I am impressed with the ease of use and the team's support. Truly a game changer.", title: "CTO, BharatSoft" },
  { id: 4, name: "Sneha Patel", review: "The best decision we made this year was to implement this tool. Outstanding performance.", title: "CEO, GrowthHub" },
  { id: 5, name: "Arjun Verma", review: "A wonderful experience working with such an innovative product. Highly recommended!", title: "Lead Developer, CodeCraft" },
  { id: 6, name: "Ananya Rao", review: "Incredible! It has streamlined our processes and improved productivity like never before.", title: "Product Manager, SmartTech" },
  { id: 7, name: "Manish Gupta", review: "The product has exceeded our expectations. Great support and quality!", title: "Head of Marketing, NewWave" },
  { id: 8, name: "Kavya Nair", review: "Fantastic solution! Our team loves it, and our clients have noticed the difference.", title: "Business Analyst, GrowthSolutions" },
  { id: 9, name: "Rohan Kapoor", review: "A top-notch tool that has been a perfect fit for our needs. Great job by the team.", title: "Senior Engineer, WebX" },
  { id: 10, name: "Neha Joshi", review: "Absolutely amazing! The product is reliable, and the team is very responsive.", title: "Operations Head, PrimeTools" },
  { id: 11, name: "Vikram Bhatt", review: "We love how intuitive the platform is. It has been a delight to use.", title: "Design Lead, UXStudio" },
  { id: 12, name: "Pooja Iyer", review: "A must-have tool for businesses looking to scale efficiently. Brilliant work!", title: "COO, ScaleUp" },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const slidesToShow = window.innerWidth >= 1024 ? 3 : 1;

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(current, current + slidesToShow).length === slidesToShow
    ? testimonials.slice(current, current + slidesToShow)
    : [...testimonials.slice(current), ...testimonials.slice(0, slidesToShow - testimonials.slice(current).length)];

  return (
    <div className="relative w-full bg-gray-200 lg:py-24 px-6 py-8 font-poppins">
      <div className="max-w-[1140px] mx-auto">
        <h4 className="text-center mb-4 text-4xl font-extrabold text-gray-800 tracking-tight">Client Testimonials</h4>
        <div className="px-8 py-16 rounded-lg h-[400px] shadow-md flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-8 ${
              slidesToShow === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"
            }`}
          >
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-lg italic text-gray-600 mb-4">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-800 text-xl mb-1">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8">
          <div
            className="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            onClick={prevTestimonial}
          >
            <FaArrowLeft size={24} className="text-gray-800" />
          </div>
          <div
            className="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            onClick={nextTestimonial}
          >
            <FaArrowRight size={24} className="text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
