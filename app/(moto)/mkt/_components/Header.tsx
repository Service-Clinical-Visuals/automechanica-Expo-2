"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#about-us" },
  { label: "Products", href: "#products" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white pt-2">
      <div className="wide-container">
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="flex items-center justify-between gap-4 border border-[rgba(30,30,30,0.25)] rounded-[19px] px-4 md:px-6 py-2.5 md:py-3"
        >
          {/* Logo */}
          <Link href="#" className="shrink-0">
            <img
              src="/moto/mkt/logo.png"
              alt="MKT Holdings"
              className="h-8 md:h-9 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-[30px]">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay={index * 80}
                className={`nav-link font-heading transition-colors ${
                  link.label === "Home"
                    ? "font-semibold text-primary underline underline-offset-4"
                    : "font-medium text-body hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA - desktop */}
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay={navLinks.length * 80}
            className="hidden lg:block shrink-0"
          >
            <Button variant="primary">Get in Touch</Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center p-2 text-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {isOpen && (
          <div
            data-aos="fade-down"
            data-aos-duration="400"
            className="lg:hidden mt-2 border border-[rgba(30,30,30,0.25)] rounded-2xl px-6 py-5 bg-white"
          >
            <nav className="flex flex-col items-start gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link font-heading transition-colors ${
                    link.label === "Home"
                      ? "font-semibold text-primary underline underline-offset-4"
                      : "font-medium text-body hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" className="mt-2 w-full">
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}