"use client";

import Button from "./Button";

interface Card {
  image: string;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    image: "/moto/optibelt/p1.png",
    title: "New Online Presence",
    description:
      "Learn all about the features of our new online presence, which integrates our website and eShop. Discover the improvements we have developed for you and let us answer any questions you may have.",
  },
  {
    image: "/moto/optibelt/p2.png",
    title: "WebCAP Drive Calculator",
    description:
      "Optibelt WebCap drive calculator is a web-based design and calculation software for belt drive systems. With just a few inputs you receive suitable product recommendations, technical data, and clearly structured calculation results.",
  },
  {
    image: "/moto/optibelt/p3.png",
    title: "Distributor Locator",
    description:
      "You are looking for the right Optibelt sales partner in your area? We offer a large network of distributors all over the world. Explore our distributor locator to find the perfect partner for you.",
  },
];

export default function Performance() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-24">
      <div className="custom-container flex flex-col items-center gap-9">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div
            className="flex flex-col items-center gap-3"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h2 className="section-title font-bold leading-tight text-[#1A1A1A]">
              High-performance drive belts from one of the world&apos;s
              leading manufacturers
            </h2>
            <span className="accent-underline" />
          </div>
          <p
            className="section-text font-normal max-w-[1452px] min-[3840px]:max-w-[1800px] leading-relaxed text-[#484848]"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            Whether in mechanical engineering or the automotive sector, in
            medical technology, the food industry or in household
            appliances - we develop industry-specific drive solutions for
            customers all over the world and have become one of the
            world&apos;s leading manufacturers of high-performance drive
            belts.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-wrap justify-center gap-6 xl:gap-[45px]">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="group flex flex-col bg-white rounded-2xl shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-4 gap-5 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-30px)] min-[3840px]:w-[calc(33.333%-30px)]"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={index * 150}
            >
              <div
                className={`w-full aspect-[483/365] rounded-2xl overflow-hidden ${
                  card.image.includes("p1.png") ? "bg-[#E6E6E6]" : ""
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="section-title1 font-bold text-[#1A1A1A]">
                  {card.title}
                </h3>
                <p className="section-text font-normal text-[#484848] min-[3840px]:text-[20px] min-[3840px]:leading-normal">
                  {card.description}
                </p>
              </div>
              <div>
                <Button variant="primary">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}