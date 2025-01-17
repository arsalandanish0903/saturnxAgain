import React from 'react'
import Button from '../../components/Buttons/Button'
import WhyChooseUs from '../../Pages/WhyChooseUs/WhyChooseUs'
import ContactUs from '../../Pages/ContactUs/ContactUs'

function EnterpriseSoftware() {
    return (
        <>
            {/* Hero Section */}
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/enterprisesoftware.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white  text-left sm:text-left">
                        <h2 className="lg:text-4xl text-xl mb-4">Enterprise Software Development</h2>
                        <p className="text-md sm:text-lg mb-4">
                            SaturnX specializes in enterprise software development, delivering tailored solutions to optimize business operations and drive growth. From ERP systems to CRM platforms, our scalable and secure software enhances productivity, streamlines workflows, and adapts to your evolving business needs. Partner with us to empower your enterprise with cutting-edge technology and achieve long-term success.
                        </p>
                        <Button
                            mainButton="Contact Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>

            {/* ERP Solutions Section */}
            <div className='bg-gray-200 border-t-2 border-b-2 border-gray-300 w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div data-aos="fade-top">
                                <h4 className="lg:text-4xl text-xl font-bold mb-6">Custom Enterprise Resource Planning (ERP) Solutions</h4>
                                <p className="text-lg mb-4">
                                    Unlock the full potential of your business with SaturnX's custom ERP solutions. Our tailored systems integrate key business processes such as finance, supply chain, inventory management, and more, into one seamless platform.
                                </p>
                                <p className="text-lg">
                                    Designed for scalability, our ERP solutions streamline operations, boost productivity, and improve decision-making, empowering enterprises to grow faster and more efficiently.
                                </p>
                            </div>

                            <div data-aos="fade-top">
                                <img
                                    src="/customeERPSoftware.jpg"
                                    alt="Custom ERP Software"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CRM Solutions Section */}
            <div className='bg-white w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div data-aos="fade-down">
                                <h4 className="lg:text-4xl text-xl font-bold mb-6">Customer Relationship Management (CRM) Platforms</h4>
                                <p className="text-lg mb-4">
                                    Transform your customer interactions with SaturnX's CRM platforms. Our powerful CRM solutions centralize customer data, automate workflows, and provide actionable insights, helping enterprises improve sales, customer retention, and communication.
                                </p>
                                <p className="text-lg">
                                    Enhance lead management, track customer journeys, and deliver personalized experiences that drive business growth and strengthen relationships.
                                </p>
                            </div>

                            <div data-aos="fade-down">
                                <img
                                    src="/customeCRMSoftware.jpg"
                                    alt="Custom CRM Software"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Solutions Section */}
            <div className='bg-gray-100 w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div data-aos="fade-top">
                                <h4 className="lg:text-4xl text-xl font-bold mb-6">Cloud-based Solutions for Enhanced Flexibility</h4>
                                <p className="text-lg mb-4">
                                    Embrace the future of business with our cloud-based solutions. SaturnX's cloud services help businesses reduce costs, enhance scalability, and foster collaboration, all while ensuring the highest level of data security.
                                </p>
                                <p className="text-lg">
                                    Our cloud systems ensure seamless data sharing and integration, allowing enterprises to manage their resources and collaborate on a unified platform. Whether you're moving to the cloud or optimizing your current cloud infrastructure, SaturnX is your trusted partner.
                                </p>
                            </div>

                            <div data-aos="fade-top">
                                <img
                                    src="/cloudsolutions.jpg"
                                    alt="Cloud-based Solutions"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Contact Us Section */}
            <ContactUs />
        </>
    )
}

export default EnterpriseSoftware;
