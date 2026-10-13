"use client";

import React from "react";
import Button from "./Button";

export default function QualityManagement() {
  return (
    <section
      id="contact"
      className="py-20 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(92.02deg, #FF696E 0%, #EE464B 100%)",
      }}
    >
      {/* Background texture pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwaDh2OEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCA0aDhNNCBwdjgiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')]"></div>

      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-20 relative z-10 text-center">
        <div className="max-w-[85%] mx-auto flex flex-col items-center">
          <h2
            className="section-title font-bold text-white leading-tight mb-4 sm:mb-6 bricolage-font"
            data-aos="fade-up"
          >
            Let's Connect and Build Lasting Partnerships
          </h2>
          <p
            className="section-text text-white/95 leading-relaxed mb-8 sm:mb-10 w-full lg:w-[85%] mx-auto font-inter"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have questions about our products or services? Our team is ready to help you find the right chemical solutions for your business. Get in touch with GLITHERM for expert guidance, product information, and tailored support.
          </p>

          <div data-aos="fade-up" data-aos-delay="200">
            <Button
              href="#products"
              variant="white-outline"
              className="!w-auto rounded-[8px] !px-9 !py-3"
            >
              Explore Product Specifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
