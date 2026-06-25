import Image from "next/image";
import Link from "next/link";
import rect11 from "@/assets/Rectangle 11.png";
import rect12 from "@/assets/Rectangle 12.png";
import rect13 from "@/assets/Rectangle 13.png";
import rect14 from "@/assets/Rectangle 14.png";
import rect15 from "@/assets/Rectangle 15.png";
import rect16 from "@/assets/Rectangle 16.png";

const services = [
  {
    title: "Bridal Makeup",
    img: rect11,
    category: "Signature Service",
    description: "Elegant and timeless bridal makeovers customized for your special day.",
    featured: false,
  },
  {
    title: "Event Makeup",
    img: rect12,
    category: "Special Styling",
    description: "Sophisticated and glamorous look tailored for parties, receptions, and events.",
    featured: false,
  },
  {
    title: "Photo Makeup",
    img: rect13,
    category: "Studio Service",
    description: "Camera-ready makeup styled perfectly for professional portraiture and photography.",
    featured: false,
  },
  {
    title: "Fashion Makeup",
    img: rect14,
    category: "Editorial Service",
    description: "Bold, trend-setting styling designed for runways and fashion portfolios.",
    featured: false,
  },
  {
    title: "HD Makeup",
    img: rect15,
    category: "Premium Service",
    description: "Flawless, high-definition makeup with a seamless finish under studio lighting.",
    featured: false,
  },
  {
    title: "Ad Shoot Makeup",
    img: rect16,
    category: "Commercial Service",
    description: "Clean, natural skin finish with subtle accents designed for advertising and print.",
    featured: false,
  },
];

export default function MakeupServices() {
  return (
    <section className="bg-[#111] py-12 md:py-20 px-6 border-t border-white/5">
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <a
            key={i}
            href={`https://wa.me/917558160331?text=Hi!%20I%20am%20interested%20in%20your%20%22${encodeURIComponent(svc.title)}%22%20service%20and%20would%20love%20to%20know%20more%20about%20your%20pricing%20and%20availability.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-[#141414] aspect-[4/3] shadow-lg hover:shadow-gold/5 hover:border-gold/20 transition-all duration-500 block"
          >
            {/* Inner Luxury Frame Effect on Hover */}
            <div className="absolute inset-3 border border-gold/0 scale-95 z-20 pointer-events-none group-hover:border-gold/25 group-hover:scale-100 transition-all duration-500" />

            {/* Image / placeholder area */}
            <div className="w-full h-full relative overflow-hidden">
              {svc.featured ? (
                /* Golden placeholder card — matches the tan card in the image */
                <div className="w-full h-full bg-[#c8a96e] flex flex-col items-center justify-end pb-4">
                  <span className="px-4 py-1.5 border border-black/40 text-black text-[10px] uppercase tracking-widest font-bold hover:bg-black/10 transition-colors">
                    {svc.title}
                  </span>
                </div>
              ) : (
                <>
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-75 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/95 via-[#111]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-10" />
                </>
              )}
            </div>

            {/* Hover Caption Details */}
            {!svc.featured && (
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <span className="text-gold text-[9px] uppercase tracking-[0.2em] font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {svc.category}
                </span>

                <h3 className="font-cormorant text-white text-xl sm:text-2xl font-bold leading-tight">
                  {svc.title}
                </h3>

                {/* Collapsible details container that expands upward on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-gray-400 text-xs font-light line-clamp-2 mt-2 mb-3 leading-relaxed">
                    {svc.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase">
                    <span>Inquire Now</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
