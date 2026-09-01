"use client";

import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

const categories = [
  {
    name: "Clutch discs",
    image: "/moto/e-sassone/products/1.png",
    description:
      "Clutch discs for cars, commercial vehicles, tractors, trucks and special applications, designed to ensure smooth engagement, durability and stable performance.",
  },
  {
    name: "Pressure plates",
    image: "/moto/e-sassone/products/2.png",
    description:
      "Pressure plates and clutch assemblies engineered to ensure correct load, long-term reliability and consistent performance in different operating conditions.",
  },
  {
    name: "Clutch kits",
    image: "/moto/e-sassone/products/3.png",
    description:
      "Complete solutions for fast and safe replacement: clutch disc, pressure plate and matching components according to each technical specification.",
  },
  {
    name: "Torsional dampers",
    image: "/moto/e-sassone/products/4.png",
    description:
      "Components designed to reduce torsional vibrations on engines, transmissions and industrial, agricultural, marine and special applications.",
  },
];

export default function Products() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="product">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
            <span className="h-1 w-16 mt-1 md:w-28 bg-primary" />
            <h2 className="heading text-[32px]! -ml-3 whitespace-nowrap">Our Product Portfolio</h2>
            <span className="h-1 w-16 mt-1 -ml-3 md:w-28 bg-primary" />
          </div>
          <p className="content">
            Explore E. SASSONE&apos;s precision-engineered clutch discs and clutch kits, developed
            to deliver smooth power transmission, exceptional durability, and reliable performance
            for passenger, commercial, racing, marine, and industrial applications.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4" data-aos="fade-up">
          {categories.map((category) => (
            <div
              key={category.name}
              className="border border-[#EAEAEA] rounded-lg overflow-hidden flex flex-col"
            >
              <div className="w-full aspect-square bg-white flex items-center justify-center p-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="block w-15 h-0.5 bg-primary mb-1" />
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">{category.name}</h3>
                <p className="content text-sm! mb-6 flex-1">{category.description}</p>
                <Button
                  text="View Product"
                  href="#"
                  variant="secondary"
                  className="w-full justify-center py-3! text-sm!"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <Link href="#" className="text-primary font-medium text-sm hover:underline">
            View All Categories
          </Link>
        </div>
      </Container>
    </section>
  );
}
