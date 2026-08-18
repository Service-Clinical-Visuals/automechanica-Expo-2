"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-6 bg-[#f5f5f5]">
      <div className="custom-container px-4 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-8 lg:gap-10 mb-8">
          
          {/* Column 1: Logo & Description */}
          <div className="col-span-2 lg:col-span-4 flex flex-col gap-6 pr-0 lg:pr-8">
            <Link href="/" className="relative ">
              <img 
                src="/moto/fasep/logo.png" 
                alt="FASEP Logo" 
                className="w-60 lg:w-80 h-auto object-cover " 
              />
            </Link>
          <p  className="text-[#4a4a4a] oxanium section-text max-w-sm">
              FASEP is an Italian manufacturer of professional wheel aligners, wheel balancers, tire changers, and automotive workshop equipment, delivering precision-engineered solutions for workshops worldwide.
            </p>
          </div>

          {/* Column 2: Corporate */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
            <p   className=" footer-link font-semibold text-black mb-1">
              Corporate
            </p>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Products', 'Solutions', 'News'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[#4a4a4a] oxanium section-texthover:text-[#e2001a] transition-colors ">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Brands */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
                        <p   className=" footer-link font-semibold text-black mb-1">

              Our Brands
            </p>
            <ul className="flex flex-col gap-3">
              {['Wheel Aligners', 'Wheel Balancers', 'Tire Changers', 'Lift Tables'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[#4a4a4a] oxanium section-texthover:text-[#e2001a] transition-colors ">
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#see-more" className="text-[#4a4a4a] font-semibold oxanium section-texthover:text-[#e2001a] transition-colors underline underline-offset-4">
                  See More&gt;&gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
                        <p   className=" footer-link font-semibold text-black mb-1">

              Contact Us
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-gray-500">
                <Phone className="w-5 h-5 text-[#e2001a] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#4a4a4a] oxanium section-texthover:text-[#e2001a] transition-colors cursor-pointer">
                  +39 055 8403126
                </span>
              </div>
              <div className="flex items-start gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-[#e2001a] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-[#4a4a4a] oxanium section-texthover:text-[#e2001a] transition-colors cursor-pointer leading-relaxed">
                  Via Faentina, 96<br/>
                  50032 Ronta (FI)<br/>
                  ITALY
                </span>
              </div>
            </div>
          </div>

          {/* Column 5: Legal Information */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
                        <p   className=" footer-link font-semibold text-black mb-1">

              Legal Information
            </p>
            <ul className="flex flex-col gap-3">
              {['Privacy Policy', 'Cookie Policy', 'Sitemap', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[#4a4a4a] oxanium section-texthover:text-[#e2001a] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 mt-8 flex justify-center text-center">
          <Typography variant="span" color="gray" className="text-[#4a4a4a] oxanium section-text">
            &copy; 2006&ndash;2025 FASEP. All Rights Reserved.
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
