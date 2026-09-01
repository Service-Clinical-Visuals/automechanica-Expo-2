import Button from "./Button";

export default function CompleteSolutions() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24">
      <div className="custom-container">
        {/* Heading + description */}
        <div className="max-w-[1225px] xl:max-w-[70%] mx-auto text-center mb-10 md:mb-12">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="section-title font-heading font-semibold text-dark capitalize mb-4 md:mb-5"
          >
            Complete Automotive Suspension Solutions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            className="body-text font-body font-normal text-body leading-relaxed"
          >
            MKT Holdings, Inc. provides comprehensive manufacturing and
            engineering services for automotive suspension components,
            delivering innovative solutions that meet the highest
            international quality standards. From research and product
            development to precision manufacturing, quality testing, and
            global distribution, our services are designed to ensure
            reliable performance, customer satisfaction, and long-term value
            for automotive professionals worldwide.
          </p>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-[963fr_677fr] gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="group w-full aspect-[4/3] lg:aspect-[963/555] rounded-md overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
          >
            <img
              src="/moto/mkt/s1.jpg"
              alt="MKT Holdings service workshop with vehicles in bay"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="group w-full aspect-[4/3] lg:aspect-[677/555] rounded-md overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
          >
            <img
              src="/moto/mkt/s2.jpg"
              alt="MKT Holdings automotive manufacturing production line"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>

        {/* Caption + button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="body-text font-body font-normal text-body leading-relaxed max-w-[820px] xl:max-w-[70%]"
          >
            MKT Holdings, Inc. delivers reliable automotive suspension
            solutions through advanced engineering, precision manufacturing,
            and strict quality standards, ensuring dependable performance for
            customers worldwide.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            className="shrink-0"
          >
            <Button variant="primary">Explore Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
}