"use client";
import Link from "next/link";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const mobile = formData.get("mobile") || "";
    const whatsapp = formData.get("whatsapp") || "";
    const subject = formData.get("subject") || "";

    const message = `Hi Yazhini Makeup Artist! I'd like to get in touch.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Mobile:* ${encodeURIComponent(mobile)}%0A*WhatsApp:* ${encodeURIComponent(whatsapp)}%0A*Subject:* ${encodeURIComponent(subject)}`;

    window.open(`https://wa.me/917558160331?text=${message}`, "_blank");
  };

  return (
    <main className="bg-[#111] text-white min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gold/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Breadcrumb Section */}
      <section className="bg-white/5 border-y border-white/10 py-3 px-4 mb-4 sm:mb-12">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-gold font-poppins">Contact</span>
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

      <div className="max-w-7xl mx-auto px-6 pt-0 sm:pt-4 pb-12">
        {/* Header Section */}
        <div className="text-center space-y-8 mb-8">
          <h1 className="text-5xl md:text-7xl font-sedgwick">
            <span className="text-gold">Contact</span>{" "}
            <span className="text-white">us</span>
          </h1>
          <p className="text-gold text-sm md:text-xs font-poppins max-w-4xl mx-auto uppercase tracking-wider leading-relaxed">
            Feel Free To Contact Us Using The Form Below And One Of Our
            Consultants Will Contact You Within One Business Days.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {/* Name */}
            <div className="space-y-3">
              <label className="block text-gold font-semibold text-lg font-poppins ml-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-transparent border border-gold rounded-full px-6 py-4 outline-none focus:border-gold transition-colors text-gray-300 placeholder:text-gold font-poppins"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-3">
              <label className="block text-gold font-semibold text-lg font-poppins ml-2">
                Mobile number
              </label>
              <input
                type="tel"
                name="mobile"
                required
                placeholder="Enter your mobile number"
                className="w-full bg-transparent border border-gold rounded-full px-6 py-4 outline-none focus:border-gold transition-colors text-gray-300 placeholder:text-gold font-poppins"
              />
            </div>

            {/* Whatsapp Number */}
            <div className="space-y-3">
              <label className="block text-gold font-semibold text-lg font-poppins ml-2">
                Whatsapp number
              </label>
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="Enter your whatsapp number"
                className="w-full bg-transparent border border-gold rounded-full px-6 py-4 outline-none focus:border-gold transition-colors text-gray-300 placeholder:text-gold font-poppins"
              />
            </div>

            {/* Your Subject */}
            <div className="space-y-3">
              <label className="block text-gold font-semibold text-lg font-poppins ml-2">
                Your subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Enter your subject"
                className="w-full bg-transparent border border-gold rounded-full px-6 py-4 outline-none focus:border-gold transition-colors text-gray-300 placeholder:text-gold font-poppins"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="px-12 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition-all duration-300 font-bold tracking-widest uppercase text-sm font-poppins cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
