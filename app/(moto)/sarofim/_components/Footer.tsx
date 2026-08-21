"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "./Container";

const corporateLinks = ["Home", "Products", "News", "Career", "Distribution"];

const productLinks = [
  "Lubricants and chemicals",
  "Workshop equipment",
  "Tools",
  "Electrical System",
  "Spare Parts",
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] pt-14 pb-8">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[26fr_15fr_18fr_20fr_21fr] gap-10">
            {/* Col 1: Logo */}
            <div className="flex flex-col gap-4">
              <img src="/moto/sarofim/logo.png" alt="Sarofim" className="h-auto w-44" />
            </div>

            {/* Col 2: Corporate */}
            <div>
              <h4 className="heading-white text-xl! mb-5">Corporate</h4>
              <ul className="space-y-3">
                {corporateLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content-white text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Products */}
            <div>
              <h4 className="heading-white text-xl! mb-5">Products</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content-white text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div>
              <h4 className="heading-white text-xl! mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                  <span className="content-white text-sm">+49 7266 9169900</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                  <span className="content-white text-sm">info@sarofim.de</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <span className="content-white text-sm">
                    Contact Details:
                    <br />
                    Sarofim GmbH Germany
                    <br />
                    Riemenstraße 23
                    <br />
                    74906 Bad Rappenau, Germany
                  </span>
                </li>
              </ul>
            </div>

            {/* Col 5: Subscribe */}
            <div>
              <h4 className="heading-white text-xl! mb-5">Subscribe For More Information</h4>
              <p className="content-white text-sm mb-5">
                Stay informed with the latest product launches, industry news, technical updates,
                and innovations from Sarofim GmbH
              </p>
              <form className="flex items-center bg-white rounded-full pl-4 pr-1 py-1 max-w-[320px]">
                <input
                  type="email"
                  placeholder="Email Address..."
                  className="flex-1 bg-transparent text-sm text-[#0D0D0D] placeholder-[#0D0D0D]/60 outline-none min-w-0"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-hover"
                >
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-center content-white text-sm">
              Copyright © 2026 Sarofim GmbH - All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
