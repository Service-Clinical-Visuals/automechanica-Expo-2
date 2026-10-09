import React from "react";
import Container from "./Container";

export default function About() {
  const stats = [
    {
      icon: "/moto/gli-therm/abt-i-1.webp",
      value: "2012",
      label: "Year of Establishment",
    },
    {
      icon: "/moto/gli-therm/abt-i-2.webp",
      value: "5770 L",
      label: "coffee consumed annually",
    },
    {
      icon: "/moto/gli-therm/abt-i-3.webp",
      value: "82 580",
      label: "completed deliveries",
    },
    {
      icon: "/moto/gli-therm/abt-i-4.webp",
      value: "112 824 640 L",
      label: "produced liters",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h4 className="text-[#F14646] font-bold text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] mb-3 bricolage-font">
              About GLITHERM
            </h4>
            <h2 className="text-[30px] 2xl:text-[45px] min-[2000px]:text-[60px] font-bold text-[#111111] leading-[1.2] mb-6 bricolage-font">
              Delivering Chemical Solutions Through <span className="underline decoration-2 underline-offset-4">Q</span>uality
            </h2>
            <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-relaxed mb-8 w-full lg:w-[85%] inter-font">
              GLITHERM provides specialized chemical products and services designed to meet the evolving needs of industrial, automotive, and heating applications. With a focus on product quality, technical knowledge, and customer satisfaction, the company delivers dependable solutions that support efficient system performance and long-term reliability.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group flex flex-col justify-center gap-1 p-5 rounded-[5px] border border-gray-300 bg-white min-h-[90px] transition-all duration-300 hover:bg-[#F14646] hover:border-[#F14646] cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full border border-transparent bg-[#F14646]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-transparent group-hover:border-white">
                      <img src={stat.icon} alt={stat.label} className="w-5 h-5 object-contain opacity-80 transition-all duration-300 [filter:brightness(0)_saturate(100%)_invert(35%)_sepia(85%)_saturate(2405%)_hue-rotate(338deg)_brightness(98%)_contrast(92%)] group-hover:[filter:brightness(0)_invert(1)]" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-[#111111] text-[24px] 2xl:text-[32px] min-[2000px]:text-[40px] leading-tight bricolage-font transition-colors duration-300 group-hover:text-white">{stat.value}</h4>
                      <p className="text-[#555555] text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] font-medium inter-font transition-colors duration-300 group-hover:text-white">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="border border-[#F14646] text-[#F14646] rounded-[10px] px-8 py-3.5 text-[18px] 2xl:text-[24px] min-[2000px]:text-[32px] 2xl:text-[32px] min-[2000px]:text-[40px] font-semibold hover:bg-[#F14646] hover:text-white transition-colors bricolage-font">
              Explore Mesh Technology
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="100">
            <div className="rounded-[16px] overflow-hidden w-full h-full">
              <img
                src="/moto/gli-therm/about.webp"
                alt="GLITHERM Facility"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
