import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa'; // Example icon for the accordion

function EdutechMainFeature() {
    const [activeIndex, setActiveIndex] = useState(null);

    const features = [
        {
            title: 'Social Media Features and Integration',
            description: "Social media isn't just for cat videos and memes – it's where connections grow. Our eLearning platforms embrace that, weaving social features right into the fabric of learning. This way, your learners can chat, share insights, and build a knowledge network as easily as they post an update.",
            icon: '/socialmediafeature.svg',
        },
        {
            title: 'Data-Driven Insights',
            description: "Imagine X-ray vision – but for tracking educational progress. That's what our analytics do. They dish up the details on how each learner is doing and engage with content so you can tweak and refine till every pixel of your platform promotes peak learning success.",
            icon: '/datadriven.svg',
        },
        {
            title: 'Flexible Learning Delivery',
            description: 'Every mind marches to its own beat – that’s why our eLearning platforms hit all the right notes across various teaching tunes. Choose from laid-back self-study paths or pack content with interactive tasks and live classes led by experts; we make sure there’s a rhythm that resonates with everyone.',
            icon: '/flexibleLearning.svg',
        },
        {
            title: 'Immersive and Interactive Features',
            description: 'At SaturnX Digital, we turn learning from a “must-do” into a “want-to-explore”. Our eLearning platforms invite learners to jump in with quizzes that spark curiosity, simulations that mimic real-world scenarios, and gamification touches that make climbing the knowledge ladder an exhilarating game.',
            icon: '/immersive.svg',
        },
        {
            title: 'Integration with Business Systems',
            description: "Think of our eLearning software development team as your business's new best friend. They roll up their sleeves to ensure your fresh eLearning platform fits hand-in-glove with the tools you already trust – your ERP, CMS, and APIs won't even notice they've got a dynamic new partner.",
            icon: '/integration.svg',
        },
        {
            title: 'AI and Personalization',
            description: 'Imagine an education where the one-size-fits-all approach is tossed out the window. Thanks to SaturnX Digital AI smarts, each learner on your platform gets a learning path stitched just for them – no more robotic group pacing.',
            icon: '/aiandpersonalize.svg',
        },
        {
            title: 'Diverse Content Types',
            description: "We believe learning should have sense and style. That’s why our platforms come dressed in all sorts of content costumes – from crisp text and vibrant videos to interactive images and live streams. It's not just about teaching but bringing subjects alive.",
            icon: '/diversecontent.svg',
        },
        {
            title: 'Compliance with Standards and Laws',
            description: "You've got innovation at full throttle paired with peace of mind that you're ticking all those legal boxes, too. From local policies to international laws – our eLearning solutions make sure they cross every t, and dot every i.",
            icon: '/compilance.svg',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="px-6 bg-gray-200 lg:px-0 py-16 w-full font-poppins'>">
            <div className='container mx-auto max-w-[1140px]'>
                <h4 className="text-center text-2xl lg:text-4xl font-bold text-gray-800 mb-8">
                    Main Features of Our eLearning <span className='block'>Software Development</span>
                </h4>
                <div className='mt-20'>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white  rounded-lg mb-4 border border-gray-200 overflow-hidden"
                    >
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex items-center gap-3">
                                <img src={feature.icon} alt="" />
                                <h4 className="text-lg font-medium text-gray-800">{feature.title}</h4>
                            </div>
                            <div>
                                {activeIndex === index ? (
                                    <FiChevronUp className="text-gray-500" />
                                ) : (
                                    <FiChevronDown className="text-gray-500" />
                                )}
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                                {feature.description}
                            </div>
                        )}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default EdutechMainFeature;
