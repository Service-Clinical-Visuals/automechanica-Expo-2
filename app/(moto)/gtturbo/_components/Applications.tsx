"use client";

import React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const products = [
  { title: "Toyota Landcruiser VD-G333 Titan", image: "/moto/gtturbo/p1.png" },
  { title: "GTurbo Airbox N70 Hilux", image: "/moto/gtturbo/p2.png" },
  { title: "Toyota Hilux KD-G250 Titan", image: "/moto/gtturbo/p3.png" },
  { title: "GTurbo Airbox GDJ70", image: "/moto/gtturbo/p4.png" },
];

export default function Applications() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="custom-container">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6" data-aos="fade-up">
          <div>
            <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4">
              <div className="w-8 h-[2px] bg-[#E02027]"></div>
              <span>Our Products</span>
            </div>
            <h2 className="text-[#000000] font-semibold">
              Best Sellers Products
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button aria-label="Previous Products" className="bg-[#E02027] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow-sm">
              <ArrowLeft size={22} strokeWidth={2.5} />
            </button>
            <button aria-label="Next Products" className="bg-[#E02027] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow-sm">
              <ArrowRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 shadow-[0px_3px_8px_0px_#0000003D] rounded-[5px] p-6 lg:p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-full aspect-[4/3] flex items-center justify-center mb-6 bg-white overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <h3 className="text-[#000000] font-semibold text-center mb-6 h-12 flex items-center justify-center">
                {product.title}
              </h3>
              
              <button className="button flex items-center gap-4 bg-[#0B0E17] text-white font-regular px-5 py-2 rounded-full hover:bg-[#131A2B] transition-colors mt-auto w-fit">
                View Product
                <div className="bg-[#E02027] text-white rounded-full p-1.5 shadow-sm">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
