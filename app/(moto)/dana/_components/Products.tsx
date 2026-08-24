"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "SPL® Plus U-Joints",
      img: "/moto/dana/p1.png",
    },
    {
      title: "SPL® U-Joints",
      img: "/moto/dana/p2.png",
    },
    {
      title: "Blue Coated U-Joints",
      img: "/moto/dana/p3.png",
    },
    {
      title: "10 Series U-Joints",
      img: "/moto/dana/p4.png",
    }
  ];

  return (
    <section id="products" className="w-full py-16 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-20">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center gap-4 min-[3800px]:gap-8 max-w-[90%] lg:max-w-[80%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Our Product Range
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed">
            Engineered to deliver OE-quality fitment and consistent, long-lasting performance, our U-joints are built to meet the demands of a wide range of driveline applications. From everyday passenger vehicles to heavy-duty commercial equipment, each product is designed with precision manufacturing, high-strength materials, and rigorous quality standards to ensure reliable torque transmission, reduced vibration, and extended service life even under challenging operating conditions.
          </Typography>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-[3800px]:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col w-full aspect-[390/448] bg-white rounded-2xl min-[3800px]:rounded-[2rem] border border-gray-200 shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* Image Container */}
              <div className="relative w-full flex-1 rounded-bl-[1.5rem] rounded-br-[1.5rem] min-[3800px]:rounded-bl-[3rem] min-[3800px]:rounded-br-[3rem] bg-white overflow-hidden flex items-center justify-center p-6 min-[3800px]:p-12 border-b-2 border-[var(--color-primary)] z-10">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex items-center justify-between p-6 min-[3800px]:p-10 relative">
                <Typography variant="h4" color="dark" className="font-bold text-sm sm:text-base min-[3800px]:text-3xl line-clamp-2">
                  {product.title}
                </Typography>

                {/* Circular Button at bottom right */}
                <a href="#products" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 shrink-0 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors shadow-md ml-4">
                  <ArrowUpRight className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={2.5} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="flex justify-end w-full" data-aos="fade-left">
          <a href="#categories" className="text-[var(--color-primary)] hover:underline font-semibold hover:underline text-sm min-[3800px]:text-2xl transition-all">
            View All Categories
          </a>
        </div>

      </div>
    </section>
  );
};

export default Products;
