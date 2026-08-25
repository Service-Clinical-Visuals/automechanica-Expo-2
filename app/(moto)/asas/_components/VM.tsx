"use client";

import React from "react";
import Button from "./Button";

const items = [
  {
    title: "Our Mission",
    icon: "/moto/asas/vm1.png",
    paragraphs: [
      "To achieve our vision by becoming an innovative and responsible organization that develops advanced filter products by embracing the latest technologies, understanding market needs, and expanding our global presence. We collaborate with skilled and environmentally conscious suppliers to deliver reliable filtration solutions that meet industry standards.",
      "We value our employees, support sustainability, and minimize risks through responsible practices. By delivering quality filtration solutions and reliable service, we ensure customer satisfaction and lasting trust in the automotive industry.",
    ],
  },
  {
    title: "Our Vision",
    icon: "/moto/asas/vm2.png",
    paragraphs: [
      "To be a leading brand that designs and produces high-quality filtration solutions for the automotive industry, recognized for innovation, advanced technology, reliability, and continuous improvement. We aim to develop efficient and sustainable filter products that meet the evolving needs of customers worldwide while contributing to a safer, cleaner, and more efficient automotive future.",
      "Through continuous innovation and advanced technology, we create reliable filtration solutions that deliver lasting value and superior performance for our automotive partners.",
    ],
  },
];

export default function VM() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-x-clip">
      <div className="custom-container">
        {/* Header Block */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center w-full max-w-3xl min-[2000px]:max-w-full mx-auto mb-16 sm:mb-20 md:mb-24 px-2"
        >
          <h2 className="section-title font-semibold text-heading mb-4 text-2xl sm:text-3xl md:text-4xl min-[2000px]:text-5xl leading-tight sm:leading-snug">
            Our Mission &amp; Vision
          </h2>
          <p className="section-text text-base sm:text-lg min-[2000px]:text-xl min-[2000px]:max-w-full leading-relaxed text-[#4B5563]">
            Driven by innovation and excellence, we aim to create advanced
            filtration solutions for the automotive industry while
            maintaining quality, sustainability, and customer-focused values.
          </p>
        </div>

        {/* Mission & Vision Cards Grid */}
        <div className="grid min-[1026px]:grid-cols-2 gap-10 min-[1026px]:gap-12 items-stretch">
          {items.map((item, index) => (
            <div
              key={item.title}
              data-aos={index === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="800"
              data-aos-delay={200 * index}
              className="relative bg-white rounded-[23px] shadow-[0px_7px_29px_rgba(100,100,111,0.2)] pt-[70px] min-[1026px]:pt-[100px] pb-10 px-6 min-[1026px]:px-10 flex flex-col text-center min-[1026px]:text-left transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div 
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={300 + index * 100}
                className="absolute -top-8 min-[1026px]:-top-[43px] left-1/2 -translate-x-1/2 min-[1026px]:left-0 min-[1026px]:translate-x-0 w-[100px] h-[100px] min-[1026px]:w-[143px] min-[1026px]:h-[143px] rounded-full bg-accent border-[5px] border-white flex items-center justify-center shadow-md"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 min-[1026px]:w-14 min-[1026px]:h-14 aspect-square object-contain"
                />
              </div>
              <h3 className="card-title-sm font-semibold text-[#111827] mb-4">
                {item.title}
              </h3>
              {item.paragraphs.map((p, i) => (
                <p key={i} className="section-text mb-4 last:mb-0 text-[#4B5563]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="flex flex-col min-[1026px]:flex-row items-center justify-between gap-6 mt-16 text-center min-[1026px]:text-left"
        >
          <p className="section-text max-w-2xl min-[2000px]:max-w-full text-[#4B5563]">
            Together, our mission and vision inspire continuous innovation,
            exceptional quality, and reliable filtration solutions that
            support the evolving needs of the global automotive industry.
          </p>
          <Button variant="primary" className="flex-shrink-0">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}