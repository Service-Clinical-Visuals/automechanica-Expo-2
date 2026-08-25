"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

const quickLinks = [
  { name: "Company", href: "#" },
  { name: "Media", href: "#" },
  { name: "Support", href: "#" },
  { name: "Where to buy", href: "#" },
  { name: "Contact", href: "#" },
];

const companyLinks = [
  { name: "News", href: "#" },
  { name: "Newsletter", href: "#" },
  { name: "Download", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col pt-12 md:pt-20 bg-[#e6e6e6]">
      <div className="custom-container px-4 sm:px-6 xl:px-0 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-8">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col space-y-6 xl:pr-12">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <img 
                src="/moto/aspl/logo.png" 
                alt="AS-PL Logo" 
                className="h-16 md:h-20 w-auto object-contain" 
              />
            </Link>
            
            {/* Description */}
            <p className="section-text text-[#484848] leading-relaxed max-w-xl">
              AS-PL is a European company which operates in the field of supplying parts and electrical components for vehicles. The company was established in 1992 in Gdańsk, employs over 500 qualified professionals.
            </p>

            {/* Newsletter Input */}
            <div className="flex items-center bg-[#212733] rounded-[16px] overflow-hidden max-w-sm mt-4 p-1">
              <input 
                type="email" 
                placeholder="Please enter your email..." 
                className="bg-transparent text-white placeholder-gray-100 px-4 py-3 outline-none w-full text-sm"
              />
              <button className="bg-primary hover:bg-primary-hover transition-colors w-10 h-10 shrink-0 flex items-center justify-center rounded-[12px] mr-1">
                <img src="/moto/aspl/send.png" alt="Send" className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Columns Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 xl:grid-cols-3 gap-8 pt-4 xl:pt-0 lg:pr-12">
            
            {/* Column 1: Quick Links */}
            <div className="flex flex-col gap-4 col-span-1">
              <span className="text-primary font-semibold card-title mb-2">Quick Links</span>
              <ul className="flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="section-text text-[#484848] hover:text-primary transition-colors ">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-4 col-span-1">
              <span className="text-primary font-semibold card-title mb-2">Company</span>
              <ul className="flex flex-col gap-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="section-text text-[#484848] ">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="flex flex-col gap-4 col-span-2 xl:col-span-1">
              <span className="text-primary font-semibold card-title mb-2">Contact Us</span>
              <ul className="flex flex-col gap-4">
                {/* Phone */}
                <li className="flex items-start gap-3">
                  <img src="/moto/aspl/ph.png" alt="Phone" className="w-5 h-5 mt-1 object-contain opacity-70" />
                  <span className="section-text text-[#484848] ">+48 58 304 12 85</span>
                </li>
                {/* Email */}
                <li className="flex items-start gap-3">
                  <img src="/moto/aspl/mail.png" alt="Email" className="w-5 h-5 mt-1 object-contain opacity-70" />
                  <span className="section-text text-[#484848] ">info@as-pl.com</span>
                </li>
                {/* Location */}
                <li className="flex items-start gap-3">
                  <img src="/moto/aspl/location.png" alt="Location" className="w-5 h-5 mt-1 object-contain opacity-70" />
                  <span className="section-text text-[#484848] leading-relaxed">
                    Ul. Michałki 32,<br/>
                    80-716 Gdańsk
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-white py-4 border-t border-gray-200">
        <div className="custom-container px-4 text-center">
          <Typography variant="p" className="text-black font-normal section-text">
            Copyrights 2026 - AS-PL Sp. Z O.O.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
