import React from 'react'
import ContactUs from '../../Pages/ContactUs/ContactUs'

function ContactUsBanner() {
  return (
    <>
    <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/contactusbanner.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <div className="w-16 h-[2px] bg-[#F59E0D]"></div>
      </div>
    </div>
    <ContactUs />
    </>
  )
}

export default ContactUsBanner