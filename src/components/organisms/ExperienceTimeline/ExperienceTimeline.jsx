import { Briefcase } from 'lucide-react'
import { experienceData } from '../../../data/experience'

export function ExperienceTimeline() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-blue-500">
          <Briefcase className="w-5 h-5" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Experiencia
        </h2>
      </div>

      <div className="relative pl-6 sm:pl-7 border-l border-slate-700/70 space-y-10 ml-2.5 sm:ml-3">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative group">
            <span
              className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-[#070A11] transition-transform duration-200 group-hover:scale-125"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                <span>{exp.company}</span>
                <span className="text-slate-500 font-normal mx-2">|</span>
                <span className="text-slate-300 font-medium text-sm sm:text-base">
                  {exp.location}
                </span>
              </h3>

              <span className="text-xs sm:text-sm text-slate-400 font-mono tracking-tight shrink-0">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>

            <div className="text-sm sm:text-base font-medium text-blue-400 mt-1 mb-4">
              {exp.role}
            </div>

            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <ul className="space-y-2.5 pl-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      {typeof resp === 'object' ? (
                        <>
                          <strong className="text-white/95 font-semibold">
                            {resp.title}:{' '}
                          </strong>
                          <span>{resp.description}</span>
                        </>
                      ) : (
                        resp
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
