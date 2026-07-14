'use client';

import Image from "next/image";
import { Handshake } from "lucide-react";

// Replace with your actual affiliate logos — add as many or few as you have
const affiliates = [
  { name: "Partner 1", src: "/images/affiliates/affiliate-1.png" },
  { name: "Partner 2", src: "/images/affiliates/affiliate-2.png" },
  { name: "Partner 3", src: "/images/affiliates/affiliate-3.png" },
  { name: "Partner 4", src: "/images/affiliates/affiliate-4.png" },
  { name: "Partner 5", src: "/images/affiliates/affiliate-5.png" },
];

export default function Affiliates() {
  // duplicate the list so the loop feels seamless
  const looped = [...affiliates, ...affiliates];

  return (
    <section className="bg-[#0B2545] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
            <Handshake size={14} />
            Our Affiliates
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Trusted Partners &amp; Affiliated Institutions
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            We proudly collaborate with reputed universities and institutions worldwide.
          </p>
        </div>
      </div>

      {/* Full-width horizontal marquee */}
      <div className="relative">
        {/* fade masks left & right */}
        <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-[#0B2545] to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-[#0B2545] to-transparent z-10" />

        <div className="flex gap-6 lg:gap-8 scroll-x w-max">
          {looped.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="w-40 h-24 lg:w-48 lg:h-28 bg-white rounded-2xl border border-white/10 shadow-lg flex items-center justify-center p-5 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-amber-500/20 hover:border-amber-400/40"
            >
              <div className="relative w-full h-full">
                <Image src={logo.src} alt={logo.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollX {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .scroll-x {
          animation: scrollX 22s linear infinite;
        }
        .scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}