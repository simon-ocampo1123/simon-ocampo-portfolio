import { Icon } from '../../atoms/Icon/Icon'

export function SectionHeading({
  title,
  icon,
  actionLabel,
  actionHref,
  className = '',
}) {
  return (
    <div className={`flex items-center justify-between mb-8 ${className}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#38BDF8]">
            <Icon name={icon} size={20} />
          </div>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      </div>

      {actionLabel && actionHref && (
        <a
          href={actionHref}
          className="text-xs sm:text-sm font-medium text-slate-400 hover:text-[#38BDF8] flex items-center gap-1 transition-colors"
        >
          {actionLabel}
          <Icon name="ArrowRight" size={14} />
        </a>
      )}
    </div>
  )
}
