"use client";

import React from "react";
import Button from "./Button";

const stats = [
  { label: "Global Brand", icon: "/moto/asas/world.png" },
  { label: "Smart Production", icon: "/moto/asas/setting.png" },
  { label: "Certified Quality", icon: "/moto/asas/prize.png" },
];

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-x-clip">
      {/* Container switches from 1 column to 2 columns after 1025px */}
      <div className="custom-container grid min-[1026px]:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content Block */}
        <div 
          data-aos="fade-right"
          data-aos-duration="800"
          className="w-full max-w-none"
        >
          <h2 className="section-title font-semibold text-heading mb-6">
            About ASAS Filter
          </h2>
          <p className="section-text mb-6 text-[#4B5563]">
            ASAS Filter is a globally recognized manufacturer of automotive
            filtration solutions, committed to delivering high-quality filter
            design and production for customers around the world. With
            decades of industry expertise, the company continues to
            strengthen its position through innovation, precision
            engineering, and reliable manufacturing practices.
          </p>
          <p className="section-text mb-6 text-[#4B5563]">
            Our advanced production facilities utilize a wide range of
            premium materials and in-house machinery, enabling continuous
            improvements in manufacturing efficiency and product quality.
            This integrated approach allows us to develop filtration
            solutions that meet the evolving demands of the global automotive
            industry. By combining advanced technology with rigorous
            manufacturing standards, we ensure every filter delivers reliable
            performance, durability, and consistent quality across a wide
            range of automotive applications.
          </p>
          <p className="section-text mb-8 text-[#4B5563]">
            Driven by a commitment to excellence, ASAS Filter manufactures a
            comprehensive range of oil, fuel, air, cabin, dryer, and water
            filters. Every product is engineered to deliver dependable
            performance, long-lasting durability, and consistent quality,
            making ASAS Filter a trusted partner for automotive filtration
            solutions worldwide. Our extensive product portfolio is designed
            to meet the diverse requirements of passenger vehicles,
            commercial vehicles, and industrial applications.
          </p>
          <Button variant="primary">Know About Us</Button>
        </div>

        {/* Right Side: Image and Stats */}
        <div 
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
          className="flex flex-col gap-6 w-full"
        >
          <img
            src="/moto/asas/about.jpg"
            alt="ASAS Filter product"
            className="w-full aspect-video object-cover object-right rounded-2xl shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
          />
          <div className="bg-[#212121] rounded-2xl grid grid-cols-3 divide-x divide-[#d9d9d9]/30 py-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={300 + index * 100}
                className="flex flex-col items-center gap-3 px-3 md:px-4"
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-14 h-14 md:w-16 md:h-16 aspect-square object-contain"
                />
                <span className="card-title-sm font-semibold text-white text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}