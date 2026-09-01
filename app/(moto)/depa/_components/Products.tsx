"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const productsData = [
  { id: 1, category: "Transmission", name: "Transmission Seal", desc: "High-quality transmission seals designed to prevent fluid leaks and ensure reliable transmission performance.", img: "/moto/depa/1.png" },
  { id: 2, category: "Transmission", name: "CV joint", desc: "Durable CV joints engineered to provide smooth power transfer and dependable performance during driving.", img: "/moto/depa/2.png" },
  { id: 3, category: "Transmission", name: "Sealing Kit", desc: "Complete sealing kits designed to provide secure, reliable sealing and help prevent leaks in automotive components.", img: "/moto/depa/3.png" },
  { id: 4, category: "Steering Pump", name: "Hydraulic Power Steering Pump", desc: "Reliable hydraulic power steering for smooth and responsive vehicle control.", img: "/moto/depa/4.jpg" }, 
  { id: 5, category: "Steering Pump", name: "Electric Power Steering Pump Pulley", desc: "Durable CV joints engineered to provide smooth power transfer and dependable performance during driving.", img: "/moto/depa/5.jpg" }, 
  { id: 6, category: "Suspension Sphere", name: "Sphere (standard exchange)", desc: "High-quality remanufactured sphere designed for reliable performance, durability, and precise fit.", img: "/moto/depa/6.jpg" },
  { id: 7, category: "Suspension Sphere", name: "Sphere (new product)", desc: "Brand-new sphere manufactured to high-quality standards for reliable performance, durability, and precise fit.", img: "/moto/depa/7.jpg" },
  { id: 8, category: "Accessories", name: "Mounting cone", desc: "Precision-made mounting cone designed for secure fitting, reliable performance, and long-lasting durability.", img: "/moto/depa/8.png" },
  { id: 9, category: "Accessories", name: "Miscellaneous trading product", desc: "A diverse range of automotive products sourced to meet quality, reliability, and customer requirements.", img: "/moto/depa/9.png" },
  { id: 10, category: "Accessories", name: "Hand tools", desc: "Reliable hand tools designed for precision, durability, and efficient automotive repair and maintenance.", img: "/moto/depa/10.png" },
];

const tabs = ["Transmission", "Steering Pump", "Suspension Sphere", "Accessories", "View All"];

export default function Products() {
  const [activeTab, setActiveTab] = useState("Transmission");

  const displayedProducts = activeTab === "View All" 
    ? productsData 
    : productsData.filter(p => p.category === activeTab);

  const renderProductCard = (product: typeof productsData[0], isLastOddInGrid: boolean = false) => (
    <div key={product.id} className={`bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow ${isLastOddInGrid ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto xl:col-span-1 xl:w-full xl:mx-0" : ""}`}>
      <div className="w-full  bg-white p-2 flex items-center justify-center relative ">
        <img
          src={product.img}
          alt={product.name}
          
          className="object-contain "
        />
      </div>
      <div className="px-6 pb-6 flex flex-col flex-grow">
        <h3 className="oswald font-semibold card-title text-[#272727] mb-3">{product.name}</h3>
        <p className="rubik text-[#4b5563] section-text leading-relaxed mb-6 flex-grow">
          {product.desc}
        </p>
        <div className="flex justify-end mt-auto">
          <button className="rubik font-semibold text-[#be1622] hover:text-red-800 transition-colors text-sm underline underline-offset-4 decoration-2">
            View Products
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-[#f8f9fb]" id="products">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title oswald font-semibold text-[#272727] mb-4">
            Our Remanufactured Automotive Products
          </h2>
          <p className="rubik section-text text-[#4b5563]  leading-relaxed">
            Explore DEPA's remanufactured automotive parts, combining reliable performance, quality, and sustainable solutions across steering, transmission, braking, and suspension systems.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center bg-white border border-gray-200 rounded divide-x divide-gray-200 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 oswald font-medium section-text transition-colors ${
                  activeTab === tab
                    ? "text-[#be1622] underline underline-offset-2 decoration-2 font-semibold"
                    : "text-[#272727] hover:text-[#be1622] hover:underline hover:underline-offset-2 hover:decoration-2"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Content */}
        {activeTab === "View All" ? (
          <div className="w-full relative">
            <style jsx global>{`
              .depa-swiper .swiper-pagination-bullet {
                background-color: #d1d5db;
                opacity: 1;
              }
              .depa-swiper .swiper-pagination-bullet-active {
                background-color: #bd2228 !important;
              }
            `}</style>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full !pb-16 depa-swiper"
            >
              {displayedProducts.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                  {renderProductCard(product)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
            {displayedProducts.map((p, i, arr) => renderProductCard(p, arr.length % 2 !== 0 && i === arr.length - 1))}
          </div>
        )}
      </div>
    </section>
  );
}
