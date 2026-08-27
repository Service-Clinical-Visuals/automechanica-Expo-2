"use client";

import React from "react";
import Button from "./Button";

const STATS = [
  {
    icon: "/moto/samco/filter.png",
    value: "30+M",
    label: "Parts Produced every Year",
  },
  {
    icon: "/moto/samco/cube.png",
    value: "5000+",
    label: "Product varients Available",
  },
  {
    icon: "/moto/samco/global.png",
    value: "Global",
    label: "OEM & Aftermarket Supplier",
  },
  {
    icon: "/moto/samco/prize.png",
    value: "Quality",
    label: "Tested. Certified. Trusted Worldwide.",
  },
];

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden" id="about">
      <div className="custom-container">
        {/* Top: image + copy */}
        <div className="grid grid-cols-1 min-[1026px]:grid-cols-2 gap-10 min-[1026px]:gap-16 items-center">
          
          {/* Facility image with subtle hover zoom */}
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-full aspect-video rounded-xs overflow-hidden shadow-[0px_7px_29px_rgba(100,100,111,0.2)] group"
          >
            <img
              src="/moto/samco/about.png"
              alt="SAMCO manufacturing facility"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Copy */}
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
            className="w-full min-[2000px]:max-w-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 bg-primary flex-shrink-0" />
              <span className="section-label">About Company</span>
            </div>

            <h2 className="section-title font-medium text-dark capitalize mb-6">
              Powering Performance For Mobility
            </h2>

            <div className="flex flex-col gap-4 mb-8 min-[2000px]:max-w-full">
              <p className="section-text text-justify min-[2000px]:max-w-full">
                Through our IATF-certified manufacturing facilities and
                owner-managed structure, we provide the flexibility needed to
                adapt to changing market demands while maintaining the
                highest standards of product quality. This strong foundation
                allows us to consistently deliver reliable solutions tailored
                to our customers and partners.
              </p>
              <p className="section-text text-justify min-[2000px]:max-w-full">
                Our commitment to a customer-focused approach has been
                recognized through supplier awards from leading OEMs. By
                combining high-quality products, adaptability to customer and
                environmental requirements, and a comprehensive service
                mindset, we have built a company culture defined by
                reliability, innovation, and long-term partnership.
              </p>
            </div>

            <Button variant="outline-primary">Explore Products</Button>
          </div>
        </div>

        {/* Bottom: driven by quality + stats bar */}
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
          className="flex flex-col min-[1026px]:flex-row gap-8 min-[1026px]:gap-10 items-start min-[1026px]:items-center mt-16"
        >
          <div className="w-full min-[1026px]:w-auto min-[1026px]:max-w-xs min-[2000px]:max-w-full flex-shrink-0">
            <h3 className="subheading font-medium text-dark capitalize mb-2">
              Driven By Quality
            </h3>
            <p className="card-text min-[2000px]:max-w-full">
              Delivering high-volume production, extensive product variety, &
              globally trusted quality standards for OEM and aftermarket
              solutions.
            </p>
          </div>

          <div className="w-full border border-primary rounded-xs overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#FFE2E7]">
              {STATS.map(({ icon, value, label }, index) => (
                <div
                  key={value}
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={400 + index * 100}
                  className="flex-1 flex items-center gap-4 px-6 py-6 hover:bg-[#FFF5F7] transition-colors duration-300"
                >
                  <img
                    src={icon}
                    alt=""
                    className="w-10 h-10 aspect-square object-contain flex-shrink-0"
                  />
                  <div>
                    <p className="stat-number">{value}</p>
                    <p className="stat-label">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}