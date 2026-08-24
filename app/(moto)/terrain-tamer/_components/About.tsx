import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-24 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10 xl:items-center">

          {/* Left Image */}
          <div
            className="order-2 xl:order-1 relative w-full aspect-[820/700] rounded-2xl overflow-hidden group"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="/moto/terrain/about.png"
              alt="Terrain Tamer branded 4WD vehicle"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
          </div>

          {/* Right Content */}
          <div
            className="order-1 xl:order-2 flex flex-col justify-center"
          >
            {/* Heading */}
            <h2
              className="section-title font-semibold text-[#272727] leading-tight mb-0 [@media(min-width:1280px)_and_(max-width:1499px)]:!text-xl"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="200"
              data-aos-easing="ease-out-cubic"
            >
              Built on 55 Years of 4WD Expertise
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 mt-5">
              <p
                className="section-text font-normal text-[#4B5563] [@media(min-width:1280px)_and_(max-width:1499px)]:!text-xs"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-easing="ease-out-cubic"
              >
                Terrain Tamer&apos;s history began with a commitment to
                making vehicles stronger, safer, and more reliable for
                Australia&apos;s toughest conditions. Inspired by pioneers
                who depended on rugged vehicles to travel through remote
                and challenging landscapes, the company developed a deep
                understanding of real-world 4WD requirements and the
                importance of dependable performance.
              </p>

              <p
                className="section-text font-normal text-[#4B5563] [@media(min-width:1280px)_and_(max-width:1499px)]:!text-xs"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-easing="ease-out-cubic"
              >
                Since the 1960s, Terrain Tamer has continued learning from
                drivers, mechanics, and customers who operate in demanding
                environments. This experience has helped the company
                identify vehicle weaknesses and develop practical solutions
                that improve durability, reliability, safety, and
                performance across a wide range of 4WD applications.
              </p>

              <p
                className="section-text font-normal text-[#4B5563] [@media(min-width:1280px)_and_(max-width:1499px)]:!text-xs"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="500"
                data-aos-easing="ease-out-cubic"
              >
                From early Bedford and Leyland vehicles to LandCruisers,
                Patrols, and today&apos;s modern 4WD utilities, Terrain
                Tamer has evolved alongside the vehicles and customers it
                serves. Decades of hands-on experience have strengthened
                its engineering knowledge and enabled the development of
                innovative products designed for challenging conditions.
              </p>

              <p
                className="section-text font-normal text-[#4B5563] [@media(min-width:1280px)_and_(max-width:1499px)]:!text-xs"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-easing="ease-out-cubic"
              >
                Today, more than five decades of engineering, testing, and
                manufacturing experience have resulted in a unique range of
                over 60,000 4WD parts. This extensive knowledge continues
                to support customers across Australia and challenging
                regions around the world, including Africa, South America,
                Central Asia, and the polar regions.
              </p>
            </div>

            {/* Button */}
            <div
              className="mt-5"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="700"
              data-aos-easing="ease-out-cubic"
            >
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <Button >Know About Us</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}