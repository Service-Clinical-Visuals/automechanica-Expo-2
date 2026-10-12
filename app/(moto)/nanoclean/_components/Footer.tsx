"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16 md:pt-20 pb-8 overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        <div className="grid grid-cols-2 max-[1030px]:md:grid-cols-3 min-[1031px]:grid-cols-[40fr_10fr_10fr_15fr_25fr] gap-x-6 sm:gap-x-8 gap-y-10 min-[1031px]:gap-8 xl:gap-10">
          {/* Company Info */}
          <div
            className="col-span-2 max-[1030px]:md:col-span-3 min-[1031px]:col-span-1 flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Link href="#" className="inline-block">
              <img
                src="/moto/nanoclean/logo.webp"
                alt="NANOCLEAN Logo"
                className="w-[200px] md:w-[230px] h-auto object-contain invert mix-blend-screen"
              />
            </Link>

            <p className="footer-body leading-[1.6] text-white/80 w-full max-w-full xl:max-w-[85%]">
              NANOCLEAN is a Polish family-owned chemical company specializing
              in innovative cleaning, disinfection, and maintenance solutions.
              Its product range serves automotive, industrial, household, and
              healthcare applications, with a focus on quality, performance, and
              environmentally responsible technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="col-span-1 max-[1030px]:md:col-span-1 min-[1031px]:col-span-1 flex flex-col gap-4 min-w-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-white text-[18px] sm:text-[20px] font-semibold font-[var(--font-primary)] whitespace-nowrap">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Home", "About Us", "Products", "Corporate", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="footer-body text-white/80 hover:text-[var(--color-primary)] transition-colors whitespace-nowrap leading-[1.6]"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products */}
          <div
            className="col-span-1 max-[1030px]:md:col-span-1 min-[1031px]:col-span-1 flex flex-col gap-4 min-w-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="text-white text-[18px] sm:text-[20px] font-semibold font-[var(--font-primary)] whitespace-nowrap">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Car", "Bike", "Bicycle", "Camper"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="footer-body text-white/80 hover:text-[var(--color-primary)] transition-colors whitespace-nowrap leading-[1.6]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="footer-body text-white font-bold underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors whitespace-nowrap leading-[1.6]"
                >
                  See More
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div
            className="col-span-2 max-[1030px]:md:col-span-1 min-[1031px]:col-span-1 flex flex-col gap-4 min-w-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="text-white text-[18px] sm:text-[20px] min-[2500px]:text-[26px] min-[3800px]:text-[34px] font-semibold font-[var(--font-primary)]">
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0 mt-1.5" />
                <p className="footer-body text-white/80 leading-[1.6]">
                  Wschodnia 5a<br />
                  62-080 Swadzim
                </p>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" />
                <a
                  href="tel:+48618226561"
                  className="footer-body hover:text-[var(--color-primary)] transition-colors text-white/80 leading-[1.6] whitespace-nowrap"
                >
                  +48 61 822 65 61
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" />
                <a
                  href="mailto:info@mcpgroup.eu"
                  className="footer-body hover:text-[var(--color-primary)] transition-colors text-white/80 leading-[1.6] break-all xl:break-normal"
                >
                  info@mcpgroup.eu
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className="col-span-2 max-[1030px]:md:col-span-3 min-[1031px]:col-span-1 flex flex-col gap-4 w-full max-w-full"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h4 className="text-white text-[17px] sm:text-[18px] min-[2500px]:text-[24px] min-[3800px]:text-[30px] font-semibold font-[var(--font-primary)]">
              Subscribe For More Information
            </h4>
            <p className="footer-body text-white/80 leading-[1.5] w-full max-w-full min-[1031px]:max-w-none">
              Stay informed with the latest product launches, industry news,
              technical updates, and innovations from Metelli Group
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center w-full max-w-full bg-white rounded-[10px] min-[3800px]:rounded-[16px] overflow-hidden h-12 min-[2500px]:h-16 min-[3800px]:h-20 shadow-sm"
            >
              <input
                type="email"
                placeholder="Email Address...."
                className="w-full h-full px-3.5 pr-12 min-[3800px]:px-6 text-[#202020] footer-body outline-none placeholder:text-gray-400 placeholder:footer-body"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 w-9 h-9 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 bg-[var(--color-primary)] rounded-[6px] min-[3800px]:rounded-[10px] flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors text-white"
              >
                <ArrowRight className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full pt-6 border-t border-white/20 text-center">
          <p className="footer-body text-white/70">
            Wszelkie prawa zastrzeżone © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
