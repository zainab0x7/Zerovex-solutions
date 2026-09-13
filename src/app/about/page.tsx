import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FoundersSection from "@/components/founders/FoundersSection";
import FounderStoryPillars from "@/components/home/FounderStoryPillars";
import MissionVision from "@/components/home/MissionVision";
import CompanyValues from "@/components/home/CompanyValues";
import IndustriesSection from "@/components/home/IndustriesSection";
import BusinessJourneyTimeline from "@/components/home/BusinessJourneyTimeline";
import DarkCompanyCTA from "@/components/ui/DarkCompanyCTA";
import { companyInfo } from "@/data/companyInfo";

export const metadata = {
  title: "About Us | ZeroVex Solutions - Digital Solutions Partner",
  description: "ZeroVex Solutions combines software development, visual design, and digital strategy to help businesses build a stronger digital presence.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0 pb-0">
      
      {/* 1. HERO */}
      <PageHero
        eyebrow="ABOUT ZERO VEX SOLUTIONS"
        title="Digital Solutions Partner"
        subtitle={companyInfo.positioningStatement}
        breadcrumbs={[{ label: "About" }]}
      />

      {/* 2. OUR STORY */}
      <section className="py-20 bg-white border-b border-gray-100">
        <ScrollReveal className="container-custom">
          <div className="corp-card p-8 sm:p-12 lg:p-16 border-l-4 border-l-[#E31B2B] space-y-6">
            <SectionHeading
              eyebrow="OUR STORY"
              title="Building Digital Solutions That Serve Real Business Goals"
            />
            
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              <p>
                ZeroVex Solutions was founded with a clear directive: to build dependable, high-quality digital solutions that directly support business growth. Rather than treating design, technology, and strategy as disconnected pieces, we bring them together under one disciplined execution framework.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Whether you need a custom web application, a complete website rebuild, an e-commerce platform, or a refined corporate visual identity, our team is dedicated to engineering products that are fast, intuitive, and built for commercial longevity.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. WHY ZEROVEX */}
      <ScrollReveal>
        <FounderStoryPillars />
      </ScrollReveal>

      {/* 4. FOUNDER & CO-FOUNDER */}
      <ScrollReveal>
        <FoundersSection />
      </ScrollReveal>

      {/* 5. MISSION & 6. VISION */}
      <ScrollReveal>
        <MissionVision />
      </ScrollReveal>

      {/* 7. VALUES */}
      <ScrollReveal>
        <CompanyValues />
      </ScrollReveal>

      {/* 8. INDUSTRIES */}
      <ScrollReveal>
        <IndustriesSection />
      </ScrollReveal>

      {/* 9. HOW WE WORK */}
      <ScrollReveal>
        <BusinessJourneyTimeline />
      </ScrollReveal>

      {/* 10. CTA */}
      <ScrollReveal>
        <DarkCompanyCTA />
      </ScrollReveal>

    </div>
  );
}
