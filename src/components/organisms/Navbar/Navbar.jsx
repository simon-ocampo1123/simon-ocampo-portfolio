import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navigationLinks, cvDownloadConfig, socialLinks } from '../../../data/navigation'
import { Icon } from '../../atoms/Icon/Icon'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const isClickNavigatingRef = useRef(false)
  const clickTimeoutRef = useRef(null)
  const lastScrollYRef = useRef(0)

  const [activeHref, setActiveHref] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return window.location.hash
    }
    return navigationLinks.find((link) => link.isActive)?.href || navigationLinks[0]?.href
  })

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (isClickNavigatingRef.current) return

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const navTop = 75
      const viewHeight = windowHeight - navTop

      if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveHref(navigationLinks[navigationLinks.length - 1].href)
        lastScrollYRef.current = scrollY
        return
      }

      if (scrollY <= 80) {
        setActiveHref(navigationLinks[0].href)
        lastScrollYRef.current = scrollY
        return
      }

      const isScrollingUp = scrollY < lastScrollYRef.current
      lastScrollYRef.current = scrollY

      const sections = navigationLinks
        .map((link) => {
          const id = link.href.replace('#', '')
          const el = document.getElementById(id)
          if (!el) return null

          const rect = el.getBoundingClientRect()
          const visibleTop = Math.max(rect.top, navTop)
          const visibleBottom = Math.min(rect.bottom, windowHeight)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)

          const maxPossible = Math.min(rect.height, viewHeight)
          const visibleRatio = maxPossible > 0 ? visibleHeight / maxPossible : 0

          const isEntirelyContained =
            rect.top >= navTop - 25 && rect.bottom <= windowHeight + 35

          const isTallHeaderVisible =
            rect.height > viewHeight &&
            rect.top >= navTop - 50 &&
            rect.top <= navTop + 180 &&
            visibleRatio >= 0.7

          const isComplete = isEntirelyContained || isTallHeaderVisible

          return {
            id,
            href: link.href,
            rect,
            visibleHeight,
            visibleRatio,
            isComplete,
          }
        })
        .filter(Boolean)

      if (sections.length === 0) return

      if (isScrollingUp) {
        for (const sec of sections) {
          if (sec.isComplete) {
            setActiveHref(sec.href)
            return
          }
        }

        let bestSec = sections[0]
        let maxVis = -1
        for (const sec of sections) {
          if (sec.visibleHeight > maxVis) {
            maxVis = sec.visibleHeight
            bestSec = sec
          }
        }
        if (maxVis > 60) {
          setActiveHref(bestSec.href)
        }
        return
      }

      const triggerLine = Math.min(220, Math.max(140, windowHeight * 0.25))
      let currentSectionHref = navigationLinks[0].href
      for (const section of sections) {
        if (section.rect.top <= triggerLine) {
          currentSectionHref = section.href
        }
      }
      setActiveHref(currentSectionHref)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    }
  }, [])

  const handleNavClick = (href) => {
    setActiveHref(href)
    setIsOpen(false)
    isClickNavigatingRef.current = true
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    clickTimeoutRef.current = setTimeout(() => {
      isClickNavigatingRef.current = false
    }, 850)
  }

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-[#070A11]/90 backdrop-blur-md border-b border-white/5 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <a
          href="#inicio"
          onClick={() => handleNavClick('#inicio')}
          className="flex items-center gap-2.5 group select-none shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          aria-label="Ir al inicio - Simon Ocampo"
        >
          <span className="text-xl sm:text-2xl font-bold text-[#38BDF8] tracking-tight group-hover:brightness-125 transition-all">
            SO
          </span>
          <span className="text-sm sm:text-base font-semibold text-white tracking-tight truncate max-w-[150px] xs:max-w-[220px] sm:max-w-none">
            Simon Ocampo
          </span>
        </a>

        <nav
          className="hidden lg:flex items-center px-4 py-2 rounded-full bg-[rgba(13,20,38,0.85)] border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20"
          aria-label="Navegación principal"
        >
          <div className="flex items-center gap-1 xl:gap-2">
            {navigationLinks.map((item) => {
              const isCurrent = activeHref === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3.5 py-1.5 text-xs xl:text-sm transition-all duration-200 select-none tracking-normal rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isCurrent
                    ? 'text-[#38BDF8] font-medium'
                    : 'text-[#94A3B8] hover:text-white font-normal'
                    }`}
                >
                  {isCurrent && (
                    <>
                      <motion.span
                        layoutId="navbar-hud-dot-top"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                        className="absolute -top-[11px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8,0_0_12px_#38BDF8]"
                      />
                      <motion.span
                        layoutId="navbar-hud-dot-bottom"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                        className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF,0_0_12px_#00F5FF]"
                      />
                    </>
                  )}
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={cvDownloadConfig.href}
            download={cvDownloadConfig.downloadFileName || 'CV-Simon-Ocampo.pdf'}
            target={cvDownloadConfig.target}
            rel="noopener noreferrer"
            aria-label="Descargar currículum vitae de Simon Ocampo en formato PDF"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B132B]/85 border-[1.5px] border-[#38BDF8]/60 text-white text-xs sm:text-sm font-semibold tracking-normal shadow-[0_0_14px_rgba(56,189,248,0.25)] hover:border-[#38BDF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:bg-[#0E1A38] active:scale-95 backdrop-blur-md transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Icon name="Download" size={15} className="text-white shrink-0" />
            <span>{cvDownloadConfig.label}</span>
          </a>

          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isOpen}
            aria-controls="mobile-dropdown-menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:text-white hover:border-blue-500/60 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer select-none"
          >
            {isOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-dropdown-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 w-full bg-[#070D1A] border-b border-slate-800/90 shadow-2xl shadow-black z-50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-4 max-h-[calc(100vh-70px)] overflow-y-auto">
              <nav className="flex flex-col gap-1.5" aria-label="Navegación móvil">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">
                  Navegación
                </span>
                {navigationLinks.map((item) => {
                  const isCurrent = activeHref === item.href
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isCurrent
                        ? 'bg-blue-600/20 text-sky-400 border border-blue-500/35 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                    >
                      <span>{item.label}</span>
                      {isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38BDF8]" />
                      )}
                    </a>
                  )
                })}
              </nav>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-4">
                <a
                  href={cvDownloadConfig.href}
                  download={cvDownloadConfig.downloadFileName || 'CV-Simon-Ocampo.pdf'}
                  target={cvDownloadConfig.target}
                  rel="noopener noreferrer"
                  aria-label="Descargar currículum vitae de Simon Ocampo en formato PDF"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                >
                  <Icon name="Download" size={16} />
                  <span>{cvDownloadConfig.label}</span>
                </a>

                <div className="flex items-center justify-center gap-6 pt-1">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="p-2.5 rounded-lg bg-slate-800/60 text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <Icon name={social.icon} size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
