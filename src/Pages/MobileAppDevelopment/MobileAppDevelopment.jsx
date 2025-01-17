import React from 'react'
import Button from '../../components/Buttons/Button'
import MobileAppSolutions from '../../components/MobileAppSolutions/MobileAppSolutions';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import ContactUs from '../ContactUs/ContactUs';

function MobileAppDevelopment() {
    const mobileAppDevelopemntServices = [
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" width="51" height="65" viewBox="0 0 51 65" fill="none">
                <path d="M12.4373 53.0467V60.4276C12.4373 62.0514 13.7659 63.38 15.3897 63.38H46.3897C48.0135 63.38 49.3421 62.0514 49.3421 60.4276V4.33239C49.3421 2.70858 48.0135 1.38 46.3897 1.38H15.3897C13.7659 1.38 12.4373 2.70858 12.4373 4.33239V16.1419" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M28.6754 58.9514H33.104" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M28.6754 5.80859H33.104" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M21.3293 29.2442C21.1797 29.3612 18.5383 30.8615 18.5383 34.1977C18.5383 38.0564 21.8994 39.4216 22 39.4554C21.9845 39.5386 21.466 41.325 20.2279 43.1452C19.1238 44.7469 17.9708 46.3461 16.2167 46.3461C14.4626 46.3461 14.0112 45.319 11.9862 45.319C10.0129 45.319 9.31126 46.3799 7.70679 46.3799C6.10232 46.3799 4.9828 44.8977 3.69562 43.0776C2.20464 40.9401 1 37.6196 1 34.4681C1 29.4132 4.26053 26.7323 7.46948 26.7323C9.17455 26.7323 10.5959 27.8608 11.6664 27.8608C12.6853 27.8608 14.2743 26.6647 16.2141 26.6647C16.9493 26.6647 19.5907 26.7323 21.3293 29.2442ZM15.2932 24.5247C16.0954 23.5652 16.6629 22.2339 16.6629 20.9025C16.6629 20.7179 16.6475 20.5307 16.6139 20.3799C15.3087 20.4293 13.7558 21.2562 12.8194 22.3509C12.0843 23.1934 11.3981 24.5247 11.3981 25.8742C11.3981 26.0771 11.4316 26.2799 11.4471 26.3449C11.5297 26.3605 11.6638 26.3787 11.7979 26.3787C12.969 26.3787 14.442 25.5882 15.2932 24.5247Z" stroke="#1476F2"></path>
            </svg>),
            title: 'iOS App Development',
            description: 'SaturnX specializes in creating custom iOS apps that are secure, scalable, and user-friendly. Our iOS app development services cater to diverse business needs, from enhancing customer engagement to streamlining workflows. Partner with SaturnX to build innovative iOS apps that drive growth and adapt to your evolving business goals.'
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" width="53" height="65" viewBox="0 0 53 65" fill="none">
                <path d="M14.1039 48V60.4276C14.1039 62.0514 15.4325 63.38 17.0563 63.38H48.0563C49.6801 63.38 51.0087 62.0514 51.0087 60.4276V4.33239C51.0087 2.70858 49.6801 1.38 48.0563 1.38H17.0563C15.4325 1.38 14.1039 2.70858 14.1039 4.33239V21" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M30.342 58.9514H34.7706" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M30.342 5.80859H34.7706" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5.36162 27.8717L7.10294 30.8878C3.7796 32.8859 1.51561 36.3702 1.16842 40.4577L1.12236 41H1.66663H25.6666H26.2094L26.1649 40.459C25.8297 36.3827 23.5772 32.8983 20.2438 30.8998L21.995 27.8849L21.9998 27.8765L22.0044 27.868C22.2332 27.4365 22.0914 26.8848 21.6556 26.6371C21.2401 26.3961 20.6507 26.5061 20.4213 26.9973L18.6083 30.0774C17.0433 29.4288 15.3624 29.0994 13.665 29.1104C11.9233 29.1106 10.2415 29.4532 8.75153 30.0653L6.9512 26.9705C6.89445 26.8661 6.81758 26.774 6.72501 26.6994C6.62905 26.6221 6.51827 26.5653 6.39953 26.5325C6.2808 26.4997 6.15661 26.4916 6.03462 26.5087L6.10394 27.0039L6.03462 26.5087C5.91783 26.5251 5.8054 26.5642 5.70373 26.6238C5.23458 26.8812 5.13514 27.4454 5.3529 27.856L5.35711 27.8639L5.36162 27.8717ZM19.1986 36.5858C18.9141 36.5858 18.6906 36.3578 18.6906 36.0914C18.6906 35.8329 18.9061 35.6091 19.1986 35.6091C19.4911 35.6091 19.7066 35.8329 19.7066 36.0914C19.7066 36.3578 19.4831 36.5858 19.1986 36.5858ZM8.15863 36.5858C7.87414 36.5858 7.65063 36.3578 7.65063 36.0914C7.65063 35.8329 7.86612 35.6091 8.15863 35.6091C8.44324 35.6091 8.65463 35.8252 8.65463 36.0914C8.65463 36.3656 8.43528 36.5858 8.15863 36.5858Z" stroke="#1476F2"></path>
            </svg>),
            title: 'Android App Development',
            description: 'SaturnX offers comprehensive Android app development services that cater to the ever-evolving needs of businesses. Our custom Android apps are designed to enhance brand identity, boost productivity, and drive growth. From optimizing workflows to enhancing customer engagement, SaturnX delivers secure, scalable, and user-friendly Android apps that transform business operations.'
        },
        {
            svg: (<svg width="80" height="62" viewBox="0 0 80 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.9981 35.5455V57.3636C35.9981 59.3636 34.364 61 32.3668 61H5.13204C3.13482 61 1.50073 59.3636 1.50073 57.3636V4.63636C1.50073 2.63636 3.13482 1 5.13204 1H32.3668C34.364 1 35.9981 2.63636 35.9981 4.63636V24.6364" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M16.026 55.5454H21.473" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                <path d="M61.4176 30.0909H17.8417" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M23.2887 35.5455L17.8417 30.0909L23.2887 24.6364" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M55.9705 35.5455L61.4175 30.0909L55.9705 24.6364" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M47.6993 34.4895V42.8641C47.6993 44.3995 48.9537 45.6557 50.487 45.6557H70.0006C71.5339 45.6557 72.7883 44.3995 72.7883 42.8641V19.1359C72.7883 17.6006 71.5339 16.3444 70.0006 16.3444H50.487C48.9537 16.3444 47.6993 17.6006 47.6993 19.1359V26.1148" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M51.8807 45.6556V54.0303H68.6068V45.6556" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M68.6068 16.3443V7.96973H51.8807V16.3443" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M75.576 26.1149H76.9699C77.8062 26.1149 78.3637 26.6732 78.3637 27.5106V33.0937C78.3637 33.9312 77.8062 34.4895 76.9699 34.4895H75.576" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
            </svg>),
            title: 'Wearables and Embedded Software',
            description: 'SaturnX specializes in developing custom software solutions for wearables and embedded devices. Our innovative apps are designed to enhance user experiences, optimize workflows, and drive growth. From fitness trackers to smart home devices, SaturnX delivers secure, scalable, and user-friendly software that transforms the way we interact with technology.'
        },
        {
            svg: (<svg width="75" height="62" viewBox="0 0 75 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.8954 19.0952V4.24324C40.8954 2.45946 42.3528 1 44.1341 1H70.0441C71.8254 1 73.2828 2.45946 73.2828 4.24324V26.9459V36.6757V57.7568C73.2828 59.5405 71.8254 61 70.0441 61H44.1341C42.3528 61 40.8954 59.5405 40.8954 57.7568V44.3333" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M40.8954 56.0613H73.2828" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                <path d="M73.2828 4.31689H40.8954" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                <path d="M33.3875 18.619V4.24324C33.3875 2.45946 31.93 1 30.1487 1H4.23875C2.45744 1 1 2.45946 1 4.24324V26.9459V36.6757V57.7568C1 59.5405 2.45744 61 4.23875 61H30.1487C31.93 61 33.3875 59.5405 33.3875 57.7568V44.3333" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M23.8222 5.27509H10.5691L9.61218 1.2948H24.7791L23.8222 5.27509Z" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                <rect x="7.27356" y="20.4594" width="60.3686" height="22.0393" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></rect>
                <path d="M32.0035 27.4545L28.1759 31.2874L32.0035 35.1203" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M41.5725 27.4545L45.4001 31.2874L41.5725 35.1203" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M38.7017 24.5798L34.8741 37.9951" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
            </svg>),
            title: 'Native Mobile Apps',
            description: 'SaturnX excels in creating native mobile apps that are secure, scalable, and user-friendly. Our custom solutions cater to diverse business needs, from enhancing customer engagement to streamlining workflows. Partner with SaturnX to build innovative native mobile apps that drive growth and adapt to your evolving business goals.'
        },
        {
            svg: (<svg width="99" height="62" viewBox="0 0 99 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.6318 43.6561H2.84342C2.14128 43.6561 1.55615 43.0702 1.55615 42.3671V36.1562V2.28906C1.55615 1.58594 2.14128 1 2.84342 1H57.845C58.5471 1 59.1323 1.58594 59.1323 2.28906V3.80007" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M36.5465 46.1172V51.1562" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M25.3122 51.1562V46.1172" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M41.5786 51.1562H20.2801" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M42.9829 36.1562H1.55615" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M29.0569 39.906H32.8017" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M5.3009 6.03931H15.248" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M10.3331 11.0781H14.0777" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M15.248 11.0781H30.2272" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M10.3331 16.1172H21.5674" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M22.7376 16.1172H27.7697" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M10.3331 26.0779H14.0777" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M15.248 26.0779H39.004" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M10.3331 31.1168H21.5674" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M22.7376 31.1168H27.7697" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M5.3009 21.1564H16.5353" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M46.6686 39.2603V58.1013C46.6686 59.6956 47.9712 60.9999 49.5632 60.9999H72.7201C74.3121 60.9999 75.6147 59.6956 75.6147 58.1013V10.274C75.6147 8.67975 74.3121 7.37537 72.7201 7.37537H49.5632C47.9712 7.37537 46.6686 8.67975 46.6686 10.274V30.5644" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M56.6936 32.348L53.1133 35.9334L56.6936 39.5187" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M65.6445 32.348L69.2248 35.9334L65.6445 39.5187" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M62.9592 29.6591L59.3788 42.2076" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M66.7465 11.1961H54.9016L54.0464 7.63867H67.6017L66.7465 11.1961Z" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                <path d="M78.4684 53.1253H94.5479C96.0955 53.1253 97.3616 51.8574 97.3616 50.3077V31.9934V23.5407V3.81758C97.3616 2.26791 96.0955 1 94.5479 1H72.0385C70.491 1 69.2249 2.26791 69.2249 3.81758V5.21146" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M78.8005 49.1395L97.757 49.1395" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                <path d="M98.1403 3.80286L69.0713 3.80286" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
            </svg>),
            title: 'Cross-Platform Apps',
            description: 'SaturnX offers cross-platform app development services that cater to the diverse needs of businesses. Our custom solutions are designed to enhance brand identity, boost productivity, and drive growth. From optimizing workflows to enhancing customer engagement, SaturnX delivers secure, scalable, and user-friendly cross-platform apps that transform business operations'
        },
        {
            svg: (<svg width="65" height="62" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.6371 15.2857V2.42857C56.6371 1.57143 56.0664 1 55.2105 1H2.42659C1.57064 1 1 1.57143 1 2.42857V52.4286C1 53.2858 1.57064 53.8572 2.42659 53.8572H35.2382" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M39.5179 39.5714V58.1429C39.5179 59.7143 40.8018 61 42.3711 61H60.9168C62.486 61 63.7699 59.7143 63.7699 58.1429V22.4286C63.7699 20.8571 62.486 19.5714 60.9168 19.5714H42.3711C40.8018 19.5714 39.5179 20.8571 39.5179 22.4286V31" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M49.5041 56.7142H53.7838" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                <path d="M3.85321 9.57166H53.7839" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M5.27982 5.28577H8.13299" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M9.55957 5.28577H12.4128" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M20.9723 35.2858H53.7839" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M48.0775 41L53.7839 35.2857L48.0775 29.5714" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
                <path d="M26.6787 41L20.9723 35.2857L26.6787 29.5714" stroke="#1476F2" stroke-width="1.5" stroke-miterlimit="10"></path>
            </svg>),
            title: 'Progressive Web Apps',
            description: 'SaturnX specializes in developing progressive web apps that are secure, scalable, and user-friendly. Our custom solutions cater to diverse business needs, from enhancing customer engagement to streamlining workflows. Partner with SaturnX to build innovative progressive web apps that drive growth and adapt to your evolving business goals.'
        }
    ]
    return (
        <>
            <div
                className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/mobileAppDevelopemnt.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white  sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">Mobile App Development</h2>
                        <p className="text-md sm:text-lg mb-4">
                            Revolutionizing Business with SaturnX
                            SaturnX excels in mobile app development, creating custom solutions designed to transform your business operations. Our innovative apps are user-friendly, secure, and scalable, catering to diverse business needs. From optimizing workflows to enhancing customer engagement,
                        </p>
                        {/* <p>we leverage cutting-edge technology to deliver seamless and efficient mobile experiences. Partner with SaturnX for mobile app development that drives growth, boosts productivity, and adapts to your evolving business goals. Let’s build the future together with innovative, enterprise-grade mobile solutions.</p> */}
                        <Button
                            mainButton="Contact Us"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <div className='relative w-full py-16 px-6 lg:px-0 bg-white font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center'>
                        <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">MOBILE APPLICATION DEVELOPMENT SERVICES FOR VARIOUS PLATFORMS</h4>
                        <p className='max-w-3xl'>Looking to elevate your business with a custom mobile app? Our expert developers have <strong>10+ years of experience</strong> creating tailored iOS, Android, and cross-platform apps that enhance brand identity, drive growth, and meet market demands.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 my-16">
                        {mobileAppDevelopemntServices.map((service, index) => {
                            return (
                                <div
                                    key={index}
                                    className="p-6 border cursor-pointer border-gray-200 rounded-lg bg-white"
                                >
                                    <p className="text-4xl text-blue-500 mb-4">{service.svg}</p>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            <MobileAppSolutions />
            <ContactUs />
        </>
    )
}

export default MobileAppDevelopment