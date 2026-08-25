"use client";

import React from "react";

import Button from "./Button";

export default function Products() {
  const tabs = ["Ball Joints", "Control Arms", "Tie Rod Ends", "Sway Bar Link", "View All"];

  const products = [
    {
      image: "/moto/teknorot/p1.png",
      title: "MI-525",
    },
    {
      image: "/moto/teknorot/p2.png",
      title: "N-1054",
    },
    {
      image: "/moto/teknorot/p3.png",
      title: "LX-335",
    },
    {
      image: "/moto/teknorot/p4.png",
      title: "LX-334",
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#000000] montserrat-font font-semibold mb-4">
            Our Products
          </h2>
          <p className="inter-font text-[#000000] section-text max-w-[90%] mx-auto leading-relaxed">
            Discover Teknorot's comprehensive range of premium steering and suspension components, engineered to deliver exceptional safety, and driving performance. Manufactured using advanced technologies and rigorous quality standards, our products provide reliable solutions for passenger cars and light commercial vehicles across global aftermarket applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-[5px] inter-font font-medium transition-colors ${tab === "Ball Joints"
                ? "bg-[#66952E] text-white"
                : "bg-white border border-[#66952E] text-[#66952E] hover:bg-[#66952E] hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mx-auto" data-aos="fade-up" data-aos-delay="200">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white text-center transition-shadow hover:shadow-lg items-center pb-16 rounded-[2px]"
              style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}
            >
              {/* Image Container */}
              <div className="w-full h-full mb-6 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-300">Image</div>' }}
                />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-[#000000] font-bold montserrat-font card-title">
                {product.title}
              </h3>

              {/* Button in Notched Wrapper */}
              <div className="absolute bottom-[1px] left-1/2 transform -translate-x-1/2 bg-white shadow-sm border-t border-l border-r border-[#E5E5E5] p-2 pb-0 z-10 flex items-end justify-center">
                <Button href="#" className="!w-fit !px-6 !py-2 !bg-[#66952E] !text-white hover:!bg-[#527a24] !border-none !font-medium inter-font text-[14px]">
                  View Product
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-12 gap-[0.5em] section-text" data-aos="fade-up" data-aos-delay="300">
          <div className="w-[2em] h-[0.25em] bg-[#66952E] transition-all duration-300"></div>
          <div className="w-[2em] h-[0.25em] bg-[#D9D9D9] transition-all duration-300"></div>
        </div>

      </div>
    </section>
  );
}
