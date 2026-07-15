"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenCheck, Award, ShieldCheck } from "lucide-react";

export default function Introduction() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* decorative background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-50 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-16 right-0 w-64 h-64 rounded-full bg-[#0B2545]/[0.04] blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1 group">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 border-2 border-amber-500/20 rounded-[2rem] -z-10 hidden sm:block transition-all duration-500 group-hover:border-amber-500/40 group-hover:rotate-3" />

              <div className="relative aspect-[4/3.4] rounded-3xl overflow-hidden shadow-xl transition-transform duration-700 group-hover:scale-[1.02]">
                <Image
                  src="/images/about-counseling.jpg"
                  alt="Axis International Education counseling session in Kathmandu"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 via-transparent to-transparent" />
              </div>

              {/* Floating credential card */}
              <div className="absolute -bottom-7 left-4 sm:left-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 max-w-[240px] animate-bounce transition-all duration-500 hover:shadow-2xl">
                <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-amber-200 group-hover:scale-110">
                  <Award size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0B2545] leading-tight">
                    Established &amp; Trusted
                  </p>
                  <p className="text-xs text-slate-400">Educational Counseling Center</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-3 sm:-right-6 bg-[#0B2545] rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <ShieldCheck size={18} className="text-amber-400 animate-[spin_8s_linear_infinite]" />
                <p className="text-xs font-medium text-white">Trustworthy Consultancy</p>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full transition-all duration-500 hover:bg-amber-100 hover:scale-105">
              <BookOpenCheck size={14} className="transition-transform duration-500 group-hover:rotate-12" />
              Introduction
            </span>

            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#0B2545] leading-tight tracking-tight">
              Axis International{" "}
              <span className="text-amber-600 relative inline-block">
                Education Pvt. Ltd.
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-amber-500/30 rounded-full animate-pulse"></span>
              </span>
            </h2>

            <div className="mt-5 pl-5 border-l-4 border-amber-500/40 space-y-4">
              <p className="text-slate-600 text-base leading-relaxed transition-all duration-500 hover:translate-x-2 ">
                Axis International Education Pvt. Ltd. is an established educational
                counseling center in Kathmandu. It was established with genuine motive
                to assist the interested and aspiring students for quality education.
                Axis Int&apos;l Education is a trustworthy consultancy with good
                reputations in the field of study abroad counseling and test
                preparation classes. We let you enhance your academic personality and
                excellence in your desired fields. Our professional and seasoned
                staffs have been renowned for their expertise and experiences.
              </p>

              <p className="text-slate-600 text-base leading-relaxed transition-all duration-700 hover:translate-x-2">
                Axis Int&apos;l Education is a strongly quality oriented multipurpose
                educational institution in Nepal. We have been providing noble
                education, guidelines and supportive skills to several students in
                various academic programmes along with abroad study counseling.
              </p>
            </div>

            <Link
              href="/introductionn"
              className="mt-8 inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#0d2f57] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] group"
            >
              Read More
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}