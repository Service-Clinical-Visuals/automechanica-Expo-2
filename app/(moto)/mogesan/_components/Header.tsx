"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "Corporate", href: "#" },
  { name: "Production", href: "#" },
  { name: "Documents", href: "#" },
  { name: "Contact", href: "#" },
  { name: "E-Catalogue", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-[15px] left-0 w-full z-50 animate-slide-down">
      <div className="custom-container relative">
        <div className="h-[72px] bg-white rounded-[19px] flex items-center">
          <div className="w-full flex items-center justify-between px-8">
            <Link href="#" className="flex-shrink-0 animate-fade-in [animation-delay:150ms]">
              <img
                src="/moto/mogesan/logo.png"
                alt="MOGESAN"
                className="h-[49px] w-auto object-contain"
              />
            </Link>

            <nav className="hidden xl:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{ animationDelay: `${300 + index * 70}ms` }}
                  className={
                    (link.active
                      ? "nav-link-active text-[#BF1E2E]"
                      : "nav-link text-[#4A4A4A] hover:text-[#BF1E2E] transition-colors uppercase") +
                    " opacity-0 animate-fade-in"
                  }
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden xl:flex animate-fade-in [animation-delay:600ms]">
              <Button href="#" circleColor="#BF1E2E" iconColor="#FFFFFF">
                Explore Products
              </Button>
            </div>

            <button
              className="xl:hidden text-[#BF1E2E] animate-fade-in [animation-delay:600ms]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-[80px] left-0 w-full bg-white rounded-[19px] shadow-lg z-50 animate-fade-in">
            <div className="px-8">
              <nav className="flex flex-col py-4 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      link.active
                        ? "nav-link-active text-[#BF1E2E]"
                        : "nav-link text-[#4A4A4A] hover:text-[#BF1E2E] transition-colors uppercase"
                    }
                  >
                    {link.name}
                  </Link>
                ))}
                <Button href="#" circleColor="#BF1E2E" iconColor="#FFFFFF" className="w-full justify-center">
                  Explore Products
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}