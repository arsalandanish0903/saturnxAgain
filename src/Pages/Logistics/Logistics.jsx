import React from "react";
import Button from "../../components/Buttons/Button";
import LogisticsDigitalTransformation from "../../components/LogisticsDigitalTransformation/LogisticsDigitalTransformation";
import DataCentric from "../../components/DataCentric/DataCentric";
import LogisticsAccordion from "../../components/LogisticsAccordion/LogisticsAccordion";

function Logistics() {
    return (
        <>
        <div
            className="h-[500px] bg-cover flex items-center bg-center relative font-poppins"
            style={{
                backgroundImage: `url('/logistics.jpg')`, // Replace with your background image URL
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto max-w-[1140px] px-6 lg:px-0">
                {/* Content */}
                <div className="relative z-10 max-w-3xl  text-white text-center sm:text-left">
                    <h1 className="text-sm text-center font-semibold py-1 w-20 mb-4 bg-[#164DA5] mx-auto sm:mx-0">Logistics</h1>
                    <h2 className="text-3xl sm:text-4xl mb-4">Logistics & Automotive Software Solutions</h2>
                    <p className="text-md sm:text-lg mb-4">
                        Logistics and automotive software solutions with the latest tech give you an edge over competition across the board. Use Internet of Things (IoT) to track your operations and predict malfunction. Add Big Data solutions, and get valuable insights into your operations. Need to simplify employee on-boarding? Use Augmented and Virtual Reality training.
                    </p>
                    <Button 
                        mainButton="Contact Us"
                        btnPath="/contactus"
                        className="mt-4"
                    />
                </div>
            </div>
        </div>
        <LogisticsDigitalTransformation />
        <DataCentric />
        <LogisticsAccordion />
        </>
    );
}

export default Logistics;
