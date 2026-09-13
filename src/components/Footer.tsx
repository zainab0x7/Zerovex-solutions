<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe, Instagram, Twitter } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-8 text-zinc-400">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-zinc-800">
          
          {/* Brand Info */}
          <div className="space-y-4 lg:pr-4">
            <Link href="/" className="inline-block">
              <Image
                src="/zerovex-logo.jpg"
                alt="ZERO VEX SOLUTIONS"
                width={170}
                height={55}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-xs font-mono tracking-widest text-[#E31B2B] uppercase font-semibold">
              {companyInfo.positioning}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {companyInfo.positioningStatement}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <div className="w-8 h-[2px] bg-[#E31B2B]" />
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#E31B2B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E31B2B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#E31B2B] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#E31B2B] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#E31B2B] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E31B2B] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <div className="w-8 h-[2px] bg-[#E31B2B]" />
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/custom-development" className="hover:text-[#E31B2B] transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-[#E31B2B] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design" className="hover:text-[#E31B2B] transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-[#E31B2B] transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-[#E31B2B] transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/website-maintenance" className="hover:text-[#E31B2B] transition-colors">
                  Website Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Info</h3>
            <div className="w-8 h-[2px] bg-[#E31B2B]" />
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#E31B2B] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-500 font-mono">WHATSAPP / CALL</span>
                  <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium transition-colors">
                    {companyInfo.whatsapp}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#E31B2B] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-500 font-mono">EMAIL</span>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-white font-medium transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-[#E31B2B] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-zinc-500 font-mono">WEBSITE</span>
                  <a href={companyInfo.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium transition-colors">
                    {companyInfo.website}
                  </a>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyInfo.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#E31B2B] hover:border-[#E31B2B] transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={companyInfo.xLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#E31B2B] hover:border-[#E31B2B] transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#E31B2B] hover:border-[#E31B2B] transition-colors text-xs font-semibold"
              >
                WA
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} ZERO VEX SOLUTIONS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>{companyInfo.positioning}</span>
            <span>•</span>
            <span>{companyInfo.tagline}</span>
=======
import Image from "next/image";
import Link from "next/link";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  services: [
    { name: "AI Automation", href: "/services#ai-automation" },
    { name: "Web Development", href: "/services#web-development" },
    { name: "SaaS Development", href: "/services#saas-development" },
    { name: "Business Systems", href: "/services#business-systems" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black py-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-red-500/5 blur-[100px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-8 flex flex-col items-start">
              <Image src="/logogency.png" alt="Zerovex Solutions" width={120} height={32} className="h-6 sm:h-8 w-auto" style={{ width: "auto" }} />
              <span className="mt-1 text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase text-white/40">Solutions</span>
              <a href="https://www.idnglobalassociates.com" target="_blank" rel="noopener noreferrer" className="mt-0.5 text-[8px] sm:text-[10px] font-medium uppercase text-white/40">A venture of idn global associates</a>
            </Link>
            <p className="max-w-md text-lg leading-relaxed text-gray-400">
              Building the next generation of AI-driven technology. We transform global enterprises through intelligent automation and futuristic engineering.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Platform</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-10 md:flex-row">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-xs font-medium text-gray-600">
              &copy; {new Date().getFullYear()} Zerovex Solutions. Engineered for Excellence.
            </p>
            <p className="text-xs text-gray-600/80">
                Powered by Web Connect
            </p>
          </div>
          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-600 transition-colors hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
          </div>
        </div>
      </div>
    </footer>
  );
}
