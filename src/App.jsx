import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './Pages/Home';
import AboutBanner from './components/AboutBanner/AboutBanner';
import ServicesBanner from './components/ServicesBanner/ServicesBanner';
import CareersBanner from './components/CareersBanner/CareersBanner';
import ContactUsBanner from './components/ContactUsBanner/ContactUsBanner';
import Construction from './Pages/Construction/Construction';
import HealthCare from './Pages/HealthCare/HealthCare';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dental from './Pages/Dental/Dental';
import Insurance from './Pages/Insurance/Insurance';
import Ecommerce from './Pages/Ecommerce/Ecommerce';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Logistics from './Pages/Logistics/Logistics';
import TravelandHospitality from './Pages/TravelandHospitality/TravelandHospitality';
import Edutech from './Pages/Edutech/Edutech';
import Automotive from './Pages/Automotive/Automotive';
import DigitalTransformation from './Pages/DigitalTransformation/DigitalTransformation';
import UiUx from './Pages/UiUx/UiUx';
import EnterpriseSoftware from './Pages/EnterpriseSoftware/EnterpriseSoftware';
import MobileAppDevelopment from './Pages/MobileAppDevelopment/MobileAppDevelopment';
import DedicatedDevelopmentTeam from './Pages/DedicatedDevelopmentTeam/DedicatedDevelopmentTeam';
import QaTesting from './Pages/QaTesting/QaTesting';
import Technology from './Pages/Technology/Technology.jsx';
import DigitalMarketing from './Pages/DigitalMarketing/DigitalMarketing.jsx';
import AiMl from './Pages/AIML/AiMl.jsx';
import DevOps from './Pages/DevOps/DevOps.jsx';


AOS.init();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path='about' element={<AboutBanner />} />
          <Route path='software-development-services-of-any-type-and-complexity' element={<ServicesBanner />} />
          <Route path='cutting-edge-technologies' element={<Technology />}/>
          <Route path='careers' element={<CareersBanner />} />
          <Route path='contactus' element={<ContactUsBanner />} />
          <Route path='digital-marketing-services' element={<DigitalMarketing />} />
          <Route path='ai-ml-services' element={<AiMl />} />
          <Route path='devops-services' element={<DevOps />} />
          <Route path='/digital-solutions-for-construction' element={<Construction />} />
          <Route path='/digital-solutions-for-healthcare' element={<HealthCare />} />
          <Route path='dental-software-development' element={<Dental />} />
          <Route path='insurance-digital-solutions-provider' element={<Insurance />} />
          <Route path='digital-solutions-for-ecommerce' element={<Ecommerce />} />
          <Route path='/digital-solutions-for-logistics-and-transportation' element={<Logistics />} />
          <Route path='/digital-solutions-for-automotive' element={<Automotive />} />
          <Route path='/digital-solutions-for-travel-and-hospitality' element={<TravelandHospitality />} />
          <Route path='/digital-solutions-for-edutech' element={<Edutech />} />
          <Route path='/digitaltransformation/software-development' element={<DigitalTransformation />} />
          <Route path='/uiux-digital-solutions-provider' element={<UiUx />} />
          <Route path='/enterprise-software-development' element={<EnterpriseSoftware />} />
          <Route path='/mobile-app-development' element={<MobileAppDevelopment />} />
          <Route path='/dedicated-team-development' element={<DedicatedDevelopmentTeam />} />
          <Route path='/software-qa-and-testing' element={<QaTesting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
