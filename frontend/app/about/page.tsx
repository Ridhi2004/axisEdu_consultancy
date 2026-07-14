'use client';

import Link from "next/link";
import {
  Info,
  Target,
  Eye,
  Compass,
  Gift,
  ChevronRight,
  CheckCircle2,
  BookOpenCheck,
  Monitor,
  FileText,
  Users,
  GraduationCap,
  ClipboardCheck,
  Award,
  HeartHandshake,
} from "lucide-react";

// These ids must match the hrefs used in the "About Us" navbar dropdown,
// e.g. <Link href="/about#objectives">Objectives</Link>
const sections = [
  { id: "introduction", label: "Introduction", icon: Info },
  { id: "objectives", label: "Objectives", icon: Target },
  { id: "vision", label: "Our Vision", icon: Eye },
  { id: "purpose", label: "Our Purpose", icon: Compass },
  { id: "offerings", label: "What Axis Offers", icon: Gift },
];

const offerings = [
  {
    icon: BookOpenCheck,
    text: "A complimentary textbook with CD-ROM and audio cassettes for self-study, with exchange facility.",
  },
  {
    icon: Monitor,
    text: "Practice computer-based tests using the latest CD-ROMs, with software that explains any errors made during practice.",
  },
  {
    icon: FileText,
    text: "Other important handouts provided on a regular basis.",
  },
  {
    icon: ClipboardCheck,
    text: "Free practice with guidelines until you finish the exam.",
  },
  {
    icon: Users,
    text: "Highly experienced instructors who use a wide variety of exam preparation materials.",
  },
  {
    icon: GraduationCap,
    text: "Vital information from our Abroad Study department on higher education in the USA, UK, Australia, Canada, and other destinations.",
  },
  {
    icon: Award,
    text: "A full-length test at the end of the course.",
  },
  {
    icon: HeartHandshake,
    text: "An ideal classroom for learning with responsive instructors.",
  },
  {
    icon: CheckCircle2,
    text: "Individual care with an effective teaching method.",
  },
];

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
      <Icon size={14} />
      {label}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-8">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <Info size={14} />
              About Us
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Axis International Education
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              Established in 2004, guiding students toward quality education and study-abroad
              success in Kathmandu and beyond.
            </p>
          </div>
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* In-page section nav — mirrors the "About Us" dropdown, scrolls to section on click */}
        <div className="sticky top-0 z-20 -mx-4 px-4 sm:mx-0 sm:px-0 mb-8">
          <div className="bg-white/90 backdrop-blur border border-slate-200 rounded-2xl shadow-sm p-2 flex flex-wrap gap-2 justify-center">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-3.5 py-2 rounded-xl transition-colors"
                >
                  <Icon size={14} />
                  {section.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <section
            id="introduction"
            className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm scroll-mt-24"
          >
            <SectionBadge icon={Info} label="Introduction" />
            <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">Who We Are</h2>
            <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Axis International Education Pvt. Ltd. is an established educational
                counseling center in Kathmandu, founded with a genuine motive to assist
                interested and aspiring students in pursuing quality education. Axis Int&apos;l
                Education is a trustworthy consultancy with a strong reputation in study-abroad
                counseling and test preparation, helping you enhance your academic personality
                and excellence in your desired field. Our professional and seasoned staff are
                renowned for their expertise and experience.
              </p>
              <p>
                We are a strongly quality-oriented, multipurpose educational institution in
                Nepal, providing noble education, guidance, and supportive skills to students
                across various academic programs, alongside abroad-study counseling.
              </p>
              <p>
                The institute was established in 2004 A.D. with a long-term vision of persistent
                quality education. We successfully provide test-preparatory classes to help
                students achieve higher scores so they can compete for scholarships at foreign
                universities, with systematized preparation for TOEFL, IELTS, SAT, GRE, GMAT,
                and General &amp; Professional English Language programs.
              </p>
              <p>
                Axis International Education is a familiar name among students seeking higher
                admission-test scores and stronger foreign language skills. We work only with
                reputed, renowned foreign colleges and universities, so our students have the
                best possible chance at a better, more qualitative education abroad — because
                we&apos;re always sensitive to every student&apos;s career.
              </p>
            </div>
          </section>

          {/* Objectives */}
          <section
            id="objectives"
            className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm scroll-mt-24"
          >
            <SectionBadge icon={Target} label="Objectives" />
            <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">What We Set Out to Do</h2>
            <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
              <p>
                We represent various international universities and colleges in the USA, UK,
                and Australia, acting as a mediator so prospective students can earn
                internationally recognized qualifications. Questions around colleges,
                universities, courses, fees, jobs, environment, and career scope are the
                sources of most educational anxiety — and that&apos;s exactly where you can trust
                our reliability, honesty, experience, and genuine advice. We also offer test
                preparation and vocational classes simultaneously for your convenience.
              </p>
              <p>
                Every year, thousands of students register for our English proficiency courses
                to prepare for further studies. Axis provides the platform for them to explore
                their future and skills — one that remains supportive and significant
                throughout their career. We further help students select the right
                colleges, universities, and courses to maximize their chances of success.
              </p>
            </div>
          </section>

          {/* Our Vision */}
          <section
            id="vision"
            className="relative bg-[#0B2545] text-white rounded-3xl p-6 lg:p-8 overflow-hidden scroll-mt-24"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />
            <span className="relative inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <Eye size={14} />
              Our Vision
            </span>
            <h2 className="relative mt-3 text-2xl font-bold">
              Integrative, Skills-Oriented Education
            </h2>
            <p className="relative mt-5 text-white/85 leading-relaxed max-w-3xl">
              To become a provider of noble education for overcoming challenges, creating
              opportunities, and providing leadership to adjust to a modern and dynamic world.
              We aim to be the reliable platform that helps students access international
              education at some of the finest universities around the world. As English is the
              most in-demand language, we are strongly determined to be a more reliable
              institution for running language courses effectively and professionally.
            </p>
          </section>

          {/* Our Purpose */}
          <section
            id="purpose"
            className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm scroll-mt-24"
          >
            <SectionBadge icon={Compass} label="Our Purpose" />
            <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
              Guidance That Serves Your Career
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Our professional expertise, creativity, and smart guidance help you choose the
              right courses for your career. Axis offers you qualitative and affordable
              education for a better future — a little investment aimed at higher success. To
              prove it, we bring the reliability and quality you can experience for yourself,
              any time.
            </p>
          </section>

          {/* What Does Axis Offer You */}
          <section
            id="offerings"
            className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm scroll-mt-24"
          >
            <SectionBadge icon={Gift} label="What Axis Offers" />
            <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
              What Does Axis Offer You?
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {offerings.map((offering, index) => {
                const Icon = offering.icon;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-amber-600" />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{offering.text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-8 text-center overflow-hidden">
            <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
            <h4 className="relative text-white font-bold text-xl mb-1.5">
              Ready to Start Your Journey?
            </h4>
            <p className="relative text-white/90 text-sm mb-5">
              Talk to our counselors and find the right path for your education abroad.
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
    </div>
  );
}