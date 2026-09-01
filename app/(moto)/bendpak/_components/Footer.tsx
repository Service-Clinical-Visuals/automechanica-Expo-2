import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white pt-16 min-[2100px]:pt-28 min-[3800px]:pt-40 mt-auto overflow-hidden bg-[#161616]">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-10 min-[2100px]:gap-12 min-[3800px]:gap-16 pb-10 min-[2100px]:pb-16 min-[3800px]:pb-24">

          {/* Column 1: Logo & Text */}
          <div className="flex flex-col gap-6 col-span-2 xl:col-span-5" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/bendpak/logo.png"
                alt="BendPak Logo"
                className="h-10 min-[2100px]:w-auto min-[3800px]:w-auto w-auto object-contain brightness-0 invert"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-2xl montserrat-font tracking-wide">BENDPAK</span>' }}
              />
            </Link>
            <p className="text-white inter-font section-text leading-relaxed xl:pr-6 mt-2">
              BendPak is a global manufacturer of professional automotive service equipment, founded in 1965. With decades of engineering expertise, BendPak develops innovative, durable, and reliable solutions designed to improve safety, efficiency, and performance across modern automotive workshops.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 col-span-1 xl:col-span-2 xl:pl-20" data-aos="fade-up" data-aos-delay="100">
            <h4 className="card-title font-semibold montserrat-font text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-regular text-white inter-font section-text">
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3: Legals */}
          <div className="flex flex-col gap-6 col-span-1 xl:col-span-2 xl:pl-20" data-aos="fade-up" data-aos-delay="150">
            <h4 className="card-title font-semibold montserrat-font text-white">Legals</h4>
            <ul className="flex flex-col gap-4 text-regular text-white inter-font section-text">
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#FFDB00] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6 col-span-2 xl:col-span-3 xl:pl-20" data-aos="fade-up" data-aos-delay="200">
            <h4 className="card-title font-semibold montserrat-font text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-white inter-font text-regular section-text">
              <li className="flex items-start gap-4">
                <svg className="w-[18px] h-[18px] min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <span>1 (888) 856-5820</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-[18px] h-[18px] min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a href="mailto:sales@bendpak.com" className="hover:text-[#FFDB00] transition-colors">sales@bendpak.com</a>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-[18px] h-[18px] min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="leading-relaxed">30440 Agoura Road<br />Agoura Hills, CA 91301<br />USA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Area: Socials & Newsletter */}
        <div className="flex flex-col xl:flex-row items-center justify-between pb-10 pt-6" data-aos="fade-up">

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8 xl:mb-0">
            <a href="#" className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg className="w-[18px] h-[18px] min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg className="w-[18px] h-[18px] min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg className="w-[18px] h-[18px] min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform">
              <svg className="w-[18px] h-[18px] min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="flex items-center gap-4 w-full xl:w-auto">
            <span className="inter-font card-text  font-bold hidden xl:block">Subscribe to Newsletter :</span>
            <div className="flex w-full  xl:w-[400px] min-[2100px]:w-[600px] min-[3800px]:w-[800px]">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="w-full h-[45px] min-[2100px]:h-[60px] min-[3800px]:h-[80px] px-4 min-[2100px]:px-6 min-[3800px]:px-8 text-black bg-white inter-font focus:outline-none rounded-l-[2px]"
              />
              <button className="h-[45px] min-[2100px]:h-[60px] min-[3800px]:h-[80px] px-6 min-[2100px]:px-10 min-[3800px]:px-14 bg-[#FFDB00] text-black font-bold inter-font hover:bg-[#e6c500] transition-colors whitespace-nowrap rounded-r-[2px]">
                Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-white text-black py-4">
        <div className="custom-container flex justify-center text-center">
          <p className="inter-font section-text text-[#000000]">
            © 2026 BendPak inc All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
