import { Mail, ArrowUpRight, Send, Code2 } from 'lucide-react'
import { contactData } from '../../../data/contact'
import { Icon } from '../../atoms/Icon/Icon'

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-label="Sección de contacto"
      className="w-full max-w-[1200px] mx-auto pt-2 sm:pt-4 pb-6 sm:pb-8 px-4 sm:px-6 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#070D1A]/95 border border-slate-800/90 p-7 sm:p-11 lg:p-16 shadow-2xl shadow-black/60">
        <div
          className="absolute -top-24 right-1/4 w-[420px] h-[320px] bg-sky-500/8 blur-[120px] rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-28 left-10 w-[360px] h-[260px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.035] pointer-events-none hidden md:block"
          style={{
            backgroundImage:
              'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-14 items-center">
          <div className="flex flex-col items-start text-left max-w-[560px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1A33]/90 border border-sky-500/30 text-sky-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5 select-none shadow-[0_0_12px_rgba(56,189,248,0.1)]">
              <Send className="w-3.5 h-3.5 text-sky-400 -rotate-12" aria-hidden="true" />
              <span className="text-slate-200 tracking-wider font-bold">
                {contactData.badge.label}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-tight leading-[1.14] mb-4.5">
              <span>{contactData.title.main} </span>
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(56,189,248,0.2)]">
                {contactData.title.highlight}
              </span>
            </h2>

            <p className="text-[14px] sm:text-[15.5px] leading-[1.68] text-slate-300/90 max-w-[500px] mb-8">
              {contactData.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={`mailto:${contactData.email}`}
                aria-label={`Enviar correo a Simón Ocampo (${contactData.email})`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-[15px] shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070D1A]"
              >
                <Mail className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                <span>{contactData.actions.email}</span>
                <ArrowUpRight className="w-4 h-4 text-white/90 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={contactData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conectar con Simón Ocampo en LinkedIn (se abre en nueva pestaña)"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm sm:text-[15px] active:scale-[0.98] transition-all duration-200 select-none cursor-pointer backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070D1A]"
              >
                <Icon name="Linkedin" size={17} className="text-slate-300 shrink-0" aria-hidden="true" />
                <span>{contactData.actions.linkedin}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div
            className="relative flex flex-col items-center justify-center w-full max-w-[420px] mx-auto lg:ml-auto select-none pt-4 lg:pt-0"
            aria-hidden="true"
          >
            <div className="relative w-full rounded-2xl bg-[#091122]/95 border border-slate-700/70 p-5 shadow-2xl shadow-black/70 backdrop-blur-md transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/90" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/90" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/90" aria-hidden="true" />
                </div>
                <div className="flex items-center text-sky-400">
                  <Code2 className="w-4 h-4 text-sky-400" aria-hidden="true" />
                </div>
              </div>

              <div className="font-mono text-xs sm:text-[13px] leading-[1.7] text-slate-300">
                <div>
                  <span className="text-purple-400 font-semibold">const </span>
                  <span className="text-sky-300">{contactData.codeSnippet.variable} </span>
                  <span className="text-slate-400">= </span>
                  <span className="text-slate-400">[</span>
                </div>
                {contactData.codeSnippet.items.map((item, index) => (
                  <div key={item} className="pl-4">
                    <span className="text-emerald-400/95">&quot;{item}&quot;</span>
                    {index < contactData.codeSnippet.items.length - 1 && (
                      <span className="text-slate-400">,</span>
                    )}
                  </div>
                ))}
                <div>
                  <span className="text-slate-400">];</span>
                </div>
              </div>
            </div>

            <div className="relative w-full mt-7 pl-6 sm:pl-10 flex items-start justify-between">
              <svg
                className="w-7 h-7 text-slate-500/80 shrink-0 mt-1 -mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="6" y1="18" x2="2" y2="20" />
                <line x1="9" y1="14" x2="6" y2="9" />
                <line x1="14" y1="12" x2="13" y2="6" />
              </svg>

              <div className="flex-1 text-center font-sans italic text-slate-300/90 text-sm sm:text-[15px] leading-snug tracking-wide space-y-1">
                <div>{contactData.annotation.line1}</div>
                <div className="text-slate-400 text-xs sm:text-sm font-normal">+</div>
                <div>{contactData.annotation.line2}</div>
                <div className="text-slate-400 text-xs sm:text-sm font-normal">=</div>
                <div className="font-medium text-white/95">{contactData.annotation.line3}</div>
              </div>

              <svg
                className="w-16 h-12 text-slate-400/80 shrink-0 -mt-2"
                viewBox="0 0 70 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M58 8 C 48 30, 26 36, 12 40" />
                <path d="M14 32 L 10 41 L 20 40" strokeLinejoin="round" />
              </svg>
            </div>

            <div
              className="absolute -right-4 -bottom-4 w-11 h-11 rounded-xl bg-[#0F2244]/40 border border-sky-500/20 pointer-events-none hidden sm:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
