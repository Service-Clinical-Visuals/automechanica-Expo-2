"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h3 className="text-[#F12535] font-semibold mb-3 poppins-font section-text">
            About Kameks Eksantrik Milleri
          </h3>
          <h2 className="section-title text-[#202020] poppins-font font-semibold leading-tight">
            Forging the Future of Engine Performance
          </h2>
        </div>

        {/* Image */}
        <div className="w-full h-full mb-8 flex item-center mx-auto justify-center" data-aos="fade-up" data-aos-delay="100">
          <img
            src="/moto/kameks/abt.png"
            alt="Kameks Facility"
            className="w-auto h-full object-cover"
          />
        </div>

        {/* Text Description */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
          <p className="section-text inter-font text-[#404040] tracking-normal leading-relaxed">
            Certified with the ISO 9001:2015 Quality Management System, we manufacture precision-engineered camshafts for over 510 engine models across 37 vehicle brands. With a strong focus on quality, innovation, and customer requirements, we continuously develop reliable automotive solutions that meet evolving industry demands.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
          <Button href="#" variant="outline" className="!text-[#F12535] !border-[#F12535] !bg-transparent hover:!bg-[#F12535] hover:!text-white transition-colors px-10 py-2.5 font-medium rounded-[8px]">
            Know More
          </Button>
        </div>

      </div>
    </section>
  );
}
