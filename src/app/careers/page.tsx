import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — FourStackTech",
  description:
    "Join FourStackTech and build world-class Flutter apps. We're hiring Flutter developers, UI/UX designers, and backend engineers.",
};

const openRoles = [
  {
    title: "Senior Flutter Developer",
    type: "Full-time",
    location: "Remote (India)",
    salary: "₹15–25 LPA",
    experience: "3+ years",
    description:
      "Own Flutter features end-to-end. Work with BLoC/Riverpod, write testable code, and mentor junior developers.",
    requirements: [
      "3+ years of Flutter/Dart experience",
      "Strong understanding of state management (BLoC / Riverpod)",
      "Experience with REST API integration and Firebase",
      "Clean architecture knowledge",
      "Excellent problem-solving skills",
    ],
    emoji: "📱",
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "Flutter Developer (Mid-Level)",
    type: "Full-time",
    location: "Remote (India)",
    salary: "₹8–15 LPA",
    experience: "1–3 years",
    description:
      "Build production-quality Flutter apps working alongside our senior engineers. Grow fast in a Flutter-first environment.",
    requirements: [
      "1-3 years of Flutter/Dart experience",
      "Familiarity with state management solutions",
      "Good understanding of UI/UX principles",
      "Experience with version control (Git)",
      "Strong willingness to learn and grow",
    ],
    emoji: "⚡",
    color: "from-emerald-600 to-teal-700",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote (India / Worldwide)",
    salary: "₹6–12 LPA",
    experience: "2+ years",
    description:
      "Design beautiful, intuitive mobile app experiences in Figma. You'll work directly with clients and engineers from ideation to delivery.",
    requirements: [
      "2+ years of product/mobile UI design experience",
      "Expert-level Figma skills",
      "Strong portfolio of mobile app design work",
      "Understanding of design systems and component libraries",
      "Ability to conduct user research and usability testing",
    ],
    emoji: "🎨",
    color: "from-violet-600 to-purple-800",
  },
];

const perks = [
  { emoji: "🌍", title: "Fully Remote", desc: "Work from anywhere. We believe in async-first culture." },
  { emoji: "📈", title: "Fast Growth", desc: "Small team, high impact. Your work ships to real users quickly." },
  { emoji: "📚", title: "Learning Budget", desc: "₹20,000/year for courses, conferences, and books." },
  { emoji: "💰", title: "Competitive Pay", desc: "Above-market compensation with performance bonuses." },
  { emoji: "🏖️", title: "Flexible PTO", desc: "Unlimited leaves. We trust you to manage your time." },
  { emoji: "🛠️", title: "Latest Tools", desc: "Top-tier hardware, software, and subscriptions provided." },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-64 bg-[#54C5F8] rounded-full blur-[150px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
          <p className="text-xs font-semibold text-[#54C5F8] uppercase tracking-widest mb-4">
            Careers
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Build the future
            <br />
            <span className="gradient-text">with us.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We&apos;re a small, focused team of Flutter engineers building world-class apps for clients across the globe. If you&apos;re exceptional at what you do and care deeply about your craft, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">
              Why FourStackTech?
            </p>
            <h2 className="text-4xl font-bold text-slate-900">Perks & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white p-8 hover:bg-blue-50/50 transition-colors">
                <div className="text-3xl mb-4">{perk.emoji}</div>
                <h3 className="font-bold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">
              Open Positions
            </p>
            <h2 className="text-4xl font-bold text-slate-900">We&apos;re hiring.</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              3 open roles · Fully remote · India & Global
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-8 flex flex-col lg:flex-row gap-8">
                  {/* Left: Role info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-2xl`}>{role.emoji}</span>
                      <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-5">
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <MapPin size={14} className="text-[#027DFD]" />
                        {role.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <Clock size={14} className="text-[#027DFD]" />
                        {role.type} · {role.experience}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <DollarSign size={14} className="text-[#027DFD]" />
                        {role.salary}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {role.description}
                    </p>

                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                        Requirements
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {role.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-[#027DFD] mt-0.5 shrink-0">✓</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Apply */}
                  <div className="flex flex-col justify-center items-start lg:items-center gap-4 lg:pl-8 lg:border-l border-slate-100 shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#027DFD] hover:bg-[#0553B1] text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 whitespace-nowrap"
                    >
                      Apply Now <ArrowRight size={16} />
                    </Link>
                    <p className="text-slate-400 text-xs text-center">
                      Or email your CV to
                      <br />
                      <a href="mailto:careers@fourstacktech.com" className="text-[#027DFD] hover:underline">
                        careers@fourstacktech.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Don't see a role */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-10 text-center">
            <p className="text-slate-500 text-lg mb-2">Don&apos;t see a role that fits?</p>
            <p className="text-slate-400 text-sm mb-6">
              We&apos;re always open to exceptional talent. Send us your portfolio and let&apos;s talk.
            </p>
            <a
              href="mailto:careers@fourstacktech.com"
              className="inline-flex items-center gap-2 border-2 border-[#027DFD] text-[#027DFD] hover:bg-[#027DFD] hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200"
            >
              Send Open Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
