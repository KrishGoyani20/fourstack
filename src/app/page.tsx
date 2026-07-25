"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, ChevronRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Apps Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3+", label: "Years Experience" },
  { value: "2x", label: "Faster than Native" },
];

const services = [
  {
    icon: "📱",
    title: "Flutter App Development",
    description:
      "Single codebase. Two platforms. Pixel-perfect iOS and Android apps built with Google's Flutter framework for blazing-fast performance.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Human-centered design that converts. We craft intuitive, delightful interfaces that keep users engaged and coming back.",
  },
  {
    icon: "⚙️",
    title: "Backend & API Integration",
    description:
      "From Firebase to custom REST APIs — we wire up everything your app needs to run reliably at scale.",
  },
  {
    icon: "🚀",
    title: "App Store Deployment",
    description:
      "End-to-end launch support. We handle publishing to both the App Store and Google Play, from testing to going live.",
  },
  {
    icon: "⚡",
    title: "MVP Development",
    description:
      "Validate your idea fast. We scope and ship your minimum viable product in weeks, not months.",
  },
  {
    icon: "🛠️",
    title: "App Maintenance & Support",
    description:
      "We don't disappear after launch. Long-term maintenance, updates, and technical support to keep your app healthy.",
  },
];

const caseStudies = [
  {
    tag: "FinTech",
    title: "SmartWallet",
    subtitle: "Digital Banking App",
    problem: "A fintech startup needed a secure, fast digital wallet app to enter a competitive market with limited runway.",
    solution: "Flutter MVP in 8 weeks with biometric login, real-time transaction feed, and Firebase backend.",
    impact: "₹2Cr seed raised within 3 months of launch. 10,000+ users in 60 days.",
    color: "from-blue-600 to-blue-800",
    emoji: "💳",
  },
  {
    tag: "HealthTech",
    title: "MediTrack",
    subtitle: "Patient Management",
    problem: "A clinic chain manually tracked patient records across 12 branches with no unified system.",
    solution: "Cross-platform Flutter app with offline sync, appointment scheduling, and doctor dashboards.",
    impact: "70% reduction in admin time. Zero data loss incidents after rollout.",
    color: "from-emerald-600 to-teal-700",
    emoji: "🏥",
  },
  {
    tag: "EdTech",
    title: "LearnPath",
    subtitle: "Learning Platform",
    problem: "An edtech founder needed an interactive learning platform rivaling existing giants within a tight budget.",
    solution: "Flutter app with video streaming, quizzes, progress tracking, and Razorpay payment integration.",
    impact: "5,000+ learners onboarded in Month 1. Rated 4.8★ on Play Store.",
    color: "from-violet-600 to-purple-800",
    emoji: "📚",
  },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, SmartWallet",
    content:
      "FourStackTech delivered our MVP in record time without cutting corners on quality. The Flutter codebase is clean, scalable, and easy to maintain. Exceptional team.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, MediTrack",
    content:
      "From wireframes to app store launch, the team was professional at every step. They understood our domain deeply and built something we're truly proud of.",
    rating: 5,
  },
  {
    name: "Ravi Patel",
    role: "Founder, LearnPath",
    content:
      "I was skeptical about Flutter but the team convinced me — and I'm so glad they did. One codebase, two platforms, half the cost. Total game changer.",
    rating: 5,
  },
];

const whyFlutter = [
  "One codebase for iOS & Android — 50% less cost",
  "Native-like performance with smooth 60fps animations",
  "Hot reload for faster iteration cycles",
  "Rich widget library for pixel-perfect UIs",
  "Google-backed with strong long-term support",
  "Trusted by BMW, Alibaba, eBay, and more",
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#027DFD] rounded-full blur-[120px] opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#54C5F8] rounded-full blur-[120px] opacity-15 animate-pulse-slow" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-36 pb-20 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-white/80 text-sm font-medium">Currently accepting new projects</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-bold text-white leading-[1.05] tracking-tight mb-7">
            We build powerful
            <br />
            <span className="gradient-text">cross-platform apps</span>
            <br />
            with Flutter.
          </h1>

          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-slate-400 leading-relaxed mb-10">
            FourStackTech crafts high-quality iOS & Android applications for startups and businesses.
            From UI/UX design to backend integration and app store launch — we handle it all.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-[#027DFD] hover:bg-[#0553B1] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-2xl shadow-blue-900/40 hover:-translate-y-1 hover:shadow-blue-700/50"
            >
              Get a Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium px-6 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm"
            >
              View our work
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Full-stack Flutter
                <br />
                development services.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#027DFD] hover:text-[#0553B1] shrink-0 transition-colors"
            >
              All services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white p-8 hover:bg-blue-50/40 transition-colors duration-300 group cursor-pointer border-b md:border-b-0 last:border-b-0"
              >
                <div className="text-3xl mb-5">{svc.icon}</div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{svc.title}</h3>
                  <span className="text-slate-300 group-hover:text-[#027DFD] transition-colors mt-0.5 shrink-0">
                    <ArrowRight size={18} />
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FLUTTER ──────────────────────────────────── */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">Our Technology</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Why we bet on
                <br />
                <span className="gradient-text">Flutter.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Flutter isn&apos;t just a framework — it&apos;s a strategic advantage. We chose to specialize exclusively in Flutter because it gives our clients the best combination of speed, quality, and cost-efficiency.
              </p>
              <ul className="flex flex-col gap-3">
                {whyFlutter.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#027DFD] mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone mockup */}
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-[480px]">
                {/* Main phone */}
                <div className="absolute left-0 top-0 w-56 h-[420px] bg-slate-900 rounded-[40px] border-4 border-slate-700 shadow-2xl overflow-hidden z-10">
                  <div className="w-full h-6 bg-slate-800 flex items-center justify-center">
                    <div className="w-16 h-3 bg-slate-700 rounded-full" />
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="h-6 w-24 bg-[#027DFD] rounded-lg" />
                    <div className="h-4 w-full bg-slate-700 rounded" />
                    <div className="h-4 w-3/4 bg-slate-700 rounded" />
                    <div className="h-28 w-full bg-gradient-to-br from-[#027DFD] to-[#54C5F8] rounded-2xl mt-2 flex items-center justify-center">
                      <span className="text-3xl">📊</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <div className="h-16 bg-slate-700 rounded-xl" />
                      <div className="h-16 bg-slate-700 rounded-xl" />
                    </div>
                    <div className="h-4 w-full bg-slate-700 rounded" />
                    <div className="h-4 w-2/3 bg-slate-700 rounded" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-14 bg-slate-800 flex items-center justify-around px-6">
                    {["🏠", "🔍", "📋", "👤"].map((icon, i) => (
                      <span key={i} className="text-lg">{icon}</span>
                    ))}
                  </div>
                </div>

                {/* Second phone */}
                <div className="absolute right-0 top-12 w-44 h-[340px] bg-slate-900 rounded-[36px] border-4 border-slate-700 shadow-xl overflow-hidden opacity-70 z-0">
                  <div className="p-3 pt-6 flex flex-col gap-2">
                    <div className="h-5 w-20 bg-[#54C5F8] rounded-lg" />
                    <div className="h-3 w-full bg-slate-700 rounded" />
                    <div className="h-20 w-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mt-2 flex items-center justify-center">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div className="h-3 w-full bg-slate-700 rounded" />
                    <div className="h-3 w-3/4 bg-slate-700 rounded" />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 text-sm font-bold text-slate-900 border border-slate-100 z-20">
                  <span className="text-lg">⚡</span> 60fps
                </div>
                <div className="absolute bottom-4 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 text-sm border border-slate-100 z-20">
                  <p className="font-bold text-slate-900">1 Codebase</p>
                  <p className="text-slate-500 text-xs">iOS + Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────── */}
      <section className="section-pad bg-white" id="case-studies">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">Case Studies</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">Real problems. Real solutions. Real impact.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${cs.color} p-8 flex items-center justify-between`}>
                  <span className="text-5xl">{cs.emoji}</span>
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest bg-white/10 rounded-full px-3 py-1.5">
                    {cs.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{cs.title}</h3>
                    <p className="text-sm text-slate-400">{cs.subtitle}</p>
                  </div>
                  <div className="flex flex-col gap-3 text-sm">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Problem</p>
                      <p className="text-slate-600 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solution</p>
                      <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-[#027DFD] uppercase tracking-wider mb-1">Impact</p>
                      <p className="text-slate-900 font-semibold leading-relaxed">{cs.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-[#027DFD] hover:text-[#027DFD] text-slate-700 font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
            >
              View all case studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-pad bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#54C5F8] uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">What clients say.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#027DFD] to-[#54C5F8] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">How we build.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive into your requirements, audience, and business goals." },
              { step: "02", title: "Design", desc: "Wireframes → high-fidelity Figma designs → prototype sign-off." },
              { step: "03", title: "Build", desc: "Sprint-based Flutter development with weekly demos and reviews." },
              { step: "04", title: "Launch", desc: "QA, app store submission, and post-launch monitoring & support." },
            ].map((phase) => (
              <div key={phase.step} className="relative pl-0">
                <div className="text-7xl font-bold text-slate-100 leading-none mb-4 select-none">{phase.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="bg-[#027DFD] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">Ready to build?</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Let&apos;s turn your idea into
            <br />a powerful mobile app.
          </h2>
          <p className="text-blue-100 text-base mb-8">
            Tell us about your project. We respond within 24 hours — no templates, no spam.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#027DFD] hover:bg-blue-50 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
