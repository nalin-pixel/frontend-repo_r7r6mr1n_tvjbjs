function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0b0f] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
        <div className="text-slate-300">
          <p className="text-white font-semibold">Meepo Media</p>
          <p className="text-sm text-slate-400">Meepo Media runs paid ads that generate real revenue.</p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#privacy" className="hover:text-white">Privacy Policy</a>
          <a href="#terms" className="hover:text-white">Terms of Service</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
