"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

interface Product {
  image: string;
  title: string;
  description: string;
  href: string;
}

const categories = [
  { id: "compressor", label: "Compressor" },
  { id: "modular-control-panel", label: "Modular Control Panel" },
  { id: "fans", label: "Fans" },
  { id: "heating-valve", label: "Heating Valve" },
  { id: "view-all", label: "View All" },
];

const categoryProducts: Record<string, Product[]> = {
  compressor: [
    {
      image: "/moto/sndc/p2.png",
      title: "Electric Compressor",
      description:
        "Designed for electric, hybrid and off-road vehicles, SNDC's low-voltage electric compressors deliver efficient, reliable cabin cooling. Compatible with R134a and R1234yf refrigerants, they offer a compact, high-performance HVAC solution.",
      href: "/products/electric-compressor",
    },
    {
      image: "/moto/sndc/p5.png",
      title: "SANDEN Compressor",
      description:
        "As an authorized SANDEN distributor for over 30 years, SNDC supplies trusted SD5 and SD7 air conditioning compressors for industrial and off-road vehicles. Compatible with R134a and R1234yf refrigerants, they deliver reliable, high-performance cooling across diverse applications.",
      href: "/products/sanden-compressor",
    },
  ],

  "modular-control-panel": [
    {
      image: "/moto/sndc/p4.png",
      title: "Modular Control Panel",
      description:
        "SNDC offers 12V and 24V cable-operated control panels for industrial and off-road vehicles, featuring multiple blower speeds and long service life. Custom-designed control panels are also available to meet specific application requirements without tooling costs.",
      href: "/products/modular-control-panel",
    },
    {
      image: "/moto/sndc/p4.png",
      title: "Custom Control Panel",
      description:
        "SNDC offers 12V and 24V cable-operated control panels for industrial and off-road vehicles, featuring multiple blower speeds and long service life. Custom-designed control panels are also available to meet specific application requirements without tooling costs.",
      href: "/products/custom-control-panel",
    },
  ],

  fans: [
    {
      image: "/moto/sndc/p1.png",
      title: "Fans",
      description:
        "SNDC offers OEM-quality fans, blowers and motors for agricultural, construction and industrial vehicles, ensuring reliable cooling performance, seamless compatibility and long-lasting durability in demanding environments.",
      href: "/products/hvac-fans",
    },
    {
      image: "/moto/sndc/p1.png",
      title: "Fans",
      description:
        "SNDC offers OEM-quality fans, blowers and motors for agricultural, construction and industrial vehicles, ensuring reliable cooling performance, seamless compatibility and long-lasting durability in demanding environments.",
      href: "/products/blower-motors",
    },
  ],

  "heating-valve": [
    {
      image: "/moto/sndc/p3.png",
      title: "Heating Valves",
      description:
        "SNDC heating valves provide precise cabin temperature control for agricultural, construction, industrial and commercial vehicles. Available in cable-operated, button-operated and motorized options, they deliver reliable, durable performance.",
      href: "/products/heating-valve",
    },
    {
      image: "/moto/sndc/p3.png",
      title: "Heating Valves",
      description:
        "SNDC heating valves provide precise cabin temperature control for agricultural, construction, industrial and commercial vehicles. Available in cable-operated, button-operated and motorized options, they deliver reliable, durable performance.",
      href: "/products/electric-heating-valve",
    },
  ],
};

const productsByCategory: Record<string, Product[]> = {
  ...categoryProducts,
  "view-all": Object.values(categoryProducts).flat(),
};

export default function ProductEcosystem() {
  const [activeCategory, setActiveCategory] = useState("compressor");

  const products = productsByCategory[activeCategory] ?? [];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="custom-container text-center">
        {/* Heading + Description */}
        <div data-aos="fade-up">
          <p className="eyebrow-text mb-4">
            Product Ecosystem
          </p>

          <h2 className="section-title font-semibold mb-6">
            Complete HVAC Components for Electric, Hybrid and Off-Road Vehicles
          </h2>

          <p
            className="
              section-text
              max-w-[1344px]
              min-[2360px]:max-w-[1800px]
              mx-auto
              mb-10
            "
          >
            SNDC offers a complete range of HVAC components, including
            electric compressors, parallel flow condensers and filter driers
            for electric, hybrid, industrial and off-road vehicles. Engineered
            for reliability and performance, all components are compatible
            with R134a and R1234yf refrigerants, delivering efficient thermal
            management for modern mobility.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-3
            sm:gap-4
            min-[2360px]:gap-5
            mb-10
            lg:mb-12
          "
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              text={category.label}
              variant={
                activeCategory === category.id
                  ? "solid"
                  : "outline"
              }
              color="secondary"
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Product Cards */}
        {products.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-10
              max-w-[844px]
              mx-auto
              items-stretch
            "
          >
            {products.map((product, index) => (
              <div
                key={`${product.title}-${product.href}-${index}`}
                className="
                  w-full
                  max-w-[414px]
                  min-h-[602px]
                  h-auto
                  bg-white
                  border
                  border-[#CCCCCC]
                  rounded-[10px]
                  overflow-hidden
                  text-left
                  flex
                  flex-col
                  transition-colors
                  duration-300
                  hover:border-[#27337F]
                  group
                  justify-self-center
                "
                data-aos="fade-up"
                data-aos-delay={200 + index * 150}
              >
                {/* Product Image */}
                <div className="p-[10px]">
                  <div
                    className="
                      relative
                      w-full
                      aspect-[394/304]
                      bg-[#F8F8F8]
                      rounded-[2px]
                      overflow-hidden
                    "
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-contain
                        p-6
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>

                {/* Product Content */}
                <div
                  className="
                    px-5
                    pb-6
                    pt-2
                    flex
                    flex-col
                    flex-1
                  "
                >
                  <h3 className="card-title text-[#27337F] mb-4">
                    {product.title}
                  </h3>

                  <p className="section-text mb-6 flex-1">
                    {product.description}
                  </p>

                  <Link
                    href={product.href}
                    className="
                      link-underline
                      text-[#202020]
                      inline-flex
                      items-center
                      gap-2
                      w-fit
                    "
                  >
                    <span>View Product</span>

                    <ArrowRight
                      className="
                        w-[18px]
                        h-[18px]
                        text-[#D3111B]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p
            className="section-text text-gray-400 py-10"
            data-aos="fade-up"
          >
            Content coming soon for this category.
          </p>
        )}
      </div>
    </section>
  );
}