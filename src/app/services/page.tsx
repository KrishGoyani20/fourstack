import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";

export const metadata: Metadata = {
  title: "Services — FourStackTech",
  description:
    "Flutter app development, UI/UX design, backend integration, MVP development, and app store deployment services for startups and businesses.",
};

const services = [
  {
    id: "flutter",
    icon: "📱",
    number: "01",
    title: "Flutter App Development",
    tagline: "One codebase. Two platforms. Zero compromise.",
    description:
      "We specialize exclusively in Flutter — Google's UI toolkit for building natively compiled applications for mobile. Our team writes clean, maintainable Dart code that delivers native performance on both iOS and Android.",
    features: [
      "Native-performance iOS & Android apps",
      "Clean Dart architecture (Clean Architecture / BLoC)",
      "State management with BLoC, Riverpod, or Provider",
      "Custom animations and complex UI",
      "Thorough testing (unit, widget, integration)",
    ],
    color: "from-slate-600 to-slate-800",
  },
  {
    id: "design",
    icon: "🎨",
    number: "02",
    title: "UI/UX Design",
    tagline: "Design that users love. Interfaces that convert.",
    description:
      "Great apps start with great design. We create human-centered experiences that are intuitive, beautiful, and aligned with your brand identity. Every pixel is intentional.",
    features: [
      "User research & persona development",
      "Information architecture & user flows",
      "Wireframing & interactive prototyping",
      "High-fidelity Figma designs",
      "Design system creation",
      "Usability testing",
    ],
    color: "from-violet-600 to-purple-800",
  },
  {
    id: "backend",
    icon: "⚙️",
    number: "03",
    title: "Backend & API Integration",
    tagline: "Powerful apps need powerful infrastructure.",
    description:
      "We build and integrate robust backend systems that power your app — whether that's Firebase for rapid prototyping, or custom REST/GraphQL APIs for enterprise needs.",
    features: [
      "Firebase (Auth, Firestore, Cloud Functions)",
      "REST & GraphQL API development",
      "Node.js / Django backend development",
      "Real-time features with WebSockets",
      "Third-party API integrations (Stripe, Twilio, etc.)",
      "Database design and optimization",
    ],
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: "mvp",
    icon: "⚡",
    number: "04",
    title: "MVP Development",
    tagline: "Launch faster. Learn sooner. Spend smarter.",
    description:
      "We help startups validate their ideas with a lean, well-scoped MVP that focuses on the features that matter most. Get to market in weeks, not months.",
    features: [
      "Product scoping & feature prioritization",
      "Rapid prototyping in Flutter",
      "Launch-ready in 6-10 weeks",
      "Investor-ready demos",
      "Post-MVP roadmap planning",
    ],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "deployment",
    icon: "🚀",
    number: "05",
    title: "App Store Deployment",
    tagline: "From build to live — without the headaches.",
    description:
      "Publishing on the App Store and Google Play can be complex. We handle the entire process — provisioning, certificates, review guidelines, and optimization.",
    features: [
      "Apple App Store submission & review",
      "Google Play Store submission",
      "ASO (App Store Optimization)",
      "CI/CD pipeline setup (GitHub Actions / Fastlane)",
      "Crash monitoring (Sentry, Firebase Crashlytics)",
    ],
    color: "from-rose-500 to-red-700",
  },
  {
    id: "maintenance",
    icon: "🛠️",
    number: "06",
    title: "App Maintenance & Support",
    tagline: "We don't disappear after launch.",
    description:
      "Your app is a living product. We provide ongoing maintenance, performance monitoring, feature additions, and bug fixes to keep your app competitive.",
    features: [
      "Monthly maintenance retainers",
      "Flutter SDK version upgrades",
      "Performance monitoring & optimization",
      "User feedback implementation",
      "Priority bug fixes & hot fixes",
    ],
    color: "from-slate-600 to-slate-800",
  },
];

const techStack = [
  { category: "Frontend", items: ["Flutter", "Dart", "Figma"] },
  { category: "Backend", items: ["Firebase", "Node.js", "Django", "PostgreSQL"] },
  { category: "Integrations", items: ["Stripe", "Twilio", "Razorpay", "Mapbox"] },
  { category: "DevOps", items: ["GitHub Actions", "Fastlane", "Docker", "GCP"] },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-slate-900 rounded-full blur-[150px] opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            End-to-end Flutter
            <br />
            <span className="gradient-text">development services.</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From ideation to app store launch, we provide every service your mobile product needs — under one roof, with one team.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        {services.map((svc, i) => (
          <div
            key={svc.id}
            id={svc.id}
            className={`border-b border-slate-100 ${i % 2 === 1 ? "bg-[#F8FAFC]" : "bg-white"}`}
          >
            <FadeInView className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{svc.icon}</span>
                    <span className="text-7xl font-bold text-slate-100 leading-none">
                      {svc.number}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                    {svc.title}
                  </h2>
                  <p className="text-slate-900 font-semibold text-base mb-5">
                    {svc.tagline}
                  </p>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {svc.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-slate-200"
                  >
                    Discuss this service <ArrowRight size={16} />
                  </Link>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`bg-gradient-to-br ${svc.color} rounded-2xl p-8`}>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-5">
                      What&apos;s included
                    </p>
                    <ul className="flex flex-col gap-3">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-white/80 mt-0.5 shrink-0" />
                          <span className="text-white text-sm leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        ))}
      </section>

      {/* Tech Stack */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <h2 className="text-4xl font-bold text-slate-900">Our toolkit.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((group, idx) => (
              <FadeInView
                key={group.category}
                delay={idx * 0.1}
                className="bg-slate-100 border border-slate-200 rounded-2xl p-6"
              >
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                  {group.category}
                </p>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-slate-500 text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-slate-200 text-lg mb-8">
            Tell us about your project and get a custom quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-full text-base hover:bg-slate-100 transition-all duration-200 shadow-xl"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
