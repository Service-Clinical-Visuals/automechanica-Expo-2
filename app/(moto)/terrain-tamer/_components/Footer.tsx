"use client";

import Link from "next/link";

interface LinkColumn {
  heading: string;
  links: string[];
}

const linksColumn: LinkColumn = {
  heading: "Links",
  links: [
    "Home",
    "History",
    "Parts",
    "E-Store",
    "Stocklist",
    "Terrain Tammer TV",
    "Merchandise",
    "Communication",
  ],
};

const partsColumn: LinkColumn = {
  heading: "Terrain Tamer 4X4 Parts",
  links: [
    "4WD Turbo Kits",
    "4WD Clutch Kits",
    "4WD Brakes",
    "4WD Wheel Bearing Kits",
    "4WD Suspension",
    "4WD Parts",
  ],
};

const socials = [
  { icon: "/moto/terrain/fb.png", label: "Facebook" },
  { icon: "/moto/terrain/insta.png", label: "Instagram" },
  { icon: "/moto/terrain/yt.png", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C1C1C] pt-14 xl:pt-16 overflow-x-hidden overflow-y-hidden">
      <div className="custom-container overflow-x-hidden overflow-y-hidden">
        <div
          className="
            flex flex-col gap-12
            [@media(min-width:700px)_and_(max-width:1499px)]:grid
            [@media(min-width:700px)_and_(max-width:1499px)]:grid-cols-3
            [@media(min-width:700px)_and_(max-width:1499px)]:gap-x-8
            [@media(min-width:700px)_and_(max-width:1499px)]:gap-y-12
            min-[1500px]:flex
            min-[1500px]:flex-row
            min-[1500px]:justify-between
            min-[1500px]:items-start
            min-[1500px]:gap-0
            overflow-x-hidden
            overflow-y-hidden
          "
        >
          {/* Logo + description + socials */}
          <div
            className="
              flex flex-col gap-6 w-full
              [@media(min-width:700px)_and_(max-width:1499px)]:col-span-3
              min-[1500px]:w-[333px]
              min-[1500px]:flex-shrink-0
              min-[1500px]:self-center
              overflow-x-hidden
              overflow-y-hidden
            "
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
            data-aos-easing="ease-out-cubic"
          >
            <Link
              href="/"
              className="w-fit transition-transform duration-500 ease-out hover:scale-[1.03]"
            >
              <img
                src="/moto/terrain/logo.png"
                alt="Terrain Tamer 4WD Parts"
                className="w-[280px] h-auto object-contain"
              />
            </Link>

            <p className="section-text font-normal text-white">
              Terrain Tamer delivers trusted 4WD parts and solutions,
              engineered for durability, reliability, and performance in
              demanding conditions.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 overflow-x-hidden overflow-y-hidden">
              {socials.map((social, index) => (
                <Link
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:opacity-90"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={300 + index * 100}
                  data-aos-easing="ease-out-cubic"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-6 h-6 object-contain transition-transform duration-300 hover:rotate-3"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links + Terrain Tamer 4X4 Parts */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 w-full min-[700px]:contents overflow-x-hidden overflow-y-hidden">
            {/* Links */}
            <div
              className="
                flex flex-col gap-5 w-full
                min-[1500px]:w-[150px]
                min-[1500px]:flex-shrink-0
                overflow-x-hidden
                overflow-y-hidden
              "
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="250"
              data-aos-easing="ease-out-cubic"
            >
              <h4 className="card-title font-semibold text-white">
                {linksColumn.heading}
              </h4>

              <ul className="flex flex-col gap-3.5 overflow-x-hidden overflow-y-hidden">
                {linksColumn.links.map((link, index) => (
                  <li
                    key={link}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={300 + index * 60}
                    data-aos-easing="ease-out-cubic"
                  >
                    <Link
                      href="#"
                      className="section-text font-normal text-white inline-block transition-all duration-300 hover:text-[#FECC00] hover:translate-x-1"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terrain Tamer 4X4 Parts */}
            <div
              className="
                flex flex-col gap-5 w-full
                min-[1500px]:w-[191px]
                min-[1500px]:flex-shrink-0
                overflow-x-hidden
                overflow-y-hidden
              "
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="350"
              data-aos-easing="ease-out-cubic"
            >
              <h4 className="card-title font-semibold text-white">
                {partsColumn.heading}
              </h4>

              <ul className="flex flex-col gap-3.5 overflow-x-hidden overflow-y-hidden">
                {partsColumn.links.map((link, index) => (
                  <li
                    key={link}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={400 + index * 70}
                    data-aos-easing="ease-out-cubic"
                  >
                    <Link
                      href="#"
                      className="section-text font-normal text-white inline-block transition-all duration-300 hover:text-[#FECC00] hover:translate-x-1"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div
            className="
              flex flex-col gap-5 w-full
              min-[1500px]:w-[291px]
              min-[1500px]:flex-shrink-0
              overflow-x-hidden
              overflow-y-hidden
            "
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="450"
            data-aos-easing="ease-out-cubic"
          >
            <h4 className="card-title font-semibold text-white">
              Contact
            </h4>

            <div className="flex flex-col gap-4 overflow-x-hidden overflow-y-hidden">
              {/* Phone */}
              <div
                className="flex items-center gap-3 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="500"
                data-aos-easing="ease-out-cubic"
              >
                <img
                  src="/moto/terrain/phn.png"
                  alt=""
                  className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />

                <span className="section-text font-normal text-white transition-colors duration-300 group-hover:text-[#FECC00]">
                  (209) 714 4210
                </span>
              </div>

              {/* Email */}
              <div
                className="flex items-center gap-3 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
                data-aos-easing="ease-out-cubic"
              >
                <img
                  src="/moto/terrain/mail.png"
                  alt=""
                  className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />

                <span className="section-text font-normal text-white transition-colors duration-300 group-hover:text-[#FECC00]">
                  northamerica@donkyat.com
                </span>
              </div>

              {/* Location */}
              <div
                className="flex items-start gap-3 group"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="700"
                data-aos-easing="ease-out-cubic"
              >
                <img
                  src="/moto/terrain/loc.png"
                  alt=""
                  className="w-5 h-5 object-contain mt-1 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="section-text font-normal text-white transition-colors duration-300 group-hover:text-[#FECC00]">
                  Unit B - 2540 Station Drive Stockton,, California, USA
                  95215
                </span>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div
            className="
              flex flex-col gap-5 w-full
              [@media(min-width:700px)_and_(max-width:1499px)]:col-span-3
              min-[1500px]:w-[388px]
              min-[1500px]:flex-shrink-0
              overflow-x-hidden
              overflow-y-hidden
            "
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="550"
            data-aos-easing="ease-out-cubic"
          >
            <h4 className="card-title font-semibold text-white">
              Subscribe for more Information
            </h4>

            <p className="section-text font-normal text-white">
              Receive the most up to date news from Terrain Tammer. You can
              register in our e-mail list.
            </p>

            <form className="flex items-center bg-white rounded-[10px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-1.5 w-full max-w-[388px] h-[52px] flex-shrink-0 transition-shadow duration-300 focus-within:shadow-[0px_5px_15px_rgba(0,0,0,0.3)]">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 section-text font-normal text-[#4B5563] bg-transparent px-3 py-2 outline-none min-w-0"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="group flex-shrink-0 w-10 h-10 rounded-[5px] bg-[#FECC00] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#FFD633] active:scale-95"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="#272727"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M21 21L16.65 16.65"
                    stroke="#272727"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        className="section-text font-normal text-[#272727] bg-white text-center py-4 mt-12 overflow-x-hidden overflow-y-hidden"
        data-aos="fade-in"
        data-aos-duration="900"
        data-aos-delay="700"
        data-aos-easing="ease-out-cubic"
      >
        © Terrain Tamer 2026
      </p>
    </footer>
  );
}