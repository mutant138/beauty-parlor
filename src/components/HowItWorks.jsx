import Image from "next/image";
import homev1 from "@/assets/homev1.svg";
import homev2 from "@/assets/homev2.svg";
import homev3 from "@/assets/homev3.svg";

const steps = [
  {
    step: "1",
    icon: homev1,
    title: "Search",
    description:
      "Search to find the perfect makeup service for your special occasion and your needs.",
  },
  {
    step: "2",
    icon: homev2,
    title: "Choose",
    description:
      "Choose your date and time, and pick the right appointment slot that suits you.",
  },
  {
    step: "3",
    icon: homev3,
    title: "Deliver",
    description:
      "We deliver a flawless, customized makeup look crafted to perfection for your event.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0e0e0e] py-12 md:py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <h2 className="text-center font-sedgwick text-3xl md:text-5xl tracking-widest mb-16">
          <span className="text-white">HOW IT </span>
          <span className="text-gold">WORKS</span>
        </h2>

        {/* ── Steps ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-5 group">

              {/* Icon circle */}
              <div className="relative w-20 h-20 rounded-full border-2 border-gold/40 bg-gold/5 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,212,104,0.05)]">
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={40}
                  height={40}
                  className="opacity-90"
                />
                {/* Number badge */}
                {/* <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-black text-[10px] font-black font-poppins flex items-center justify-center">
                  {s.step}
                </span> */}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white font-poppins font-bold text-sm uppercase tracking-[0.15em] mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[220px] mx-auto">
                  {s.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
