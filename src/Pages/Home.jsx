import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import OurServices from './OurServices/OurServices'
import About from './About/About'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import OurClients from './OurClients/OurClients'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import LifeCycle from '../components/LifeCycle/LifeCycle'
import FAQAccordion from '../components/FAQAccordion/FAQAccordion'
import Testimonials from '../components/Testimonials/Testimonials'

function Home() {
  return (
    <>
        <HeroSection />
        <About />
        <OurServices />
        <ServicesSection />
        <LifeCycle />
        <WhyChooseUs />
        <OurClients />
        <Testimonials />
        <FAQAccordion />
    </>
  )
}

export default Home