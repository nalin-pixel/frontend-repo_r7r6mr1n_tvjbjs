import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-tight">Meepo Media</a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#results" className="hover:text-white">Results</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-400">Book Call</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="services"><Services /></div>
        <div id="results"><Results /></div>
        <div id="about"><About /></div>
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
