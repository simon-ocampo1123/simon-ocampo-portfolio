export function TechnologyBadge({ name, isHighlighted = false, className = '' }) {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border transition-all duration-300 ${isHighlighted
          ? 'bg-slate-900/80 border-[#00F2FE]/40 shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:border-[#00F2FE] hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]'
          : 'bg-slate-900/40 border-white/5 hover:border-white/20'
        } ${className}`}
    >
      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  )
}
