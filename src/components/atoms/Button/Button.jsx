/**
 * Átomo Button: Botón estilizado reutilizable según los tokens del diseño.
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded-xl select-none'

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  }

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#00D2FF] to-[#0066FF] text-white shadow-[0_0_25px_rgba(0,180,255,0.45)] hover:brightness-110 active:scale-95',
    secondary:
      'bg-[rgba(15,23,42,0.6)] text-[#E2E8F0] border border-white/15 backdrop-blur-md hover:border-white/30 hover:bg-slate-900/80 active:scale-95',
    outline:
      'border border-white/20 text-white/90 hover:bg-white/5 active:scale-95',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/5 active:scale-95',
  }

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
