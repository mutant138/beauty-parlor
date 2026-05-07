import Image from "next/image";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png"; // Stacking both just in case, per instructions

export default function Hero() {
  return (
    <section className="relative w-full bg-[#111] overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Optional faint background glow for effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left mt-8 lg:mt-0">
            {/* Headers */}
            <div className="mb-6 space-y-2">
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="font-sedgwick text-5xl md:text-6xl lg:text-7xl text-gold leading-tight tracking-wide">
                  Experience
                </h1>
                <h2 className="font-cormorant italic text-4xl md:text-5xl lg:text-6xl text-white font-medium">
                  the Best
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 md:w-24 h-[1px] bg-gold"></div>
                <h2 className="font-sedgwick text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
                  Beauty Services
                </h2>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-300 font-sans text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mb-8 opacity-90">
              Vashini Makeup artist offers highly customized makeup services for
              your most special occasions. We provide all kinds of latest and
              top class makeup services for every skin type to ensure our
              clients look exquisite on their setting.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-4 py-2 rounded-full border-2 border-gold text-gold font-sans text-xs uppercase tracking-widest font-semibold hover:bg-gold hover:text-black transition-colors duration-300">
                Book Now
              </button>
              <button className="px-4 py-2 rounded-full border-2 border-white text-white font-sans text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                Connect on Whatsapp
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              <Image
                src={hero1}
                alt="Vashini Beauty Background Element"
                fill
                className="object-contain absolute z-0 opacity-80"
                priority
              />
              {/* <Image 
                src={hero1} 
                alt="Vashini Beauty Model" 
                fill 
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
