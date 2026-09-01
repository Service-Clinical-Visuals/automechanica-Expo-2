"use client";

import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const slides = [
  [
    {
      title: "Quality",
      image: "/moto/inmotion/e1.png",
      text: "In Motion ensures strict quality control through advanced production monitoring, covering every stage from materials to finished products.",
    },
    {
      title: "Technology",
      image: "/moto/inmotion/e2.png",
      text: "In Motion bearings are produced on new generation lines able to guarantee high standards of processing and track lapping.",
    },
    {
      title: "Design",
      image: "/moto/inmotion/e3.png",
      text: "Our Technical Department supports bearing selection, product improvement, and custom bearing development to customer needs.",
    },
  ],
  [
    {
      title: "Manufacturing",
      image: "/moto/inmotion/e4.png",
      text: "Explore our extensive production capabilities and dedicated facilities to support the expanding global automotive market.",
    },
  ],
];

export default function Discover() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 mb-8" data-aos="fade-up">
          <div className="w-full lg:max-w-[70%] flex flex-col items-center lg:items-start">
            <h2 className="heading text-[#2A2A2A] mb-4">
              Engineering Excellence & Manufacturing
            </h2>
            <p className="content text-[#585858] mb-4">
              In Motion combines advanced technology, precision engineering, strict quality controls, and extensive production capabilities to deliver high-quality bearing solutions. From material analysis to final inspection, every stage focuses on reliable performance, consistent quality, and solutions tailored to diverse industrial requirements.
            </p>
          </div>
          <Button text="Discover Our Process" showIcon={true} variant="primary" className="shrink-0" />
        </div>

        {/* Divider */}
        <hr className="border-[#00000080] mb-12" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[380px]">
          {slides[currentSlide].map((item, index) => (
            <div
              key={item.title}
              className="bg-white shadow-[0px_3px_8px_0px_#0000003D] p-6 pb-10 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-full overflow-hidden bg-gray-100 mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="subheading text-[#1A1A1A] mb-4">{item.title}</h3>
              <p className="content">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-12" data-aos="fade-up">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-[8px] rounded-full transition-all duration-300 ${currentSlide === index ? "w-[50px] bg-[#C0121C]" : "h-[8px] w-[8px] bg-[#D9D9D9] hover:bg-gray-400"}`}
            ></button>
          ))}
        </div>
      </Container>
    </section>
  );
}
