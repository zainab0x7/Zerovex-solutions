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
          </div>
        </div>
      </div>
    </footer>
  );
}
