"use client";

import Image from "next/image";
import Link from "next/link";

const corporateLinksLeft = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Products", href: "#" },
  { name: "Technical Properties", href: "#" },
  { name: "Quality", href: "#" },
];

const corporateLinksRight = [
  { name: "Fairs", href: "#" },
  { name: "Photo Gallery", href: "#" },
  { name: "KVKK", href: "#" },
  { name: "Contact", href: "#" },
];

const brandLinks = [
  { name: "Engine Piston", href: "#" },
  { name: "Cylinder Liner", href: "#" },
  { name: "Piston Ring", href: "#" },
];

const socialLinks = [
  { icon: "/moto/mogesan/link.png", href: "#", label: "LinkedIn" },
  { icon: "/moto/mogesan/insta.png", href: "#", label: "Instagram" },
  { icon: "/moto/mogesan/fb.png", href: "#", label: "Facebook" },
  { icon: "/moto/mogesan/yt.png", href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#262626]">
      <div className="custom-container pt-10 md:pt-12 xl:pt-[56px] pb-8 md:pb-10 xl:pb-[40px]">
        {/*
          Mobile (<768px): 2-column grid.
            Row 1: Logo/description (spans both columns)
            Row 2: Corporate (spans both columns)
            Row 3: Our Brands (left) | Contact Us (right) <- side by side, equal width
            Row 4: Social Media (spans both columns)

          Tablet (768px-1279px): 4-column grid.
            Row 1: Logo/description (spans all 4)
            Row 2: Corporate (2 cols) | Our Brands (1 col) | Contact Us (1 col)
            Row 3: Social Media (spans all 4)

          Desktop (xl, 1280px+): original flex row, unchanged.
        */}
        <div
          className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8 xl:flex xl:flex-row xl:justify-between xl:items-start xl:gap-6"
          data-aos="fade-up"
        >
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 xl:w-[23%] xl:flex-shrink-0">
            <Link href="#" className="inline-block mb-6 origin-left">
              <Image
                src="/moto/mogesan/footer_logo.png"
                alt="MOGESAN"
                width={200}
                height={100}
                className="h-[100px] w-auto object-contain scale-105"
                priority
              />
            </Link>

            <p className="body-text text-white max-w-[390px]">
              MOGESAN manufactures high-quality engine pistons, cylinder
              liners, and piston rings, delivering precision, reliability,
              and performance to customers in over 80 countries.
            </p>
          </div>

          {/* Corporate Links */}
          <div className="col-span-2 md:col-span-2 xl:w-[25%] xl:flex-shrink-0">
            <h3 className="card-title text-white mb-4">Corporate</h3>

            <div className="w-full max-w-[298px] border-t border-white/50 mb-5" />

            <div className="flex gap-8">
              <ul className="flex flex-col gap-3">
                {corporateLinksLeft.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="body-text text-white hover:text-[#BF1E2E] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-3">
                {corporateLinksRight.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="body-text text-white hover:text-[#BF1E2E] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Brands */}
          <div className="col-span-1 md:col-span-1 xl:w-[13%] xl:flex-shrink-0">
            <h3 className="card-title text-white mb-4">Our Brands</h3>

            <ul className="flex flex-col gap-3">
              {brandLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="body-text text-white hover:text-[#BF1E2E] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1 xl:w-[19%] xl:flex-shrink-0">
            <h3 className="card-title text-white mb-4">Contact Us</h3>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <Image
                  src="/moto/mogesan/phn.png"
                  alt="Phone"
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0"
                />

                <a
                  href="tel:+903322390220"
                  className="body-text text-white hover:text-[#BF1E2E] transition-colors"
                >
                  +90 332 239 02 20
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Image
                  src="/moto/mogesan/mail.png"
                  alt="Email"
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0"
                />

                <a
                  href="mailto:mgs@mogesan.com"
                  className="body-text text-white lowercase hover:text-[#BF1E2E] transition-colors"
                >
                  mgs@mogesan.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Image
                  src="/moto/mogesan/loc.png"
                  alt="Location"
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0 mt-1"
                />

                <span className="body-text text-white">
                  Evrenköy Caddesi No:2/1 Selcuklu, Konya 42250, TR
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-4 xl:w-[11%] xl:flex-shrink-0">
            <h3 className="card-title text-white mb-4 whitespace-nowrap">
              Social Media Links
            </h3>

            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-[41px] h-[41px] flex-shrink-0 scale-110 hover:opacity-90 hover:scale-125 transition-all duration-300 relative"
                >
                  <Image
                    src={icon}
                    alt={label}
                    fill
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="custom-container">
        <div
          className="border-t border-white/25 py-6 xl:py-[13px] text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="body-text text-white">
            Copyright © 2025 MOGESAN MOTOR GOMLEK PISTON SAN. ve TIC. LTD.
            STI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}