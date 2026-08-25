"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const certifications = [
  {
    code: "IATF 16949",
    label: "Quality Management System",
    image: "/moto/asas/c1.jpg",
  },
  {
    code: "ISO 14001:2015",
    label: "Quality Management System",
    image: "/moto/asas/c2.jpg",
  },
  {
    code: "ISO 45001:2018",
    label: "Quality Management System",
    image: "/moto/asas/c3.jpg",
  },
  {
    code: "ISO 9001:2015",
    label: "Quality Management System",
    image: "/moto/asas/c4.jpg",
  },
];

export default function Certifications() {
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-x-clip">
      <div className="custom-container px-4 sm:px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div 
            data-aos="fade-right"
            data-aos-duration="800"
            className="max-w-2xl"
          >
            <h2 className="section-title font-semibold text-heading mb-4">
              Milestones &amp; Certifications
            </h2>
            <p className="section-text text-[var(--color-body)] leading-relaxed">
              Showcasing our journey of growth, innovation, and continuous
              improvement with a strong commitment to internationally
              recognized quality standards and excellence.
            </p>
          </div>
          
          <div 
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <Button variant="primary" className="flex-shrink-0 rounded-full px-8 py-3 bg-[#ED2124] text-white">
              View All
            </Button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.code}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={150 * index}
              className="bg-white border border-[#E5E7EB] rounded-sm flex flex-col pb-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Certificate Image Container */}
              <div className="relative w-full p-5 pb-0">
                <div className="relative w-full aspect-[343/372] border border-black/15 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.code}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* View Overlay Button */}
                <button
                  type="button"
                  aria-label="View certification"
                  className="absolute bottom-2 right-7 w-9 h-9 rounded-[10px] bg-[#2362a1]/80 hover:bg-[#2362a1] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12C4 7 8 4 12 4C16 4 20 7 22 12C20 17 16 20 12 20C8 20 4 17 2 12Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>

              {/* Certificate Meta Details */}
              <div className="px-5 pt-4 flex flex-col flex-grow">
                <h3 className="card-title-sm font-semibold text-[#202020] mb-1">
                  {cert.code}
                </h3>
                <p className="section-text text-[#4b5663] text-sm mb-4">
                  {cert.label}
                </p>
                <button
                  type="button"
                  className="section-text text-[#2362a1] font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all cursor-pointer mt-auto"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3V15M12 15L7 10M12 15L17 10M4 19H20"
                      stroke="#2362A1"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}