"use client";

import React from "react";
import Button from "./Button";

const STATS = [
  {
    icon: "/moto/samco/filter.png",
    value: "30+M",
    label: <>Parts Produced<br className="hidden sm:inline" />every Year</>,
  },
  {
    icon: "/moto/samco/cube.png",
    value: "5000+",
    label: <>Product variants<br className="hidden sm:inline" />Available</>,
  },
  {
    icon: "/moto/samco/global.png",
    value: "Global",
    label: <>OEM & Aftermarket<br className="hidden sm:inline" />Supplier</>,
  },
  {
    icon: "/moto/samco/prize.png",
    value: "Quality",
    label: <>Tested. Certified.<br className="hidden sm:inline" />Trusted Worldwide.</>,
  },
];

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 2xl:py-32 bg-white overflow-hidden" id="about">
      <div className="custom-container">
        
        {/* Top Section: Image + Copy */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Copy Content - Order 1 on mobile, Order 2 on xl screens */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
            className="w-full xl:col-span-6 flex flex-col justify-center order-1 xl:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 bg-primary flex-shrink-0" />
              <span className="section-label tracking-wide uppercase text-sm font-semibold">About Company</span>
            </div>

            <h2 className="section-title font-medium text-dark capitalize mb-6 text-3xl sm:text-4xl 2xl:text-5xl leading-tight">
              Powering Performance For Mobility
            </h2>

            <div className="flex flex-col gap-4 mb-8 text-base 2xl:text-lg text-gray-700 leading-relaxed">
              <p className="text-left xl:text-justify">
                Through our IATF-certified manufacturing facilities and
                owner-managed structure, we provide the flexibility needed to
                adapt to changing market demands while maintaining the
                highest standards of product quality. This strong foundation
                allows us to consistently deliver reliable solutions tailored
                to our customers and partners.
              </p>
              <p className="text-left xl:text-justify">
                Our commitment to a customer-focused approach has been
                recognized through supplier awards from leading OEMs. By
                combining high-quality products, adaptability to customer and
                environmental requirements, and a comprehensive service
                mindset, we have built a company culture defined by
                reliability, innovation, and long-term partnership.
              </p>
            </div>

            <div>
              <Button variant="outline-primary">Explore Products</Button>
            </div>
          </div>

          {/* Facility Image - Order 2 on mobile, Order 1 on xl screens */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-full xl:col-span-6 aspect-video rounded-xs overflow-hidden shadow-[0px_7px_29px_rgba(100,100,111,0.2)] group order-2 xl:order-1"
          >
            <img
              src="/moto/samco/about.png"
              alt="SAMCO manufacturing facility"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

        </div>

        {/* Bottom Section: Driven by Quality + Stats Bar */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center mt-16 xl:mt-24"
        >
          {/* Left Text Block */}
          <div className="w-full xl:col-span-4 pr-0 xl:pr-6">
            <h3 className="subheading font-medium text-dark capitalize mb-2 text-2xl 2xl:text-3xl">
              Driven By Quality
            </h3>
            {/* Width increased by changing max-w to full / none on desktop */}
            <p className="card-text text-gray-600 max-w-md xl:max-w-full text-sm sm:text-base 2xl:text-lg">
              Delivering high-volume production, extensive product variety, &amp;
              globally trusted quality standards for OEM and aftermarket
              solutions.
            </p>
          </div>

          {/* Stats Container */}
          <div className="w-full xl:col-span-8 border border-primary/80 rounded-xs overflow-hidden shadow-sm bg-white py-6 px-4 sm:py-4 xl:py-4 xl:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-4 xl:gap-0">
              {STATS.map(({ icon, value, label }, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={400 + index * 100}
                  className={`relative flex flex-col sm:flex-row xl:flex-row items-center justify-center gap-3 sm:gap-4 xl:gap-5 px-3 py-3 sm:py-2 hover:bg-[#FFF5F7] transition-colors duration-300 ${
                    index !== STATS.length - 1 
                      ? "xl:after:content-[''] xl:after:absolute xl:after:right-0 xl:after:top-1/2 xl:after:-translate-y-1/2 xl:after:w-[1px] xl:after:h-10 xl:after:bg-[#FFE2E7]" 
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <img
                    src={icon}
                    alt=""
                    className="w-10 h-10 sm:w-9 sm:h-9 xl:w-9 xl:h-9 aspect-square object-contain flex-shrink-0"
                  />
                  
                  {/* Content Stack */}
                  <div className="flex flex-col items-center sm:items-start xl:items-center text-center sm:text-left xl:text-center">
                    {/* Value Container */}
                    <div className="flex items-center justify-center mb-1">
                      <p className="stat-number text-primary text-2xl sm:text-3xl xl:text-2xl 2xl:text-3xl font-bold leading-none">{value}</p>
                    </div>
                    {/* Label Container */}
                    <div className="flex items-center justify-center">
                      <p className="stat-label text-xs sm:text-sm text-gray-600 leading-tight">{label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}