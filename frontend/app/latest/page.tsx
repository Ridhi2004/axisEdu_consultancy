'use client';

import Link from "next/link";
import {
  Languages,
  GraduationCap,
  FileCheck2,
  Clock,
  Sun,
  Users,
  UserRound,
  Armchair,
  FileText,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
      <Icon size={14} />
      {label}
    </span>
  );
}

const services = [
  {
    icon: Languages,
    name: "English Language",
    href: "/programs/english-language",
    description:
      "We have English language classes during the morning and the day, conducted in groups and individually. You can take individual classes at your preferred time and join group classes according to our availability.",
    highlights: [
      { icon: Sun, label: "Morning & day classes" },
      { icon: Users, label: "Group classes" },
      { icon: UserRound, label: "Individual classes" },
    ],
  },
  {
    icon: GraduationCap,
    name: "IELTS Class",
    href: "/programs/ielts-class",
    description:
      "We run new IELTS classes in the morning session from 7–8 A.M. and 8–9 A.M., along with day classes from 1–6 P.M. Seats are limited, so reserve yours as early as possible.",
    highlights: [
      { icon: Clock, label: "7–8 AM / 8–9 AM / 1–6 PM" },
      { icon: Armchair, label: "Max 15 students per class" },
    ],
  },
  {
    icon: FileCheck2,
    name: "Processing for Study Abroad",
    href: "/programs/processing-for-study-abroad",
    description:
      "We represent many reputed educational institutions from various countries and currently counsel interested students for higher education abroad. If you'd like genuine advice and help with documentation, visit us with your original academic records, passport, and IELTS documents.",
    highlights: [
      { icon: FileText, label: "Academic, passport & IELTS docs" },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">Programs</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-12">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <GraduationCap size={14} />
              Programs
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Programs
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              From language classes to test preparation and full study-abroad processing — find
              the program that fits where you're headed next.
            </p>
          </div>
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.href}
                className="bg-white rounded-3xl p-6 lg:p-7 border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-amber-600" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-[#0B2545]">{service.name}</h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                  {service.highlights.map((h) => {
                    const HIcon = h.icon;
                    return (
                      <div
                        key={h.label}
                        className="flex items-center gap-2 text-xs font-medium text-slate-500"
                      >
                        <HIcon size={13} className="text-amber-600 flex-shrink-0" />
                        {h.label}
                      </div>
                    );
                  })}
                </div>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors group"
                >
                  Learn More
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-8 text-center overflow-hidden mt-10">
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <h4 className="relative text-white font-bold text-xl mb-1.5">
            Not Sure Which Program Fits You?
          </h4>
          <p className="relative text-white/90 text-sm mb-5">
            Talk to our counselors and we'll help you choose the right path.
          </p>
          <Link
            href="/contact"
            className="relative inline-block bg-white text-amber-600 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-50 transition-colors text-sm shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}