import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ProcessStep from "@/components/ui/ProcessStep";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Zap, AlertTriangle, ShieldCheck } from "lucide-react";

interface ServiceData {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  heroSubtitle: string;
  problem: { title: string; desc: string }[];
  solution: string;
  whatWeDeliver: string[];
  features: { title: string; desc: string }[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

const serviceDetails: Record<string, ServiceData> = {
  "custom-development": {
    slug: "custom-development",
    number: "01",
    title: "Custom Development",
    tagline: "Technology built around the way your business works.",
    heroSubtitle: "Web & mobile applications, internal tools, and API systems tailored to your unique operational workflow.",
    problem: [
      { title: "Off-the-Shelf Limitations", desc: "Generic software forces your team into rigid workflows that limit productivity." },
      { title: "Scalability Bottlenecks", desc: "SaaS tools charge exponential per-user seats and lack custom integration support." },
      { title: "Data Security Risks", desc: "Third-party cloud tools expose proprietary business data to external compliance vulnerabilities." },
    ],
    solution: "ZeroVex Custom Development engineers bespoke software platforms specifically tailored to your exact business rules. You own 100% of the IP, code, and infrastructure.",
    whatWeDeliver: [
      "Enterprise Business Applications",
      "Custom Web Applications & Portals",
      "Internal Workflow & Operations Tools",
      "RESTful & GraphQL API Integrations",
      "Automated System Processing Engines",
      "Scalable Digital Products & SaaS Platforms",
    ],
    features: [
      { title: "Bespoke Architecture", desc: "Designed strictly around your proprietary business workflows." },
      { title: "High Scalability", desc: "Engineered to handle traffic spikes and enterprise data volume." },
      { title: "Strict TypeScript Code", desc: "Maintainable, type-safe codebase adhering to clean software standards." },
      { title: "Enterprise Security", desc: "Role-based access, encrypted APIs, and OWASP compliance." },
    ],
    benefits: [
      "Streamlines proprietary business workflows and reduces manual labor costs.",
      "Eliminates per-user SaaS license fees through owned software infrastructure.",
      "Provides unlimited customization freedom as your company expands.",
      "Delivers high-speed response times that boost user retention.",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Understanding data models, business rules, and technical requirements." },
      { step: "02", title: "Architecture", desc: "Designing system schemas, API contracts, and database structures." },
      { step: "03", title: "Engineering", desc: "Agile development sprints with continuous code reviews." },
      { step: "04", title: "QA & Deployment", desc: "Stress testing, security audits, and zero-downtime deployment." },
    ],
    faqs: [
      {
        question: "What tech stack do you use for custom development?",
        answer: "We specialize in modern engineering stacks including Next.js, Node.js, TypeScript, React, PostgreSQL, and scalable cloud hosting infrastructure.",
      },
      {
        question: "Do I own the source code after completion?",
        answer: "Yes, 100%. Upon completion, full Intellectual Property (IP) and repository ownership are transferred directly to your organization.",
      },
      {
        question: "How do you handle post-launch support and updates?",
        answer: "We offer ongoing Website & Application Maintenance retainers for continuous feature enhancement, security monitoring, and server optimization.",
      },
    ],
  },
  "web-development": {
    slug: "web-development",
    number: "02",
    title: "Website Development",
    tagline: "High-performance digital web experiences engineered to convert.",
    heroSubtitle: "Modern, responsive, and user-friendly websites designed for maximum conversion, speed, and brand authority.",
    problem: [
      { title: "Slow Loading Times", desc: "Heavy bloated page builders lead to high bounce rates and lost customer revenue." },
      { title: "Poor Mobile Experience", desc: "Unresponsive layouts alienate over 60% of web traffic accessing from mobile devices." },
      { title: "Low Conversion Rates", desc: "Confusing navigation and weak visual hierarchy fail to convert visitors into inquiries." },
    ],
    solution: "We engineer lightning-fast Next.js websites crafted with clean visual hierarchy, sub-second load times, and mobile-first design that turn visitors into high-intent clients.",
    whatWeDeliver: [
      "Custom Corporate Website Engineering",
      "Responsive Desktop & Mobile UI/UX Design",
      "Next.js SSR & Static Generation",
      "Headless Content Management Systems (CMS)",
      "Technical On-Page SEO Infrastructure",
      "High-Converting Landing Pages",
    ],
    features: [
      { title: "Pixel-Perfect Design", desc: "Crafted to match your exact corporate brand guidelines." },
      { title: "Sub-Second Load Speed", desc: "Optimized Core Web Vitals resulting in 90+ Lighthouse scores." },
      { title: "Mobile-First Design", desc: "Flawlessly tailored experience across smartphones, tablets, and desktops." },
      { title: "SEO-Ready Markup", desc: "Semantic HTML5 structure and JSON-LD schema for search engines." },
    ],
    benefits: [
      "Enhances brand prestige and credibility in front of high-value prospects.",
      "Improves conversion rates with intuitive calls-to-action and clear navigation.",
      "Ranks higher on Google search results through optimized web vitals.",
      "Easy content updates via integrated headless CMS platforms.",
    ],
    process: [
      { step: "01", title: "Wireframing", desc: "Mapping out page architecture, content hierarchy, and UX flows." },
      { step: "02", title: "Visual UI", desc: "Designing bold typography, color palettes, and component states." },
      { step: "03", title: "Frontend Build", desc: "Developing fast, semantic frontend code using Next.js & Tailwind CSS." },
      { step: "04", title: "Launch", desc: "Cross-browser testing, SEO check, domain configuration, and go-live." },
    ],
    faqs: [
      {
        question: "How long does a website development project take?",
        answer: "Typical website projects range from 2 to 4 weeks depending on scope, page count, and custom features.",
      },
      {
        question: "Will my website be mobile responsive?",
        answer: "Absolutely. Every website we build is thoroughly tested across iOS, Android, tablets, and high-resolution desktop screens.",
      },
      {
        question: "Can I edit text and images myself later?",
        answer: "Yes, we integrate user-friendly headless CMS solutions so your team can easily update content without touching code.",
      },
    ],
  },
  "graphic-design": {
    slug: "graphic-design",
    number: "03",
    title: "Graphic Design",
    tagline: "Visual identity systems that command authority.",
    heroSubtitle: "Brand identity, social media creatives, marketing assets, and cohesive visual systems that differentiate your business.",
    problem: [
      { title: "Inconsistent Brand Identity", desc: "Mismatched logos, colors, and fonts project an unorganized corporate image." },
      { title: "Low Marketing Engagement", desc: "Boring social media graphics get scrolled past without driving ad clicks." },
      { title: "Unprofessional Collateral", desc: "Low-quality raster images look pixelated on high-resolution screens and print." },
    ],
    solution: "ZeroVex Graphic Design builds complete brand visual systems, vector logos, social media creative packs, and marketing collateral designed to establish instant trust.",
    whatWeDeliver: [
      "Vector Logo & Corporate Symbol Design",
      "Comprehensive Brand Identity Books",
      "Social Media Creative Template Packs",
      "Digital Marketing & Display Ad Banners",
      "Pitch Decks & Presentation Assets",
      "Print Collateral & Merch Design",
    ],
    features: [
      { title: "Vector Precision", desc: "Infinite resolution vector graphics ready for print or high-res screens." },
      { title: "Cohesive Systems", desc: "Consistent color harmonies, typography specs, and visual rules." },
      { title: "High-Converting Creatives", desc: "Marketing banners built to draw clicks and engagement." },
      { title: "Commercial Licensing", desc: "Full ownership of all vector source files and final assets." },
    ],
    benefits: [
      "Establishes a memorable corporate visual identity that stands out.",
      "Maintains brand consistency across digital and print touchpoints.",
      "Drives higher ad engagement through striking visual design.",
      "Saves time with structured design templates for internal teams.",
    ],
    process: [
      { step: "01", title: "Moodboard", desc: "Defining aesthetic direction, color harmonies, and visual tone." },
      { step: "02", title: "Concepts", desc: "Drafting multiple design concepts for review and feedback." },
      { step: "03", title: "Refinement", desc: "Polishing selected design direction and perfecting typography." },
      { step: "04", title: "Deliverables", desc: "Exporting all vector formats (SVG, EPS, PNG, PDF, Brand Guide)." },
    ],
    faqs: [
      {
        question: "What file formats will I receive?",
        answer: "You receive editable vector source files (.AI, .EPS, .SVG) along with high-res PNG, JPG, and PDF print formats.",
      },
      {
        question: "Do you create social media templates?",
        answer: "Yes! We build reusable social media post & story template packs tailored for Instagram, LinkedIn, and X.",
      },
      {
        question: "How many revisions are included?",
        answer: "We include iterative revision cycles during design concept phases until complete satisfaction is reached.",
      },
    ],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    tagline: "Data-driven marketing that turns reach into revenue.",
    heroSubtitle: "Strategies that improve reach, search engine visibility, lead acquisition, and long-term customer engagement.",
    problem: [
      { title: "Invisible Search Rankings", desc: "Failing to appear on Page 1 of Google costs you valuable organic buyer traffic." },
      { title: "Wasted Advertising Spend", desc: "Running un-targeted ad campaigns leads to high click costs with low conversion." },
      { title: "Stagnant Audience Growth", desc: "Social media posts without strategy fail to build brand loyalty or sales." },
    ],
    solution: "We combine Search Engine Optimization (SEO), performance marketing campaigns, social media management, and data analytics to systematically drive qualified traffic to your website.",
    whatWeDeliver: [
      "Technical & On-Page SEO Optimization",
      "Search Engine Keyword Ranking Strategy",
      "Social Media Marketing (Instagram, X, LinkedIn)",
      "Performance Ad Campaign Strategy",
      "Content Marketing & Strategic Copywriting",
      "Lead Generation & Conversion Analytics",
    ],
    features: [
      { title: "Data-Driven Strategy", desc: "Decisions backed by conversion data, keyword volume, and analytics." },
      { title: "Targeted Audience Reach", desc: "Engaging your exact buyer demographic with relevant messaging." },
      { title: "Transparent Metrics", desc: "Clear reporting on traffic growth, click-through rates, and leads." },
      { title: "Full-Funnel Nurturing", desc: "Guiding prospects from brand awareness to signed contract." },
    ],
    benefits: [
      "Increases organic search traffic and high-intent customer inquiries.",
      "Builds an active, loyal brand community across social media platforms.",
      "Maximizes Marketing ROI through strategic keyword and ad targeting.",
      "Provides measurable analytics for clear business strategy adjustments.",
    ],
    process: [
      { step: "01", title: "Audit", desc: "Analyzing current market standing, competitors, and growth bottlenecks." },
      { step: "02", title: "Strategy", desc: "Formulating targeted SEO, content, and promotional roadmap." },
      { step: "03", title: "Execution", desc: "Launching content campaigns, optimizing keywords, and running ads." },
      { step: "04", title: "Analyze", desc: "Tracking conversions and continuously refining marketing performance." },
    ],
    faqs: [
      {
        question: "How soon can I expect results from SEO?",
        answer: "SEO is a long-term growth engine. Initial rankings improve within 4 to 8 weeks, with compound growth over 3 to 6 months.",
      },
      {
        question: "Which social media platforms do you manage?",
        answer: "We cover Instagram, X (Twitter), LinkedIn, Facebook, and YouTube based on where your target buyers active.",
      },
      {
        question: "Do you provide monthly reporting?",
        answer: "Yes! Every month you receive a comprehensive performance report detailing traffic, conversion metrics, and recommendations.",
      },
    ],
  },
  "ecommerce": {
    slug: "ecommerce",
    number: "05",
    title: "E-Commerce",
    tagline: "Seamless online stores optimized for maximum sales.",
    heroSubtitle: "Online stores and digital commerce experiences engineered for fast checkout, mobile sales, and business scaling.",
    problem: [
      { title: "High Cart Abandonment", desc: "Clunky multi-step checkouts frustrate buyers and cause lost sales." },
      { title: "Slow Mobile Storefronts", desc: "Heavy e-commerce themes load slowly on mobile networks, killing impulse buys." },
      { title: "Inventory Misalignment", desc: "Manual stock management causes overselling and inventory chaos." },
    ],
    solution: "ZeroVex E-Commerce builds custom storefronts featuring single-page checkout, instant mobile load times, global payment gateways, and automated inventory sync.",
    whatWeDeliver: [
      "Custom E-Commerce Storefront Development",
      "Payment Gateway Integration (Stripe, PayPal, Local)",
      "Automated Order & Inventory Sync Systems",
      "Mobile Shopping Experience Optimization",
      "Checkout Flow & Cart Conversion Optimization",
      "Custom Product Taxonomy & Filter Systems",
    ],
    features: [
      { title: "Frictionless Checkout", desc: "Streamlined single-page checkout that boosts completed sales." },
      { title: "Multi-Currency Support", desc: "Global commerce support with real-time currency conversion." },
      { title: "Automated Stock Sync", desc: "Automated inventory tracking preventing overselling." },
      { title: "PCI Security Protocol", desc: "Encrypted checkout flows protecting buyer credit card data." },
    ],
    benefits: [
      "Drives higher average order values through strategic UI product placement.",
      "Reduces cart abandonment with fast-loading checkout pages.",
      "Automates order notifications, shipping updates, and invoicing.",
      "Scales seamlessly during flash sales and peak shopping periods.",
    ],
    process: [
      { step: "01", title: "Catalog Plan", desc: "Structuring product taxonomy, variants, and payment requirements." },
      { step: "02", title: "UX Design", desc: "Designing intuitive product detail pages, filters, and checkout screens." },
      { step: "03", title: "Integration", desc: "Connecting payment processors, tax rules, and shipping gateways." },
      { step: "04", title: "Test & Launch", desc: "Conducting test transactions, load testing, and live release." },
    ],
    faqs: [
      {
        question: "Can you integrate local payment options?",
        answer: "Yes, we integrate all major international (Stripe, PayPal, Credit Card) and local payment gateways.",
      },
      {
        question: "Can I manage product inventory myself?",
        answer: "Yes, we provide an intuitive admin dashboard where you can easily add products, adjust prices, and track orders.",
      },
      {
        question: "Is the store mobile friendly?",
        answer: "Over 60% of e-commerce sales happen on mobile. We design with a mobile-first approach for maximum conversion.",
      },
    ],
  },
  "website-maintenance": {
    slug: "website-maintenance",
    number: "06",
    title: "Website Maintenance",
    tagline: "24/7 security, speed, and continuous developer support.",
    heroSubtitle: "Security monitoring, daily backups, speed optimization, and ongoing technical support for peace of mind.",
    problem: [
      { title: "Security Vulnerabilities", desc: "Outdated packages expose your website to malware hacks and data breaches." },
      { title: "Performance Degradation", desc: "Unmaintained databases and un-optimized images slow your site down over time." },
      { title: "Unexpected Server Downtime", desc: "Websites crash without warning, resulting in lost inquiries and broken trust." },
    ],
    solution: "ZeroVex Website Maintenance provides 24/7 proactive security monitoring, daily automated cloud backups, continuous speed tuning, and dedicated developer support.",
    whatWeDeliver: [
      "24/7 Real-Time Security & Uptime Monitoring",
      "Daily Automated Offsite Cloud Backups",
      "Framework, Dependency & Security Updates",
      "Core Web Vitals & Speed Optimization",
      "Emergency Malware Removal & Site Restoration",
      "Dedicated Monthly Developer Support Hours",
    ],
    features: [
      { title: "Proactive Security", desc: "Continuous firewall scanning preventing unauthorized access." },
      { title: "Daily Backups", desc: "One-click instant restore points stored securely in offsite cloud." },
      { title: "Speed Maintenance", desc: "Regular cache clearing, database optimization, and image compression." },
      { title: "Priority Support", desc: "Direct access to our developers for quick fixes and updates." },
    ],
    benefits: [
      "Prevents costly website downtime and security breaches.",
      "Ensures your web application always performs at peak speed.",
      "Frees up internal company time to focus on core business operations.",
      "Provides peace of mind with guaranteed response times.",
    ],
    process: [
      { step: "01", title: "Audit", desc: "Auditing existing website security, code dependencies, and performance." },
      { step: "02", title: "Backup Setup", desc: "Configuring automated daily backup routines and restore protocols." },
      { step: "03", title: "Patching", desc: "Updating core packages, fixing vulnerabilities, and tuning cache." },
      { step: "04", title: "Monitoring", desc: "Ongoing real-time monitoring with monthly health status reports." },
    ],
    faqs: [
      {
        question: "What happens if my website goes down?",
        answer: "Our automated monitoring alerts us instantly. We initiate immediate restoration protocols from our daily backups.",
      },
      {
        question: "Are content updates included in maintenance?",
        answer: "Yes, monthly maintenance retainers include dedicated developer hours for minor content updates, banners, and text changes.",
      },
      {
        question: "Can I upgrade or cancel my maintenance plan anytime?",
        answer: "Yes, our maintenance plans operate on flexible monthly terms with zero long-term lock-in.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = serviceDetails[slug];
    if (!service) return { title: "Service Not Found" };
    return {
      title: `${service.title} | ZeroVex Solutions`,
      description: service.heroSubtitle,
    };
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO */}
      <PageHero
        eyebrow={`SERVICE ${service.number}`}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* 2. THE PROBLEM */}
      <ScrollReveal className="container-custom space-y-8">
        <SectionHeading
          eyebrow="THE CHALLENGE"
          title="Common Bottlenecks Businesses Face"
          subtitle="Without modern tailored digital systems, companies encounter severe operational frictions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.problem.map((prob, idx) => (
            <div key={idx} className="corp-card p-6 border-l-4 border-l-amber-500 space-y-2 bg-white border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="h-4 w-4" />
                <span>{prob.title}</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* 3. OUR SOLUTION & 4. WHAT WE DELIVER */}
      <ScrollReveal className="container-custom space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="OUR SOLUTION"
              title="Tailored Engineering Built For Commercial Impact"
            />
            <p className="text-base text-zinc-600 leading-relaxed">
              {service.solution}
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn-brand-red text-xs group">
                <span>Inquire About {service.title}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 corp-card p-8 sm:p-10 border-l-4 border-l-[#E31B2B] bg-white border border-zinc-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 font-heading">
              What We Deliver
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {service.whatWeDeliver.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700">
                  <CheckCircle className="h-4 w-4 text-[#E31B2B] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </ScrollReveal>

      {/* 5. KEY FEATURES */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-200">
        <ScrollReveal className="container-custom space-y-12">
          <SectionHeading
            eyebrow="SPECIFICATIONS"
            title="Core Architecture & Features"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feat, idx) => (
              <div key={idx} className="corp-card p-6 space-y-3 bg-white border border-zinc-200 shadow-sm hover:border-[#E31B2B]/60 transition-all">
                <div className="w-10 h-10 rounded bg-red-50 border border-red-100 text-[#E31B2B] flex items-center justify-center font-mono font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 font-heading">{feat.title}</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 6. BENEFITS */}
      <ScrollReveal className="container-custom space-y-12">
        <SectionHeading
          eyebrow="COMMERCIAL VALUE"
          title="Direct Business Benefits"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.benefits.map((b, idx) => (
            <div key={idx} className="corp-card p-6 flex items-start gap-4 bg-white border border-zinc-200 shadow-sm">
              <div className="p-2.5 rounded bg-red-50 border border-red-100 text-[#E31B2B] shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed pt-1">{b}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* 7. OUR PROCESS */}
      <ScrollReveal className="container-custom space-y-12">
        <SectionHeading
          eyebrow="EXECUTION TIMELINE"
          title="Our Execution Process"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((p, idx) => (
            <ProcessStep
              key={idx}
              stepNumber={p.step}
              title={p.title}
              description={p.desc}
            />
          ))}
        </div>
      </ScrollReveal>

      {/* 8. FAQ */}
      <ScrollReveal className="container-custom space-y-12 max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="SERVICE FAQ"
          title="Frequently Asked Questions"
          centered
        />

        <FAQAccordion items={service.faqs} />
      </ScrollReveal>

      {/* 9. CTA */}
      <ScrollReveal className="container-custom">
        <div className="corp-card p-10 sm:p-14 bg-gradient-to-br from-zinc-50 via-white to-red-50/40 border-2 border-[#E31B2B] text-center space-y-6 shadow-xl">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#E31B2B] uppercase font-semibold">
              READY TO KICK OFF?
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 font-heading">
              Elevate Your Business With {service.title}
            </h2>
            <p className="text-sm text-zinc-600">
              Speak directly with our digital architects to map out your project details.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn-brand-red text-xs py-3.5 px-8 group inline-flex items-center justify-center">
                <span>Start Project Inquiry</span>
                <ArrowUpRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

