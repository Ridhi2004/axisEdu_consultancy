'use client';

import Link from "next/link";
import {
  Languages,
  Mic,
  BookOpen,
  PenLine,
  Headphones,
  Clock,
  CalendarDays,
  Wallet,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Users,
} from "lucide-react";

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
      <Icon size={14} />
      {label}
    </span>
  );
}

const skillIcons = [Mic, BookOpen, PenLine, Headphones];
const skillLabels = ["Speaking", "Reading", "Writing", "Listening"];

const courses = [
  {
    name: "General English",
    tagline: "Six intensive levels built around your current ability",
    description:
      "Improves speaking, reading, writing, and listening simultaneously, alongside grammar, pronunciation, and vocabulary. No matter your current level, there's a level designed for you, with plenty of class variety to enhance your language skills.",
    duration: "30 hours (each level)",
    classTime: "Sunday to Friday, 1 hour a day",
    fees: [{ label: "Per level", value: "NRs. 4,000/-" }],
  },
  {
    name: "Special English",
    tagline: "Focused, fast-tracked support for specific needs",
    description:
      "Designed for individuals who need specific knowledge within a short time, with full-fledged support. Also covers Reading, Writing, Speaking, and Listening modules, with prioritized course content based on each student's needs.",
    duration: "30 hours (each level)",
    classTime: "Sunday to Friday, 1 hour a day",
    fees: [
      { label: "One person", value: "NRs. 8,000/-" },
      { label: "Two persons", value: "NRs. 12,000/-" },
    ],
  },
];

const programFeatures = [
  "Free self-study books and CDs",
  "Regular handouts on a daily basis",
  "Audio and video classes",
  "Practical conversational class format",
  "Smart and effective teaching method",
  "Examination at the end of each level",
  "Variety of classes",
  "Extra practice facility in lab",
  "Free placement test",
];

export default function EnglishLanguagePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/test-prep" className="hover:text-amber-600 transition-colors">
            Test Preparation
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">English Language</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-12">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <Languages size={14} />
              Language Course
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              English Language
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              A course to suit you — whether you want to study or live overseas, work, manage
              everyday situations, or prepare for preparatory classes. Our courses are divided
              into two categories to match your goals.
            </p>
          </div>
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={Sparkles} label="Overview" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
                Built Around Four Core Skills
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Our intensive English language courses come in different levels according to
                your ability. Each level has a specific target to improve your English language
                eligibility, developing your speaking, writing, reading, and listening skills
                simultaneously with grammatical, pronunciation, and vocabulary strength. We've
                designed six levels for students' comfort, helping you improve conversational
                skills you can put to use in everyday and social situations.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-semibold text-[#0B2545] mb-3">Core Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {skillLabels.map((label, i) => {
                    const Icon = skillIcons[i];
                    return (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3.5 py-1.5 rounded-full text-sm font-medium"
                      >
                        <Icon size={14} />
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Course Categories */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={Users} label="Course Categories" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
                Choose the Track That Fits You
              </h2>

              <div className="mt-6 grid md:grid-cols-2 gap-5">
                {courses.map((course) => (
                  <div
                    key={course.name}
                    className="border border-slate-200 rounded-2xl p-5 hover:border-amber-300 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-bold text-[#0B2545] text-lg">{course.name}</h3>
                    <p className="text-amber-600 text-xs font-medium mt-1">{course.tagline}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mt-3">
                      {course.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock size={14} className="text-amber-600 flex-shrink-0" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CalendarDays size={14} className="text-amber-600 flex-shrink-0" />
                        {course.classTime}
                      </div>
                      {course.fees.map((fee) => (
                        <div
                          key={fee.label}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="flex items-center gap-2 text-slate-600">
                            <Wallet size={14} className="text-amber-600 flex-shrink-0" />
                            {fee.label}
                          </span>
                          <span className="text-[#0B2545] font-semibold">{fee.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Features */}
            <div className="relative bg-[#0B2545] text-white rounded-3xl p-6 lg:p-8 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />
              <span className="relative inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                <Sparkles size={14} />
                Program Features
              </span>
              <h2 className="relative mt-3 text-2xl font-bold">What's Included</h2>

              <div className="relative mt-6 grid sm:grid-cols-2 gap-3">
                {programFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* General English Quick Facts */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#0B2545] text-lg mb-5">General English</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                      Course Duration
                    </p>
                    <p className="text-sm text-slate-700 mt-0.5">30 hours (each level)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <CalendarDays size={14} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Class Time</p>
                    <p className="text-sm text-slate-700 mt-0.5">
                      Sunday to Friday, 1 hour a day
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Wallet size={14} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Fee</p>
                    <p className="text-sm text-slate-700 mt-0.5">NRs. 4,000/- each level</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special English Quick Facts */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#0B2545] text-lg mb-5">Special English</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                      Course Duration
                    </p>
                    <p className="text-sm text-slate-700 mt-0.5">30 hours (each level)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <CalendarDays size={14} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Class Time</p>
                    <p className="text-sm text-slate-700 mt-0.5">
                      Sunday to Friday, 1 hour a day
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Wallet size={14} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Fees</p>
                    <p className="text-sm text-slate-700 mt-0.5">
                      NRs. 8,000/- (one person)
                      <br />
                      NRs. 12,000/- (two persons)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-7 text-center overflow-hidden">
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <Languages size={28} className="relative text-white mx-auto mb-3" />
              <h4 className="relative text-white font-bold text-lg mb-1.5">
                Ready to Get Started?
              </h4>
              <p className="relative text-white/90 text-sm mb-5">
                Take our free placement test and find the right level for you.
              </p>
              <Link
                href="/contact"
                className="relative inline-block bg-white text-amber-600 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-50 transition-colors text-sm shadow-sm"
              >
                Book Placement Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}