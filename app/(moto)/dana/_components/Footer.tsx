"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-16 min-[3800px]:mt-32">
      {/* Top Section with Background */}
      <div
        className="w-full relative bg-[#EC2E38] text-white pt-16 pb-16 min-[3800px]:pt-32 min-[3800px]:pb-32 overflow-hidden"
      >
        {/* Splash Image Background on the Left */}
        <div
          className="absolute top-0 left-0 w-full -rotate-4 origin-left md:w-[60%] lg:w-[50%] md:h-[60%] lg:h-[70%]  z-0 bg-no-repeat bg-left-top bg-contain lg:bg-cover "
          style={{ backgroundImage: `url('/moto/dana/bgfooter.png')` }}
        ></div>

        <div className="custom-container relative z-10 grid grid-cols-2 lg:grid-cols-12 gap-8 min-[3800px]:gap-20">

          {/* Column 1: Logo & Welcome (Span 4) */}
          <div className="col-span-2 lg:col-span-5 flex flex-col gap-4 min-[3800px]:gap-12 pr-4 lg:pr-8">
            <img
              src="/moto/dana/logo.png"
              alt="Spicer Logo"
              className="w-[200px] min-[3800px]:w-[400px] object-contain mb-2 "
            />
            <Typography variant="p" color="white" className="footer-body leading-relaxed max-w-[95%] xl:max-w-[85%] " data-aos="fade-up" data-aos-delay="100">
              Dana is a global leader in driveline and mobility technologies, delivering OE-quality components and innovative engineering solutions for passenger, commercial, off-highway, and industrial vehicles worldwide.
            </Typography>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-4 lg:gap-5">
            <Typography variant="h4" color="white" className="footer-heading" data-aos="fade-up" data-aos-delay="100">Quick Links</Typography>
            <div className="flex flex-col gap-2 min-[3800px]:gap-6" data-aos="fade-up" data-aos-delay="200">
              <a href="#home" className="footer-body text-white hover:text-gray-200 transition-colors">Home</a>
              <a href="#about" className="footer-body text-white hover:text-gray-200 transition-colors">About Us</a>
              <a href="#products" className="footer-body text-white hover:text-gray-200 transition-colors">Products</a>
              <a href="#application" className="footer-body text-white hover:text-gray-200 transition-colors">Application</a>
              <a href="#literature" className="footer-body text-white hover:text-gray-200 transition-colors">Literatura</a>
            </div>
          </div>

          {/* Column 3: Contact Us (Span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 lg:gap-5">
            <Typography variant="h4" color="white" className="footer-heading" data-aos="fade-up" data-aos-delay="200">Contact Us</Typography>
            <div className="flex flex-col gap-3 min-[3800px]:gap-6" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-3 min-[3800px]:gap-6 text-white footer-body">
                <Phone className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0" strokeWidth={2.5} />
                <span>+49 731 7046 0</span>
              </div>
              <div className="flex items-center gap-3 min-[3800px]:gap-6 text-white footer-body">
                <Mail className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0" strokeWidth={2.5} />
                <a href="mailto:aftermarket@dana.com" className="hover:underline break-all">aftermarket@dana.com</a>
              </div>
              <div className="flex items-start gap-3 min-[3800px]:gap-6 text-white footer-body">
                <MapPin className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0 mt-1" strokeWidth={2.5} />
                <span className="leading-relaxed">Reinzstraße 3-7<br />D-89233 Neu-Ulm,<br />Germany</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social (Span 1) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 flex flex-col gap-4 lg:gap-5">
            <Typography variant="h4" color="white" className="footer-heading" data-aos="fade-up" data-aos-delay="300">Social</Typography>
            <div className="flex gap-3 min-[3800px]:gap-6" data-aos="fade-up" data-aos-delay="400">
              <a href="#" className="text-white hover:text-gray-200 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors flex items-center justify-center">
                <svg className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 5: Newsletter (Span 3) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 flex flex-col gap-3 lg:gap-4">
            <Typography color="white" className="footer-heading" data-aos="fade-up" data-aos-delay="400">Subscribe to Newsletter :</Typography>
            <Typography color="white" className="footer-body leading-snug" data-aos="fade-up" data-aos-delay="500">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </Typography>

            {/* Visual Input Field */}
            <div className="flex w-full mt-1 bg-white" data-aos="fade-up" data-aos-delay="600">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="flex-1 bg-white text-gray-800 px-4 min-[3800px]:px-8 py-2.5 min-[3800px]:py-6 focus:outline-none placeholder:text-gray-400 font-medium footer-body"
              />
              <button className="bg-[#171717] hover:bg-black text-white px-5 min-[3800px]:px-10 py-2.5 min-[3800px]:py-6 font-semibold transition-colors footer-body">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full bg-white flex flex-col sm:flex-row justify-between items-center py-6 min-[3800px]:py-10 px-4 lg:px-20 min-[3800px]:px-40">
        <Typography variant="p" className="text-[#333] footer-body font-medium mb-4 sm:mb-0">
          Copyright © All rights reserved by Spicer
        </Typography>
        <div className="flex items-center gap-6 min-[3800px]:gap-12">
          <a href="#" className="text-[#333] hover:text-[var(--color-primary)] transition-colors footer-body font-medium">Privacy Policy</a>
          <a href="#" className="text-[#333] hover:text-[var(--color-primary)] transition-colors footer-body font-medium">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
