"use client";

import ScrollCounter from "@/components/ui/ScrollCounter";

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export default function StatsBlock({ stats }: { stats?: StatItem[] }) {
  // Reusable data structure ready for real project numbers
  const defaultStats: StatItem[] = [
    { value: 0, suffix: "+", label: "Projects Delivered", sublabel: "Custom software & platforms" },
    { value: 0, suffix: "+", label: "Digital Solutions", sublabel: "Web apps & automation" },
    { value: 6, suffix: "", label: "Service Divisions", sublabel: "Design, dev, marketing" },
    { value: 100, suffix: "%", label: "Support Commitment", sublabel: "Long-term partnership" },
  ];

  const items = stats || defaultStats;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="corp-card p-6 text-center space-y-2 relative overflow-hidden group hover:border-[#E31B2B]/60 transition-all bg-black border border-zinc-800"
        >
          <div className="flex items-center justify-center gap-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            <ScrollCounter end={item.value} suffix={item.suffix} />
          </div>
          <div className="w-8 h-[2px] bg-[#E31B2B] mx-auto group-hover:w-12 transition-all duration-300" />
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            {item.label}
          </h4>
          {item.sublabel && (
            <p className="text-xs text-zinc-400">
              {item.sublabel}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
