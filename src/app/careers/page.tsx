"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { ArrowRight, MapPin, Clock, X, Upload, CheckCircle2, User, Mail, Phone, FileText, Sparkles, Send } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const openRoles = [
  {
    title: "Flutter Developer",
    type: "Full-time",
    location: "Remote (Surat / Bangalore)",
    experience: "Fresher",
    description:
      "Build cross-platform mobile apps in Flutter. Strong understanding of Dart fundamentals, widget lifecycles, and UI design.",
    requirements: [
      "Fresher / Entry-level",
      "Solid understanding of Flutter & Dart basics",
      "Knowledge of REST APIs and state management (Provider/Riverpod/BLoC)",
      "Good understanding of Git version control",
      "Strong passion for mobile application development",
    ],
    emoji: "📱",
    color: "from-slate-600 to-slate-800",
  },
  {
    title: "React Native Developer",
    type: "Full-time",
    location: "Remote (Surat / Bangalore)",
    experience: "Fresher",
    description:
      "Craft smooth React Native mobile apps for iOS and Android. Translate designs into responsive JavaScript/TypeScript code.",
    requirements: [
      "Fresher / Entry-level",
      "Strong JavaScript / TypeScript fundamentals",
      "Basic understanding of React Native & React hooks",
      "Familiarity with Redux / Context API and REST APIs",
      "Eager to learn mobile app development best practices",
    ],
    emoji: "⚛️",
    color: "from-slate-500 to-slate-700",
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote (Surat / Bangalore)",
    experience: "1 Year Experience",
    description:
      "Design, build, and maintain scalable APIs, databases, and server architecture supporting our mobile applications.",
    requirements: [
      "1 year of backend development experience",
      "Proficiency in Node.js, Python, or Go",
      "Experience with PostgreSQL, MongoDB, or Firebase",
      "RESTful API design and authentication (JWT/OAuth)",
      "Understanding of cloud deployment & Git",
    ],
    emoji: "⚙️",
    color: "from-emerald-600 to-teal-700",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Remote (Surat / Bangalore)",
    experience: "Fresher",
    description:
      "Drive brand visibility, lead generation, and social media presence for FourStackTech across major digital platforms.",
    requirements: [
      "Fresher / Entry-level",
      "Good understanding of SEO, Content Marketing & Social Media",
      "Familiarity with Google Analytics & Ads tools",
      "Strong written and verbal communication skills",
      "Creative mindset for campaign planning & execution",
    ],
    emoji: "📈",
    color: "from-violet-600 to-purple-800",
  },
];

const perks = [
  { emoji: "🏠", title: "Remote Work", desc: "Work remotely from Surat or Bangalore." },
  { emoji: "🚀", title: "Fast Growth", desc: "Small team, high impact. Your work ships to real users quickly." },
  { emoji: "🧠", title: "Mentorship", desc: "Learn directly from senior engineers and architects." },
  { emoji: "🛠️", title: "Modern Tech", desc: "Work with Flutter, React Native, Node.js, and cloud backends." },
  { emoji: "⚡", title: "Full Ownership", desc: "Own your tasks end-to-end and build real portfolio projects." },
  { emoji: "🤝", title: "Collaborative Team", desc: "Friendly, open, and async-first team culture." },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openApplyModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setIsSubmitted(false);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("fullName", fullName);
      data.append("email", email);
      data.append("phone", phone);
      data.append("location", location);
      data.append("selectedJob", selectedJob || "");
      data.append("githubUrl", githubUrl);
      data.append("linkedinUrl", linkedinUrl);
      data.append("message", message);
      if (cvFile) {
        data.append("cvFile", cvFile);
      }

      await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  // Generate mailto link for direct sending
  const mailtoSubject = encodeURIComponent(`Job Application: ${selectedJob} - ${fullName}`);
  const mailtoBody = encodeURIComponent(
    `Hello FourStackTech Team,\n\nI am applying for the role of ${selectedJob}.\n\nCandidate Details:\n- Name: ${fullName}\n- Email: ${email}\n- Phone: ${phone}\n- Location: ${location}\n- GitHub: ${githubUrl || "N/A"}\n- LinkedIn: ${linkedinUrl || "N/A"}\n- Note: ${message || "N/A"}\n- CV Attached: ${cvFile ? cvFile.name : "Yes"}\n\nBest regards,\n${fullName}`
  );
  const mailtoLink = `mailto:fourstacktech02@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-64 bg-[#54C5F8] rounded-full blur-[150px] opacity-30" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-slate-200 rounded-full px-4 py-2 mb-6 text-xs text-slate-900/90 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            4 Open Positions · Remote (Surat / Bangalore)
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Build the future
            <br />
            <span className="gradient-text">with us.</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            We&apos;re hiring passionate engineers and marketers to join our remote team in Surat and Bangalore.
          </p>


        </div>
      </section>

      {/* Perks */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3">
              Why FourStackTech?
            </p>
            <h2 className="text-4xl font-bold text-slate-900">Perks &amp; Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white p-8 hover:bg-slate-100/50 transition-colors">
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
            <p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3">
              Open Positions
            </p>
            <h2 className="text-4xl font-bold text-slate-900">We&apos;re hiring.</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              4 open roles · Full-time · Remote (Surat / Bangalore)
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-8 flex flex-col lg:flex-row gap-8">
                  {/* Left: Role info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-2xl">{role.emoji}</span>
                      <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-5">
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">
                        <MapPin size={14} className="text-slate-900" />
                        {role.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">
                        <Clock size={14} className="text-slate-900" />
                        {role.type} · {role.experience}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {role.description}
                    </p>

                    <div>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3">
                        Requirements
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {role.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-slate-900 mt-0.5 shrink-0">✓</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Apply Button */}
                  <div className="flex flex-col justify-center items-start lg:items-center gap-4 lg:pl-8 lg:border-l border-slate-100 shrink-0">
                    <button
                      type="button"
                      onClick={() => openApplyModal(role.title)}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Apply Now <ArrowRight size={16} />
                    </button>
                    <p className="text-slate-600 text-xs text-center">
                      Or email your CV &amp; GitHub to
                      <br />
                      <a href="mailto:fourstacktech02@gmail.com" className="text-slate-900 hover:underline font-semibold">
                        fourstacktech02@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── JOB APPLICATION MODAL ────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-100 via-white to-slate-100 text-slate-900 p-6 md:p-8 text-center relative">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white shadow-sm hover:bg-slate-50 text-slate-900/80 hover:text-slate-900 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="inline-flex items-center gap-1.5 bg-slate-900/20 border border-slate-900/40 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <Sparkles size={12} />
                Job Application
              </div>

              {/* TOP MIDDLE JOB TITLE */}
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                {selectedJob}
              </h2>
              <p className="text-slate-600 text-xs md:text-sm mt-1">
                Full-time · Remote (Surat / Bangalore)
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Application Details Processed!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
                    We have recorded your details for <strong className="text-slate-900">{selectedJob}</strong>. Click below to directly send your application email &amp; CV attachment to <span className="text-slate-900 font-semibold">fourstacktech02@gmail.com</span>:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center mb-4">
                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      <Send size={16} />
                      Send Email to fourstacktech02@gmail.com
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-slate-500 hover:text-slate-900 text-xs font-semibold underline mt-2"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3.5 text-slate-600" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-3.5 text-slate-600" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rahul@example.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-3.5 text-slate-600" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Current Location <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-3.5 top-3.5 text-slate-600" />
                        <input
                          type="text"
                          required
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Surat / Bangalore / City"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* GitHub & LinkedIn Profiles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* GitHub Profile */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        GitHub / Portfolio <span className="text-slate-600 font-normal text-[11px]">(optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-3.5 text-slate-600">
                          <GithubIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="url"
                          value={githubUrl}
                          onChange={(e) => setGithubUrl(e.target.value)}
                          placeholder="https://github.com/username"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* LinkedIn Profile */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        LinkedIn Profile <span className="text-slate-600 font-normal text-[11px]">(optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-3.5 text-slate-600">
                          <LinkedinIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="url"
                          value={linkedinUrl}
                          onChange={(e) => setLinkedinUrl(e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Upload CV / Resume */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Upload Resume / CV <span className="text-red-500">*</span>
                    </label>
                    <label
                      htmlFor="cv-file-picker"
                      className="relative block border-2 border-dashed border-slate-300 hover:border-slate-900 rounded-2xl p-5 text-center bg-slate-50 hover:bg-slate-100/50 transition-all cursor-pointer group"
                    >
                      <input
                        id="cv-file-picker"
                        type="file"
                        required={!cvFile}
                        accept="application/pdf,.pdf,.doc,.docx,application/msword"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                      />
                      <div className="flex flex-col items-center justify-center gap-2 pointer-events-none relative z-10">
                        <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Upload size={20} />
                        </div>
                        {cvFile ? (
                          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
                            <FileText size={18} className="text-slate-900" />
                            <span className="truncate max-w-[200px] sm:max-w-xs">{cvFile.name}</span>
                            <span className="text-xs text-slate-600 font-normal">
                              ({(cvFile.size / (1024 * 1024)).toFixed(2)} MB)
                            </span>
                          </div>
                        ) : (
                          <>
                            <p className="text-sm font-bold text-slate-800">
                              Click or drag &amp; drop to upload CV / Resume
                            </p>
                            <p className="text-xs text-slate-500">
                              PDF, DOC, or DOCX accepted (Max 10MB)
                            </p>
                            <span className="mt-1 inline-flex items-center gap-1.5 bg-slate-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                              Browse File
                            </span>
                          </>
                        )}
                      </div>
                    </label>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Short Note / Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us a little about your projects or experience..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
