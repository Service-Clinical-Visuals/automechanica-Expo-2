"use client";

import Container from "./Container";
import Button from "./Button";

const certifications = [
  {
    name: "ISO 9001",
    description:
      "Quality management system certification supporting the control of business and production processes.",
  },
  {
    name: "EAC",
    description:
      "Certification for product compliance in international markets and in EAC/CIS countries.",
  },
];

export default function Certification() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="certifications">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
            <span className="h-1 w-16 mt-1 md:w-28 bg-primary" />
            <h2 className="heading text-[32px]! -ml-3 whitespace-nowrap">Company certifications</h2>
            <span className="h-1 w-16 mt-1 -ml-3 md:w-28 bg-primary" />

          </div>
          <p className="content">
            A concise selection of documents that confirm the quality framework and compliance
            approach of E. SASSONE in its target markets.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="bg-gray-light border border-[#EAEAEA] p-8"
            >
              <span className="block w-16 h-1 bg-primary mb-2" />
              <h3 className="font-bold text-xl text-[#1A1A1A] mb-4">{certification.name}</h3>
              <p className="content mb-6">{certification.description}</p>
              <Button
                text="View Certificate"
                href="#"
                variant="secondary"
                className="px-6 py-3! text-sm!"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
