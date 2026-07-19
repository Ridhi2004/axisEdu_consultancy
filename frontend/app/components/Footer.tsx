import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#081b34] text-slate-300">
      <div className="max-w-8xl mx-auto px-4 lg:px-6 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/images/logooaxis.png"
                  alt="Axis International Education logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-sm leading-tight">
                AXIS INTERNATIONAL
                <br />
                <span className="text-amber-500">EDUCATION PVT. LTD.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              An established educational counseling center in Kathmandu, helping
              students pursue quality education and study abroad opportunities
              worldwide.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-600 transition-colors"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-600 transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-600 transition-colors"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
            
              <li><Link href="/about#introduction" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/programs/Ielts" className="hover:text-amber-500 transition-colors">IELTS</Link></li>
              <li><Link href="/programs/english" className="hover:text-amber-500 transition-colors">English Language</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-500 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Study Destinations
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/abroad/australia" className="hover:text-amber-500 transition-colors">Australia</Link></li>
              <li><Link href="/abroad/usa" className="hover:text-amber-500 transition-colors">USA</Link></li>
              <li><Link href="/abroad/uk" className="hover:text-amber-500 transition-colors">UK</Link></li>
              <li><Link href="/abroad/finland" className="hover:text-amber-500 transition-colors">Finland</Link></li>
              <li><Link href="/abroad/india" className="hover:text-amber-500 transition-colors">India</Link></li>
              <li><Link href="/abroad/new-zealand" className="hover:text-amber-500 transition-colors">New Zealand</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                Kathmandu, Nepal
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+9770000000000" className="hover:text-amber-500 transition-colors">
                  +977 000-0000000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:info@axisedu.com" className="hover:text-amber-500 transition-colors">
                  info@axisedu.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Find Us
            </h3>
            <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4506441190706!2d85.32005567525366!3d27.70336917618481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a842049ef5%3A0x21d314401e6bc5f7!2sAxis%20International%20Education%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1784176605478!5m2!1sen!2snp"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Axis International Education location map"
                className="grayscale-[30%] contrast-[1.1]"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Axis International Education Pvt. Ltd. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}