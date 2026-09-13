interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
          <span className="w-6 h-[2px] bg-[#E31B2B]" />
          <span className="text-xs font-semibold tracking-widest text-[#E31B2B] uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
        {title}
      </h2>
      <div className={`w-12 h-[2px] bg-[#E31B2B] ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
