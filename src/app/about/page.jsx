"use client";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { number: "4716", label: "Wedding Worked" },
    { number: "6160+", label: "Happy Customers" },
    { number: "1560", label: "Events Worked" },
  ];

  const expertise = [
    {
      title: "Bridal Makeup",
      desc: "We specialize in creating timeless bridal looks that enhance your natural beauty and make your special day unforgettable.",
    },
    {
      title: "Fashion & Party Makeup",
      desc: "Stay ahead of the trends with our modern makeup techniques and stylish hair designs.",
    },
    {
      title: "Media & Film Makeup",
      desc: "Our artists are experienced in creating camera-ready looks for media, film, and photography.",
    },
    {
      title: "Portfolio Makeup",
      desc: "Perfect for models and aspiring artists, we create stunning looks tailored for portfolio shoots that highlight your best features.",
    },
    {
      title: "Commercial Makeup",
      desc: "Whether it's for advertisements, corporate shoots, or brand campaigns, we deliver professional makeup that aligns with your commercial needs.",
    },
    {
      title: "Personal Grooming",
      desc: "From trendy haircuts to flawless skin treatments, we offer comprehensive grooming services.",
    },
  ];

  return (
    <main className="bg-[#111] text-white overflow-hidden">
      {/* Breadcrumb Section */}
      <section className="bg-white/5 border-y border-white/10 py-4 px-3 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-gold">About</span>
          </nav>
          <a
            href="https://wa.me/919079540210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gold/50 text-gold text-xs rounded-full hover:bg-gold hover:text-black transition-all duration-300"
          >
            Connect on WhatsApp
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-18 pb-24">
        {/* About Us & Why Choose Sections */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-10 ">
            <div className="space-y-6 font-poppins">
              <h1 className="text-gold font-bold text-3xl tracking-tight">
                About Us
              </h1>

              <p className="text-gray-300 leading-relaxed text-lg font-poppins">
                Welcome to{" "}
                <span className="text-gold font-semibold">
                  Yazhini Makeup Artist
                </span>
                , your ultimate destination for professional makeup and complete
                makeovers in Chennai. With over{" "}
                <span className="text-gold font-semibold">20 years</span> of
                expertise in the beauty and makeup industry, we specialize in
                transforming ordinary looks into extraordinary ones. Whether
                it's a bridal glow, a trendy fashion look, or a glamorous party
                makeover, we are here to make you feel confident and radiant.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-gold font-bold text-3xl tracking-tight">
                Why Choose Yazhini Makeup Artist?
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg">
                At Yazhini Makeup Artist, we pride ourselves on being a one-stop
                solution for all your beauty needs. Our team of{" "}
                <span className="text-gold font-semibold">
                  highly skilled makeup artists and creative hairstylists
                </span>{" "}
                is dedicated to delivering personalized services tailored to
                your unique requirements.{" "}
                <span className="text-gold font-semibold">
                  From bridal makeup to event party looks, media
                </span>{" "}
                and more, we cater to a wide range of beauty demands.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/about-image.jpg"
              alt="Yazhini Makeup Artist"
              className="w-full max-w-md rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-gold text-5xl md:text-6xl font-sedgwick italic">
                {stat.number}
              </div>
              <div className="text-gray-400 font-bold tracking-widest text-sm uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Our Expertise Section */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-sedgwick text-gold mb-2">
              Our <span className="text-white">Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {expertise.map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-gold font-bold text-xl">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Makeup Products Section */}
        <section className="text-center py-12">
          <h2 className="text-5xl md:text-7xl font-sedgwick text-gold">
            Makeup products <span className="text-white">we use</span>
          </h2>
        </section>

        {/* Commitment, Approach, Visit Sections */}
        <section className="space-y-16">
          <div className="space-y-4">
            <h3 className="text-gold font-bold text-2xl">
              Our Commitment to Quality
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your safety and satisfaction aren't just goals—they're our top
              priorities. We exclusively use high-quality, hypoallergenic
              products to ensure a flawless, long-lasting finish that is gentle
              on your skin. We believe beauty shouldn't be a gatekept luxury:
              our services are curated to suit all budgets, making professional
              artistry accessible to everyone.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-gold font-bold text-2xl">
              A Customer-Centric Approach
            </h3>
            <p className="text-gray-400 leading-relaxed">
              No two faces are the same, and neither are two visions. We pride
              ourselves on being listeners first and artists second. By focusing
              on your unique preferences and the fine details, we've built a
              community of trust with clients who rely on us for their most
              important life moments.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-gold font-bold text-2xl">Visit Us Today</h3>
            <p className="text-gray-400 leading-relaxed">
              Ready for your transformation? Experience the magic of
              professional makeup and hairstyling at Yazhini Makeup Artist.
              Whether it's a wedding, a gala, or a personal photoshoot, we're
              here to help you step out with confidence.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
