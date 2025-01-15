import React, {useEffect} from 'react'
import Button from '../../components/Buttons/Button'
import ContactUs from '../ContactUs/ContactUs'
import AOS from 'aos';
import 'aos/dist/aos.css';

function DedicatedDevelopmentTeam() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div
                className="h-[500px] bg-white bg-cover flex items-center bg-center relative font-poppins"
                style={{
                    backgroundImage: `url('/colleagues-working-project-discussing-details.jpg')`, // Replace with your background image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl mb-4">Dedicated Development Team</h2>
                        <p className="text-md sm:text-lg mb-4">
                            At SaturnX, we specialize in revolutionizing businesses through cutting-edge mobile app development. Our dedicated team delivers custom solutions tailored to meet your unique needs, ensuring seamless integration and optimized workflows.
                        </p>
                        <Button
                            mainButton="Let's Talk"
                            btnPath="/contactus"
                            className="mt-4"
                        />
                    </div>
                </div>
            </div>
            <div className='relative w-full  px-6 lg:px-0 py-16 font-poppins'>
                <div className='container mx-auto max-w-[1140px]'>
                    <div className='my-2 w-full flex flex-col items-center justify-center text-center'>
                        <h4 className="text-2xl lg:text-4xl mb-4 font-bold max-w-4xl">PROVEN DEDICATED DEVELOPMENT TEAM MODEL</h4>
                        <p className='max-w-3xl'>Leverage our dedicated development team model to accelerate your projects with expert talent, seamless collaboration, and cost-effective solutions. Designed for scalability and flexibility, our model ensures consistent quality, faster delivery, and tailored results to drive your business success.</p>
                    </div>
                    <div className='w-full flex items-center justify-between mb-8 mt-16 text-center'>
                        <p className='font-semibold text-xl lg:ml-40'>Client</p>
                        <p className='font-semibold text-xl lg:mr-28'>SaturnX Digital</p>
                    </div>
                    <div className='relative grid grid-cols-1 lg:grid-cols-3 items-center justify-center'>
            <div
                className='shadow-md h-52 p-4 text-center flex flex-col items-center justify-center gap-4 rounded-md'
                data-aos="fade-up"
            >
                <img src="/directorOfSoftware.svg" alt="" className='w-20' />
                <span>Director Of Software
                    <span className='block'>Development</span>
                </span>
            </div>
            <div
                className='flex flex-col items-center justify-center'
                data-aos="fade-up"
            >
                <img src="/weeklyMonthly.svg" alt="" />
                <p className='text-[#1476F2]'>Weekly / Monthly Report</p>
            </div>
            <div
                className='shadow-md h-52 p-4 text-center flex flex-col items-center justify-center gap-4 rounded-md'
                data-aos="fade-up"
            >
                <img src="/steeringCommite.svg" alt="" />
                <span>Steering committee
                    <span className='block'>(business lead, delivery lead)</span>
                </span>
            </div>
            <div
                className='shadow-md h-52 p-4 text-center flex flex-col items-center justify-center gap-4 rounded-md'
                data-aos="fade-up"
            >
                <img src="/projectManager.svg" alt="" className='w-20' />
                <span>Project Manager</span>
            </div>
            <div
                className='flex flex-col items-center justify-center'
                data-aos="fade-up"
            >
                <img src="/weeklyMonthly2.svg" alt="" />
                <p className='text-[#1476F2]'>Weekly / Monthly Report</p>
            </div>
            <div
                className='shadow-md h-52 p-4 text-center flex flex-col items-center justify-center gap-4 rounded-md'
                data-aos="fade-up"
            >
                <img src="/seniorProgram.svg" alt="" />
                <span>Senior Program
                    <span className='block'>Manager</span>
                </span>
            </div>
            <div
                className='shadow-md h-52 p-4 text-center flex flex-col items-center justify-center gap-4 rounded-md'
                data-aos="fade-up"
            >
                <img src="/developmenLeads.svg" alt="" className='w-20' />
                <span>Development Leads
                    <span className='block'>Engineering</span>
                </span>
            </div>
            <div
                className='flex flex-col items-center justify-center'
                data-aos="fade-up"
            >
                <img src="/weeklyMonthly3.svg" alt="" />
                <p className='text-[#1476F2]'>Daily Interaction</p>
            </div>
            <div
                className='shadow-md h-52 p-4 text-center flex flex-col items-center justify-center gap-4 rounded-md'
                data-aos="fade-up"
            >
                <img src="/developmenTeams.svg" alt="" />
                <span>Development Teams</span>
            </div>
        </div>
                </div>
            </div>
            <ContactUs />
        </>
    )
}

export default DedicatedDevelopmentTeam