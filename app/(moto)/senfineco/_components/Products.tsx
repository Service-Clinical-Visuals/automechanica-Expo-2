import Link from "next/link";
import Button from "./Button";

const products = [
  {
    title: "Fuel System Cleaner",
    description: "Professional Fuel System Cleaner restores the performance of all gasoline",
    image: "/moto/senfineco/1.webp",
  },
  {
    title: "MaxCleane Fuel System",
    description: "MaxCleane Fuel System cleans and eliminates deposits in the entire injection system",
    image: "/moto/senfineco/2.webp",
  },
  {
    title: "Brake & Parts Cleaner",
    description: "Brake & Parts Cleaner cleans and degreases components in the automotive",
    image: "/moto/senfineco/3.webp",
  },
  {
    title: "Radiator Flush",
    description: "Radiator Flush is a detergent and converter mixture designed to remove limescale and contaminants in the cooling system",
    image: "/moto/senfineco/4.webp",
  },
];

export default function Products() {
  return (
    <section className="w-full bg-section py-14 md:py-20 xl:py-24 2xl:py-28 min-[2560px]:py-36">
      <div className="custom-container">
        {/* Heading */}
        <div className="text-center max-w-[1300px] min-[2560px]:max-w-[1800px] mx-auto mb-14 md:mb-16 2xl:mb-20" data-aos="fade-up">
          <span className="section-text block text-primary font-bold uppercase tracking-wide mb-2 2xl:mb-3">
            Our Product Range
          </span>
          <h2 className="section-title text-white exo2-font font-bold leading-tight mb-5 2xl:mb-7">
            Advanced Solutions for Every Drive
          </h2>
          <p className="section-text text-white leading-relaxed">
            Explore our extensive range of automotive lubricants, high-performance additives, and advanced
            vehicle maintenance solutions, carefully developed to support engine protection, enhance
            performance, and promote long-term reliability. From everyday vehicle care to specialized workshop
            applications, SENFINECO delivers versatile automotive solutions designed to meet the evolving needs
            of drivers, technicians, and automotive professionals.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8 2xl:gap-x-12 min-[2560px]:gap-x-16">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="relative flex flex-col pb-8 md:pb-10 2xl:pb-12 max-w-[420px] sm:max-w-none w-full mx-auto"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Grey slanted shadow shape */}
              <div className="absolute left-1.5 right-1.5 top-1/2 bottom-2 bg-[#666666] rounded-[24px] 2xl:rounded-[32px] skew-y-[4deg] origin-left" />

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Product image (circle border is part of the image) */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="relative z-10 ml-[18%] w-[100px] -mb-[50px] md:w-[110px] md:-mb-[55px] 2xl:w-[140px] 2xl:-mb-[70px] min-[2560px]:w-[190px] min-[2560px]:-mb-[95px] h-auto rounded-full"
                />

                {/* Card */}
                <div className="bg-white rounded-t-xl rounded-tr-[50px] 2xl:rounded-tr-[64px] min-[2560px]:rounded-tr-[84px] rounded-b-xl px-5 md:px-6 2xl:px-8 pt-[66px] md:pt-[72px] 2xl:pt-[92px] min-[2560px]:pt-[124px] pb-5 2xl:pb-7 flex-1 flex flex-col items-end text-right">
                  <h3 className="card-title text-secondary exo2-font font-bold leading-tight mb-3 2xl:mb-4">
                    {product.title}
                  </h3>
                  <p className="card-text text-secondary leading-relaxed mb-5 2xl:mb-7 max-w-[90%]">
                    {product.description}
                  </p>
                  <Button href="#" variant="primary" className="mt-auto">
                    View Products
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-end mt-10 md:mt-12 2xl:mt-16">
          <Link
            href="#"
            className="btn-text exo2-font text-primary underline underline-offset-4 hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
