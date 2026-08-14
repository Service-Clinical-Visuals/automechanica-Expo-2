"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-auto bg-[#1D1D1D]">
      {/* Top Section */}
      <div className="w-full pt-16 pb-12 min-[2100px]:pt-24 min-[3800px]:pt-32 min-[2100px]:pb-20 min-[3800px]:pb-24">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 min-[2100px]:gap-12 min-[3800px]:gap-20">
          {/* Column 1: Logo & Welcome (Span 4) */}
          <div className="col-span-1 md:col-span-2 xl:col-span-4 flex flex-col gap-6 min-[3800px]:gap-10" data-aos="fade-up">
            <img
              src="/moto/cemb/logo1.png"
              alt="CEMB"
              className="w-[150px] min-[2100px]:w-[200px] min-[3800px]:w-[300px] object-contain"
            />
            <p className="footer-body text-white leading-relaxed text-sm min-[2100px]:text-base min-[3800px]:text-xl xl:max-w-[90%] xl:pr-6" data-aos="fade-up" data-aos-delay="100">
              CEMB is an Italian engineering company specializing in wheel balancing and vibration analysis, delivering precision solutions since 1946.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-5 mt-2 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="flex items-center justify-center text-white hover:text-primary transition-colors">
                <FaLinkedinIn className="w-5 h-5 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="flex items-center justify-center text-white hover:text-primary transition-colors">
                <FaXTwitter className="w-5 h-5 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="flex items-center justify-center text-white hover:text-primary transition-colors">
                <FaInstagram className="w-5 h-5 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="flex items-center justify-center text-white hover:text-primary transition-colors">
                <FaYoutube className="w-5 h-5 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading text-white font-bold text-lg min-[2100px]:text-xl min-[3800px]:text-3xl">Quick Links</h4>
            <div className="flex flex-col gap-4 min-[3800px]:gap-6">
              <a href="#home" className="footer-body text-white hover:text-white transition-colors text-sm min-[2100px]:text-base min-[3800px]:text-xl">Home</a>
              <a href="#about" className="footer-body text-white hover:text-white transition-colors text-sm min-[2100px]:text-base min-[3800px]:text-xl">About Us</a>
              <a href="#products" className="footer-body text-white hover:text-white transition-colors text-sm min-[2100px]:text-base min-[3800px]:text-xl">Products</a>
            </div>
          </div>

          {/* Column 3: Contact Us (Span 3) */}
          <div className="col-span-1 xl:col-span-3 flex flex-col gap-6 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-white font-bold text-lg min-[2100px]:text-xl min-[3800px]:text-3xl">Contact Us</h4>
            <div className="flex flex-col gap-5 min-[3800px]:gap-8">
              <div className="flex items-center gap-3 min-[3800px]:gap-5">
                <Phone className="w-5 h-5 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" />
                <p className="footer-body text-white text-sm min-[2100px]:text-base min-[3800px]:text-xl">
                  +39 0341 706111
                </p>
              </div>
              <div className="flex items-center gap-3 min-[3800px]:gap-5">
                <Mail className="w-5 h-5 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" />
                <p className="footer-body text-white text-sm min-[2100px]:text-base min-[3800px]:text-xl">
                  industry@cemb.com
                </p>
              </div>
              <div className="flex items-start gap-3 min-[3800px]:gap-5">
                <MapPin className="w-5 h-5 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0 mt-0.5" />
                <p className="footer-body text-white leading-relaxed text-sm min-[2100px]:text-base min-[3800px]:text-xl">
                  CEMB S.p.A. Via<br />
                  Risorgimento n.9 - 23826<br />
                  Mandello del Lario (Lc) Italy -
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter (Span 3) */}
          <div className="col-span-1 md:col-span-2 xl:col-span-3 flex flex-col gap-6 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-white font-bold text-lg min-[2100px]:text-xl min-[3800px]:text-3xl">Subscribe to Newsletter :</h4>
            <p className="footer-body text-white leading-relaxed text-sm min-[2100px]:text-base min-[3800px]:text-xl">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>

            <div className="relative w-full mt-2 min-[3800px]:mt-4">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="w-full bg-white rounded-full py-3 pl-5 pr-[110px] min-[2100px]:py-4 min-[2100px]:pl-6 min-[2100px]:pr-[130px] min-[3800px]:py-6 min-[3800px]:pl-8 min-[3800px]:pr-[180px] text-gray-800 text-sm min-[2100px]:text-base min-[3800px]:text-xl outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-primary text-white rounded-full px-5 min-[2100px]:px-6 min-[3800px]:px-10 text-sm min-[2100px]:text-base min-[3800px]:text-xl font-bold hover:bg-primary-hover transition-colors shadow-md">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full border-t border-whitie/40 py-6 min-[3800px]:py-10">
        <div className="custom-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="footer-body text-white text-sm min-[2100px]:text-base min-[3800px]:text-xl text-center md:text-left">
            © 2026 Cemb All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 min-[3800px]:gap-10">
            <a href="#" className="footer-body text-white hover:text-white transition-colors text-sm min-[2100px]:text-base min-[3800px]:text-xl">Privacy Policy</a>
            <a href="#" className="footer-body text-white hover:text-white transition-colors text-sm min-[2100px]:text-base min-[3800px]:text-xl">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
