"use client";

import React from "react";
import Button from "./Button";

export default function Cat() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="catalogue">
      <div className="custom-container">
        {/* 1 column up to 1025px, 2 columns at 1026px+ */}
        <div className="grid grid-cols-1 min-[1026px]:grid-cols-2 gap-10 min-[1026px]:gap-16 items-center">
          
          {/* Image with subtle hover zoom */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-full aspect-[792/324] rounded-none overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src="/moto/samco/cat.png"
              alt="SAMCO special production and fabrication"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Copy */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 bg-primary flex-shrink-0" />
              <span className="section-label">Digital Catalogue</span>
            </div>

            <h2 className="section-title font-medium text-dark capitalize mb-6">
              Explore Our Product Catalogue
            </h2>

            <p className="section-text text-justify mb-8">
              Explore our complete range of products and access detailed
              technical information designed to support your needs. From
              specifications to application insights, everything you need is
              available to help you choose the right solutions with
              confidence.
            </p>

            <div 
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
              className="flex flex-wrap items-center gap-4"
            >
              <Button variant="outline-primary">View Online</Button>
              <Button variant="solid">Download Catalogue</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}