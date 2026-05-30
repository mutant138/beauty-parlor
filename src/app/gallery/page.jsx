"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const categories = ["All", "Bridal", "Event / Party", "Fashion / Editorial", "HD / Ad Shoot"];

  const images = [
    {
      src: "/assets/gallery1.jpg",
      alt: "Classic Royal Bridal Look",
      title: "Classic Royal Bridal Look",
      category: "Bridal",
      description: "Timeless traditional South Indian bridal makeup featuring a rich gold-tinted glow, bold defined eyes, and elegant draping."
    },
    {
      src: "/assets/gallery2.jpg",
      alt: "Soft Dewy Party Glam",
      title: "Soft Dewy Party Glam",
      category: "Event / Party",
      description: "Fresh, luminous makeup with subtle pink lips and natural contour, ideal for evening parties and cocktail events."
    },
    {
      src: "/assets/gallery3.jpg",
      alt: "High-Fashion Editorial Contour",
      title: "High-Fashion Editorial Contour",
      category: "Fashion / Editorial",
      description: "Sharp, defined contouring and graphic eyeliner showcasing high-contrast fashion photoshoot aesthetics."
    },
    {
      src: "/assets/gallery4.jpg",
      alt: "Flawless HD Studio Makeup",
      title: "Flawless HD Studio Makeup",
      category: "HD / Ad Shoot",
      description: "Matte-finish, camera-ready HD makeup designed specifically to look flawless under high-power studio lights."
    },
    {
      src: "/assets/gallery5.jpg",
      alt: "Modern Reception Glow",
      title: "Modern Reception Glow",
      category: "Bridal",
      description: "Shimmering champagne eyeshadow and soft coral lips designed to look elegant for modern evening wedding receptions."
    },
    {
      src: "/assets/gallery6.jpg",
      alt: "Sleek Runway Glam",
      title: "Sleek Runway Glam",
      category: "Fashion / Editorial",
      description: "Bold, trend-setting look featuring metallic accents and sleek styling for fashion runway shows."
    },
    {
      src: "/assets/gallery7.jpg",
      alt: "Traditional Bridal Muhurtham",
      title: "Traditional Bridal Muhurtham",
      category: "Bridal",
      description: "Elegant South Indian muhurtham style with classic bold kajal eyes and rich traditional accents."
    },
    {
      src: "/assets/gallery8.jpg",
      alt: "Vibrant Sangeet Ceremony Look",
      title: "Vibrant Sangeet Ceremony Look",
      category: "Event / Party",
      description: "Playful, colorful eyeshadow with statement lip colors to celebrate and dance the night away."
    },
    {
      src: "/assets/gallery9.jpg",
      alt: "Commercial Ad Shoot Makeup",
      title: "Commercial Ad Shoot Makeup",
      category: "HD / Ad Shoot",
      description: "Natural-looking, clean-skin makeup style created for commercial media and print advertisements."
    },
    // {
    //   src: "/assets/IMG-20260127-WA0147.jpg",
    //   alt: "Radiant Engagement Glow",
    //   title: "Radiant Engagement Glow",
    //   category: "Event / Party",
    //   description: "Soft radiant skin with a warm glow, perfectly suited for engagement ceremonies and ring celebrations."
    // },
    {
      src: "/assets/IMG_20260301_084836.jpg",
      alt: "Dreamy Pastel Bridal Look",
      title: "Dreamy Pastel Bridal Look",
      category: "Bridal",
      description: "A soft, dreamy bridal look with pastel tones, dewy skin finish, and delicate eye detailing for the modern bride."
    },
    {
      src: "/assets/IMG_20260301_085346.jpg",
      alt: "Golden Hour Bridal Radiance",
      title: "Golden Hour Bridal Radiance",
      category: "Bridal",
      description: "Sun-kissed golden tones with luminous highlighting, designed to capture the magic of golden hour photography."
    },
    {
      src: "/assets/IMG_20260302_091922.jpg",
      alt: "Regal South Indian Bride",
      title: "Regal South Indian Bride",
      category: "Bridal",
      description: "A grand traditional look with rich jewel tones, bold lips, and perfectly lined eyes for the quintessential South Indian bride."
    },
    {
      src: "/assets/IMG_20260307_110423.jpg",
      alt: "Chic Cocktail Evening Glam",
      title: "Chic Cocktail Evening Glam",
      category: "Event / Party",
      description: "Smokey eyes with a glossy lip finish, creating a glamorous statement look for cocktail nights and after-parties."
    },
    {
      src: "/assets/IMG_20260307_125053.jpg",
      alt: "Ethereal Editorial Beauty",
      title: "Ethereal Editorial Beauty",
      category: "Fashion / Editorial",
      description: "An ethereal, high-fashion editorial look with artistic eye styling and flawless skin for magazine-worthy shoots."
    },
    {
      src: "/assets/IMG_20260308_084718.jpg",
      alt: "Classic Red Lip Bridal",
      title: "Classic Red Lip Bridal",
      category: "Bridal",
      description: "Timeless bridal elegance with a bold red lip, winged liner, and perfectly sculpted brows for a statement look."
    },
    {
      src: "/assets/IMG_20260501_180847.jpg",
      alt: "Glamorous Reception Queen",
      title: "Glamorous Reception Queen",
      category: "Event / Party",
      description: "Dazzling shimmer and rich pigments designed to make you the centre of attention at your wedding reception."
    },
    {
      src: "/assets/IMG_20260504_064554.jpg",
      alt: "Natural Beauty Editorial",
      title: "Natural Beauty Editorial",
      category: "Fashion / Editorial",
      description: "A clean, minimal editorial look that celebrates natural beauty with barely-there makeup and flawless skin."
    },
    {
      src: "/assets/IMG_20260506_200459.jpg",
      alt: "Luxury HD Bridal Closeup",
      title: "Luxury HD Bridal Closeup",
      category: "HD / Ad Shoot",
      description: "Ultra-HD camera-ready bridal makeup with seamless blending and micro-detail precision for cinematic shoots."
    },
    {
      src: "/assets/IMG_20260514_141046.jpg",
      alt: "Festive Haldi Ceremony Glow",
      title: "Festive Haldi Ceremony Glow",
      category: "Event / Party",
      description: "Bright, fresh-faced makeup with warm undertones, perfect for the joyful and vibrant Haldi ceremony."
    },
    {
      src: "/assets/IMG_20260517_093019.jpg",
      alt: "Bold Avant-Garde Fashion",
      title: "Bold Avant-Garde Fashion",
      category: "Fashion / Editorial",
      description: "A striking avant-garde look pushing creative boundaries with bold colours and artistic expression."
    },
    {
      src: "/assets/IMG_20260517_093024.jpg",
      alt: "Premium Studio Portrait",
      title: "Premium Studio Portrait",
      category: "HD / Ad Shoot",
      description: "Studio-quality portrait makeup with meticulous skin detailing, perfect for professional headshots and portfolios."
    },
    {
      src: "/assets/IMG_7351.JPG",
      alt: "Subtle Elegance Makeover",
      title: "Subtle Elegance Makeover",
      category: "Bridal",
      description: "An understated yet elegant bridal look with soft contouring, nude lips, and beautifully blended eye tones."
    }
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state to trigger entrance animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Filter images based on selected category
  const filteredImages = activeFilter === "All"
    ? images
    : images.filter(img => img.category === activeFilter);

  // Navigation handlers for Lightbox
  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev =>
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    }
  }, [selectedImageIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev =>
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedImageIndex, filteredImages.length]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext, handleClose]);

  // Disable background scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIndex]);

  const currentImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen relative overflow-hidden font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Breadcrumb Section */}
      <section className="bg-white/[0.02] border-y border-white/5 py-4 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-gold transition-colors duration-300">
              Home
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-gold font-poppins font-medium">Gallery</span>
          </nav>
          <a
            href="https://wa.me/919079540210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border border-gold/40 text-gold text-xs rounded-full hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 font-poppins uppercase tracking-wider font-semibold"
          >
            {/* WhatsApp Icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.49 4.793 1.491 5.485.002 9.947-4.46 9.95-9.95.001-2.658-1.034-5.158-2.91-7.037C16.598 1.78 14.093.75 11.435.75c-5.491 0-9.956 4.462-9.96 9.953-.002 1.8.48 3.565 1.393 5.118l-.96 3.51 3.6-.944.549.309zM18.64 14.64c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.785-1.07-.957-1.79-2.14-2-2.5-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63s-.81-1.95-1.11-2.67c-.3-.72-.6-0.63-.81-.63-.21-.006-.45-.006-.69-.006s-.63.09-.96.45c-.33.36-1.26 1.23-1.26 3.003 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.15 5.44 2.22.96 3.03.78 4.1.48 1.08-.3 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
            </svg>
            Connect on WhatsApp
          </a>
        </div>
      </section>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8 text-center relative z-10">
        <span className="font-poppins font-semibold text-gold text-xs tracking-[0.25em] uppercase block mb-3 opacity-90">
          Our Portfolio
        </span>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-1 mb-4">
          <h1 className="font-sedgwick text-5xl md:text-7xl text-gold leading-none">
            Capturing
          </h1>
          <span className="font-cormorant italic text-4xl md:text-6xl text-white font-medium">
            Flawless Beauty
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base font-light leading-relaxed font-sans">
          Browse through our curated collection of signature bridal makeovers, high-fashion editorial styling, and exquisite event looks designed to highlight your natural elegance.
        </p>
      </section>

      {/* Filter Category Tabs */}
      <section className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-[10px] md:text-xs font-poppins uppercase tracking-widest transition-all duration-300 cursor-pointer ${activeFilter === cat
                  ? "bg-gold text-black font-semibold shadow-[0_0_15px_rgba(255,212,104,0.3)]"
                  : "bg-white/5 text-gray-300 border border-white/5 hover:border-gold/30 hover:text-gold"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-700 ${isMounted ? "opacity-100" : "opacity-0"
            }`}
        >
          {filteredImages.map((image, idx) => (
            <div
              key={image.src}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-[#141414] aspect-[4/5] shadow-lg hover:shadow-gold/5 hover:border-gold/20 transition-all duration-500"
            >
              {/* Inner Luxury Frame Effect on Hover */}
              <div className="absolute inset-3 border border-gold/0 scale-95 z-20 pointer-events-none group-hover:border-gold/25 group-hover:scale-100 transition-all duration-500" />

              {/* Image Container */}
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Overlay Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/90 via-[#0b0b0b]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10" />
              </div>

              {/* Hover Caption Details */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-[9px] uppercase tracking-[0.2em] font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {image.category}
                </span>
                <h3 className="font-cormorant text-white text-2xl font-bold leading-tight mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {image.title}
                </h3>
                <p className="text-gray-400 text-xs font-light line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 leading-relaxed">
                  {image.description}
                </p>
                <div className="flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 border border-white/5 rounded-sm bg-white/[0.01]">
            <p className="text-gray-400 font-poppins text-sm tracking-wider">No images found in this category.</p>
          </div>
        )}
      </section>

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-b from-transparent to-white/[0.02] border-t border-white/5 py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant italic text-3xl md:text-5xl font-semibold mb-4 text-white">
            Ready for Your Signature Makeover?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
            Whether it's your wedding day, a special event, or a commercial shoot, we design flawless styling personalized to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gold text-black text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 font-poppins shadow-md shadow-gold/25"
            >
              Book an Appointment
            </Link>
            <a
              href="https://wa.me/919079540210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-all duration-300 font-poppins"
            >
              Inquire Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {selectedImageIndex !== null && currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 p-4 sm:p-6 md:p-8">

          {/* Close Area */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={handleClose} />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Lightbox Wrapper */}
          <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-stretch justify-center gap-6 z-40 bg-[#0f0f0f] border border-white/10 rounded-sm shadow-2xl overflow-hidden max-h-[90vh]">

            {/* Visual Frame Section */}
            <div className="relative flex-grow flex items-center justify-center bg-[#070707] p-2 min-h-[40vh] lg:min-h-0 lg:w-[65%]">

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-40 p-2.5 rounded-full bg-black/40 border border-white/5 text-white/70 hover:text-white hover:bg-gold hover:text-black hover:border-gold hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Image Display */}
              <div className="relative w-full h-full max-h-[50vh] lg:max-h-[80vh] flex items-center justify-center p-4">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-[45vh] lg:max-h-[75vh] object-contain rounded-sm select-none border border-white/5"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-40 p-2.5 rounded-full bg-black/40 border border-white/5 text-white/70 hover:text-white hover:bg-gold hover:text-black hover:border-gold hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Count Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1 text-[10px] uppercase tracking-widest text-gray-400 rounded-full border border-white/5 font-poppins">
                {selectedImageIndex + 1} of {filteredImages.length}
              </div>
            </div>

            {/* Sidebar Details Section */}
            <div className="w-full lg:w-[35%] p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0e0e0e] overflow-y-auto">

              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-[9px] uppercase tracking-widest font-semibold border border-gold/15 mb-3">
                    {currentImage.category}
                  </span>
                  <h2 className="font-cormorant text-white text-3xl font-bold leading-tight">
                    {currentImage.title}
                  </h2>
                </div>

                <div className="w-12 h-[2px] bg-gold" />

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-2">Description</h4>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                    {currentImage.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-2">Professional Makeup Services</h4>
                  <ul className="text-gray-400 text-xs space-y-1.5 list-disc pl-4 font-light">
                    <li>Premium hypoallergenic skin prep</li>
                    <li>Long-lasting flawless airbrush/HD finish</li>
                    <li>Symmetrical customized eye styling</li>
                    <li>Perfect outfit draping & hairstyling synergy</li>
                  </ul>
                </div>
              </div>

              {/* Dynamic WhatsApp Inquiry Action */}
              <div className="pt-8 mt-6 border-t border-white/5">
                <a
                  href={`https://wa.me/919079540210?text=Hi!%20I%20saw%20the%20%22${encodeURIComponent(currentImage.title)}%22%20look%20in%20your%20gallery%20and%20would%20love%20to%20know%20more%20about%20your%20services%20and%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 bg-gold hover:bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 font-poppins shadow-md shadow-gold/15 hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.49 4.793 1.491 5.485.002 9.947-4.46 9.95-9.95.001-2.658-1.034-5.158-2.91-7.037C16.598 1.78 14.093.75 11.435.75c-5.491 0-9.956 4.462-9.96 9.953-.002 1.8.48 3.565 1.393 5.118l-.96 3.51 3.6-.944.549.309zM18.64 14.64c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.785-1.07-.957-1.79-2.14-2-2.5-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63s-.81-1.95-1.11-2.67c-.3-.72-.6-0.63-.81-.63-.21-.006-.45-.006-.69-.006s-.63.09-.96.45c-.33.36-1.26 1.23-1.26 3.003 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.15 5.44 2.22.96 3.03.78 4.1.48 1.08-.3 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
                  </svg>
                  Inquire about this look
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}

