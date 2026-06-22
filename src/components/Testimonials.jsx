"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "Bride",
    quote:
      "I cannot thank Yazhini enough! The bridal look she created for me was absolutely stunning. I felt like royalty on my wedding day. Highly recommend her services to every bride-to-be!",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Model",
    quote:
      "The HD makeup for my portfolio shoot was flawless. It looked incredible on camera and lasted the entire day without any touch-ups. Professional, punctual, and talented!",
    rating: 5,
  },
  {
    name: "Karthika Devi",
    role: "Event Client",
    quote:
      "Yazhini transformed me completely for my sister's reception. The makeup was long-lasting, picture-perfect, and I received compliments throughout the evening. Truly amazing!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const prev = () =>
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () =>
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="bg-[#0e0e0e] py-12 md:py-20 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">

        {/* ── Heading ── */}
        <h2 className="font-cormorant italic text-white text-4xl md:text-5xl font-semibold mb-12">
          What Our Client Says
        </h2>

        {/* ── Avatar circle ── */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full border-2 border-gold/40 bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_20px_rgba(255,212,104,0.1)]">
            <svg
              className="w-10 h-10 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        </div>

        {/* ── Name ── */}
        <p className="text-gold font-poppins font-semibold text-sm uppercase tracking-widest mb-1">
          {t.name}
        </p>

        {/* ── Quote ── */}
        <p className="text-gray-300 text-sm leading-relaxed italic mt-5 px-4 max-w-xl mx-auto">
          {t.quote}
        </p>

        {/* ── Navigation row ── */}
        <div className="flex items-center justify-center gap-5 mt-10">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-gold/30 text-gold text-xl flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300 leading-none"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === active
                    ? "w-5 h-2 bg-gold"
                    : "w-2 h-2 bg-gold/30 hover:bg-gold/60"
                  }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-gold/30 text-gold text-xl flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300 leading-none"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
