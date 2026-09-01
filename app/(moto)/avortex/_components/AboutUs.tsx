"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Side: Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-6" data-aos="fade-right">
            <div>
              <h2 className="section-title text-[#000000] exo-2-font font-bold leading-tight mb-6">
                About Avortex
              </h2>
            </div>

            <div className="flex flex-col gap-5 section-text inter-font font-regular text-[#111111] leading-relaxed">
              <p>
                Starting its journey in the manufacturing sector with steel sheet cutting molds in Konya, Avortex - Conta Otomotiv has proven itself in the production of motor gaskets and sealing products with over 30 years of experience. Our company aims to achieve high-quality standards in the production of passenger car group motor gaskets, heavy-duty vehicle group motor gaskets, compressor gaskets, and all related sealing products by closely following industry developments.
              </p>

              <p>
                In today's rapidly advancing technology, multi-layer steel gaskets (MLS - Multi Layer Steel Gasket) have been included in our product portfolio, utilizing innovative solutions for engines. Avortex produces the steel molds for these innovative gaskets in-house, enabling us to develop faster and higher-quality products. By employing the latest technological infrastructure in our production processes, we enhance both efficiency and product quality continuously.
              </p>

              <p>
                Our meticulous attention to quality material usage is evident at every stage, and we never compromise on quality production. Customer satisfaction is one of the cornerstones of our company, and we remain committed to the principle of excellence in the products and services we offer.
              </p>

              <p>
                At Avortex - Conta Otomotiv, we view quality and customer satisfaction as indispensable elements. Our goal is to maintain our leadership in the industry and to be a reliable business partner by exceeding our customers' expectations. With the principles of innovation, quality, and customer orientation, we will continue to strengthen our position in the sector and grow in the future.
              </p>
            </div>

            <Button href="#" className="mt-8">
              Learn More
            </Button>
          </div>

          {/* Right Side: Image */}
          <div className="w-full h-full mt-8 lg:mt-0 lg:col-span-6" data-aos="fade-left">
            <img src="/moto/avortex/abt1.png" alt="Avortex Facility" className="w-full h-full object-cover]" onError={(e) => { e.currentTarget.src = "/moto/avortex/abt.png"; }} />
          </div>

        </div>
      </div>
    </section>
  );
}
