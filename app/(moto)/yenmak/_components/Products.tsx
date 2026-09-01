"use client";

import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

const categories = [
  { name: "Piston and Piston Pin", image: "/moto/yenmak/products/1.png" },
  { name: "Piston Ring", image: "/moto/yenmak/products/2.png" },
  { name: "Filter", image: "/moto/yenmak/products/3.png" },
  { name: "Engine Sleeve", image: "/moto/yenmak/products/4.png" },
];

export default function Products() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="product">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <h2 className="heading text-[32px]! mb-3">Our Product Categories</h2>
          <span className="block w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="content">
            Explore Yenmak&apos;s range of precision-engineered engine components, designed to
            meet the highest standards of quality and performance. Each product is developed to
            deliver reliable operation, long-lasting durability, and precise fitment across a wide
            range of automotive applications. Built with advanced manufacturing expertise, our
            components help ensure consistent efficiency and dependable engine performance in
            demanding conditions.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4" data-aos="fade-up">
          {categories.map((category) => (
            <div
              key={category.name}
              className="border border-[#EAEAEA] rounded-lg p-4 flex flex-col items-center"
            >
              <div className="w-full aspect-square border border-[#EAEAEA] flex items-center justify-center mb-5">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-4">{category.name}</h3>
              <Button
                text="View Products"
                href="#"
                variant="secondary"
                className="px-5 py-2 text-sm!"
              />
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
