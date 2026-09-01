"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Search } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f6] pt-8 pb-8">
      <div className="custom-container px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-10  mb-8">
          
          {/* Column 1: About */}
          <div className="space-y-6 xl:col-span-4">
            <Link href="#" className="inline-block">
              <img
                src="/moto/depa/logo.png"
                alt="Depa Logo"
                className="h-25 w-auto object-contain"
              />
            </Link>
            <p className="rubik text-[#4b5563] section-text leading-relaxed pr-4 max-w-sm">
              DEPA is a trusted specialist in automotive remanufacturing, delivering reliable, high-quality parts while supporting a more sustainable circular economy.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6 xl:col-span-2 xl:pl-4">
            <h3 className="oswald font-semibold card-title text-[#272727]">Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Company", "Documentation", "Contact", "News"].map((item) => (
                <li key={item}>
                  <Link href="#" className="rubik text-[#4b5563] section-text hover:text-[#bd2228] transition-colors ">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6 xl:col-span-3">
            <h3 className="oswald font-semibold card-title text-[#272727]">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
               <img src="/moto/depa/phone.png" alt="phone" className="w-4 h-4 mt-1" />
                <span className="rubik text-[#4b5563] section-text">+333 22 90 31 44</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/depa/mail.png" alt="mail" className="w-4 h-4 mt-1" />
                <a href="mailto:commande@depa.fr" className="rubik text-[#4b5563] section-text hover:text-[#bd2228] transition-colors ">
                  commande@depa.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/depa/loc.png" alt="pin" className="w-4 h-5 mt-1" />
                <span className="rubik text-[#4b5563] section-text leading-relaxed">
                  2 RUE DU HAUT<br />80430 BEAUCAMPS-LE-VIEUX
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6 xl:col-span-3">
           <h3 className="oswald font-semibold card-title text-[#272727]">Subscribe for more information</h3>
            <p className="rubik text-[#4b5563] section-text leading-relaxed">
              Receive the most up to date news from depa. You can register in our e-mail list.
            </p>
            <form className="flex w-full bg-white rounded-lg shadow-sm p-1.5" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 px-3 py-2 rubik text-sm text-[#4b5563]"
                required
              />
              <button 
                type="submit" 
                className="bg-[#bd2228] hover:bg-red-800 transition-colors text-white w-10 h-10 rounded-md flex items-center justify-center shrink-0"
              >
                <Search size={20} strokeWidth={2.5} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="#" className="rubik text-[#4b5563] section-text hover:text-gray-900 transition-colors ">
            Legal Notice
          </Link>
          
          <p className="rubik text-[#4b5563] section-text text-center">
            © Copyright, Depa 2026
          </p>
          
          <Link href="#" className="rubik text-[#4b5563] section-text hover:text-gray-900 transition-colors ">
            General Sales Conditions
          </Link>
        </div>

      </div>
    </footer>
  );
}
