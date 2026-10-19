import { ExperienceTimeline } from '../ExperienceTimeline/ExperienceTimeline'
import { EducationSection } from '../Education/EducationSection'
import { LanguagesSection } from '../Languages/LanguagesSection'

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      aria-label="Experiencia profesional y formación"
      className="w-full max-w-[1200px] mx-auto pt-2 sm:pt-4 pb-10 sm:pb-14 px-2 sm:px-4 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.85fr] gap-12 lg:gap-16 items-start">
        <div className="w-full">
          <ExperienceTimeline />
        </div>

        <div className="w-full flex flex-col gap-10 sm:gap-12">
          <EducationSection />
          <LanguagesSection />
        </div>
      </div>
    </section>
  )
}
