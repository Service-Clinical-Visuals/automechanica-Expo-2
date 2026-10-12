"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

const categories = [
  {
    image: "/moto/nanoclean/p1.webp",
    title: "HVAC & Ventilation",
    desc: "Rapid decontamination of evaporators, biofilm eradication and Legionella pneumophila elimination.",
    linkText: "Explore AC8 Series",
    href: "#ac8-series",
  },
  {
    image: "/moto/nanoclean/p2.webp",
    title: "CAR AC PRO Automotive",
    desc: "Complete equipment for automotive repair shops: precision dosers, cleaning and disinfecting chemical formulations.",
    linkText: "For Workshops",
    href: "#workshops",
  },
  {
    image: "/moto/nanoclean/p3.webp",
    title: "Home & Animals",
    desc: "Safe formulas for pet beds, mattresses, and sofas without irritating chlorine or alcohol.",
    linkText: "Home Products",
    href: "#home-products",
  },
  {
    image: "/moto/nanoclean/p4.webp",
    title: "Industry & Maintenance",
    desc: "SMARMAX® technical lubricants, MAXweld® industrial adhesives, and concentrated heavy-duty cleaners.",
    linkText: "Industrial Chemicals",
    href: "#industrial",
  },
];

export default function ProductCategory() {
  return (
    <section id="products" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div
          className="flex flex-col min-[1031px]:flex-row min-[1031px]:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 w-full xl:max-w-[70%]">
            <span className="font-semibold text-[1.125rem] md:text-[1.25rem] text-[var(--color-primary)] underline underline-offset-8 decoration-2 font-[var(--font-primary)]">
              Our Product Category
            </span>
            <Typography
              variant="h2"
              color="dark"
              className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-[#202020] w-full xl:max-w-[70%]"
            >
              Everything you need{" "}
              <span className="!text-[#1F67C8] text-[var(--color-primary)] font-semibold">in one place</span>
            </Typography>
          </div>

          <div className="w-full min-[1031px]:max-w-[50%] xl:max-w-[70%]">
            <Typography
              variant="p"
              color="muted"
              className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[#404040] min-[1031px]:text-right w-full xl:max-w-[70%] min-[1031px]:ml-auto"
            >
              Air conditioning, automotive care, disinfection – each category
              features products engineered to set new industry standards. Your
              benchmark of hygiene awaits.
            </Typography>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 max-[1030px]:sm:grid-cols-2 min-[1031px]:grid-cols-4 gap-6 w-full">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#71717A] rounded-[20px] p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div>
                <div className="w-full aspect-[348/280] rounded-[15px] overflow-hidden border border-[#71717A] mb-4 bg-gray-50">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <Typography
                  variant="h3"
                  color="dark"
                  className="font-semibold text-[19px] sm:text-[21px] text-[#202020] mb-2 leading-snug"
                >
                  {cat.title}
                </Typography>

                <Typography
                  variant="p"
                  color="muted"
                  className="leading-[1.5] text-[#404040] mb-6"
                >
                  {cat.desc}
                </Typography>
              </div>

              <div className="pt-2">
                <Link
                  href={cat.href}
                  className="inline-block hover:text-[var(--color-primary)] transition-colors"
                >
                  <Typography
                    variant="p"
                    color="dark"
                    className="font-semibold underline underline-offset-4 decoration-1 hover:text-[var(--color-primary)] !font-[var(--font-primary)]"
                  >
                    {cat.linkText}
                  </Typography>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
