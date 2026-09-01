"use client";

import Container from "./Container";

const categories = [
  {
    key: "e-mobility",
    label: "E-Mobility",
    image: "/moto/kale/products/1.png",
    description:
      "High-quality OEM solutions engineered for precise fit, consistent performance, and durability, meeting demanding automotive standards and customer requirements.",
  },
  {
    key: "oem-products",
    label: "OEM-Products",
    image: "/moto/kale/products/2.png",
    description:
      "OEM products engineered for superior fit, reliable performance, and lasting quality, built to meet demanding automotive standards and customer requirements.",
  },
  {
    key: "spare-parts",
    label: "Spare Parts",
    image: "/moto/kale/products/3.png",
    description:
      "Reliable spare parts designed for precise fit, consistent performance, and durability, meeting demanding automotive standards and replacement requirements.",
  },
];

export default function Products() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="product">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-full lg:max-w-[70%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="heading text-[32px]! mb-4">Explore Our Product Categories</h2>
          <p className="content">
            Discover KALE&apos;s comprehensive range of thermal management solutions, engineered
            to deliver reliable performance, efficient cooling, and lasting durability across
            diverse automotive applications.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {categories.map((category) => (
            <div
              key={category.key}
              className="border border-[#EAEAEA] rounded-xl p-4 flex flex-col h-full"
            >
              <img
                src={category.image}
                alt={`Kale ${category.label}`}
                className="w-full h-full object-contain"
              />
              <div className="pt-5 flex flex-col items-center text-center">
                <h3 className="heading text-[20px]! mb-3">{category.label}</h3>
                <p className="content mb-4">{category.description}</p>
                <a
                  href="#product"
                  className="content text-primary! font-bold! text-sm hover:opacity-80 underline"
                >
                  View Products
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
