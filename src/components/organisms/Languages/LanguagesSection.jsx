import { Globe } from 'lucide-react'
import { languagesData } from '../../../data/experience'

export function LanguagesSection() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-blue-500">
          <Globe className="w-5 h-5" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Idiomas
        </h2>
      </div>

      <div className="p-4 sm:p-5 rounded-xl bg-[#0C1527]/70 border border-slate-800/80 space-y-4">
        {languagesData.map((lang) => (
          <div key={lang.id} className="flex items-center justify-between gap-3 sm:gap-4">
            <span className="w-20 sm:w-24 text-xs sm:text-sm font-medium text-slate-300">
              {lang.name}
            </span>

            <div className="flex-1 h-2 rounded-full bg-slate-800/90 overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500"
                style={{ width: `${lang.level}%` }}
                role="progressbar"
                aria-valuenow={lang.level}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={`Nivel de ${lang.name}: ${lang.levelLabel}`}
              />
            </div>

            <span className="w-24 sm:w-28 text-right text-xs sm:text-sm font-medium text-slate-400">
              {lang.levelLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
