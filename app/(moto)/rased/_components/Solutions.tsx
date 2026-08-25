"use client";

import { useState, useMemo } from "react";
import Container from "./Container";
import Button from "./Button";

const categories = [
  {
    key: "gaskets",
    label: "Gaskets",
    items: [
      { image: "/moto/rased/solutions/gaskets/1.png", name: "Gasket Kit" },
      { image: "/moto/rased/solutions/gaskets/2.png", name: "Cellulose fiber Gasket" },
      { image: "/moto/rased/solutions/gaskets/3.png", name: "Rubber Bounded Gasket" },
      { image: "/moto/rased/solutions/gaskets/4.png", name: "Asbestos Free Gasket" },
    ],
  },
  {
    key: "rings",
    label: "Rings",
    items: [
      { image: "/moto/rased/solutions/rings/1.png", name: "Fastner Ring" },
      { image: "/moto/rased/solutions/rings/2.png", name: "o Rings" },
    ],
  },
  {
    key: "shafts",
    label: "Shafts",
    items: [
      { image: "/moto/rased/solutions/shafts/1.png", name: "Cam Shafts" },
      { image: "/moto/rased/solutions/shafts/2.png", name: "Drive Shafts" },
      { image: "/moto/rased/solutions/shafts/3.png", name: "Shafts" },
    ],
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("gaskets");

  const activeItems = useMemo(() => {
    if (activeTab === "all") return categories.flatMap((c) => c.items);
    return categories.find((c) => c.key === activeTab)?.items ?? [];
  }, [activeTab]);

  return (
    <section className="relative w-full py-16 md:py-24 bg-white" id="solutions">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-[80%] mx-auto mb-14" data-aos="fade-up">
          <p className="text-primary font-bold mb-2">Our Product Range</p>
          <h2 className="heading mb-4">
            Complete Gasket Solutions Engineered for Precision
          </h2>
          <p className="content">
            Discover our comprehensive range of high-performance gaskets designed to meet the
            demanding requirements of diesel fuel injection systems and automotive applications.
            Precision-manufactured from premium materials, our products provide exceptional
            sealing, durability, and long-lasting reliability, ensuring optimal performance across
            OEM and aftermarket industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[180fr_820fr] gap-8" data-aos="fade-up">
          {/* Category Sidebar */}
          <div className="flex lg:flex-col flex-wrap gap-3">
            {categories.map((cat) => {
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveTab(cat.key)}
                  className={`font-bold text-sm px-5 py-2.5 rounded-md border transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-primary border-primary text-white"
                      : "bg-white border-[#D9D9D9] text-[#555555] hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`font-bold text-sm px-5 py-2.5 rounded-md border transition-colors whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              View All
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {activeItems.map((item) => (
              <div
                key={item.image}
                className="bg-white border border-[#EAEAEA] rounded-lg overflow-hidden flex flex-col"
              >
                <div className="bg-[#F5F5F5] aspect-square flex items-center justify-center p-8">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>

                <div className="p-5 flex flex-col items-center text-center flex-1">
                  <h3 className="font-bold text-[#1A1A1A] mb-4">{item.name}</h3>
                  <Button
                    text="View All"
                    href="#"
                    variant="outline"
                    className="mt-auto px-6 py-2 text-[14px]! font-bold rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
