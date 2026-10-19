import { Navbar } from '../../organisms/Navbar/Navbar'
import { Footer } from '../../organisms/Footer/Footer'

export function PortfolioLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#070A11] text-white selection:bg-[#00D2FF]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 right-0 w-[650px] h-[550px] bg-gradient-to-br from-[#0284C7]/25 via-[#1D4ED8]/20 to-transparent blur-[130px] rounded-full" />

        <div className="absolute -top-20 left-1/3 w-[500px] h-[350px] bg-[#0284C7]/12 blur-[140px] rounded-full" />

        <div className="absolute top-[40%] right-[-5%] w-[450px] h-[450px] bg-[#4338CA]/10 blur-[150px] rounded-full" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-blue-600 focus:text-white focus:font-semibold focus:rounded-xl focus:shadow-2xl focus:shadow-blue-600/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#070A11] transition-all"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main
        id="main-content"
        tabIndex="-1"
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 sm:pt-2 pb-0 focus:outline-none"
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}
