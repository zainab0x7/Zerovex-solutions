import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Phone, Mail, Globe, Instagram, Twitter } from "lucide-react";

export const metadata = {
  title: "Contact Us | ZeroVex Solutions",
  description: "Get in touch with ZeroVex Solutions. Send an inquiry or connect directly via WhatsApp, email, or social media.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-20">
      
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's Build Something Great."
        subtitle="Have a new project in mind, need website maintenance, or want to consult on digital marketing? Send us an inquiry below or message us directly."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <ScrollReveal className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="DIRECT CHANNELS"
              title="Speak Directly With Our Team"
              subtitle="We respond to all inquiries within 24 hours."
            />

            <div className="space-y-4">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923412270393"
                target="_blank"
                rel="noopener noreferrer"
                className="corp-card p-6 flex items-center gap-4 hover:border-[#E31B2B] transition-all block group"
              >
                <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">WHATSAPP / DIRECT CALL</span>
                  <span className="text-base font-bold text-gray-900 group-hover:text-[#E31B2B] transition-colors">
                    +92 341 2270393
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:zerovexsolutions@gmail.com"
                className="corp-card p-6 flex items-center gap-4 hover:border-[#E31B2B] transition-all block group"
              >
                <div className="p-3 rounded bg-red-50 border border-red-200 text-[#E31B2B] group-hover:bg-[#E31B2B] group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">OFFICIAL EMAIL</span>
                  <span className="text-base font-bold text-gray-900 group-hover:text-[#E31B2B] transition-colors">
                    zerovexsolutions@gmail.com
                  </span>
                </div>
              </a>

              {/* Website Card */}
              <a
                href="https://www.zerovexsolutions.site"
                target="_blank"
                rel="noopener noreferrer"
                className="corp-card p-6 flex items-center gap-4 hover:border-[#E31B2B] transition-all block group"
              >
                <div className="p-3 rounded bg-gray-100 border border-gray-200 text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-mono block">WEBSITE</span>
                  <span className="text-base font-bold text-gray-900 group-hover:text-[#E31B2B] transition-colors">
                    www.zerovexsolutions.site
                  </span>
                </div>
              </a>

            </div>

            {/* Social Channels */}
            <div className="corp-card p-6 space-y-4">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Follow Our Social Channels</h4>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://instagram.com/zerovexsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 hover:text-black hover:border-[#E31B2B] transition-all"
                >
                  <Instagram className="h-4 w-4 text-[#E31B2B]" />
                  <span>@zerovexsolutions</span>
                </a>

                <a
                  href="https://x.com/zerovexsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 hover:text-black hover:border-[#E31B2B] transition-all"
                >
                  <Twitter className="h-4 w-4 text-[#E31B2B]" />
                  <span>@zerovexsolution</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
}
