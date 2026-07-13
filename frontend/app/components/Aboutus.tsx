'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe2 } from "lucide-react";

const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "Australia", flag: "🇦🇺" },
];

export default function AbroadStudy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-[#0B2545] py-16 lg:py-24 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl glow-pulse" />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative max-w-8xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <Globe2 size={14} className="spin-slow" />
              Abroad Study
            </span>

            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Educational Opportunities{" "}
              <span className="text-amber-400">Around the World</span>
            </h2>

            <div className="mt-5 pl-5 border-l-4 border-amber-500/40 space-y-4">
              <p className="text-slate-300 text-base leading-relaxed">
                Axis International Education is an organization for educational
                opportunities and career development. We connect people worldwide
                with learning opportunities and creative ideas from many other
                countries around the world.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                We can be assisting to the willing students who are trying to study
                abroad for variety of courses according to your need and
                qualification. We can provide educational opportunity in the USA,
                UK, Australia, India, New Zealand, Finland and many more....
              </p>
            </div>

            <Link
              href="/abroad-studyn"
              className="mt-8 inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-900/20 hover:shadow-xl active:scale-[0.98] group"
            >
              Read More
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Photo with animated country overlay */}
          <div
            className={`relative transition-all duration-700 ease-out delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative w-full aspect-[4/3.2] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 kenburns">
                <Image
                  src="/images/worldmap.jpg"
                  alt="Planning a study abroad journey"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom gradient so text/chips stay readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent" />

              {/* Country chips row */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-2.5">
                  Popular Destinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c, i) => (
                    <span
                      key={c.name}
                      className={`inline-flex items-center gap-1.5 bg-white rounded-full px-3.5 py-2 shadow-lg cursor-default transition-all hover:scale-110 hover:shadow-amber-500/40 duration-500 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}
                      style={{ transitionDelay: `${300 + i * 100}ms` }}
                    >
                      <span className="text-base leading-none">{c.flag}</span>
                      <span className="text-xs font-semibold text-[#0B2545]">{c.name}</span>
                    </span>
                  ))}
                  <span
                    className={`inline-flex items-center gap-1.5 bg-amber-600 rounded-full px-3.5 py-2 shadow-lg shimmer transition-all duration-500 ${
                      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                    style={{ transitionDelay: "700ms" }}
                  >
                    <span className="text-xs font-semibold text-white relative z-10">+ More</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div
              className={`absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3 float-bob transition-all duration-700 delay-500 ${
                mounted ? "opacity-100" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Globe2 size={18} className="text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0B2545] leading-tight">6+ Destinations</p>
                <p className="text-[11px] text-slate-400">Across 4 continents</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Slow ambient zoom on the photo */
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
        .kenburns {
          animation: kenburns 12s ease-in-out infinite alternate;
        }

        /* Gentle up-down float for the stats card */
        @keyframes floatBob {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .float-bob {
          animation: floatBob 3.5s ease-in-out infinite;
        }

        /* Slow rotation for the globe icon */
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .spin-slow {
          animation: spinSlow 6s linear infinite;
        }

        /* Breathing glow for background accents */
        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        .glow-pulse {
          animation: glowPulse 5s ease-in-out infinite;
        }

        /* Shimmer sweep across the "+ More" chip */
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        .shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          animation: shimmerSweep 2.5s ease-in-out infinite;
        }
        @keyframes shimmerSweep {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
    </section>
  );
}