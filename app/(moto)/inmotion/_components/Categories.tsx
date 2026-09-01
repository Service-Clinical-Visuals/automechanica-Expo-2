import Container from "./Container";

export default function Categories() {
  const categories = [
    {
      title: "AUTOMOTIVE",
      image: "/moto/inmotion/c1.png"
    },
    {
      title: "INDUSTRIAL",
      image: "/moto/inmotion/c2.png"
    },
    {
      title: "SUPER PRECISION",
      image: "/moto/inmotion/c3.png"
    }
  ];

  return (
    <section className="relative bg-[#C4C4C4] overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-center justify-items-center">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer w-full" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="w-full relative flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-auto object-contain"
                />
                <h3 className="subheading-white absolute bottom-15 left-1/2 -translate-x-1/2 text-[#2A2A2A] tracking-wide group-hover:text-[#C0121C] transition-colors uppercase text-center w-full z-10 pb-2">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
