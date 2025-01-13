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
          <Route path='services' element={<ServicesBanner />} />
          <Route path='careers' element={<CareersBanner />} />
          <Route path='contactus' element={<ContactUsBanner />} />
          <Route path='/construction/software-development' element={<Construction />} />
          <Route path='/healthcare/software-development' element={<HealthCare />} />
          <Route path='dental/software-development' element={<Dental />} />
          <Route path='insurance/software-development' element={<Insurance />} />
          <Route path='ecommerce/software-development' element={<Ecommerce />} />
          <Route path='/logistics/software-development' element={<Logistics />} />
          <Route path='/automotive/software-development' element={<Automotive />} />
          <Route path='/travelandhospitality/software-development' element={<TravelandHospitality />} />
          <Route path='/edutech/software-development' element={<Edutech />} />
          <Route path='/digitaltransformation/software-development' element={<DigitalTransformation />} />
          <Route path='/uiux/software-development' element={<UiUx />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
