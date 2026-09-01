"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  image: string;
  title: string;
  description: string;
  category: string;
}

interface Category {
  label: string;
  products: Omit<Product, "category">[];
}

const categories: Category[] = [
  {
    label: "Bearing Kits",
    products: [
      {
        image: "/moto/terrain/11.jpg",
        title: "Heavy Duty Swivel Housing Kits",
        description:
          "Terrain Tamer's Heavy Duty Swivel Housing Kits are proudly part of the new Fortified Parts Range.",
      },
      {
        image: "/moto/terrain/12.jpg",
        title: "Heavy Duty Wheel Bearing Kits",
        description:
          "Terrain Tamer's Heavy Duty Wheel Bearing Kits are built for heavy towing and extreme conditions.",
      },
      {
        image: "/moto/terrain/13.png",
        title: "Heavy Duty Differential Kits",
        description:
          "Terrain Tamer's Heavy Duty Differential Kits are proudly part of the new Fortified Parts Range.",
      },
      {
        image: "/moto/terrain/14.png",
        title: "Wheel Bearing Kits",
        description:
          "A 4x4 Wheel Bearing Kit includes everything needed for reliable and efficient wheel bearing replacement.",
      },
    ],
  },
  {
    label: "Suspension",
    products: [
      {
        image: "/moto/terrain/21.jpg",
        title: "Strut Assembles",
        description:
          "Fully assembled with a Terrain Tamer TGS Shock Absorber, Smart Coil, and support mount for easy installation.",
      },
      {
        image: "/moto/terrain/22.jpg",
        title: "Fortified Shock Absorbers",
        description:
          "Fortified Shock Absorbers provide improved ride control, durability, and performance for heavy-duty 4WD use.",
      },
      {
        image: "/moto/terrain/23.jpg",
        title: "Leaf Springs",
        description:
          "Terrain Tamer's 4WD Parabolic Leaf Springs offer improved comfort, flexibility, and a smoother ride.",
      },
      {
        image: "/moto/terrain/24.jpg",
        title: "Steering Dampers",
        description:
          "Terrain Tamer's 4x4 Steering Damper improves steering control, stability, and comfort on rugged terrain.",
      },
    ],
  },
  {
    label: "Filters",
    products: [
      {
        image: "/moto/terrain/31.jpg",
        title: "Air Filters",
        description:
          "Terrain Tamer Air Filters provide reliable filtration, improved airflow, and long-lasting engine protection.",
      },
      {
        image: "/moto/terrain/32.jpg",
        title: "Carbon Active Cabin Filter",
        description:
          "Terrain Tamer Cabin Filters absorb gases and odours while filtering dust, dirt, and allergens for a cleaner, fresher cabin.",
      },
      {
        image: "/moto/terrain/33.jpg",
        title: "Air Box Filter Insert",
        description:
          "Terrain Tamer's Air Box Filter Inserts improve filter sealing, support the airbox structure, and reduce the risk of engine dusting.",
      },
      {
        image: "/moto/terrain/34.jpg",
        title: "Filter Kits",
        description:
          "OEM-quality filters with essential accessories for reliable, efficient, and long-lasting vehicle performance.",
      },
    ],
  },
  {
    label: "Clutch",
    products: [
      {
        image: "/moto/terrain/41.jpg",
        title: "Fortified Plus Clutches",
        description:
          "Terrain Tamer Fortified Plus Clutches offer up to 80% more torque capacity with durable Kevlar construction.",
      },
      {
        image: "/moto/terrain/42.jpg",
        title: "OE Replacement Clutch Kits",
        description:
          "Terrain Tamer Clutch Kits are precision-engineered for reliable performance in extreme 4WD conditions.",
      },
      {
        image: "/moto/terrain/43.jpg",
        title: "Heavy Duty Clutch Kits",
        description:
          "Terrain Tamer Heavy Duty Clutch Kits offer 25% higher clamp load, premium materials, and enhanced durability.",
      },
      {
        image: "/moto/terrain/44.png",
        title: "Clutch Slave Cylinder",
        description:
          "Terrain Tamer Clutch Slave Cylinders deliver OE-quality performance and durability for 4WD use.",
      },
    ],
  },
];

const categoriesWithLabel: { label: string; products: Product[] }[] =
  categories.map((c) => ({
    label: c.label,
    products: c.products.map((p) => ({
      ...p,
      category: c.label,
    })),
  }));

const tabLabels = [
  ...categoriesWithLabel.map((c) => c.label),
  "View All",
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("Bearing Kits");

  const activeProducts =
    activeTab === "View All"
      ? categoriesWithLabel.flatMap((c) => c.products)
      : categoriesWithLabel.find((c) => c.label === activeTab)?.products ?? [];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-24 bg-white overflow-x-hidden overflow-y-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10 xl:gap-12 overflow-x-hidden overflow-y-hidden">

        {/* Heading */}
        <div
          className="flex flex-col items-center gap-3 sm:gap-4 text-center max-w-[820px] xl:max-w-[70%] mx-auto px-2 overflow-x-hidden overflow-y-hidden"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
        >
          <h2 className="section-title font-semibold text-[#272727] leading-tight !text-2xl sm:!text-3xl md:!text-4xl xl:!text-5xl">
            Explore Our 4WD Products
          </h2>

          <p className="section-text font-normal text-[#4B5563] !text-sm sm:!text-base lg:!text-lg">
            Discover our expertly engineered 4WD parts, built for
            durability, reliability, and dependable performance in the
            toughest conditions.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="relative w-full flex justify-center overflow-x-hidden overflow-y-hidden"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="400"
          data-aos-easing="ease-out-cubic"
        >
          {/* Mobile */}
          <div className="grid grid-cols-2 gap-2.5 w-full sm:hidden overflow-x-hidden overflow-y-hidden">
            {tabLabels.map((label, idx) => {
              const isLastOdd =
                idx === tabLabels.length - 1 &&
                tabLabels.length % 2 !== 0;

              return (
                <button
                  key={label}
                  onClick={() => setActiveTab(label)}
                  className={`category-tab font-bold text-center border rounded-[5px] py-2 px-3 !text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                    isLastOdd ? "col-span-2 w-1/2 mx-auto" : ""
                  } ${
                    activeTab === label
                      ? "text-[#FECC00] border-[#FECC00] shadow-[0_4px_12px_rgba(254,204,0,0.12)]"
                      : "text-[#4B5563]/60 border-[#E4E4E4] hover:text-[#4B5563] hover:border-[#FECC00]/50"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Tablet & up */}
          <div className="hidden sm:flex w-full sm:w-auto max-w-full items-center gap-8 lg:gap-12 bg-white border border-[#E4E4E4] rounded-[10px] px-14 lg:px-20 h-[56px] overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabLabels.map((label) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`category-tab font-bold whitespace-nowrap flex-shrink-0 !text-sm lg:!text-base transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                  activeTab === label
                    ? "text-[#FECC00] scale-[1.02]"
                    : "text-[#4B5563]/25 hover:text-[#4B5563]/60"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-6 overflow-x-hidden overflow-y-hidden">
          {activeProducts.map((product, i) => (
            <div
              key={`${activeTab}-${product.title}-${i}`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 120}
              data-aos-easing="ease-out-cubic"
              className="group flex flex-col bg-white border border-[#E4E4E4] p-4 w-full max-w-[382px] mx-auto overflow-x-hidden overflow-y-hidden"
            >
              {/* Inner image card */}
              <div className="w-full max-w-[350px] h-[300px] mx-auto overflow-x-hidden overflow-y-hidden border border-[#E4E4E4] bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                    product.category === "Bearing Kits"
                      ? product.title === "Wheel Bearing Kits"
                        ? "object-cover object-left"
                        : "object-cover object-center"
                      : "object-contain object-center"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center text-center gap-2 sm:gap-3 pt-5 sm:pt-6 overflow-x-hidden overflow-y-hidden">
                <h3 className="card-title font-semibold text-[#272727] leading-snug !text-sm sm:!text-base lg:!text-lg break-words">
                  {product.title}
                </h3>

                <p className="section-text font-normal text-[#4B5563] !text-xs sm:!text-sm lg:!text-base break-words">
                  {product.description}
                </p>

                <Link
                  href="#"
                  className="relative link-text font-semibold text-[#272727] !text-xs sm:!text-sm mt-1 transition-colors duration-300 hover:text-[#FECC00]"
                >
                  View Products

                  <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#272727]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}