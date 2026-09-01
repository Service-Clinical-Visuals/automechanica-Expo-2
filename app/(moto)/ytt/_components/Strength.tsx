"use client";

interface Stat {
  icon: string;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    icon: "/moto/ytt/icon1.png",
    value: "30+",
    label: "Countries",
    description: "Served in 5 Continents",
  },
  {
    icon: "/moto/ytt/icon2.png",
    value: "15,000+",
    label: "SKU's",
    description: "in highest quality",
  },
  {
    icon: "/moto/ytt/icon3.png",
    value: "32,000m.sq",
    label: "Production Campus",
    description: "for a stronger future",
  },
  {
    icon: "/moto/ytt/icon4.png",
    value: "8,000 m/sq",
    label: "Warehouse",
    description: "ready to serve the world",
  },
];

export default function Strength() {
  return (
    <section className="w-full pt-12 pb-12 md:pt-16 md:pb-16 xl:pt-20 xl:pb-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 md:gap-16 xl:gap-24">
        {/* Heading */}
        <div 
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex flex-col items-center gap-3 text-center w-full"
        >
          <span className="eyebrow font-bold text-[#DA0812]">
            Our Strength
          </span>
          <h2 className="section-title font-bold text-[#202020] leading-tight">
            Built for a strong Tomorrow
          </h2>
          <p className="section-text font-normal text-[#404040] w-full">
            YTT Automotive is a premier manufacturer of automotive parts.
            We produce rubber-to-metal parts, hoses, suspension arms, and
            polyurethane suspension bumpers for the global aftermarket.
          </p>
        </div>

        {/* Outer Container */}
        <div className="relative w-full mx-auto flex flex-col xl:block mt-0 xl:mt-24">
          
          {/* Stat Cards Container */}
          <div className="static xl:absolute xl:left-0 xl:top-0 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:-translate-y-1/2 z-10 mb-8 xl:mb-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={100 + index * 100}
                className="flex flex-col items-center text-center gap-2 bg-white/95 border border-[rgba(204,204,204,0.8)] rounded-[10px] px-6 pt-8 pb-8 shadow-sm transition-colors duration-300 ease-in-out hover:border-[#DA0812]"
              >
                <img
                  src={stat.icon}
                  alt=""
                  className="w-10 h-10 object-contain"
                />
                <span className="text-[30px] leading-[38px] font-bold text-[#202020] mt-2">
                  {stat.value}
                </span>
                <span className="stat-label font-medium text-[#202020]">
                  {stat.label}
                </span>
                <p className="section-text font-normal text-[#404040]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Background Image Container */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="300"
            className="group w-full aspect-[4/3] sm:aspect-[16/9] xl:aspect-[1620/500] rounded-[10px] overflow-hidden cursor-pointer"
          >
            <img
              src="/moto/ytt/strength.png"
              alt="YTT Automotive facility rooftop"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}