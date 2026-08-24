"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "./Container";

const allProducts = [
  // Air Filtration
  {
    category: "Air Filtration",
    name: "Air/Oil Separator",
    desc: "Fleetguard® AS2474 prevents oil build-up, reducing maintenance and improving pneumatic system performance.",
    image: "/moto/fleetguard/p1.png",
  },
  {
    category: "Air Filtration",
    name: "Air Filter, Primary",
    desc: "Fleetguard® AF4878 Magnum RS™ delivers durable filtration and reliable performance in harsh operating conditions.",
    image: "/moto/fleetguard/p2.png",
  },
  {
    category: "Air Filtration",
    name: "Cabin Air Filter",
    desc: "Fleetguard® AF26235 provides clean cabin air for a healthier, more comfortable work environment.",
    image: "/moto/fleetguard/p3.png",
  },
  {
    category: "Air Filtration",
    name: "Air Filter, Panel",
    desc: "Fleetguard® AF4285 delivers optimized airflow and superior engine protection for longer equipment life.",
    image: "/moto/fleetguard/p4.png",
  },

  // Coolants & Chemicals
  {
    category: "Coolants & Chemicals",
    name: "Heavy Duty Diesel Coolant",
    desc: "Our coolants provide antifreeze and anti-boil protection while preventing liner pitting and corrosion.",
    image: "/moto/fleetguard/p5.png",
  },
  {
    category: "Coolants & Chemicals",
    name: "Light Duty and Electric Coolant",
    desc: "For automotive, diesel, gas, and electric applications, with 5-year/150,000-mile protection.",
    image: "/moto/fleetguard/p6.png",
  },
  {
    category: "Coolants & Chemicals",
    name: "Fuel Cell & Battery Electric Thermal Fluid",
    desc: "GuardION® coolant delivers low conductivity with reliable freeze and corrosion protection for fuel cells.",
    image: "/moto/fleetguard/p7.png",
  },
  {
    category: "Coolants & Chemicals",
    name: "Coolant Additives",
    desc: "Fleetguard PowerService provides Cummins-endorsed additives for fuel quality and cold-weather protection.",
    image: "/moto/fleetguard/p8.png",
  },

  // Crankcase Ventilation
  {
    category: "Crankcase Ventilation",
    name: "Crankcase Ventilation, Coalescer",
    desc: "Fleetguard CV52001 removes oil mist and contaminants to improve engine reliability and performance.",
    image: "/moto/fleetguard/p9.png",
  },
  {
    category: "Crankcase Ventilation",
    name: "Coalescer Service Element",
    desc: "Fleetguard® CV50628 delivers efficient oil and particle removal while controlling emissions and oil drip.",
    image: "/moto/fleetguard/p10.png",
  },
  {
    category: "Crankcase Ventilation",
    name: "Variable Impactor",
    desc: "Fleetguard® CV50930 provides superior aerosol filtration and collection throughout engine life.",
    image: "/moto/fleetguard/p11.png",
  },
  {
    category: "Crankcase Ventilation",
    name: "SP1023 Accessory",
    desc: "Fleetguard® SP1023 supports reliable crankcase ventilation across a wide range of on- and off-highway engines.",
    image: "/moto/fleetguard/p12.png",
  },
];

const categories = [
  "Air Filtration",
  "Coolants & Chemicals",
  "Crankcase Ventilation",
  "View All"
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Air Filtration");

  const displayedProducts = activeCategory === "View All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section
      className="relative w-full py-16 md:py-24 2xl:py-32 4xl:py-48 bg-white overflow-hidden"
      id="product"
    >
      <Container>
        {/* Heading */}
        <div className="text-center mx-auto mb-8 2xl:mb-10 4xl:mb-20" data-aos="fade-up">
          <h2 className="section-title font-oswald font-semibold mb-4 text-[#1A1A1A]">
            Advanced Filtration for Every Application
          </h2>
          <p className="section-text font-rubik font-normal text-[#666666]">
            Explore Fleetguard's reliable filtration solutions, engineered to
            protect engines, improve performance, <br className="hidden md:block" /> and keep equipment running
            efficiently in demanding conditions.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex justify-center items-center gap-4 md:gap-8 2xl:gap-10 4xl:gap-16 mb-10 2xl:mb-8 4xl:mb-24 flex-wrap border border-[#E4E4E4] rounded-[5px] max-w-fit mx-auto py-2 px-6 md:px-10 2xl:py-4 2xl:px-16"
          data-aos="fade-up"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`card-title1 font-semibold transition-colors ${activeCategory === cat ? "text-primary" : "text-[#4B5563BF] hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 2xl:gap-14 4xl:gap-20"
        >
          {displayedProducts.map((product, index) => (
            <div
              key={product.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="border border-[#EAEAEA] rounded-md py-4 px-4 2xl:py-6 2xl:px-4 4xl:py-12 4xl:px-12 flex flex-col items-center text-center bg-white hover:shadow-lg transition-shadow"
            >
              <div className="w-full aspect-[350/300] flex items-center justify-center mb-6 2xl:mb-10 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="card-title font-oswald font-semibold text-[#272727]  mb-3">
                {product.name}
              </h3>
              <p className="card-text font-rubik font-normal text-[#4B5563]  mb-6 leading-relaxed flex-grow">
                {product.desc}
              </p>
              <Link
                href="#"
                className="text-primary font-semibold underline hover:no-underline btn-text"
              >
                View Products
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
