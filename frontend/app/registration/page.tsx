'use client';

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Cake,
  Users,
  Briefcase,
  Languages,
  RefreshCw,
  ChevronRight,
  Send,
  GraduationCap,
} from "lucide-react";

function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : "sm:col-span-1"}>
      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-400 transition-colors";

function generateCaptcha() {
  
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let code = "";
  for (let i = 0; i < 7; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function CaptchaCanvas({ code }: { code: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 200;
  const height = 60;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);


    ctx.fillStyle = "#F1F5F9";
    ctx.fillRect(0, 0, width, height);

   
    ctx.strokeStyle = "rgba(11, 37, 69, 0.06)";
    ctx.lineWidth = 1;
    for (let x = -height; x < width; x += 6) {
      ctx.beginPath();
      ctx.moveTo(x, height);
      ctx.lineTo(x + height, 0);
      ctx.stroke();
    }

    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = `rgba(11, 37, 69, ${randomBetween(0.12, 0.28)})`;
      ctx.lineWidth = randomBetween(1, 2.2);
      ctx.beginPath();
      ctx.moveTo(randomBetween(0, width), randomBetween(0, height));
      ctx.bezierCurveTo(
        randomBetween(0, width),
        randomBetween(0, height),
        randomBetween(0, width),
        randomBetween(0, height),
        randomBetween(0, width),
        randomBetween(0, height)
      );
      ctx.stroke();
    }

  
    for (let i = 0; i < 70; i++) {
      ctx.fillStyle = `rgba(11, 37, 69, ${randomBetween(0.12, 0.32)})`;
      ctx.beginPath();
      ctx.arc(randomBetween(0, width), randomBetween(0, height), randomBetween(0.6, 1.8), 0, Math.PI * 2);
      ctx.fill();
    }

    const colors = ["#0B2545", "#B45309", "#1a3a6b", "#92400E", "#374151"];
    const fonts = ["Arial", "Georgia", "Verdana", "Trebuchet MS"];
    const usableWidth = width - 20;
    const step = usableWidth / (code.length - 1 || 1);

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
   
      const x = 10 + step * i + randomBetween(-4, 4);
 
      const wave = Math.sin(i * 1.3) * 6;
      const y = height / 2 + wave + randomBetween(-3, 3);
      const angle = randomBetween(-0.5, 0.5);
      const fontSize = randomBetween(22, 32);
      const font = fonts[Math.floor(Math.random() * fonts.length)];
      const skew = randomBetween(-0.3, 0.3);

      ctx.save();
      ctx.translate(x, y);
      ctx.transform(1, Math.tan(skew * 0.3), Math.tan(0), 1, 0, 0);
      ctx.rotate(angle);
      ctx.font = `bold ${fontSize}px ${font}, sans-serif`;
      ctx.fillStyle = colors[i % colors.length];
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = `rgba(217, 119, 6, ${randomBetween(0.3, 0.5)})`;
      ctx.lineWidth = randomBetween(1, 1.8);
      ctx.beginPath();
      ctx.moveTo(0, randomBetween(5, height - 5));
      ctx.bezierCurveTo(
        randomBetween(0, width),
        randomBetween(0, height),
        randomBetween(0, width),
        randomBetween(0, height),
        width,
        randomBetween(5, height - 5)
      );
      ctx.stroke();
    }


    for (let i = 0; i < 25; i++) {
      ctx.fillStyle = `rgba(11, 37, 69, ${randomBetween(0.15, 0.3)})`;
      ctx.beginPath();
      ctx.arc(randomBetween(0, width), randomBetween(0, height), randomBetween(0.6, 1.4), 0, Math.PI * 2);
      ctx.fill();
    }
  }, [code]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="rounded-xl border border-slate-200"
      role="img"
      aria-label="CAPTCHA security code image"
    />
  );
}

const hearAboutOptions = ["Advertisement", "Friends", "Internet"];

export default function RegistrationPage() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">Online Registration</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-10">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <GraduationCap size={14} />
              Online Form
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Registration Form
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              Fill in your details below and our counselors will get in touch with you regarding
              your application.
            </p>
          </div>
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* Single unified form */}
        <form className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Course / Country Want to Apply" full>
              <input
                type="text"
                placeholder="e.g. Bachelor of IT — Australia"
                className={inputClasses}
              />
            </Field>

            <Field label="Name">
              <input type="text" placeholder="Full name" className={inputClasses} />
            </Field>

            <Field label="Gender">
              <div className="flex items-center gap-6 h-[42px]">
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="accent-amber-600 w-4 h-4"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="accent-amber-600 w-4 h-4"
                  />
                  Female
                </label>
              </div>
            </Field>

            <Field label="Permanent Address">
              <div className="relative">
                <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-600" />
                <input
                  type="text"
                  placeholder="Permanent address"
                  className={`${inputClasses} pl-10`}
                />
              </div>
            </Field>

            <Field label="Temporary Address">
              <div className="relative">
                <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-600" />
                <input
                  type="text"
                  placeholder="Temporary address"
                  className={`${inputClasses} pl-10`}
                />
              </div>
            </Field>

            <Field label="Contact No.">
              <div className="relative">
                <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-600" />
                <input type="tel" placeholder="98XXXXXXXX" className={`${inputClasses} pl-10`} />
              </div>
            </Field>

            <Field label="Email">
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-600" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`${inputClasses} pl-10`}
                />
              </div>
            </Field>

            <Field label="D.O.B">
              <div className="relative">
                <Cake size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-600" />
                <input type="date" className={`${inputClasses} pl-10`} />
              </div>
            </Field>

            <Field label="Guardian">
              <div className="relative">
                <Users size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-600" />
                <input
                  type="text"
                  placeholder="Guardian's name"
                  className={`${inputClasses} pl-10`}
                />
              </div>
            </Field>

            <Field label="Occupation / Annual Income">
              <div className="relative">
                <Briefcase size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-600" />
                <input
                  type="text"
                  placeholder="e.g. Business, NRs. 8,00,000/yr"
                  className={`${inputClasses} pl-10`}
                />
              </div>
            </Field>

            <Field label="Nationality">
              <input type="text" placeholder="e.g. Nepali" className={inputClasses} />
            </Field>

            <Field label="Language Known">
              <div className="relative">
                <Languages size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-600" />
                <input
                  type="text"
                  placeholder="e.g. Nepali, English, Hindi"
                  className={`${inputClasses} pl-10`}
                />
              </div>
            </Field>

            <Field label="Financial Sponsor Name">
              <input type="text" placeholder="Sponsor's full name" className={inputClasses} />
            </Field>

            <Field label="Sponsor Contact">
              <input type="tel" placeholder="98XXXXXXXX" className={inputClasses} />
            </Field>

            <Field label="Sponsor Address">
              <input type="text" placeholder="Sponsor's address" className={inputClasses} />
            </Field>

            <Field label="Sponsor's Email">
              <input type="email" placeholder="sponsor@example.com" className={inputClasses} />
            </Field>

            <Field label="Academic Details" full>
              <textarea
                rows={3}
                placeholder="e.g. +2 / Bachelor's degree, institution, GPA/percentage"
                className={`${inputClasses} resize-none`}
              />
            </Field>

            <Field label="TOEFL / IELTS Score (if available)">
              <input type="text" placeholder="e.g. IELTS 6.5" className={inputClasses} />
            </Field>

            <Field label="Course Willing to Study">
              <input
                type="text"
                placeholder="e.g. Master of Business Administration"
                className={inputClasses}
              />
            </Field>

            <Field label="How Did You Hear About Axis International Education?" full>
              <div className="flex flex-wrap gap-6 h-[42px] items-center">
                {hearAboutOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="hearAbout"
                      value={option}
                      className="accent-amber-600 w-4 h-4"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Security Code" full>
              <div className="flex flex-wrap items-center gap-4">
                <div className="select-none">
                  <CaptchaCanvas code={captcha} />
                </div>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  aria-label="Reload security code"
                  className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-amber-600 hover:border-amber-300 transition-colors flex-shrink-0"
                >
                  <RefreshCw size={17} />
                </button>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter the code shown"
                  className={`${inputClasses} w-full sm:w-56`}
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Enter the characters exactly as shown above (case-sensitive).
              </p>
            </Field>
          </div>

          {/* Submit */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm shadow-sm hover:shadow-md"
            >
              <Send size={16} />
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}