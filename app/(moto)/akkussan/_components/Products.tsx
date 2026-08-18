"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Passenger Shaft",
      desc: "Reliable shaft support solutions designed for passenger vehicles, helping reduce vibration, improve drivetrain stability, and ensure smooth performance.",
      img: "1.png"
    },
    {
      title: "Vehicle Shaft",
      desc: "Reliable shaft support solutions engineered for light commercial vehicles, stable, reduced vibration, and smooth, dependable performance across demanding applications.",
      img: "2.png"
    },
    {
      title: "Coupling",
      desc: "Durable coupling solutions designed for reliable drivetrain connections, helping absorb vibration and torque loads while supporting smooth and efficient power transmission.",
      img: "3.png"
    }
  ];

  return (
    <section id="products" className="w-full py-16 md:py-24 bg-[#FAFAFA]">
      <div className="custom-container px-4 xl:px-10">
        
        {/* Header Section */}
        <div className="w-full max-w-[1500px] mx-auto text-center flex flex-col gap-6 mb-12" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="font-bold exo2 section-title text-black">
            Our Product Portfolio
          </h2>
            <p className="inter font-semibold italic text-black section-subtitle">
            Engineered for Reliable Automotive Performance
          </p>
            <p className="inter section-text leading-relaxed text-black">
            Explore our comprehensive range of precision-engineered automotive components, developed to meet the demanding requirements of modern vehicle applications. With a strong focus on quality, durability, and performance, our products are manufactured to deliver reliable operation, smooth functionality, and long service life. From passenger cars to light commercial and heavy-duty vehicles, each component is designed to provide dependable solutions for diverse drivetrain and automotive needs.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`relative bg-white border border-gray-200 flex flex-col group pb-12 ${
                index === 2 ? "md:col-span-2 md:w-[calc(50%-1rem)] md:justify-self-center xl:col-span-1 xl:w-full xl:justify-self-stretch" : ""
              }`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3]  flex justify-center items-center shrink-0">
                <img 
                  src={`/moto/akkussan/${product.img}`} 
                  alt={product.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1 px-8 pt-4 pb-6 border-t border-gray-100">
                <h3 className="font-semibold exo2 card-title text-[#111111] mb-3">
                  {product.title}
                </h3>
                <p className="inter section-text text-[#4a4a4a] leading-relaxed">
                  {product.desc}
                </p>
              </div>

              {/* Bottom Right Circular Button Wrapper */}
              <div 
                className="absolute -bottom-3 -right-3 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center z-20"
                style={{
                  borderTop: '1px solid #e5e7eb',
                  borderLeft: '1px solid #e5e7eb',
                  borderBottom: '1px solid transparent',
                  borderRight: '1px solid transparent',
                  boxShadow: '-2px -2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <Link 
                  href={`#${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-center w-12 h-12 bg-[var(--color-primary)] text-[#111111] rounded-full hover:scale-105 transition-transform"
                  aria-label={`View ${product.title}`}
                >
                  <ArrowRight size={22} strokeWidth={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Link */}
        <div className="flex justify-end mt-6">
          <Link 
            href="#all-categories" 
            className="text-[var(--color-primary)] hover:text-[#111111] inter text-sm font-semibold transition-colors"
          >
            View All Categories
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;
