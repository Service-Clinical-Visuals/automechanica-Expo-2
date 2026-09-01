import React from "react";

export default function Certificates() {
  const certificates = [
    "/moto/ukde-muhendislik/c1.png",
    "/moto/ukde-muhendislik/c2.png",
    "/moto/ukde-muhendislik/c3.png",
    "/moto/ukde-muhendislik/c4.png"
  ];

  return (
    <section className="py-24 bg-white" id="certificates">
      <div className="custom-container px-6 xl:px-12 text-center">
        <h2 className="exo2 section-title font-bold text-[#000000] mb-6">
          Our Certificates
        </h2>
        <p className="inter section-text text-[#000000] max-w-7xl mx-auto mb-16 leading-relaxed">
          Our certifications reflect SVAC's commitment to maintaining high standards in quality, occupational safety, and automotive manufacturing. Each certification supports our continuous efforts to deliver reliable products that meet demanding industry and OE requirements.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="border-2 border-gray-100 group-hover:border-[#ea2227] transition-colors duration-300 rounded p-1 bg-white shadow-sm group-hover:shadow-md h-full flex flex-col justify-center">
                 <img 
                   src={cert} 
                   alt={`Certificate ${index + 1}`} 
                   className="w-full h-auto object-contain"
                 />
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-8 flex justify-end">
          <a href="#" className="inter text-[#ea2227] hover:text-red-700 font-semibold text-[15px] transition-colors px-2">
            View All
          </a>
        </div> */}

      </div>
    </section>
  );
}
