"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Our Services", href: "/services" },
  { name: "Course", href: "/courses" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-1000 font-poppins">
      {/* ── TOP INFO BAR: black bg, gold icons + text ── */}
      <div className="bg-[#111] border-b border-gold/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-around gap-2 text-[11px] text-gold">
          {/* Left: Address */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            <span className="hidden sm:inline">
              No 6a/25, Vembuliamman Koil St, K.K Nagar West, Chennai – 600078
            </span>
            <span className="sm:hidden">Chennai – 600078</span>
          </div>

          {/* Center: Phone */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
            <span>+91 98765 43210 / +91 78643 89012</span>
          </div>

          {/* Right: Hours */}
          <div className="flex items-center gap-1.5 font-poppins">
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 11H11V7h1.5v5.25l3.25 1.94-.75 1.25L12.5 13z" />
            </svg>
            <span>Mon – Sat 10:00Am – 7:00PM</span>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR: bright yellow bg, dark centered links ── */}
      <div className="bg-gold">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-end relative">
          {/* Mobile hamburger — left side */}
          <button
            className="md:hidden absolute left-4 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-[5px]">
              <span
                className={`block w-6 h-[2px] bg-[#111] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-[#111] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>

          {/* Desktop links — centered */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 ">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[#111] font-bold text-sm tracking-wide uppercase hover:opacity-60 transition-opacity duration-200 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── MOBILE DROPDOWN: yellow bg, dark links ── */}
      {menuOpen && (
        <div className="md:hidden bg-gold border-t border-black/10">
          <ul className="flex flex-col items-center py-5 gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[#111] font-bold text-base tracking-wider uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
