"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Button from "./Button";

const slides = [
  [
    { name: "Wheel Bearing\nKit", image: "/moto/inmotion/p1.png" },
    { name: "Automatic Timing\nBelt Tensioners", image: "/moto/inmotion/p2.png" },
    { name: "Automatic Auxiliary\nBelt Tensioners", image: "/moto/inmotion/p3.png" },
    { name: "Timing\nBelt Tensioners", image: "/moto/inmotion/p4.png" },
  ],
  [
    { name: "Water Pump\nKits", image: "/moto/inmotion/p5.png" },
    { name: "U-Joints", image: "/moto/inmotion/p6.png" },
    { name: "Clutch\nBearings", image: "/moto/inmotion/p7.png" },
    { name: "Air Conditioning\nBearings", image: "/moto/inmotion/p8.png" },
  ]
];

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end text-center lg:text-left mb-8 gap-6" data-aos="fade-up">
          <div className="w-full lg:max-w-[70%] flex flex-col items-center lg:items-start">
            <h2 className="heading text-[#1A1A1A] mb-4">
              Comprehensive Product Range
            </h2>
            <p className="content text-[#585858] mb-5">
              Explore the In Motion product range, engineered to support reliable performance across diverse automotive applications. From wheel bearing kits and wheel hubs to timing belt kits, tensioners, water pump kits, U-joints, and clutch and air conditioning bearings, our solutions are designed for precision, durability, and dependable operation.
            </p>
          </div>
          <Button text="View All Products" showIcon={true} variant="primary" className="shrink-0 lg:mb-10" />
        </div>

        <hr className="border-[#00000080] mb-16" />

        {/* Content Row - Product Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.2 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 mb-12"
          >
            {slides[currentSlide].map((product, index) => (
              <motion.div
                key={product.name}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", stiffness: 300, damping: 24 }
                  },
                  exit: { opacity: 0, x: -50 }
                }}
                className="bg-[#DEDEDE] p-4 flex flex-col group cursor-pointer"
              >
                <div className="bg-white w-full aspect-square flex items-center justify-center p-6 mb-4">
                  <img
                    src={product.image}
                    alt={product.name.replace('\n', ' ')}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-between items-end mt-auto mb-3">
                  <h3 className="subheading text-[#1A1A1A] leading-[1.2] whitespace-pre-line">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center">
                    <img src="/moto/inmotion/i1.png" alt="arrow" className="product-arrow w-auto object-contain transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2" data-aos="fade-up">
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
