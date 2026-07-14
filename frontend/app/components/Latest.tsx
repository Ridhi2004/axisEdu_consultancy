import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";

// Custom Facebook SVG icon
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const posts = [
  {
    title: "English Language",
    excerpt:
      "We have English language classes during the morning and the day. We are conducting our classes in groups and individually. You can take your individual classes in your preferred time and join the group classes according to our availability.",
  },
  {
    title: "IELTS Class",
    excerpt:
      "We have been running new classes for IELTS students in the morning session from 7 A.M.–8 A.M. / 8 A.M.–9 A.M. and day classes from 1 P.M.–6 P.M. We have limited seats, so reserve yours as early as possible. Our maximum seat availability is 15 students per class.",
  },
  {
    title: "Processing for Study Abroad",
    excerpt:
      "We represent many reputed educational institutions from various countries. Currently we have been counseling interested students for higher education in foreign universities & colleges. If you are interested to apply with genuine advice and documentation, visit with your original academic, passport & IELTS documents.",
  },
];

// Replace with your actual Facebook Page URL
const FACEBOOK_PAGE_URL = "https://www.facebook.com/axis.edu.np/";

export default function LatestPostsAndFacebook() {
  return (
    <section className="bg-white py-6 lg:py-14">
      <div className="max-w-8xl mx-auto px-4 lg:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
            <Rss size={14} />
            Updates
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight">
            Latest Posts &amp; Facebook Updates
          </h2>
          <p className="mt-3 text-slate-500 text-base">
            Stay up to date with our classes, programs, and announcements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-stretch">
          {/* Left column: Latest Posts - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            {posts.map((post, index) => (
              <div
                key={index}
                className="block rounded-2xl border border-slate-200 bg-white p-6 flex-1"
              >
                <h3 className="text-lg font-bold text-[#0B2545]">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            ))}
            
            {/* Single Read More button at the end */}
            <Link
              href="/blog"
              className="group block rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50 hover:bg-amber-100 transition-all duration-300 p-6 text-center flex-shrink-0"
            >
              <span className="inline-flex items-center gap-2 text-amber-600 font-semibold text-base">
                Read More Posts
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>

          {/* Right column: Facebook Feed - Takes 1 column */}
          <div className="lg:col-span-1 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div className="flex items-center gap-2.5 bg-[#0B2545] px-5 py-4 flex-shrink-0">
              <FacebookIcon size={18} className="text-white" />
              <span className="text-white font-semibold text-sm">
                Follow Us on Facebook
              </span>
            </div>
            <div className="bg-slate-50 flex-1 p-0">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                  FACEBOOK_PAGE_URL
                )}&tabs=timeline&width=500&height=650&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&hide_cta=true`}
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "hidden", minHeight: "600px" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Axis International Education Facebook Page"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}