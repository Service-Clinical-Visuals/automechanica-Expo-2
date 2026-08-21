"use client";

import React from "react";
import Button from "./Button";

export default function Quality() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Side: Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:col-span-6" data-aos="fade-right">
            <h2 className="section-title text-[#000000] exo-2-font font-bold mb-8 leading-tight">
              Over 30 Years of Experience
            </h2>
            <p className="inter-font section-text text-[#111111] font-regular leading-relaxed mb-8">
              Our company, which started production life in Konya with the production of steel sheet cutting molds, an important element of the manufacturing industry, has been producing motor gaskets and sealing products with over 30 years of experience. Our company, which has proven its quality in the production of passenger car group motor gaskets, heavy-duty vehicle group motor gaskets, compressor gaskets, and all kinds of sealing products associated with these, carries out its production in parallel with technology.
            </p>
            <Button href="#" className="w-max">
              Learn More
            </Button>
          </div>

          {/* Right Side: Image */}
          <div className="w-full h-full lg:col-span-6 flex items-center justify-center" data-aos="fade-left">
            <img
              src="/moto/avortex/e.png"
              alt="Avortex Gasket Logo"
              className="w-full h-full object-contain"
              onError={(e) => { e.currentTarget.src = "/moto/avortex/abt1.png"; }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
