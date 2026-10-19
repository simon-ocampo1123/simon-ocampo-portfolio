import { PortfolioLayout } from './components/templates/PortfolioLayout/PortfolioLayout'
import { HeroContent } from './components/organisms/Hero/HeroContent'
import { HeroVisual } from './components/organisms/Hero/HeroVisual'
import { TechnologyMarquee } from './components/organisms/TechnologyMarquee/TechnologyMarquee'
import { FeaturedProjects } from './components/organisms/FeaturedProjects/FeaturedProjects'
import { ExperienceSection } from './components/organisms/ExperienceSection/ExperienceSection'
import { ContactSection } from './components/organisms/ContactSection/ContactSection'

function App() {
  return (
    <PortfolioLayout>
      <section
        id="sobre-mi"
        className="relative pt-4 sm:pt-6 pb-10 sm:pb-14 scroll-mt-28"
      >
        <span id="inicio" className="absolute -top-28" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] -z-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.28fr_0.92fr] items-center gap-10 lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <HeroContent />
          </div>

          <div className="flex justify-center lg:justify-start">
            <HeroVisual />
          </div>
        </div>
      </section>

      <TechnologyMarquee />
      <FeaturedProjects />
      <ExperienceSection />
      <ContactSection />
    </PortfolioLayout>
  )
}

export default App
