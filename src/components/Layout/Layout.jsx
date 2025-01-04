// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import FixedButtons from '../FixedButtons/FixedButtons';
import Chatbot from '../Chatbot/Chatbot';

function Layout() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Outlet /> {/* This renders child routes */}
      </main>
      <FixedButtons />
      <Footer />
    </>
  );
}

export default Layout;
