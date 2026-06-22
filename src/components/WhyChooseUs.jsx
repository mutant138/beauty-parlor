import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111] py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

        {/* ── LEFT: 4 overlapping squares/rectangles cross layout ── */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-start shrink-0">
          <div className="relative w-[256px] h-[288px] md:w-[320px] md:h-[360px] shrink-0">
            {/* Top Square */}
            <div className="absolute top-0 left-[72px] w-[112px] h-[112px] md:left-[90px] md:w-[140px] md:h-[140px] border-2 border-white" />
            {/* Bottom Square */}
            <div className="absolute bottom-0 left-[72px] w-[112px] h-[112px] md:left-[90px] md:w-[140px] md:h-[140px] border-2 border-white" />
            {/* Left Rectangle */}
            <div className="absolute top-[64px] left-0 w-[128px] h-[160px] md:top-[80px] md:w-[160px] md:h-[200px] border-2 border-white" />
            {/* Right Rectangle */}
            <div className="absolute top-[64px] right-0 w-[128px] h-[160px] md:top-[80px] md:w-[160px] md:h-[200px] border-2 border-white" />
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
