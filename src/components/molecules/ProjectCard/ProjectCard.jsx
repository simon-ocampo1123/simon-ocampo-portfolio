import { ArrowUpRight, Globe } from 'lucide-react'
import { Icon } from '../../atoms/Icon/Icon'

const CARD_VARIATIONS = [
  {
    rotate: 'rotate-[1deg]',
    offset: 'translate-x-[6px] translate-y-[3px]',
    hoverOffset: 'group-hover/card:translate-x-[7px] group-hover/card:translate-y-[3px]',
  },
  {
    rotate: 'rotate-[-0.8deg]',
    offset: 'translate-x-[5px] translate-y-[2px]',
    hoverOffset: 'group-hover/card:translate-x-[6px] group-hover/card:translate-y-[2px]',
  },
  {
    rotate: 'rotate-[0.6deg]',
    offset: 'translate-x-[6px] translate-y-[2.5px]',
    hoverOffset: 'group-hover/card:translate-x-[7px] group-hover/card:translate-y-[2.5px]',
  },
]

export function ProjectCard({ project, index = 0 }) {
  const {
    id,
    title,
    description,
    image,
    technologies = [],
    liveUrl,
    repositoryUrl,
    availability,
  } = project

  const variation = CARD_VARIATIONS[index % CARD_VARIATIONS.length] || CARD_VARIATIONS[0]

  return (
    <div className="relative group/card h-full pr-2.5 pb-2.5">
      <div
        className={`absolute inset-0 rounded-2xl bg-[#080E1C] border border-slate-800/80 pointer-events-none transition-all duration-200 ease-out origin-center ${variation.rotate} ${variation.offset} ${variation.hoverOffset} group-hover/card:border-slate-700/80 motion-reduce:transform-none`}
        aria-hidden="true"
      />

      <article className="relative z-10 flex flex-col h-full rounded-2xl bg-[#0C1527] border border-slate-800/90 group-hover/card:border-slate-700/90 transition-all duration-200 group-hover/card:-translate-y-0.5 shadow-md shadow-black/30 overflow-hidden motion-reduce:transform-none">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A101E] border-b border-slate-800/80">
          {image ? (
            <img
              src={image}
              alt={`Captura del proyecto ${title}`}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/card:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-[#0E172B] to-[#0A101E]">
              <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/40 flex items-center justify-center text-slate-400 mb-2.5">
                <Globe className="w-5 h-5 text-slate-400" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium text-slate-400 tracking-wide">
                {availability || title}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white/95 tracking-tight group-hover/card:text-white transition-colors">
              {title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mt-2.5">
              {description}
            </p>
          </div>

          {technologies && technologies.length > 0 && (
            <ul
              role="list"
              aria-label={`Tecnologías utilizadas en el proyecto ${title}`}
              className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 mt-auto list-none p-0"
            >
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-[#0E172B] border border-slate-700/70 text-slate-300 group-hover/card:border-slate-600 transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {(liveUrl || repositoryUrl || availability) && (
            <div className="pt-2 flex items-center gap-4 flex-wrap">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar sitio web en producción del proyecto ${title} (se abre en nueva pestaña)`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>Ver proyecto</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-150 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}

              {repositoryUrl && (
                <a
                  href={repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código fuente del proyecto ${title} en GitHub (se abre en nueva pestaña)`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <Icon name="Github" size={16} aria-hidden="true" />
                  <span>Ver código</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 opacity-70 transition-transform duration-150 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}

              {!liveUrl && !repositoryUrl && availability && (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
                  <span>{availability}</span>
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
