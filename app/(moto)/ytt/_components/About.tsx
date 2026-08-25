import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-12 md:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-8 xl:gap-10">
        {/* Heading */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="700" 
          className="flex flex-col items-center gap-3 text-center w-full"
        >
          <span className="eyebrow font-bold text-[#DA0812]">
            The YTT Story
          </span>
          <h2 className="section-title font-bold text-[#202020] leading-tight">
            Creating Stronger Connections For Modern Mobility
          </h2>
        </div>

        {/* Image - matching parent container width with hover effect */}
        <div 
          data-aos="zoom-in" 
          data-aos-delay="200" 
          data-aos-duration="800"
          className="group w-full aspect-[1620/500] rounded-[5px] overflow-hidden cursor-pointer"
        >
          <img
            src="/moto/ytt/about.png"
            alt="YTT Automotive manufacturing facility"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-105"
          />
        </div>

        {/* Body copy - stretches full container width */}
        <p 
          data-aos="fade-up" 
          data-aos-delay="300" 
          className="section-text font-normal text-[#404040] text-center w-full"
        >
          YTT Automotive is a leading manufacturer of high-quality
          automotive components, specializing in rubber-to-metal parts,
          hoses, suspension arms, and polyurethane suspension bumpers for
          the global aftermarket. With a portfolio of over 15,000 products
          and customers in more than 30 countries, the company delivers
          reliable solutions for passenger cars and light commercial
          vehicles. Supported by internationally recognized IATF 16949 and
          ISO 9001 certifications, YTT Automotive is committed to quality,
          innovation, and continuous growth while serving the global
          automotive industry.
        </p>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="400">
          <Button variant="primary">See What Drives Us</Button>
        </div>
      </div>
    </section>
  );
}