import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Flutter Development", href: "/services#flutter" },
    { label: "UI/UX Design", href: "/services#design" },
    { label: "Backend Integration", href: "/services#backend" },
    { label: "App Store Deployment", href: "/services#deployment" },
    { label: "MVP Development", href: "/services#mvp" },
  ],
  Resources: [
    { label: "Case Studies", href: "/work#case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-5">
              <Image
                src="/Logo.png"
                alt="FourStackTech Logo"
                width={200}
                height={70}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              We build powerful, cross-platform mobile applications with Flutter — helping startups and businesses launch faster with beautiful, scalable products.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#027DFD]" />
                <span>hello@fourstacktech.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#027DFD]" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#027DFD]" />
                <span>Remote · Worldwide</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#027DFD] flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} FourStackTech. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with
            <span className="text-[#027DFD] font-semibold"> Flutter </span>
            expertise &amp;
            <span className="text-[#027DFD] font-semibold"> Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
