"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const SOLUTIONS = [
  {
    icon: "/moto/samco/s1.png",
    title: "Filters",
    description:
      "5,000 Variants of Air, Oil, Fuel, Cabin & Hydraulic filters available",
  },
  {
    icon: "/moto/samco/s2.jpg",
    title: "Air Suspension System",
    description: "Advanced suspension solutions for maximum comfort & safety",
  },
  {
    icon: "/moto/samco/s3.png",
    title: "Engine Components",
    description: "Precision-engineered components for optimum engine performance",
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 group-hover/card:translate-x-1 transition-transform duration-300"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="#BA0C2F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Solutions() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-light overflow-x-clip" id="mobility-solutions">
      <div className="custom-container">
        {/* 1 column up to 1025px, 2 columns at 1026px+ */}
        <div className="grid grid-cols-1 min-[1026px]:grid-cols-2 gap-10 min-[1026px]:gap-16 items-center">
          
          {/* Copy Column */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 bg-primary flex-shrink-0" />
              <span className="section-label">Mobility Solutions</span>
            </div>

            <h2 className="section-title font-medium text-dark capitalize mb-4">
              Components That Drive Performance
            </h2>

            <p className="section-text mb-8">
              From filtration to suspension and engine components, our
              products are engineered to deliver reliable performance,
              efficiency, and long service life across a wide range of
              applications.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {SOLUTIONS.map(({ icon, title, description }, index) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={200 + index * 100}
                  className="group/card flex items-center justify-between gap-4 border border-[#202020] rounded-xs bg-white px-6 py-4 hover:border-primary transition-colors duration-300 shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={icon}
                      alt={title}
                      className="w-12 h-12 aspect-square object-contain flex-shrink-0"
                    />
                    <div>
                      <h3 className="subheading font-medium text-dark mb-1">
                        {title}
                      </h3>
                      <p className="card-text">{description}</p>
                    </div>
                  </div>
                  <ArrowRightIcon />
                </div>
              ))}
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="550"
            >
              <Button variant="outline-primary">Explore All Products</Button>
            </div>
          </div>

          {/* Video Column */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="w-full aspect-video rounded-xs overflow-hidden bg-gray-200 shadow-md border border-gray-100"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}