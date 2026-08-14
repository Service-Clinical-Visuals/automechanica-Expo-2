"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F5] pt-16 lg:pt-24 pb-8">
      <div className="custom-container flex flex-col gap-12 lg:gap-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-4 gap-y-10 lg:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-3 lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
             <Link href="#" className="w-full">
               <img src="/moto/cormach/logo.png" alt="CORMACH Logo" className="w-[60%] sm:w-[50%] md:w-[60%] lg:w-[80%] xl:w-[70%] h-auto object-contain object-left" />
             </Link>
             <Typography variant="p" color="muted" className="leading-relaxed text-sm mt-2">
               Advanced technology, high quality, effective customer service, unique flexibility and a careful training of the staff.
             </Typography>
             
             {/* Social Icons */}
             <div className="flex items-center gap-3 mt-2">
               <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                 <FaLinkedinIn className="w-4 h-4" />
               </a>
               <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                 <FaInstagram className="w-4 h-4" />
               </a>
               <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                 <FaFacebookF className="w-4 h-4" />
               </a>
               <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                 <FaYoutube className="w-4 h-4" />
               </a>
             </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1 lg:col-span-2 lg:pl-4" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h5" color="dark" className="font-bold mb-2">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-3">
              {['Home', 'Company', 'Products', 'News', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors group">
                    <Typography variant="p" color="muted" className="text-sm group-hover:text-primary transition-colors">
                      {item}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1 lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h5" color="dark" className="font-bold mb-2">
              Our Products
            </Typography>
            <ul className="flex flex-col gap-3">
              {['Wheel Balancers', 'Tyre Changers', 'Wheel Aligners', 'Platform Lifts', 'Complementary Equipment'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors group">
                    <Typography variant="p" color="muted" className="text-sm group-hover:text-primary transition-colors">
                      {item}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="h5" color="dark" className="font-bold mb-2">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:0522631274" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-1" strokeWidth={2} />
                  <Typography variant="p" color="muted" className="text-sm group-hover:text-primary transition-colors">
                    0522631274
                  </Typography>
                </a>
              </li>
              <li>
                <a href="mailto:cormach@cormachsrl.com" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 text-primary shrink-0 mt-1" strokeWidth={2} />
                  <Typography variant="p" color="muted" className="text-sm group-hover:text-primary transition-colors break-all">
                    cormach@cormachsrl.com
                  </Typography>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" strokeWidth={2} />
                  <Typography variant="p" color="muted" className="text-sm leading-snug">
                    VIA A. PIGNEDOLI 2,<br/>CORREGGIO, Re 42015, IT
                  </Typography>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe For More Information */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-3 lg:col-span-3" data-aos="fade-up" data-aos-delay="500">
            <Typography variant="h5" color="dark" className="font-bold mb-2">
              Subscribe For More Information
            </Typography>
            <Typography variant="p" color="muted" className="text-sm leading-relaxed mb-2">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from CORMACH Srl
            </Typography>
            <form className="flex w-full bg-white rounded overflow-hidden border border-gray-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none text-gray-700 placeholder-gray-400"
                required
              />
              <button 
                type="submit"
                className="bg-primary px-5 py-3 text-white hover:bg-red-700 transition-colors flex items-center justify-center shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-gray-300 flex flex-col items-center justify-center text-center">
          <Typography variant="p" color="muted" className="text-xs sm:text-sm">
            © 2019 CORMACH Srl. All Rights Reserved. | Privacy Policy - Cookie Policy
          </Typography>
        </div>
        
      </div>
    </footer>
  );
}
