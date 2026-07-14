'use client';

import Link from "next/link";
import {
  BookOpen,
  Headphones,
  PenLine,
  Mic,
  Award,
  Clock,
  CalendarCheck,
  Wallet,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
      <Icon size={14} />
      {label}
    </span>
  );
}

const examSections = [
  { icon: Headphones, name: "Listening", duration: "30 minutes" },
  { icon: BookOpen, name: "Reading", duration: "60 minutes" },
  { icon: PenLine, name: "Writing", duration: "60 minutes" },
  { icon: Mic, name: "Speaking", duration: "10 to 15 minutes" },
];

const quickFacts = [
  { label: "Full Score", value: "9 Bands" },
  { label: "Required Score", value: "5.5 (Undergraduate) / 6.0 (Graduate)" },
  { label: "Certificate Validity", value: "2 Years" },
];

const fees = [
  { label: "Exam Registration Fee", value: "NRs. 13,800/-" },
  { label: "IELTS Preparation Fee at Axis", value: "NRs. 7,000/-" },
  { label: "Class Duration", value: "36 Hours" },
];

export default function IeltsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
        
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">IELTS</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-12">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <GraduationCap size={14} />
              Test Preparation
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              IELTS Preparation
            </h1>
            <p className="text-amber-400/90 text-sm font-medium mb-2">
              International English Language Testing System
            </p>
            <p className="text-white/80 text-base sm:text-lg">
              The IELTS score is required to apply to international colleges and universities
              if you are planning to study further at foreign educational institutions.
            </p>
          </div>
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={GraduationCap} label="Overview" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
                Preparing You for Success
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                We conduct regular preparatory classes for our prospective IELTS candidates.
                Our updated and well-trained instructors create ample opportunity to achieve
                higher scores in IELTS. We have the latest teaching materials and methods to
                help our students understand the exam, and we are happy to provide as much
                resource as possible to accelerate the possibility of achieving high scores.
                We conduct IELTS module tests on a weekly basis to build our students&apos;
                confidence and provide feedback as soon as possible, with great support
                throughout.
              </p>
            </div>

            {/* Exam Format */}
            <div className="relative bg-[#0B2545] text-white rounded-3xl p-6 lg:p-8 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />
              <span className="relative inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                <Clock size={14} />
                Exam Format
              </span>
              <h2 className="relative mt-3 text-2xl font-bold">
                Duration for Each Section
              </h2>

              <div className="relative mt-6 grid sm:grid-cols-2 gap-4">
                {examSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <div
                      key={section.name}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-amber-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{section.name}</p>
                        <p className="text-white/70 text-xs mt-0.5">{section.duration}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#0B2545] text-lg mb-5">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Award size={14} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {fact.label}
                      </p>
                      <p className="text-sm text-slate-700 mt-0.5">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees & Duration */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#0B2545] text-lg mb-5">Fees &amp; Class Duration</h3>
              <div className="space-y-4">
                {fees.map((fee) => (
                  <div key={fee.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Wallet size={14} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {fee.label}
                      </p>
                      <p className="text-sm text-slate-700 mt-0.5">{fee.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-7 text-center overflow-hidden">
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <CalendarCheck size={28} className="relative text-white mx-auto mb-3" />
              <h4 className="relative text-white font-bold text-lg mb-1.5">
                Ready to Begin?
              </h4>
              <p className="relative text-white/90 text-sm mb-5">
                Join our next IELTS batch and start preparing with expert instructors.
              </p>
              <Link
                href="/contact"
                className="relative inline-block bg-white text-amber-600 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-50 transition-colors text-sm shadow-sm"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}