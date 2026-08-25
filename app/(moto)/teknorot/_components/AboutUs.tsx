"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left: Images */}
          <div className="w-full flex justify-center lg:justify-start lg:col-span-6" data-aos="fade-right">
            <img
              src="/moto/teknorot/abt.png"
              alt="Teknorot Facility Aerial"
              className="w-full h-auto object-cover rounded-[5px]"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-start text-left lg:col-span-6" data-aos="fade-left">
            <h2 className="section-title text-[#000000] montserrat-font font-semibold mb-6">
              About Us
            </h2>
            <h3 className="text-[#000000] card-text font-regular mb-6 italic inter-font text-[18px]">
              Driving Global Excellence in Steering & Suspension
            </h3>

            <p className="inter-font text-[#000000] font-regular section-text tracking-normal leading-relaxed mb-6">
              Since 1992, Teknorot has grown into one of Europe's largest manufacturers of steering and suspension components for passenger cars and light commercial vehicles. Built on 100% local capital and decades of engineering expertise, we combine advanced manufacturing technologies, continuous innovation, and uncompromising quality to deliver reliable automotive solutions to customers worldwide.
            </p>

            <p className="inter-font text-[#000000] font-regular section-text tracking-normal leading-relaxed mb-8">
              Operating from our state-of-the-art production facility in the Düzce Organized Industrial Zone, along with production and distribution centers in Turkey, Spain, and India, Teknorot serves more than 90 countries with a portfolio of over 12,000 product references. Every year, we expand our range with over 900 new products, ensuring comprehensive coverage for the evolving automotive aftermarket while maintaining the highest standards of performance, precision, and customer satisfaction.
            </p>

            <Button href="#" variant="primary" className="!w-auto">
              Learn More
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
