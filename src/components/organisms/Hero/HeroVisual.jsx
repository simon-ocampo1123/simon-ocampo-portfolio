import defaultProfileImage from '../../../assets/images/simon-profile.jpg'

export function HeroVisual({ imageSrc = defaultProfileImage }) {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[400px] mx-auto select-none">
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-[36px] blur-2xl -z-10 pointer-events-none" />

      <div className="relative aspect-[4/5] w-full rounded-[28px] sm:rounded-[32px] border border-white/10 bg-[#0B1224]/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/60">
        <img
          src={imageSrc}
          alt="Fotografía profesional de Simon Ocampo, Desarrollador de Software"
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
          loading="eager"
        />
      </div>
    </div>
  )
}
