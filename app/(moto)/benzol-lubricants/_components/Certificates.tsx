"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const categories = [
  { key: "oem", label: "O.E.M", folder: "oem", count: 6 },
  { key: "certifications", label: "International Certifications", folder: "certifications", count: 6 },
  { key: "qms", label: "Q.M.S", folder: "qms", count: 4 },
];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);

  const category = categories.find((c) => c.key === activeCategory)!;
  const images = Array.from(
    { length: category.count },
    (_, i) => `/moto/benzol-lubricants/certificates/${category.folder}/${i + 1}.png`
  );

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
              <h2 className="heading-white">Certificates &amp; Quality Standards</h2>
              <span className="mt-3 mb-4 block h-[3px] w-[130px] bg-[#D8A657]" />
              <p className="content-white leading-[22px] max-w-[640px]">
                BENZOL® Industries maintains high standards of quality, performance, and
                reliability through recognized certifications and industry standards. These
                certifications reflect our commitment to consistent manufacturing, responsible
                practices, and trusted lubricant solutions for customers worldwide.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button className="rounded-full content-white bg-[#B38037] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 whitespace-nowrap">
                Explore Certifications
              </button>
              <button
                aria-label="Explore certifications"
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
                onClick={() => setActiveCategory(cat.key)}
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

          {/* Logo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={`${activeCategory}-${i}`}
                className="border border-white/15 bg-[#141414] overflow-hidden flex items-center justify-center p-10 py-15"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <img
                  src={src}
                  alt={`${category.label} ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
