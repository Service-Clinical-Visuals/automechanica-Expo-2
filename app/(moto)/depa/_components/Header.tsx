"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, ChevronDown, Search, Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Set active link (hardcoded to Home based on screenshot)
  const activeLink = "Home";

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half of the banner (viewport height)
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Products", href: "#" },
    { label: "Company", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Contact", href: "#" },
    { label: "News", href: "#" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? "bg-white shadow-md py-4 translate-y-0 opacity-100 pointer-events-auto" 
            : "bg-white py-4 -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="custom-container flex items-center justify-between px-6 lg:px-12 xl:px-16">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0">
            <img
              src="/moto/depa/logo.png"
              alt="Depa Logo"
              className="h-10 xl:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`oswald header-link transition-colors font-medium ${
                  activeLink === link.label
                    ? "text-[#2d2e83]" // Active state matches primary color
                    : "text-gray-700 hover:text-[#2d2e83]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Mobile Menu */}
          <div className="flex items-center gap-4 xl:gap-8">
            {/* Desktop Login Button */}
            <div className="hidden xl:block">
              <Button 
                text="Customer Login" 
                icon={<img src="/moto/depa/person.png" alt="user" className="w-5 h-auto" />} 
                iconPosition="left" 
              />
            </div>
            
            {/* Flag & Language (Visible on both) */}
            <div className="flex items-center gap-2 xl:gap-4 cursor-pointer">
              <img
                src="/moto/depa/flag.png"
                alt="EN"
                className="w-7 h-auto shadow-sm"
              />
               <img
                src="/moto/depa/dwarw.png"
                alt="EN"
                className="w-4 h-auto"
              />
            </div>

            <div className="hidden xl:block w-px h-6 bg-gray-300"></div>
            
            {/* Search (Visible on both) */}
            <button className="text-[#2d2e83] hover:text-blue-900 transition-colors">
               <img
                src="/moto/depa/search.png"
                alt="Search"
                className="w-4 h-auto"
              />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-gray-800 focus:outline-none ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-4 overflow-y-auto xl:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`oswald text-lg py-4 border-b border-gray-100 transition-colors font-medium ${
                  activeLink === link.label
                    ? "text-[#2d2e83]" 
                    : "text-gray-700 hover:text-[#2d2e83]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col gap-6 pt-4 pb-8">
             <Button 
                text="Customer Login" 
                icon={<img src="/moto/depa/person.png" alt="user" className="w-5 h-auto" />} 
                iconPosition="left" 
                className="w-full text-lg py-3"
              />
          </div>
        </div>
      )}
    </>
  );
}
