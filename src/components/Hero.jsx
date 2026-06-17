"use client";
import Image from "next/image";
import hero1 from "@/assets/hero1.png";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#111] overflow-hidden min-h-[90vh] flex items-center">
      {/* Faint gold glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">

          {/* ── LEFT: Text ── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Headline */}
            <div className="mb-5 space-y-1">
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="font-sedgwick text-5xl md:text-6xl lg:text-7xl text-gold leading-tight">
                  Experience
                </h1>
                <span className="font-cormorant italic text-4xl md:text-5xl lg:text-6xl text-white font-medium">
                  the Best
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 md:w-20 h-[2px] bg-gold shrink-0" />
                <h2 className="font-sedgwick text-3xl md:text-5xl lg:text-6xl text-white tracking-wide">
                  Beauty Services
                </h2>
              </div>
            </div>

            {/* Body */}
            <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed mb-8 opacity-85">
              Vashini Makeup artist offers highly customized makeup services for
              your most special occasions. We provide all kinds of latest and top
              class makeup services for every skin type to ensure our clients look
              exquisite on their setting.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-5 py-2 rounded-full border-2 border-gold text-gold text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-black transition-colors duration-300">
                Book Now
              </button>
              <button onClick={() => window.open("https://wa.me/917558160331", "_blank")} className="px-5 py-2 rounded-full border-2 border-white text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors duration-300">
                Connect on Whatsapp
              </button>
            </div>
          </div>

          {/* ── RIGHT: decorative nested rectangles + hero image ── */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <div className="relative w-72 h-80 md:w-96 md:h-[420px]">
              {/* Largest outer frame */}
              <div className="absolute inset-0 border border-white/20 rounded-sm" />
              {/* Mid frame — offset top-left */}
              <div className="absolute top-8 left-8 right-[-16px] bottom-[-16px] border border-white/15 rounded-sm" />
              {/* Inner frame */}
              <div className="absolute top-16 left-16 right-[-8px] bottom-[-8px] border border-gold/20 rounded-sm" />

              {/* Hero image fills a central card */}
              <div className="absolute top-10 left-10 right-10 bottom-10 rounded-sm overflow-hidden border border-white/10">
                <Image
                  src={hero1}
                  alt="Yazhini Makeup Artist"
                  fill
                  className="object-cover opacity-80"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
