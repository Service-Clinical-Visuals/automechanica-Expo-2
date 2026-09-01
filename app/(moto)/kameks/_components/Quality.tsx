"use client";

import React from "react";

export default function Quality() {
  return (
    <section className="py-10 lg:py-20 relative overflow-hidden bg-white">
      <div className="custom-container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h3 className="text-[#F12535] section-text font-semibold mb-2 poppins-font">
            Standards That Matter
          </h3>
          <h2 className="section-title text-[#202020] poppins-font font-semibold mb-6">
            Committed to Certified Quality & Excellence
          </h2>
          <p className="inter-font font-regular text-[#404040] section-text max-w-7xl mx-auto leading-relaxed">
            At SNDC, quality is at the core of everything we do. Guided by internationally recognized standards and certified quality management systems, we deliver reliable, high-performance solutions through precision engineering, rigorous testing, and continuous improvement.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {[1, 2, 3].map((num) => (
            <div key={num} className="w-full h-full flex items-center justify-center bg-white border-0.5 border-[#CCCCCC] transition-shadow duration-300">
              <img
                src={`/moto/kameks/c${num}.png`}
                alt={`Certificate ${num}`}
                className="w-full h-full object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-[300px] bg-gray-50 flex items-center justify-center text-gray-400">Certificate Placeholder</div>' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
