"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";

const categories = [
  {
    key: "engine",
    label: "Engine Mounting",
    products: [
      { model: "MH10021", image: "/moto/meha/products/engine/1.png" },
      { model: "MH13142", image: "/moto/meha/products/engine/2.png" },
      { model: "MH13143", image: "/moto/meha/products/engine/3.png" },
      { model: "MH13024", image: "/moto/meha/products/engine/4.png" },
    ],
  },
  {
    key: "flywheel",
    label: "Fly wheel",
    products: [
      { model: "MH20011", image: "/moto/meha/products/flywheel/1.png" },
      { model: "MH20012", image: "/moto/meha/products/flywheel/2.png" },
      { model: "MH20013", image: "/moto/meha/products/flywheel/3.png" },
      { model: "MH20014", image: "/moto/meha/products/flywheel/4.png" },
    ],
  },
  {
    key: "bushing",
    label: "Bushing",
    products: [
      { model: "MH30011", image: "/moto/meha/products/bushing/1.png" },
      { model: "MH30012", image: "/moto/meha/products/bushing/2.png" },
      { model: "MH30013", image: "/moto/meha/products/bushing/3.png" },
      { model: "MH30014", image: "/moto/meha/products/bushing/4.png" },
    ],
  },
];

const allProducts = categories.flatMap((category) => category.products);

type Product = { model: string; image: string };

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-[#EAEAEA] flex flex-col h-full">
      <div className="w-full aspect-square bg-white flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={`Meha Automotive ${product.model}`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-5 flex flex-col items-center text-center border-t border-[#EAEAEA]">
        <h3 className="subheading font-semibold! mb-3">Model no : {product.model}</h3>
        <a href="#" className="content text-primary! font-bold! text-sm hover:opacity-80 underline">
          View Products
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState(categories[0].key);

  const visibleProducts =
    activeTab === "all"
      ? allProducts
      : categories.find((category) => category.key === activeTab)?.products ?? [];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="product">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
          <h2 className="heading text-[32px]! mb-4">Explore Our Products</h2>
          <p className="content">
            Explore Meha Automotive&apos;s wide range of high-quality spare parts, designed for
            reliable performance, durability, and a precise fit across various vehicle
            applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex items-stretch divide-x divide-[#EAEAEA] border border-primary/30 rounded-lg max-w-2xl mx-auto mb-10"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveTab(category.key)}
              className={`flex-1 py-3 px-2 text-sm md:text-base content font-bold transition-colors cursor-pointer ${
                activeTab === category.key ? "text-primary!" : "text-[#B3B3B3]! hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`flex-1 py-3 px-2 text-sm md:text-base content font-bold transition-colors cursor-pointer ${
              activeTab === "all" ? "text-primary!" : "text-[#B3B3B3]! hover:text-primary"
            }`}
          >
            View All
          </button>
        </div>

        {/* Product Cards: static grid on larger screens */}
        <div className="hidden lg:grid grid-cols-4 gap-6" data-aos="fade-up">
          {visibleProducts.map((product, index) => (
            <ProductCard key={`${product.model}-${index}`} product={product} />
          ))}
        </div>

        {/* Product Cards: swiper on smaller screens */}
        <div className="lg:hidden" data-aos="fade-up">
          <Swiper
            key={activeTab}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".products-pagination",
              bulletClass: "inline-block w-2.5 h-2.5 rounded-full bg-gray-300 mx-1 cursor-pointer transition-all duration-300",
              bulletActiveClass: "!w-8 !bg-primary",
            }}
            spaceBetween={16}
            slidesPerView={1.15}
            breakpoints={{
              540: { slidesPerView: 2.2, spaceBetween: 20 },
            }}
            className="w-full mb-6!"
          >
            {visibleProducts.map((product, index) => (
              <SwiperSlide key={`${product.model}-${index}`}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="products-pagination flex items-center justify-center" />
        </div>
      </Container>
    </section>
  );
}
