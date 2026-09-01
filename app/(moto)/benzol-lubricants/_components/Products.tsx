"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const products = [
  {
    name: "Automotive Lubricants",
    icon: "/moto/benzol-lubricants/products/2.png",
    description:
      "BENZOL® Premium Quality Automotive Engine Oils are specially formulated to deliver optimum efficiency, reliable engine protection, and consistent performance across modern vehicles. Designed for versatile use, these advanced lubricants support smooth engine operation, improved performance, and dependable protection under various driving conditions.",
  },
  {
    name: "Commercial Lubricants",
    icon: "/moto/benzol-lubricants/products/1.png",
    description:
      "BENZOL® Heavy Duty Lubricants are specially formulated to meet the demanding requirements of diesel engines, delivering reliable protection, consistent performance, and extended drain intervals. Designed for on-road and off-road applications, these advanced lubricants help maintain engine efficiency and provide dependable performance under demanding conditions.",
  },
  {
    name: "Industrial Lubricants",
    icon: "/moto/benzol-lubricants/products/3.png",
    description:
      "BENZOL® Industrial Range and Functional Fluids are formulated using world-class technologies to deliver exceptional performance, efficiency, and reliable protection across demanding industrial applications. Designed to support smooth operations and consistent results, these advanced fluids meet diverse industrial requirements with dependable quality.",
  },
  {
    name: "Marine Lubricants",
    icon: "/moto/benzol-lubricants/products/4.png",
    description:
      "BENZOL® Premium Marine Oils are formulated to meet the highest marine industry standards, delivering reliable protection, stringent safety, and strong environmental protection. Designed for demanding marine applications, these advanced oils support efficient operation, dependable equipment protection, and compliance with strict industry requirements.",
  },
  {
    name: "Greases",
    icon: "/moto/benzol-lubricants/products/5.png",
    description:
      "BENZOL® Premium Greases provide a robust, tacky lubrication solution designed for demanding operating conditions. Formulated for reliable performance, these advanced greases help reduce friction, protect components, improve equipment productivity and service life, while supporting smooth and efficient operation in challenging environments.",
  },
  {
    name: "Speciality Oils",
    icon: "/moto/benzol-lubricants/products/6.png",
    description:
      "BENZOL® Specialty Lubricants provide a comprehensive range of advanced lubrication solutions designed to meet the diverse requirements of various industries and applications. Formulated with high-quality technologies, these specialty lubricants deliver reliable performance, effective protection, and consistent efficiency across different operating conditions.",
  },
];

const PER_PAGE = 3;

export default function Products() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / PER_PAGE);

  // Always show exactly PER_PAGE cards — wrap around if the last slide is short
  const visible = Array.from({ length: PER_PAGE }, (_, i) => {
    const idx = (page * PER_PAGE + i) % products.length;
    return products[idx];
  });

  return (
    <section className="bg-[#000000] py-16 md:py-20">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Header row */}
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6"
            data-aos="fade-up"
          >
            <div>
              <h2 className="heading-white">
                Our Product Range
              </h2>
              <span className="mt-3 mb-4 block h-[3px] w-[130px] bg-[#D8A657]" />
              <p className="content-white leading-[22px] max-w-[640px]">
                Explore the BENZOL® Lubricants Industries product range, offering
                high-performance solutions for automotive, industrial, marine, and specialty
                applications. Our range includes premium greases, developed for reliable
                protection and performance.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button className="content-white rounded-full bg-[#B38037] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 whitespace-nowrap">
                View Product Range
              </button>
              <button
                aria-label="View product range"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#B38037] transition hover:bg-gray-100 shrink-0"
              >
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <hr className="border-t border-white/10 mb-16" />

          {/* Product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {visible.map((product, i) => (
              <div
                key={`${page}-${i}`}
                className="relative bg-[#242424] px-6 sm:px-8 pt-8 pb-8 flex flex-col items-center text-center gap-5"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >

                <div className="flex h-[88px] w-[88px] absolute -left-4 -top-4 shrink-0 items-center justify-center rounded-full bg-[#141414]">
                    <img src={product.icon} alt="" className="h-9 w-9 object-contain" />
                </div>

                
                <h3 className="heading-white text-[24px]! mt-2">{product.name}</h3>
                <p className="content-white text-[14px]! leading-[24px]! text-center">
                  {product.description}
                </p>

                <a
                  href="#"
                  className="mt-1 text-[#D8A657] font-semibold text-sm tracking-wide hover:underline"
                >
                  Read More &gt;&gt;
                </a>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "bg-[#D8A657] w-8" : "bg-white/25 w-2"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
