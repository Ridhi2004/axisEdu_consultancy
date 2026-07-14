'use client';

import { Menu, X, ChevronDown, ChevronUp, Phone, Mail, Search, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const countries = [
  { name: "Australia", href: "/abroad/australia", flag: "🇦🇺" },
  { name: "USA", href: "/abroad/usa", flag: "🇺🇸" },
  { name: "UK", href: "/abroad/uk", flag: "🇬🇧" },
  { name: "Finland", href: "/abroad/finland", flag: "🇫🇮" },
  { name: "India", href: "/abroad/india", flag: "🇮🇳" },
  { name: "New Zealand", href: "/abroad/new-zealand", flag: "🇳🇿" },
];

const aboutLinks = [
  { name: "Introduction", href: "/about", desc: "Who we are" },
  { name: "Objectives", href: "/about/message", desc: "What we aim for" },
  { name: "Our Vision", href: "/about/recruitment", desc: "Where we're headed" },
  { name: "Our Purpose", href: "/about/why-us", desc: "Why we exist" },
  { name: "What Axis Offers You", href: "/team", desc: "Our services to you" },
];

const programLinks = [
  { name: "IELTS", href: "/programs/ielts", desc: "Test preparation" },
  { name: "English Language", href: "/programs/english", desc: "Language courses" },
];

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    programs: false,
    abroadStudy: false,
  });

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

useEffect(() => {
  let ticking = false;
  const SCROLL_THRESHOLD = 10; // ignore tiny scroll movements

  const handleScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top of the page
      if (currentScrollY < 80) {
        setShowNavbar(true);
      } else {
        const delta = currentScrollY - lastScrollY;

        // Only react if scroll moved more than the threshold
        if (Math.abs(delta) > SCROLL_THRESHOLD) {
          if (delta > 0) {
            // scrolling down
            setShowNavbar(false);
            setMobileMenuOpen(false);
            setSearchOpen(false);
          } else {
            // scrolling up
            setShowNavbar(true);
          }
          setLastScrollY(currentScrollY);
        }
      }

      setScrolled(currentScrollY > 10);
      ticking = false;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdowns({
      about: false,
      programs: false,
      abroadStudy: false
    });
    setSearchOpen(false);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div
        className={`hidden md:block bg-[#0B2545] text-white/90 transition-all duration-500 ${
          showNavbar ? "max-h-10 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 lg:px-6 flex items-center justify-between text-xs py-2">
          <div className="flex items-center gap-5">
            <a href="tel:+9770000000000" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone size={13} />
              <span>+977 000-0000000</span>
            </a>
            <a href="mailto:info@axisedu.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail size={13} />
              <span>info@axisedu.com</span>
            </a>
          </div>
          <span className="text-white/60 tracking-wide">Mon – Sat, 9:00 AM – 6:00 PM</span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"} border-b border-slate-100`}
      >
        <div className="max-w-8xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-[68px] lg:h-[76px]">
            {/* Logo Section */}
            <Link href="/" onClick={closeAllMenus} className="flex-shrink-0 flex items-center gap-2">
              <div className="relative w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] lg:w-[58px] lg:h-[58px] flex-shrink-0">
                <Image
                  src="/images/logooaxis.png"
                  alt="AXIS International Education logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="leading-[1.1] font-bold text-[#0B2545] text-[13px] sm:text-sm lg:text-base tracking-tight">
                AXIS INTERNATIONAL
                <br />
                <span className="text-amber-600">EDUCATION PVT. LTD.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <NavLink href="/">Home</NavLink>

              <NavDropdown label="About Us">
                <div className="w-72 p-2">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-3.5 py-2.5 rounded-lg hover:bg-[#0B2545]/[0.04] transition-colors group/item"
                    >
                      <span className="text-sm font-medium text-[#0B2545] group-hover/item:text-amber-600 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-400">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </NavDropdown>

              <NavDropdown label="Programs">
                <div className="w-64 p-2">
                  {programLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-3.5 py-2.5 rounded-lg hover:bg-[#0B2545]/[0.04] transition-colors group/item"
                    >
                      <span className="text-sm font-medium text-[#0B2545] group-hover/item:text-amber-600 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-400">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </NavDropdown>

              <NavDropdown label="Abroad Study">
                <div className="w-[420px] p-3">
                  <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Study Destinations
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {countries.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-[#0B2545]/[0.04] transition-colors group/item"
                      >
                        <span className="text-xl leading-none">{c.flag}</span>
                        <span className="text-sm font-medium text-[#0B2545] group-hover/item:text-amber-600 transition-colors">
                          {c.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavDropdown>

              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Right side: search, CTA, mobile toggle */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Desktop Search */}
              <div className="hidden lg:flex items-center">
                {searchOpen ? (
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-52 px-4 py-2 pr-9 rounded-full bg-slate-100 text-sm text-[#0B2545] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-all duration-300"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0B2545]"
                      aria-label="Close search"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2.5 text-slate-500 hover:text-[#0B2545] hover:bg-slate-100 rounded-full transition-colors"
                    aria-label="Search"
                  >
                    <Search size={19} />
                  </button>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                onClick={closeAllMenus}
                className="hidden lg:inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                Free Consultation
                <ArrowRight size={15} />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg text-[#0B2545] hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 top-full w-full bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-4.25rem)] overflow-y-auto z-40">
            <nav className="flex flex-col px-4 py-4">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2.5 pr-10 rounded-full bg-slate-100 text-sm text-[#0B2545] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-all duration-300"
                />
                <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              </div>

              <MobileLink href="/" onClick={closeAllMenus}>Home</MobileLink>

              <MobileDropdown
                label="About Us"
                open={mobileDropdowns.about}
                onToggle={() => toggleMobileDropdown('about')}
              >
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAllMenus}
                    className="py-2.5 px-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0B2545] rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </MobileDropdown>

              <MobileDropdown
                label="Programs"
                open={mobileDropdowns.programs}
                onToggle={() => toggleMobileDropdown('programs')}
              >
                {programLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAllMenus}
                    className="py-2.5 px-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0B2545] rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </MobileDropdown>

              <MobileDropdown
                label="Abroad Study"
                open={mobileDropdowns.abroadStudy}
                onToggle={() => toggleMobileDropdown('abroadStudy')}
              >
                {countries.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={closeAllMenus}
                    className="flex items-center gap-2 py-2.5 px-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0B2545] rounded-md transition-colors"
                  >
                    <span>{c.flag}</span>
                    {c.name}
                  </Link>
                ))}
              </MobileDropdown>

              <MobileLink href="/contact" onClick={closeAllMenus} border={false}>Contact</MobileLink>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={closeAllMenus}
                className="mt-3 flex items-center justify-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
              >
                Free Consultation
                <ArrowRight size={15} />
              </Link>

              {/* Mobile contact info */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2 text-sm text-slate-500">
                <a href="tel:+9770000000000" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                  <Phone size={14} /> +977 000-0000000
                </a>
                <a href="mailto:info@axisedu.com" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                  <Mail size={14} /> info@axisedu.com
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

/* ---------- Reusable sub-components ---------- */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-[#0B2545] font-medium text-sm px-4 py-2.5 rounded-md transition-colors duration-200 hover:text-amber-600 group focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2"
    >
      {children}
      <span className="absolute left-4 right-4 -bottom-0 h-[2px] bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
    </Link>
  );
}

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative group">
      <button className="relative flex items-center gap-1 text-[#0B2545] font-medium text-sm px-4 py-2.5 rounded-md transition-colors duration-200 hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2">
        {label}
        <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
        <span className="absolute left-4 right-4 -bottom-0 h-[2px] bg-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      </button>
      <div className="absolute left-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250 z-10">
        {children}
      </div>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  border = true,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  border?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-[#0B2545] hover:bg-slate-50 font-medium py-3 px-3 rounded-md transition-colors ${
        border ? "border-b border-slate-100" : ""
      }`}
    >
      {children}
    </Link>
  );
}

function MobileDropdown({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left text-[#0B2545] hover:bg-slate-50 font-medium py-3 px-3 rounded-md transition-colors"
      >
        <span>{label}</span>
        {open ? <ChevronUp size={18} className="text-amber-600" /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <div className="flex flex-col ml-2 pb-2 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  );
}