"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the banner (viewport) height
      const visible = window.scrollY > window.innerHeight / 2;
      setIsVisible(visible);
      if (!visible) setIsMobileMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "iCatalog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-secondary shadow-md transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-2 2xl:py-3">
        <div className="custom-container">
          <div className="grid grid-cols-2 xl:grid-cols-[1fr_auto_1fr] items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="#">
                <img
                  src="/moto/senfineco/logo.webp"
                  alt="Senfineco Logo"
                  className="w-[60px] md:w-[70px] 2xl:w-[90px] min-[2560px]:w-[120px] h-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8 2xl:gap-12 min-[2560px]:gap-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link inter-font tracking-wide transition-colors py-2 whitespace-nowrap ${
                    link.active
                      ? "text-white font-semibold underline underline-offset-6"
                      : "text-white/85 hover:text-primary font-normal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Language + Made in Germany */}
            <div className="flex items-center justify-end gap-4 md:gap-6 2xl:gap-8">
              <button
                type="button"
                className="hidden sm:flex items-center gap-1.5 text-white "
                aria-label="Select language"
              >
                <img
                  src="/moto/senfineco/lang.webp"
                  alt="English"
                  className="rounded-full w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] min-[2560px]:w-[32px] min-[2560px]:h-[32px] object-contain"
                />
                <ChevronDown className="w-4 h-4 2xl:w-5 2xl:h-5" strokeWidth={2} />
              </button>

              <img
                src="/moto/senfineco/flag.webp"
                alt="Made in Germany"
                className="hidden sm:block w-[60px] md:w-[70px] 2xl:w-[90px] min-[2560px]:w-[120px] h-auto object-contain"
              />

              {/* Mobile Menu Button */}
              <button
                className="xl:hidden text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-secondary shadow-lg flex flex-col z-50 border-t border-white/10">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-white/10 last:border-0 transition-colors hover:bg-white/5"
              >
                <div className="custom-container py-4">
                  <span
                    className={`header-link inter-font ${
                      link.active ? "text-primary font-semibold" : "text-white font-medium"
                    }`}
                  >
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
            <div className="custom-container py-4 flex sm:hidden items-center justify-between">
              <button type="button" className="flex items-center gap-1.5 text-white" aria-label="Select language">
                <img src="/moto/senfineco/lang.webp" alt="English" className="w-[20px] h-[20px] object-contain" />
                <ChevronDown className="w-4 h-4" strokeWidth={2} />
              </button>
              <img src="/moto/senfineco/flag.webp" alt="Made in Germany" className="w-[70px] h-auto object-contain" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
