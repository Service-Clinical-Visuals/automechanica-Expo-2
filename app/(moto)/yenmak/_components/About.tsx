"use client";

import Container from "./Container";

const paragraphs = [
  `Yenmak was founded in 1965 in Konya by the Kahvecioğlu family as a small workshop. Over the years, YENMAK has continuously renewed and improved itself, becoming one of the world's leading independent suppliers of engine parts both domestically and internationally.Today, Yenmak manufactures KITS, PISTONS, PISTON PINS, PISTON RINGS, and CYLINDER LINERS; and supplies GASKETS, VALVES, and ENGINE BEARINGS, exporting these products to more than 95 countries on 5 continents.`,
  `As a long-term business partner for our valued customers, YENMAK provides ultimate reliability, top quality, and reasonable prices, as well as sales and after-sales services, ensuring the supply of all engine parts from a single source in a single package. Furthermore, YENMAK values customer relationships, recognizing that the human factor is paramount among all components.`,
  `YENMAK holds INMETRO, ISO 9001, IATF 16949, and ISO 14001 certifications. Today, it is established in Konya's 1st, 2nd, and 3rd Organized Industrial Zones with 2 factories and 1 headquarters & logistics building, covering a total area of 50,000 square meters.Sales and marketing activities are carried out at YENMAK's export office located in Istanbul.`,
];

const images = [
  { src: "/moto/yenmak/about1.png", alt: "Yenmak factory facility in Konya" },
  { src: "/moto/yenmak/about2.png", alt: "Yenmak Konya organized industrial zone facility" },
  { src: "/moto/yenmak/about3.png", alt: "Yenmak headquarters and logistics building" },
];

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="heading text-[32px]! mb-3">About Us</h2>
          <span className="block w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Text content */}
        <div className="max-w-[100%] mx-auto flex flex-col gap-6 mb-12" data-aos="fade-up">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="content text-center">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Facility Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
