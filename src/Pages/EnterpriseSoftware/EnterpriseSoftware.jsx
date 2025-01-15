import React from 'react'
import Button from '../../components/Buttons/Button'
import WhyChooseUs from '../../Pages/WhyChooseUs/WhyChooseUs'
import ContactUs from '../../Pages/ContactUs/ContactUs'

function EnterpriseSoftware() {
    return (
        <>
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
                    <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">Enterprise Software Development</h2>
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
            <div className='bg-gray-200 border-t-2 border-b-2 border-gray-300 w-full py-16 px-6 lg:px-0 relative font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    {/* Service Section */}
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side Content */}
                            <div data-aos="fade-right">
                                <h4 className="text-3xl font-bold mb-6">Custom Enterprise Resource Planning (ERP) Solutions</h4>
                                <p className="text-lg mb-4">
                                    Unlock the full potential of your business with SaturnX's custom ERP solutions. Our tailored systems integrate key business processes such as finance, supply chain, inventory management, and more, into one seamless platform.
                                </p>
                                <p className="text-lg">
                                    Designed for scalability, our ERP solutions streamline operations, boost productivity, and improve decision-making, empowering enterprises to grow faster and more efficiently.
                                </p>
                            </div>

                            {/* Right Side Image */}
                            <div data-aos="fade-left">
                                <img
                                    src="/customeERPSoftware.jpg"
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
                    {/* Service Section */}
                    <div className="py-16 px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side Content */}
                            <div data-aos="fade-right">
                                <h4 className="text-3xl font-bold mb-6">Customer Relationship Management (CRM) Platforms</h4>
                                <p className="text-lg mb-4">
                                    Transform your customer interactions with SaturnX's CRM platforms. Our powerful CRM solutions centralize customer data, automate workflows, and provide actionable insights, helping enterprises improve sales, customer retention, and communication.
                                </p>
                                <p className="text-lg">
                                    Enhance lead management, track customer journeys, and deliver personalized experiences that drive business growth and strengthen relationships.
                                </p>
                            </div>

                            {/* Right Side Image */}
                            <div data-aos="fade-left">
                                <img
                                    src="/customeCRMSoftware.jpg"
                                    alt="Healthcare Software"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
            <ContactUs />
        </>
    )
}

export default EnterpriseSoftware