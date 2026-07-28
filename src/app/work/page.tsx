import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Calendar, Building2, CheckCircle2, ArrowRight, Code2, Sparkles, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Experience — FourStackTech",
  description:
    "Professional experience and track record in building multi-platform Flutter applications, clean architecture, and cloud backends.",
};

const experiences = [
  {
    role: "Senior Flutter Developer",
    type: "Freelance / Contract",
    company: "Global Clients",
    period: "Feb 2024 – Present",
    isCurrent: true,
    badge: "Current Role",
    accentBg: "bg-slate-100 text-slate-900",
    highlights: [
      "Architected and scaled multi-platform Flutter applications using modular, Clean Architecture-based codebases, cutting feature-integration time by approximately 35%.",
      "Partnered directly with global clients to scope requirements, define UI/UX direction, and compress delivery timelines from concept to launch.",
      "Eliminated rendering bottlenecks and optimized state-management lifecycles, improving app responsiveness while reducing device memory and battery consumption.",
      "Designed and built secure cloud backends on Firebase and Supabase with robust RESTful API integrations enabling real-time data sync across platforms.",
      "Mentored junior engineers on implementation best practices, test-driven development, and code documentation standards, raising overall team code quality."
    ],
    techStack: [
      "Flutter", "Dart", "Clean Architecture", "Firebase", "Supabase", 
      "RESTful APIs", "State Management", "TDD", "Performance Tuning"
    ],
    metrics: [
      { value: "35%", label: "Faster Feature Delivery" },
      { value: "Multi-Platform", label: "iOS & Android Apps" },
      { value: "Real-time", label: "Firebase & Supabase Sync" }
    ]
  },
  {
    role: "Junior Flutter Developer",
    type: "Full-Time",
    company: "Zeron SYS",
    period: "Feb 2022 – Feb 2024",
    isCurrent: false,
    badge: "2 Years",
    accentBg: "bg-teal-50 text-teal-700",
    highlights: [
      "Built multi-platform applications in Flutter and native Android modules in Java, owning delivery across the full development-to-deployment lifecycle.",
      "Converted design wireframes into pixel-perfect, responsive, brand-consistent customer-facing screens, improving UI consistency across releases.",
      "Wrote clean, well-tested, documented code, running unit-level diagnostics and automated QA checks prior to every release."
    ],
    techStack: [
      "Flutter", "Dart", "Java", "Android Native", "Responsive UI", 
      "Unit Testing", "Automated QA", "Git"
    ],
    metrics: [
      { value: "100%", label: "Pixel-Perfect Conversion" },
      { value: "Full Lifecycle", label: "Dev to App Deployment" }
    ]
  },
  {
    role: "Flutter Developer (Trainee)",
    type: "Training & Internship",
    company: "Creative Design and Multimedia Institute",
    period: "Feb 2021 – Feb 2022",
    isCurrent: false,
    badge: "1 Year",
    accentBg: "bg-purple-50 text-purple-700",
    highlights: [
      "Learned Flutter/Dart fundamentals by building UI components and sample applications under senior developer guidance.",
      "Contributed to bug fixes, small feature builds, and unit tests, establishing a strong foundation in mobile application development.",
      "Gained hands-on experience with Git version control, Agile sprint ceremonies, and collaborative code review."
    ],
    techStack: [
      "Flutter Fundamentals", "Dart", "Git / GitHub", "Agile & Sprints", "UI Components"
    ],
    metrics: [
      { value: "Agile", label: "Sprint Ceremonies" },
      { value: "Solid Core", label: "Dart & Flutter Architecture" }
    ]
  }
];

export default function WorkPage() {
  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F8FAFC] relative overflow-hidden text-slate-900">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-900 rounded-full blur-[150px] opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-15" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm backdrop-blur border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Briefcase size={16} className="text-slate-500" />
            <span className="text-slate-900/90 text-xs font-semibold uppercase tracking-widest">
              Professional Experience
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Proven track record in <br />
            <span className="gradient-text">Flutter Development</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            From trainee to Senior Flutter Architect — over 4 years of hands-on experience crafting high-performance, multi-platform applications, scalable backend integrations, and clean codebases.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-200 pt-10">
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4">
              <div className="text-3xl font-bold text-slate-900 mb-1">4+</div>
              <div className="text-slate-600 text-xs font-medium">Years Experience</div>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4">
              <div className="text-3xl font-bold text-slate-500 mb-1">35%</div>
              <div className="text-slate-600 text-xs font-medium">Faster Integration</div>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4">
              <div className="text-3xl font-bold text-emerald-400 mb-1">Clean</div>
              <div className="text-slate-600 text-xs font-medium">Architecture Focus</div>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">Full-Stack</div>
              <div className="text-slate-600 text-xs font-medium">Firebase &amp; Supabase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Experience Timeline Section */}
      <section className="py-20 lg:py-28 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Work Experience
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            Detailed breakdown of roles, responsibilities, and technical achievements.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-6 md:pl-12 flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] md:-left-[57px] top-6 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white border-4 ${
                  exp.isCurrent ? "border-slate-900" : "border-slate-400"
                } shadow-md group-hover:scale-125 transition-transform duration-300`}
              />

              {/* Experience Card */}
              <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${exp.accentBg}`}>
                        {exp.badge}
                      </span>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                        <Building2 size={12} />
                        {exp.company}
                      </span>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 bg-slate-50 border border-slate-200/60 px-4 py-2 rounded-xl shrink-0">
                    <Calendar size={16} className="text-slate-900" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Metrics Badges */}
                {exp.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-slate-50 border border-slate-100 rounded-2xl p-3.5 text-center"
                      >
                        <div className="text-lg md:text-xl font-bold text-slate-900">
                          {m.value}
                        </div>
                        <div className="text-slate-500 text-xs font-medium mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights List */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles size={14} className="text-slate-900" />
                    Key Responsibilities &amp; Impact
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-slate-900 shrink-0 mt-0.5"
                        />
                        <span className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Code2 size={14} className="text-slate-500" />
                    Technologies &amp; Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-100 hover:text-slate-900 transition-colors px-3.5 py-1.5 rounded-xl border border-slate-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-2 mb-6">
            <TrendingUp size={16} className="text-emerald-400" />
            <span className="text-xs font-semibold text-slate-900/90">Ready for Next Challenge</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Looking for a Senior Flutter Developer for your project?
          </h2>

          <p className="text-slate-600 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Whether you need a full app build from scratch, performance optimization, or architecture consulting — let&apos;s discuss how we can work together.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-xl shadow-slate-900/40 hover:-translate-y-0.5"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
