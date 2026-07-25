import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — FourStackTech",
  description:
    "Learn about FourStackTech — a Flutter-first app development company built to help startups and businesses ship exceptional mobile apps.",
};

const values = [
  {
    icon: <Target size={24} className="text-[#027DFD]" />,
    title: "Precision-First",
    desc: "We don't rush. Every feature is scoped, designed, built, and tested with deliberate care.",
  },
  {
    icon: <Heart size={24} className="text-[#027DFD]" />,
    title: "Client-Obsessed",
    desc: "We measure success by your success. Weekly demos, full transparency, no surprises.",
  },
  {
    icon: <Zap size={24} className="text-[#027DFD]" />,
    title: "Flutter-Specialized",
    desc: "We go deep, not broad. Our single-framework focus makes us genuinely world-class at Flutter.",
  },
  {
    icon: <Users size={24} className="text-[#027DFD]" />,
    title: "Long-Term Partners",
    desc: "We build lasting relationships. Most of our clients have been with us for multiple projects.",
  },
];

const team = [
  {
    name: "Aryan Kapoor",
    role: "Founder & Lead Flutter Engineer",
    bio: "5+ years in mobile development. Former engineer at a top Indian SaaS startup. Obsessed with clean code and beautiful UIs.",
    emoji: "👨‍💻",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Sneha Reddy",
    role: "Head of UI/UX Design",
    bio: "Design lead with 4+ years crafting mobile experiences. Figma wizard. Believes great design is invisible.",
    emoji: "🎨",
    color: "from-violet-600 to-purple-700",
  },
  {
    name: "Kunal Desai",
    role: "Senior Flutter Developer",
    bio: "BLoC & Riverpod expert. 50+ Flutter widgets authored. Loves performance optimization and complex animations.",
    emoji: "⚡",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "Meera Joshi",
    role: "Backend & API Engineer",
    bio: "Full-stack engineer specializing in Firebase and Node.js. Ensures every app backend is robust and scalable.",
    emoji: "⚙️",
    color: "from-amber-500 to-orange-600",
  },
];

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    desc: "FourStackTech founded with a single mission: build world-class Flutter apps for startups.",
  },
  {
    year: "2022",
    title: "First 10 Apps",
    desc: "Delivered our first 10 production apps across FinTech, EdTech, and HealthTech verticals.",
  },
  {
    year: "2023",
    title: "Scaling Up",
    desc: "Grew the team to 8 engineers. Launched MediTrack — our most complex project to date.",
  },
  {
    year: "2024",
    title: "50+ Apps Delivered",
    desc: "Crossed 50 apps delivered. 98% client satisfaction. Expanded into international markets.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#027DFD] rounded-full blur-[150px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#54C5F8] uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              We&apos;re a team of
              <br />
              <span className="gradient-text">Flutter specialists.</span>
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              FourStackTech is a Flutter-first app development company. We partner with startups and businesses to build high-quality mobile apps that look incredible, perform flawlessly, and launch on time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Built by engineers,
                <br />for founders.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-5">
                FourStackTech was founded in 2021 by a team of mobile engineers who saw a gap: most agencies were generalists who built everything and mastered nothing.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                We made a deliberate choice — specialize exclusively in Flutter. That bet paid off. Today, we&apos;re one of the most sought-after Flutter shops in the region, trusted by VC-backed startups and established businesses alike.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Our clients don&apos;t just get an app — they get a technical partner who cares about their product as much as they do. We stay involved through launch, maintenance, and beyond.
              </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#027DFD] flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-slate-200 my-1" />
                    )}
                  </div>
                  <div className="pb-10">
                    <p className="text-[#027DFD] text-sm font-bold mb-1">{item.year}</p>
                    <h3 className="text-slate-900 font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-pad bg-[#027DFD]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-6">
            Our Mission
          </p>
          <blockquote className="text-3xl lg:text-4xl font-bold text-white leading-relaxed">
            &ldquo;To help every ambitious founder and business bring their mobile app vision to life — with technical excellence, design craftsmanship, and a partnership that lasts beyond launch day.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Our values.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 hover:bg-blue-50/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#027DFD] uppercase tracking-widest mb-3">
              The Team
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              People behind the apps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${member.color} h-32 flex items-center justify-center`}>
                  <span className="text-5xl">{member.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-[#027DFD] text-xs font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Flutter */}
      <section className="section-pad bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-[#54C5F8] uppercase tracking-widest mb-3">
                Our Approach
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Why Flutter-only?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                When you hire a Flutter specialist, you get engineers who eat, sleep, and breathe the framework. We don&apos;t split our attention between React Native, native iOS, native Android, and Flutter.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                Specialization means we solve Flutter-specific problems faster, write better Dart code, know every widget quirk, and can architect complex apps without guesswork.
              </p>
              <p className="text-slate-400 leading-relaxed">
                The result? Apps that are built right the first time — not hacked together and refactored later.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "50+", label: "Apps shipped" },
                { metric: "3+", label: "Years in Flutter" },
                { metric: "98%", label: "Client satisfaction" },
                { metric: "100%", label: "Flutter focus" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl font-bold text-[#027DFD] mb-2">{stat.metric}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Ready to work together?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            We&apos;d love to hear about your project. Let&apos;s have a no-obligation discovery call.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#027DFD] hover:bg-[#0553B1] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-200"
          >
            Let&apos;s Talk <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
