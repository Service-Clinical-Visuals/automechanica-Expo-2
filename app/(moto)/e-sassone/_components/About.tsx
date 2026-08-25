"use client";

import Container from "./Container";

const blocks = [
  {
    title: "An Italian manufacturing company specialized in clutches",
    text: "E. SASSONE is an Italian manufacturer of clutches and transmission components with decades of engineering expertise. The company develops reliable solutions for OE/OES, aftermarket, and customer-specific applications. Its integrated 12,000 m² facility brings together engineering, production, testing, quality control, and global distribution to ensure consistent performance and traceability.",
    image: "/moto/e-sassone/about2.png",
    alt: "E. Sassone facility gate and warehouse exterior",
    imageFirst: false,
  },
  {
    title: "Italian production, in-house control and manufacturing know-how",
    text: "E. SASSONE manufactures clutch and transmission components for automotive, commercial, racing, marine, and industrial sectors. With over 70 years of experience, the company delivers both standard catalogue products and custom-engineered solutions, ensuring reliable performance and precise manufacturing for diverse application needs.",
    image: "/moto/e-sassone/about1.png",
    alt: "E. Sassone manufacturing floor with production machinery",
    imageFirst: true,
  },
];

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-14 md:mb-16" data-aos="fade-up">
          <span className="h-1 w-16 mt-1 md:w-28 bg-primary" />
          <h2 className="heading text-[32px]! -ml-3 whitespace-nowrap">About Us</h2>
          <span className="h-1 w-16 mt-1 -ml-3 md:w-28 bg-primary" />
        </div>

        {/* Content blocks */}
        <div className="flex flex-col gap-10">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div
                className={block.imageFirst ? "order-2 lg:order-1" : "order-2"}
                data-aos={block.imageFirst ? "fade-right" : "fade-left"}
              >
                <img
                  src={block.image}
                  alt={block.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div
                className={block.imageFirst ? "order-1 lg:order-2" : "order-1"}
                data-aos={block.imageFirst ? "fade-left" : "fade-right"}
              >
                <h3 className="subheading font-bold! mb-6">{block.title}</h3>
                <p className="content max-w-[725px]!">{block.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
