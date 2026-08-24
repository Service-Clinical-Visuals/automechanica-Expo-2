"use client";

interface StatItem {
  icon: string;
  title: string;
  description: string;
}

const stats: StatItem[] = [
  {
    icon: "/moto/optibelt/quality.png",
    title: "154 Years",
    description: "of experience in rubber processing",
  },
  {
    icon: "/moto/optibelt/team.png",
    title: "2400",
    description: "employees worldwide",
  },
  {
    icon: "/moto/optibelt/setting.png",
    title: "9 production Facilities",
    description: "spread across 7 countries.",
  },
  {
    icon: "/moto/optibelt/quality.png",
    title: "Over 212,200",
    description: "different belt variants",
  },
];

export default function About() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-24">
      <div className="custom-container-wide flex flex-col items-center gap-9">
        {/* Inner container applying the inset padding to everything (Heading, Image, Cards) up to ~1900px screens */}
        <div className="w-full flex flex-col items-center gap-9 max-[1920px]:px-4 max-[1920px]:sm:px-6 max-[1920px]:md:px-10 max-[1920px]:lg:px-16 max-[1920px]:xl:px-20 max-[1920px]:2xl:px-24">
          
          {/* Heading */}
          <div className="flex flex-col items-center gap-6 text-center w-full">
            <div
              className="flex flex-col items-center gap-3"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <h2 className="section-title font-bold leading-tight text-[#1A1A1A]">
                We keep the world moving sustainably.
              </h2>
              <span className="accent-underline" />
            </div>
            <p
              className="section-text font-normal w-full leading-relaxed text-[#484848]"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              We are recognized globally as one of the top manufacturers of
              high-performance power transmission belts and offer our
              customers worldwide highly developed drive solutions. As a
              family-owned company, we are characterized by first-class
              technological quality and industry-specific innovations. With
              more than 150 years of experience in rubber processing, we
              produce a wide range of power transmission belt variants. Our
              nine production facilities in seven countries, together with
              our global sales offices, are the foundation of our
              international success.
            </p>
          </div>

          {/* Facility image */}
          <div
            className="w-full h-[280px] sm:h-[340px] md:h-[400px] xl:h-[451px] 2xl:h-[550px] min-[3840px]:h-[700px] rounded-[24px] overflow-hidden group"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <img
              src="/moto/optibelt/about.png"
              alt="Optibelt production facility aerial view"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
            />
          </div>

          {/* Stat cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-[30px] 2xl:gap-[45px]">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="group flex items-start gap-6 min-[1200px]:max-[1500px]:!gap-3 bg-white rounded-2xl shadow-[0px_3px_8px_rgba(0,0,0,0.24)] px-4 py-7 min-[1200px]:max-[1500px]:!py-5 w-full transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-1 hover:shadow-[0px_10px_24px_rgba(0,53,91,0.18)]"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={index * 120}
              >
                <div className="flex-shrink-0 w-[95px] h-[95px] min-[1200px]:max-[1500px]:!w-[64px] min-[1200px]:max-[1500px]:!h-[64px] rounded-lg bg-[#E6E6E6] overflow-hidden flex items-center justify-center p-5 min-[1200px]:max-[1500px]:!p-3">
                  {stat.icon && (
                    <img
                      src={stat.icon}
                      alt=""
                      className="w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-col pt-3 min-[1200px]:max-[1500px]:!pt-0">
                  <span className="stat-title font-semibold text-[#1A1A1A] mb-1 min-[1200px]:max-[1500px]:!text-base min-[1200px]:max-[1500px]:!mb-0.5 transition-colors duration-500 ease-out group-hover:text-[#00355B]">
                    {stat.title}
                  </span>
                  <span className="section-text font-normal text-[#484848] leading-snug min-[1200px]:max-[1500px]:!text-xs">
                    {stat.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}