import { TechnologyIcon } from '../../atoms/TechnologyIcon/TechnologyIcon'

export function TechnologyCard({ technology, isDecorative = false }) {
  const { name, icon, color, description } = technology

  return (
    <div
      role={isDecorative ? undefined : 'article'}
      aria-label={isDecorative ? undefined : `${name}: ${description}`}
      tabIndex={isDecorative ? -1 : 0}
      title={`${name} - ${description}`}
      className="group relative flex flex-col items-center justify-center shrink-0 w-[112px] h-[112px] sm:w-[124px] sm:h-[124px] p-2.5 sm:p-3 rounded-2xl bg-gradient-to-b from-[#0F1B33]/90 via-[#0C1527]/90 to-[#09101E]/95 border border-white/8 hover:border-slate-500/40 hover:bg-[#132242] transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A11] cursor-default"
    >
      <div
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex items-center justify-center h-[46px] sm:h-[52px] w-full mb-1">
        <TechnologyIcon
          name={icon}
          color={color}
          size={38}
          className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        />
      </div>

      <span className="text-[11px] sm:text-[13px] font-medium text-slate-300 group-hover:text-white tracking-tight text-center truncate max-w-full px-1 transition-colors">
        {name}
      </span>
    </div>
  )
}
