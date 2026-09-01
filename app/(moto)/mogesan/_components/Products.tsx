import Button from "./Button";

const products = [
  {
    image: "/moto/mogesan/p3.png",
    alt: "MOGESAN engine pistons",
    title: "Engine Piston",
    description:
      "High-performance engine pistons engineered for durability, precision fit, and reliable operation under demanding conditions.",
    aspect: "aspect-[533/502]",
  },
  {
    image: "/moto/mogesan/p2.png",
    alt: "MOGESAN cylinder liners",
    title: "Cylinder Liner",
    description:
      "Precision-manufactured cylinder liners designed to reduce wear, improve engine efficiency, and extend engine service life.",
    aspect: "aspect-[534/575]",
  },
  {
    image: "/moto/mogesan/p1.png",
    alt: "MOGESAN piston rings",
    title: "Piston Ring",
    description:
      "Engineered piston rings that ensure optimal sealing, reduced oil consumption, and consistent engine performance.",
    aspect: "aspect-[533/502]",
  },
];

export default function Products() {
  return (
    <section className="w-full py-16 md:py-20 xl:pt-[100px] xl:pb-[159px] bg-black">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 xl:gap-6 pb-8 xl:pb-[41px] border-b border-white/24">
          <div className="w-full xl:max-w-[70%]" data-aos="fade-up">
            <h2 className="section-title text-white mb-4 xl:mb-6">
              Our Products
            </h2>
            <p className="body-text text-white">
              MOGESAN offers premium Engine Pistons, Cylinder Liners, and
              Piston Rings engineered for superior performance, durability,
              and reliable operation in demanding engine applications.
            </p>
          </div>

          <div className="flex-shrink-0" data-aos="fade-up" data-aos-delay="100">
            <Button href="#" circleColor="#FFFFFF" iconColor="#BF1E2E">
              Explore Our Products
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 xl:gap-[40px] pt-10 xl:pt-[70px]">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative w-full sm:w-1/3 ${product.aspect} rounded-[20px] xl:rounded-[30px] overflow-hidden border border-white/50 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-white`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={product.image}
                alt={product.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Full-image dark overlay on hover (not just the bottom) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title/description, fades in together with the overlay above */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 xl:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="card-title text-white mb-2">
                  {product.title}
                </h3>
                <p className="body-text text-white">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}