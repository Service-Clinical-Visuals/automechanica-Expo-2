"use client";

import React from "react";
import Button from "./Button";

const productsData = [
  { id: 1, name: "Disc Brake Pads", img: "/moto/eren/1.png" },
  { id: 2, name: "Drum Brake Linings", img: "/moto/eren/2.png" },
  { id: 3, name: "Off-Road Brake Linings", img: "/moto/eren/3.png" },
  { id: 4, name: "Brake Linings", img: "/moto/eren/4.png" },
];

export default function Products() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        
        {/* Section Title with Lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 md:w-16 h-[3px] bg-[var(--color-primary)]"></div>
           <h2 className="section-title barlowCondensed font-bold text-[#000000]">Explore Our Range</h2>
          <div className="w-12 md:w-16 h-[3px] bg-[var(--color-primary)]"></div>
        </div>

        {/* Section Description */}
            <p className="section-text inter leading-relaxed text-[#111111] mb-12 max-w-6xl mx-auto text-center">
          Discover our range of precision-engineered brake pads, developed to deliver dependable stopping power, consistent friction, and long-lasting performance. Designed for different vehicle applications, each product combines quality materials, accurate fitment, and durable construction to meet demanding braking requirements.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 mb-10">
          {productsData.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 shadow-sm flex flex-col h-full rounded-sm">
         
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain mb-6 "
                />

              {/* Card Content */}
              <div className="px-4 pb-16 flex flex-col flex-grow items-center text-center relative">
                <h3 className="section-subtitle barlowCondensed font-semibold text-[#1a1a1a] mb-6 flex-grow">{product.name}</h3>
                
                 <div className="absolute left-1/2 -translate-x-1/2 -bottom-[1px] z-20 block min-[2560px]:hidden">
                    <div
                      className="
                        bg-white
                        p-[4px]
                        rounded-[3px]
                        shadow-[0_1px_4px_rgba(0,0,0,0.18)]
                        [clip-path:inset(-10px_-10px_0_-10px)]
                      "
                    >
                      <Button
                       text="View Products"
                        className="
                        barlowCondensed
                          !bg-[var(--color-primary)]
                          hover:!bg-blue-800/90
                          !text-white
                          !border-none
                          !rounded-[3px]
                          !shadow-none
                          !font-normal
                          !btn-text
                          !px-[12px]
                          !py-[6px]
                          !min-h-0
                          !w-auto
                          
                          whitespace-nowrap
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom Notch Area - 2K & 4K (>= 2560px) */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[18px] z-20 hidden min-[2560px]:block">
                    <div
                      className="
                        bg-white
                        p-[5px]
                        rounded-[4px]
                        shadow-[0_4px_8px_rgba(0,0,0,0.15)]
                        [clip-path:inset(0px_-15px_-15px_-15px)]
                      "
                    >
                      <Button
                      text="View Products"
                        className="
                        barlowCondensed
                          !bg-[var(--color-primary)]
                          hover:!bg-blue-800/90
                          !text-white
                          !border-none
                          !rounded-[3px]
                          !shadow-none
                          !font-normal
                          !btn-text
                          !px-[12px]
                          !py-[6px]
                          !min-h-0
                          !w-auto
                          whitespace-nowrap
                        "
                      />
                       
                    </div>
                  </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* View All Categories Link */}
        {/* <div className="flex justify-end pr-4">
          <button className="text-red-500 font-body text-sm hover:text-red-700 transition-colors">
            View All Categories
          </button>
        </div> */}

      </div>
    </section>
  );
}
