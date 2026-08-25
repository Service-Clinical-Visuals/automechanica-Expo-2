"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/corporate" },
  { name: "Products", href: "/products" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const productLinks = [
  { name: "Compressor", href: "/products/compressor" },
  { name: "Air Louvers", href: "/products/air-louvers" },
  { name: "ATC", href: "/products/atc" },
  { name: "Heating valves", href: "/products/heating-valves" },
  {
    name: "Temperature Regulators",
    href: "/products/temperature-regulators",
  },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: "/moto/sndc/fb.png" },
  { name: "Twitter", href: "#", icon: "/moto/sndc/twit.png" },
  { name: "LinkedIn", href: "#", icon: "/moto/sndc/link.png" },
  { name: "Instagram", href: "#", icon: "/moto/sndc/insta.png" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-6">
      <div className="custom-container">
        {/* Footer Main Content */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-[minmax(0,2.2fr)_minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,0.8fr)]
            gap-10
            xl:gap-x-10
            mb-12
          "
        >
          {/* Column 1: Logo & Info */}
          <div
            className="col-span-2 md:col-span-3 xl:col-span-1 min-w-0"
            data-aos="fade-up"
          >
            <Link
              href="/"
              className="inline-block mb-6 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/moto/sndc/logo.png"
                alt="SNDC Logo"
                width={100}
                height={80}
                className="w-20 h-auto"
              />
            </Link>

            <p className="section-text leading-relaxed">
              SNDC is a manufacturer of automotive HVAC components,
              specializing in heating, cooling, ventilation, and air
              filtration systems. With decades of experience, the company
              delivers reliable solutions designed for comfort, efficiency,
              and performance across various vehicle applications.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div
            className="col-span-1 md:col-span-1 xl:col-span-1 min-w-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="font-semibold text-[20px] leading-[23px] text-[#202020] mb-6 font-worksans">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="section-text hover:text-[#D3111B] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div
            className="col-span-1 md:col-span-1 xl:col-span-1 min-w-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="font-semibold text-[20px] leading-[23px] text-[#202020] mb-6 font-worksans">
              Products
            </h4>

            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="section-text hover:text-[#D3111B] transition-colors duration-300 break-words"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div
            className="col-span-2 md:col-span-1 xl:col-span-1 min-w-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="font-semibold text-[20px] leading-[23px] text-[#202020] mb-6 font-worksans">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 min-w-0">
                <Image
                  src="/moto/sndc/loc.png"
                  alt="Location"
                  width={24}
                  height={24}
                  className="flex-shrink-0 translate-y-2"
                />

                <span className="section-text min-w-0 break-words">
                  274 Chemin des Agriès - 31860 Labarthe-sur-Lèze France
                </span>
              </li>

              <li className="flex items-start gap-3 min-w-0">
                <Image
                  src="/moto/sndc/phn.png"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />

                <a
                  href="tel:+33534480480"
                  className="section-text hover:text-[#D3111B] transition-colors duration-300 break-words"
                >
                  +33 (0)5 34 480 480
                </a>
              </li>

              <li className="flex items-start gap-3 min-w-0">
                <Image
                  src="/moto/sndc/mail.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />

                <a
                  href="mailto:sndc@sndc.fr"
                  className="section-text hover:text-[#D3111B] transition-colors duration-300 break-words"
                >
                  sndc@sndc.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us On */}
          <div
            className="col-span-2 md:col-span-3 xl:col-span-1 min-w-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="font-semibold text-[20px] leading-[23px] text-[#202020] mb-6 font-worksans">
              Follow Us On
            </h4>

            <div className="flex items-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                  data-aos="zoom-in"
                  data-aos-delay={500 + index * 100}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          className="w-full border-t border-[#404040] pt-6 flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="section-text text-center">
            © 2022 - All Rights Are Reserved - This site is protected by
            reCAPTCHA and Google (Privacy Policy and Terms of Service)
          </p>
        </div>
      </div>
    </footer>
  );
}