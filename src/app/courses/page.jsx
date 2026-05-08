"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#111] text-white min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gold/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Breadcrumb Section */}
      <section className="bg-white/5 border-y border-white/10 py-4 px-3 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-gold font-poppins">Course</span>
          </nav>
          <a
            href="https://wa.me/919079540210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gold/50 text-gold text-xs rounded-full hover:bg-gold hover:text-black transition-all duration-300 font-poppins"
          >
            Connect on Whats app
          </a>
        </div>
      </section>
    </main>
  );
}
