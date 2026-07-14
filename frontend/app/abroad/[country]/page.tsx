// 'use client';

// import { useParams } from "next/navigation";
// import Image from "next/image";
// import {
//   GraduationCap,
//   Award,
//   MapPin,
//   CheckCircle2,
//   ChevronRight,
//   FileText,
//   Building2,
//   ClipboardCheck,
// } from "lucide-react";
// import Link from "next/link";

// // Simple type definitions
// type University = {
//   name: string;
//   location: string;
// };

// type VisaInfo = {
//   type: string;
//   classes?: string[];
//   description?: string;
//   requirements?: string;
// };

// type Location = {
//   region: string;
//   neighbors: string[];
// };

// type Geography = {
//   islands: string[];
// };

// type EducationSystem = {
//   tiers: string[];
//   academicYear: string;
// };

// type Rankings = {
//   science: number;
//   reading: number;
//   math: number;
// };

// type Scholarships = {
//   types: string[];
//   criteria: string;
// };

// type Requirements = {
//   [key: string]: string;
// };

// type CountryData = {
//   name: string;
//   flag: string;
//   title: string;
//   subtitle: string;
//   image: string;
//   overview: string;
//   visaInfo?: VisaInfo;
//   universities: University[];
//   requirements: Requirements;
//   facilities?: string[];
//   benefits?: string[];
//   popularFields?: string[];
//   literacyRate?: string;
//   location?: Location;
//   geography?: Geography;
//   educationSystem?: EducationSystem;
//   rankings?: Rankings;
//   degreesOffered?: string[];
//   scholarships?: Scholarships;
// };

// // Country-specific data
// const countryData: Record<string, CountryData> = {
//   australia: {
//     name: "Australia",
//     flag: "🇦🇺",
//     title: "Study in Australia",
//     subtitle: "World-class education in a vibrant multicultural environment",
//     image: "/images/countries/australia.jpg",
//     overview:
//       "Currently Australia has introduced a new visa policy for international students, which categorizes Australian education providers into Streamline and Non-Streamline institutes. Both types of education institutes provide quality education to the students, where only some visa procedures differ. All in all, both institutes are able to provide you approved academic documents for Australian visa class 570, 572, 573 & 574.",
//     visaInfo: {
//       type: "Streamline & Non-Streamline Institutes",
//       classes: ["570", "572", "573", "574"],
//       description:
//         "Both types of education institutes provide quality education to the students, where only some visa procedures differ.",
//     },
//     universities: [
//       { name: "Australian Ideal College", location: "Sydney" },
//       { name: "Oxford College", location: "Sydney" },
//       { name: "Australian National Institute of Business and Technology", location: "" },
//       { name: "Australian National College of English", location: "Melbourne" },
//       { name: "Sydney Business & Travel Academy (SBTA)", location: "Sydney" },
//       { name: "Sydney English Language Academy (SELA)", location: "Sydney" },
//       { name: "Intake Institute of Technology", location: "Brisbane" },
//       { name: "Shafston International College", location: "Brisbane" },
//       { name: "Sydney Royal Gurkhas Institute of Technology", location: "Melbourne" },
//     ],
//     requirements: {
//       academic: "10+2 / PCL level with 50% scores",
//       english: "IELTS/TOEFL required",
//     },
//   },

//   usa: {
//     name: "USA",
//     flag: "🇺🇸",
//     title: "Study in USA",
//     subtitle: "Diverse opportunities at world-renowned institutions",
//     image: "/images/countries/usa.jpg",
//     overview:
//       "America has always welcomed international students to encourage the diversity in qualities. The USA is always in favor of ingenuity in terms of visa documentation. We have been assisting the aspiring students to make them eligible and successful to achieve F-1 visa for international degrees and qualifications.",
//     visaInfo: {
//       type: "F-1 Visa",
//       description: "For international degrees and qualifications",
//     },
//     universities: [
//       { name: "Wichita States University", location: "Kansas" },
//       { name: "United States University", location: "California" },
//     ],
//     requirements: {
//       academic: "Varies by institution",
//       english: "IELTS/TOEFL required",
//     },
//   },

//   uk: {
//     name: "UK",
//     flag: "🇬🇧",
//     title: "Study in UK",
//     subtitle: "World-class education with shorter, intensive courses",
//     image: "/images/countries/uk.jpg",
//     overview:
//       "U.K. universities are full of many other facilities such as libraries, computers, research equipment and so on. British higher education provides value for money by offering shorter, more intensive courses than those available in many other countries, thereby reducing living expenses and time spent away from home.",
//     visaInfo: {
//       type: "Tier 4",
//       description: "New points-based system",
//       requirements: "Students need to get required points",
//     },
//     facilities: ["Libraries", "Computers", "Research equipment"],
//     benefits: ["Shorter courses", "Intensive study", "Cost-effective"],
//     universities: [
//       { name: "Sunderland University", location: "" },
//       { name: "Oxford College of London", location: "London" },
//       { name: "South London College", location: "London" },
//       { name: "Birmingham University College", location: "Birmingham" },
//       { name: "London School of Business & Management", location: "London" },
//     ],
//     requirements: {
//       academic: "Varies by institution",
//       english: "IELTS required",
//     },
//   },

//   finland: {
//     name: "Finland",
//     flag: "🇫🇮",
//     title: "Study in Finland",
//     subtitle: "High-quality education in a developed European country",
//     image: "/images/countries/finland.jpg",
//     overview:
//       "Finland is a well developed European country having a good educational environment. The literacy rate is almost 100% in here. It is situated in northern Europe being neighbored with Norway, Sweden and Russia. Education here is highly promoted for students.",
//     location: {
//       region: "Northern Europe",
//       neighbors: ["Norway", "Sweden", "Russia"],
//     },
//     literacyRate: "100%",
//     scholarships: {
//       types: ["Full", "Partial"],
//       criteria: "Based on academic excellence",
//     },
//     degreesOffered: ["Bachelor", "Master"],
//     // NOTE: placeholder institutions — replace with the actual partner universities you represent in Finland
//     universities: [
//       { name: "Häme University of Applied Sciences (HAMK)", location: "Hämeenlinna" },
//       { name: "Centria University of Applied Sciences", location: "Kokkola" },
//       { name: "Metropolia University of Applied Sciences", location: "Helsinki" },
//     ],
//     requirements: {
//       academic: "10+2 with 50% academics",
//       english: "IELTS-5.5 / TOEFL-71 iBT (Minimum)",
//       workExperience: "Required for Master's programs",
//     },
//   },

//   india: {
//     name: "India",
//     flag: "🇮🇳",
//     title: "Study in India",
//     subtitle: "Quality education at affordable costs",
//     image: "/images/countries/india.jpg",
//     overview:
//       "India has been one of the popular destinations for IT, Engineering, Nursing and Business studies. The world class education has been the attraction of many students. Indian universities and colleges are offering variety of courses with a lot more facilities to make students more professional and qualified.",
//     popularFields: ["IT", "Engineering", "Nursing", "Business studies"],
//     benefits: ["World class education", "Reasonable costs", "Variety of courses"],
//     universities: [
//       { name: "Ansal Institute of Technology & Management", location: "Lucknow" },
//       { name: "Guntur Engineering College", location: "Guntur" },
//       { name: "St. Mary's Group", location: "Hyderabad, Guntur, Kolkata, Prakasam" },
//       { name: "Krupanidhi College", location: "Bangalore" },
//       { name: "Kuoni Academy", location: "India" },
//     ],
//     requirements: {
//       academic: "10+2 with minimum required scores",
//       english: "IELTS/TOEFL may be required",
//     },
//   },

//   "new-zealand": {
//     name: "New Zealand",
//     flag: "🇳🇿",
//     title: "Study in New Zealand",
//     subtitle: "Island nation with excellent education system",
//     image: "/images/countries/new-zealand.jpg",
//     overview:
//       "New Zealand is an island country in the southwestern Pacific Ocean. The country geographically comprises two main landmasses that of the North Island, or Te Ika-a-Māui, and the South Island, or Teipounamu – and numerous smaller islands.",
//     geography: {
//       islands: ["North Island (Te Ika-a-Māui)", "South Island (Teipounamu)"],
//     },
//     educationSystem: {
//       tiers: ["Primary schools", "Secondary schools (high schools)", "Tertiary education"],
//       academicYear:
//         "Late January to mid-December (primary/polytechnics), Late February to mid-November (universities)",
//     },
//     rankings: {
//       science: 7,
//       reading: 7,
//       math: 13,
//     },
//     degreesOffered: ["Diploma", "Advanced Diploma", "Bachelor", "Graduate Diploma", "Master"],
//     // NOTE: placeholder institutions — replace with the actual partner institutions you represent in New Zealand
//     universities: [
//       { name: "Southern Institute of Technology (SIT)", location: "Invercargill" },
//       { name: "Eastern Institute of Technology (EIT)", location: "Hawke's Bay" },
//       { name: "New Zealand Institute of Education", location: "Auckland" },
//     ],
//     requirements: {
//       academic: "Minimum 10+2 with 50% and above",
//       english: "IELTS 6.0/6.5",
//       academicGap: "No more than 2 years",
//       financial: "Financial sound to pay tuition and living expenses",
//       workExperience: "Required for Master's program",
//     },
//   },
// };

// function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
//   return (
//     <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
//       <Icon size={14} />
//       {label}
//     </span>
//   );
// }

// // Default export
// export default function CountryPage() {
//   const params = useParams();
//   const country = params?.country as string;

//   // If no country param or country not found, show 404
//   if (!country || !countryData[country]) {
//     return (
//       <div className="min-h-screen bg-white py-16 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-[#0B2545] mb-4">404</h1>
//           <p className="text-slate-600 mb-4">Country not found</p>
//           <Link href="/abroad" className="text-amber-600 hover:underline">
//             View all countries
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const data = countryData[country];

//   return (
//     <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
//           <Link href="/" className="hover:text-amber-600 transition-colors">
//             Home
//           </Link>
//          <ChevronRight size={14} />
//           <span className="text-amber-600 font-medium">{data.name}</span>
//         </nav>

//         {/* Hero Section — gradient, no photo */}
//         <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-12">
//           <div className="relative z-10 max-w-2xl">
//             <div className="text-6xl mb-4 text-[#E17100]">{data.flag}</div>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//               {data.title}
//             </h1>
//             <p className="text-white/80 text-base sm:text-lg">{data.subtitle}</p>
//           </div>
//           {/* Decorative background */}
//           <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
//             <GraduationCap size={400} className="absolute -right-20 -top-20 text-white" />
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             {/* Overview — with medium image alongside text */}
//             <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
//               <SectionBadge icon={GraduationCap} label="Overview" />
//               <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
//                 About Studying in {data.name}
//               </h2>

//               <div className="mt-5 grid sm:grid-cols-[1fr,220px] gap-6 items-start">
//                 <p className="text-slate-600 leading-relaxed">{data.overview}</p>

//                 {/* Medium-sized supporting image */}
//                 <div className="relative w-full sm:w-[220px] h-[160px] rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
//                   <Image
//                     src={data.image}
//                     alt={`Study in ${data.name}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>

//               {data.popularFields && data.popularFields.length > 0 && (
//                 <div className="mt-6 pt-6 border-t border-slate-100">
//                   <h3 className="text-sm font-semibold text-[#0B2545] mb-3">Popular Fields</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {data.popularFields.map((field: string) => (
//                       <span
//                         key={field}
//                         className="bg-amber-50 text-amber-700 px-3.5 py-1.5 rounded-full text-sm font-medium"
//                       >
//                         {field}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {data.literacyRate && (
//                 <div className="mt-4 flex items-center gap-2.5 text-slate-600 bg-slate-50 rounded-xl px-4 py-3 w-fit">
//                   <Award size={18} className="text-amber-600" />
//                   <span className="text-sm">
//                     Literacy Rate: <strong className="text-[#0B2545]">{data.literacyRate}</strong>
//                   </span>
//                 </div>
//               )}

//               {data.location && (
//                 <div className="mt-4 flex items-start gap-2.5 text-slate-600 bg-slate-50 rounded-xl px-4 py-3">
//                   <MapPin size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
//                   <div className="text-sm">
//                     <p className="text-[#0B2545] font-medium">{data.location.region}</p>
//                     <p className="text-slate-500 mt-0.5">
//                       Neighbors: {data.location.neighbors.join(", ")}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Visa Information */}
//             {data.visaInfo && (
//               <div className="relative bg-[#0B2545] text-white rounded-3xl p-6 lg:p-8 overflow-hidden">
//                 <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />
//                 <span className="relative inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
//                   <ClipboardCheck size={14} />
//                   Visa Information
//                 </span>
//                 <h2 className="relative mt-3 text-2xl font-bold">Visa Requirements</h2>

//                 <div className="relative mt-6 grid md:grid-cols-2 gap-6">
//                   <div>
//                     <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
//                       Visa Type
//                     </p>
//                     <p className="text-white/90 mt-1.5 text-sm leading-relaxed">{data.visaInfo.type}</p>
//                     {data.visaInfo.classes && data.visaInfo.classes.length > 0 && (
//                       <div className="mt-4">
//                         <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
//                           Visa Classes
//                         </p>
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           {data.visaInfo.classes.map((cls: string) => (
//                             <span
//                               key={cls}
//                               className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-sm"
//                             >
//                               {cls}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div>
//                     <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
//                       Description
//                     </p>
//                     <p className="text-white/90 mt-1.5 text-sm leading-relaxed">
//                       {data.visaInfo.description}
//                     </p>
//                     {data.visaInfo.requirements && (
//                       <p className="text-white/90 mt-2 text-sm leading-relaxed">
//                         {data.visaInfo.requirements}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Universities — always rendered, guaranteed to exist for every country now */}
//             <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
//               <SectionBadge icon={Building2} label="Institutions" />
//               <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
//                 Universities &amp; Colleges We Represent
//               </h2>
//               <div className="mt-6 grid md:grid-cols-2 gap-4">
//                 {data.universities.map((uni: University, index: number) => (
//                   <div
//                     key={index}
//                     className="border border-slate-200 rounded-2xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex items-start gap-3"
//                   >
//                     <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
//                       <Building2 size={16} className="text-amber-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[#0B2545] text-sm leading-snug">
//                         {uni.name}
//                       </h3>
//                       {uni.location && (
//                         <p className="text-xs text-slate-500 flex items-center gap-1 mt-1.5">
//                           <MapPin size={12} />
//                           {uni.location}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar (not sticky) */}
//           <div className="space-y-6">
//             {/* Quick Facts */}
//             <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
//               <h3 className="font-bold text-[#0B2545] text-lg mb-5">Quick Facts</h3>
//               <div className="space-y-5">
//                 {data.benefits && data.benefits.length > 0 && (
//                   <div>
//                     <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
//                       Benefits
//                     </p>
//                     <ul className="space-y-2">
//                       {data.benefits.map((benefit: string) => (
//                         <li key={benefit} className="text-sm text-slate-600 flex items-start gap-2">
//                           <CheckCircle2 size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {data.facilities && data.facilities.length > 0 && (
//                   <div>
//                     <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
//                       Facilities
//                     </p>
//                     <ul className="space-y-2">
//                       {data.facilities.map((facility: string) => (
//                         <li key={facility} className="text-sm text-slate-600 flex items-start gap-2">
//                           <CheckCircle2 size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
//                           {facility}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {data.degreesOffered && data.degreesOffered.length > 0 && (
//                   <div>
//                     <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
//                       Degrees Offered
//                     </p>
//                     <ul className="space-y-2">
//                       {data.degreesOffered.map((degree: string) => (
//                         <li key={degree} className="text-sm text-slate-600 flex items-start gap-2">
//                           <GraduationCap size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
//                           {degree}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Requirements */}
//             <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
//               <h3 className="font-bold text-[#0B2545] text-lg mb-5">Key Requirements</h3>
//               <div className="space-y-4">
//                 {Object.entries(data.requirements).map(([key, value]) => (
//                   <div key={key} className="flex items-start gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
//                       <FileText size={14} className="text-amber-600" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-slate-400 uppercase tracking-wider">
//                         {key.replace(/([A-Z])/g, " $1").trim()}
//                       </p>
//                       <p className="text-sm text-slate-700 mt-0.5">{value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-7 text-center overflow-hidden">
//               <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
//               <h4 className="relative text-white font-bold text-lg mb-1.5">Ready to Apply?</h4>
//               <p className="relative text-white/90 text-sm mb-5">
//                 Get a free consultation with our counselors today.
//               </p>
//               <Link
//                 href="/contact"
//                 className="relative inline-block bg-white text-amber-600 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-50 transition-colors text-sm shadow-sm"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  MapPin,
  CheckCircle2,
  ChevronRight,
  FileText,
  Building2,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";
import Flag from 'react-flagkit';

// Simple type definitions
type University = {
  name: string;
  location: string;
};

type VisaInfo = {
  type: string;
  classes?: string[];
  description?: string;
  requirements?: string;
};

type Location = {
  region: string;
  neighbors: string[];
};

type Geography = {
  islands: string[];
};

type EducationSystem = {
  tiers: string[];
  academicYear: string;
};

type Rankings = {
  science: number;
  reading: number;
  math: number;
};

type Scholarships = {
  types: string[];
  criteria: string;
};

type Requirements = {
  [key: string]: string;
};

type CountryData = {
  name: string;
  flagCode: string; // Changed from 'flag' to 'flagCode'
  title: string;
  subtitle: string;
  image: string;
  overview: string;
  visaInfo?: VisaInfo;
  universities: University[];
  requirements: Requirements;
  facilities?: string[];
  benefits?: string[];
  popularFields?: string[];
  literacyRate?: string;
  location?: Location;
  geography?: Geography;
  educationSystem?: EducationSystem;
  rankings?: Rankings;
  degreesOffered?: string[];
  scholarships?: Scholarships;
};

// Country-specific data with flag codes
const countryData: Record<string, CountryData> = {
  australia: {
    name: "Australia",
    flagCode: "AU",
    title: "Study in Australia",
    subtitle: "World-class education in a vibrant multicultural environment",
    image: "/images/countries/australia.jpg",
    overview:
      "Currently Australia has introduced a new visa policy for international students, which categorizes Australian education providers into Streamline and Non-Streamline institutes. Both types of education institutes provide quality education to the students, where only some visa procedures differ. All in all, both institutes are able to provide you approved academic documents for Australian visa class 570, 572, 573 & 574.",
    visaInfo: {
      type: "Streamline & Non-Streamline Institutes",
      classes: ["570", "572", "573", "574"],
      description:
        "Both types of education institutes provide quality education to the students, where only some visa procedures differ.",
    },
    universities: [
      { name: "Australian Ideal College", location: "Sydney" },
      { name: "Oxford College", location: "Sydney" },
      { name: "Australian National Institute of Business and Technology", location: "" },
      { name: "Australian National College of English", location: "Melbourne" },
      { name: "Sydney Business & Travel Academy (SBTA)", location: "Sydney" },
      { name: "Sydney English Language Academy (SELA)", location: "Sydney" },
      { name: "Intake Institute of Technology", location: "Brisbane" },
      { name: "Shafston International College", location: "Brisbane" },
      { name: "Sydney Royal Gurkhas Institute of Technology", location: "Melbourne" },
    ],
    requirements: {
      academic: "10+2 / PCL level with 50% scores",
      english: "IELTS/TOEFL required",
    },
  },

  usa: {
    name: "USA",
    flagCode: "US",
    title: "Study in USA",
    subtitle: "Diverse opportunities at world-renowned institutions",
    image: "/images/countries/usa.jpg",
    overview:
      "America has always welcomed international students to encourage the diversity in qualities. The USA is always in favor of ingenuity in terms of visa documentation. We have been assisting the aspiring students to make them eligible and successful to achieve F-1 visa for international degrees and qualifications.",
    visaInfo: {
      type: "F-1 Visa",
      description: "For international degrees and qualifications",
    },
    universities: [
      { name: "Wichita States University", location: "Kansas" },
      { name: "United States University", location: "California" },
    ],
    requirements: {
      academic: "Varies by institution",
      english: "IELTS/TOEFL required",
    },
  },

  uk: {
    name: "UK",
    flagCode: "GB",
    title: "Study in UK",
    subtitle: "World-class education with shorter, intensive courses",
    image: "/images/countries/uk.jpg",
    overview:
      "U.K. universities are full of many other facilities such as libraries, computers, research equipment and so on. British higher education provides value for money by offering shorter, more intensive courses than those available in many other countries, thereby reducing living expenses and time spent away from home.",
    visaInfo: {
      type: "Tier 4",
      description: "New points-based system",
      requirements: "Students need to get required points",
    },
    facilities: ["Libraries", "Computers", "Research equipment"],
    benefits: ["Shorter courses", "Intensive study", "Cost-effective"],
    universities: [
      { name: "Sunderland University", location: "" },
      { name: "Oxford College of London", location: "London" },
      { name: "South London College", location: "London" },
      { name: "Birmingham University College", location: "Birmingham" },
      { name: "London School of Business & Management", location: "London" },
    ],
    requirements: {
      academic: "Varies by institution",
      english: "IELTS required",
    },
  },

  finland: {
    name: "Finland",
    flagCode: "FI",
    title: "Study in Finland",
    subtitle: "High-quality education in a developed European country",
    image: "/images/countries/finland.jpg",
    overview:
      "Finland is a well developed European country having a good educational environment. The literacy rate is almost 100% in here. It is situated in northern Europe being neighbored with Norway, Sweden and Russia. Education here is highly promoted for students.",
    location: {
      region: "Northern Europe",
      neighbors: ["Norway", "Sweden", "Russia"],
    },
    literacyRate: "100%",
    scholarships: {
      types: ["Full", "Partial"],
      criteria: "Based on academic excellence",
    },
    degreesOffered: ["Bachelor", "Master"],
    universities: [
      { name: "Häme University of Applied Sciences (HAMK)", location: "Hämeenlinna" },
      { name: "Centria University of Applied Sciences", location: "Kokkola" },
      { name: "Metropolia University of Applied Sciences", location: "Helsinki" },
    ],
    requirements: {
      academic: "10+2 with 50% academics",
      english: "IELTS-5.5 / TOEFL-71 iBT (Minimum)",
      workExperience: "Required for Master's programs",
    },
  },

  india: {
    name: "India",
    flagCode: "IN",
    title: "Study in India",
    subtitle: "Quality education at affordable costs",
    image: "/images/countries/india.jpg",
    overview:
      "India has been one of the popular destinations for IT, Engineering, Nursing and Business studies. The world class education has been the attraction of many students. Indian universities and colleges are offering variety of courses with a lot more facilities to make students more professional and qualified.",
    popularFields: ["IT", "Engineering", "Nursing", "Business studies"],
    benefits: ["World class education", "Reasonable costs", "Variety of courses"],
    universities: [
      { name: "Ansal Institute of Technology & Management", location: "Lucknow" },
      { name: "Guntur Engineering College", location: "Guntur" },
      { name: "St. Mary's Group", location: "Hyderabad, Guntur, Kolkata, Prakasam" },
      { name: "Krupanidhi College", location: "Bangalore" },
      { name: "Kuoni Academy", location: "India" },
    ],
    requirements: {
      academic: "10+2 with minimum required scores",
      english: "IELTS/TOEFL may be required",
    },
  },

  "new-zealand": {
    name: "New Zealand",
    flagCode: "NZ",
    title: "Study in New Zealand",
    subtitle: "Island nation with excellent education system",
    image: "/images/countries/new-zealand.jpg",
    overview:
      "New Zealand is an island country in the southwestern Pacific Ocean. The country geographically comprises two main landmasses that of the North Island, or Te Ika-a-Māui, and the South Island, or Teipounamu – and numerous smaller islands.",
    geography: {
      islands: ["North Island (Te Ika-a-Māui)", "South Island (Teipounamu)"],
    },
    educationSystem: {
      tiers: ["Primary schools", "Secondary schools (high schools)", "Tertiary education"],
      academicYear:
        "Late January to mid-December (primary/polytechnics), Late February to mid-November (universities)",
    },
    rankings: {
      science: 7,
      reading: 7,
      math: 13,
    },
    degreesOffered: ["Diploma", "Advanced Diploma", "Bachelor", "Graduate Diploma", "Master"],
    universities: [
      { name: "Southern Institute of Technology (SIT)", location: "Invercargill" },
      { name: "Eastern Institute of Technology (EIT)", location: "Hawke's Bay" },
      { name: "New Zealand Institute of Education", location: "Auckland" },
    ],
    requirements: {
      academic: "Minimum 10+2 with 50% and above",
      english: "IELTS 6.0/6.5",
      academicGap: "No more than 2 years",
      financial: "Financial sound to pay tuition and living expenses",
      workExperience: "Required for Master's program",
    },
  },
};

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-amber-600 text-xs font-semibold uppercase tracking-wider bg-amber-50 px-3.5 py-1.5 rounded-full">
      <Icon size={14} />
      {label}
    </span>
  );
}

// Default export
export default function CountryPage() {
  const params = useParams();
  const country = params?.country as string;

  // If no country param or country not found, show 404
  if (!country || !countryData[country]) {
    return (
      <div className="min-h-screen bg-white py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0B2545] mb-4">404</h1>
          <p className="text-slate-600 mb-4">Country not found</p>
          <Link href="/abroad" className="text-amber-600 hover:underline">
            View all countries
          </Link>
        </div>
      </div>
    );
  }

  const data = countryData[country];

  return (
    <div className="bg-slate-50 min-h-screen py-6 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-600 font-medium">{data.name}</span>
        </nav>

        {/* Hero Section — with flag */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0B2545] to-[#1a3a6b] p-8 lg:p-12 mb-12">
          <div className="relative z-10 max-w-2xl">
            {/* Flag using react-flagkit */}
            <div className="mb-4">
              <Flag country={data.flagCode} size={64} />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {data.title}
            </h1>
            <p className="text-white/80 text-base sm:text-lg">{data.subtitle}</p>
          </div>
          {/* Decorative background */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5">
            <GraduationCap size={400} className="absolute -right-20 -top-20 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview — with medium image alongside text */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={GraduationCap} label="Overview" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
                About Studying in {data.name}
              </h2>

              <div className="mt-5 grid sm:grid-cols-[1fr,220px] gap-6 items-start">
                <p className="text-slate-600 leading-relaxed">{data.overview}</p>

                {/* Medium-sized supporting image */}
                <div className="relative w-full sm:w-[220px] h-[160px] rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                  <Image
                    src={data.image}
                    alt={`Study in ${data.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {data.popularFields && data.popularFields.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-semibold text-[#0B2545] mb-3">Popular Fields</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.popularFields.map((field: string) => (
                      <span
                        key={field}
                        className="bg-amber-50 text-amber-700 px-3.5 py-1.5 rounded-full text-sm font-medium"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {data.literacyRate && (
                <div className="mt-4 flex items-center gap-2.5 text-slate-600 bg-slate-50 rounded-xl px-4 py-3 w-fit">
                  <Award size={18} className="text-amber-600" />
                  <span className="text-sm">
                    Literacy Rate: <strong className="text-[#0B2545]">{data.literacyRate}</strong>
                  </span>
                </div>
              )}

              {data.location && (
                <div className="mt-4 flex items-start gap-2.5 text-slate-600 bg-slate-50 rounded-xl px-4 py-3">
                  <MapPin size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-[#0B2545] font-medium">{data.location.region}</p>
                    <p className="text-slate-500 mt-0.5">
                      Neighbors: {data.location.neighbors.join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Visa Information */}
            {data.visaInfo && (
              <div className="relative bg-[#0B2545] text-white rounded-3xl p-6 lg:p-8 overflow-hidden">
                <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl" />
                <span className="relative inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                  <ClipboardCheck size={14} />
                  Visa Information
                </span>
                <h2 className="relative mt-3 text-2xl font-bold">Visa Requirements</h2>

                <div className="relative mt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                      Visa Type
                    </p>
                    <p className="text-white/90 mt-1.5 text-sm leading-relaxed">{data.visaInfo.type}</p>
                    {data.visaInfo.classes && data.visaInfo.classes.length > 0 && (
                      <div className="mt-4">
                        <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                          Visa Classes
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {data.visaInfo.classes.map((cls: string) => (
                            <span
                              key={cls}
                              className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-sm"
                            >
                              {cls}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                      Description
                    </p>
                    <p className="text-white/90 mt-1.5 text-sm leading-relaxed">
                      {data.visaInfo.description}
                    </p>
                    {data.visaInfo.requirements && (
                      <p className="text-white/90 mt-2 text-sm leading-relaxed">
                        {data.visaInfo.requirements}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Universities */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <SectionBadge icon={Building2} label="Institutions" />
              <h2 className="mt-3 text-2xl font-bold text-[#0B2545]">
                Universities &amp; Colleges We Represent
              </h2>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {data.universities.map((uni: University, index: number) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl p-4 hover:border-amber-300 hover:shadow-md transition-all duration-300 flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Building2 size={16} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B2545] text-sm leading-snug">
                        {uni.name}
                      </h3>
                      {uni.location && (
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-1.5">
                          <MapPin size={12} />
                          {uni.location}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#0B2545] text-lg mb-5">Quick Facts</h3>
              <div className="space-y-5">
                {data.benefits && data.benefits.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Benefits
                    </p>
                    <ul className="space-y-2">
                      {data.benefits.map((benefit: string) => (
                        <li key={benefit} className="text-sm text-slate-600 flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {data.facilities && data.facilities.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Facilities
                    </p>
                    <ul className="space-y-2">
                      {data.facilities.map((facility: string) => (
                        <li key={facility} className="text-sm text-slate-600 flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {data.degreesOffered && data.degreesOffered.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Degrees Offered
                    </p>
                    <ul className="space-y-2">
                      {data.degreesOffered.map((degree: string) => (
                        <li key={degree} className="text-sm text-slate-600 flex items-start gap-2">
                          <GraduationCap size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                          {degree}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-[#0B2545] text-lg mb-5">Key Requirements</h3>
              <div className="space-y-4">
                {Object.entries(data.requirements).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <FileText size={14} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p className="text-sm text-slate-700 mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-7 text-center overflow-hidden">
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <h4 className="relative text-white font-bold text-lg mb-1.5">Ready to Apply?</h4>
              <p className="relative text-white/90 text-sm mb-5">
                Get a free consultation with our counselors today.
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
    </div>
  );
}