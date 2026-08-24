"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const categories = [
  { key: "exhibition", label: "Exhibition", folder: "exhibition" },
  { key: "product-showcase", label: "Product Showcase", folder: "product-showcase" },
  { key: "sports", label: "Sports And Racing", folder: "sports" },
];

const IMAGES_PER_CATEGORY = 6;
const PER_PAGE = 3;

export default function Highlights() {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [page, setPage] = useState(0);

  const category = categories.find((c) => c.key === activeCategory)!;
  const images = Array.from(
    { length: IMAGES_PER_CATEGORY },
    (_, i) => `/moto/benzol-lubricants/highlights/${category.folder}/${i + 1}.png`
  );
  const totalPages = Math.ceil(images.length / PER_PAGE);
  const visible = images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setPage(0);
  };

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
                Moments &amp; Highlights
              </h2>
              <span className="mt-3 mb-4 block h-[3px] w-[130px] bg-[#D8A657]" />
              <p className="content-white leading-[22px] max-w-[640px]">
                Explore the BENZOL® Lubricants Industries journey through our photo collection,
                featuring industry exhibitions, product showcases, sports and racing events, and
                key moments from across our global presence.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button className="rounded-full content-white bg-[#B38037] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 whitespace-nowrap">
                Explore Gallery
              </button>
              <button
                aria-label="Explore gallery"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#B38037] transition hover:bg-gray-100 shrink-0"
              >
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <hr className="border-t border-white/10 mb-10" />

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`content-white px-5 py-2 text-sm font-medium border transition-colors ${
                  activeCategory === cat.key
                    ? "bg-[#B38037] border-[#B38037] text-white"
                    : "border-white/25 text-white/80 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((src, i) => (
              <div
                key={`${activeCategory}-${page}-${i}`}
                className="border border-white/15 overflow-hidden aspect-[4/3]"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <img
                  src={src}
                  alt={`${category.label} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
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
