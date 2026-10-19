import { socialLinks, navigationLinks } from '../../../data/navigation'
import { SocialLinks } from '../../molecules/SocialLinks/SocialLinks'

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-7 sm:py-8 px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 bg-[#070A11]/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center font-bold text-white text-sm">
            SO
          </div>
          <span className="font-semibold text-white tracking-tight text-sm">
            Simón Ocampo
          </span>
        </div>

        <nav
          aria-label="Enlaces del pie de página"
          className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 md:gap-x-6 gap-y-2 text-[11.5px] xs:text-[12px] sm:text-xs text-slate-400"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-0.5 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SocialLinks links={socialLinks} />
      </div>

      <div className="max-w-7xl mx-auto mt-5 pt-5 border-t border-white/5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Simón Ocampo. Todos los derechos reservados.
      </div>
    </footer>
  )
}
