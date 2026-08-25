"use client";

import React from "react";

export default function Quality() {
  return (
    <section className="py-16 xl:py-20 relative overflow-hidden bg-white">
      <div className="custom-container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h3 className="text-[#10276D] section-text font-semibold mb-2 rubik-font text-sm">
            Product Testing & Quality Control
          </h3>
          <h2 className="section-title text-[#202020] rubik-font font-semibold mb-6">
            Ensuring Reliability Through Rigorous Testing Standards
          </h2>
          <p className="inter-font font-regular text-[#404040] section-text max-w-7xl mx-auto leading-relaxed">
            Every Product Undergoes Comprehensive Quality Control Procedures To Ensure Superior Performance, Durability, And Safety. Using Advanced Testing Methods And Strict Inspection Protocols, We Guarantee That Each Component Meets Industry Standards And Delivers Consistent, Reliable Operation In All Conditions. Our Commitment To Precision And Excellence Ensures Products You Can Trust.
          </p>
        </div>

        {/* Large Image */}
        <div className="w-full max-w-7xl h-full rounded-[8px] overflow-hidden flex item-center justify-center mx-auto" data-aos="fade-up" data-aos-delay="200">
          <img
            src="/moto/famco/quality.png"
            alt="Quality Control Testing"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-[500px] bg-gray-200 flex items-center justify-center text-gray-500 rounded-[8px]">Image Placeholder</div>' }}
          />
        </div>

      </div>
    </section>
  );
}
