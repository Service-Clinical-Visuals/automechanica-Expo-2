"use client";
import Container from "./Container";
import Button from "./Button";
export default function History() {
  return (
    <section
      className="relative w-full py-16 md:py-24 2xl:py-32 4xl:py-48 bg-white overflow-hidden"
      id="history"
    >

      <Container>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10   4xl:gap-22 items-center">

          {/* Left Column: Image */}
          <div data-aos="fade-right" className="xl:col-span-6 aspect-[820/600] relative">

            <div className="relative  rounded-xl overflow-hidden">

              <img
                src="/moto/fleetguard/industry.png"
                alt="Mechanic holding Fleetguard LF3970 oil filter"
                className="w-full h-full object-contain relative z-0"
              />
            </div>
          </div>
          {/* Right Column: Text */}
          <div data-aos="fade-left" className="xl:col-span-6 flex flex-col">

            <h2 className="section-title font-oswald font-semibold mb-6  4xl:mb-10 text-[#272727] font-semibold">
              Many Industries. One Trusted Solution.
            </h2>
            <p className="section-text font-rubik font-normal text-[#4B5563] mb-4  4xl:mb-8 leading-relaxed">

              Fleetguard delivers advanced filtration, coolant, and chemical
              solutions designed to support a wide range of industries and
              applications. From agriculture and construction to marine, mining,
              trucking, rail, and power generation, our products help protect
              engines and equipment while maintaining reliable performance in
              demanding working environments.
            </p>
            <p className="section-text font-rubik font-normal text-[#666666] mb-4  4xl:mb-8 leading-relaxed">

              Every industry presents unique challenges, from dust, moisture,
              and extreme temperatures to heavy workloads, harsh environments,
              and continuous operation. Fleetguard combines proven filtration
              science, advanced technology, extensive research, and application
              expertise to develop solutions that perform reliably under
              demanding conditions. Our products help reduce harmful
              contaminants, protect critical engine components, improve
              efficiency, extend service intervals, and minimize unexpected
              downtime.
            </p>
            <p className="section-text font-rubik font-normal text-[#666666] mb-4 4xl:mb-8 leading-relaxed">

              With dependable filtration solutions for diesel-powered equipment
              across road, field, marine, and industrial applications,
              Fleetguard helps customers maintain consistent performance and
              productivity. Wherever equipment operates, our solutions are
              engineered to keep engines running cleaner, longer, and more
              reliably.
            </p>
            <div>

              <Button
                text="Explore All"
                href="#"
                variant="primary"

              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
