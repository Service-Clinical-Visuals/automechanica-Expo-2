"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-20 bg-[#FAFAFA]">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* Left: Images */}
          <div className="w-full h-full lg:col-span-6" data-aos="fade-right">
            <img
              src="/moto/bendpak/abt.png"
              alt="BendPak Facility"
              className="w-full h-full object-cover rounded-[5px]"
            />
          </div>

          {/* Right: Text Content (Card) */}
          <div
            className="w-full lg:col-span-6 bg-white p-8 md:p-12 lg:p-16 z-10 flex flex-col items-start text-left mt-8 lg:mt-0 -lg:-ml-12"
            data-aos="fade-left"
            style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}
          >
            <h2 className="section-title text-[#000000] montserrat-font font-bold mb-6">
              About BendPak
            </h2>

            <p className="inter-font text-[#000000] font-normal section-text tracking-normal leading-relaxed mb-6">
              BendPak is a globally recognized manufacturer of automotive service equipment with a history dating back to 1965. What began as a small tubing company has evolved into a leading name in the automotive equipment industry, serving repair shops, dealerships, tire centers, performance facilities, and professional workshops worldwide. The company offers a wide range of solutions, including automotive lifts, wheel service equipment, and professional shop equipment, all developed with a strong focus on safety and ease of use. With decades of industry experience, BendPak combines engineering expertise and professional knowledge to create equipment that meets the demanding requirements of modern automotive service operations.
            </p>

            <p className="inter-font text-[#000000] font-normal section-text tracking-normal leading-relaxed mb-8">
              BendPak continues to strengthen its global manufacturing capabilities while maintaining strict quality standards throughout the product development and manufacturing process. The company also emphasizes responsible business practices, environmental awareness, innovation, and continuous improvement as part of its long-term vision.
            </p>

            <Button href="#" variant="primary" className="!w-auto !rounded-[2px]">
              Learn More
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
