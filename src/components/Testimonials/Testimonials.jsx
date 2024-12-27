import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        review:
            "This product is amazing! It has changed the way I work. Highly recommend it.",
        image: "/colleagues-working-project-discussing-details.jpg", // Replace with real image URL
        title: "CEO, TechCorp",
    },
    {
        id: 2,
        name: "Jane Smith",
        review:
            "An absolute game changer! Excellent service and quality. The team is amazing.",
        image: "/collabrative1.jpg", // Replace with real image URL
        title: "Product Manager, InnovateX",
    },
    {
        id: 3,
        name: "Michael Johnson",
        review:
            "I have been using this for months now. It's fantastic, and the support team is amazing!",
        image: "/banner2.jpg", // Replace with real image URL
        title: "Marketing Head, GrowthLabs",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative w-full bg-gray-200 lg:py-16 px-6 font-poppins">
            <div className="max-w-[1140px] container mx-auto">
                <h4 className="text-center py-4 text-4xl font-bold text-gray-800">Reviwes</h4>
                <div className="px-8 py-16 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex items-center justify-center space-x-6">
                        <div className="w-1/3">
                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].name}
                                className="rounded-md object-cover w-full h-40"
                            />
                        </div>
                        <div className="w-2/3">
                            <motion.div
                                key={testimonials[current].id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center md:text-left"
                            >
                                <p className="text-lg italic text-gray-600 mb-4">
                                    "{testimonials[current].review}"
                                </p>
                                <p className="font-semibold text-gray-800 text-xl">
                                    {testimonials[current].name}
                                </p>
                                <p className="text-sm text-gray-500">{testimonials[current].title}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {/* Arrows at the bottom side, side by side */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-6">
                    <div
                        className="cursor-pointer"
                        onClick={prevTestimonial}
                    >
                        <FaArrowLeft size={24} className="text-gray-800" />
                    </div>
                    <div
                        className="cursor-pointer"
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
