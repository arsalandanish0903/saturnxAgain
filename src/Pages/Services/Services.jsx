import React, {useEffect} from 'react'
import OurServices from '../OurServices/OurServices'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Services() {
  useEffect(() => {
          AOS.init();
      }, []);
  return (
    <>
      <OurServices />
      <ServicesSection />
    </>
  )
}

export default Services