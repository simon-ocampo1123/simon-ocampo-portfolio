/**
 * Átomo Badge: Etiqueta pequeña informativa.
 * @param {'emerald' | 'pill' | 'default'} variant
 */
export function Badge({ children, variant = 'default', className = '', ...props }) {
  const variantStyles = {
    emerald:
      'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.35)] text-[#10B981]',
    pill:
      'inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-normal bg-white/5 border border-white/10 text-[#94A3B8]',
    default:
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700',
  }

  return (
    <span
      className={`${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
