import { ArrowRight } from 'lucide-react'
import { technologiesData } from '../../../data/technologies'
import { TechnologyCard } from '../../molecules/TechnologyCard/TechnologyCard'

export function TechnologyMarquee() {
  return (
    <section
      id="tecnologias"
      aria-label="Sección de Tecnologías"
      className="w-full max-w-[1200px] mx-auto pt-2 sm:pt-4 pb-10 sm:pb-14 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="flex items-center justify-between mb-5 sm:mb-7 px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Tecnologías
        </h2>

        {/* <a
          href="#habilidades"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-sky-400/90 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <span>Ver todas</span>
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a> */}
      </div>

      <div className="technologies-container relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)]">
        <div
          className="technologies-track py-1"
          role="region"
          aria-label="Carrusel continuo de tecnologías"
        >
          <div className="technologies-group flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4 shrink-0">
            {technologiesData.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isDecorative={false}
              />
            ))}
          </div>

          <div
            className="technologies-group flex items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4 shrink-0"
            aria-hidden="true"
          >
            {technologiesData.map((technology) => (
              <TechnologyCard
                key={`decorative-${technology.id}`}
                technology={technology}
                isDecorative={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
