"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import Button from "./Button";

export default function Partners() {
  const newProducts = [
    {
      image: "/moto/kameks/p1.png",
      badge: "Standard",
      model: "KMS 11002",
      oem: "11311709580",
      material: "Casting"
    },
    {
      image: "/moto/kameks/p2.png",
      badge: "Standard",
      model: "KMS 11003",
      oem: "11317500935",
      material: "Casting"
    },
    {
      image: "/moto/kameks/p3.png",
      badge: "Performance",
      model: "KMS 10911",
      oem: "059 109 021 BQ",
      material: "Casting"
    },
    {
      image: "/moto/kameks/p4.png",
      badge: "Special Eccentric",
      model: "KMS 10909",
      oem: "059 109 022 BC",
      material: "Casting"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h3 className="text-[#F12535] section-text font-semibold mb-2 poppins-font">
            Our Camshaft Catalogue
          </h3>
          <h2 className="section-title text-[#202020] poppins-font font-semibold mb-6">
            Smarter Parts. Stronger Performance.
          </h2>
          <p className="inter-font text-[#404040] section-text max-w-7xl mx-auto leading-relaxed">
            High-performance automotive products engineered for reliability, durability, & everyday efficiency. From essential components to advanced solutions, our range is designed to support every vehicle & every journey.
          </p>
        </div>

        {/* Carousel / Grid Area */}
        <div className="relative flex items-center justify-between H-FULL w-full" data-aos="fade-up" data-aos-delay="200">

          {/* Left Arrow */}
          <button className="hidden xl:flex w-8 h-8 rounded-full border border-[#F12535] items-center justify-center text-[#F12535] hover:bg-[#F12535] hover:text-white transition-colors absolute -left-12 top-1/2 -translate-y-1/2">
            <ArrowLeft size={16} />
          </button>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto w-full">
            {newProducts.map((product, index) => (
              <div key={index} className="group flex flex-col bg-white border-1 border-[#CCCCCC] rounded-[8px] transition-all duration-300 hover:border-[#F12535] hover:shadow-lg relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[#F12535] border border-[#F12535] rounded-[4px] px-2 py-0.5 text-[10px] font-medium poppins-font bg-white">
                    {product.badge}
                  </span>
                </div>

                {/* Image Container */}
                <div className="w-full h-full bg-[#F8F9FA] flex items-center justify-center m-2 mr-2">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start pt-6 pb-6 px-5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-0.5 h-4 bg-[#F12535]"></span>
                    <h3 className="poppins-font font-semibold text-[15px]">
                      <span className="text-[#F12535] font-semibold card-title">Modal No : </span>
                      <span className="text-[#202020] font-semibold card-title">{product.model}</span>
                    </h3>
                  </div>

                  <div className="inter-font font-semibold text-[13px] text-[#202020] mb-2">
                    OEM : <span className="text-[#404040] font-semibold card-title">{product.oem}</span>
                  </div>
                  <div className="inter-font font-semibold text-[13px] text-[#202020] mb-5">
                    Material : <span className="font-semibold card-title text-[#404040]">{product.material}</span>
                  </div>

                  <Button href="#" variant="outline" className="w-full py-2.5 rounded-[6px] !border-[1px] !border-[#F12535] !text-[#F12535] font-semibold text-xs poppins-font bg-transparent hover:!bg-[#F12535] hover:!text-white transition-colors flex items-center justify-center">
                    View Product
                  </Button>
                </div>

              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hover:bg-[#F12535] hover:text-white transition-colors absolute">
            <ArrowRight size={16} />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-8">
          <div className="w-3 h-3 rounded-full bg-[#F12535]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
}
