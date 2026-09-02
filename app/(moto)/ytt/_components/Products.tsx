"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Product {
  image: string;
  title: string;
  refNo: string;
  oemNo: string;
}

interface Category {
  label: string;
  products: Product[];
}

const tieRodEnds: Product[] = [
  {
    image: "/moto/ytt/p1.png",
    title: "Tie Rod Ends",
    refNo: "Y613067",
    oemNo: "32111139316",
  },
  {
    image: "/moto/ytt/p2.png",
    title: "Tie Rod Ends",
    refNo: "Y613076",
    oemNo: "32106765235",
  },
  {
    image: "/moto/ytt/p3.png",
    title: "Tie Rod Kit",
    refNo: "Y222015C",
    oemNo: "77367379",
  },
  {
    image: "/moto/ytt/p4.png",
    title: "Tie Rod Ends",
    refNo: "Y640011",
    oemNo: "32116777521",
  },
];

const ballJoints: Product[] = [
  {
    image: "/moto/ytt/p7.png",
    title: "Ball Joints",
    refNo: "Y515011",
    oemNo: "93190905",
  },
  {
    image: "/moto/ytt/p3.png",
    title: "Ball Joints",
    refNo: "Y515011C",
    oemNo: "93190905",
  },
  {
    image: "/moto/ytt/p8.png",
    title: "Ball Joints",
    refNo: "Y515012",
    oemNo: "93190906",
  },
  {
    image: "/moto/ytt/p9.png",
    title: "Ball Joints",
    refNo: "Y517003",
    oemNo: "3640.68",
  },
];

const controlArms: Product[] = [
  {
    image: "/moto/ytt/p5.png",
    title: "Control Arm",
    refNo: "Y444015",
    oemNo: "93388569",
  },
  {
    image: "/moto/ytt/p6.png",
    title: "Control Arm",
    refNo: "Y444016",
    oemNo: "93388568",
  },
  {
    image: "/moto/ytt/p3.png",
    title: "Control Arm",
    refNo: "Y444016C",
    oemNo: "4806809041",
  },
];

const categories: Category[] = [
  { label: "Tie Rod Ends", products: tieRodEnds },
  { label: "Ball Joints", products: ballJoints },
  { label: "Control Arms", products: controlArms },
  {
    label: "View All",
    products: [...tieRodEnds, ...ballJoints, ...controlArms],
  },
];

const ITEMS_PER_PAGE = 4;
const AUTO_SCROLL_INTERVAL = 4000; // ms

export default function Products() {
  const [activeTab, setActiveTab] = useState("Tie Rod Ends");
  const [page, setPage] = useState(0);

  const activeCategory =
    categories.find((c) => c.label === activeTab) ?? categories[0];

  const totalPages = Math.ceil(activeCategory.products.length / ITEMS_PER_PAGE);

  const visibleProducts = useMemo(
    () =>
      activeCategory.products.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
      ),
    [activeCategory, page],
  );

  const handleTabChange = (label: string) => {
    setActiveTab(label);
    setPage(0);
  };

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  // Auto-scroll only applies to the "View All" tab, looping through pages.
  useEffect(() => {
    if (activeTab !== "View All" || totalPages <= 1) return;

    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [activeTab, totalPages]);

  return (
    <section className="w-full py-10 sm:py-12 md:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-6 sm:gap-8 md:gap-10 xl:gap-12">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex flex-col items-center gap-2.5 sm:gap-3 text-center px-2 sm:px-0 w-full">
          <span className="eyebrow font-bold text-[#DA0812] text-xs sm:text-sm md:text-base">
            Precision Suspension Solutions
          </span>
          <h2 className="section-title font-bold text-[#202020] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Critical Steering And Suspension Parts Engineered For Superior
            Control And Stability
          </h2>
          <p className="section-text font-normal text-[#404040] w-full text-xs sm:text-sm md:text-base">
            Our steering and suspension components are engineered to deliver
            precise vehicle control, enhanced stability, and long-lasting
            durability. Manufactured using premium-grade materials and advanced
            production technologies, each part is designed to withstand
            demanding driving conditions while maintaining accurate suspension
            geometry, improved steering response, and exceptional ride comfort.
          </p>
        </div>

        {/* Tabs - Individual boxes for each category */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="w-full flex justify-center px-2 sm:px-0">
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto max-w-full">
            {categories.map((cat, index) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => handleTabChange(cat.label)}
                data-aos="fade-up"
                data-aos-delay={200 + index * 50}
                className={`btn-text font-bold rounded-[10px] px-3 sm:px-[25px] py-2.5 sm:py-[10px] text-xs sm:text-sm md:text-base transition-colors whitespace-nowrap text-center border ${
                  activeTab === cat.label
                    ? "bg-[#DA0812] text-white border-[#DA0812]"
                    : "bg-white text-[#71717A] border-[#CCCCCC] hover:text-[#202020] hover:border-[#a0a0a0]"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6">
          {visibleProducts.map((product, i) => (
            <div
              key={`${activeTab}-${product.refNo}-${i}`}
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
              className="flex flex-col bg-white border border-[rgba(204,204,204,0.8)] rounded-[10px] overflow-hidden w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] transition-colors duration-300 ease-in-out hover:border-[#DA0812]">
              <div className="relative w-full aspect-[4/3] sm:aspect-square bg-[rgba(248,248,248,0.6)] p-4 sm:p-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4 sm:p-6"
                />
              </div>

              {/* Text centered for mobile & tablet (xl: items left-aligned) */}
              <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-1 px-4 sm:px-5 py-4 sm:py-5">
                <h3 className="card-title font-bold text-[#DA0812] text-base sm:text-lg">
                  {product.title}
                </h3>
                <span className="text-xs sm:text-sm font-medium text-[#404040]">
                  YTT Ref No: {product.refNo}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#404040] mb-2">
                  OEM No: {product.oemNo}
                </span>

                <Link
                  href="#"
                  className="link-text font-bold text-[#E30613] underline w-fit tracking-tight inline-flex items-center gap-2 text-xs sm:text-sm md:text-base">
                  View Product
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    color="#E30613"
                    className="sm:w-5 sm:h-5"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex items-center justify-center gap-4 sm:gap-6 mt-2">
            <button
              type="button"
              onClick={goPrev}
              disabled={page === 0}
              aria-label="Previous page"
              className="w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full border border-[#DA0812] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed">
              <ArrowLeft
                size={18}
                color="#DA0812"
                strokeWidth={2}
                className="sm:w-5 sm:h-5"
              />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`rounded-full transition-all ${
                    i === page
                      ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#DA0812]"
                      : "w-2 h-2 bg-[#D9D9D9]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={page === totalPages - 1}
              aria-label="Next page"
              className="w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full border border-[#DA0812] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed">
              <ArrowRight
                size={18}
                color="#DA0812"
                strokeWidth={2}
                className="sm:w-5 sm:h-5"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
