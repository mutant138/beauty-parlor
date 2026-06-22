"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const academyBenefits = [
    {
      title: "1-on-1 Personalized Focus",
      desc: "Small batches to ensure personal attention and detailed feedback on every stroke.",
      icon: (
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Live Model Practice",
      desc: "Work on live models to build real-world speed, precision, and confidence.",
      icon: (
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Academy Certification",
      desc: "Receive a professional certificate of completion recognized in the beauty industry.",
      icon: (
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Business Mentorship",
      desc: "Learn styling photography, portfolio building, and client booking strategies.",
      icon: (
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const courses = [
    {
      id: "personal-grooming",
      title: "Self Makeup & Grooming",
      level: "Beginner Friendly",
      duration: "3 Days (12 Hours)",
      overview: "Designed for individuals looking to master grooming techniques, product styling, base preparation, and natural looks for work and social events.",
      benefits: [
        "Learn matching foundations for your skin type",
        "Step-by-step contouring & highlighting styling",
        "Classic daytime makeup transitioning to evening party glam",
        "Personalized product kit recommendation guide"
      ],
      modules: [
        {
          title: "Module 1: Skin Care Prep & Perfect Base",
          details: "Understanding your skin type, cleansing-toning-moisturizing (CTM) routine, correct primer application, foundation matching, and color correcting blemishes."
        },
        {
          title: "Module 2: Eye Artistry & Brow Shaping",
          details: "Defining eyebrows naturally, everyday basic eye shadows, smooth eyeliner application, mascara usage, and choosing shadows for your eye color."
        },
        {
          title: "Module 3: Lip Styling & Event Transitions",
          details: "Lip liner definition, choosing daily lip colors, transitioning to bold night-out glam using highlighters, soft contour, and setting sprays."
        }
      ]
    },
    {
      id: "bridal-artistry",
      title: "Professional Bridal Makeup Artistry",
      level: "Professional Masterclass",
      duration: "30 Days (120 Hours)",
      overview: "A comprehensive, start-to-finish professional training course covering traditional and contemporary bridal makeovers, HD/Airbrush makeup, saree draping, and styling business setups.",
      benefits: [
        "10+ hands-on practical sessions with live models",
        "Extensive study on color theory, undertones, and face structures",
        "Mastering Airbrush, HD camera-ready makeup, and editorial looks",
        "Professional certificate & portfolio shoot guidance"
      ],
      modules: [
        {
          title: "Module 1: Foundations of Makeup & Skin Analysis",
          details: "Deep dive into skin types, sanitation guidelines, color wheel theory, mixing custom foundation bases, and matching undertones accurately."
        },
        {
          title: "Module 2: Advanced Face Sculpting Techniques",
          details: "Cream & powder contouring, corrective contouring for different face structures, baking, blush draping, and strategic highlighting."
        },
        {
          title: "Module 3: Advanced Eye Makeups",
          details: "Mastering smokey eyes, cut crease, halo eyes, glitter placement, false eyelash application, and symmetrical eyeliner."
        },
        {
          title: "Module 4: Bridal Makeovers & Saree Draping",
          details: "South Indian traditional bridal makeovers, North Indian wedding styles, reception glams, Kanchipuram saree folding, pleating, and secure draping."
        },
        {
          title: "Module 5: Bridal Hairstyling & Business Startup",
          details: "Traditional braids, low messy buns, flower attachment styling, hair prepping, pricing packages, client management, and portfolio shooting."
        }
      ]
    },
    {
      id: "hairstyling-masterclass",
      title: "Advanced Bridal Hairstyling",
      level: "Intermediate to Advanced",
      duration: "7 Days (28 Hours)",
      overview: "For makeup artists looking to upgrade their hair game. Master professional styling tools, traditional bridal braids, low buns, messy hairstyles, and red carpet curls.",
      benefits: [
        "Master hot tools: curling wands, straighteners, crimpers",
        "Learn texturizing, hair prep, and styling product usage",
        "Traditional braids & modern messy hair combinations",
        "Techniques for long-lasting settings and heavy ornament attachment"
      ],
      modules: [
        {
          title: "Module 1: Hair Prepping & Volume Creation",
          details: "Crimping techniques for ultimate volume, blowdrying, sectioning logic, understanding textures, and structural hairspray selection."
        },
        {
          title: "Module 2: Classic Bridal Buns & Braids",
          details: "Traditional South Indian wedding braids, donut buns, low bridal rolls, padding setups, and securing jasmine flower strands."
        },
        {
          title: "Module 3: Modern & Red Carpet Styling",
          details: "Hollywood waves, messy low buns, side-swept curls, puff creation, and attaching extensions/bridal accessories seamlessly."
        }
      ]
    }
  ];

  const toggleSyllabus = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[150px] pointer-events-none" />

      {/* Breadcrumb Section */}
      <section className="bg-white/5 border-y border-white/10 py-3 px-4 relative z-10 mb-4 sm:mb-12">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link href="/" className="hover:text-gold transition-colors duration-300">
              Home
            </Link>
            <span>›</span>
            <span className="text-gold font-poppins">Academy</span>
          </nav>
          <a
            href="https://wa.me/917558160331"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-6 py-1.5 sm:py-2 border border-gold/50 text-gold text-[10px] sm:text-xs rounded-full hover:bg-gold hover:text-black transition-all duration-300 font-poppins whitespace-nowrap"
          >
            Connect on WhatsApp
          </a>
        </div>
      </section>

      {/* Hero / Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-0 sm:pt-4 pb-6 md:pt-16 md:pb-12 text-center relative z-10">
        <span className="font-poppins font-semibold text-gold text-xs tracking-[0.25em] uppercase block mb-2 opacity-90">
          Professional Academy
        </span>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-1 mb-4">
          <h1 className="font-sedgwick text-3xl sm:text-5xl md:text-7xl text-gold leading-none">
            Refining
          </h1>
          <span className="font-cormorant italic text-2xl sm:text-4xl md:text-6xl text-white font-medium">
            Creative Artistry
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-gray-400 text-xs sm:text-sm md:text-base font-light leading-relaxed">
          Embark on a professional beauty career. Under the direct mentorship of Yazhini, learn skin mechanics, advanced color theory, traditional bridal drapes, and high-fashion styling.
        </p>
      </section>

      {/* Academy Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {academyBenefits.map((benefit, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-6 bg-white/[0.02] border border-white/5 rounded-sm hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/15 flex items-center justify-center">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-poppins text-white text-sm font-semibold tracking-wide mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 relative z-10 space-y-8 md:space-y-12">
        <div className="text-center">
          <h2 className="font-cormorant italic text-white text-3xl md:text-4xl font-semibold mb-2">
            Signature Training Curriculums
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto" />
        </div>

        <div className="flex flex-col gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-[#121212] border border-white/5 rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500 shadow-xl"
            >
              {/* Header Info Panel */}
              <div className="p-4 md:p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-white/[0.01] to-transparent">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/15 text-gold text-[9px] uppercase tracking-widest font-semibold border border-gold/20 mb-2.5">
                    {course.level}
                  </span>
                  <h3 className="font-cormorant text-white text-2xl md:text-3xl font-bold tracking-wide">
                    {course.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-sm text-xs font-poppins text-gray-300">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Duration: <strong className="text-white font-medium">{course.duration}</strong></span>
                </div>
              </div>

              {/* Main Content Layout */}
              <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

                {/* Left Panel: Description and Key Benefits */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold mb-2.5">Overview</h4>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light">
                      {course.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.15em] text-gold font-semibold mb-3">Key Highlights & Inclusions</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-400 text-xs font-light">
                      {course.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-gold/80 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Panel: CTA Enroll & Syllabus Interactive Toggle */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-white/[0.01] border border-white/5 p-4 md:p-6 rounded-sm">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold">Course Enrollment</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      Submit an inquiry to receive full pricing charts, available payment installments, batch schedules, and student tool kit requirements.
                    </p>
                  </div>

                  <div className="space-y-3 mt-6">
                    <a
                      href={`https://wa.me/917558160331?text=Hi!%20I'm%20interested%20in%20enrolling%20for%20the%20%22${encodeURIComponent(course.title)}%22%20course%20at%20your%20academy.%20Please%20share%20the%20fee%20structure%20and%20next%20batch%20dates.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gold hover:bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 font-poppins shadow-md shadow-gold/10"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.49 4.793 1.491 5.485.002 9.947-4.46 9.95-9.95.001-2.658-1.034-5.158-2.91-7.037C16.598 1.78 14.093.75 11.435.75c-5.491 0-9.956 4.462-9.96 9.953-.002 1.8.48 3.565 1.393 5.118l-.96 3.51 3.6-.944.549.309zM18.64 14.64c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.785-1.07-.957-1.79-2.14-2-2.5-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63s-.81-1.95-1.11-2.67c-.3-.72-.6-0.63-.81-.63-.21-.006-.45-.006-.69-.006s-.63.09-.96.45c-.33.36-1.26 1.23-1.26 3.003 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.15 5.44 2.22.96 3.03.78 4.1.48 1.08-.3 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
                      </svg>
                      Inquire on WhatsApp
                    </a>

                    <button
                      onClick={() => toggleSyllabus(course.id)}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-widest rounded-sm border border-white/5 hover:border-white/10 transition-all duration-300 font-poppins cursor-pointer"
                    >
                      <span>{expandedCourse === course.id ? "Hide syllabus details" : "View course syllabus"}</span>
                      <svg
                        className={`w-3.5 h-3.5 transform transition-transform duration-300 ${expandedCourse === course.id ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                </div>

              </div>

              {/* Collapsible Syllabus Modules */}
              <div
                className={`transition-all duration-500 overflow-hidden ${expandedCourse === course.id
                  ? "max-h-[1000px] opacity-100 border-t border-white/5 bg-black/40"
                  : "max-h-0 opacity-0 pointer-events-none"
                  }`}
              >
                <div className="p-4 md:p-8 space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.15em] text-gold font-bold">Course Syllabus Modules</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {course.modules.map((mod, modIdx) => (
                      <div key={modIdx} className="bg-white/[0.01] border border-white/5 p-5 rounded-sm relative">
                        <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#0b0b0b] border border-white/5 text-[9px] font-mono text-gold rounded-full">
                          Module {modIdx + 1}
                        </div>
                        <h5 className="font-poppins text-white text-xs font-semibold tracking-wide mb-2.5 mt-1.5">
                          {mod.title.split(": ")[1] || mod.title}
                        </h5>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          {mod.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Free Counseling Consultation Banner */}
      <section className="bg-gradient-to-b from-transparent to-white/[0.02] border-t border-white/5 py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant italic text-3xl md:text-5xl font-semibold mb-4 text-white">
            Unsure Which Course is Right for You?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
            Book a complimentary 15-minute guidance call. Yazhini will help review your current skill level and suggest the best training path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917558160331?text=Hi!%20I'd%20like%20to%20schedule%20a%20free%20counseling%20call%20to%20discuss%20makeup%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold text-black text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 font-poppins shadow-md shadow-gold/25"
            >
              Schedule Free Advice
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

