import React from 'react';

function CuttingEdgeTechnology() {
    const cards = [
        {
            title: 'Languages',
            points: ['Java', 'Python', 'JavaScript', 'React', 'C/C++', 'Node.js', 'PHP', 'Swift', 'TypeScript'],
        },
        {
            title: 'Frameworks',
            points: ['.Net', 'Angular', 'Next Js', 'Vue.js', 'Django', 'Flask', 'Laravel', 'Spring Boot',],
        },
        {
            title: 'Database management',
            points: ['NoSQL', 'MySQL', 'Oracle SQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
        },
        {
            title: 'Mobile',
            points: ['IOS', 'Android', 'HTML5', 'React', 'javaScript'],
        },
        {
            title: 'Web',
            points: ['Vue', 'Sass', 'Coffee', 'Angular', 'WebGl'],
        },
        {
            title: 'Cloud',
            points: ['Google Cloud', 'Oracle Cloud','IBM Cloud', 'Microsoft Azure',  'Amazon Web Service (AWS)'],
        },
    ];

    return (
        <div className="px-6 py-10 bg-gray-200">
            <div className="container mx-auto max-w-[1140px]">
                <h4 className="text-center lg:text-4xl text-xl font-bold mb-6 text-gray-800">
                Revolutionizing Learning with Cutting-Edge Technology
                </h4>
                <p className="text-center mb-8">
                Our eLearning platforms combine innovation, scalability, and user engagement to deliver seamless, robust, and captivating learning experiences.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 border border-[#F59E0D]"
                        >
                            <h4 className="text-xl  font-bold text-gray-800 mb-4">{card.title}</h4>
                            <ul className="flex flex-wrap gap-2 items-center">
                                {card.points.map((point, idx) => (
                                    <li
                                        key={idx}
                                        className="list-none border-2 border-[#F59E0D]  text-center rounded-full p-2 text-black"
                                        style={{ flex: '1 1 calc(33.33% - 8px)' }}
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CuttingEdgeTechnology;
