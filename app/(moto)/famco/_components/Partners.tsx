"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

export default function Partners() {
  const newProducts = [
    {
      image: "/moto/famco/np1.png",
      category: "Others - Spare Parts",
      number: "09.1813.00",
    },
    {
      image: "/moto/famco/np2.png",
      category: "Others - Spare Parts",
      number: "05.1901.00",
    },
    {
      image: "/moto/famco/np3.png",
      category: "Others - Spare Parts",
      number: "03.6901.00",
    },
    {
      image: "/moto/famco/np4.png",
      category: "Others - Spare Parts",
      number: "06.2404.00",
    }
  ];

  return (
    <section className="py-10 lg:py-20 bg-white relative">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h3 className="text-[#10276D] section-text font-semibold mb-2 rubik-font text-sm">
            Our New Products
          </h3>
          <h2 className="section-title text-[#202020] rubik-font font-semibold mb-6">
            Introducing Our Latest Innovation In Performance
          </h2>
          <p className="inter-font text-[#404040] section-text max-w-[90%] lg:max-w-[80%] mx-auto leading-relaxed">
            Discover Our Newest Product, Engineered To Deliver Superior Performance, Durability, And Efficiency. Designed With Advanced Technology And Precision Manufacturing, It Meets The Highest Industry Standards While Ensuring Reliable Operation In Every Condition. Built To Enhance Performance And Extend Lifespan, This Product Reflects Our Commitment To Quality And Innovation.
          </p>
        </div>

        {/* Carousel / Grid Area */}
        <div className="relative flex items-center justify-between w-full" data-aos="fade-up" data-aos-delay="200">

          {/* Left Arrow */}
          <button className="hidden xl:flex w-[2em] h-[2em] rounded-full border border-[#282361] items-center justify-center text-[#282361] hover:bg-[#282361] hover:text-white transition-colors absolute -left-[3em] top-1/2 -translate-y-1/2 section-text">
            <ArrowLeft size="1em" />
          </button>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mx-auto w-full">
            {newProducts.map((product, index) => (
              <div key={index} className="group flex flex-col bg-white border border-[#CCCCCC] rounded-[8px] text-center transition-all duration-300 hover:border-[#282361] hover:shadow-lg">

                {/* Image Container */}
                <div className="w-full h-[220px] bg-gray-50/50 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.number}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center justify-center pt-6 pb-6 transition-all duration-300">
                  <span className="text-[#9F9F9F] card-text font-semibold inter-font mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-[#404040] rubik-font font-semibold card-title transition-colors duration-300 group-hover:text-[#282361]">
                    {product.number}
                  </h3>

                  {/* Hover Buttons */}
                  <div className="flex items-center gap-3 w-auto px-6 overflow-hidden transition-all duration-500 ease-in-out max-h-[60px] opacity-100 mt-5 xl:max-h-0 xl:opacity-0 xl:mt-0 xl:group-hover:max-h-[60px] xl:group-hover:opacity-100 xl:group-hover:mt-5">
                    <button className="flex-1 py-2 px-5 rounded-[6px] border border-[#282361] text-[#282361] font-semibold text-sm hover:bg-[#282361] hover:text-white transition-colors">
                      View Product
                    </button>
                    <button className="p-2 rounded-[6px] border border-[#282361] text-[#282361] hover:bg-[#282361] hover:text-white transition-colors flex items-center justify-center">
                      <Heart size="1.25em" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden xl:flex w-[2em] h-[2em] rounded-full border border-[#282361] items-center justify-center text-[#282361] hover:bg-[#282361] hover:text-white transition-colors absolute -right-[3em] top-1/2 -translate-y-1/2 section-text">
            <ArrowRight size="1em" />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-[0.375em] mt-8 section-text">
          <div className="w-[0.5em] h-[0.5em] rounded-full bg-[#282361]"></div>
          <div className="w-[0.5em] h-[0.5em] rounded-full bg-gray-300"></div>
          <div className="w-[0.5em] h-[0.5em] rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
}
