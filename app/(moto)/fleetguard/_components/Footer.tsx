"use client";
import { Search } from "lucide-react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
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

      <Container className="py-14 md:py-10 2xl:py-20 min-[3800px]:py-28">

        <div className="grid grid-cols-2 xl:grid-cols-[25fr_15fr_20fr_20fr_20fr] gap-x-4 gap-y-10 md:gap-8 2xl:gap-16 min-[3800px]:gap-24">

          {/* Col 1: Logo & Text */}
          <div data-aos="fade-up" data-aos-delay="0" className="flex flex-col pr-4 col-span-2 xl:col-span-1">

            <img
              src="/moto/fleetguard/footer.png"
              alt="Fleetguard Logo"
              className="h-40 w-40 2xl:w-52 2xl:h-52 min-[3800px]:w-64 min-[3800px]:h-64 object-contain mb-1 2xl:mb-4 self-start"
            />
            <p className="card-text font-rubik font-normal text-[#4B5563] leading-relaxed mb-6 2xl:mb-10 min-[3800px]:mb-16">

              Fleetguard provides advanced filtration solutions that protect
              engines and keep equipment running reliably.
            </p>
            <div className="flex items-center gap-3 min-[3800px]:gap-4">

              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-[#EE2823] text-white p-1.5 min-[3800px]:p-6 rounded-full hover:bg-red-700 transition-colors flex items-center justify-center"
                >

                  <Icon className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 min-[3800px]:w-12 min-[3800px]:h-12" />
                </a>
              ))}
            </div>
          </div>
          {/* Col 2: Links */}
          <div data-aos="fade-up" data-aos-delay="100" className="col-span-1">

            <h3 className="card-title font-oswald font-semibold mb-5 2xl:mb-8 min-[3800px]:mb-12 text-[#272727]">Links</h3>
            <ul className="flex flex-col gap-3 min-[3800px]:gap-5">

              {links.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="card-text font-rubik font-normal text-[#4B5563] hover:text-[#EE2823] transition-colors"
                  >

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 3: Find Products */}
          <div data-aos="fade-up" data-aos-delay="200" className="col-span-1">

            <h3 className="card-title font-oswald font-semibold mb-5 2xl:mb-8 min-[3800px]:mb-12 text-[#272727]">
              Find Products
            </h3>
            <ul className="flex flex-col gap-3 2xl:gap-5 min-[3800px]:gap-8">

              {findProducts.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="card-text font-rubik font-normal text-[#4B5563] hover:text-[#EE2823] transition-colors"
                  >

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 4: Contact */}
          <div data-aos="fade-up" data-aos-delay="300" className="col-span-2 md:col-span-1 xl:col-span-1">

            <h3 className="card-title font-oswald font-semibold mb-5 2xl:mb-8 min-[3800px]:mb-12 text-[#272727]">Contact</h3>
            <div className="flex flex-col gap-4 min-[3800px]:gap-8">

              <a
                href="tel:1-800-223-4583"
                className="flex items-center gap-3 card-text font-rubik font-normal text-[#4B5563] hover:text-[#EE2823] transition-colors"
              >

                <FaPhone className="shrink-0 text-[#EE2823] w-4 h-4 2xl:w-5 2xl:h-5 min-[3800px]:w-16 min-[3800px]:h-16" />
                1-800-223-4583
              </a>
              <a
                href="mailto:marketting@fleetguard-filtrum.com"
                className="flex items-center gap-3 card-text font-rubik font-normal text-[#4B5563] hover:text-[#EE2823] transition-colors"
              >

                <FaEnvelope className="shrink-0 text-[#EE2823] w-4 h-4 2xl:w-5 2xl:h-5 min-[3800px]:w-16 min-[3800px]:h-16" />
                marketting@fleetguard-filtrum.com
              </a>
              <div className="flex items-start gap-3 card-text font-rubik font-normal text-[#4B5563]">

                <FaLocationDot
                  className="shrink-0 text-[#EE2823] mt-1 w-4 h-4 2xl:w-5 2xl:h-5 min-[3800px]:w-16 min-[3800px]:h-16"
                />
                <p className="leading-relaxed text-[#4B5563]">

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
          <div data-aos="fade-up" data-aos-delay="400" className="col-span-2 md:col-span-1 xl:col-span-1">

            <h3 className="card-title font-oswald font-semibold mb-5 2xl:mb-8 min-[3800px]:mb-12 text-[#272727]">
              Subscribe for more Information
            </h3>
            <p className="card-text font-rubik font-normal text-[#4B5563] mb-5 2xl:mb-8 min-[3800px]:mb-12 leading-relaxed">

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
                className="bg-[#EE2823] text-white m-2 p-2 hover:bg-red-700 transition-colors shrink-0 flex items-center justify-center m-1 rounded-[5px]"
              >

                <Search className="w-4 h-4 2xl:w-6 2xl:h-6 min-[3800px]:w-12 min-[3800px]:h-12" />
              </button>
            </form>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-3">

          <div className="flex flex-col md:flex-row items-center justify-between py-5 min-[3800px]:py-12 w-full relative ">

            <div className="hidden md:block w-32 shrink-0"></div>
            <p className="card-text font-rubik text-[#4B5563] text-center md:absolute md:left-1/2 md:-translate-x-1/2 w-full md:w-auto my-4 md:my-0">

              Copyright &copy; 2026 fleetguard, all rights reserved.
            </p>
            <a
              href="#"
              className="card-text font-rubik  text-[#4B5563] hover:text-[#EE2823] transition-colors shrink-0 z-10"
            >

              Privacy Policy
            </a>
          </div>

        </div>
      </Container>

    </footer>
  );
}
