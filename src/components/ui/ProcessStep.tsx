export interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
  deliverables?: string[];
  isLast?: boolean;
}

export default function ProcessStep({
  stepNumber,
  title,
  description,
  deliverables,
}: ProcessStepProps) {
  return (
    <div className="relative corp-card p-6 sm:p-8 flex flex-col justify-between h-full group bg-black border border-zinc-800 hover:border-[#E31B2B]/60 transition-all duration-300">
      <div className="space-y-4">
        {/* Step Badge & Number */}
        <div className="flex items-center justify-between">
          <span className="text-3xl sm:text-4xl font-bold font-mono text-[#E31B2B]">
            {stepNumber}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded bg-zinc-900">
            PHASE {stepNumber}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#E31B2B] transition-colors">
          {title}
        </h3>

        <div className="w-8 h-[2px] bg-[#E31B2B]" />

        <p className="text-sm text-zinc-400 leading-relaxed">
          {description}
        </p>

        {deliverables && deliverables.length > 0 && (
          <div className="pt-2 space-y-1.5">
            <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Outputs:</span>
            <ul className="text-xs text-zinc-300 space-y-1">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-[#E31B2B]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
