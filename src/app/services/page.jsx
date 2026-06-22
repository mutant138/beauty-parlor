import Link from "next/link";

export const metadata = {
  title: "Our Services | Yazhini Makeup Artist",
  description:
    "Explore the wide range of professional makeup and styling services offered by Yazhini Makeup Artist, including bridal, event, fashion, and portfolio makeup.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Bridal Makeup",
      description:
        "Your wedding day is one of the most important days of your life, and we are here to make you look and feel like a queen. Our bridal makeup services include:",
      details: [
        "Signature makeup look",
        "Specific photo-ready makeup",
        "High-definition (HD) makeup looks for camera",
        "Bridal trial and consultation session",
      ],
    },
    {
      title: "Event Makeup",
      description:
        "Whether it's a corporate event, family function, or a grand celebration, our event makeup services ensure you stand out in the crowd. We offer:",
      details: [
        "Glamorous and elegant looks",
        "Quick touch-ups for on-the-go events",
        "Customized makeup to match your outfit and theme",
      ],
    },
    {
      title: "Fashion Makeup",
      description:
        "Stay ahead of the trends with our fashion makeup services. Perfect for runway shows, photoshoots, and fashion events, we provide:",
      details: [
        "Bold and edgy looks",
        "Trendsetting styles",
        "Collaboration with designers and stylists",
      ],
    },
    {
      title: "Portfolio Makeup",
      description:
        "For models and aspiring artists, our portfolio makeup services are tailored to highlight your best features. We provide:",
      details: [
        "Natural and professional looks",
        "High-definition makeup for photography",
        "Versatile styles to showcase your range",
      ],
    },
    {
      title: "Commercial Makeup",
      description:
        "Our commercial makeup services are perfect for advertisements, brand campaigns, and corporate shoots. We deliver:",
      details: [
        "Clean and natural makeup",
        "Brand-specific looks",
        "Quick and efficient services for tight schedules",
      ],
    },
    {
      title: "Party Makeup",
      description:
        "Get ready to turn heads at your next party with our party makeup services. We offer:",
      details: [
        "Glamorous and trendy looks",
        "Smudge-proof and long-lasting makeup",
        "Customized styles to match your outfit",
      ],
    },
    {
      title: "Fashion Show and Hairstyles",
      description:
        "From runway shows to fashion events, our fashion show makeup and hairstyling services ensure you make a lasting impression. We provide:",
      details: [
        "Creative and avant-garde looks",
        "Trendy hairstyles to complement your makeup",
        "Coordination with designers for a cohesive look",
      ],
    },
    {
      title: "Dressing and Saree Draping",
      description:
        "Complete your look with our dressing and saree draping services. Our experts will help you:",
      details: [
        "Choose the perfect outfit for your event",
        "Drape sarees in traditional and modern styles",
        "Add accessories to enhance your overall look",
      ],
    },
  ];

  const specializedServices = [
    {
      title: "Expert Artists",
      description:
        "Our team consists of highly skilled and professional makeup artists with extensive experience in the beauty and entertainment industry.",
    },
    {
      title: "Premium Quality Products",
      description:
        "We use only top-quality, hypoallergenic products to ensure a flawless finish without any allergic reactions.",
    },
    {
      title: "Customized Looks",
      description:
        "Every client is unique, and we create personalized makeup looks that enhance your natural beauty and suit your preferences.",
    },
    {
      title: "Affordable Pricing",
      description:
        "Our services are available at competitive prices, making luxury makeup accessible to everyone.",
    },
  ];

  const locations = [
    "Bangalore",
    "Chennai",
    "Coimbatore",
    "Trichy",
    "Tirunelveli",
    "Erode",
    "All over Tamil Nadu",
  ];

  return (
    <div className="bg-[#111] text-white min-h-screen font-sans relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Breadcrumb Header */}
      <section className="bg-white/5 border-y border-white/10 py-3 px-4 mb-4 sm:mb-12">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-gold font-poppins">Services</span>
          </nav>
          <a
            href="https://wa.me/917558160331"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-6 py-1.5 sm:py-2 border border-gold/50 text-gold text-[10px] sm:text-xs rounded-full hover:bg-gold hover:text-black transition-all duration-300 font-poppins whitespace-nowrap"
          >
            Connect on WhatsApp
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-0 sm:pt-4 pb-12 md:py-24 relative z-10">
        {/* Our Services Intro */}
        <div className="text-center mb-8 md:mb-32">
          <h1 className="font-sedgwick text-4xl md:text-7xl mb-6 md:mb-10">
            <span className="text-gold">Our</span>{" "}
            <span className="text-white">Services</span>
          </h1>
          <p className="max-w-7xl mx-auto text-gray-300 leading-relaxed text-sm md:text-sm mb-12 font-sans opacity-90">
            At{" "}
            <span className="text-gold font-semibold italic">
              Yazhini Makeup Artist
            </span>
            , we take pride in offering a wide range of professional makeup and
            styling services tailored to meet the unique needs of our clients.
            Whether you're preparing for your wedding, a film shoot, a fashion
            event, or a party, our team of expert makeup artists is here to help
            you achieve a glamorous and stunning look. With years of experience
            and a commitment to excellence, we have become a trusted name in the
            beauty industry, serving clients in{" "}
            <span className="text-gold italic font-medium">
              Bangalore, Chennai, Coimbatore, and all over Tamil Nadu.
            </span>
          </p>
          <a
            href="https://wa.me/917558160331?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20for%20makeup%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 rounded-full border-2 border-gold text-gold text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all shadow-[0_0_20px_rgba(255,212,104,0.1)]"
          >
            Book Now
          </a>
        </div>

        {/* Our Specialized Services */}
        <section className="mb-10 md:mb-32">
          <h2 className="font-sedgwick text-3xl md:text-5xl text-center mb-4 md:mb-10">
            <span className="text-gold">Our Specialized</span>{" "}
            <span className="text-white">Services</span>
          </h2>
          <ul className="max-w-7xl mx-auto space-y-1">
            <li className="text-gray-300 leading-relaxed text-sm md:text-md font-poppins flex items-start gap-4">
              <span className="text-gold shrink-0">•</span>
              <span>
                <span className="text-gold font-bold">Expert Artists:</span> Our
                team consists of highly skilled and professional makeup artists
                with extensive experience in the beauty and entertainment
                industry.
              </span>
            </li>
            <li className="text-gray-300 leading-relaxed text-sm md:text-md font-poppins flex items-start gap-4">
              <span className="text-gold shrink-0">•</span>
              <span>
                <span className="text-gold font-bold">
                  Premium Quality Products:
                </span>{" "}
                We use only top-quality, hypoallergenic products to ensure a
                flawless finish without any allergic reactions.
              </span>
            </li>
            <li className="text-gray-300 leading-relaxed text-sm md:text-md font-poppins flex items-start gap-4">
              <span className="text-gold shrink-0">•</span>
              <span>
                <span className="text-gold font-bold">Customized Looks:</span>{" "}
                Every client is unique, and we create personalized makeup looks
                that enhance your natural beauty and suit your preferences.
              </span>
            </li>
            <li className="text-gray-300 leading-relaxed text-sm md:text-md font-poppins flex items-start gap-4">
              <span className="text-gold shrink-0">•</span>
              <span>
                <span className="text-gold font-bold">Affordable Pricing:</span>{" "}
                Our services are available at competitive prices, making luxury
                makeup accessible to everyone.
              </span>
            </li>
          </ul>
        </section>

        {/* Detailed Services Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Services */}
          <div className="w-full lg:w-2/3 space-y-12 md:space-y-20">
            <h2 className="font-sedgwick text-3xl md:text-5xl mb-8 md:mb-16">
              <span className="text-gold">Why Choose Our</span>{" "}
              <span className="text-white">Makeup Services?</span>
            </h2>

            {services.map((service, index) => (
              <div
                key={index}
                className="space-y-6 border-b border-white/10 pb-10 md:pb-16 last:border-0"
              >
                <h3 className="text-gold font-bold text-3xl md:text-4xl uppercase tracking-tighter font-cormorant italic">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl opacity-90">
                  {service.description}
                </p>
                <ul className="space-y-3 mt-6">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 text-sm flex items-start gap-3 group"
                    >
                      <span className="text-gold mt-1 group-hover:scale-125 transition-transform">
                        •
                      </span>
                      <span className="group-hover:text-gray-200 transition-colors">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <a
                    href={`https://wa.me/917558160331?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20for%20the%20%22${encodeURIComponent(service.title)}%22%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] border-b-2 border-gold/30 hover:border-gold transition-all pb-1"
                  >
                    Book Now <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white/[0.03] p-6 sm:p-10 rounded-3xl border border-white/10 sticky top-32 backdrop-blur-sm">
              <h2 className="font-sedgwick text-3xl mb-10">
                <span className="text-gold">Services</span>{" "}
                <span className="text-white">Offered At:</span>
              </h2>
              <p className="text-gray-400 text-sm mb-8 font-sans">
                We are proud to offer our services in:
              </p>
              <ul className="space-y-4 mb-10">
                {locations.map((loc, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-center gap-3 group"
                  >
                    <span className="text-gold text-lg group-hover:translate-x-1 transition-transform">
                      ▸
                    </span>
                    <span className="group-hover:text-white transition-colors">
                      {loc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs italic mb-10 leading-relaxed">
                No matter where you are, our team is ready to bring our
                expertise to you.
              </p>
              <a
                href="https://wa.me/917558160331?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20for%20makeup%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-4 rounded-full border-2 border-gold text-gold text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all shadow-lg hover:shadow-gold/20"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
