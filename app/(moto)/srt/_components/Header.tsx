"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const activeLink = "Home";

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Corporate", href: "#" },
    { label: "Products", href: "#" },
    { label: "Media", href: "#" },
    { label: "Contact", href: "#" },
    { label: "B2B", href: "#" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 pt-4 ">
        <div className="custom-container">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between px-8 lg:px-10 py-3 relative ">
            {/* Logo Dropdown Container */}
            <div className="absolute top-[12px] z-20 flex items-end justify-center ">
       
              
              <Link href="#" className="relative z-20 w-[100%] flex justify-center">
                <img
                  src="/moto/srt/logo.png"
                  alt="SRT Logo"
                  className="w-full object-contain"
                />
              </Link>
            </div>

            {/* Spacer for Absolute Logo */}
            <div className="w-[110px] md:w-[130px] xl:w-[150px] flex-shrink-0"></div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`exo2 header-link transition-colors font-medium ${
                    activeLink === link.label
                      ? "text-[var(--color-primary)]" 
                      : "text-gray-600 hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Button */}
              <div className="hidden md:block">
                <Button text="Get in Touch" />
              </div>
              
              {/* Mobile Menu Button */}
              <button
                className="xl:hidden text-gray-800 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-32 px-6 flex flex-col gap-4 overflow-y-auto xl:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`exo2 header-link px-8 py-4 border-b border-gray-100 transition-colors font-medium ${
                  activeLink === link.label
                    ? "text-[var(--color-primary)]" 
                    : "text-gray-700 hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col gap-6 pt-4 pb-8">
             <Button 
                text="Get in Touch" 
                className="w-full py-3"
              />
          </div>
        </div>
      )}
    </>
  );
}
