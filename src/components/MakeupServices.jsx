import Image from "next/image";
import Link from "next/link";
import rect11 from "@/assets/Rectangle 11.png";
import rect12 from "@/assets/Rectangle 12.png";
import rect13 from "@/assets/Rectangle 13.png";
import rect14 from "@/assets/Rectangle 14.png";
import rect15 from "@/assets/Rectangle 15.png";
import rect16 from "@/assets/Rectangle 16.png";

const services = [
  { title: "Bridal Makeup", img: rect11, featured: false },
  { title: "Event Makeup", img: rect12, featured: false },
  { title: "Photo Makeup", img: rect13, featured: false },
  { title: "Fashion Makeup", img: rect14, featured: true },
  { title: "HD Makeup", img: rect15, featured: false },
  { title: "Ad Shoot Makeup", img: rect16, featured: false },
];

export default function MakeupServices() {
  return (
    <section className="bg-[#111] py-20 px-6 border-t border-white/5">
      {/* ── Section intro ── */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-cormorant italic text-white text-4xl md:text-5xl font-semibold mb-6">
          Our Makeup Services
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed opacity-85 mb-8">
          Our skilled makeup artists sign off on the use of only high-quality,
          hypoallergenic products to ensure a flawless finish. We personalize
          every service, getting to know you so we can achieve the perfect look.
        </p>
        <Link
          href="/services"
          className="inline-block px-8 py-2.5 border-2 border-gold text-gold text-xs font-black uppercase tracking-[0.18em] rounded-sm hover:bg-gold hover:text-black transition-all duration-300"
        >
          Read More
        </Link>
      </div>

      {/* ── Cards grid ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <div
            key={i}
            className="group flex flex-col border border-white/10 overflow-hidden hover:border-gold/30 transition-all duration-300"
          >
            {/* Image / placeholder area */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              {svc.featured ? (
                /* Golden placeholder card — matches the tan card in the image */
                <div className="w-full h-full bg-[#c8a96e] flex flex-col items-center justify-end pb-4">
                  <button className="px-4 py-1.5 border border-black/40 text-black text-[10px] uppercase tracking-widest font-bold hover:bg-black/10 transition-colors">
                    Add title
                  </button>
                </div>
              ) : (
                <>
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </>
              )}
            </div>

            {/* Title */}
            <div className="py-3 px-3 bg-[#111]">
              <p className="text-white text-xs font-poppins font-semibold tracking-wide">
                {svc.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
