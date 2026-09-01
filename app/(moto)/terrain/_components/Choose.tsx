interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/moto/terrain/shield.png",
    title: "Built for Tough Conditions",
    description:
      "Durable and reliable parts engineered to withstand demanding off-road environments, harsh terrain, extreme conditions, and heavy-duty use. Built for long-lasting performance, these components provide dependable operation and confidence in challenging conditions—wherever your 4WD takes you.",
  },
  {
    icon: "/moto/terrain/bulb.png",
    title: "Practical Engineering",
    description:
      "Practical and innovative solutions designed to address common 4WD challenges and real-world vehicle needs. Each solution is carefully engineered to enhance performance, durability, and reliability, helping 4WD owners handle demanding driving conditions and challenging terrain with dependable results.",
  },
  {
    icon: "/moto/terrain/prize.png",
    title: "Trusted Experience",
    description:
      "With over 50 years of industry experience, Terrain Tamer delivers quality 4WD products backed by expert knowledge and dependable customer support. Decades of practical experience help provide reliable solutions designed to meet the demands of off-road driving, heavy-duty use, and real-world vehicle needs.",
  },
];

export default function Choose() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-24 bg-white overflow-x-hidden overflow-y-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-12 xl:gap-16 overflow-x-hidden overflow-y-hidden">

        {/* Heading */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center max-w-[1106px] xl:max-w-[70%] mx-auto px-2 overflow-x-hidden overflow-y-hidden">
          <h2
            className="section-title font-semibold text-[#272727] leading-tight"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
            data-aos-easing="ease-out-cubic"
          >
            Why Choose Terrain Tamer?
          </h2>

          <p
            className="section-text font-normal text-[#4B5563]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
            data-aos-easing="ease-out-cubic"
          >
            Built for demanding conditions, Terrain Tamer 4WD parts combine
            practical engineering, proven durability, and decades of
            industry experience to keep your vehicle performing when it
            matters most.
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px bg-[#272727] -mt-2 sm:-mt-4 xl:-mt-6"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="350"
          data-aos-easing="ease-out-cubic"
        />

        {/* Feature Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 overflow-x-hidden overflow-y-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center text-center gap-4 sm:gap-5 bg-white border border-[#E4E4E4] rounded-2xl p-6 sm:p-7 lg:p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#CFCFCF] hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)] overflow-x-hidden overflow-y-hidden"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={450 + index * 150}
              data-aos-easing="ease-out-cubic"
            >
              {/* Icon + Title */}
              <div className="flex items-center justify-center gap-2.5 flex-nowrap whitespace-nowrap w-full overflow-x-hidden overflow-y-hidden">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-6 h-6 object-contain flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
                />

                <h3 className="card-title font-semibold text-[#272727] whitespace-nowrap flex-shrink-0 transition-colors duration-300 group-hover:text-[#111111]">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="section-text font-normal text-[#4B5563] transition-colors duration-300 group-hover:text-[#374151]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}