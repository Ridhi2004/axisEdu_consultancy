'use client';

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  GraduationCap,
  ClipboardList,
  BookOpenText,
  Phone,
  MessageCircleQuestion,
} from "lucide-react";

type FAQItem = {
  question: string;
  icon: React.ElementType;
  answer?: string;
  points?: { title: string; desc: string }[];
};

const faqs: FAQItem[] = [
  {
    question: "Who can apply for Abroad Study?",
    icon: GraduationCap,
    answer:
      "Those students who have the required qualifications with 50% academic scores in 10+2 / PCL level.",
  },
  {
    question: "How can you apply?",
    icon: ClipboardList,
    answer:
      "You need to visit our office with all the original academic certificates and some additional certificates such as TOEFL, IELTS or training certificates.",
  },
  {
    question: "Why Study English with us?",
    icon: BookOpenText,
    points: [
      {
        title: "Modern course materials and equipment",
        desc: "Carefully selected modern textbooks, valuable handouts, plus audio and video equipment for your learning needs.",
      },
      {
        title: "Professionally trained teachers",
        desc: "Specialist qualifications in teaching English language according to international trends.",
      },
      {
        title: "Class size",
        desc: "No more than 8 students per class, allowing plenty of interaction, group discussion and individual care.",
      },
      {
        title: "Teaching method",
        desc: "The best possible environment to improve your English communication, using smart, confidence-building techniques.",
      },
      {
        title: "Assessment",
        desc: "Mid-term and final-term exams at each level in listening, speaking and writing, so you can evaluate your progress.",
      },
      {
        title: "Study room/lab",
        desc: "Free access to materials and equipment to study and practice as long as you want in your leisure time.",
      },
      {
        title: "Library",
        desc: "A wide range of resources — books, tapes, videos, and CD-ROMs — to improve your English skills outside the classroom.",
      },
      {
        title: "Learning opportunity",
        desc: "Support to develop your academic skills through exams, courses, advice, and abroad study opportunities via scholarships.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* diagonal color band */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 55%, rgba(11,37,69,0.025) 55%, rgba(11,37,69,0.025) 100%)",
        }}
      />

      {/* layered blurred accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-[#0B2545]/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-amber-100/60 blur-3xl" />

      {/* faint dot texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="faqDots" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="#0B2545" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faqDots)" />
        </svg>
      </div>

      {/* large watermark icon */}
      <HelpCircle
        size={340}
        strokeWidth={1}
        className="pointer-events-none absolute -top-10 right-[-60px] text-[#0B2545]/[0.035] hidden lg:block"
      />

      {/* thin accent line */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-300/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
            <HelpCircle size={14} />
            FAQ
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="mt-3 text-slate-500 text-base">
            Everything you need to know about applying for abroad study and joining
            our English language classes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left: Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faq.icon;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-colors duration-300 ${
                    isOpen ? "border-amber-300 bg-amber-50/40" : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-amber-100" : "bg-slate-100"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={isOpen ? "text-amber-600" : "text-[#0B2545]"}
                      />
                    </div>
                    <span className="flex-1 font-semibold text-[#0B2545] text-sm lg:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-amber-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[4.25rem]">
                        {faq.answer && (
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        )}

                        {faq.points && (
                          <ul className="space-y-4">
                            {faq.points.map((point) => (
                              <li key={point.title} className="flex gap-3">
                                <CheckCircle2
                                  size={17}
                                  className="text-amber-600 flex-shrink-0 mt-0.5"
                                />
                                <div>
                                  <p className="text-sm font-semibold text-[#0B2545]">
                                    {point.title}
                                  </p>
                                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                                    {point.desc}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: compact photo + support card */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/counselling.jpg"
                  alt="Student consulting with an Axis International Education counselor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 via-transparent to-transparent" />
              </div>

              <div className="bg-[#0B2545] rounded-2xl shadow-lg p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircleQuestion size={22} className="text-amber-400" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm">Still have questions?</p>
                  <p className="text-xs text-slate-300 mt-0.5">Talk to our counselors directly</p>
                </div>
                <a
                  href="tel:+9770000000000"
                  aria-label="Call us"
                  className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center text-white transition-colors flex-shrink-0"
                >
                  <Phone size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}