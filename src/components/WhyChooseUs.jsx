import Link from "next/link";
import Image from "next/image";
import hero2 from "@/assets/hero2.png";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111] py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* ── LEFT: Styled image container with decorative frames ── */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-start shrink-0">
          <div className="relative w-[280px] h-[340px] md:w-[340px] md:h-[400px] shrink-0">
            {/* Outer golden/white frame */}
            <div className="absolute inset-0 border border-white/20 rounded-sm" />
            {/* Offset decorative frame */}
            <div className="absolute top-6 left-6 right-[-12px] bottom-[-12px] border border-gold/20 rounded-sm pointer-events-none" />
            
            {/* Image card */}
            <div className="absolute top-6 left-6 right-6 bottom-6 rounded-sm overflow-hidden border border-white/10">
              <Image
                src={hero2}
                alt="Why Choose Us"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: text ── */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="font-cormorant italic text-gold text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Why Our Clients
          </h2>
          <h2 className="font-cormorant italic text-gold text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
            — Choose Us
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-90 max-w-lg mx-auto lg:mx-0">
            At{" "}
            <span className="text-gold font-semibold italic">
              Yazhini Makeup Artist
            </span>
            , our passion lies in transforming beauty with precision and artistry.
            We bring years of experience and a deep understanding of each
            client&apos;s unique needs to every appointment.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 opacity-80 max-w-lg mx-auto lg:mx-0">
            From bridal masterpieces to editorial fantasy, our team is trusted for
            flawless results, premium products, and a deeply personal approach. We
            customise every look from scratch — because no two faces are the same.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              href="/about"
              className="inline-block px-8 py-2.5 border-2 border-gold text-gold text-xs font-black uppercase tracking-[0.18em] rounded-sm hover:bg-gold hover:text-black transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
