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
          <Route path='construction' element={<Construction />} />
          <Route path='healthcare' element={<HealthCare />} />
          <Route path='dental' element={<Dental />} />
          <Route path='insurance' element={<Insurance />} />
          <Route path='ecommerce' element={<Ecommerce />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
