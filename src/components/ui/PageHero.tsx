import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  eyebrow = "ZERO VEX SOLUTIONS",
  title,
  subtitle,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-black border-b border-zinc-800 overflow-hidden">
      {/* Decorative Red Line Grid Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31B2B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 space-y-6">
        {breadcrumbs && (
          <div className="pb-2">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#E31B2B]" />
            <span className="text-xs font-mono tracking-widest text-[#E31B2B] uppercase font-semibold">
              {eyebrow}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
            {title}
          </h1>

          <div className="w-16 h-[2px] bg-[#E31B2B]" />

          {subtitle && (
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl pt-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
