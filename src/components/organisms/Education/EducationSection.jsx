import { useState } from 'react'
import { GraduationCap, Award, Eye } from 'lucide-react'
import { educationData } from '../../../data/experience'
import { diplomaData } from '../../../data/diploma'
import { DiplomaModal } from '../DiplomaModal/DiplomaModal'

export function EducationSection() {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-blue-500">
          <GraduationCap className="w-5 h-5" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Formación académica
        </h2>
      </div>

      <div className="space-y-5">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0C1527]/70 border border-slate-800/80 transition-colors duration-200 hover:border-slate-700/80"
          >
            <div className="p-2 rounded-lg bg-slate-800/50 text-slate-400 shrink-0 mt-0.5">
              <Award className="w-4 h-4 text-blue-400" aria-hidden="true" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm sm:text-base font-semibold text-white/95 leading-snug">
                {edu.title}
              </h3>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
                <span>{edu.institution}</span>
                <span className="mx-2 text-slate-600">|</span>
                <span className="font-mono">{edu.startDate} – {edu.endDate}</span>
              </div>

              {edu.diplomaUrl && (
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => setIsDiplomaOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={isDiplomaOpen}
                    aria-controls="diploma-modal"
                    aria-label={`Ver diploma de ${edu.title} emitido por ${edu.institution} en visor emergente`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 text-blue-400 hover:text-blue-300 text-xs font-semibold tracking-wide transition-all active:scale-95 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{diplomaData.buttonLabel}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <DiplomaModal
        isOpen={isDiplomaOpen}
        onClose={() => setIsDiplomaOpen(false)}
      />
    </div>
  )
}

