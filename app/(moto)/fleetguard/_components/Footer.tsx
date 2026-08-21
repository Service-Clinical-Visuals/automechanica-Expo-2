"use client";
import { Phone, Mail, MapPin, Search } from "lucide-react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Container from "./Container";
const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#product" },
  { name: "Find A Dealer", href: "#" },
  { name: "Knowledge Center", href: "#" },
  { name: "Support", href: "#" },
];
const findProducts = [
  { name: "Search for parts", href: "#" },
  { name: "See all new Parts", href: "#" },
  { name: "Find Product Literature", href: "#" },
  { name: "Request A Quote", href: "#" },
];
const socials = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];
export default function Footer() {
  return (
    <footer
      className="relative w-full bg-[#F3F5F7] border-t border-gray-200"
      id="footer"
    >

      <Container className="py-14 md:py-10 2xl:py-20 4xl:py-28">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[25fr_15fr_20fr_20fr_20fr] gap-8 2xl:gap-16 4xl:gap-24">

          {/* Col 1: Logo & Text */}
          <div data-aos="fade-up" className="flex flex-col pr-4">

            <img
              src="/moto/fleetguard/logo.png"
              alt="Fleetguard Logo"
              className="h-40 w-40 2xl:w-52 2xl:h-52 4xl:w-64 4xl:h-64 object-contain mb-1 2xl:mb-4 self-start"
            />
            <p className="card-text font-rubik font-normal text-[#4B5563] leading-relaxed mb-6 2xl:mb-10 4xl:mb-16">

              Fleetguard provides advanced filtration solutions that protect
              engines and keep equipment running reliably.
            </p>
            <div className="flex items-center gap-4">

              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-primary hover:opacity-80 transition-opacity"
                >

                  <Icon className="footer-icon" />
                </a>
              ))}
            </div>
          </div>
          {/* Col 2: Links */}
          <div data-aos="fade-up">

            <h3 className="card-title font-oswald font-semibold mb-5 2xl:mb-8 4xl:mb-12 text-[#272727]">Links</h3>
            <ul className="flex flex-col gap-3 2xl:gap-5 4xl:gap-8">

              {links.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="card-text font-rubik font-normal text-[#4B5563] hover:text-primary transition-colors"
                  >

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 3: Find Products */}
          <div data-aos="fade-up">

            <h3 className="card-title font-oswald font-semibold mb-5 2xl:mb-8 4xl:mb-12 text-[#272727]">
              Find Products
            </h3>
            <ul className="flex flex-col gap-3 2xl:gap-5 4xl:gap-8">

              {findProducts.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="card-text font-rubik font-normal text-[#4B5563] hover:text-primary transition-colors"
                  >

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 4: Contact */}
          <div data-aos="fade-up">

            <h3 className="card-title font-oswald font-semibold mb-5 2xl:mb-8 4xl:mb-12 text-[#272727]">Contact</h3>
            <div className="flex flex-col gap-4 2xl:gap-8 4xl:gap-12">

              <a
                href="tel:1-800-223-4583"
                className="flex items-center gap-3 card-text font-rubik font-normal text-[#4B5563] hover:text-primary transition-colors"
              >

                <Phone className="shrink-0 text-primary w-4 h-4 2xl:w-6 2xl:h-6 4xl:w-8 4xl:h-8" />
                1-800-223-4583
              </a>
              <a
                href="mailto:marketting@fleetguard-filtrum.com"
                className="flex items-center gap-3 card-text font-rubik font-normal text-[#4B5563] hover:text-primary transition-colors"
              >

                <Mail className="shrink-0 text-primary w-4 h-4 2xl:w-6 2xl:h-6 4xl:w-8 4xl:h-8" />
                marketting@fleetguard-filtrum.com
              </a>
              <div className="flex items-start gap-3 card-text font-rubik font-normal text-[#4B5563]">

                <MapPin
                  className="shrink-0 text-primary mt-0.5 w-4 h-4 2xl:w-6 2xl:h-6 4xl:w-8 4xl:h-8"
                />
                <p className="leading-relaxed">

                  26 Century Boulevard
                  <br />
                  Nashville, Tennessee 37214
                  <br />
                  U.S.A.
                </p>
              </div>
            </div>
          </div>
          {/* Col 5: Subscribe */}
          <div data-aos="fade-up">

            <h3 className="card-title font-oswald font-semibold mb-5 2xl:mb-8 4xl:mb-12 text-[#272727]">
              Subscribe for more Information
            </h3>
            <p className="card-text font-rubik font-normal text-[#4B5563] mb-5 2xl:mb-8 4xl:mb-12 leading-relaxed">

              Receive the most up to date news from Terrain Tamer. You can
              register in our e-mail list.
            </p>
            <form className="flex items-stretch rounded-[10px] overflow-hidden bg-white shadow-[0px_3px_8px_0px_#0000003D]">

              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 min-w-0 bg-transparent card-text font-rubik font-normal text-[#272727] placeholder:text-[#8A8A8A] px-4 py-1.5 outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white m-2 p-2 hover:bg-red-700 transition-colors shrink-0 flex items-center justify-center m-1 rounded-[5px]"
              >

                <Search className="w-4 h-4 2xl:w-6 2xl:h-6 4xl:w-8 4xl:h-8" />
              </button>
            </form>
          </div>
        </div>
      </Container>
      {/* Footer Bottom */}
      <div className="border-t border-[#4B5563]">

        <Container>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 2xl:py-10 4xl:py-16 w-full">

            <p className="card-text font-rubik font-normal text-[#4B5563]">

              Copyright &copy; 2026 fleetguard. all rights reserved.
            </p>
            <a
              href="#"
              className="card-text font-rubik font-normal text-[#4B5563] hover:text-primary transition-colors"
            >

              Privacy Policy
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
