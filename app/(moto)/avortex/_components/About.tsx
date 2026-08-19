import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="custom-container px-6 xl:px-12">
        <div className="flex flex-col xl:grid xl:grid-cols-12 items-center ">
           
           {/* Left Content Card */}
           <div className="w-full xl:col-span-6 space-y-6 border border-gray-200 rounded-xl p-8 xl:p-12 shadow-sm bg-white">
              <h2 className="exo2 section-title font-bold text-black mb-6">About Us</h2>
              <div className="inter section-text text-black space-y-6 mb-8 leading-relaxed">
                <p>
                  Founded in 2007, our company initially served the domestic spare parts market. By continuously increasing its production capacity, it expanded its export market from a single Middle Eastern country in 2009 to 36 countries by 2011, including European countries. Following an agreement with a leading ignition products manufacturer in 2015, a new factory was established in 2016, resulting in ISO 9001 Quality certification and OHSAS 18001 Occupational Health and Safety certifications.
                </p>
                <p>
                  The transfer of production methods and technologies has been implemented for all products. In 2019, following requests from OEs (Original Equipment Manufacturers), ISO 16949 quality certification was completed, and material supply to OEs began in 2020.
                  <br className="hidden md:block" />
                  Also in 2019, a factory producing brake hoses was established at the request of OEs, and supply to the OE and then the spare parts market began in 2020. We continue to progress steadily in the sector by increasing our production capacity and quality day by day.
                </p>
              </div>
              <div>
                <Button className="px-8 py-3 inline-block mt-2">
                  Learn More
                </Button>
              </div>
           </div>
    
           {/* Right Image */}
           <div className="w-full xl:col-span-6 relative aspect-[4/3] xl:aspect-[4/3] rounded-lg overflow-hidden shadow-lg mt-8 xl:mt-0">
              <img src="/moto/avortex/abt.png" alt="SVAC Facility" className="object-cover w-full h-full" />
           </div>
    
        </div>
      </div>
    </section>
  );
}
