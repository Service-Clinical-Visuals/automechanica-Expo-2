"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const categories = [
  { name: "Oil Filter", image: "/moto/asas/p1.jpg" },
  { name: "Fuel Filter", image: "/moto/asas/p2.jpg" },
  { name: "Air Filter", image: "/moto/asas/p3.jpg" },
  { name: "Cabin Filter", image: "/moto/asas/p4.jpg" },
];

export default function Products() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-x-clip">
      <div className="custom-container px-4 sm:px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="max-w-2xl"
          >
            <h2 className="section-title font-semibold text-heading mb-4">
              Explore Our Product Categories
            </h2>
            <p className="section-text text-[var(--color-body)] leading-relaxed">
              ASAS FILTER offers advanced Oil, Fuel, Air, Cabin, Dryer, and
              Water Filters engineered for superior filtration, reliable
              performance, extended service life, and enhanced engine
              protection.
            </p>
          </div>
          
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <Button variant="primary" className="flex-shrink-0 rounded-full px-8 py-3 bg-[#ED2124] text-white">
              View All Products
            </Button>
          </div>
        </div>

        {/* Grid Layout: 
            - Mobile (<640px): 1 column
            - Tablet & iPad Pro (640px to 1279px): 2x2 grid (2 columns)
            - Desktop (>=1280px): 1x4 horizontal grid (4 columns)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {categories.map((cat, index) => (
            <div
              key={cat.name}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={150 * index}
              className="group bg-white border border-[#E5E7EB] rounded-sm p-4 sm:p-5 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Square Image Box */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-sm">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="card-title font-semibold text-[#272727] text-center mb-4">
                {cat.name}
              </h3>

              {/* Action Link with Arrow */}
              <button
                type="button"
                className="section-text text-accent font-medium text-xs sm:text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all cursor-pointer mt-auto"
              >
                View The Product
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="#ED2124"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}