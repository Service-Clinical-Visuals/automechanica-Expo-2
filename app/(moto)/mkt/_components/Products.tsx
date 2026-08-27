"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";

interface Product {
  name: string;
  image: string;
}

interface Category {
  label: string;
  slug: string;
  products: Product[];
}

const categories: Category[] = [
  {
    label: "Cartridge shocks",
    slug: "cartridge-shocks",
    products: [
      { name: "Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p1.jpg" },
      { name: "Endurable Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p2.jpg" },
      { name: "Coil over Top-Rated Precise Shock Absorber", image: "/moto/mkt/p3.jpg" },
      { name: "Black Nitrogen-Charged Heavy Duty Shock Absorber", image: "/moto/mkt/p4.jpg" },
    ],
  },
  {
    label: "Shocks With Spring Seat",
    slug: "shocks-with-spring-seat",
    products: [
      { name: "Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p1.jpg" },
      { name: "Endurable Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p2.jpg" },
      { name: "Coil over Top-Rated Precise Shock Absorber", image: "/moto/mkt/p3.jpg" },
      { name: "Black Nitrogen-Charged Heavy Duty Shock Absorber", image: "/moto/mkt/p4.jpg" },
    ],
  },
  {
    label: "struts Assembly",
    slug: "struts-assembly",
    products: [
      { name: "Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p1.jpg" },
      { name: "Endurable Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p2.jpg" },
      { name: "Coil over Top-Rated Precise Shock Absorber", image: "/moto/mkt/p3.jpg" },
      { name: "Black Nitrogen-Charged Heavy Duty Shock Absorber", image: "/moto/mkt/p4.jpg" },
    ],
  },
  {
    label: "Struts Shocks",
    slug: "struts-shocks",
    products: [
      { name: "Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p1.jpg" },
      { name: "Endurable Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p2.jpg" },
      { name: "Coil over Top-Rated Precise Shock Absorber", image: "/moto/mkt/p3.jpg" },
      { name: "Black Nitrogen-Charged Heavy Duty Shock Absorber", image: "/moto/mkt/p4.jpg" },
    ],
  },
  {
    label: "Twin-tube shocks",
    slug: "twin-tube-shocks",
    products: [
      { name: "Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p1.jpg" },
      { name: "Endurable Gas-Filled Gas Rear Shock Absorber", image: "/moto/mkt/p2.jpg" },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={(index % 4) * 100}
      className="group relative w-full aspect-[390/572] overflow-hidden border border-[rgba(30,30,30,0.25)] rounded-lg sm:rounded-none"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-end justify-between gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="card-text font-heading font-black text-white leading-snug line-clamp-2">
          {product.name}
        </span>

        <span className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 -mt-2 rounded-full bg-white flex items-center justify-center">
          <ArrowUpRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary" strokeWidth={2.5} />
        </span>
      </div>
    </div>
  );
}
export default function OurProducts() {
  const [activeSlug, setActiveSlug] = useState(categories[0].slug);

  const activeCategory =
    categories.find((c) => c.slug === activeSlug) ?? categories[0];

  // Re-scan the DOM for new data-aos elements whenever the product
  // grid changes (category switch swaps out the cards).
  useEffect(() => {
    AOS.refresh();
  }, [activeSlug]);

  return (
    <section
      id="products"
      className="w-full py-16 md:py-20 lg:py-24 scroll-mt-24"
    >
      <div className="custom-container">
        {/* Heading + description */}
        <div className="xl:max-w-[70%] mx-auto text-center mb-8 md:mb-10">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="section-title font-heading font-semibold text-dark capitalize mb-4 md:mb-5"
          >
            Our Products
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            className="body-text font-body font-normal text-body leading-relaxed"
          >
            MKT Holdings, Inc. offers premium shock absorbers, air suspension
            systems, and strut assemblies engineered for superior ride
            comfort, enhanced vehicle stability, long-lasting durability, and
            reliable performance. Manufactured with advanced technology and
            strict quality standards, our products deliver dependable
            performance across a wide range of passenger and commercial
            vehicle applications.
          </p>
        </div>

        {/* Category filters */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="250"
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12"
        >
          {categories.map((category) => {
            const isActive = category.slug === activeSlug;

            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => setActiveSlug(category.slug)}
                className={`filter-text font-heading px-5 py-2.5 border transition-colors ${isActive
                  ? "bg-primary border-primary text-white font-medium"
                  : "bg-white border-primary text-body font-normal hover:bg-primary/5"
                  }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {activeCategory.products.map((product, index) => (
            <div
              key={`${activeCategory.slug}-${index}`}
              className="flex-none basis-[calc(50%-0.375rem)] sm:basis-[calc(50%-0.5rem)] md:basis-[calc(33.333%-1rem)] lg:basis-[calc(25%-1.5rem)]"
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}