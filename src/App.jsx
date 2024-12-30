import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './Pages/About/About'
import Home from './Pages/Home';
import Careers from './Pages/Careers/Careers';
import ContactUs from './Pages/ContactUs/ContactUs'
import Services from './Pages/Services/Services';
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

AOS.init();

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in Layout */}
        <Route path="/" element={<Layout />}>
          {/* Define child routes */}
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
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
