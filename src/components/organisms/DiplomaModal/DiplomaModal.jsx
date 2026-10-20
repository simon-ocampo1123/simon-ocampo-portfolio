import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ZoomIn, ZoomOut, ExternalLink, Download, Award } from 'lucide-react'
import { diplomaData } from '../../../data/diploma'

export function DiplomaModal({
  isOpen,
  onClose,
  pdfUrl = diplomaData.pdfUrl,
  title = diplomaData.title,
  subtitle = diplomaData.subtitle,
  registrationInfo = diplomaData.registrationInfo,
  downloadFileName = diplomaData.downloadFileName,
}) {
  const [zoom, setZoom] = useState(1)
  const backdropRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      setZoom(1)
    }
  }, [isOpen])

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.6))
  const handleZoomReset = () => setZoom(1)

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={backdropRef}
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#070A11]/85 backdrop-blur-md overflow-hidden"
          id="diploma-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="diploma-modal-title"
          aria-describedby="diploma-modal-desc"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative flex flex-col w-full max-w-4xl h-[92vh] max-h-[880px] rounded-2xl bg-[#0B132B]/95 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden"
          >
            <header className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-[#091024]/90 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 shrink-0">
                  <Award className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 id="diploma-modal-title" className="text-xs sm:text-sm font-semibold text-white truncate">
                    {title}
                  </h3>
                  <p id="diploma-modal-desc" className="text-[11px] text-slate-400 hidden sm:block">
                    {subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
                <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-0.5">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.6}
                    aria-label={diplomaData.actions.zoomOutTooltip}
                    title={diplomaData.actions.zoomOutTooltip}
                    className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  >
                    <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleZoomReset}
                    aria-label={diplomaData.actions.zoomResetTooltip}
                    title={diplomaData.actions.zoomResetTooltip}
                    className="px-2 py-1 text-[11px] font-mono text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  >
                    {Math.round(zoom * 100)}%
                  </button>

                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={zoom >= 2.5}
                    aria-label={diplomaData.actions.zoomInTooltip}
                    title={diplomaData.actions.zoomInTooltip}
                    className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-medium transition-all"
                  title={diplomaData.actions.openInNewTab}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{diplomaData.actions.openInNewTab}</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={diplomaData.actions.closeTooltip}
                  title={diplomaData.actions.closeTooltip}
                  className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            <div
              className={`flex-1 min-h-0 w-full p-2 sm:p-4 bg-[#060B18] flex items-center justify-center ${zoom > 1 ? 'overflow-auto' : 'overflow-hidden'
                }`}
            >
              <div
                className="w-full h-full max-w-3xl rounded-xl overflow-hidden shadow-2xl bg-white border border-slate-700/50"
                style={{
                  transform: zoom !== 1 ? `scale(${zoom})` : 'none',
                  transformOrigin: 'top center',
                  transition: 'transform 0.15s ease-out',
                }}
              >
                <object
                  data={`${pdfUrl}#toolbar=0&navpanes=0&view=Fit`}
                  type="application/pdf"
                  className="w-full h-full border-0 bg-white"
                  aria-label={`${title} - Simon Ocampo`}
                >
                  <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&view=Fit`}
                    title={`${title} - Simon Ocampo`}
                    className="w-full h-full border-0 bg-white"
                    loading="eager"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center text-slate-800 bg-slate-100">
                      <p className="font-semibold text-sm mb-2 text-slate-900">
                        Tu navegador no soporta la previsualización directa de este archivo.
                      </p>
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Abrir diploma en pestaña nueva</span>
                      </a>
                    </div>
                  </iframe>
                </object>
              </div>
            </div>

            <footer className="px-4 py-2 border-t border-slate-800/80 bg-[#091024]/80 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{registrationInfo}</span>
              </div>
              <a
                href={pdfUrl}
                download={downloadFileName}
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 text-[11px]"
              >
                <Download className="w-3 h-3" />
                <span className="hidden sm:inline">{diplomaData.actions.downloadPdf}</span>
              </a>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

