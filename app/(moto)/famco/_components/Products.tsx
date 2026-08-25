"use client";

import React from "react";

export default function Products() {
  const products = [
    {
      image: "/moto/famco/p1.png",
      title: "Water Pump",
    },
    {
      image: "/moto/famco/p2.png",
      title: "Water Pump Repair Kit",
    },
    {
      image: "/moto/famco/p3.png",
      title: "Housing",
    },
    {
      image: "/moto/famco/p4.png",
      title: "Fuel Feed Pump",
    },
    {
      image: "/moto/famco/p5.png",
      title: "Oil Pump",
    },
    {
      image: "/moto/famco/p6.png",
      title: "Repair Kits",
    },
    {
      image: "/moto/famco/p7.png",
      title: "Gaskets",
    },
    {
      image: "/moto/famco/p8.png",
      title: "Valves",
    }
  ];

  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h3 className="text-[#10276D] section-text font-semibold mb-2 rubik-font text-sm">
            Product Groups
          </h3>
          <h2 className="section-title text-[#202020] rubik-font font-semibold mb-6">
            Explore Our Complete Range Of Product Categories
          </h2>
          <p className="inter-font text-[#404040] section-text max-w-[90%] lg:max-w-[80%] mx-auto leading-relaxed">
            High-Quality Components Meticulously Engineered To Deliver Exceptional Performance, Dependable Reliability, And Long-Lasting Durability, Ensuring Consistent Efficiency And Strength Even Under Demanding Operating Conditions, Even In Large-Scale Deployments, Heavy Workloads, And Extended Usage Scenarios Where Stability, Scalability, And Sustained Output Are Critical.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mx-auto" data-aos="fade-up" data-aos-delay="200">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col bg-white border-1 border-[#CCCCCC] rounded-[10px] text-center transition-shadow hover:shadow-lg items-center justify-between">
              {/* Image Container */}
              <div className="w-full h-full mb-3 flex items-center justify-center bg-gray-100/50 rounded-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-300">Image</div>' }}
                />
              </div>

              {/* Content */}
              <h3 className="mb-6 text-[#202020] card-title  rubik-font font-semibold">
                {product.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
