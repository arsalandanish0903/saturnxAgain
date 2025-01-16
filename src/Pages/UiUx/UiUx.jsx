import React from 'react';
import Button from '../../components/Buttons/Button';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

function UiUx() {
    return (
        <>
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/uiixbanner.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl text-white text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">UI/UX Design Services at SaturnX Digital Solution Company</h2>
                        <p className="text-md sm:text-lg mb-4">
                            At <strong>SaturnX Digital Solution Company</strong>, we specialize in crafting seamless, engaging user experiences for businesses across various industries. Our expert UI/UX design services focus on delivering both creativity and functionality to enhance your digital products. From wireframes to high-fidelity prototypes, we ensure your digital platforms captivate users and drive engagement.
                        </p>
                        <Button
                            mainButton="Contact Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>

            {/* SEO-Friendly Section */}
            <div className="py-16 px-6 bg-gray-200 lg:px-0 w-full font-poppins relative">
                <div className="container mx-auto max-w-[1140px]">
                    <h4 className="text-3xl font-bold text-center mb-2">
                        Why Choose SaturnX Digital Solution Company for Your UI/UX Design Needs?
                    </h4>
                    <p className="text-center mb-12">
                        SaturnX Digital Solution Company is a trusted digital solutions provider, specializing in UI/UX design services that empower businesses to create meaningful user experiences. Here’s why we are the ideal partner for your design needs:
                    </p>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">1. Tailored UI/UX Design Services</h4>
                            <p>
                                We offer custom UI/UX design services that are tailored to meet the unique needs of your business. Whether you're building a web application or a mobile app, we ensure the user experience is intuitive, engaging, and aligned with your brand identity.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4">2. User-Centered Design Approach</h4>
                            <p>
                                Our design process revolves around your target audience. We conduct thorough user research and testing to create designs that solve real problems, ensuring that your digital platforms resonate with users and provide lasting value.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4">3. Cutting-Edge Design Tools</h4>
                            <p>
                                We leverage the latest design tools and technologies to create visually stunning and highly functional interfaces. Our team is proficient in using Figma, Sketch, Adobe XD, and other industry-leading design platforms to bring your ideas to life.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4">4. Comprehensive Design Process</h4>
                            <p>
                                From initial wireframes to final UI mockups and prototypes, our comprehensive design process covers every aspect of UI/UX. We ensure that every detail of your design aligns with the overall user experience and your business goals.
                            </p>
                        </div>
                    </div>

                    {/* Services We Offer */}

                </div>
            </div>
            <div className="py-16 px-6 lg:px-0 w-full font-poppins relative">
                <div className="container mx-auto max-w-[1140px]">

                    <h4 className="text-3xl font-bold text-center mb-2">UI/UX Design Services We Offer</h4>
                    <p className="text-center mb-12">Explore our range of UI/UX design services crafted to enhance your digital products.</p>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                        <div className="p-6  rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Custom UI/UX Design</h3>
                            <p>
                                Our custom UI/UX design services create personalized experiences that cater to your brand’s needs and user requirements, resulting in visually engaging and user-friendly designs.
                            </p>
                        </div>
                        <div className="p-6  rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Mobile App Design</h3>
                            <p>
                                We specialize in designing intuitive and engaging mobile app experiences, ensuring smooth navigation, responsiveness, and accessibility on all devices.
                            </p>
                        </div>
                        <div className="p-6  rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Website Design & Development</h3>
                            <p>
                                Our website design services focus on delivering a seamless user experience across all platforms. We ensure your website is visually appealing, fast-loading, and easy to navigate.
                            </p>
                        </div>
                        <div className="p-6  rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">UI/UX Research & Strategy</h3>
                            <p>
                                We conduct in-depth research to understand your users and their needs. Our strategy-driven approach helps in building products that solve problems and provide optimal user satisfaction.
                            </p>
                        </div>
                        <div className="p-6  rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Usability Testing</h3>
                            <p>
                                We perform usability testing to evaluate the effectiveness of your designs. By gathering real user feedback, we refine the design to ensure it meets user expectations and enhances engagement.
                            </p>
                        </div>
                        <div className="p-6  rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Prototyping & Wireframing</h3>
                            <p>
                                We create interactive prototypes and wireframes to visualize your product’s layout and functionality before development, ensuring that your design concept is on track.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <WhyChooseUs />
        </>
    );
}

export default UiUx;
