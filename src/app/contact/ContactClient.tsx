"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

const SocialLinkedIn = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const SocialGithub = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const SocialTwitter = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $50,000",
  "$50,000+",
  "Let's discuss",
];

const projectTypes = [
  "New App (from scratch)",
  "MVP Development",
  "App Redesign / Rebuild",
  "Backend Integration",
  "App Maintenance",
  "UI/UX Design Only",
  "Other",
];

export default function ContactClientPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#027DFD] rounded-full blur-[150px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
          <p className="text-xs font-semibold text-[#54C5F8] uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Let&apos;s build
            <br />
            <span className="gradient-text">something great.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tell us about your project. We&apos;ll get back to you within 24 hours with a custom
            response — no templates, no spam.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in touch</h2>

              <div className="flex flex-col gap-6 mb-10">
                {[
                  { Icon: Mail, label: "Email", value: "hello@fourstacktech.com", href: "mailto:hello@fourstacktech.com" },
                  { Icon: Phone, label: "Phone / WhatsApp", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#027DFD]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm mb-1">{label}</p>
                      <a href={href} className="text-slate-500 text-sm hover:text-[#027DFD] transition-colors">{value}</a>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#027DFD]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">Location</p>
                    <p className="text-slate-500 text-sm">Remote · Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Connect</p>
                <div className="flex items-center gap-3">
                  {[
                    { comp: <SocialLinkedIn />, href: "#", label: "LinkedIn" },
                    { comp: <SocialGithub />, href: "#", label: "GitHub" },
                    { comp: <SocialTwitter />, href: "#", label: "Twitter" },
                  ].map(({ comp, href, label }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#027DFD] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200">
                      {comp}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <p className="text-sm font-semibold text-slate-900">Quick Response Guaranteed</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We respond to all inquiries within 24 hours — usually much faster. Expect a real, thoughtful reply — not a template.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center min-h-[500px] text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Message sent! 🎉</h3>
                  <p className="text-slate-500 max-w-sm">
                    Thanks for reaching out. We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#027DFD] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#027DFD] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company / Startup Name
                    </label>
                    <input id="contact-company" name="company" type="text" value={form.company} onChange={handleChange}
                      placeholder="Acme Inc. (optional)"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#027DFD] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-project-type" className="block text-sm font-semibold text-slate-700 mb-2">
                        Project Type *
                      </label>
                      <select id="contact-project-type" name="projectType" required value={form.projectType} onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#027DFD] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900 bg-white">
                        <option value="">Select project type</option>
                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-semibold text-slate-700 mb-2">
                        Budget Range
                      </label>
                      <select id="contact-budget" name="budget" value={form.budget} onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#027DFD] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900 bg-white">
                        <option value="">Select budget range</option>
                        {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea id="contact-message" name="message" required rows={6} value={form.message} onChange={handleChange}
                      placeholder="Describe your app idea, what problem it solves, your target users, and any key features you have in mind..."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#027DFD] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-slate-900 placeholder:text-slate-400 resize-none" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-[#027DFD] hover:bg-[#0553B1] disabled:bg-slate-300 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5">
                    {loading ? (
                      <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={18} />Send Message</>
                    )}
                  </button>
                  <p className="text-slate-400 text-xs">
                    By submitting this form, you agree to our privacy policy. We never share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "How long does it take to build a Flutter app?", a: "Timelines vary by complexity. A basic MVP typically takes 6–10 weeks. A full-featured app can take 12–20 weeks. We scope every project individually and give you a detailed timeline before we start." },
              { q: "Do you work with startups at ideation stage?", a: "Yes. We love working with founders from the very beginning — product scoping, feature prioritization, and UI/UX strategy included. You don't need a fully formed spec to reach out." },
              { q: "How does pricing work?", a: "We price projects on a fixed-scope or time-and-materials basis depending on your needs. We provide a detailed quote after a discovery call. No hidden fees." },
              { q: "Will I own the source code?", a: "Absolutely. Full IP ownership is transferred to you upon final payment. You get everything — source code, Figma files, documentation, and deployment credentials." },
              { q: "Do you provide post-launch support?", a: "Yes. We offer monthly maintenance retainers, priority bug fixes, and ongoing feature development. Most of our clients stay with us long-term." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-slate-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
