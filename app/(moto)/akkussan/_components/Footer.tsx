"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-gray-300" data-aos="fade-up" data-aos-duration="1000">
      
      {/* Main Footer */}
      <div className="custom-container px-4 2xl:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-12 gap-10 2xl:gap-8">
          
          {/* Column 1: Logo & About */}
          <div className="2xl:col-span-3 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <img 
                src="/moto/akkussan/logo.png" 
                alt="Akkussan Logo" 
                className="h-15 w-auto object-contain"
              />
            </Link>
            <p className="inter section-text leading-relaxed text-white max-w-xl mx-auto">
              Founded in 1969, Akkuşsan specializes in high-quality automotive drivetrain components, serving diverse vehicle applications across 55 countries worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="2xl:col-span-2 flex flex-col gap-6 2xl:pl-25">
            <h4 className="text-white font-normal exo2 card-title">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#home" className="inter section-text leading-relaxed text-white hover:text-[var(--color-primary)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="inter section-text leading-relaxed text-white hover:text-[var(--color-primary)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="inter section-text leading-relaxed text-white hover:text-[var(--color-primary)] transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="2xl:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-normal exo2 card-title">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <img src="/moto/akkussan/ph.png" alt="Phone" className="w-5 h-5 object-contain shrink-0 mt-0.5" />
                <a href="tel:+902163643483" className="inter section-text leading-relaxed text-white">
                  +90216 364 3483
                </a>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/akkussan/mail.png" alt="Email" className="w-5 h-5 object-contain shrink-0 mt-0.5" />
                <Link href="mailto:info@akkussan.com.tr" className="inter section-text leading-relaxed text-white">
                  info@akkussan.com.tr
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/akkussan/loc.png" alt="Location" className="w-5 h-5 object-contain shrink-0 mt-0.5" />
                <p className="inter section-text leading-relaxed text-white">
                  Imes Sanayi Sitesi. A blok.<br/>
                  No:102/5, 34775<br/>
                  Y.Dudullu ISTANBUL /<br/>
                  TURKEY
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="2xl:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-normal exo2 card-title">Social</h4>
            <div className="flex gap-4 items-center">
              <a href="#linkedin" className="hover:opacity-80 transition-opacity">
                <img src="/moto/akkussan/in.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
              <a href="#x" className="hover:opacity-80 transition-opacity">
                <img src="/moto/akkussan/x.png" alt="X" className="w-6 h-6 object-contain" />
              </a>
              <a href="#instagram" className="hover:opacity-80 transition-opacity">
                <img src="/moto/akkussan/ins.png" alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
              <a href="#youtube" className="hover:opacity-80 transition-opacity">
                <img src="/moto/akkussan/u.png" alt="YouTube" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="md:col-span-2 2xl:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-normal exo2 card-title">Subscribe to Newsletter :</h4>
            <p className="inter section-text leading-relaxed text-white">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>
            <form className="flex  w-full md:w-[50%] lg:w-[40%] xl:w-full mt-2 bg-white p-1.5" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Your E-Mail id" 
                className="flex-1 min-w-0 bg-transparent text-black px-3 md:px-4 py-3 outline-none btn-text inter placeholder-gray-400"
                required
              />
              <Button 
                type="submit" 
                className="px-6 py-3 btn-text whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white py-4 border-t border-gray-200">
        <div className="custom-container px-4 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="inter section-text leading-relaxed text-black">
            Copyright &copy; All rights reserved by Akkuşsan
          </p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="inter section-text leading-relaxed text-black hover:text-[var(--color-primary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="inter section-text leading-relaxed text-black hover:text-[var(--color-primary)] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
