"use client";

import Container from "./Container";
import Button from "./Button";

const applications = [
  {
    name: "Cars",
    image: "/moto/e-sassone/application/1.png",
    description:
      "Clutch and transmission component range for passenger cars and light commercial vehicles.",
  },
  {
    name: "Trucks",
    image: "/moto/e-sassone/application/2.png",
    description:
      "Applications for trucks, buses and industrial vehicles with dedicated technical requirements.",
  },
  {
    name: "Tractors",
    image: "/moto/e-sassone/application/3.png",
    description:
      "Products and applications for tractors, agricultural vehicles and working machines.",
  },
  {
    name: "Torsion dampers",
    image: "/moto/e-sassone/application/4.png",
    description:
      "Torsional dampers and related solutions for vibration, torque and transmission control.",
  },
];

export default function Application() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="application">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
            <span className="h-1 w-16 mt-1 md:w-28 bg-primary" />
            <h2 className="heading text-[32px]! -ml-3 whitespace-nowrap">Select an application family</h2>
            <span className="h-1 w-16 mt-1 -ml-3 md:w-28 bg-primary" />
          </div>
          <p className="content">
            Open the catalogue family that best matches the vehicle or application you want to
            consult.
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {applications.map((application) => (
            <div
              key={application.name}
              className="border border-[#EAEAEA] rounded-lg overflow-hidden flex flex-col"
            >
              <div className="w-full aspect-4/3 bg-[conic-gradient(#f0f0f0_90deg,transparent_90deg_180deg,#f0f0f0_180deg_270deg,transparent_270deg)] bg-size-[20px_20px] bg-white flex items-center justify-center">
                <img
                  src={application.image}
                  alt={application.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 border-t border-[#EAEAEA]">
                <span className="block w-14 h-0.5 bg-primary mb-1" />
                <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">{application.name}</h3>
                <p className="content text-sm! mb-6 flex-1">{application.description}</p>
                <Button
                  text="Open Catalogue"
                  href="#"
                  variant="secondary"
                  className="w-full justify-center py-3! text-sm!"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
