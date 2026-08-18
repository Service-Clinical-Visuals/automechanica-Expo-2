"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left gap-6 lg:gap-6 lg:col-span-5" data-aos="fade-right">
            <div>
              <h2 className="section-title text-[#000000] exo-2-font font-bold leading-tight mb-2 text-4xl">
                About Twin Busch
              </h2>
              <h4 className="section-text text-[#000000] font-regular italic exo-2-font text-lg">
                Your Reliable Partner for Professional Workshop Equipment
              </h4>
            </div>

            <p className="section-text inter-font font-regular text-[#111111] tracking-normal leading-relaxed text-sm">
              Twin Busch® Germany is a trusted specialist in professional workshop equipment, offering innovative solutions designed to improve efficiency, safety, and performance. With a strong focus on vehicle lifts and tyre servicing, our portfolio includes 2-post, scissor, 1-post, 4-post, underground-post, and HGV lifts, alongside tyre changers, wheel balancers, and other essential workshop equipment.
            </p>

            <Button href="#" className="mt-2">
              Learn More
            </Button>
          </div>

          {/* Right Side: Masonry Images */}
          <div className="grid grid-cols-12 gap-3 lg:gap-4 w-full h-full mt-8 lg:mt-0 lg:col-span-7" data-aos="fade-left">
            <div className="flex flex-col gap-3 lg:gap-4 col-span-4 h-full">
              <img src="/moto/twin/abt2.png" alt="Twin Busch Facility" className="w-full h-full min-h-0 flex-1 object-cover rounded-xl" onError={(e) => { e.currentTarget.src = "/moto/twin/abt.png"; }} />
              <img src="/moto/twin/abt3.png" alt="Twin Busch Interior" className="w-full h-full min-h-0 flex-1 object-cover rounded-xl" onError={(e) => { e.currentTarget.src = "/moto/twin/abt.png"; }} />
              <img src="/moto/twin/abt4.png" alt="Twin Busch Interior" className="w-full h-full min-h-0 flex-1 object-cover rounded-xl" onError={(e) => { e.currentTarget.src = "/moto/twin/abt.png"; }} />
            </div>
            <div className="col-span-8 h-full">
              <img src="/moto/twin/abt1.png" alt="Twin Busch Team" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.currentTarget.src = "/moto/twin/abt.png"; }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
