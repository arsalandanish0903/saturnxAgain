import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const jobListings = [
  {
    title: 'Frontend Developer',
    description:
      'Join our team to create visually stunning, responsive, and dynamic web applications. Collaborate with designers to implement pixel-perfect designs using React JS and Tailwind CSS. Debug and optimize frontend components for performance.',
    whatsappNumber: '+918788447944',
  },
  {
    title: 'Backend Developer',
    description:
      'Design and maintain scalable server-side applications and APIs. Work with databases to ensure data integrity and performance. Troubleshoot and debug backend systems to deliver a seamless user experience.',
    whatsappNumber: '+918788447944',
  },
  {
    title: 'Full Stack Developer',
    description:
      'Develop both frontend and backend components of scalable web applications. Work with modern frameworks like React, Node.js, and databases to create robust solutions.',
    whatsappNumber: '+918788447944',
  },
  {
    title: 'PHP Developer',
    description:
      'Create and maintain dynamic websites and web applications using PHP and Laravel. Work on database-driven projects ensuring high performance and scalability.',
    whatsappNumber: '+918788447944',
  },
  {
    title: 'MERN Stack Developer',
    description:
      'Develop modern applications using MongoDB, Express, React, and Node.js. Collaborate with a team to design and deploy scalable solutions.',
    whatsappNumber: '+918788447944',
  },
  {
    title: 'Digital Marketing Specialist',
    description:
      'Plan and execute digital marketing campaigns to drive engagement. Optimize website and content for SEO and SEM strategies. Analyze data to measure the success of campaigns and suggest improvements.',
    whatsappNumber: '+918788447944',
  },
  {
    title: 'AI/ML Engineer',
    description:
      'Work on exciting AI and machine learning projects, building intelligent solutions. Design and deploy machine learning models for business use cases.',
    whatsappNumber: '+918788447944',
  },
  {
    title: 'UI/UX Designer',
    description:
      'Design user-friendly and visually stunning interfaces that enhance user experiences. Work with developers to ensure seamless implementation of your designs.',
    whatsappNumber: '+918788447944',
  },
  {
    title: 'Python Developer',
    description:
      'Build and deploy Python applications for data analysis, web development, or automation. Work on scalable and efficient solutions.',
    whatsappNumber: '+918788447944',
  },
];

function Careers() {
  const sendWhatsAppMessage = (number, jobTitle) => {
    const message = `Hello, I'm interested in applying for the position of "${jobTitle}" at Saturnx. Please provide the details for the next steps.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Careers at Saturnx
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Welcome to Saturnx! We are headquartered in Mangalwari Bazar, Sadar, Nagpur. 
          We offer exciting opportunities for talented professionals to join our dynamic team. 
          Whether you specialize in development, design, or digital marketing, we have a role for you. 
          At Saturnx, we believe in fostering growth, innovation, and collaboration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {job.title}
                </h2>
                <p className="text-gray-600 mt-2">{job.description}</p>
                <p className="text-gray-500 mt-2">
                  <strong>Location:</strong> On-site (Mangalwari Bazar, Sadar, Nagpur)
                </p>
              </div>
              <button
                onClick={() => sendWhatsAppMessage(job.whatsappNumber, job.title)}
                className="mt-4 flex items-center justify-center bg-[#0B5FC4] hover:bg-[#010522] text-white px-6 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <FaWhatsapp className="mr-2 w-5 h-5" />
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Careers;
