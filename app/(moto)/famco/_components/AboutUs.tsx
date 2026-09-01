"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8" data-aos="fade-up">
          <h3 className="text-[#10276D] font-semibold mb-2 rubik-font section-text">
            About Famco
          </h3>
          <h2 className="section-title text-[#202020] rubik-font font-semibold leading-tight">
            Driving Innovation In Automotive Pump Solutions
          </h2>
        </div>

        {/* Text Description */}
        <div className="flex flex-col items-center text-center max-w-[90%] lg:max-w-[80%] mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
          <p className="inter-font text-[#404040] section-text tracking-normal leading-relaxed">
            Fame Automotive, Established In 1967, Is A Globally Recognized Manufacturer Known For Quality, Innovation, & Customer Satisfaction. The Company Expanded In The Early 2000s Into Water Circulation Pumps For Heavy-Duty Vehicles & Now Exports Worldwide Under Its FAMCO Brand. With ISO 9001-Certified Processes And Advanced Manufacturing Technologies, Fame Automotive Supplies Leading OEMs Such As Volvo, DAF, Scania, MAN, Mercedes-Benz, Renault, Ford, And Daewoo. Its Product Range Has Recently Expanded To Include Fuel Supply And Oil Pumps, Reinforcing Its Position As A Trusted Provider Of Durable, High-Performance Automotive Solutions.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-10" data-aos="fade-up" data-aos-delay="200">
          <img
            src="/moto/famco/abt1.png"
            alt="Famco Facility Exterior"
            className="w-full h-auto object-cover rounded-[5px]"
          />
          <img
            src="/moto/famco/abt2.png"
            alt="Famco Facility Interior"
            className="w-full h-auto object-cover rounded-[5px]"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
          <Button href="#" variant="outline" className="!text-[#10276D] !border-[#10276D] hover:!bg-[#10276D] hover:!text-white transition-colors px-8 py-3 font-medium rounded-[6px]">
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
}
