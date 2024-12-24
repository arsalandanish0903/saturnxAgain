import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './Pages/About/About'
import Home from './Pages/Home';
import Careers from './Pages/Careers/Careers';
import ContactUs from './Pages/ContactUs/ContactUs'
function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in Layout */}
        <Route path="/" element={<Layout />}>
          {/* Define child routes */}
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='careers' element={<Careers />} />
          <Route path='contactus' element={<ContactUs />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
