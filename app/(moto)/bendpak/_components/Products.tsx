"use client";

import React from "react";

import Button from "./Button";

export default function Products() {
  const products = [
    {
      image: "/moto/bendpak/p1.png",
      title: "Wheel Balancers",
    },
    {
      image: "/moto/bendpak/p2.png",
      title: "Tire Changers",
    },
    {
      image: "/moto/bendpak/p3.png",
      title: "Brake Lathes",
    },
    {
      image: "/moto/bendpak/p4.png",
      title: "Wheel Weights",
    }
  ];

  return (
    <section className="py-16 xl:py-20 min-[2100px]:py-28 min-[3800px]:py-40 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#000000] montserrat-font font-bold mb-4">
            Our Product Portfolio
          </h2>
          <p className="inter-font text-[#000000] font-regular section-text w-full xl:max-w-[80%] 2xl:max-w-[70%] mx-auto leading-relaxed">
            BendPak offers a comprehensive range of professional automotive service equipment designed to support workshops, dealerships, tire centers, and service professionals. From vehicle lifting and wheel service solutions to specialized shop equipment, every solution is developed to meet demanding professional requirements while delivering long-term value and reliable day-to-day operation.
          </p>
        </div>


        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-10 min-[2100px]:gap-14 min-[3800px]:gap-20 mx-auto" data-aos="fade-up" data-aos-delay="200">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col bg-transparent text-center items-center rounded-[4px] hover:shadow-lg transition-shadow duration-300 pb-6 overflow-hidden"
              style={{ boxShadow: "0px 2px 6px 2px #3C404326, 0px 1px 2px 0px #3C40434D" }}
            >
              {/* Image Container */}
              <div className="w-full h-full  mb-5 flex items-center justify-center bg-white p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-300">Image</div>' }}
                />
              </div>

              {/* Content */}
              <h3 className="mb-4 card-title  text-[#000000] font-bold montserrat-font">
                {product.title}
              </h3>

              <Button href="#" variant="primary" className="!w-fit !px-6 !py-2.5 min-[2100px]:!px-8 min-[2100px]:!py-3.5 min-[3800px]:!px-12 min-[3800px]:!py-5 !rounded-[2px] inter-font mb-2 min-[2100px]:mb-4">
                View Products
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <a href="#" className="text-[#E30613]  card-text inter-font font-regular hover:underline">View All Categories</a>
        </div>

      </div>
    </section>
  );
}
