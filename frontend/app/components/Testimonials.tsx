'use client';

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sabina Shrestha",
    program: "Studying in Australia",
    image: "/images/testimonial-1.jpg",
    quote:
      "Axis International Education guided me through every step of my Australian visa process. Their counselors were always available and genuinely cared about my success.",
  },
  {
    name: "Rajesh Thapa",
    program: "Studying in the UK",
    image: "/images/testimonial-2.jpg",
    quote:
      "From choosing the right university to preparing for IELTS, the team at Axis made the entire journey stress-free. I couldn't have done it without their support.",
  },
  {
    name: "Anita Gurung",
    program: "Studying in New Zealand",
    image: "/images/testimonial-3.jpg",
    quote:
      "Professional, honest, and reliable. Axis helped me understand my options clearly and supported me until my visa was approved.",
  },
];

export default function TestimonialsAndDirector() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="bg-slate-50 py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* Left: Testimonial spotlight card */}
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full w-fit">
              <Quote size={14} />
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight">
              What Our Students Say
            </h2>

            <div className="mt-8 flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 px-6 lg:px-8 py-8 flex flex-col">
              {/* Centered column: photo -> name -> quote */}
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100 shadow-sm">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-4 font-bold text-[#0B2545] text-base">{current.name}</p>
                <p className="text-amber-600 text-xs font-medium mt-1">{current.program}</p>

                <div className="flex gap-1 mt-2.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <div className="relative mt-15">
                  <Quote
                    size={40}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-amber-100 -z-10"
                    fill="currentColor"
                  />
                  <p className="relative font-serif italic text-base lg:text-lg text-slate-700 leading-relaxed">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-4">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 hover:border-amber-400 hover:text-amber-600 text-slate-500 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? "w-7 bg-amber-500" : "w-1.5 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 hover:border-amber-400 hover:text-amber-600 text-slate-500 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Formal letter from the Director */}
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full w-fit">
              <Quote size={14} />
              Director&apos;s Message
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight">
              A Word From Our Director
            </h2>

            <div className="mt-8 flex-1 bg-[#0B2545] rounded-3xl shadow-sm px-7 py-8 lg:px-10 lg:py-10 flex flex-col justify-between relative overflow-hidden">
              {/* subtle corner accent */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />

              {/* Letterhead */}
              <div className="relative flex items-center justify-between pb-6 border-b border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                  Office of the Director
                </p>
                <p className="text-[11px] text-slate-400">Axis International Education Pvt. Ltd.</p>
              </div>

              {/* Letter body */}
              <div className="relative mt-6 flex-1">
                <p className="font-serif italic text-xl text-amber-300/90 leading-snug">
                  &ldquo;Every student who walks through our doors carries a dream.&rdquo;
                </p>

                <p className="mt-5 text-[15px] text-slate-300 leading-relaxed">
                  It is our responsibility to guide that dream with honesty, care, and
                  the right expertise. Since our founding, Axis International
                  Education has been committed to more than just processing
                  applications - we build genuine relationships with every student we
                  work with, understanding their goals and helping them make informed
                  decisions about their future.
                </p>
                <p className="mt-4 text-[15px] text-slate-300 leading-relaxed">
                  Our team&apos;s dedication and years of experience have helped
                  hundreds of students achieve their dream of studying abroad, and we
                  remain committed to upholding that same standard of trust and
                  quality for every student who joins us.
                </p>
              </div>

              {/* Signature */}
              <div className="relative mt-8 pt-6 border-t border-white/10 flex items-center gap-5">
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-white/15 shadow-lg">
                  <Image
                    src="/images/director.jpg"
                    alt="Director, Axis International Education"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Warm regards,</p>
                  <p className="font-serif italic text-white text-xl leading-tight mt-0.5">
                    Director Name
                  </p>
                  <p className="text-amber-400 text-xs font-medium mt-0.5">
                    Founder &amp; Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}