"use client";
import Container from "./Container";
import Button from "./Button";
const AboutUs = () => {
  return (
    <section
      className="relative py-16 md:py-24 2xl:py-32 4xl:py-48 bg-white overflow-hidden"
      id="about-us"
    >

      <Container className="relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 2xl:gap-20 4xl:gap-32 items-center">

          {/* Left Column */}
          <div data-aos="fade-right" className="flex flex-col h-full">

            <h2 className="section-title font-oswald font-semibold mb-6 2xl:mb-10 4xl:mb-16 text-[#272727]">
              Filtration Science for Reliable Performance
            </h2>
            <p className="section-text font-rubik font-normal text-[#4B5563] mb-4 2xl:mb-8 4xl:mb-12 leading-relaxed">

              Fleetguard delivers advanced filtration solutions designed to
              protect engines and equipment in demanding operating conditions.
              Backed by 66 years of innovation and expertise, we combine
              advanced filtration science, cutting-edge technology, continuous
              research, and rigorous testing to develop dependable products that
              support cleaner operation and consistent performance.
            </p>
            <p className="section-text font-rubik font-normal text-[#666666] mb-10 2xl:mb-16 4xl:mb-24 leading-relaxed">

              Our solutions improve efficiency, reduce downtime, protect
              critical components, and deliver reliable performance across
              modern applications.
            </p>
            <div className="relative mt-auto">
              <img
                src="/moto/fleetguard/abt2.png"
                alt="Scientist looking at a filter disk"
                className="w-full h-full object-cover rounded-md relative z-0"
              />
            </div>
          </div>
          {/* Right Column */}
          <div data-aos="fade-left" className="flex flex-col h-full">

            <div className="relative mb-8 2xl:mb-12 4xl:mb-20">
              <img
                src="/moto/fleetguard/abt1.png"
                alt="Man working with a large air filter"
                className="w-full h-full object-cover rounded-md relative z-0"
              />
            </div>
            <p className="section-text font-rubik font-normal text-[#666666] mb-6 2xl:mb-10 4xl:mb-16 leading-relaxed">

              With a strong focus on quality, innovation, and advanced
              filtration science, Fleetguard provides reliable products and
              trusted technical expertise across a wide range of applications.
              Our solutions are designed to protect critical engine components,
              improve operational efficiency, reduce maintenance and downtime,
              and extend equipment life. By combining advanced technology,
              continuous research, and proven expertise, Fleetguard helps keep
              engines and equipment running cleaner, longer, and more reliably
              in demanding conditions.
            </p>
            <div>

              <Button
                text="Know About Us"
                href="#about-us"
                variant="primary"

              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;
