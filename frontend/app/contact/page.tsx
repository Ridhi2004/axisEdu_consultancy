'use client';

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  MessageCircle,
  Clock,
  ChevronRight,
} from "lucide-react";

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
      <Icon size={14} />
      {label}
    </span>
  );
}

const contactChannels = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["01-4519972"],
    href: "tel:014519972",
  },
  {
    icon: Mail,
    label: "Webmail",
    lines: ["info@axisedu.com.np"],
    href: "mailto:info@axisedu.com.np",
  },
  {
    icon: Mail,
    label: "Business Correspondence",
    lines: ["axisintl.edu@gmail.com"],
    href: "mailto:axisintl.edu@gmail.com",
  },
  {
    icon: Mail,
    label: "Admission Enquiries",
    lines: ["axisadmission2004@gmail.com"],
    href: "mailto:axisadmission2004@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    lines: ["www.axisedu.com.np"],
    href: "https://www.axisedu.com.np",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">Contact Us</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-12">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <MessageCircle size={14} />
              Get In Touch
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Axis International Education
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              Established 2004 - trusted study-abroad guidance from our Kathmandu office.
              Reach out to us for consultations, admissions, or general enquiries.
            </p>
          </div>
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={Send} label="Send a Message" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
                We&apos;d Love to Hear From You
              </h2>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Fill out the form below and one of our counselors will get back to you shortly.
              </p>

              <form className="mt-6 grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="98XXXXXXXX"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    Country of Interest
                  </label>
                  <select
                    id="country"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 transition-colors bg-white"
                  >
                    <option>Australia</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Finland</option>
                    <option>India</option>
                    <option>New Zealand</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us a bit about what you're looking for..."
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 transition-colors resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm shadow-sm"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={MapPin} label="Find Us" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">Our Office</h2>
              <div className="mt-5 rounded-2xl overflow-hidden border border-slate-200 h-72">
                <iframe
                  title="Axis International Education location"
                  src="https://www.google.com/maps?q=Putalisadak,+Kathmandu,+Nepal&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Card */}
            <div className="relative bg-[#0B2545] text-white rounded-3xl p-6 overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />
              <p className="relative text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Est. 2004
              </p>
              <h3 className="relative mt-2 text-lg font-bold">
                Axis International Education Pvt. Ltd.
              </h3>
              <div className="relative mt-4 flex items-start gap-2.5 text-sm text-white/85">
                <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <p>
                  Putalisadak, Kathmandu, Nepal
                  <br />
                  P.O. Box: 8975 EPC:6010
                </p>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#0B2545] text-lg mb-5">Contact Details</h3>
              <div className="space-y-4">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                        <Icon size={14} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">
                          {channel.label}
                        </p>
                        {channel.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm text-slate-700 mt-0.5 group-hover:text-amber-600 transition-colors break-all"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-[#0B2545] text-lg">Office Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Sunday – Friday</span>
                  <span className="text-slate-700 font-medium">10:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-slate-700 font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-7 text-center overflow-hidden">
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <h4 className="relative text-white font-bold text-lg mb-1.5">
                Prefer to Talk Directly?
              </h4>
              <p className="relative text-white/90 text-sm mb-5">
                Call us now for a free consultation with our counselors.
              </p>
              <a
                href="tel:014519972"
                className="relative inline-block bg-white text-amber-600 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-50 transition-colors text-sm shadow-sm"
              >
                Call 01-4519972
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}