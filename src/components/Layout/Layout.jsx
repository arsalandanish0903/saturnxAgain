// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Outlet /> {/* This renders child routes */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
