"use client";

export default function Family() {
  const images = [
    "/moto/optibelt/f1.png",
    "/moto/optibelt/f2.png",
    "/moto/optibelt/f3.png",
  ];

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
              Family-owned company for over 150 years
            </h2>
            <span className="accent-underline" />
          </div>
          <p
            className="section-text font-normal max-w-[1305px] min-[3840px]:max-w-[1700px] leading-relaxed text-[#484848]"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            A very special journey and 154 years of history have shaped the
            Arntz Optibelt Group into what it is today. Past, present and
            future are crucial to the success of our company. In 2023, we
            took this as an opportunity to celebrate our big anniversary at
            our headquarters in Höxter.
          </p>
        </div>

        {/* Image gallery */}
        <div className="w-full flex flex-wrap justify-center gap-6 xl:gap-[45px]">
          {images.map((src, i) => (
            <div
              key={src}
              className="group rounded-2xl overflow-hidden w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-30px)]"
              style={{ aspectRatio: "510 / 349.29" }}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 150}
            >
              <img
                src={src}
                alt={`Optibelt company history ${i + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}