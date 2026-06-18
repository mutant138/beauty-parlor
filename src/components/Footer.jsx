"use client";
import Link from "next/link";

export default function Footer() {
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Our Services", href: "/services" },
    { name: "Course", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  const locations = [
    "Coimbatore",
    "Theni",
    "Tirunelveli",
    "Tiruppur",
    "Dindigul",
    "Karur",
    "Madurai",
    "Thanjavur",
    "Erode",
    "Vellore",
    "Salem",
    "Pondicherry",
    "Trichy",
  ];

  return (
    <footer className="bg-[#ffd468] text-black pt-16 pb-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-black font-bold text-xl mb-4">Contact Info</h3>
          <p className="text-black text-sm leading-relaxed max-w-xs">
            Feel Free To Contact Us And One Of Our Consultants Will Contact You
            Within One Business Days.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-black mt-1 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <span className="text-sm text-black">
                bus stop, 4th St, Thiru Nagar, Madurai, Tamil Nadu 625006
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-black shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span className="text-sm text-black">
                +91 75581 60331
              </span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-black shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 11H11V7h1.5v5.25l3.25 1.94-.75 1.25L12.5 13z" />
              </svg>
              <span className="text-sm text-black">
                Mon - Sat 10.00Am - 7.00PM
              </span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-black font-bold text-xl mb-6 uppercase tracking-wider">
            Menu
          </h3>
          <ul className="grid grid-cols-1 gap-3">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-black hover:text-gold text-sm flex items-center gap-2 group transition-colors"
                >
                  <span className="text-black group-hover:translate-x-1 transition-transform">
                    ▸
                  </span>{" "}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* We Offers Services At */}
        <div>
          <h3 className="text-black font-bold text-xl mb-6 uppercase tracking-wider">
            We Offers Services At
          </h3>
          <ul className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gold/20">
            {locations.map((loc) => (
              <li key={loc}>
                <span className="text-black text-sm flex items-center gap-2">
                  <span className="text-black">▸</span> {loc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Location */}
        <div className="space-y-8">
          <div>
            <h3 className="text-black font-bold text-xl mb-6 uppercase tracking-wider">
              Find Us Here
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-black transition-all group"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.26-2.917.557-.791.307-1.462.719-2.131 1.39-.67.671-1.082 1.34-1.39 2.132-.297.765-.499 1.637-.557 2.917-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.28.26 2.152.557 2.917.308.791.719 1.462 1.39 2.131.671.67 1.34 1.082 2.132 1.39.765.297 1.637.499 2.917.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.28-.058 2.152-.26 2.917-.557.791-.307 1.462-.719 2.131-1.39.67-.671 1.082-1.34 1.39-2.132.297-.765.499-1.637.557-2.917.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.28-.26-2.152-.557-2.917-.308-.791-.719-1.462-1.39-2.131-.671-.67-1.34-1.082-2.132-1.39-.765-.297-1.637-.499-2.917-.557-1.28-.058-1.688-.072-4.947-.072z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-black transition-all group"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-gold font-bold text-xl mb-4 uppercase tracking-wider">
              Location
            </h3>
            <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center border border-gold/10 overflow-hidden">
              {/* Map Placeholder or simple graphic */}
              <div className="text-gray-500 text-xs italic">
                Map View Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>Copyright 2023 Yazhini Makeup Artist | All Rights Reserved</p>
        <a
          href="https://www.yazhinimakeupartist.com"
          className="hover:text-gold transition-colors"
        >
          www.yazhinimakeupartist.com
        </a>
      </div>
    </footer>
  );
}
