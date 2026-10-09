import Button from "./Button";

export default function Catalogue() {
  return (
    <section className="relative w-full bg-section-dark">
      {/* Orange band – heading */}
      <div className="w-full bg-primary-dark pt-14 pb-8 md:pt-20 md:pb-10 xl:pt-24 2xl:pt-28 2xl:pb-12 min-[2560px]:pt-36 min-[2560px]:pb-16">
        <div className="custom-container">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 2xl:gap-20">
            <div data-aos="fade-up">
              <span className="section-text block text-secondary font-bold uppercase tracking-wide mb-2 2xl:mb-3">
                Explore Our Collection
              </span>
              <h2 className="section-title text-white exo2-font font-bold leading-tight">
                Discover Our Complete Product Catalogue
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Dark band – text */}
      <div className="w-full pt-8 pb-10 md:pt-10 xl:pb-24 2xl:pt-12 2xl:pb-28 min-[2560px]:pt-16 min-[2560px]:pb-36">
        <div className="custom-container">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 2xl:gap-20">
            <div data-aos="fade-up">
              <p className="section-text text-white leading-relaxed mb-7 2xl:mb-9">
                The online filter catalogue enables you to quickly find the right filter for your vehicle.
                Neither the OEM number nor the chassis number of your vehicle are necessary to find the spare
                parts you are looking for. Simply enter model, year and horsepower and select your vehicle.
              </p>
              <Button href="#" variant="primary">
                Download Catalogue
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image – stacked below on mobile, centred across both bands on desktop */}
      <div className="pb-14 md:pb-20 xl:pb-0 xl:absolute xl:inset-0 xl:flex xl:items-center xl:pointer-events-none">
        <div className="custom-container">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 2xl:gap-20">
            <div className="xl:col-start-2" data-aos="fade-left">
              <img
                src="/moto/senfineco/product.webp"
                alt="Senfineco filter product range"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
