import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import OurServices from './OurServices/OurServices'
import FeatureSection from './FeatureSection/FeatureSection'
import About from './About/About'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import OurClients from './OurClients/OurClients'

function Home() {
  return (
    <>
        <HeroSection />
        <About />
        <OurServices />
        <WhyChooseUs />
        <OurClients />
    </>
  )
}

export default Home