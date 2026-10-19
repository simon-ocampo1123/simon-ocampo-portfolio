import { projectsData } from '../../../data/projects'
import { ProjectCard } from '../../molecules/ProjectCard/ProjectCard'

export function FeaturedProjects({ viewAllHref = null }) {
  const isTwoProjects = projectsData.length === 2

  return (
    <section
      id="proyectos"
      aria-label="Proyectos destacados"
      className="w-full max-w-[1200px] mx-auto pt-2 sm:pt-4 pb-10 sm:pb-14 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="flex items-center justify-between mb-8 sm:mb-10 px-2 sm:px-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Proyectos destacados
          </h2>
        </div>

        {viewAllHref && (
          <a
            href={viewAllHref}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:underline"
          >
            <span>Ver todos los proyectos</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>

      <div
        className={
          isTwoProjects
            ? 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[960px] mx-auto'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
        }
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
