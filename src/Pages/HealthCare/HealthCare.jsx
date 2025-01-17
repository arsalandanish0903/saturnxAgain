import React, { useEffect } from 'react';
import Button from '../../components/Buttons/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HealthCare() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            {/* Hero Section */}
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/healtcarebanner.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white  sm:text-left">
                        <h2 className="text-xl sm:text-4xl mb-4">Your Trusted Digital Partner for the Healthcare Industry</h2>
                        <p className="text-md sm:text-lg mb-4">
                            In today’s rapidly evolving digital landscape, healthcare industries are transforming to meet the growing demands of patients and providers. At SaturnX Digital Solutions, we are proud to be a leading digital provider dedicated to empowering healthcare industries with cutting-edge technology and innovative solutions.
                        </p>
                        <Button
                            mainButton="Talk To Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
                        <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">Why Choose SaturnX Digital Solutions for Healthcare?</h4>
                        <p className='max-w-3xl'>Healthcare industries face unique challenges that require specialized expertise. Our team at SaturnX Digital Solutions understands these challenges and delivers tailored digital solutions to help healthcare organizations achieve their goals. Here’s why we stand out:</p>
                    </div>

                    {/* Service Section */}
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side Content */}
                            <div data-aos="fade-top">
                                <ul className='m-0 p-0 flex flex-col gap-4'>
                                    <li>
                                        <strong className='mr-2'>Industry Expertise: </strong> <span> With 10+ years of experience, we specialize in providing digital services specifically designed for healthcare industries.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>Patient-Centric Approach: </strong> <span>: Our solutions focus on enhancing patient experiences, improving accessibility, and ensuring seamless communication between providers and patients.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>Innovative Technology: </strong> <span> We leverage the latest in AI, cloud computing, and analytics to drive innovation and efficiency.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Side Image */}
                            <div data-aos="fade-down">
                                <img
                                    src="/healthcareAbout.jpg"
                                    alt="Healthcare Software"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
                        <h4 className="text-xl lg:text-4xl mb-4 font-bold max-w-4xl">Our Services for Healthcare Industries</h4>
                    </div>
                    <div className="bg-gray-50 py-12 px-6 lg:px-16 font-poppins">
                        <div className="container mx-auto max-w-[1140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "/webDevelopment.svg",
                                    title: "Healthcare Website Development",
                                    description:
                                        "A professional online presence is crucial for any healthcare provider. We create SEO-friendly, responsive, and user-friendly websites that make it easy for patients to find and engage with your services.",
                                },
                                {
                                    icon: "/diversecontent.svg",
                                    title: "Telemedicine Solutions",
                                    description:
                                        "Bring healthcare to your patients’ fingertips with secure telemedicine platforms that facilitate virtual consultations and appointments.",
                                },
                                {
                                    icon: "/mobileApp.svg",
                                    title: "Healthcare App Development",
                                    description:
                                        "From appointment scheduling to medication reminders, our custom healthcare apps help improve patient engagement and streamline processes.",
                                },
                                {
                                    icon: "/socialmediafeature.svg",
                                    title: "Digital Marketing for Healthcare",
                                    description:
                                        "Reach your audience effectively with targeted digital marketing campaigns, including SEO, PPC, and social media strategies tailored for healthcare industries.",
                                },
                                {
                                    icon: "/flexibleLearning.svg",
                                    title: "Data Analytics and Insights",
                                    description:
                                        "Harness the power of data to make informed decisions. Our analytics solutions provide actionable insights to optimize patient care and operational efficiency.",
                                },
                                {
                                    icon: "/immersive.svg",
                                    title: "HIPAA-Compliant Solutions",
                                    description:
                                        "Security and compliance are our top priorities. We develop and implement solutions that meet strict healthcare regulations, ensuring your patients’ data is protected.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-start space-y-4"
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-gray-100 py-16 px-4 lg:px-0 relative w-full font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
                        <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">Benefits of Partnering with SaturnX Digital Solutions</h4>
                    </div>
                    {/* Service Section */}
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Right Side Image */}
                            <div data-aos="fade-top">
                                <img
                                    src="/transformingPatinets.jpg"
                                    alt="Transforming Patient Care"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            {/* Left Side Content */}
                            <div data-aos="fade-down">
                                <ul className='m-0 p-0 flex flex-col gap-4'>
                                    <li>
                                        <strong className='mr-2'>Improved Operational Efficiency: </strong> <span> Streamline workflows and reduce administrative burdens with our advanced solutions.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>Increased Online Visibility: </strong> <span>  Boost your presence with our SEO strategies, ensuring your services are easily discoverable by patients.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-2'>Scalable Solutions: </strong> <span> As your healthcare business grows, our solutions grow with you.</span>
                                    </li>
                                    <li>
                                        <strong className='mr-1'>Let’s Build the Future of Healthcare Together: </strong>

                                        At SaturnX Digital Solutions, we are committed to being the ultimate digital provider for healthcare industries. Whether you’re a small clinic or a large hospital network, our tailored solutions will help you stay ahead in the digital age.

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 py-16 px-4 lg:px-0 relative w-full font-poppins'>
                <div className='container mx-auto max-w-[1140px] '>
                    {/* Additional Information Section */}
                    <h4 className="text-3xl font-bold text-center mb-8" data-aos="zoom-in">
                        Why Choose Us?
                    </h4>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center bg-white p-8 shadow-lg rounded-md" data-aos="fade-up">
                            <h3 className="text-xl font-bold mb-4">Patient-Centric Design</h3>
                            <p>
                                Our solutions focus on enhancing patient care and engagement, making healthcare services more accessible and efficient.
                            </p>
                        </div>
                        <div className="text-center bg-white p-8 shadow-lg rounded-md" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-bold mb-4">Secure and Compliant</h3>
                            <p>
                                We ensure that all software complies with healthcare regulations like HIPAA and GDPR, offering robust security for sensitive data.
                            </p>
                        </div>
                        <div className="text-center bg-white p-8 shadow-lg rounded-md" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-xl font-bold mb-4">Innovative Technology</h3>
                            <p>
                                Leveraging AI, machine learning, and cloud technology, we deliver cutting-edge solutions that transform healthcare operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthCare;