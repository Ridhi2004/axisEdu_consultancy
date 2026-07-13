'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, GraduationCap, Globe2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B2545]">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-3xl"
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-8xl mx-auto px-4 lg:px-6 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-amber-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
            >
              <GraduationCap size={14} />
              Nepal&apos;s Trusted Study Abroad Consultancy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight"
            >
              Your Journey to{" "}
              <span className="text-amber-400">Study Abroad</span>{" "}
              Starts Right Here
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-slate-300 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              From choosing the right university to visa approval - Axis International
              Education guides you at every step, so you can focus on building the
              future you&apos;ve always imagined.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/register"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-900/20 hover:shadow-xl active:scale-[0.98]"
                >
                  Get Registered Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-medium text-sm px-7 py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <PlayCircle size={17} />
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-8 border-t border-white/10"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-2xl lg:text-3xl font-bold text-white">500+</p>
                <p className="text-xs text-slate-400 mt-0.5">Students Placed</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-2xl lg:text-3xl font-bold text-white">6+</p>
                <p className="text-xs text-slate-400 mt-0.5">Countries</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-2xl lg:text-3xl font-bold text-white">98%</p>
                <p className="text-xs text-slate-400 mt-0.5">Visa Success</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Amber frame accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -inset-3 border-2 border-amber-500/30 rounded-[2rem] -z-10 hidden sm:block"
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-[4/5] sm:aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/consultancyy.jpg"
                  alt="Student ready to study abroad with Axis International Education"
                  fill
                  className="object-cover justify-end"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl px-4 py-3.5 flex items-center gap-3 max-w-[210px]"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0"
                >
                  <Globe2 size={18} className="text-amber-600" />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-[#0B2545] leading-tight">6 Destinations</p>
                  <p className="text-xs text-slate-400">Australia, UK, USA &amp; more</p>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="absolute -top-5 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i, index) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      whileHover={{ y: -3 }}
                      className="w-7 h-7 rounded-full bg-[#0B2545] border-2 border-white flex items-center justify-center"
                    >
                      <Users size={12} className="text-white" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs font-medium text-[#0B2545]">Join 500+ students</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}