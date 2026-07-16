'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  ChevronRight,
  X,
  ChevronLeft,
  ArrowRight,
  Expand,
} from "lucide-react";

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
      <Icon size={14} />
      {label}
    </span>
  );
}

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

// Replace src paths with your actual images in /public/images/gallery/
const images: GalleryImage[] = [
  { src: "/images/gallery/campus-1.jpg", alt: "Axis counseling office", category: "Campus" },
  { src: "/images/gallery/campus-2.jpg", alt: "Reception and student lounge", category: "Campus" },
  { src: "/images/gallery/classes-1.jpg", alt: "IELTS preparatory class in session", category: "Classes" },
  { src: "/images/gallery/classes-2.jpg", alt: "English language group class", category: "Classes" },
  { src: "/images/gallery/classes-3.jpg", alt: "Students practicing speaking module", category: "Classes" },
  { src: "/images/gallery/events-1.jpg", alt: "Education fair booth", category: "Events" },
  { src: "/images/gallery/events-2.jpg", alt: "Scholarship award ceremony", category: "Events" },
  { src: "/images/gallery/counseling-1.jpg", alt: "One-on-one student counseling", category: "Counseling" },
  { src: "/images/gallery/counseling-2.jpg", alt: "Visa documentation review session", category: "Counseling" },
  { src: "/images/gallery/students-1.jpg", alt: "Students departing for abroad studies", category: "Students Abroad" },
  { src: "/images/gallery/students-2.jpg", alt: "Farewell gathering for enrolled students", category: "Students Abroad" },
  { src: "/images/gallery/staff-1.jpg", alt: "Axis counseling team", category: "Team" },
];

const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () =>
      activeCategory === "All"
        ? images
        : images.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">Gallery</span>
        </nav>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-10">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              <Camera size={14} />
              Gallery
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Moments at Axis
            </h1>
            <p className="text-white/80 text-base sm:text-lg">
              A look inside our classes, counseling sessions, events, and the students we've
              helped along the way.
            </p>
          </div>
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-amber-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-[#0B2545]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className="text-white text-xs font-medium leading-snug">{image.alt}</span>
              </div>
              <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Expand size={14} className="text-[#0B2545]" />
              </div>
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">
            No photos in this category yet.
          </div>
        )}

        {/* CTA */}
        <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-8 text-center overflow-hidden mt-12">
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <h4 className="relative text-white font-bold text-xl mb-1.5">
            Want to Be Our Next Success Story?
          </h4>
          <p className="relative text-white/90 text-sm mb-5">
            Join the students already on their way to studying abroad.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-1.5 bg-white text-amber-600 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-50 transition-colors text-sm shadow-sm"
          >
            Get Started
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#0B2545]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm px-4 text-center">
            {filteredImages[lightboxIndex].alt}
            <span className="text-white/50">
              {" "}
              — {lightboxIndex + 1} / {filteredImages.length}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}