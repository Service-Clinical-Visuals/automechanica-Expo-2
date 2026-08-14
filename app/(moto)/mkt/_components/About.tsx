export default function AboutMkt() {
  return (
    <section
      id="about-us"
      className="w-full py-16 md:py-20 lg:py-24 scroll-mt-24"
    >
      <div className="custom-container">
        {/* Heading + paragraph */}
        <div className="max-w-[70%] mx-auto text-center mb-10 md:mb-12 lg:mb-16">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="section-title font-heading font-semibold text-dark capitalize mb-4 md:mb-5"
          >
            About MKT Holdings, Inc.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            className="body-text font-body font-normal text-body leading-relaxed"
          >
            Founded in New York, United States, MKT Holdings, Inc. is a
            leading manufacturer specializing in the research, design,
            development, and production of premium automotive shock
            absorbers. Backed by advanced manufacturing facilities, modern
            production technologies, and a dedicated engineering team, the
            company delivers high-performance suspension solutions for the
            global automotive aftermarket.
          </p>
        </div>

        {/* Image */}
        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          className="group w-full rounded-[20px] overflow-hidden border border-black/25"
        >
          <img
            src="/moto/mkt/about.jpg"
            alt="MKT Holdings suspension-equipped sports car on a mountain road"
            className="w-full h-auto aspect-[1680/669] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}