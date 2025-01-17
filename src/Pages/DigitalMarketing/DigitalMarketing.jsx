import React from 'react'
import Button from '../../components/Buttons/Button'
import ContactUs from '../ContactUs/ContactUs'

function DigitalMarketing() {
    return (
        <>
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/digitalMarketingBanner.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4"> Digital Marketing Services at SaturnX Digital Solution Company</h2>
                        <p className="text-md sm:text-lg mb-4">
                            Welcome to SaturnX Digital Solution, where innovative digital marketing strategies drive growth for your business. Our digital marketing services are designed to increase your brand's visibility, engage your target audience, and drive conversions across the digital landscape. With years of expertise and a data-driven approach, we help you achieve sustainable online success.
                        </p>
                        <Button
                            mainButton="Contact Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <div className='relative py-16 px-6 lg:px-0 w-full font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>

                    {/* Header Section */}
                    <h1 className='text-4xl font-bold text-center mb-12'>Our Digital Marketing Services</h1>

                    {/* SEO Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-12'>
                        <div className='w-full'>
                            <h2 className='text-2xl font-semibold mb-4'>Search Engine Optimization (SEO)</h2>
                            <p className='text-lg'>
                                At SaturnX, we specialize in SEO services to ensure your website ranks higher on search engine results pages (SERPs).
                                We use advanced techniques and strategies, including keyword optimization, on-page and off-page SEO, and technical SEO audits, to improve your website’s organic reach and attract quality traffic.
                            </p>
                        </div>
                        <div className='w-full'>
                            <img src='/seoAbout.jpg' alt='SEO Services' className='w-full h-auto object-cover rounded-lg' />
                        </div>
                    </div>

                    {/* Social Media Marketing Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-12'>
                        <div className='w-full'>
                            <img src='/socialMediaMarketing.jpg' alt='Social Media Marketing' className='w-full h-auto object-cover rounded-lg' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-2xl font-semibold mb-4'>Social Media Marketing (SMM)</h2>
                            <p className='text-lg'>
                                Leverage the power of social platforms with our Social Media Marketing services. We craft customized social media strategies to help you connect with your audience, increase engagement, and build brand awareness.
                                Whether it’s Facebook, Instagram, LinkedIn, or Twitter, we ensure your business thrives on the platforms that matter most.
                            </p>
                        </div>
                    </div>

                    {/* PPC Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-12'>
                        <div className='w-full'>
                            <h2 className='text-2xl font-semibold mb-4'>Pay-Per-Click (PPC) Advertising</h2>
                            <p className='text-lg'>
                                Maximize your ROI with targeted PPC campaigns. Our team at SaturnX creates high-converting ads on Google Ads, Facebook Ads, and other platforms to drive immediate traffic to your site. We optimize campaigns for better performance and reduced cost-per-click, ensuring every penny you spend on advertising generates value.
                            </p>
                        </div>
                        <div className='w-full'>
                            <img src='/payperClick.jpg' alt='PPC Advertising' className='w-full h-auto object-cover rounded-lg' />
                        </div>
                    </div>

                    {/* Content Marketing Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-12'>
                        <div className='w-full'>
                            <img src='/contentMarketing.jpg' alt='Content Marketing' className='w-full h-auto object-cover rounded-lg' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-2xl font-semibold mb-4'>Content Marketing</h2>
                            <p className='text-lg'>
                                Content is king, and we help you rule with high-quality content marketing. From blog posts and articles to infographics and videos, we create engaging and informative content that resonates with your audience and boosts your brand's credibility and trustworthiness online.
                            </p>
                        </div>
                    </div>

                    {/* Email Marketing Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-12'>
                        <div className='w-full'>
                            <h2 className='text-2xl font-semibold mb-4'>Email Marketing</h2>
                            <p className='text-lg'>
                                Stay connected with your audience through personalized email marketing campaigns. We design and execute effective email marketing strategies that nurture leads, convert visitors into customers, and keep your audience informed about your latest offerings.
                            </p>
                        </div>
                        <div className='w-full'>
                            <img src='/emailMarketing.jpg' alt='Email Marketing' className='w-full h-auto object-cover rounded-lg' />
                        </div>
                    </div>

                    {/* Conversion Rate Optimization Section */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-12'>
                        <div className='w-full'>
                            <img src='/conversionRate.jpg' alt='CRO' className='w-full h-auto object-cover rounded-lg' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-2xl font-semibold mb-4'>Conversion Rate Optimization (CRO)</h2>
                            <p className='text-lg'>
                                Our CRO services focus on improving your website's user experience to increase conversions. We analyze visitor behavior, test landing pages, and optimize call-to-actions to ensure your website turns visitors into loyal customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative py-16 px-6 lg:px-0 w-full font-poppins bg-gray-100'>
                <div className='container mx-auto max-w-[1140px]'>
                    <h4 className='text-4xl font-bold text-center mb-10 text-primary'>
                        Why Choose SaturnX Digital Solution?
                    </h4>
                    <ul className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 text-lg'>
                        <li className='flex items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='mr-4'>
                                <h4 className='font-semibold text-xl mb-2'>Customized Digital Marketing Strategies</h4>
                                <p>We tailor our services to meet your business goals, ensuring the best possible results.</p>
                            </div>
                        </li>
                        <li className='flex items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='mr-4'>
                                <h4 className='font-semibold text-xl mb-2'>Experienced Team</h4>
                                <p>Our team of experts stays updated with the latest trends and strategies in digital marketing.</p>
                            </div>
                        </li>
                        <li className='flex items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='mr-4'>
                                <h4 className='font-semibold text-xl mb-2'>Affordable Services</h4>
                                <p>We offer cost-effective solutions without compromising on quality, helping businesses of all sizes grow online.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ContactUs />
        </>
    )
}

export default DigitalMarketing