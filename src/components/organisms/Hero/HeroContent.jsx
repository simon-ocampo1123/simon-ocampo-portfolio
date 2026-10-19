import { heroData } from '../../../data/hero'
import { socialLinks } from '../../../data/navigation'
import { Icon } from '../../atoms/Icon/Icon'

export function HeroContent() {
  return (
    <div className="flex flex-col items-start text-left max-w-[580px] z-10">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.35)] shadow-[0_0_12px_rgba(16,185,129,0.15)] select-none mb-3.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981] shadow-[0_0_8px_#10B981]" />
        </span>
        <span className="text-xs sm:text-[13px] font-medium text-[#10B981] tracking-wide">
          {heroData.availability.text}
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08] sm:leading-[1.04] text-left mb-3.5 sm:mb-4">
        <span className="block text-[#F5F7FB]">
          {heroData.title.greeting}
        </span>
        <span className="block bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
          {heroData.title.name}
        </span>
      </h1>

      <p className="text-sm sm:text-lg lg:text-[18px] font-medium text-[#D1D5DB] tracking-normal leading-snug mb-3.5">
        <span className="block">{heroData.subtitle.line1}</span>
        <span className="block">{heroData.subtitle.line2}</span>
      </p>

      <p className="text-[13.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.6] sm:leading-[1.65] text-[#B8C3D4] max-w-[530px] mb-6">
        {heroData.description}
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6">
        <a
          href={heroData.actions.primary.href}
          aria-label="Ir a la sección de proyectos destacados de Simón Ocampo"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[15px] font-semibold shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A11]"
        >
          <span>{heroData.actions.primary.text}</span>
          <Icon name={heroData.actions.primary.icon} size={18} className="text-white" aria-hidden="true" />
        </a>

        <a
          href={heroData.actions.secondary.href}
          aria-label="Ir a la sección de contacto para enviar un mensaje"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[12px] bg-[rgba(15,23,42,0.6)] border border-white/15 text-[#F5F7FB] text-[15px] font-medium hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all duration-200 select-none backdrop-blur-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A11]"
        >
          <Icon name={heroData.actions.secondary.icon} size={18} className="text-[#B8C3D4]" aria-hidden="true" />
          <span>{heroData.actions.secondary.text}</span>
        </a>
      </div>

      <div className="flex items-center gap-5 sm:gap-6 pt-1">
        {socialLinks.map((social) => {
          const isEmail = social.name.toLowerCase() === 'email'
          const label = isEmail
            ? 'Enviar correo electrónico a Simón Ocampo'
            : `Visitar perfil de Simón Ocampo en ${social.name} (se abre en nueva pestaña)`

          return (
            <a
              key={social.name}
              href={social.url}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="text-[#94A3B8] hover:text-[#38BDF8] hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            >
              <Icon name={social.icon} size={24} aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
