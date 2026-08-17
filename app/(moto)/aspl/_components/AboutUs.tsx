"use client";

import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Link from "next/link";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-white pt-12 lg:pt-24">
      <div className="custom-container px-4 sm:px-6 xl:px-0">
        
        {/* Top Part: Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-16 xl:mb-20">
          {/* Left: Image */}
          <div 
            className="order-2 xl:order-1 w-full relative rounded-[24px] overflow-hidden shadow-sm"
            data-aos="fade-right" data-aos-duration="1000"
          >
            <img 
              src="/moto/aspl/abt.png" 
              alt="From idea to global brand" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 xl:order-2 flex flex-col space-y-6" data-aos="fade-left" data-aos-duration="1000">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-primary transform rotate-45"></div>
              <span className="text-primary font-semibold tracking-wide language-links">
                About Us
              </span>
            </div>

            {/* Title */}
            <h2 className="text-black font-semibold tracking-wide section-title">
              Trusted partner of the aftermarket industry
            </h2>

            {/* Description */}
            <p className="section-text text-[#484848] leading-relaxed">
              AS-PL is a supplier of starters and alternators for distributors and wholesalers worldwide. Since 1992, we have been developing an offer that combines a wide product range, availability and stable business partnership. Sales to over 100 countries and long-term cooperation with business partners allow us to effectively respond to the needs of the aftermarket – regardless of its specifics.
              <br/><br/>
              The presence of headquarters in Gdańsk, a production plant in Lubichowo and international branches ensures efficient logistics and product availability.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-10 py-4">
              {/* Stat 1 */}
              <div className="bg-white border border-gray-200/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center drop-shadow-lg">
                <span className="text-primary font-semibold number-title mb-2">84000</span>
                <p className="section-text text-[#484848] leading-relaxed">orders processed annually</p>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-white border border-gray-200/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center drop-shadow-lg">
                <span className="text-primary font-semibold number-title mb-2">60,000</span>
                <p className="section-text text-[#484848] leading-relaxed">starters produced monthly</p>
              </div>
            </div>

            {/* Button */}
            <div>
              <Button text="Know About Us" href="#about" variant="primary" showIcon={true} />
            </div>
          </div>
        </div>

        {/* Bottom Part: Banner */}
        <div 
          className="w-full relative rounded-[24px] overflow-hidden"
          data-aos="fade-up" data-aos-duration="1000"
        >
          {/* Banner Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/moto/aspl/abt1.png" 
              alt="Quality Products" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Banner Text */}
          <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 flex items-center justify-center text-center">
            <p  className="max-w-5xl font-semibold text-white leading-relaxed banner-title">
              Delivering top-quality products tailored to market expectations using modern technologies. We create solutions that support the growth of our partners' businesses.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
