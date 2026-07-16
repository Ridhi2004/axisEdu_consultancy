'use client';

import Link from "next/link";
import Flag from "react-flagkit";
import {
  Globe2,
  GraduationCap,
  ChevronRight,
  ShieldCheck,
  HandHeart,
  Building2,
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

const countries = [
  { name: "Australia", href: "/abroad/australia", code: "AU" },
  { name: "USA", href: "/abroad/usa", code: "US" },
  { name: "UK", href: "/abroad/uk", code: "GB" },
  { name: "Finland", href: "/abroad/finland", code: "FI" },
  { name: "India", href: "/abroad/india", code: "IN" },
  { name: "New Zealand", href: "/abroad/new-zealand", code: "NZ" },
];

const credentialBodies = [
  "UK Border Agency",
  "Australian High Commission",
  "British Council",
];

export default function AbroadStudyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">Abroad Study</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-12">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <Globe2 size={14} />
              Abroad Study
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Study Abroad With Axis
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              Connecting students worldwide with learning opportunities and creative ideas from
              countries around the world.
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
                Educational Opportunities Worldwide
              </h2>
              <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Axis International Education is an organization for educational opportunities
                  and career development. We connect people worldwide with learning
                  opportunities and creative ideas from many other countries around the world.
                  We assist willing students trying to study abroad, across a variety of
                  courses according to your needs and qualifications, with opportunities in the
                  USA, UK, Australia, India, New Zealand, Finland, and many more.
                </p>
                <p>
                  We provide counseling for undergraduate, graduate, and post-graduate courses
                  across many major faculties, along with the required preparatory courses. For
                  your abroad study purpose, you can take the courses you need from our
                  organization with highly qualified instructors.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-semibold text-[#0B2545] mb-3">Study Destinations</h3>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <span
                      key={c.href}
                      className="bg-amber-50 text-amber-700 px-3.5 py-1.5 rounded-full text-sm font-medium"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Outstanding Consultancy */}
            <div className="relative bg-[#0B2545] text-white rounded-3xl p-6 lg:p-8 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />
              <span className="relative inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                <HandHeart size={14} />
                Our Commitment
              </span>
              <h2 className="relative mt-3 text-2xl font-bold">
                An Outstanding Consultancy for Study Abroad Programmes
              </h2>
              <p className="relative mt-5 text-white/85 leading-relaxed max-w-3xl">
                Axis is always with you, wishing you every success in your studies and career.
                We are always supportive, carrying you forward with confidence wherever you want
                to study.
              </p>
            </div>

            {/* Credentials & Experience */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={ShieldCheck} label="Credentials & Experience" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
                A Trusted Educational Mediator
              </h2>
              <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Axis International Education Pvt. Ltd. is a highly updated educational
                  mediator between students and foreign institutions. We bring extensive
                  experience through our participation in several academic trainings and
                  workshops provided by foreign embassies and education departments, and many
                  other authentic educational and immigration bodies.
                </p>
                <p>
                  We are a certified and trained education consultancy, providing reliable and
                  trustworthy information with ethical norms and values. Our history of working
                  with foreign universities and colleges is a positive strength to our mission —
                  we've built a sound relationship by exchanging quality students and
                  international qualifications with our partners, and it's been a great journey
                  working with our business associates.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-semibold text-[#0B2545] mb-3">
                  Trainings &amp; Workshops With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {credentialBodies.map((body) => (
                    <span
                      key={body}
                      className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-600 border border-slate-200 px-3.5 py-1.5 rounded-full text-sm font-medium"
                    >
                      <Building2 size={13} className="text-amber-600" />
                      {body}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Global Representation */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={Globe2} label="Global Representation" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
                Building Quality Relationships
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                We represent many reputed universities and colleges from the USA, UK, Australia,
                New Zealand, India, and Europe, providing proper academic guidance to students.
                We're committed to building quality relationships with more international
                educational institutions across different countries, so we can keep providing
                genuine information and help aspiring students become eligible for global
                competence.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Links / Countries */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#0B2545] text-lg mb-5">Related Links</h3>
              <div className="space-y-2">
                {countries.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/40 transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Flag country={c.code} size={22} />
                      <span className="text-sm font-medium text-[#0B2545] group-hover:text-amber-600 transition-colors">
                        {c.name}
                      </span>
                    </span>
                    <ArrowRight
                      size={15}
                      className="text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-7 text-center overflow-hidden">
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <h4 className="relative text-white font-bold text-lg mb-1.5">
                Not Sure Where to Start?
              </h4>
              <p className="relative text-white/90 text-sm mb-5">
                Talk to our counselors and find the destination that fits your goals.
              </p>
              <Link
                href="/contact"
                className="relative inline-block bg-white text-amber-600 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-50 transition-colors text-sm shadow-sm"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}