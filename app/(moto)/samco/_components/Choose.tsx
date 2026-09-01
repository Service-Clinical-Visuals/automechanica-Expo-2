"use client";

import React from "react";

const REASONS = [
  {
    number: "01",
    icon: "/moto/samco/1.png",
    title: "OEM Quality",
    description:
      "Engineered and manufactured under rigorous quality standards to ensure reliability, consistency, and optimal performance",
  },
  {
    number: "02",
    icon: "/moto/samco/2.png",
    title: "Global Reach",
    description:
      "Serving customers across more than 50 countries worldwide, delivering reliable solutions backed by quality and global expertise",
  },
  {
    number: "03",
    icon: "/moto/samco/3.png",
    title: "Custom Solutions",
    description:
      "Tailored solutions designed to meet your specific needs, ensuring optimal performance, efficiency, and reliable results",
  },
  {
    number: "04",
    icon: "/moto/samco/4.png",
    title: "Quality Assurance",
    description:
      "Advanced quality control systems at every stage of production, ensuring precision, reliability, and consistent results",
  },
  {
    number: "05",
    icon: "/moto/samco/5.png",
    title: "Fast Dispatching",
    description:
      "Efficient and fast dispatch services that guarantee quick order processing and on-time delivery",
  },
  {
    number: "06",
    icon: "/moto/samco/6.png",
    title: "Competitive Pricing",
    description:
      "We combine aesthetics and functionality in our product packaging, creating distinctive visibility on shelves.",
  },
];

export default function Choose() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="why-choose">
      <div className="custom-container">
        {/* Section Title */}
        <h2 
          data-aos="fade-down"
          data-aos-duration="700"
          className="section-title font-medium text-dark capitalize text-center mb-6"
        >
          Why Choose Samco?
        </h2>

        {/* Subtitle paragraph */}
        <p 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
          className="section-text text-center max-w-4xl xl:max-w-[70%] mx-auto mb-16"
        >
          With a strong foundation in OEM-quality manufacturing and a
          presence across global markets, we are committed to delivering
          reliable, high-performance solutions tailored to evolving customer
          needs. Our expertise in custom development, combined with strict
          quality assurance processes, ensures that every product meets the
          highest industry standards. Backed by efficient operations and
          competitive pricing, we provide consistent value while maintaining
          uncompromised quality—making us a dependable partner for both OEM
          and aftermarket requirements worldwide.
        </p>

        {/* Grid Container - Switches to 3 columns above 1025px (xl breakpoint) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {REASONS.map(({ number, icon, title, description }, index) => (
            <div
              key={number}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={250 + index * 100}
              className="group border border-[#D0D5DD] hover:border-primary rounded-[5px] p-8 flex flex-col items-center text-center bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full mb-6">
                <span
                  className="absolute top-0 left-0 text-[52px] leading-none font-light select-none text-black group-hover:text-primary transition-colors duration-300"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    WebkitTextStroke: "1px #000000",
                    color: "transparent",
                  }}
                >
                  {number}
                </span>
                <div className="flex justify-center pt-1">
                  <img
                    src={icon}
                    alt={title}
                    className="w-20 h-20 aspect-square object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="card-title font-medium text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="card-text text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}