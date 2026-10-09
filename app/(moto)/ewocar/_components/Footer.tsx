"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Catalog", href: "#catalog" },
    { name: "Contact Us", href: "#contact" },
  ];

  const productLinks = [
    { name: "Paint Protection Film", href: "#" },
    { name: "Polishing System", href: "#" },
    { name: "Protective Coatings", href: "#" },
    { name: "Maintenance", href: "#" },
    { name: "Merchandise", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#020202] text-white pt-16 lg:pt-24 min-[2500px]:pt-32 min-[3500px]:pt-40 pb-10 min-[2500px]:pb-20 min-[3500px]:pb-28 border-t border-white/10 overflow-hidden">
      <div className="custom-container flex flex-col gap-12 lg:gap-16 min-[2500px]:gap-24 min-[3500px]:gap-32">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 min-[2500px]:gap-16 min-[3500px]:gap-20">
          {/* Column 1: Brand Logo, Description, Social Media */}
          <div className="lg:col-span-4 flex flex-col gap-6 min-[2500px]:gap-10 min-[3500px]:gap-12" data-aos="fade-up">
            <Link href="#" className="block">
              <img
                src="/moto/ewocar/logo.webp"
                alt="Ewocar Logo"
                className="footer-logo h-9 md:h-11 min-[2500px]:h-20 min-[3500px]:h-24 w-auto object-contain"
              />
            </Link>

            <p className="footer-body text-sm sm:text-base min-[2500px]:text-2xl min-[3500px]:text-3xl text-gray-300 font-secondary leading-relaxed max-w-sm min-[2500px]:max-w-xl min-[3500px]:max-w-2xl">
              Ewocar – Professional detailing solutions engineered for exceptional results and
              lasting protection.
            </p>

            <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3500px]:gap-6 pt-2">
              <span className="footer-heading text-sm min-[2500px]:text-2xl min-[3500px]:text-3xl font-semibold font-primary text-gray-200">
                Follow Us :
              </span>
              <div className="flex items-center gap-4 min-[2500px]:gap-6 min-[3500px]:gap-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn w-10 h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3500px]:w-20 min-[3500px]:h-20 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-10 min-[3500px]:h-10 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn w-10 h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3500px]:w-20 min-[3500px]:h-20 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-10 min-[3500px]:h-10 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-[2500px]:gap-6 min-[3500px]:gap-8" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading text-lg min-[2500px]:text-3xl min-[3500px]:text-4xl font-semibold font-primary text-white mb-1 min-[2500px]:mb-3 min-[3500px]:mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 min-[2500px]:gap-5 min-[3500px]:gap-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-sm sm:text-base min-[2500px]:text-2xl min-[3500px]:text-3xl text-gray-300 hover:text-white transition-colors font-secondary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-3 flex flex-col gap-4 min-[2500px]:gap-6 min-[3500px]:gap-8" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-lg min-[2500px]:text-3xl min-[3500px]:text-4xl font-semibold font-primary text-white mb-1 min-[2500px]:mb-3 min-[3500px]:mb-4">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5 min-[2500px]:gap-5 min-[3500px]:gap-6">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-body text-sm sm:text-base min-[2500px]:text-2xl min-[3500px]:text-3xl text-gray-300 hover:text-white transition-colors font-secondary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 flex flex-col gap-4 min-[2500px]:gap-6 min-[3500px]:gap-8" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-lg min-[2500px]:text-3xl min-[3500px]:text-4xl font-semibold font-primary text-white mb-1 min-[2500px]:mb-3 min-[3500px]:mb-4">
              Contact Us
            </h4>
            <p className="footer-body text-sm min-[2500px]:text-2xl min-[3500px]:text-3xl text-gray-300 font-secondary leading-relaxed">
              Have questions or need assistance? Our team is here to help with sales,
              distribution, product information, and general inquiries.
            </p>

            <div className="flex flex-col gap-2 min-[2500px]:gap-4 min-[3500px]:gap-6 pt-2">
              <p className="footer-body text-sm min-[2500px]:text-2xl min-[3500px]:text-3xl text-gray-300">
                <span className="font-semibold text-white">Sales : </span>
                <a
                  href="mailto:sales@ewocar.com"
                  className="text-white hover:underline transition-colors"
                >
                  sales@ewocar.com
                </a>
              </p>
              <p className="footer-body text-sm min-[2500px]:text-2xl min-[3500px]:text-3xl text-gray-300">
                <span className="font-semibold text-white">General Enquiries : </span>
                <a
                  href="mailto:info@ewocar.com"
                  className="text-white hover:underline transition-colors"
                >
                  info@ewocar.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 min-[2500px]:pt-14 min-[3500px]:pt-18 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="footer-body text-xs sm:text-sm min-[2500px]:text-2xl min-[3500px]:text-3xl text-gray-400 font-secondary">
            © 2026 Ewocar All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
