"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      title: "1-Post Lifts",
      image: "/moto/twin/p1.png",
    },
    {
      title: "2-Post Lifts",
      image: "/moto/twin/p2.png",
    },
    {
      title: "4-Post Lifts",
      image: "/moto/twin/p3.png",
    },
    {
      title: "Scissors-Lifts",
      image: "/moto/twin/p4.png",
    }
  ];

  return (
    <section className="py-10 lg:py-20 bg-[#F9FAFB]">
      <div className="custom-container">

        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center gap-4 lg:gap-4">
          <h2 className="section-title text-[#000000] exo-2-font font-bold">
            Our Product Portfolio
          </h2>
          <h4 className="text-[#111111] section-text italic inter-font font-regular">
            Professional Lifting Solutions for Every Workshop
          </h4>
          <p className="inter-font text-[#111111] max-w-[90%] lg:max-w-[80%] mx-auto section-text font-regular leading-relaxed mt-2">
            Explore Twin Busch's range of professional workshop equipment, designed to deliver reliable performance, safety, and efficiency. From vehicle lifts to tyre service equipment, each solution is engineered to meet the demands of modern automotive workshops.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-8">
          {products.map((product, index) => (
            <div key={index} className={`bg-white border border-[#EAEAEA] ${index % 2 === 0 ? "rounded-tl-[50px] rounded-bl-[50px]" : "rounded-tr-[50px] rounded-br-[50px]"} p-8 flex flex-col items-center justify-between text-center shadow-[0px_2px_6px_2px_#3C404326,0px_1px_2px_0px_#3C40434D] transition-all duration-300`}>
              <div className="w-full h-full flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.src = "/moto/twin/abt.png"; }}
                />
              </div>
              <h3 className="exo-2-font font-semibold text-[#000000] card-title mb-6">
                {product.title}
              </h3>
              <Button href="#" className="">
                View Products
              </Button>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-end mt-4">
          <Link href="#" className="inter-font text-[#E30613] hover:underline section-text font-regular">
            View All Categories
          </Link>
        </div>

      </div>
    </section>
  );
}
