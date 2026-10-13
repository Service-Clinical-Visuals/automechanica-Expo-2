"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] pt-16 md:pt-20 pb-8 border-t border-gray-200">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-10">
            <Link href="/" className="inline-block mb-6 self-start">
              <img
                src="/moto/gli-therm/footer-logo.webp"
                alt="GLITHERM"
                className="h-auto w-auto object-contain"
              />
            </Link>
            <p className="section-text text-[#202020] leading-relaxed font-inter">
              GLITHERM is a Polish manufacturer and supplier of specialty chemicals, offering glycol-based fluids, automotive products, and industrial raw materials. The company combines product development, quality control, technical support, and customized solutions to meet diverse industry needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="footer-text font-semibold text-[#202020] mb-5 bricolage-font">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-inter">
              <li>
                <Link
                  href="/"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#corporate"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  Corporate
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="footer-text font-semibold text-[#202020] mb-5 bricolage-font">
              Products
            </h4>
            <ul className="flex flex-col gap-3 font-inter">
              <li>
                <Link
                  href="#products"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  GLICAR DOT-4 brake fluid
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  GLICAR DOT 5.1 brake fluid
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="footer-text font-semibold text-[#202020] mb-5 bricolage-font">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 font-inter">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EE464B] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="section-text text-[#202020] leading-relaxed">
                  11 Rozwojowa Street,<br />
                  44-338 Jastrzębie-Zdrój<br />
                  Poland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#EE464B] shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+48733525533"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  +48 733 525 533
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#EE464B] shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:info@glitherm.com"
                  className="section-text text-[#202020] hover:text-[#EE464B] transition-colors"
                >
                  info@glitherm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 font-inter">
          <p className="section-text text-[#555555]">
            Copyright 2026 © GLI-THERM Sp. z o.o.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#privacy"
              className="section-text text-[#555555] hover:text-[#EE464B] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="section-text text-[#555555] hover:text-[#EE464B] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="#sitemap"
              className="section-text text-[#555555] hover:text-[#EE464B] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
