"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Discover",
    desc: "To improve aspects of engine performance that are important to you, we first discover your goals and what you'd like to achieve.",
  },
  {
    title: "Assess",
    desc: "Next, we determine what are the limits of your vehicle's original manufacturer engine design, to ensure the safest upgrade.",
  },
  {
    title: "Calculate",
    desc: "With a better understanding of what your vehicle is capable of, we calculate what turbocharger, fuel and intercooling changes are required to meet your goals.",
  },
  {
    title: "Re-engineer",
    desc: "We provide you with a re-engineered solution that allows for the safest and most optimal performance at the new targeted state of tune.",
  }
];

export default function AboutUs() {


  return (
    <section className="w-full lg:w-[95%] py-16 lg:py-20 bg-white" id="about-us">
      <div className="custom-container">
        {/* Top Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center mb-16" data-aos="fade-up">
          {/* Left: Image */}
          <div className="rounded-[10px] overflow-hidden shadow-md w-full h-full">
            <img
              src="/moto/gtturbo/abt.png"
              alt="Graeme Bentink - Founder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 text-[#E02027] font-semibold mb-4">
              <div className="w-8 rounded-[5px] h-[4px] bg-[#E02027]"></div>
              <span>About Us</span>
            </div>

            <h2 className="text-[#000000] font-semibold leading-[1.2] mb-6">
              Engineering the most powerful driving experiences
            </h2>

            <p className="text-[#484848] font-regular leading-[1.8] mb-6">
              Founded on a passion for travelling and exploring the beautiful landscape of Australia, Graeme Bentink, Founder of GTurbo, faced many challenges in the outback, including an underpowered and unreliable 4WD that burnt through fuel. Realising there was so much potential to be gained from his factory LandCruisier, this sparked the beginning of what would be known as one of the greatest high performance diesel turbos ever to be made.
            </p>

            <p className="text-[#484848] font-regular leading-[1.8] mb-6">
              Applying his knowledge and technical expertise in process engineering and metallurgy, Graeme channelled his energy and passion to designing turbos and vehicle modifications for diesel engines, with one very clear mission.
            </p>

            <p className="text-[#E02027] font-semibold leading-[1.6] mb-8 pr-4">
              To deliver unrivalled diesel performance and give people the power to experience the impossible.
            </p>

            {/* Button */}
            <button className="button flex items-center gap-4 bg-[#0B0E17] text-white font-regular px-6 py-2.5 rounded-full hover:bg-[#131A2B] transition-colors group">
              Know About Us
              <div className="bg-[#E02027] text-white rounded-full p-1.5 group-hover:scale-110 transition-transform">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[10px] p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[#E02027] font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-[#484848] font-regular leading-[1.6]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
