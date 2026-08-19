"use client";

import Button from "./Button";

interface Category {
  image: string;
  label: string;
}

const categories: Category[] = [
  { image: "/moto/optibelt/d1.png", label: "V-Belts" },
  { image: "/moto/optibelt/d2.png", label: "Kraftbands" },
  { image: "/moto/optibelt/d3.png", label: "Other Belts" },
];

export default function Driving() {
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
              The world is in motion — and we are driving it forward.
            </h2>
            <span className="accent-underline" />
          </div>
          <p
            className="section-text font-normal max-w-[1305px] min-[3840px]:max-w-[1700px] leading-relaxed text-[#484848]"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            Wherever dust, heat, cold, aggressive chemicals or enormous
            speeds put the material to the test, Optibelt shows its
            strengths. Wherever low-vibration smooth running is required
            despite high speeds, Optibelt ensures loss-free performance.
            Wherever extreme tensile forces or strong friction must be
            defied, Optibelt performs tirelessly. Whether huge and powerful
            or delicate and precise.
          </p>
        </div>

        {/* Category tiles */}
        <div className="w-full flex flex-wrap justify-center gap-6 xl:gap-[45px]">
          {categories.map((category, index) => (
            <div
              key={category.label}
              className="flex flex-col items-center gap-6 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-30px)]"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={index * 150}
            >
              <div className="group w-full aspect-[510/421] rounded-2xl overflow-hidden">
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
                />
              </div>
              <h3 className="section-title1 font-bold text-[#1A1A1A]">
                {category.label}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="450">
          <Button href="#" variant="primary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}