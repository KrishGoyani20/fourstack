import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — FourStackTech",
  description:
    "Case studies and portfolio of Flutter apps built by FourStackTech — FinTech, HealthTech, EdTech, and more.",
};

const projects = [
  {
    id: "smartwallet",
    tag: "FinTech",
    emoji: "💳",
    title: "SmartWallet",
    subtitle: "Digital Banking & Wallet App",
    description:
      "A full-featured digital banking app with biometric authentication, instant transfers, and real-time spending insights.",
    problem:
      "A funded fintech startup needed a polished digital wallet MVP to demonstrate to Series A investors within a tight 10-week window. They had limited technical resources and needed end-to-end delivery.",
    solution:
      "We delivered a Flutter app with Firebase backend, biometric login (Face ID / fingerprint), real-time Firestore transaction ledger, push notifications for transactions, and a clean analytics dashboard. CI/CD was set up from day one.",
    impact: [
      "₹2 Crore seed investment secured 3 months post-launch",
      "10,000+ registered users in first 60 days",
      "4.7★ rating on Play Store at launch",
      "Zero critical bugs in first 90 days",
    ],
    platforms: ["iOS", "Android"],
    duration: "10 weeks",
    color: "from-blue-600 to-blue-800",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "BLoC", "Biometric Auth"],
  },
  {
    id: "meditrack",
    tag: "HealthTech",
    emoji: "🏥",
    title: "MediTrack",
    subtitle: "Patient & Clinic Management Platform",
    description:
      "A cross-platform patient management system for a multi-branch clinic chain, with offline sync and doctor dashboards.",
    problem:
      "A growing clinic chain with 12 branches was managing patient records on paper and spreadsheets. Data was fragmented, appointments were missed, and billing was a mess.",
    solution:
      "We built a comprehensive Flutter app with role-based access (receptionist, doctor, admin), offline-first SQLite + Firestore sync, appointment scheduling, digital prescriptions, and PDF report generation.",
    impact: [
      "70% reduction in administrative overhead",
      "Zero data loss incidents after system rollout",
      "3x faster patient check-in process",
      "Deployed across all 12 branches",
    ],
    platforms: ["iOS", "Android", "iPad"],
    duration: "14 weeks",
    color: "from-emerald-600 to-teal-700",
    tech: ["Flutter", "SQLite", "Firebase", "Hive", "Riverpod", "PDF Generation"],
  },
  {
    id: "learnpath",
    tag: "EdTech",
    emoji: "📚",
    title: "LearnPath",
    subtitle: "Interactive E-Learning Platform",
    description:
      "An engaging mobile learning platform with video courses, quizzes, gamification, and Razorpay payment integration.",
    problem:
      "An edtech founder had validated their content model but needed a mobile-first platform that could compete with established players — without an enterprise budget.",
    solution:
      "We designed and built a Flutter app with video streaming (HLS), interactive quizzes, progress tracking, achievement badges, instructor dashboards, and seamless Razorpay subscription payments.",
    impact: [
      "5,000+ learners onboarded in Month 1",
      "Rated 4.8★ on Google Play Store",
      "₹15L MRR achieved by Month 3",
      "92% course completion rate (vs. 30% industry avg)",
    ],
    platforms: ["iOS", "Android"],
    duration: "12 weeks",
    color: "from-violet-600 to-purple-800",
    tech: ["Flutter", "Dart", "Node.js", "Razorpay", "HLS Streaming", "Firebase"],
  },
  {
    id: "logistiq",
    tag: "Logistics",
    emoji: "🚚",
    title: "LogistiQ",
    subtitle: "Real-Time Fleet Tracking App",
    description:
      "A driver + dispatcher app for a logistics company with live GPS tracking, route optimization, and delivery confirmation.",
    problem:
      "A mid-sized logistics company had no visibility into their fleet — dispatchers called drivers manually, and customers had no way to track deliveries.",
    solution:
      "Two Flutter apps (driver & dispatcher) with real-time Google Maps integration, automated route optimization, push notifications, digital POD (proof of delivery) with signature capture.",
    impact: [
      "40% improvement in on-time delivery rate",
      "60% reduction in customer service calls",
      "Real-time visibility for 80+ fleet vehicles",
      "Integrated with existing ERP system",
    ],
    platforms: ["Android"],
    duration: "16 weeks",
    color: "from-amber-500 to-orange-600",
    tech: ["Flutter", "Google Maps SDK", "WebSockets", "PostgreSQL", "Django REST"],
  },
];

export default function WorkPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#027DFD] rounded-full blur-[150px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
          <p className="text-xs font-semibold text-[#54C5F8] uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Work that speaks
            <br />
            <span className="gradient-text">for itself.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every project is a story of a problem solved, a product launched, and a client delighted. Here&apos;s our track record.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white" id="case-studies">
        {projects.map((project, i) => (
          <article
            key={project.id}
            id={project.id}
            className="border-b border-slate-100 last:border-none"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <span
                  className={`inline-block bg-gradient-to-r ${project.color} text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full`}
                >
                  {project.tag}
                </span>
                {project.platforms.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full"
                  >
                    {p}
                  </span>
                ))}
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                  {project.duration}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  {/* App visual */}
                  <div className={`bg-gradient-to-br ${project.color} rounded-2xl p-10 flex items-center justify-center min-h-[300px] relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full" />
                    </div>
                    <div className="relative text-center">
                      <div className="text-8xl mb-4">{project.emoji}</div>
                      <h3 className="text-white font-bold text-2xl">{project.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Tech Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {project.title} — {project.subtitle}
                  </h2>
                  <p className="text-slate-500 text-base leading-relaxed mb-10">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                          <span className="text-red-500 text-xs font-bold">P</span>
                        </div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          The Problem
                        </p>
                      </div>
                      <p className="text-slate-600 leading-relaxed pl-9">{project.problem}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-[#027DFD] text-xs font-bold">S</span>
                        </div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Our Solution
                        </p>
                      </div>
                      <p className="text-slate-600 leading-relaxed pl-9">{project.solution}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 text-xs font-bold">R</span>
                        </div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Results & Impact
                        </p>
                      </div>
                      <ul className="pl-9 flex flex-col gap-2">
                        {project.impact.map((result) => (
                          <li
                            key={result}
                            className="flex items-start gap-2 text-slate-900 font-medium text-sm"
                          >
                            <span className="text-green-500 mt-0.5">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-4">
            Your project next?
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let&apos;s build something
            <br />
            remarkable together.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#027DFD] hover:bg-[#0553B1] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-200"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
