import Button from "./Button";

export default function Excellence() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px] bg-black">
      <div className="custom-container">
        <div
          className="rounded-[30px] xl:rounded-[50px] border border-white/25 bg-[#262626] p-8 md:p-12 xl:p-[52px] mb-10"
          data-aos="fade-up"
        >
          <div className="flex flex-col xl:flex-row xl:justify-between gap-8">
            <div className="w-full xl:max-w-[1022px]">
              <h2
                className="section-title text-white mb-6 whitespace-nowrap xl:whitespace-normal xl:text-[38px]"
                style={{ fontSize: "clamp(14px, 5.2vw, 38px)" }}
              >
                Engineering Excellence Since 1994
              </h2>
              <p className="body-text text-white">
                MOGESAN started its operations in 1994 in Konya Motor
                Vehicles Industrial zone with the production of cylinder
                liners for internal combustion engines with limited
                facilities in its workshop scale operation. In 1999, Mogesan
                moved to Zafer industrial zone and continued its activities.
                To meet growing market demand, Mogesan expanded its
                production facility from 250 m² to 600 m², and further
                increased it to 1,000 m² in 2001, marking the start of its
                piston manufacturing operations.
              </p>
            </div>

            <div className="flex flex-col items-start xl:items-end xl:h-full xl:justify-between gap-8 flex-shrink-0 xl:pt-4">
              {/* Single line on mobile (break hidden), 2 lines from xl up. */}
              <p className="font-oswald font-semibold text-[15px] sm:text-[16px] xl:text-[18px] leading-[150%] text-white text-right whitespace-nowrap xl:whitespace-normal">
                Precision Engine Components.
                <br className="hidden xl:block" /> Trusted Worldwide.
              </p>

              <Button href="#" circleColor="#FFFFFF" iconColor="#BF1E2E">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 xl:gap-[36px]">
          <div
            className="group relative w-full sm:w-[58%] aspect-[4/3] sm:aspect-[954/552] rounded-[30px] xl:rounded-[50px] overflow-hidden"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)" }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* object-top -> crop only comes off the bottom; top of the
                image always stays fully visible */}
            <img
              src="/moto/mogesan/Excellence2.png"
              alt="MOGESAN manufacturing facility"
              className="absolute inset-0 w-full h-full object-cover object-top rounded-[30px] xl:rounded-[50px] transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div
            className="group relative w-full sm:w-[42%] aspect-[4/3] sm:aspect-[690/552] rounded-[30px] xl:rounded-[50px] overflow-hidden"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)" }}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/moto/mogesan/Excellence1.jpg"
              alt="MOGESAN showroom"
              className="absolute inset-0 w-full h-full object-cover rounded-[30px] xl:rounded-[50px] transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}