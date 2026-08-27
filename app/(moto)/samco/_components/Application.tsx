"use client";

import React from "react";

const APPLICATIONS = [
  {
    photo: "/moto/samco/p1.jpg",
    badge: "/moto/samco/car.png",
    title: "Passenger Vehicle",
    description:
      "Ensuring smooth operation and consistent performance for today's advanced vehicles",
  },
  {
    photo: "/moto/samco/p2.jpg",
    badge: "/moto/samco/cycle.png",
    title: "Commercial Trucks",
    description:
      "Built to withstand demanding conditions while delivering efficient, long-lasting performance",
  },
  {
    photo: "/moto/samco/p3.jpg",
    badge: "/moto/samco/truck.png",
    title: "Agriculture",
    description:
      "Designed to support high-load machinery with reliable strength and endurance",
  },
  {
    photo: "/moto/samco/p4.jpg",
    badge: "/moto/samco/last.png",
    title: "Industrial Machines",
    description:
      "Engineered for extreme environments, ensuring durability, reliability, and consistent results",
  },
];

export default function Application() {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="application">
      <div className="custom-container">
        {/* Header Label */}
        <div 
          data-aos="fade-down"
          data-aos-duration="700"
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="w-5 h-5 bg-primary flex-shrink-0" />
          <span className="section-label">Application</span>
        </div>

        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="section-title font-medium text-dark capitalize text-center mb-6"
        >
          Built For Every Journey, Delivering Reliable Performance And
          Comfort At Every Mile
        </h2>

        {/* Subtitle paragraph */}
        <p 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="section-text text-center max-w-4xl min-[2000px]:max-w-full mx-auto mb-16"
        >
          Our components are trusted across a wide range of vehicles and
          industries worldwide, delivering reliable performance, durability,
          and consistent quality. Designed to meet diverse application
          needs, they support efficient operation and long-term reliability
          in demanding environments.
        </p>

        {/* Card Grid with Staggered AOS Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:max-[1025px]:grid-cols-2 gap-6">
          {APPLICATIONS.map(({ photo, badge, title, description }, index) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={300 + index * 125}
              className="group border border-[#202020] rounded-xs overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full aspect-[377/200] overflow-hidden">
                <img
                  src={photo}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="relative px-6 pb-6">
                <div className="w-[50px] h-[50px] -mt-[25px] mb-4 rounded-full bg-[#F3F3F3] flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors duration-300">
                  <img
                    src={badge}
                    alt=""
                    className="w-[30px] h-[30px] aspect-square object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="card-label font-medium uppercase text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="card-text min-[2000px]:max-w-full">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}