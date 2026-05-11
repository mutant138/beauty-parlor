import Link from "next/link";

export default function BridalSection() {
  return (
    <section className="bg-[#111] py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">

        {/* ── Gold italic heading ── */}
        <h2 className="font-cormorant italic text-gold text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-10">
          How We Do Wedding Bridal Makeup?
        </h2>

        {/* ── Body paragraphs ── */}
        <div className="space-y-5 text-gray-300 text-sm leading-relaxed max-w-3xl mb-10">
          <p>
            I&apos;m simply thrilled to talk to you a little more about what you can
            expect when you book with us. From the very first contact, we want
            you to feel at ease, seen, and celebrated. There will be a Good First
            Consultation Call where we learn all about your vision for your big
            day.
          </p>
          <p>
            Our Makeup is precision focused, from foundation to finishing touches
            — and we take great pride in using only the finest products that
            photograph beautifully and last all day long.
          </p>
          <p>
            Finally, we would like to ensure total partnership with us on the
            morning of the wedding, giving you a luxurious and memorable
            experience of preparing for your big day, making every moment of
            getting ready feel as special as the ceremony itself.
          </p>
        </div>

        {/* ── CTA Button ── */}
        <Link
          href="/services"
          className="inline-block px-8 py-2.5 border-2 border-gold text-gold text-xs font-black uppercase tracking-[0.18em] rounded-sm hover:bg-gold hover:text-black transition-all duration-300"
        >
          Read More
        </Link>

      </div>
    </section>
  );
}
