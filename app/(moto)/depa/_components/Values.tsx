import React from "react";
import { Award, Boxes, Wrench } from "lucide-react";

export default function Values() {
  const valuesData = [
    {
      id: "01",
      icon: "/moto/depa/v1.png",
      title: "Quality You Can Trust",
      desc: "Our production process complies with original equipment's specifications. All our remanufactured parts are thoroughly tested at every step, right through to final inspection.",
    },
    {
      id: "02",
      icon: "/moto/depa/v2.png",
      title: "Reliable Product Availability",
      desc: "Over 60,000 parts are available in our warehouses, with customer-part remanufacturing for rare models and standard or express delivery across Europe.",
    },
    {
      id: "03",
      icon: "/moto/depa/v3.png",
      title: "Dedicated Customer Service",
      desc: "We help you find the right part quickly through identification by license plate, VIN, vehicle model, OE, or competitor reference, supported by reliable technical assistance.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="values">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
         <h2 className="section-title oswald font-semibold text-[#272727] mb-4">
            Our Values
          </h2>
          <p className="rubik section-text text-[#4b5563]  leading-relaxed ">
            Driven by quality, availability, and service, we deliver reliable remanufactured solutions through rigorous testing, dependable supply, and responsive customer support.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
          {valuesData.map((val, index) => (
            <div
              key={val.id}
              className={`bg-white border border-gray-200 rounded-lg p-8 flex flex-col h-full hover:shadow-lg duration-300 ${
                index === 2 
                  ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto xl:col-span-1 xl:w-full xl:mx-0" 
                  : ""
              }`}
            >
              {/* Top Row: Icon & Number */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-25 h-25 bg-[var(--color-primary)] rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <img src={val.icon} alt="setting" className="w-12 h-12" />
                </div>
                <div className="rubik number font-semibold  text-[#949494]/40 leading-none select-none">
                  {val.id}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="oswald font-semibold card-title text-[#272727] mb-4">
                  {val.title}
                </h3>
                <p className="rubik  section-text text-[#4b5563] leading-relaxed mb-8 flex-grow">
                  {val.desc}
                </p>
                <div className="flex justify-end mt-auto">
                  <button className="rubik font-semibold text-[#be1622] hover:text-[#be1622]/80 transition-colors text-sm underline underline-offset-2 decoration-2 decoration-[#be1622]/50 hover:decoration-[#be1622]">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
