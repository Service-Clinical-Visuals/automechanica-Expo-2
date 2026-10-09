"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Sparkles, Car, Shield, Wrench, Shirt } from "lucide-react";

interface ProductItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const productItems: ProductItem[] = [
  {
    id: "maintenance",
    title: "Maintenance",
    desc: "Ewocar Maintenance products are designed to keep your vehicle clean, fresh and protected between washes and detailing sessions.",
    image: "/moto/ewocar/p1.webp",
    icon: Car,
  },
  {
    id: "polishing-system",
    title: "Polishing System",
    desc: "Engineered for maximum cutting efficiency and brilliant gloss finishes, perfect for multi-stage compounding and finishing.",
    image: "/moto/ewocar/p2.webp",
    icon: Sparkles,
  },
  {
    id: "protective-coating",
    title: "Protective Coating",
    desc: "Advanced graphene and ceramic matrix formulas that deliver durable hydrophobic barriers and UV protection.",
    image: "/moto/ewocar/p3.webp",
    icon: Shield,
  },
  {
    id: "accessories",
    title: "Accessories",
    desc: "Professional-grade microfibers, backing plates, applicators, and specialized brushes for precision car care.",
    image: "/moto/ewocar/p4.webp",
    icon: Wrench,
  },
  {
    id: "merchandise",
    title: "Merchandise",
    desc: "Official Ewocar branded detailing gear, apparel, and workshop merchandise for passionate detailers worldwide.",
    image: "/moto/ewocar/p5.webp",
    icon: Shirt,
  },
];

export default function Products() {
  const [activeId, setActiveId] = useState<string>("maintenance");

  return (
    <section id="products" className="w-full py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        {/* Header Row with SKT max-width pattern */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-8 gap-6 w-full"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 w-full md:w-[75%] xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-[28px] min-[3800px]:text-5xl font-bold tracking-tight text-[#000000]"
            >
              Discover Our Products
            </Typography>
            <Typography
              variant="p"
              className="text-sm sm:text-base leading-relaxed text-[#4B5563] font-normal"
            >
              Explore Ewocar’s professional-grade detailing solutions, engineered for superior
              performance, lasting protection, and exceptional results in every detail.
            </Typography>
          </div>

          <div className="flex-shrink-0">
            <Button
              text="View ALL"
              href="#products-all"
              showIcon={true}
              variant="dark"
              iconVariant="white"
            />
          </div>
        </div>

        {/* Expanding Cards Layout with SKT rounded styling */}
        <div
          className="w-full flex flex-col lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[460px] min-[3800px]:h-[680px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {productItems.map((item) => {
            const isExpanded = activeId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                className={`relative overflow-hidden rounded-2xl md:rounded-[1.75rem] cursor-pointer transition-all duration-500 ease-out select-none ${
                  isExpanded
                    ? "lg:flex-[2.4] h-[340px] sm:h-[400px] lg:h-full shadow-2xl"
                    : "lg:flex-[0.9] h-[120px] sm:h-[140px] lg:h-full hover:brightness-105 shadow-md"
                }`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isExpanded
                      ? "bg-gradient-to-t from-black/90 via-black/40 to-black/20"
                      : "bg-black/50 hover:bg-black/40"
                  }`}
                />

                {/* Content for Expanded State */}
                {isExpanded ? (
                  <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-white z-10 transition-all duration-500">
                    <div className="w-14 h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#020202] border border-white flex items-center justify-center mb-5 shrink-0 shadow-lg">
                      <Icon className="w-6 h-6 min-[3800px]:w-10 min-[3800px]:h-10 text-white" />
                    </div>

                    <h3 className="text-xl sm:text-2xl min-[3800px]:text-4xl font-semibold font-primary mb-2 text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm min-[3800px]:text-lg text-white/90 font-secondary leading-relaxed max-w-md line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                ) : (
                  /* Collapsed State: Icon and Vertical Title */
                  <div className="absolute inset-0 p-4 lg:p-6 flex lg:flex-col items-center justify-between lg:justify-end text-white z-10">
                    <div className="w-12 h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#020202] border border-white/80 flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white" />
                    </div>

                    <div className="lg:mb-8 lg:mt-auto">
                      <span className="text-base sm:text-lg min-[3800px]:text-2xl font-semibold font-primary text-white tracking-wide lg:[writing-mode:vertical-rl] lg:rotate-180">
                        {item.title}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
